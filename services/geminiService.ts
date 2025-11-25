import { GoogleGenAI, Type, Modality } from "@google/genai";
import { FlashcardData, PronunciationResult, SupportedLanguage } from "../types";

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

export const generateFlashcards = async (topic: string, deckNumber: number = 1, excludedWords: string[] = [], language: SupportedLanguage = 'en'): Promise<FlashcardData[]> => {
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
        default:
          targetLangName = 'English';
      }
      
      // Format excluded words for the prompt
      const excludedList = excludedWords.length > 0 
        ? `CRITICAL NEGATIVE CONSTRAINT: Do NOT generate any of the following words (already learned/reviewed): [${excludedWords.join(', ')}].` 
        : 'No exclusions for this deck.';

      const prompt = `You are an expert ${targetLangName} curriculum designer acting as an API. 
      Create a vocabulary deck for the topic: "${topic}".
      
      CONTEXT: The user is playing Deck ${deckNumber} of 5 learning ${targetLangName}.
      
      ${excludedList}
      
      CEFR LEVEL STRATEGY (Follow this progression strictly):
      - Deck 1: CEFR A1 (Beginner) - Basic survival vocabulary, simple concrete nouns/verbs.
      - Deck 2: CEFR A2 (Elementary) - Routine descriptions, common social phrases.
      - Deck 3: CEFR B1 (Intermediate) - Opinions, unexpected situations, connected text.
      - Deck 4: CEFR B1+ (Upper Intermediate) - Specific technical terms, more complex abstract ideas.
      - Deck 5: CEFR B2 (Advanced) - Idioms, phrasal verbs, native-level nuance and slang.

      TASK:
      1. Generate a list of 10 DISTINCT ${targetLangName} words or short phrases specifically for Deck ${deckNumber} based on the CEFR strategy above.
      2. VERIFY that none of the generated words appear in the CRITICAL NEGATIVE CONSTRAINT list above. If a word is in that list, you MUST choose a different one.
      3. For each word, provide:
         - Portuguese translation.
         - Standard Phonetic pronunciation (IPA).
         - Portuguese-style phonetic transcription (how a Brazilian would read it to sound like ${targetLangName}, e.g., ${phoneticExample}).
         - The word split into syllables (e.g., ["fan", "tas", "tic"]).
         - An example sentence in ${targetLangName} (matching the CEFR complexity of the Deck).
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
                word: { type: Type.STRING, description: `The ${targetLangName} word or phrase` },
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
export const playCloudAudio = async (text: string, onPlayStart?: (duration: number) => void): Promise<void> => {
  try {
    const buffer = await fetchAndCacheAudio(text);
    if (onPlayStart) {
      onPlayStart(buffer.duration);
    }
    await playBuffer(getAudioContext(), buffer);
  } catch (error) {
    console.error("Gemini TTS Error (showing local fallback):", error);
    // Fallback if cloud fails even after retries
    await playLocalAudio(text, 'en', onPlayStart);
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
export const playLocalAudio = (text: string, language: SupportedLanguage = 'en', onPlayStart?: (duration: number) => void): Promise<void> => {
  return new Promise((resolve) => {
    if (!('speechSynthesis' in window)) {
      console.warn("Browser does not support speech synthesis");
      resolve();
      return;
    }

    // Cancel any ongoing speech
    window.speechSynthesis.cancel();

    const utterance = new SpeechSynthesisUtterance(text);
    
    // Set locale based on language
    switch (language) {
      case 'es': utterance.lang = 'es-ES'; break;
      case 'fr': utterance.lang = 'fr-FR'; break;
      default: utterance.lang = 'en-US';
    }

    utterance.rate = 0.9; // Slightly slower for clarity

    // Estimate duration for local audio since browser doesn't provide it reliably beforehand
    // Average speaking rate ~ 150wpm => ~2.5 words/sec. 
    // We add a base buffer. This is an approximation for the UI animation.
    const wordCount = text.split(' ').length;
    const estimatedDuration = Math.max(0.6, wordCount * 0.4);

    utterance.onstart = () => {
      if (onPlayStart) {
        onPlayStart(estimatedDuration);
      }
    };

    // Handle end of speech to resolve promise
    utterance.onend = () => {
      resolve();
    };

    utterance.onerror = () => {
      resolve(); // Resolve even on error to unblock UI
    };

    window.speechSynthesis.speak(utterance);
  });
};

// Helper to play an existing buffer
const playBuffer = (ctx: AudioContext, buffer: AudioBuffer): Promise<void> => {
  return new Promise(async (resolve) => {
    // Ensure context is running (required by browsers after user gesture)
    if (ctx.state === 'suspended') {
      await ctx.resume();
    }

    const source = ctx.createBufferSource();
    source.buffer = buffer;
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