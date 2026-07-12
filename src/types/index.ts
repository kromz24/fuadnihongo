// src/types/index.ts

export interface Vocabulary {
  id: string;             // Harus string karena kita pakai 'n5-1', 'n4-1'
  kata: string;           
  furigana: string;       
  arti: string;           
  level: 'N5' | 'N4' | 'N3';
  kategori: string;
  contohKalimat: string;
  contohFurigana?: string;
  terjemahan: string;
  nextReview: number | null; 
  srsLevel: number;
}

export interface Grammar {
  id: string;
  pola: string;        // rumus/pola tata bahasa, misal "〜てもいいです"
  arti: string;         // penjelasan artinya
  contohKalimat: string;
  level: 'N5' | 'N4' | 'N3';
  isPaham: boolean;
}

export interface AppState {
  xp: number;
  addXp: (amount: number) => void;
}

export interface Kanji {
  id?: number;
  kanji: string;
  onyomi: string;
  kunyomi: string;
  meaning: string;
  jlptLevel: string;
  status: 'new' | 'learning' | 'mastered';
}