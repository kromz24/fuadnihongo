// src/store/useStore.ts
import { create } from 'zustand';

interface AppState {
  showRomaji: boolean;
  showFurigana: boolean;
  toggleRomaji: () => void;
  toggleFurigana: () => void;
}

export const useStore = create<AppState>((set) => ({
  showRomaji: localStorage.getItem('nt_showRomaji') !== 'false',
  showFurigana: localStorage.getItem('nt_showFurigana') !== 'false',
  
  toggleRomaji: () => set((state) => {
    const next = !state.showRomaji;
    localStorage.setItem('nt_showRomaji', String(next));
    return { showRomaji: next };
  }),
  
  toggleFurigana: () => set((state) => {
    const next = !state.showFurigana;
    localStorage.setItem('nt_showFurigana', String(next));
    return { showFurigana: next };
  }),
}));