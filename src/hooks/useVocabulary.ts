// src/hooks/useVocabulary.ts
import { useLiveQuery } from 'dexie-react-hooks';
import { db } from '../services/db';
import type { Vocabulary } from '../types'; // <--- Tambah kata 'type' di sini

export const useVocabulary = () => {
  const vocabList = useLiveQuery(() => db.vocabulary.toArray());

  const addVocab = async (item: Vocabulary) => {
    await db.vocabulary.add(item);
  };

  return { vocabList, addVocab };
};