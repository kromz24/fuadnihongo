import { useState } from 'react';
import { initialVocabulary } from '../../data/initialData';

export const VocabularyPage = () => {
  const [levelFilter, setLevelFilter] = useState<'N5' | 'N4'>('N5');
  const [searchQuery, setSearchQuery] = useState('');

  // Fungsi untuk membacakan teks (kata atau kalimat)
  const playSound = (text: string) => {
    window.speechSynthesis.cancel(); // Reset suara agar tidak tumpuk
    const utterance = new SpeechSynthesisUtterance(text);
    utterance.lang = 'ja-JP'; 
    window.speechSynthesis.speak(utterance);
  };

  const safeVocabulary = initialVocabulary || [];

  const filteredVocab = safeVocabulary.filter((item) => {
    const matchLevel = item.level === levelFilter;
    const matchSearch = 
      item.kata?.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.arti?.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.furigana?.toLowerCase().includes(searchQuery.toLowerCase());
    
    return matchLevel && matchSearch;
  });

  return (
    <div className="max-w-5xl mx-auto p-4 space-y-8 text-white">
      {/* Header & Filter */}
      <div className="flex flex-col md:flex-row justify-between gap-4 items-center bg-zinc-900/50 p-4 rounded-2xl border border-white/5">
        <div className="flex bg-zinc-950 p-1 rounded-xl border border-white/5 w-full md:w-auto">
          <button onClick={() => setLevelFilter('N5')} className={`flex-1 px-8 py-2.5 rounded-lg font-bold ${levelFilter === 'N5' ? 'bg-primary text-white' : 'text-zinc-500'}`}>JLPT N5</button>
          <button onClick={() => setLevelFilter('N4')} className={`flex-1 px-8 py-2.5 rounded-lg font-bold ${levelFilter === 'N4' ? 'bg-primary text-white' : 'text-zinc-500'}`}>JLPT N4</button>
        </div>
        <input type="text" placeholder="Cari..." value={searchQuery} onChange={(e) => setSearchQuery(e.target.value)} className="w-full md:w-72 bg-zinc-950 border border-white/10 rounded-xl px-4 py-2.5 text-sm focus:border-primary text-white" />
      </div>

      {/* Grid Kosakata */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {filteredVocab.map((item) => (
          <div key={item.id} className="bg-zinc-900/80 border border-white/5 p-5 rounded-2xl flex flex-col justify-between">
            {/* Bagian Kata */}
            <div>
              <div className="flex justify-between items-start mb-4">
                <div>
                  <h3 className="text-3xl font-black text-white">{item.kata}</h3>
                  <p className="text-sm text-zinc-400 mt-1">{item.furigana}</p>
                </div>
                <button onClick={() => playSound(item.kata)} className="p-2 bg-zinc-800 rounded-full hover:bg-primary transition-colors">🔊</button>
              </div>
              <p className="text-lg font-semibold text-zinc-200">{item.arti}</p>
            </div>
            
            {/* Bagian Contoh Kalimat */}
            {item.contohKalimat && (
              <div className="mt-5 pt-4 border-t border-white/5">
                <div className="flex justify-between items-start gap-2">
                  <p className="text-sm text-zinc-300 font-medium leading-relaxed">{item.contohKalimat}</p>
                  <button onClick={() => playSound(item.contohKalimat)} className="shrink-0 p-1.5 bg-zinc-800/50 rounded-full hover:bg-primary/20 transition-colors text-xs">🔊</button>
                </div>
                <p className="text-xs text-zinc-500 italic mt-1.5">{item.terjemahan}</p>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};