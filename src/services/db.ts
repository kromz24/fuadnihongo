import Dexie, { type Table } from 'dexie';
// Tambahkan kata 'type' sebelum { ... }
import type { Vocabulary, Kanji, Grammar } from '../types';

export class NihongoDatabase extends Dexie {
  // ... kode lainnya tetap sama
  vocabulary!: Table<Vocabulary>;
  kanji!: Table<Kanji>;
  grammar!: Table<Grammar>;

  constructor() {
    super('NihongoTrainerDB_v2');
    this.version(2).stores({
      vocabulary: 'id, level, srsLevel',
      kanji: '++id, jlptLevel, status',
      grammar: 'id, level, isPaham'
    });
  }
}

export const db = new NihongoDatabase();