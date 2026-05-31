export type SupportedLanguage = 'en' | 'es' | 'fr' | 'it' | 'de';

export interface FlashcardData {
  id: string;
  word: string;
  translation: string;
  pronunciation: string;
  portuguesePhonetic: string;
  syllables: string[];
  exampleSentence: string;
  exampleTranslation: string;
  grammarExplanation?: string;
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
  isBonus?: boolean;
  language: SupportedLanguage;
  cards: FlashcardData[];
  currentIndex: number;
  knownCount: number;
  unknownCount: number;
  unknownCards: FlashcardData[];
}

export const PREDEFINED_TOPICS = [
  { id: 'lesson_1', label: 'Lesson 1', isStatic: true, group: 'W2' },
  { id: 'lesson_3', label: 'Lesson 3', isStatic: true, group: 'W2' },
  { id: 'lesson_5', label: 'Lesson 5', isStatic: true, group: 'W2' },
  { id: 'lesson_7', label: 'Lesson 7', isStatic: true, group: 'W2' },
  { id: 'lesson_9', label: 'Lesson 9', isStatic: true, group: 'W2' },
  { id: 'lesson_11', label: 'Lesson 11', isStatic: true, group: 'W2' },
  { id: 'lesson_13', label: 'Lesson 13', isStatic: true, group: 'W2' },
  { id: 'lesson_15', label: 'Lesson 15', isStatic: true, group: 'W2' },
  { id: 'lesson_17', label: 'Lesson 17', isStatic: true, group: 'W2' },
  { id: 'lesson_19', label: 'Lesson 19', isStatic: true, group: 'W2' },
  { id: 'lesson_21', label: 'Lesson 21', isStatic: true, group: 'W2' },
  { id: 'lesson_23', label: 'Lesson 23', isStatic: true, group: 'W2' },
  { id: 'lesson_25', label: 'Lesson 25', isStatic: true, group: 'W2' },
  { id: 'lesson_27', label: 'Lesson 27', isStatic: true, group: 'W2' },
  { id: 'lesson_29', label: 'Lesson 29', isStatic: true, group: 'W2' },
  { id: 'start_finish', label: 'Lesson 31', isStatic: true, group: 'W2' },
  { id: 'homework_31', label: 'Homework 31', isStatic: true, group: 'W2' },
  { id: 'lesson_33', label: 'Lesson 33', isStatic: true, group: 'W2' },
  { id: 'homework_33', label: 'Homework 33', isStatic: true, group: 'W2' },
  { id: 'write_think', label: 'Lesson 35', isStatic: true, group: 'W2' },
  { id: 'homework_35', label: 'Homework 35', isStatic: true, group: 'W2' },
  { id: 'to_be_intro', label: 'Lesson 37', isStatic: true, group: 'W2' },
  { id: 'homework_37', label: 'Homework 37', isStatic: true, group: 'W2' },
  { id: 'to_be_negative', label: 'Lesson 39', isStatic: true, group: 'W2' },
  { id: 'homework_39', label: 'Homework 39', isStatic: true, group: 'W2' },
  { id: 'to_be_interrogative', label: 'Lesson 41', isStatic: true, group: 'W2' },
  { id: 'to_make_give', label: 'Lesson 43', isStatic: true, group: 'W2' },
  { id: 'to_open_close', label: 'Lesson 45', isStatic: true, group: 'W2' },
  { id: 'to_call_wait', label: 'Lesson 47', isStatic: true, group: 'W2' },
  { id: 'to_wear_change', label: 'Lesson 49', isStatic: true, group: 'W2' },

  { id: 'move_put', label: 'Lesson 61', isStatic: true, group: 'W4' },
  { id: 'share_rent', label: 'Lesson 63', isStatic: true, group: 'W4' },
  { id: 'lose_find', label: 'Lesson 65', isStatic: true, group: 'W4' },
  { id: 'to_be_1', label: 'Lesson 67', isStatic: true, group: 'W4' },
  { id: 'to_be_2', label: 'Lesson 69', isStatic: true, group: 'W4' },
  { id: 'to_be', label: 'Lesson 71', isStatic: true, group: 'W4' },
  { id: 'begin_choose', label: 'Lesson 73', isStatic: true, group: 'W4' },
  { id: 'listen_watch', label: 'Lesson 75', isStatic: true, group: 'W4' },
  { id: 'post_follow', label: 'Lesson 77', isStatic: true, group: 'W4' },
  { id: 'drink_eat_want', label: 'Lesson 79', isStatic: true, group: 'W4' },
  { id: 'go_have_visit', label: 'Lesson 81', isStatic: true, group: 'W4' },
  { id: 'travel_stay_need', label: 'Lesson 83', isStatic: true, group: 'W4' },
  { id: 'know_work_live', label: 'Lesson 85', isStatic: true, group: 'W4' },

  { id: 'move_put_revisao', label: 'Lesson 61', isStatic: true, group: 'W4 revisão' },
  { id: 'share_rent_revisao', label: 'Lesson 63', isStatic: true, group: 'W4 revisão' },
  { id: 'lose_find_revisao', label: 'Lesson 65', isStatic: true, group: 'W4 revisão' },
  { id: 'to_be_1_revisao', label: 'Lesson 67', isStatic: true, group: 'W4 revisão' },
  { id: 'to_be_2_revisao', label: 'Lesson 69', isStatic: true, group: 'W4 revisão' },
  { id: 'to_be_revisao', label: 'Lesson 71', isStatic: true, group: 'W4 revisão' },
  { id: 'begin_choose_revisao', label: 'Lesson 73', isStatic: true, group: 'W4 revisão' },
  { id: 'listen_watch_revisao', label: 'Lesson 75', isStatic: true, group: 'W4 revisão' },
  { id: 'post_follow_revisao', label: 'Lesson 77', isStatic: true, group: 'W4 revisão' },
  { id: 'drink_eat_want_revisao', label: 'Lesson 79', isStatic: true, group: 'W4 revisão' },
  { id: 'go_have_visit_revisao', label: 'Lesson 81', isStatic: true, group: 'W4 revisão' },
  { id: 'travel_stay_need_revisao', label: 'Lesson 83', isStatic: true, group: 'W4 revisão' },
  { id: 'know_work_live_revisao', label: 'Lesson 85', isStatic: true, group: 'W4 revisão' }
];