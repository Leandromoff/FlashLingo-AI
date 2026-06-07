import { GoogleGenAI, Type, Modality } from "@google/genai";
import { FlashcardData, SupportedLanguage } from "../types";

// Initialize the Gemini client
// Always use process.env.GEMINI_API_KEY for the Gemini API.
const ai = new GoogleGenAI({ apiKey: process.env.GEMINI_API_KEY });

// Helper: Wait function for delays
const wait = (ms: number) => new Promise(resolve => setTimeout(resolve, ms));

// Helper: Robust JSON cleaning and parsing
const cleanAndParseJSON = (text: string): any => {
  if (!text) throw new Error("Empty response from AI");
  
  let cleanText = text.trim();
  
  // Find the first '[' or '{' to ignore any intro text
  const firstBracket = cleanText.search(/\[|\{/);
  const lastBracket = Math.max(cleanText.lastIndexOf(']'), cleanText.lastIndexOf('}'));

  if (firstBracket !== -1 && lastBracket !== -1 && lastBracket > firstBracket) {
    cleanText = cleanText.substring(firstBracket, lastBracket + 1);
  } else {
      // Fallback: Remove markdown code blocks if the regex above didn't catch it
      if (cleanText.startsWith("```")) {
        cleanText = cleanText.replace(/^```(json)?\n?/, "").replace(/\n?```$/, "");
      }
  }
  
  try {
    return JSON.parse(cleanText);
  } catch (e) {
    console.error("JSON Parse Error. Raw Text:", text, "Cleaned Text:", cleanText);
    throw new Error("Failed to parse AI response as JSON");
  }
};

// Helper: Retry Logic for API calls (Exponential Backoff)
const retryApiCall = async <T>(fn: () => Promise<T>, retries = 3, baseDelay = 2000): Promise<T> => {
  let lastError: any;
  
  for (let i = 0; i < retries; i++) {
    try {
      return await fn();
    } catch (error: any) {
      lastError = error;
      // Check for 429 (Resource Exhausted) or 503 (Service Unavailable)
      const isRateLimit = error?.status === 429 || error?.code === 429 || 
                          error?.message?.includes('429') || error?.message?.includes('quota') || 
                          error?.message?.includes('RESOURCE_EXHAUSTED');
      const isServerOverload = error?.status === 503 || error?.code === 503;

      if (isRateLimit || isServerOverload) {
        if (i < retries - 1) {
          const delayTime = baseDelay * Math.pow(2, i); // 2s, 4s, 8s
          console.warn(`Gemini API Busy (429/503). Retrying in ${delayTime}ms... (Attempt ${i + 1}/${retries})`);
          await wait(delayTime);
          continue;
        }
      }
      // If it's not a retryable error or we ran out of retries, throw
      throw error;
    }
  }
  throw lastError;
};

const getCefrDescription = (level: number): string => {
  switch (level) {
    case 1: return "CEFR A1 (Elementary) - Basic survival vocabulary, simple concrete nouns/verbs.";
    case 2: return "CEFR A2 (Pre-intermediate) - Routine descriptions, common social phrases.";
    case 3: return "CEFR B1 (Intermediate) - Opinions, unexpected situations, connected text.";
    case 4: return "CEFR B1+ (Intermediate Plus) - Specific technical terms, more complex abstract ideas.";
    case 5: return "CEFR B2 (Upper Intermediate) - Idioms, phrasal verbs, native-level nuance and slang.";
    case 6: return "CEFR C1 (Advanced) - Complex, structured, and implicit meaning. Academic or professional fluency.";
    default: return "CEFR A1 (Elementary)";
  }
};

export const generateFlashcards = async (
  topic: string, 
  excludedWords: string[] = [], 
  language: SupportedLanguage = 'en'
): Promise<FlashcardData[]> => {
  return retryApiCall(async () => {
    try {
      const modelId = "gemini-3-flash-preview";
      const itemCount = 10;
      
      let targetLangName = 'English';
      let phoneticExample = "'night' -> 'nait', 'teacher' -> 'tí-tcher'";
      
      switch (language) {
        case 'es':
          targetLangName = 'Spanish';
          phoneticExample = "'calle' -> 'cá-ie', 'gente' -> 'rrên-te'";
          break;
        case 'it':
          targetLangName = 'Italian';
          phoneticExample = "'ciao' -> 'tcháu', 'grazie' -> 'grá-tsie', 'gelato' -> 'dje-lá-to'";
          break;
        default:
          targetLangName = 'English';
      }
      
      // Format excluded words for the prompt with stricter language
      const excludedList = excludedWords.length > 0 
        ? `STRICT NEGATIVE FILTER: You MUST NOT generate any of the following words (duplicates are forbidden): [${excludedWords.join(', ')}]. If a word from this list comes to mind, discard it and choose another.` 
        : 'No exclusions for this deck.';

      const prompt = `You are an expert ${targetLangName} curriculum designer acting as an API. 
      Create a flashcard deck for the topic: "${topic}".
      
      TARGET LEVEL: CEFR A2-B1 (Pre-intermediate to Intermediate)
      MODE: GENERAL TOPIC
      
      ${excludedList}

      TASK:
      1. Generate a list of ${itemCount} DISTINCT ${targetLangName} items specifically matching the TARGET LEVEL and MODE described above.
      2. VERIFY against the NEGATIVE FILTER. Do not output words that are in the excluded list.
      3. For each item, provide:
         - Portuguese translation.
         - Standard Phonetic pronunciation (IPA).
         - Portuguese-style phonetic transcription (how a Brazilian would read it to sound like ${targetLangName}, e.g., ${phoneticExample}).
         - The item split into syllables (e.g., ["fan", "tas", "tic"]).
         - An example sentence in ${targetLangName} (matching the complexity of the Target Level).
         - Portuguese translation of the sentence.
         - A short Grammatical Explanation in Portuguese (explain why this word/phrase is used here, or the rule behind it).`;

      const response = await ai.models.generateContent({
        model: modelId,
        contents: prompt,
        config: {
          responseMimeType: "application/json",
          responseSchema: {
            type: Type.ARRAY,
            items: {
              type: Type.OBJECT,
              properties: {
                word: { type: Type.STRING, description: `The ${targetLangName} word, phrase, or grammar point` },
                translation: { type: Type.STRING, description: "Portuguese translation" },
                pronunciation: { type: Type.STRING, description: "Standard pronunciation (IPA)" },
                portuguesePhonetic: { type: Type.STRING, description: `Phonetic transcription adapted for Portuguese speakers learning ${targetLangName}` },
                syllables: { 
                  type: Type.ARRAY, 
                  items: { type: Type.STRING },
                  description: "Array of syllables for the word"
                },
                exampleSentence: { type: Type.STRING, description: `Example sentence in ${targetLangName}` },
                exampleTranslation: { type: Type.STRING, description: "Portuguese translation of the example sentence" },
                grammarExplanation: { type: Type.STRING, description: "Brief grammatical explanation or usage note in Portuguese" },
              },
              required: ["word", "translation", "pronunciation", "portuguesePhonetic", "syllables", "exampleSentence", "exampleTranslation", "grammarExplanation"],
            },
          },
        },
      });

      const text = response.text;
      const rawData = cleanAndParseJSON(text);

      // Add IDs to the cards
      const cards: FlashcardData[] = rawData.map((item: any, index: number) => ({
        id: `card-${Date.now()}-${index}`,
        word: item.word,
        translation: item.translation,
        pronunciation: item.pronunciation,
        portuguesePhonetic: item.portuguesePhonetic || item.pronunciation, // Fallback
        syllables: item.syllables || [item.word], // Fallback
        exampleSentence: item.exampleSentence,
        exampleTranslation: item.exampleTranslation,
        grammarExplanation: item.grammarExplanation
      }));

      return cards;

    } catch (error) {
      console.error("Error generating flashcards:", error);
      throw error;
    }
  });
};

// Audio Context Singleton and Cache
let audioContext: AudioContext | null = null;
// Updated Cache: Key is now "language_text" to prevent cross-language cache collisions
const audioCache = new Map<string, AudioBuffer>();

// --- PERSISTENT CACHE (IndexedDB) ---
const DB_NAME = 'FlashLingoAudioCache';
const STORE_NAME = 'audios';
const DB_VERSION = 1;

const openDB = (): Promise<IDBDatabase> => {
  return new Promise((resolve, reject) => {
    const request = indexedDB.open(DB_NAME, DB_VERSION);
    request.onupgradeneeded = () => {
      const db = request.result;
      if (!db.objectStoreNames.contains(STORE_NAME)) {
        db.createObjectStore(STORE_NAME);
      }
    };
    request.onsuccess = () => resolve(request.result);
    request.onerror = () => reject(request.error);
  });
};

const getFromDB = async (key: string): Promise<Uint8Array | null> => {
  try {
    const db = await openDB();
    return new Promise((resolve, reject) => {
      const transaction = db.transaction(STORE_NAME, 'readonly');
      const store = transaction.objectStore(STORE_NAME);
      const request = store.get(key);
      request.onsuccess = () => resolve(request.result || null);
      request.onerror = () => reject(request.error);
    });
  } catch (e) {
    console.debug('IndexedDB read skipped:', e);
    return null;
  }
};

const saveToDB = async (key: string, data: Uint8Array): Promise<void> => {
  try {
    const db = await openDB();
    return new Promise((resolve, reject) => {
      const transaction = db.transaction(STORE_NAME, 'readwrite');
      const store = transaction.objectStore(STORE_NAME);
      const request = store.put(data, key);
      request.onsuccess = () => resolve();
      request.onerror = () => reject(request.error);
    });
  } catch (e) {
    console.warn('IndexedDB write error:', e);
  }
};

const getAudioContext = () => {
  if (!audioContext) {
    audioContext = new (window.AudioContext || (window as any).webkitAudioContext)({ sampleRate: 24000 });
  }
  return audioContext;
};

// Helper: Create AudioBuffer from raw PCM bytes (Int16)
const createBufferFromBytes = (ctx: AudioContext, bytes: Uint8Array): AudioBuffer => {
  const dataInt16 = new Int16Array(bytes.buffer);
  const buffer = ctx.createBuffer(1, dataInt16.length, 24000);
  const channelData = buffer.getChannelData(0);
  
  // Normalize Int16 to Float32 [-1.0, 1.0]
  for (let i = 0; i < dataInt16.length; i++) {
    channelData[i] = dataInt16[i] / 32768.0;
  }
  return buffer;
};

// Helper: Clean text for speech synthesis to prevent slash or special symbols reading
const cleanTextForSpeech = (text: string): string => {
  if (!text) return "";
  // Ex: "to talk / speak about" -> "to talk , speak about"
  let cleaned = text.replace(/\s*\/\s*/g, " , ");
  // Replace arrows (→, ->, =>, ⇒) with a comma for a natural pause, preventing TTS from reading "seta" (Portuguese) or "arrow" (English)
  cleaned = cleaned.replace(/\s*(?:-->|->|==>|=>|→|⇒)\s*/g, " , ");
  return cleaned;
};

// Helper: Fetch and Cache Audio Buffer (Does not play)
const fetchAndCacheAudio = async (text: string, language: SupportedLanguage = 'en'): Promise<AudioBuffer> => {
  const cleanedText = cleanTextForSpeech(text);
  const ctx = getAudioContext();

  if (!cleanedText || !cleanedText.trim()) {
    throw new Error("Text is empty");
  }

  // Generate cache key
  const cacheKey = `${language}_${cleanedText}`;

  // 1. Check Memory Cache first
  if (audioCache.has(cacheKey)) {
    return audioCache.get(cacheKey)!;
  }

  // 2. Check Persistent Cache (IndexedDB)
  const persistedBytes = await getFromDB(cacheKey);
  if (persistedBytes) {
    const buffer = createBufferFromBytes(ctx, persistedBytes);
    audioCache.set(cacheKey, buffer);
    return buffer;
  }

  // 3. Request audio generation from Gemini with Retry
  const response = await retryApiCall(async () => {
    return await ai.models.generateContent({
      model: "gemini-2.5-flash-preview-tts",
      contents: [
        {
          parts: [{ text: cleanedText }],
        }
      ],
      config: {
        responseModalities: [Modality.AUDIO],
        speechConfig: {
          voiceConfig: {
            prebuiltVoiceConfig: { voiceName: 'Kore' },
          },
        },
      },
    });
  });

  const base64Audio = response.candidates?.[0]?.content?.parts?.[0]?.inlineData?.data;
  
  if (!base64Audio) {
    throw new Error("Audio data not found in response");
  }

  // Decode Base64 to raw binary
  const binaryString = atob(base64Audio);
  const len = binaryString.length;
  const bytes = new Uint8Array(len);
  for (let i = 0; i < len; i++) {
    bytes[i] = binaryString.charCodeAt(i);
  }

  // Create AudioBuffer
  const buffer = createBufferFromBytes(ctx, bytes);

  // Store in Memory Cache
  audioCache.set(cacheKey, buffer);
  
  // Store in Persistent Cache (IndexedDB) - fire and forget
  saveToDB(cacheKey, bytes).catch(err => console.warn("Failed to persist audio:", err));
  
  return buffer;
};

// --- CLOUD AUDIO (GEMINI) ---
// Added onPlayStart callback to provide duration
export const playCloudAudio = async (
  text: string, 
  onPlayStart?: (duration: number) => void, 
  playbackRate: number = 1.0,
  language: SupportedLanguage = 'en'
): Promise<void> => {
  try {
    const buffer = await fetchAndCacheAudio(text, language);
    if (onPlayStart) {
      // Adjusted duration = actual duration / rate (e.g., 10s / 0.5 = 20s)
      onPlayStart(buffer.duration / playbackRate);
    }
    await playBuffer(getAudioContext(), buffer, playbackRate);
  } catch (error) {
    console.error("Gemini TTS Error (showing local fallback):", error);
    // Fallback if cloud fails even after retries
    await playLocalAudio(text, language, onPlayStart, undefined, playbackRate);
  }
};

// --- PRELOAD CLOUD AUDIO (Background Fetch) ---
export const preloadCloudAudio = (text: string, language: SupportedLanguage = 'en'): void => {
  if (!text) return;
  // Fire and forget - triggers fetch to populate cache
  fetchAndCacheAudio(text, language).catch(err => {
    // Silently fail for preloads, legitimate plays will handle errors
    console.debug("Preload failed (silent):", err);
  });
};

// --- LOCAL AUDIO (BROWSER) ---

// GLOBAL VARIABLE TO PREVENT GARBAGE COLLECTION
// This is critical for Chrome/Safari compatibility. If the utterance is not stored globally,
// the garbage collector might delete it while speaking, causing audio stutter or stop.
let activeUtterance: SpeechSynthesisUtterance | null = null;

export const playLocalAudio = (
  text: string, 
  language: SupportedLanguage = 'en', 
  onPlayStart?: (duration: number) => void,
  onBoundary?: (charIndex: number) => void,
  playbackRate: number = 1.0
): Promise<void> => {
  return new Promise((resolve) => {
    if (!('speechSynthesis' in window)) {
      console.warn("Browser does not support speech synthesis");
      resolve();
      return;
    }

    // Cancel any ongoing speech
    window.speechSynthesis.cancel();
    // Force clear reference
    activeUtterance = null;

    const cleanedText = cleanTextForSpeech(text);
    const utterance = new SpeechSynthesisUtterance(cleanedText);
    
    // Keep reference alive
    activeUtterance = utterance;
    
    // Set locale based on language
    switch (language) {
      case 'es': utterance.lang = 'es-ES'; break;
      case 'it': utterance.lang = 'it-IT'; break;
      default: utterance.lang = 'en-US';
    }

    // Adjust rate based on parameter. 
    // Standard rate is 1. We might want to cap it to reasonable limits.
    // 0.9 is our base "normal", so we multiply by playbackRate.
    utterance.rate = 0.9 * playbackRate;

    // Estimate duration for local audio since browser doesn't provide it reliably beforehand
    // Average speaking rate ~ 150wpm => ~2.5 words/sec. 
    // We increase per-word time estimate for mobile/slower fallback animation
    // ~0.5s per word + buffer
    const wordCount = cleanedText.split(/\s+/).length;
    const baseDuration = Math.max(1.0, wordCount * 0.5); 
    const estimatedDuration = baseDuration / playbackRate;

    utterance.onstart = () => {
      if (onPlayStart) {
        onPlayStart(estimatedDuration);
      }
    };
    
    // Boundary event for Karaoke
    if (onBoundary) {
      utterance.onboundary = (event) => {
        // charIndex typically returns the index of the character in the text
        onBoundary(event.charIndex);
      };
    }

    // Handle end of speech to resolve promise
    utterance.onend = () => {
      activeUtterance = null; // Clean up reference
      resolve();
    };

    utterance.onerror = (e) => {
      // Ignore 'interrupted' as it's a normal behavior when we cancel previous speech
      if (e.error !== 'interrupted') {
        console.error("Speech Error:", e.error);
      }
      activeUtterance = null; // Clean up reference
      resolve(); // Resolve even on error to unblock UI
    };

    window.speechSynthesis.speak(utterance);
  });
};

// Helper to encode AudioBuffer to WAV Blob
const encodeWAV = (samples: Float32Array, sampleRate: number = 24000): Blob => {
  const buffer = new ArrayBuffer(44 + samples.length * 2);
  const view = new DataView(buffer);

  const writeString = (v: DataView, offset: number, string: string) => {
    for (let i = 0; i < string.length; i++) {
      v.setUint8(offset + i, string.charCodeAt(i));
    }
  };

  writeString(view, 0, 'RIFF');
  view.setUint32(4, 36 + samples.length * 2, true);
  writeString(view, 8, 'WAVE');
  writeString(view, 12, 'fmt ');
  view.setUint32(16, 16, true);
  view.setUint16(20, 1, true);
  view.setUint16(22, 1, true);
  view.setUint32(24, sampleRate, true);
  view.setUint32(28, sampleRate * 2, true);
  view.setUint16(32, 2, true);
  view.setUint16(34, 16, true);
  writeString(view, 36, 'data');
  view.setUint32(40, samples.length * 2, true);

  let offset = 44;
  for (let i = 0; i < samples.length; i++, offset += 2) {
    let s = Math.max(-1, Math.min(1, samples[i]));
    view.setInt16(offset, s < 0 ? s * 0x8000 : s * 0x7FFF, true);
  }

  return new Blob([buffer], { type: 'audio/wav' });
};

// Helper to play an existing buffer
const playBuffer = (ctx: AudioContext, buffer: AudioBuffer, playbackRate: number = 1.0): Promise<void> => {
  return new Promise(async (resolve) => {
    if (playbackRate !== 1.0) {
      // Use HTMLAudioElement to preserve pitch for slow/fast playback
      const blob = encodeWAV(buffer.getChannelData(0), buffer.sampleRate);
      const url = URL.createObjectURL(blob);
      const audio = new Audio(url);
      
      audio.preservesPitch = true;
      if ('webkitPreservesPitch' in audio) {
        (audio as any).webkitPreservesPitch = true;
      }
      if ('mozPreservesPitch' in audio) {
        (audio as any).mozPreservesPitch = true;
      }

      audio.playbackRate = playbackRate;
      
      audio.onended = () => {
        URL.revokeObjectURL(url);
        resolve();
      };
      
      audio.onerror = () => {
        URL.revokeObjectURL(url);
        resolve();
      };
      
      audio.play().catch(e => {
        console.error("Audio playback failed", e);
        URL.revokeObjectURL(url);
        resolve();
      });
      return;
    }

    // Ensure context is running (required by browsers after user gesture)
    if (ctx.state === 'suspended') {
      await ctx.resume();
    }

    const source = ctx.createBufferSource();
    source.buffer = buffer;
    
    // Apply playback rate
    source.playbackRate.value = playbackRate;

    source.connect(ctx.destination);
    
    source.onended = () => {
      resolve();
    };

    source.start();
  });
};