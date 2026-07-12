// src/features/kana/KanaPage.tsx
import { useState } from 'react';
import { hiraganaData, katakanaData } from '../../data/kanaData';
import { Card, CardContent } from '../../components/ui/card';
import { Volume2, Sparkles } from 'lucide-react';

export const KanaPage = () => {
  const [activeTab, setActiveTab] = useState<'hiragana' | 'katakana'>('hiragana');
  const currentData = activeTab === 'hiragana' ? hiraganaData : katakanaData;

  const playSound = (text: string) => {
    if ('speechSynthesis' in window) {
      window.speechSynthesis.cancel();
      const u = new SpeechSynthesisUtterance(text);
      u.lang = 'ja-JP';
      u.rate = 0.8;
      window.speechSynthesis.speak(u);
    }
  };

  return (
    <div className="space-y-12 text-white max-w-5xl mx-auto p-4 animate-fade-in">
      {/* Header & Tab */}
      <div className="flex flex-col md:flex-row justify-between items-center gap-6">
        <div className="flex items-center gap-4">
          <div className="p-3 bg-primary/10 rounded-2xl text-primary">
            <Sparkles size={32} />
          </div>
          <div>
            <h2 className="text-3xl font-black">Kana Zen Board</h2>
            <p className="text-zinc-400">Mastering Hiragana & Katakana</p>
          </div>
        </div>
        <div className="flex bg-zinc-950 p-1 rounded-xl border border-white/5">
          <button onClick={() => setActiveTab('hiragana')} className={`px-8 py-2 rounded-lg font-bold transition-all ${activeTab === 'hiragana' ? 'bg-primary' : 'hover:text-zinc-300'}`}>Hiragana</button>
          <button onClick={() => setActiveTab('katakana')} className={`px-8 py-2 rounded-lg font-bold transition-all ${activeTab === 'katakana' ? 'bg-primary' : 'hover:text-zinc-300'}`}>Katakana</button>
        </div>
      </div>

      {/* Render Semua Kategori */}
      {Object.entries(currentData).map(([category, items]) => (
        <div key={category} className="space-y-4">
          <h3 className="text-sm uppercase font-bold text-zinc-500 tracking-widest border-b border-white/5 pb-2">
            {category}
          </h3>
          <div className="grid grid-cols-4 sm:grid-cols-6 md:grid-cols-8 gap-3">
            {items.map((item, idx) => (
              <Card
                key={`${category}-${idx}`}
                onClick={() => playSound(item.kana)}
                className="group relative bg-zinc-900 border-white/5 hover:border-primary/50 transition-all cursor-pointer aspect-square flex items-center justify-center overflow-hidden"
              >
                <CardContent className="p-0 flex flex-col items-center justify-center gap-1">
                  <span className="text-2xl sm:text-3xl font-black group-hover:text-primary transition-colors">
                    {item.kana}
                  </span>
                  <span className="text-[10px] uppercase font-bold text-zinc-600 group-hover:text-zinc-300">
                    {item.romaji}
                  </span>
                </CardContent>
                <div className="absolute top-1 right-1 opacity-0 group-hover:opacity-100 transition-opacity">
                  <Volume2 size={12} className="text-primary" />
                </div>
              </Card>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};