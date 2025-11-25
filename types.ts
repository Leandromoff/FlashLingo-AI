
export type SupportedLanguage = 'en' | 'es' | 'fr';

export interface FlashcardData {
  id: string;
  word: string;
  translation: string;
  pronunciation: string; // IPA or standard phonetic
  portuguesePhonetic: string; // Brazilian Portuguese style phonetic
  syllables: string[]; // Array of syllables for karaoke effect
  exampleSentence: string;
  exampleTranslation: string;
}

export interface PronunciationResult {
  score: number;
  feedback: string;
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
  level: number;
  isBonus?: boolean; // New flag for the review deck
  language: SupportedLanguage; // Track language of the session
  cards: FlashcardData[];
  currentIndex: number;
  knownCount: number;
  unknownCount: number;
  unknownCards: FlashcardData[];
}

export const PREDEFINED_TOPICS = [
  { id: 'travel', label: 'Viagem & Aeroporto', icon: '✈️' },
  { id: 'food', label: 'Comida & Restaurante', icon: '🍔' },
  { id: 'business', label: 'Negócios & Trabalho', icon: '💼' },
  { id: 'slang', label: 'Gírias Comuns', icon: '😎' },
  { id: 'emotions', label: 'Emoções & Sentimentos', icon: '🎭' },
];