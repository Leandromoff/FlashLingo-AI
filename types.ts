
export type SupportedLanguage = 'en' | 'es' | 'fr' | 'it' | 'de';

export interface FlashcardData {
  id: string;
  word: string;
  translation: string;
  pronunciation: string; // IPA or standard phonetic
  portuguesePhonetic: string; // Brazilian Portuguese style phonetic
  syllables: string[]; // Array of syllables for karaoke effect
  exampleSentence: string;
  exampleTranslation: string;
  grammarExplanation?: string; // New field for grammatical context
}

export enum AppState {
  HOME = 'HOME',
  LOADING = 'LOADING',
  STUDY = 'STUDY',
  SUMMARY = 'SUMMARY',
  ERROR = 'ERROR'
}

export interface StudySession {
  topicId: string;
  topicLabel: string;
  isBonus?: boolean; // New flag for the review deck
  language: SupportedLanguage; // Track language of the session
  cards: FlashcardData[];
  currentIndex: number;
  knownCount: number;
  unknownCount: number;
  unknownCards: FlashcardData[];
}

export const PREDEFINED_TOPICS = [
  { 
    id: 'move_put', 
    label: 'Mover, Mudar, Colocar & Pôr', 
    isStatic: true
  },
  {
    id: 'share_rent',
    label: 'Dividir, Compartilhar & Alugar',
    isStatic: true
  },
  {
    id: 'to_be_1',
    label: 'Ser, Estar I',
    isStatic: true
  },
  {
    id: 'to_be_2',
    label: 'Ser, Estar II',
    isStatic: true
  },
  {
    id: 'to_be',
    label: 'Ser, Estar III',
    isStatic: true
  },
  {
    id: 'begin_choose',
    label: 'Iniciar, Começar & Escolher',
    isStatic: true
  },
  {
    id: 'lose_find',
    label: 'Perder, Encontrar & Achar',
    isStatic: true
  },
  {
    id: 'lucky_man',
    label: 'Música - Lucky Man',
    isStatic: true
  }
];
