import { GoogleGenAI, Type, Modality } from "@google/genai";
import { FlashcardData, PronunciationResult, SupportedLanguage, StoryData } from "../types";

// Initialize the Gemini client
// Note: The API key is expected to be in process.env.API_KEY
const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });

// Helper: Wait function for delays
const wait = (ms: number) => new Promise(resolve => setTimeout(resolve, ms));

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
    case 1: return "CEFR A1 (Beginner) - Basic survival vocabulary, simple concrete nouns/verbs.";
    case 2: return "CEFR A2 (Elementary) - Routine descriptions, common social phrases.";
    case 3: return "CEFR B1 (Intermediate) - Opinions, unexpected situations, connected text.";
    case 4: return "CEFR B1+ (Upper Intermediate) - Specific technical terms, more complex abstract ideas.";
    case 5: return "CEFR B2 (Advanced) - Idioms, phrasal verbs, native-level nuance and slang.";
    case 6: return "CEFR C1 (Proficient) - Complex, structured, and implicit meaning. Academic or professional fluency.";
    default: return "CEFR A1 (Beginner)";
  }
};

export const generateFlashcards = async (topic: string, difficultyLevel: number = 1, excludedWords: string[] = [], language: SupportedLanguage = 'en'): Promise<FlashcardData[]> => {
  return retryApiCall(async () => {
    try {
      const modelId = "gemini-2.5-flash";
      
      let targetLangName = 'English';
      let phoneticExample = "'night' -> 'nait', 'teacher' -> 'tí-tcher'";
      
      switch (language) {
        case 'es':
          targetLangName = 'Spanish';
          phoneticExample = "'calle' -> 'cá-ie', 'gente' -> 'rrên-te'";
          break;
        case 'fr':
          targetLangName = 'French';
          phoneticExample = "'oui' -> 'ui', 'boulangerie' -> 'bu-lan-je-rri', 'maison' -> 'me-zon'";
          break;
        case 'it':
          targetLangName = 'Italian';
          phoneticExample = "'ciao' -> 'tcháu', 'grazie' -> 'grá-tsie', 'gelato' -> 'dje-lá-to'";
          break;
        case 'de':
          targetLangName = 'German';
          phoneticExample = "'hallo' -> 'rá-lo', 'danke' -> 'dán-ke', 'nacht' -> 'nárr-t'";
          break;
        default:
          targetLangName = 'English';
      }
      
      // Format excluded words for the prompt with stricter language
      const excludedList = excludedWords.length > 0 
        ? `STRICT NEGATIVE FILTER: You MUST NOT generate any of the following words (duplicates are forbidden): [${excludedWords.join(', ')}]. If a word from this list comes to mind, discard it and choose another.` 
        : 'No exclusions for this deck.';

      const levelStrategy = getCefrDescription(difficultyLevel);

      const prompt = `You are an expert ${targetLangName} curriculum designer acting as an API. 
      Create a vocabulary deck for the topic: "${topic}".
      
      TARGET LEVEL: ${levelStrategy}
      
      ${excludedList}

      TASK:
      1. Generate a list of 10 DISTINCT ${targetLangName} words or short phrases specifically matching the TARGET LEVEL described above.
      2. VERIFY against the NEGATIVE FILTER. Do not output words that are in the excluded list.
      3. For each word, provide:
         - Portuguese translation.
         - Standard Phonetic pronunciation (IPA).
         - Portuguese-style phonetic transcription (how a Brazilian would read it to sound like ${targetLangName}, e.g., ${phoneticExample}).
         - The word split into syllables (e.g., ["fan", "tas", "tic"]).
         - An example sentence in ${targetLangName} (matching the complexity of the Target Level).
         - Portuguese translation of the sentence.`;

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
                word: { type: Type.STRING, description: `The ${targetLangName} word or phrase (MUST NOT be in excluded list)` },
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
              },
              required: ["word", "translation", "pronunciation", "portuguesePhonetic", "syllables", "exampleSentence", "exampleTranslation"],
            },
          },
        },
      });

      const text = response.text;
      if (!text) {
        throw new Error("No data received from Gemini.");
      }

      const rawData = JSON.parse(text);

      // Add IDs to the cards
      const cards: FlashcardData[] = rawData.map((item: any, index: number) => ({
        id: `card-${Date.now()}-${index}`,
        word: item.word,
        translation: item.translation,
        pronunciation: item.pronunciation,
        portuguesePhonetic: item.portuguesePhonetic || item.pronunciation, // Fallback
        syllables: item.syllables || [item.word], // Fallback
        exampleSentence: item.exampleSentence,
        exampleTranslation: item.exampleTranslation
      }));

      return cards;

    } catch (error) {
      console.error("Error generating flashcards:", error);
      throw error;
    }
  });
};

export const generateContextualStory = async (words: string[], language: SupportedLanguage = 'en'): Promise<StoryData> => {
    return retryApiCall(async () => {
        const modelId = "gemini-2.5-flash";
        
        let targetLangName = 'English';
        switch (language) {
          case 'es': targetLangName = 'Spanish'; break;
          case 'fr': targetLangName = 'French'; break;
          case 'it': targetLangName = 'Italian'; break;
          case 'de': targetLangName = 'German'; break;
        }

        const prompt = `
        You are a creative writer for language learners.
        
        TASK:
        Write a SHORT, FUNNY, and COHERENT story or dialogue (50-100 words) in ${targetLangName} that incorporates ALL of the following words:
        [${words.join(', ')}]

        REQUIREMENTS:
        1. The story must make sense but should be amusing.
        2. Highlight the usage of the provided words naturally.
        3. Provide a Title in ${targetLangName}.
        4. Provide a full translation of the story in PORTUGUESE (Brazil).

        CRITICAL: The 'translation' field MUST be in Portuguese (Brazil), NOT in ${targetLangName}.

        Return JSON.
        `;

        const response = await ai.models.generateContent({
            model: modelId,
            contents: prompt,
            config: {
                responseMimeType: "application/json",
                responseSchema: {
                    type: Type.OBJECT,
                    properties: {
                        title: { type: Type.STRING },
                        content: { type: Type.STRING, description: `The story text in ${targetLangName}` },
                        translation: { type: Type.STRING, description: "The full story translated to Portuguese (Brazil)" }
                    },
                    required: ["title", "content", "translation"]
                }
            }
        });

        const text = response.text;
        if (!text) throw new Error("No data received for story.");
        
        return JSON.parse(text) as StoryData;
    });
};

// Audio Context Singleton and Cache
let audioContext: AudioContext | null = null;
const audioCache = new Map<string, AudioBuffer>();

const getAudioContext = () => {
  if (!audioContext) {
    audioContext = new (window.AudioContext || (window as any).webkitAudioContext)({ sampleRate: 24000 });
  }
  return audioContext;
};

// Helper: Fetch and Cache Audio Buffer (Does not play)
const fetchAndCacheAudio = async (text: string): Promise<AudioBuffer> => {
  const ctx = getAudioContext();

  if (!text || !text.trim()) {
    throw new Error("Text is empty");
  }

  // Check Cache first
  if (audioCache.has(text)) {
    return audioCache.get(text)!;
  }

  // Request audio generation from Gemini with Retry
  const response = await retryApiCall(async () => {
    return await ai.models.generateContent({
      model: "gemini-2.5-flash-preview-tts",
      contents: [
        {
          parts: [{ text }],
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

  // Create AudioBuffer from PCM data (Int16)
  const dataInt16 = new Int16Array(bytes.buffer);
  const buffer = ctx.createBuffer(1, dataInt16.length, 24000);
  const channelData = buffer.getChannelData(0);
  
  // Normalize Int16 to Float32 [-1.0, 1.0]
  for (let i = 0; i < dataInt16.length; i++) {
    channelData[i] = dataInt16[i] / 32768.0;
  }

  // Store in cache
  audioCache.set(text, buffer);
  
  return buffer;
};

// --- CLOUD AUDIO (GEMINI) ---
// Added onPlayStart callback to provide duration
export const playCloudAudio = async (text: string, onPlayStart?: (duration: number) => void, playbackRate: number = 1.0): Promise<void> => {
  try {
    const buffer = await fetchAndCacheAudio(text);
    if (onPlayStart) {
      // Adjusted duration = actual duration / rate (e.g., 10s / 0.5 = 20s)
      onPlayStart(buffer.duration / playbackRate);
    }
    await playBuffer(getAudioContext(), buffer, playbackRate);
  } catch (error) {
    console.error("Gemini TTS Error (showing local fallback):", error);
    // Fallback if cloud fails even after retries
    await playLocalAudio(text, 'en', onPlayStart, undefined, playbackRate);
  }
};

// --- PRELOAD CLOUD AUDIO (Background Fetch) ---
export const preloadCloudAudio = (text: string): void => {
  if (!text) return;
  // Fire and forget - triggers fetch to populate cache
  fetchAndCacheAudio(text).catch(err => {
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

    const utterance = new SpeechSynthesisUtterance(text);
    
    // Keep reference alive
    activeUtterance = utterance;
    
    // Set locale based on language
    switch (language) {
      case 'es': utterance.lang = 'es-ES'; break;
      case 'fr': utterance.lang = 'fr-FR'; break;
      case 'it': utterance.lang = 'it-IT'; break;
      case 'de': utterance.lang = 'de-DE'; break;
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
    const wordCount = text.split(/\s+/).length;
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
      console.error("Speech Error:", e);
      activeUtterance = null; // Clean up reference
      resolve(); // Resolve even on error to unblock UI
    };

    window.speechSynthesis.speak(utterance);
  });
};

// Helper to play an existing buffer
const playBuffer = (ctx: AudioContext, buffer: AudioBuffer, playbackRate: number = 1.0): Promise<void> => {
  return new Promise(async (resolve) => {
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

// --- PRONUNCIATION EVALUATION ---

// Helper to convert Blob to Base64 string
const blobToBase64 = (blob: Blob): Promise<string> => {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.readAsDataURL(blob);
    reader.onloadend = () => {
      const base64data = reader.result as string;
      // Remove the Data URL prefix (e.g., "data:audio/webm;base64,")
      const base64Content = base64data.split(',')[1];
      resolve(base64Content);
    };
    reader.onerror = reject;
  });
};

export const evaluatePronunciation = async (audioBlob: Blob, targetText: string, language: SupportedLanguage = 'en'): Promise<PronunciationResult> => {
  try {
    const base64Audio = await blobToBase64(audioBlob);
    const mimeType = audioBlob.type || 'audio/webm';
    
    let targetLangName = 'English';
    switch (language) {
      case 'es': targetLangName = 'Spanish'; break;
      case 'fr': targetLangName = 'French'; break;
      case 'it': targetLangName = 'Italian'; break;
      case 'de': targetLangName = 'German'; break;
    }

    const prompt = `
      Act as a STRICT ${targetLangName} Phonetics Coach.
      Analyze the attached audio file where a user attempts to say: "${targetText}".
      
      CRITICAL SCORING RULES:
      1. **SILENCE/NOISE CHECK**: If the audio is silent, contains only background noise, or the user says nothing resembling a word, YOU MUST RETURN SCORE: 0.
      2. **PHONETIC ANALYSIS**: Compare the user's spoken phonemes directly against the standard pronunciation for "${targetText}".
      3. **SCORING SCALE**:
         - **0**: Silêncio ou palavra errada.
         - **1-39**: Erros graves de fonemas (som errado).
         - **40-69**: Compreensível, mas com sotaque forte.
         - **70-100**: Pronúncia nativa.

      Return ONLY valid JSON.
    `;

    // Wrap evaluation in retry logic
    const response = await retryApiCall(async () => {
      return await ai.models.generateContent({
        model: "gemini-2.5-flash",
        contents: {
          parts: [
            { inlineData: { mimeType, data: base64Audio } },
            { text: prompt }
          ]
        },
        config: {
          responseMimeType: "application/json",
          responseSchema: {
            type: Type.OBJECT,
            properties: {
              score: { type: Type.NUMBER, description: "Score from 0 to 100. 0 if silent." },
              feedback: { type: Type.STRING, description: "Concise feedback in Portuguese" }
            },
            required: ["score", "feedback"]
          }
        }
      });
    }, 2, 1500); // Fewer retries for eval to avoid long waits on UI

    const resultText = response.text;
    if (!resultText) throw new Error("No result from evaluation");
    
    return JSON.parse(resultText) as PronunciationResult;

  } catch (error) {
    console.error("Pronunciation eval error:", error);
    // If all retries fail, return a neutral/error state rather than crashing
    return {
      score: 0,
      feedback: "Erro de conexão. Tente novamente."
    };
  }
};