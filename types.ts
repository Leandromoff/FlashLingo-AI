export type SupportedLanguage = "en" | "es";

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
  HOME = "HOME",
  LOADING = "LOADING",
  STUDY = "STUDY",
  SUMMARY = "SUMMARY",
  ERROR = "ERROR",
}

export interface StudySession {
  topicId: string;
  topicLabel: string;
  language: SupportedLanguage;
  cards: FlashcardData[];
  currentIndex: number;
}

export const PREDEFINED_TOPICS = [
  { id: "lesson_1", label: "Lesson 1", isStatic: true, group: "W2" },
  { id: "lesson_3", label: "Lesson 3", isStatic: true, group: "W2" },
  { id: "lesson_5", label: "Lesson 5", isStatic: true, group: "W2" },
  { id: "lesson_7", label: "Lesson 7", isStatic: true, group: "W2" },
  { id: "lesson_9", label: "Lesson 9", isStatic: true, group: "W2" },
  { id: "lesson_11", label: "Lesson 11", isStatic: true, group: "W2" },
  { id: "lesson_13", label: "Lesson 13", isStatic: true, group: "W2" },
  { id: "lesson_15", label: "Lesson 15", isStatic: true, group: "W2" },
  { id: "lesson_17", label: "Lesson 17", isStatic: true, group: "W2" },
  { id: "lesson_19", label: "Lesson 19", isStatic: true, group: "W2" },
  { id: "lesson_21", label: "Lesson 21", isStatic: true, group: "W2" },
  { id: "lesson_23", label: "Lesson 23", isStatic: true, group: "W2" },
  { id: "lesson_25", label: "Lesson 25", isStatic: true, group: "W2" },
  { id: "lesson_27", label: "Lesson 27", isStatic: true, group: "W2" },
  { id: "lesson_29", label: "Lesson 29", isStatic: true, group: "W2" },
  { id: "start_finish", label: "Lesson 31", isStatic: true, group: "W2" },
  { id: "lesson_33", label: "Lesson 33", isStatic: true, group: "W2" },
  { id: "write_think", label: "Lesson 35", isStatic: true, group: "W2" },
  { id: "to_be_intro", label: "Lesson 37", isStatic: true, group: "W2" },
  { id: "to_be_negative", label: "Lesson 39", isStatic: true, group: "W2" },
  {
    id: "to_be_interrogative",
    label: "Lesson 41",
    isStatic: true,
    group: "W2",
  },
  { id: "to_make_give", label: "Lesson 43", isStatic: true, group: "W2" },
  { id: "to_open_close", label: "Lesson 45", isStatic: true, group: "W2" },
  { id: "to_call_wait", label: "Lesson 47", isStatic: true, group: "W2" },
  { id: "to_wear_change", label: "Lesson 49", isStatic: true, group: "W2" },
  { id: "to_sell_pay", label: "Lesson 51", isStatic: true, group: "W2" },
  { id: "to_put_do", label: "Lesson 53", isStatic: true, group: "W2" },
  { id: "to_play_run", label: "Lesson 55", isStatic: true, group: "W2" },
  { id: "to_spend_travel", label: "Lesson 57", isStatic: true, group: "W2" },
  { id: "to_arrive_leave", label: "Lesson 59", isStatic: true, group: "W2" },

  { id: "to_move_put", label: "Lesson 61", isStatic: true, group: "W4" },
  { id: "share_rent", label: "Lesson 63", isStatic: true, group: "W4" },
  { id: "to_lose_find", label: "Lesson 65", isStatic: true, group: "W4" },
  { id: "to_be_past", label: "Lesson 67", isStatic: true, group: "W4" },
  {
    id: "to_be_past_questions",
    label: "Lesson 69",
    isStatic: true,
    group: "W4",
  },
  { id: "lesson_71", label: "Lesson 71", isStatic: true, group: "W4" },
  { id: "lesson_73", label: "Lesson 73", isStatic: true, group: "W4" },
  { id: "lesson_75", label: "Lesson 75", isStatic: true, group: "W4" },
  { id: "lesson_77", label: "Lesson 77", isStatic: true, group: "W4" },
  { id: "lesson_79", label: "Lesson 79", isStatic: true, group: "W4" },
  { id: "lesson_81", label: "Lesson 81", isStatic: true, group: "W4" },
  { id: "lesson_83", label: "Lesson 83", isStatic: true, group: "W4" },
  { id: "lesson_85", label: "Lesson 85", isStatic: true, group: "W4" },
  { id: "lesson_89", label: "Lesson 89", isStatic: true, group: "W4" },
  { id: "lesson_91", label: "Lesson 91", isStatic: true, group: "W4" },

  {
    id: "lesson_1_vocabulary_a1",
    label: "Lesson 1",
    isStatic: true,
    group: "Vocabulary A1",
  },
  {
    id: "lesson_2_vocabulary_a1",
    label: "Lesson 2",
    isStatic: true,
    group: "Vocabulary A1",
  },
  {
    id: "lesson_1_grammar_a1",
    label: "Lesson 1",
    isStatic: true,
    group: "Grammar A1",
  },
  {
    id: "lesson_2_grammar_a1",
    label: "Lesson 2",
    isStatic: true,
    group: "Grammar A1",
  },
  { id: "leccion_1_w2_s", label: "Lección 1", isStatic: true, group: "W2-S" },
  { id: "leccion_3_w2_s", label: "Lección 3", isStatic: true, group: "W2-S" },
  { id: "leccion_5_w2_s", label: "Lección 5", isStatic: true, group: "W2-S" },
  { id: "leccion_7_w2_s", label: "Lección 7", isStatic: true, group: "W2-S" },
  { id: "leccion_9_w2_s", label: "Lección 9", isStatic: true, group: "W2-S" },
  { id: "leccion_11_w2_s", label: "Lección 11", isStatic: true, group: "W2-S" },
  { id: "leccion_13_w2_s", label: "Lección 13", isStatic: true, group: "W2-S" },
  { id: "leccion_15_w2_s", label: "Lección 15", isStatic: true, group: "W2-S" },
  { id: "leccion_17_w2_s", label: "Lección 17", isStatic: true, group: "W2-S" },
  { id: "leccion_19_w2_s", label: "Lección 19", isStatic: true, group: "W2-S" },
  { id: "leccion_21_w2_s", label: "Lección 21", isStatic: true, group: "W2-S" },
  { id: "leccion_23_w2_s", label: "Lección 23", isStatic: true, group: "W2-S" },
  { id: "leccion_25_w2_s", label: "Lección 25", isStatic: true, group: "W2-S" },
  { id: "leccion_27_w2_s", label: "Lección 27", isStatic: true, group: "W2-S" },
  { id: "leccion_29_w2_s", label: "Lección 29", isStatic: true, group: "W2-S" },
  { id: "leccion_31_w2_s", label: "Lección 31", isStatic: true, group: "W2-S" },
  { id: "leccion_33_w2_s", label: "Lección 33", isStatic: true, group: "W2-S" },
  { id: "leccion_35_w2_s", label: "Lección 35", isStatic: true, group: "W2-S" },
  { id: "leccion_37_w2_s", label: "Lección 37", isStatic: true, group: "W2-S" },
  { id: "leccion_39_w2_s", label: "Lección 39", isStatic: true, group: "W2-S" },
  { id: "leccion_41_w2_s", label: "Lección 41", isStatic: true, group: "W2-S" },
  { id: "leccion_43_w2_s", label: "Lección 43", isStatic: true, group: "W2-S" },
  { id: "leccion_45_w2_s", label: "Lección 45", isStatic: true, group: "W2-S" },
  { id: "leccion_47_w2_s", label: "Lección 47", isStatic: true, group: "W2-S" },
  { id: "leccion_49_w2_s", label: "Lección 49", isStatic: true, group: "W2-S" },
  {
    id: "leccion_1_vocabulario_a1_s",
    label: "Lección 1",
    isStatic: true,
    group: "Vocabulario A1-S",
  },
  {
    id: "leccion_2_vocabulario_a1_s",
    label: "Lección 2",
    isStatic: true,
    group: "Vocabulario A1-S",
  },
  {
    id: "leccion_1_gramatica_a1_s",
    label: "Lección 1",
    isStatic: true,
    group: "Gramática A1-S",
  },
  {
    id: "leccion_2_gramatica_a1_s",
    label: "Lección 2",
    isStatic: true,
    group: "Gramática A1-S",
  },
];
