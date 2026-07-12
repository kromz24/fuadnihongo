// src/pages/Dashboard.tsx
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Sword, BookOpen, ScrollText, Target, Languages, Trophy, Flame, CheckCircle2, RotateCcw } from 'lucide-react';
import { Card, CardContent } from '../components/ui/card';
import { initialVocabulary } from '../data/initialData';

export const Dashboard = () => {
  // 1. Hitung statistik di sini (di body komponen) agar bisa dipakai di JSX nanti
  const n5Count = initialVocabulary.filter((item) => item.level === 'N5').length;
  const n4Count = initialVocabulary.filter((item) => item.level === 'N4').length;
  const totalVocab = initialVocabulary.length;

  // 2. State Hooks
  const [xp, setXp] = useState(() => parseInt(localStorage.getItem('nt_xp') || '0', 10));
  const [streak, setStreak] = useState(() => parseInt(localStorage.getItem('nt_streak') || '0', 10));
  const [dailyGoal, setDailyGoal] = useState(() => parseInt(localStorage.getItem('nt_daily_goal') || '0', 10));

  const [kanjiMastered, setKanjiMastered] = useState(() => {
    try {
      const saved = localStorage.getItem('nt_mastered_kanji');
      return saved ? JSON.parse(saved).length : 0;
    } catch {
      return 0;
    }
  }); // <-- FIX: kurung penutup useState() yang sebelumnya hilang

  const dailyTarget = 10;
  const currentLevel = Math.floor(xp / 100) + 1;
  const xpProgress = xp % 100;
  const jlptProgress = Math.min((kanjiMastered / 100) * 100, 100);

  // Fungsi untuk reset manual via UI
  const handleHardReset = () => {
    localStorage.clear();
    setXp(0);
    setStreak(0);
    setDailyGoal(0);
    setKanjiMastered(0);
    window.location.reload();
  };

  const modules = [
    { title: 'Daily Arena Quiz', desc: 'Uji hafalan kosakatamu dan kumpulkan XP!', icon: <Sword size={24} />, link: '/quiz', color: 'text-rose-400', bgHover: 'hover:border-rose-500/50 hover:shadow-rose-500/10' },
    { title: 'Kana Zen Board', desc: 'Papan interaktif Hiragana & Katakana.', icon: <Languages size={24} />, link: '/kana', color: 'text-cyan-400', bgHover: 'hover:border-cyan-500/50 hover:shadow-cyan-500/10' },
    { title: 'Vocabulary Nexus', desc: 'Database 100 Kosakata N5 + Audio.', icon: <BookOpen size={24} />, link: '/vocabulary', color: 'text-amber-400', bgHover: 'hover:border-amber-500/50 hover:shadow-amber-500/10' },
    { title: 'Bunpou Grid', desc: 'Pelajari rumus tata bahasa dasar N5.', icon: <ScrollText size={24} />, link: '/grammar', color: 'text-emerald-400', bgHover: 'hover:border-emerald-500/50 hover:shadow-emerald-500/10' },
    { title: 'Kanji Tracker', desc: 'Lacak penguasaan karakter Kanji N5.', icon: <Target size={24} />, link: '/kanji', color: 'text-purple-400', bgHover: 'hover:border-purple-500/50 hover:shadow-purple-500/10' }
  ];

  // FIX: hanya ADA SATU return di akhir komponen.
  // Blok statistik N5/N4/Total Vocab yang sebelumnya jadi "return" terpisah
  // (dan membuat semua kode di bawahnya tidak pernah dijalankan / dead code)
  // sekarang digabung sebagai section "Vocab Stats" di dalam return utama ini.
  return (
    <div className="space-y-8 text-white max-w-6xl mx-auto animate-fade-in pb-10">

      {/* HERO SECTION */}
      <div className="flex flex-col lg:flex-row gap-6 items-stretch">
        <div className="flex-1 bg-gradient-to-br from-zinc-900 to-zinc-950 border border-white/10 rounded-3xl p-8 relative overflow-hidden shadow-2xl flex flex-col justify-center">
          <div className="absolute -right-20 -top-20 w-64 h-64 bg-primary/10 rounded-full blur-3xl" />
          <div className="relative z-10 space-y-2">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2 text-primary font-bold tracking-wide uppercase text-xs mb-2">
                <Flame size={16} /> <span>Persiapan Karir di Jepang 🇯🇵</span>
              </div>
              <button onClick={handleHardReset} className="text-zinc-600 hover:text-rose-500 transition-colors">
                <RotateCcw size={16} />
              </button>
            </div>
            <h1 className="text-4xl sm:text-5xl font-black tracking-tight text-white">Okaeri, <span className="text-primary">Fuad!</span></h1>
            <p className="text-zinc-400 max-w-md text-sm leading-relaxed pt-2">Sistem Nihongo Trainer Pro siap digunakan.</p>
          </div>
        </div>

        {/* LEVEL STATS CARD */}
        <Card className="w-full lg:w-80 bg-zinc-950 border border-white/10 rounded-3xl shrink-0 shadow-xl overflow-hidden">
          <CardContent className="p-6 flex flex-col h-full justify-between gap-6">
            <div className="flex justify-between items-start">
              <div className="space-y-1">
                <p className="text-xs font-bold text-zinc-500 uppercase tracking-widest">Current Level</p>
                <div className="flex items-baseline gap-1">
                  <span className="text-4xl font-black text-white">{currentLevel}</span>
                  <span className="text-sm font-semibold text-primary">/ 100</span>
                </div>
              </div>
              <div className="w-12 h-12 bg-primary/20 rounded-2xl flex items-center justify-center text-primary border border-primary/30"><Trophy size={24} /></div>
            </div>
            <div className="space-y-3">
              <div className="flex justify-between text-xs font-semibold text-zinc-400">
                <span>XP Progress</span> <span>{xpProgress} / 100 XP</span>
              </div>
              <div className="w-full h-3 bg-zinc-900 rounded-full overflow-hidden p-[1px] border border-white/5">
                <div className="h-full bg-gradient-to-r from-primary to-emerald-400 rounded-full" style={{ width: `${xpProgress}%` }} />
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* VOCAB STATS (sebelumnya jadi return terpisah, sekarang digabung di sini) */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div className="bg-zinc-900 p-6 rounded-2xl border border-white/5">
          <p className="text-zinc-500 text-sm">Total Vocab N5</p>
          <p className="text-3xl font-black text-white mt-2">{n5Count}</p>
        </div>
        <div className="bg-zinc-900 p-6 rounded-2xl border border-white/5">
          <p className="text-zinc-500 text-sm">Total Vocab N4</p>
          <p className="text-3xl font-black text-white mt-2">{n4Count}</p>
        </div>
        <div className="bg-zinc-900 p-6 rounded-2xl border border-white/5">
          <p className="text-zinc-500 text-sm">Total Keseluruhan</p>
          <p className="text-3xl font-black text-white mt-2">{totalVocab}</p>
        </div>
      </div>

      {/* QUICK STATS & JLPT PROGRESS */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
        <div className="lg:col-span-2 grid grid-cols-2 gap-4">
          <div className="bg-zinc-900/40 border border-white/5 p-4 rounded-2xl flex items-center gap-4">
            <Target size={24} className="text-purple-400" />
            <div>
              <p className="text-2xl font-black text-white">{kanjiMastered}</p>
              <p className="text-xs font-semibold text-zinc-500 uppercase">Kanji Dikuasai</p>
            </div>
          </div>
          <div className="bg-zinc-900/40 border border-white/5 p-4 rounded-2xl flex items-center gap-4">
            <Flame size={24} className="text-rose-400" />
            <div>
              <p className="text-2xl font-black text-white">{streak}</p>
              <p className="text-xs font-semibold text-zinc-500 uppercase">Daily Streak</p>
            </div>
          </div>
          <div className="col-span-2 bg-zinc-900/40 border border-white/5 p-4 rounded-2xl flex items-center gap-4">
            <CheckCircle2 size={24} className="text-amber-400" />
            <div>
              <p className="text-2xl font-black text-white">{dailyGoal}/{dailyTarget}</p>
              <p className="text-xs font-semibold text-zinc-500 uppercase">Daily Goal (Kanji)</p>
            </div>
          </div>
        </div>

        {/* JLPT Progress Card */}
        <Card className="bg-zinc-900/40 border border-white/5 rounded-2xl p-6">
          <div className="flex justify-between items-end mb-3">
            <div>
              <h3 className="font-bold text-white">Progress JLPT N5</h3>
              <p className="text-xs text-zinc-400">Jalan menuju ujian resmi</p>
            </div>
            <span className="text-primary font-bold">{jlptProgress}%</span>
          </div>
          <div className="w-full h-3 bg-zinc-950 rounded-full overflow-hidden">
            <div className="h-full bg-primary rounded-full transition-all duration-500" style={{ width: `${jlptProgress}%` }} />
          </div>
        </Card>
      </div>

      {/* QUICK LAUNCH */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {modules.map((mod, idx) => (
          <Link key={idx} to={mod.link} className="block group">
            <Card className={`bg-zinc-900/50 border border-white/5 rounded-2xl transition-all h-full hover:-translate-y-1.5 ${mod.bgHover}`}>
              <CardContent className="p-5 flex flex-col h-full">
                <div className="flex items-center gap-3 mb-3">
                  <div className={`p-2.5 rounded-xl bg-zinc-950 border border-white/5 ${mod.color}`}>{mod.icon}</div>
                  <h3 className="font-bold text-zinc-200">{mod.title}</h3>
                </div>
                <p className="text-sm text-zinc-400 flex-1">{mod.desc}</p>
              </CardContent>
            </Card>
          </Link>
        ))}
      </div>
    </div>
  );
};
