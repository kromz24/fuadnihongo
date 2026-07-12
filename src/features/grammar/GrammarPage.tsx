// src/features/grammar/GrammarPage.tsx
import { grammarData } from '../../data/grammarData';
import { Card, CardContent, CardHeader, CardTitle } from '../../components/ui/card';
import { BookOpen, Bookmark, Volume2 } from 'lucide-react'; // Tambah Volume2

export const GrammarPage = () => {
  // Fungsi TTS (Text-to-Speech) untuk melafalkan contoh kalimat bahasa Jepang
  const playSound = (text: string) => {
    if (!text) return;
    if ('speechSynthesis' in window) {
      window.speechSynthesis.cancel(); // Hentikan suara lain jika sedang berjalan
      const utterance = new SpeechSynthesisUtterance(text);
      utterance.lang = 'ja-JP';
      utterance.rate = 0.85; // Kecepatan ideal untuk mendengarkan struktur partikel
      window.speechSynthesis.speak(utterance);
    }
  };

  return (
    <div className="space-y-6 text-white max-w-4xl mx-auto animate-fade-in">
      {/* Header Halaman */}
      <div>
        <h2 className="text-3xl font-black tracking-tight">Bunpou Master Grid</h2>
        <p className="text-sm text-muted-foreground mt-1">
          Pelajari pola kalimat dasar N5. Klik ikon speaker pada contoh kalimat untuk mendengarkan pelafalan audionya.
        </p>
      </div>

      {/* List Kartu Tata Bahasa */}
      <div className="space-y-4">
        {grammarData.map((item) => (
          <Card 
            key={item.id}
            className="bg-card border-white/5 hover:border-primary/30 transition-all duration-200 rounded-xl overflow-hidden shadow-lg"
          >
            <CardHeader className="bg-zinc-900/30 border-b border-white/5 p-5 flex flex-row items-center justify-between">
              <div className="space-y-1 flex-1 min-w-0 mr-4">
                <CardTitle className="text-xl font-bold text-white tracking-wide">
                  {item.pola}
                </CardTitle>
                <p className="text-xs font-semibold text-primary tracking-wide uppercase">
                  Arti: {item.arti}
                </p>
              </div>
              <div className="p-2 bg-primary/10 rounded-lg text-primary shrink-0">
                <BookOpen size={18} />
              </div>
            </CardHeader>

            <CardContent className="p-5 space-y-4">
              {/* Rumus Formulasi */}
              <div className="p-3 bg-zinc-950 border border-white/5 rounded-xl space-y-1">
                <span className="text-[10px] font-bold text-muted-foreground uppercase tracking-wider block">Struktur Rumus</span>
                <p className="text-sm font-mono text-cyan-400 font-medium">{item.rumus}</p>
              </div>

              {/* Deskripsi Penjelasan */}
              <div className="text-sm text-zinc-300 leading-relaxed">
                <span className="font-semibold text-white">Fungsi: </span>
                {item.penjelasan}
              </div>

              {/* Blok Contoh Kalimat dengan Integrasi Audio */}
              <div className="p-4 bg-zinc-900/60 border-l-4 border-primary rounded-r-xl relative group">
                <div className="flex justify-between items-start">
                  <div className="space-y-2 pr-12">
                    <div className="flex items-center gap-2 text-zinc-400">
                      <Bookmark size={14} className="text-primary" />
                      <span className="text-xs font-bold uppercase tracking-wider">Contoh Penggunaan:</span>
                    </div>
                    <div>
                      <p className="text-2xl font-bold text-white tracking-wide">{item.contohKalimat}</p>
                      <p className="text-xs text-primary font-medium mt-0.5">Cara baca: {item.furigana}</p>
                    </div>
                    <p className="text-sm text-zinc-400 italic mt-1">
                      &ldquo;{item.terjemahan}&rdquo;
                    </p>
                  </div>

                  {/* Tombol Play Suara Kalimat Contoh */}
                  <button 
                    onClick={() => playSound(item.contohKalimat)}
                    className="absolute top-4 right-4 bg-zinc-950 text-zinc-400 hover:text-primary p-2.5 rounded-xl border border-white/5 hover:border-primary/30 transition-all cursor-pointer hover:scale-105 active:scale-95"
                    title="Dengarkan Pelafalan Kalimat"
                  >
                    <Volume2 size={20} />
                  </button>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
};