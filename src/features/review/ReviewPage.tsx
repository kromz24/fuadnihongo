// src/features/review/ReviewPage.tsx
import { useState, useMemo } from 'react';
import { kanjiData } from '../../data/kanjiData';
import { Card, CardContent } from '../../components/ui/card';
import { ArrowRight, BookOpen } from 'lucide-react';

export const ReviewPage = () => {
  const [showAnswer, setShowAnswer] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);

  // Mengambil data Kanji yang sudah ditandai hafal dari localStorage
  // Menggunakan useMemo agar hanya berjalan sekali saat komponen dimuat
  const reviewItems = useMemo(() => {
    const saved = localStorage.getItem('nt_mastered_kanji');
    const masteredIds = saved ? JSON.parse(saved) : [];
    
    // Hanya ambil Kanji yang sudah dihafal (Mastered)
    return kanjiData.filter((item) => masteredIds.includes(item.id));
  }, []);

  const currentItem = reviewItems[currentIndex];

  const handleNext = () => {
    if (reviewItems.length === 0) return;
    setShowAnswer(false);
    setCurrentIndex((prev) => (prev + 1) % reviewItems.length);
  };

  if (reviewItems.length === 0) {
    return (
      <div className="flex flex-col items-center justify-center h-[60vh] text-center space-y-4 px-4">
        <BookOpen size={48} className="text-zinc-700" />
        <h2 className="text-xl font-bold text-white">Belum Ada Kanji untuk Review</h2>
        <p className="text-zinc-400">Tandai beberapa Kanji sebagai "Sudah Hafal" di halaman Kanji Tracker terlebih dahulu.</p>
        <a href="/kanji" className="text-primary font-bold hover:underline">Pergi ke Kanji Tracker</a>
      </div>
    );
  }

  return (
    <div className="max-w-xl mx-auto space-y-8 animate-fade-in p-4">
      <h2 className="text-2xl font-black text-white text-center">SRS Flashcard Review</h2>
      
      {/* Flashcard Area */}
      <Card 
        onClick={() => setShowAnswer(!showAnswer)}
        className="bg-zinc-900 border border-white/10 min-h-[300px] flex items-center justify-center cursor-pointer hover:border-primary/50 transition-all shadow-2xl rounded-2xl"
      >
        <CardContent className="text-center p-10 space-y-6">
          {!showAnswer ? (
            <div className="space-y-4">
              <span className="text-[10px] uppercase tracking-widest text-zinc-500 font-bold">Tebak Kanji Ini</span>
              <h1 className="text-8xl font-black text-white">{currentItem.kanji}</h1>
            </div>
          ) : (
            <div className="space-y-4 animate-in fade-in zoom-in duration-300">
              <h2 className="text-4xl font-black text-primary">{currentItem.arti}</h2>
              <div className="text-zinc-400 space-y-1">
                <p><span className="text-zinc-600">Onyomi:</span> {currentItem.onyomi}</p>
                <p><span className="text-zinc-600">Kunyomi:</span> {currentItem.kunyomi}</p>
              </div>
              <div className="pt-4 border-t border-white/5">
                <p className="text-xl font-bold text-white">{currentItem.contoh}</p>
                <p className="text-sm italic text-zinc-500">{currentItem.contohArti}</p>
              </div>
            </div>
          )}
        </CardContent>
      </Card>

      {/* Controls */}
      <div className="flex justify-center">
        <button 
          onClick={handleNext}
          className="flex items-center gap-2 bg-primary hover:bg-primary/90 text-white px-8 py-3 rounded-xl font-bold transition-all shadow-lg shadow-primary/20"
        >
          <ArrowRight size={20} /> Berikutnya
        </button>
      </div>
      
      <p className="text-center text-xs text-zinc-600">
        Klik kartu untuk membalik jawaban.
      </p>
    </div>
  );
};