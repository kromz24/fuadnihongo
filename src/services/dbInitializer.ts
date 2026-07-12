// src/services/dbInitializer.ts
import { db } from './db';
import { kanjiData } from '../data/kanjiData';

export const seedDatabase = async () => {
  try {
    // Cek apakah database sudah ada isinya
    const count = await db.kanji.count();
    
    if (count === 0) {
      console.log("Database kosong. Memulai proses seeding...");
      
      // Masukkan data dari kanjiData ke Dexie
      const kanjiSeed = kanjiData.map(item => ({
        kanji: item.kanji,
        onyomi: item.onyomi,
        kunyomi: item.kunyomi,
        meaning: item.arti,
        jlptLevel: 'N5',
        status: 'new' as const
      }));

      await db.kanji.bulkAdd(kanjiSeed);
      console.log("Seeding selesai! Database kini terisi.");
    } else {
      console.log("Database sudah terisi. Melewati seeding.");
    }
  } catch (error) {
    console.error("Gagal melakukan seeding:", error);
  }
};