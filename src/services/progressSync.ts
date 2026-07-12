// src/services/progressSync.ts
import { supabase } from './supabaseClient';

export interface ProgressData {
  xp: number;
  streak: number;
  dailyGoal: number;
  masteredKanji: string[];
}

const LOCAL_KEYS = {
  xp: 'nt_xp',
  streak: 'nt_streak',
  dailyGoal: 'nt_daily_goal',
  masteredKanji: 'nt_mastered_kanji',
};

// Baca progres yang tersimpan di localStorage device ini
export const readLocalProgress = (): ProgressData => {
  try {
    return {
      xp: parseInt(localStorage.getItem(LOCAL_KEYS.xp) || '0', 10),
      streak: parseInt(localStorage.getItem(LOCAL_KEYS.streak) || '0', 10),
      dailyGoal: parseInt(localStorage.getItem(LOCAL_KEYS.dailyGoal) || '0', 10),
      masteredKanji: JSON.parse(localStorage.getItem(LOCAL_KEYS.masteredKanji) || '[]'),
    };
  } catch {
    return { xp: 0, streak: 0, dailyGoal: 0, masteredKanji: [] };
  }
};

// Simpan progres ke localStorage device ini
export const writeLocalProgress = (data: ProgressData) => {
  localStorage.setItem(LOCAL_KEYS.xp, String(data.xp));
  localStorage.setItem(LOCAL_KEYS.streak, String(data.streak));
  localStorage.setItem(LOCAL_KEYS.dailyGoal, String(data.dailyGoal));
  localStorage.setItem(LOCAL_KEYS.masteredKanji, JSON.stringify(data.masteredKanji));
};

// Ambil progres dari tabel `user_progress` di Supabase
export const pullProgress = async (userId: string): Promise<ProgressData | null> => {
  const { data, error } = await supabase
    .from('user_progress')
    .select('*')
    .eq('user_id', userId)
    .maybeSingle();

  if (error) {
    console.error('Gagal mengambil progres dari cloud:', error.message);
    return null;
  }
  if (!data) return null;

  return {
    xp: data.xp ?? 0,
    streak: data.streak ?? 0,
    dailyGoal: data.daily_goal ?? 0,
    masteredKanji: data.mastered_kanji ?? [],
  };
};

// Simpan progres ke Supabase (insert kalau belum ada, update kalau sudah ada)
export const pushProgress = async (userId: string, progress: ProgressData): Promise<boolean> => {
  const { error } = await supabase.from('user_progress').upsert({
    user_id: userId,
    xp: progress.xp,
    streak: progress.streak,
    daily_goal: progress.dailyGoal,
    mastered_kanji: progress.masteredKanji,
    updated_at: new Date().toISOString(),
  });

  if (error) {
    console.error('Gagal menyimpan progres ke cloud:', error.message);
    return false;
  }
  return true;
};

// Gabungkan progres lokal & cloud: ambil nilai tertinggi utk angka,
// gabungkan (union) utk daftar kanji yang sudah dihafal.
export const mergeProgress = (local: ProgressData, remote: ProgressData): ProgressData => {
  const mergedKanji = Array.from(new Set([...local.masteredKanji, ...remote.masteredKanji]));
  return {
    xp: Math.max(local.xp, remote.xp),
    streak: Math.max(local.streak, remote.streak),
    dailyGoal: Math.max(local.dailyGoal, remote.dailyGoal),
    masteredKanji: mergedKanji,
  };
};
