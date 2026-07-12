// src/features/settings/SettingsPage.tsx
import { useState } from 'react';
import { Card, CardContent } from '../../components/ui/card';
import { Settings, RotateCcw, PlayCircle } from 'lucide-react';

export const SettingsPage = () => {
  const [autoPlay, setAutoPlay] = useState(localStorage.getItem('nt_autoPlay') !== 'false');

  const handleReset = () => {
    if (confirm("Yakin mau hapus semua progres? Data XP dan Kanji yang dihafal akan hilang permanen!")) {
      localStorage.clear();
      window.location.reload();
    }
  };

  const toggleAutoPlay = () => {
    const newState = !autoPlay;
    setAutoPlay(newState);
    localStorage.setItem('nt_autoPlay', String(newState));
  };

  return (
    <div className="max-w-2xl mx-auto space-y-8 animate-fade-in p-4">
      <div className="flex items-center gap-3">
        <Settings className="text-primary" size={32} />
        <h2 className="text-3xl font-black text-white">App Settings</h2>
      </div>

      <div className="space-y-4">
        {/* Toggle Audio Auto-Play */}
        <Card className="bg-zinc-900 border-white/5">
          <CardContent className="p-6 flex items-center justify-between">
            <div className="flex items-center gap-4">
              <PlayCircle className="text-rose-400" />
              <div>
                <h3 className="font-bold text-white">Audio Auto-Play</h3>
                <p className="text-xs text-zinc-500">Putar audio otomatis saat buka kata.</p>
              </div>
            </div>
            <button 
              onClick={toggleAutoPlay}
              className={`w-12 h-6 rounded-full transition-colors ${autoPlay ? 'bg-rose-500' : 'bg-zinc-700'}`}
            >
              <div className={`w-4 h-4 bg-white rounded-full transition-transform ${autoPlay ? 'translate-x-7' : 'translate-x-1'}`} />
            </button>
          </CardContent>
        </Card>

        {/* Reset Data */}
        <Card className="bg-zinc-900 border-white/5 border-rose-500/20">
          <CardContent className="p-6 flex items-center justify-between">
            <div className="flex items-center gap-4">
              <RotateCcw className="text-rose-500" />
              <div>
                <h3 className="font-bold text-white">Reset Progres Belajar</h3>
                <p className="text-xs text-zinc-500">Hapus semua XP, Level, dan data Kanji.</p>
              </div>
            </div>
            <button 
              onClick={handleReset}
              className="bg-rose-500/10 text-rose-500 border border-rose-500/20 px-4 py-2 rounded-lg font-bold text-sm hover:bg-rose-500 hover:text-white transition-all"
            >
              Reset Data
            </button>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};