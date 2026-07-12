// src/features/kanji/KanjiPage.tsx
import { useState } from 'react';
import { kanjiData } from '../../data/kanjiData';
import type { KanjiItem } from '../../data/kanjiData';
import { Card, CardContent } from '../../components/ui/card';
import { CheckCircle2, Circle, Award, X, BookOpen, Volume2 } from 'lucide-react'; // Tambah Volume2

export const KanjiPage = () => {
  const [masteredIds, setMasteredIds] = useState<string[]>(() => {
    if (typeof window !== 'undefined') {
      const saved = localStorage.getItem('nt_mastered_kanji');
      return saved ? JSON.parse(saved) : [];
    }
    return [];
  });

  const [filter, setFilter] = useState<'all' | 'learning' | 'mastered'>('all');
  const [selectedKanji, setSelectedKanji] = useState<KanjiItem | null>(null);

  // Fungsi TTS (Text-to-Speech) Bahasa Jepang
  const playSound = (text: string) => {
    if (!text) return;
    if ('speechSynthesis' in window) {
      window.speechSynthesis.cancel(); // Hentikan suara sebelumnya jika ada
      const utterance = new SpeechSynthesisUtterance(text);
      utterance.lang = 'ja-JP';
      utterance.rate = 0.85; // Diperlambat sedikit agar pelafalan lebih jelas
      window.speechSynthesis.speak(utterance);
    }
  };

  const toggleMastery = (id: string) => {
    const updated = masteredIds.includes(id)
      ? masteredIds.filter(item => item !== id)
      : [...masteredIds, id];
    
    setMasteredIds(updated);
    localStorage.setItem('nt_mastered_kanji', JSON.stringify(updated));
  };

  const filteredData = kanjiData.filter(item => {
    if (filter === 'mastered') return masteredIds.includes(item.id);
    if (filter === 'learning') return !masteredIds.includes(item.id);
    return true;
  });

  const totalKanji = kanjiData.length;
  const totalMastered = masteredIds.length;
  const progressPercentage = Math.round((totalMastered / totalKanji) * 100) || 0;

  return (
    <div className="space-y-6 text-white max-w-5xl mx-auto animate-fade-in relative">
      
      {/* Top Section */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-5 items-center bg-card border border-white/5 p-6 rounded-2xl shadow-xl">
        <div className="md:col-span-2 space-y-1">
          <h2 className="text-3xl font-black tracking-tight">Kanji Mastery Tracker</h2>
          <p className="text-sm text-muted-foreground">
            Kuasai karakter Kanji N5. Klik kartu untuk melihat detail dan mendengarkan pelafalan audio aslinya!
          </p>
        </div>
        
        <div className="p-4 bg-zinc-900/60 border border-white/5 rounded-xl space-y-2">
          <div className="flex justify-between items-center text-xs font-bold tracking-wide uppercase text-zinc-400">
            <span>Progress Penguasaan</span>
            <span className="text-primary">{totalMastered} / {totalKanji} Kanji</span>
          </div>
          <div className="w-full h-3 bg-zinc-800 rounded-full overflow-hidden p-[1px]">
            <div 
              className="h-full bg-gradient-to-r from-primary to-emerald-400 rounded-full transition-all duration-300"
              style={{ width: `${progressPercentage}%` }}
            />
          </div>
          <p className="text-[11px] text-zinc-500 text-right">{progressPercentage}% Selesai</p>
        </div>
      </div>

      {/* Filter Tabs */}
      <div className="flex gap-2 bg-zinc-950 p-1 border border-white/5 rounded-xl self-start w-fit">
        <button onClick={() => setFilter('all')} className={`px-4 py-2 rounded-lg font-bold text-xs transition-all cursor-pointer ${filter === 'all' ? 'bg-primary text-white shadow' : 'text-zinc-400 hover:text-white'}`}>Semua ({totalKanji})</button>
        <button onClick={() => setFilter('learning')} className={`px-4 py-2 rounded-lg font-bold text-xs transition-all cursor-pointer ${filter === 'learning' ? 'bg-amber-500/20 text-amber-400 border border-amber-500/30' : 'text-zinc-400 hover:text-white'}`}>Belum Hafal ({totalKanji - totalMastered})</button>
        <button onClick={() => setFilter('mastered')} className={`px-4 py-2 rounded-lg font-bold text-xs transition-all cursor-pointer ${filter === 'mastered' ? 'bg-emerald-500/20 text-emerald-400 border border-emerald-500/30' : 'text-zinc-400 hover:text-white'}`}>Sudah Hafal ({totalMastered})</button>
      </div>

      {/* Grid List Kanji */}
      {filteredData.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {filteredData.map((item) => {
            const isMastered = masteredIds.includes(item.id);
            
            return (
              <Card 
                key={item.id}
                onClick={() => {
                  setSelectedKanji(item); // Buka Modal
                  playSound(item.kanji);  // Mainkan Suara Otomatis
                }} 
                className={`bg-card rounded-xl border transition-all duration-200 shadow-md group relative overflow-hidden select-none cursor-pointer active:scale-[0.98] ${
                  isMastered ? 'border-emerald-500/30 bg-emerald-950/5' : 'border-white/5 hover:border-primary/40'
                }`}
              >
                <CardContent className="p-5 flex gap-4 items-center">
                  <div className={`w-16 h-16 rounded-xl flex items-center justify-center font-black text-3xl shadow-inner transition-colors shrink-0 ${
                    isMastered ? 'bg-emerald-500/20 text-emerald-400' : 'bg-zinc-900 text-white group-hover:text-primary'
                  }`}>
                    {item.kanji}
                  </div>
                  <div className="flex-1 min-w-0 space-y-0.5">
                    <h3 className="font-bold text-lg text-zinc-100 truncate">{item.arti}</h3>
                    <p className="text-[11px] text-zinc-400 truncate"><span className="text-zinc-500 font-semibold">Onyomi:</span> {item.onyomi}</p>
                    <p className="text-[11px] text-zinc-400 truncate"><span className="text-zinc-500 font-semibold">Kunyomi:</span> {item.kunyomi}</p>
                  </div>
                  <button
                    onClick={(e) => {
                      e.stopPropagation(); 
                      toggleMastery(item.id);
                    }}
                    className={`p-2 rounded-lg transition-all cursor-pointer shrink-0 z-10 ${
                      isMastered ? 'text-emerald-400 bg-emerald-500/10' : 'text-zinc-600 hover:text-white hover:bg-zinc-800'
                    }`}
                  >
                    {isMastered ? <CheckCircle2 size={20} /> : <Circle size={20} />}
                  </button>
                </CardContent>
              </Card>
            );
          })}
        </div>
      ) : (
        <div className="p-12 text-center bg-card border border-dashed border-white/10 rounded-2xl text-muted-foreground flex flex-col items-center justify-center gap-2">
          <Award size={36} className="text-zinc-600" />
          <p>Tidak ada karakter Kanji yang sesuai dengan filter ini.</p>
        </div>
      )}

      {/* ================= MODAL OVERLAY DETAIL KANJI ================= */}
      {selectedKanji && (
        <div 
          className="fixed inset-0 bg-black/80 backdrop-blur-sm flex items-center justify-center p-4 z-50 animate-fade-in"
          onClick={() => setSelectedKanji(null)}
        >
          <div 
            className="bg-zinc-950 border border-white/10 rounded-2xl max-w-md w-full p-6 space-y-5 relative shadow-2xl overflow-hidden"
            onClick={(e) => e.stopPropagation()}
          >
            <button 
              onClick={() => setSelectedKanji(null)}
              className="absolute top-4 right-4 text-zinc-400 hover:text-white p-1 hover:bg-zinc-900 rounded-lg transition-colors cursor-pointer"
            >
              <X size={18} />
            </button>

            {/* Header Modal - Klik huruf untuk memutar suara ulang */}
            <div className="flex items-center gap-4 border-b border-white/5 pb-4">
              <div 
                onClick={() => playSound(selectedKanji.kanji)}
                className="w-20 h-20 bg-primary/10 border border-primary/20 text-primary rounded-2xl flex items-center justify-center text-4xl font-black shadow-md cursor-pointer hover:bg-primary/20 transition-colors group relative"
                title="Dengarkan Suara Kanji"
              >
                {selectedKanji.kanji}
                <div className="absolute -bottom-2 -right-2 bg-primary text-white p-1 rounded-lg shadow-lg opacity-0 group-hover:opacity-100 transition-opacity">
                  <Volume2 size={14} />
                </div>
              </div>
              <div className="space-y-0.5">
                <span className="text-[10px] font-bold text-primary uppercase tracking-wider bg-primary/10 px-2 py-0.5 rounded-md">Kanji N5</span>
                <h3 className="text-2xl font-black text-white pt-1">{selectedKanji.arti}</h3>
              </div>
            </div>

            <div className="space-y-3 text-sm">
              <div className="p-3 bg-zinc-900/60 border border-white/5 rounded-xl space-y-1">
                <span className="text-xs font-semibold text-zinc-500 block">Onyomi (Cara Baca Cina):</span>
                <p className="text-zinc-200 font-medium tracking-wide">{selectedKanji.onyomi}</p>
              </div>

              <div className="p-3 bg-zinc-900/60 border border-white/5 rounded-xl space-y-1">
                <span className="text-xs font-semibold text-zinc-500 block">Kunyomi (Cara Baca Jepang):</span>
                <p className="text-zinc-200 font-medium tracking-wide">{selectedKanji.kunyomi}</p>
              </div>

              {/* Contoh Penggunaan Kata - Dengan Tombol Suara */}
              <div className="p-4 bg-primary/5 border-l-4 border-primary rounded-r-xl relative">
                <div className="flex justify-between items-start">
                  <div className="space-y-1.5 pr-8">
                    <div className="flex items-center gap-1.5 text-zinc-400">
                      <BookOpen size={14} className="text-primary" />
                      <span className="text-xs font-bold uppercase tracking-wider">Contoh Kosakata:</span>
                    </div>
                    <p className="text-xl font-bold text-white tracking-wide">{selectedKanji.contoh}</p>
                    <p className="text-sm text-zinc-400 italic">&ldquo;{selectedKanji.contohArti}&rdquo;</p>
                  </div>
                  
                  {/* Tombol Play Suara Contoh Kosakata */}
                  <button 
                    onClick={() => playSound(selectedKanji.contoh)}
                    className="absolute top-4 right-4 bg-zinc-900 text-zinc-400 hover:text-primary p-2.5 rounded-xl border border-white/5 hover:border-primary/30 transition-all cursor-pointer hover:scale-105"
                    title="Dengarkan Contoh Kalimat/Kata"
                  >
                    <Volume2 size={20} />
                  </button>
                </div>
              </div>
            </div>

            <div className="pt-2">
              <button
                onClick={() => {
                  toggleMastery(selectedKanji.id);
                  setSelectedKanji(null);
                }}
                className={`w-full py-2.5 rounded-xl font-bold text-sm transition-all cursor-pointer flex items-center justify-center gap-2 ${
                  masteredIds.includes(selectedKanji.id)
                    ? 'bg-emerald-500/20 text-emerald-400 border border-emerald-500/30 hover:bg-emerald-500/30'
                    : 'bg-zinc-900 text-white border border-white/5 hover:bg-zinc-800'
                }`}
              >
                {masteredIds.includes(selectedKanji.id) ? (
                  <><CheckCircle2 size={16} /> Sudah Kamu Hafal</>
                ) : (
                  <><Circle size={16} /> Tandai Sudah Hafal</>
                )}
              </button>
            </div>

          </div>
        </div>
      )}
    </div>
  );
};