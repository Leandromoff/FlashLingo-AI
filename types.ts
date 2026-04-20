
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
    label: '31 Começar & Terminar',
    isStatic: true
  },
  {
    id: 'write_think',
    label: '35 Escrever, Pensar & Achar',
    isStatic: true
  },
  {
    id: 'to_be_intro',
    label: '37 Ser, Estar',
    isStatic: true
  },
  {
    id: 'to_be_negative',
    label: '39 to be | ser, estar (forma negativa)',
    isStatic: true
  },
  {
    id: 'to_be_interrogative',
    label: '41 to be | ser, estar (forma interrogativa)',
    isStatic: true
  },
  {
    id: 'to_make_give',
    label: '43 to make | fazer to give | dar',
    isStatic: true
  },
  {
    id: 'to_open_close',
    label: '45 to open | abrir to close | fechar',
    isStatic: true
  },
  {
    id: 'to_call_wait',
    label: '47 to call | chamar, ligar to wait | esperar',
    isStatic: true
  },
  {
    id: 'to_wear_change',
    label: '49 to wear | vestir, usar to change | trocar, mudar',
    isStatic: true
  },
  { 
    id: 'move_put', 
    label: '61 Mover, Mudar, Colocar & Pôr', 
    isStatic: true
  },
  {
    id: 'share_rent',
    label: '63 Dividir, Compartilhar & Alugar',
    isStatic: true
  },
  {
    id: 'lose_find',
    label: '65 Perder, Encontrar & Achar',
    isStatic: true
  },
  {
    id: 'to_be_1',
    label: '67 Ser, Estar I',
    isStatic: true
  },
  {
    id: 'to_be_2',
    label: '69 Ser, Estar II',
    isStatic: true
  },
  {
    id: 'to_be',
    label: '71 Ser, Estar III',
    isStatic: true
  },
  {
    id: 'begin_choose',
    label: '73 Iniciar, Começar & Escolher',
    isStatic: true
  },
  {
    id: 'listen_watch',
    label: '75 Ouvir & Assistir',
    isStatic: true
  },
  {
    id: 'post_follow',
    label: '77 Postar & Seguir',
    isStatic: true
  },
  {
    id: 'drink_eat_want',
    label: '79 Comer, Beber & Querer',
    isStatic: true
  },
  {
    id: 'go_have_visit',
    label: '81 Ir, Ter & Visitar',
    isStatic: true
  },
  {
    id: 'travel_stay_need',
    label: '83 Viajar, Ficar & Precisar',
    isStatic: true
  },
  {
    id: 'know_work_live',
    label: '85 Saber, Trabalhar & Morar',
    isStatic: true
  },
  {
    id: 'lucky_man',
    label: 'Música - Lucky Man',
    isStatic: true
  }
];
