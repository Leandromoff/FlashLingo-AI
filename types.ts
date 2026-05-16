
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
    id: 'start_finish',
    label: 'Lesson 31',
    isStatic: true
  },
  {
    id: 'write_think',
    label: 'Lesson 35',
    isStatic: true
  },
  {
    id: 'to_be_intro',
    label: 'Lesson 37',
    isStatic: true
  },
  {
    id: 'to_be_negative',
    label: 'Lesson 39',
    isStatic: true
  },
  {
    id: 'to_be_interrogative',
    label: 'Lesson 41',
    isStatic: true
  },
  {
    id: 'to_make_give',
    label: 'Lesson 43',
    isStatic: true
  },
  {
    id: 'to_open_close',
    label: 'Lesson 45',
    isStatic: true
  },
  {
    id: 'to_call_wait',
    label: 'Lesson 47',
    isStatic: true
  },
  {
    id: 'to_wear_change',
    label: 'Lesson 49',
    isStatic: true
  },
  { 
    id: 'move_put', 
    label: 'Lesson 61', 
    isStatic: true
  },
  {
    id: 'share_rent',
    label: 'Lesson 63',
    isStatic: true
  },
  {
    id: 'lose_find',
    label: 'Lesson 65',
    isStatic: true
  },
  {
    id: 'to_be_1',
    label: 'Lesson 67',
    isStatic: true
  },
  {
    id: 'to_be_2',
    label: 'Lesson 69',
    isStatic: true
  },
  {
    id: 'to_be',
    label: 'Lesson 71',
    isStatic: true
  },
  {
    id: 'begin_choose',
    label: 'Lesson 73',
    isStatic: true
  },
  {
    id: 'listen_watch',
    label: 'Lesson 75',
    isStatic: true
  },
  {
    id: 'post_follow',
    label: 'Lesson 77',
    isStatic: true
  },
  {
    id: 'drink_eat_want',
    label: 'Lesson 79',
    isStatic: true
  },
  {
    id: 'go_have_visit',
    label: 'Lesson 81',
    isStatic: true
  },
  {
    id: 'travel_stay_need',
    label: 'Lesson 83',
    isStatic: true
  },
  {
    id: 'know_work_live',
    label: 'Lesson 85',
    isStatic: true
  },
  {
    id: 'common_things',
    label: 'V-A1 - COMMON THINGS (Objetos Comuns)',
    isStatic: true
  },
  {
    id: 'common_verbs',
    label: 'V-A1 - COMMON VERBS (Verbos Comuns)',
    isStatic: true
  },
  {
    id: 'connectors',
    label: 'Conectores',
    isStatic: true
  }
];
