import { GoogleGenAI, Type } from "@google/genai";
import * as fs from "fs";
import { 
  LESSON_21_DECK, 
  LESSON_23_DECK, 
  LESSON_25_DECK, 
  LESSON_27_DECK,
  LESSON_29_DECK,
  START_FINISH_DECK,
  LESSON_33_DECK,
  WRITE_THINK_DECK,
  TO_BE_INTRO_DECK,
  TO_BE_NEGATIVE_DECK,
  TO_BE_INTERROGATIVE_DECK,
  TO_MAKE_GIVE_DECK,
  TO_OPEN_CLOSE_DECK,
  TO_CALL_WAIT_DECK,
  TO_WEAR_CHANGE_DECK
} from "./staticDecks.js";

const ai = new GoogleGenAI({ apiKey: process.env.GEMINI_API_KEY });

const wait = (ms: number) => new Promise(resolve => setTimeout(resolve, ms));

async function callGeminiWithRetry(fn: () => Promise<any>, retries = 5, delay = 5000): Promise<any> {
  let lastErr;
  for (let i = 0; i < retries; i++) {
    try {
      return await fn();
    } catch (err: any) {
      lastErr = err;
      const isQuota = err?.status === 429 || err?.message?.includes("429") || err?.message?.toLowerCase().includes("quota");
      const isServerErr = err?.status === 503 || err?.status === 500;
      if ((isQuota || isServerErr) && i < retries - 1) {
        const sleepTime = delay * Math.pow(2, i);
        console.warn(`Gemini API error. Retrying in ${sleepTime}ms... (Attempt ${i + 1}/${retries})`);
        await wait(sleepTime);
        continue;
      }
      throw err;
    }
  }
  throw lastErr;
}

interface EngCard {
  id: string;
  word: string;
  translation: string;
  pronunciation: string;
  portuguesePhonetic: string;
  syllables: string[];
  exampleSentence: string;
  exampleTranslation: string;
}

async function translateChunk(engCards: EngCard[], lessonNum: number, startIndex: number, modelName: string): Promise<any[]> {
  const prompt = `You are an expert Spanish curriculum designer. You are creating a Spanish learning flashcard deck for native Portuguese speakers, matching a corresponding English learning deck.
  
  Translate the following array of English cards into high-quality Spanish cards. 
  
  CRITICAL: You MUST return EXACTLY ${engCards.length} elements in the JSON array, in the exact same order!
  
  For each card, map it as follows:
  1. id: "leccion_${lessonNum}_I" where I is the sequential 1-based index (starting from ${startIndex + 1}).
  2. word: Translate the English "word" to its natural Spanish equivalent (for nouns, verbs, full sentences). Keep its meaning, tone, and grammatical structure aligned.
  3. translation: Keep the Portuguese translation of the Spanish word (meaning matching the original concept/word/sentence). Ensure it is natural Portuguese!
  4. pronunciation: Provide standard Latin-American Spanish IPA pronunciation for the Spanish "word". Use standard IPA formatting.
  5. portuguesePhonetic: Provide a Brazilian Portuguese-friendly phonetic transcription of the Spanish word so a Brazilian can read it to sound natural. 
     (e.g., "Gente" in Spanish would be "rrên-te", "Calle" is "cá-ie", "Gracias" is "grá-cias").
  6. syllables: Split the Spanish "word" into Spanish syllables. 
     CRITICAL SYLLABLE RULE: 
     - For single words, split the word into its syllables (e.g. "padre" -> ["pa", "dre"]).
     - For multi-word phrases or full sentences, each word must start with a leading space in its first syllable unless it is the FIRST word in the sentence. Syllables within a word do not have spaces between them.
     - Example sentence syllabification: "¿Tú hablas alemán con tu profesor?" -> ["¿Tú", " ha", "blas", " a", "le", "mán", " con", " tu", " pro", "fe", "sor?"]
     - Example phrase: "ir a los Estados Unidos" -> ["ir", " a", " los", " Es", "ta", "dos", " U", "ni", "dos"]
  7. exampleSentence: Translate the English "exampleSentence" into Spanish. (Usually, if the "word" is simple, the "exampleSentence" is the same as "word". Otherwise, it is the full sentence translation).
  8. exampleTranslation: Translate the English "exampleTranslation" (which is Portuguese) into the natural Portuguese translation of the Spanish example sentence. This should represent the same meaning.
  
  Here is the English chunk to translate:
  ${JSON.stringify(engCards, null, 2)}
  `;

  const response = await callGeminiWithRetry(async () => {
    return await ai.models.generateContent({
      model: modelName,
      contents: prompt,
      config: {
        responseMimeType: "application/json",
        responseSchema: {
          type: Type.ARRAY,
          items: {
            type: Type.OBJECT,
            properties: {
              word: { type: Type.STRING, description: "Spanish translated word/phrase/sentence" },
              translation: { type: Type.STRING, description: "Portuguese translation of the Spanish word" },
              pronunciation: { type: Type.STRING, description: "IPA pronunciation of the Spanish word" },
              portuguesePhonetic: { type: Type.STRING, description: "Portuguese phonetic representation of Spanish pronunciation" },
              syllables: {
                type: Type.ARRAY,
                items: { type: Type.STRING },
                description: "Spanish syllables (following the leading space on new words rule)"
              },
              exampleSentence: { type: Type.STRING, description: "Spanish example sentence" },
              exampleTranslation: { type: Type.STRING, description: "Portuguese translation of example sentence" }
            },
            required: ["word", "translation", "pronunciation", "portuguesePhonetic", "syllables", "exampleSentence", "exampleTranslation"]
          }
        }
      }
    });
  });

  const cardsText = response.text;
  if (!cardsText) throw new Error("Empty text from Gemini response");
  
  let cleanJson = cardsText.trim();
  if (cleanJson.includes("[") && cleanJson.includes("]")) {
    const start = cleanJson.indexOf("[");
    const end = cleanJson.lastIndexOf("]");
    cleanJson = cleanJson.substring(start, end + 1);
  } else if (cleanJson.includes("{") && cleanJson.includes("}")) {
    const start = cleanJson.indexOf("{");
    const end = cleanJson.lastIndexOf("}");
    cleanJson = cleanJson.substring(start, end + 1);
  }

  const rawCards = JSON.parse(cleanJson);
  return rawCards.map((item: any, idx: number) => ({
    id: `leccion_${lessonNum}_${startIndex + 1 + idx}`,
    word: item.word,
    translation: item.translation,
    pronunciation: item.pronunciation,
    portuguesePhonetic: item.portuguesePhonetic,
    syllables: item.syllables,
    exampleSentence: item.exampleSentence,
    exampleTranslation: item.exampleTranslation
  }));
}

async function processDeck(deck: EngCard[], lessonNum: number, filename: string, modelName: string) {
  console.log(`Processing Lesson ${lessonNum} deck of size ${deck.length} with model ${modelName}...`);
  const chunkSize = 10; // 10 is balanced and highly efficient for Gemma response structures
  const progressFile = `./data/progress_${lessonNum}.json`;
  let translatedCards: any[] = [];
  
  if (fs.existsSync(progressFile)) {
    try {
      translatedCards = JSON.parse(fs.readFileSync(progressFile, "utf8"));
      console.log(`Resuming from progress file: loaded ${translatedCards.length} cards.`);
    } catch (e) {
      console.warn("Invalid progress file, starting fresh.");
    }
  }

  const startIdx = translatedCards.length;
  if (startIdx < deck.length) {
    const i = startIdx;
    const chunk = deck.slice(i, i + chunkSize);
    console.log(`Translating single chunk: ${i + 1} to ${Math.min(i + chunkSize, deck.length)}...`);
    
    let chunkResult: any[] = [];
    let success = false;
    let attempts = 3;
    
    while (!success && attempts > 0) {
      try {
        chunkResult = await translateChunk(chunk, lessonNum, i, modelName);
        if (chunkResult.length === chunk.length) {
          success = true;
        } else {
          console.warn(`Length mismatch! Expected ${chunk.length}, got ${chunkResult.length}. Retrying...`);
          attempts--;
        }
      } catch (err) {
        console.error(`Error translating chunk starting at ${i}:`, err);
        attempts--;
        await wait(3000);
      }
    }
    
    if (!success) {
      throw new Error(`Failed to translate chunk starting at ${i}`);
    }
    
    translatedCards.push(...chunkResult);
    fs.writeFileSync(progressFile, JSON.stringify(translatedCards, null, 2), "utf8");
  }

  // Cleanup progress file if complete
  if (translatedCards.length >= deck.length) {
    if (fs.existsSync(progressFile)) {
      try {
        fs.unlinkSync(progressFile);
      } catch (_) {}
    }
    
    // Save to file
    const fileContent = `import { FlashcardData } from '../types';

export const LECCION_${lessonNum}_W2_S_DECK: FlashcardData[] = ${JSON.stringify(translatedCards, null, 2)};
`;

    fs.writeFileSync(filename, fileContent, "utf8");
    console.log(`Successfully wrote ${translatedCards.length} cards to ${filename}!`);
  } else {
    console.log(`Progress saved: ${translatedCards.length} out of ${deck.length} translated. Run again to translate next chunk!`);
  }
}

async function run() {
  const arg = process.argv[2];
  const modelName = process.argv[3] || "gemini-2.5-flash";
  console.log(`Arg: ${arg}, Model: ${modelName}`);
  
  let deck: any[] = [];
  let num = 0;
  let outfile = "";
  
  if (arg === "21") {
    deck = LESSON_21_DECK;
    num = 21;
    outfile = "./data/leccion21_w2_s.ts";
  } else if (arg === "23") {
    deck = LESSON_23_DECK;
    num = 23;
    outfile = "./data/leccion23_w2_s.ts";
  } else if (arg === "25") {
    deck = LESSON_25_DECK;
    num = 25;
    outfile = "./data/leccion25_w2_s.ts";
  } else if (arg === "27") {
    deck = LESSON_27_DECK;
    num = 27;
    outfile = "./data/leccion27_w2_s.ts";
  } else if (arg === "29") {
    deck = LESSON_29_DECK;
    num = 29;
    outfile = "./data/leccion29_w2_s.ts";
  } else if (arg === "31") {
    deck = START_FINISH_DECK;
    num = 31;
    outfile = "./data/leccion31_w2_s.ts";
  } else if (arg === "33") {
    deck = LESSON_33_DECK;
    num = 33;
    outfile = "./data/leccion33_w2_s.ts";
  } else if (arg === "35") {
    deck = WRITE_THINK_DECK;
    num = 35;
    outfile = "./data/leccion35_w2_s.ts";
  } else if (arg === "37") {
    deck = TO_BE_INTRO_DECK;
    num = 37;
    outfile = "./data/leccion37_w2_s.ts";
  } else if (arg === "39") {
    deck = TO_BE_NEGATIVE_DECK;
    num = 39;
    outfile = "./data/leccion39_w2_s.ts";
  } else if (arg === "41") {
    deck = TO_BE_INTERROGATIVE_DECK;
    num = 41;
    outfile = "./data/leccion41_w2_s.ts";
  } else if (arg === "43") {
    deck = TO_MAKE_GIVE_DECK;
    num = 43;
    outfile = "./data/leccion43_w2_s.ts";
  } else if (arg === "45") {
    deck = TO_OPEN_CLOSE_DECK;
    num = 45;
    outfile = "./data/leccion45_w2_s.ts";
  } else if (arg === "47") {
    deck = TO_CALL_WAIT_DECK;
    num = 47;
    outfile = "./data/leccion47_w2_s.ts";
  } else if (arg === "49") {
    deck = TO_WEAR_CHANGE_DECK;
    num = 49;
    outfile = "./data/leccion49_w2_s.ts";
  } else {
    console.error("Provide card argument: 21, 23, 25, 27, 29, 31, 33, 35, 37, 39, 41, 43, 45, 47, or 49");
    process.exit(1);
  }
  
  try {
    await processDeck(deck, num, outfile, modelName);
    console.log("Deck processed successfully!");
  } catch (err) {
    console.error("Fatal processing error:", err);
    process.exit(1);
  }
}

run();
