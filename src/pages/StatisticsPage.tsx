// src/pages/StatisticsPage.tsx
import { useState } from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import { Card, CardContent } from '../components/ui/card';
import { BarChart3, TrendingUp, Award } from 'lucide-react';

export const StatisticsPage = () => {
  // Inisialisasi data langsung tanpa useEffect (Lazy Initialization)
  const [xp] = useState(() => {
    const savedXp = localStorage.getItem('nt_xp');
    return savedXp ? parseInt(savedXp, 10) : 0;
  });

  const [kanjiCount] = useState(() => {
    const savedKanji = localStorage.getItem('nt_mastered_kanji');
    try {
      const parsed = savedKanji ? JSON.parse(savedKanji) : [];
      return Array.isArray(parsed) ? parsed.length : 0;
    } catch {
      return 0;
    }
  });

  const data = [
    { day: 'Sen', xp: 0 },
    { day: 'Sel', xp: 0 },
    { day: 'Rab', xp: 0 },
    { day: 'Kam', xp: 0 },
    { day: 'Jum', xp: 0 },
    { day: 'Sab', xp: 0 },
    { day: 'Min', xp: xp },
  ];

  return (
    <div className="space-y-6 max-w-5xl mx-auto animate-fade-in p-4">
      <div>
        <h2 className="text-3xl font-black text-white">Learning Insights</h2>
        <p className="text-zinc-400">Progres belajar kamu secara real-time.</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <Card className="bg-zinc-900 border-white/5 rounded-xl">
          <CardContent className="p-4 flex items-center gap-4">
            <div className="p-3 bg-primary/10 text-primary rounded-xl"><TrendingUp size={24} /></div>
            <div>
              <p className="text-2xl font-black text-white">{xp}</p>
              <p className="text-xs text-zinc-500 uppercase">Total XP Kamu</p>
            </div>
          </CardContent>
        </Card>

        <Card className="bg-zinc-900 border-white/5 rounded-xl">
          <CardContent className="p-4 flex items-center gap-4">
            <div className="p-3 bg-emerald-500/10 text-emerald-400 rounded-xl"><BarChart3 size={24} /></div>
            <div>
              <p className="text-2xl font-black text-white">{kanjiCount}</p>
              <p className="text-xs text-zinc-500 uppercase">Kanji Dikuasai</p>
            </div>
          </CardContent>
        </Card>

        <Card className="bg-zinc-900 border-white/5 rounded-xl">
          <CardContent className="p-4 flex items-center gap-4">
            <div className="p-3 bg-amber-500/10 text-amber-400 rounded-xl"><Award size={24} /></div>
            <div>
              <p className="text-2xl font-black text-white">0</p>
              <p className="text-xs text-zinc-500 uppercase">Streak (Coming Soon)</p>
            </div>
          </CardContent>
        </Card>
      </div>

      <Card className="bg-zinc-900 border-white/5 rounded-2xl">
        <CardContent className="p-6">
          <h3 className="text-lg font-bold text-white mb-6">Visualisasi Progress</h3>
          <div className="h-[300px] w-full">
            <ResponsiveContainer width="100%" height="100%">
              <LineChart data={data}>
                <CartesianGrid strokeDasharray="3 3" stroke="#333" />
                <XAxis dataKey="day" stroke="#666" />
                <YAxis stroke="#666" />
                <Tooltip contentStyle={{ backgroundColor: '#000', border: '1px solid #333', color: '#fff' }} />
                <Line type="monotone" dataKey="xp" stroke="#eab308" strokeWidth={3} />
              </LineChart>
            </ResponsiveContainer>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};