
export interface Morphology {
  original?: string;
  derived: string;
  type: string;
  color: string;
}

export interface Example {
  sentence: string;
  translation: string;
  focusPhrases: string[];
}

export interface Quiz {
  question: string;
  options: { label: string; meaning: string }[];
}

export interface VocabularyItem {
  id: number;
  word: string;
  phonetic: string;
  pos: string;
  meaning: string;
  morphology?: Morphology[];
  // Fix: Make usages optional since not all vocabulary items have them defined
  usages?: string[];
  examples: Example[];
  quiz?: Quiz;
  extraNotes?: string;
}
