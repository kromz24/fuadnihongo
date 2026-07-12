// src/features/settings/SettingsPage.tsx
import { useState } from 'react';
import { Card, CardContent } from '../../components/ui/card';
import { Settings, RotateCcw, PlayCircle, Cloud, LogIn, LogOut, Loader2 } from 'lucide-react';
import { useAuth } from '../../hooks/useAuth';
import {
  readLocalProgress,
  writeLocalProgress,
  pullProgress,
  pushProgress,
  mergeProgress,
} from '../../services/progressSync';

export const SettingsPage = () => {
  const [autoPlay, setAutoPlay] = useState(localStorage.getItem('nt_autoPlay') !== 'false');
  const { user, loading, signIn, signUp, signOut } = useAuth();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [authMode, setAuthMode] = useState<'login' | 'signup'>('login');
  const [authError, setAuthError] = useState('');
  const [authLoading, setAuthLoading] = useState(false);
  const [syncStatus, setSyncStatus] = useState<'idle' | 'syncing' | 'success' | 'error'>('idle');

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

  const handleAuthSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setAuthError('');
    setAuthLoading(true);

    const { error } = authMode === 'login' ? await signIn(email, password) : await signUp(email, password);

    if (error) {
      setAuthError(error.message);
    } else if (authMode === 'signup') {
      setAuthError('Akun berhasil dibuat! Cek email kamu untuk verifikasi, lalu login.');
    }
    setAuthLoading(false);
  };

  const handleSyncNow = async () => {
    if (!user) return;
    setSyncStatus('syncing');

    const local = readLocalProgress();
    const remote = await pullProgress(user.id);
    const merged = remote ? mergeProgress(local, remote) : local;

    writeLocalProgress(merged);
    const success = await pushProgress(user.id, merged);

    setSyncStatus(success ? 'success' : 'error');
    if (success) {
      setTimeout(() => window.location.reload(), 800);
    }
  };

  return (
    <div className="max-w-2xl mx-auto space-y-8 animate-fade-in p-4">
      <div className="flex items-center gap-3">
        <Settings className="text-primary" size={32} />
        <h2 className="text-3xl font-black text-white">App Settings</h2>
      </div>

      <div className="space-y-4">
        {/* Sync ke Cloud (Supabase) */}
        <Card className="bg-zinc-900 border-white/5">
          <CardContent className="p-6 space-y-4">
            <div className="flex items-center gap-4">
              <Cloud className="text-sky-400" />
              <div>
                <h3 className="font-bold text-white">Sync ke Cloud</h3>
                <p className="text-xs text-zinc-500">Simpan progres kamu supaya nggak hilang & bisa diakses di device lain.</p>
              </div>
            </div>

            {loading ? (
              <div className="flex items-center gap-2 text-zinc-500 text-sm">
                <Loader2 size={16} className="animate-spin" /> Memuat status akun...
              </div>
            ) : user ? (
              <div className="space-y-3">
                <p className="text-sm text-zinc-300">
                  Login sebagai <span className="font-bold text-white">{user.email}</span>
                </p>
                <div className="flex gap-3">
                  <button
                    onClick={handleSyncNow}
                    disabled={syncStatus === 'syncing'}
                    className="flex-1 flex items-center justify-center gap-2 bg-sky-500/10 text-sky-400 border border-sky-500/20 px-4 py-2 rounded-lg font-bold text-sm hover:bg-sky-500 hover:text-white transition-all disabled:opacity-50"
                  >
                    {syncStatus === 'syncing' ? <Loader2 size={16} className="animate-spin" /> : <Cloud size={16} />}
                    {syncStatus === 'syncing' ? 'Menyinkronkan...' : 'Sync Sekarang'}
                  </button>
                  <button
                    onClick={() => signOut()}
                    className="flex items-center justify-center gap-2 bg-zinc-800 text-zinc-300 px-4 py-2 rounded-lg font-bold text-sm hover:bg-zinc-700 transition-all"
                  >
                    <LogOut size={16} /> Logout
                  </button>
                </div>
                {syncStatus === 'success' && (
                  <p className="text-xs text-emerald-400">Berhasil disinkronkan! Memuat ulang halaman...</p>
                )}
                {syncStatus === 'error' && <p className="text-xs text-rose-400">Gagal sync, coba lagi.</p>}
              </div>
            ) : (
              <form onSubmit={handleAuthSubmit} className="space-y-3">
                <input
                  type="email"
                  required
                  placeholder="Email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full bg-zinc-950 border border-white/10 rounded-lg px-4 py-2.5 text-sm text-white focus:border-primary outline-none"
                />
                <input
                  type="password"
                  required
                  minLength={6}
                  placeholder="Password (min. 6 karakter)"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="w-full bg-zinc-950 border border-white/10 rounded-lg px-4 py-2.5 text-sm text-white focus:border-primary outline-none"
                />
                {authError && <p className="text-xs text-rose-400">{authError}</p>}
                <div className="flex items-center gap-3 flex-wrap">
                  <button
                    type="submit"
                    disabled={authLoading}
                    className="flex-1 flex items-center justify-center gap-2 bg-primary text-white px-4 py-2.5 rounded-lg font-bold text-sm hover:bg-primary/90 transition-all disabled:opacity-50"
                  >
                    {authLoading ? <Loader2 size={16} className="animate-spin" /> : <LogIn size={16} />}
                    {authMode === 'login' ? 'Login' : 'Daftar'}
                  </button>
                  <button
                    type="button"
                    onClick={() => setAuthMode(authMode === 'login' ? 'signup' : 'login')}
                    className="text-xs text-zinc-400 hover:text-white underline shrink-0"
                  >
                    {authMode === 'login' ? 'Belum punya akun?' : 'Sudah punya akun?'}
                  </button>
                </div>
              </form>
            )}
          </CardContent>
        </Card>

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