// src/data/initialData.ts
import type { Vocabulary } from '../types';
import { n5Vocab } from './n5Vocab';
import { n4Vocab } from './n4Vocab';

// BAGIAN INI YANG DICARI OLEH SISTEM:
export const initialVocabulary: Vocabulary[] = [
  ...n5Vocab,
  ...n4Vocab
];