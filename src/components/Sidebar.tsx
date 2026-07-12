import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import {
  LayoutDashboard,
  Languages,
  BookOpenText,
  PenTool,
  Book,
  Target,
  Repeat,
  BarChart3,
  Settings,
  Menu,
  X,
} from 'lucide-react';
// Ubah dari '../lib/utils' menjadi:
import { cn } from '../utils/utils.ts';

const navItems = [
  { name: 'Dashboard', path: '/', icon: LayoutDashboard },
  { name: 'Kana', path: '/kana', icon: Languages },
  { name: 'Vocabulary', path: '/vocabulary', icon: BookOpenText },
  { name: 'Kanji', path: '/kanji', icon: PenTool },
  { name: 'Grammar', path: '/grammar', icon: Book },
  { name: 'Quiz', path: '/quiz', icon: Target },
  { name: 'Review', path: '/review', icon: Repeat },
  { name: 'Statistics', path: '/statistics', icon: BarChart3 },
  { name: 'Settings', path: '/settings', icon: Settings },
];

export const Sidebar = () => {
  const location = useLocation();
  // State buka/tutup drawer khusus mobile
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      {/* TOP BAR MOBILE (hanya tampil di bawah breakpoint lg) */}
      <div className="lg:hidden fixed top-0 left-0 right-0 h-16 bg-card border-b border-white/5 flex items-center justify-between px-4 z-40">
        <h1 className="text-lg font-bold text-primary tracking-tight">Nihongo Trainer</h1>
        <button
          onClick={() => setIsOpen(true)}
          className="p-2 text-white hover:bg-white/5 rounded-lg transition-colors"
          aria-label="Buka menu navigasi"
        >
          <Menu size={24} />
        </button>
      </div>

      {/* BACKDROP OVERLAY saat drawer terbuka di mobile */}
      {isOpen && (
        <div
          className="lg:hidden fixed inset-0 bg-black/60 z-40 animate-fade-in"
          onClick={() => setIsOpen(false)}
          aria-hidden="true"
        />
      )}

      {/* SIDEBAR / DRAWER */}
      <aside
        className={cn(
          'w-64 border-r border-card bg-card p-6 flex flex-col h-screen fixed top-0 left-0 z-50 transition-transform duration-300 ease-in-out',
          'lg:translate-x-0',
          isOpen ? 'translate-x-0' : '-translate-x-full'
        )}
      >
        <div className="mb-10 px-2 flex items-center justify-between">
          <h1 className="text-2xl font-bold text-primary tracking-tight">Nihongo Trainer</h1>
          {/* Tombol tutup hanya perlu di mobile, desktop sidebar selalu terbuka */}
          <button
            onClick={() => setIsOpen(false)}
            className="lg:hidden text-zinc-400 hover:text-white p-1 rounded-lg hover:bg-white/5 transition-colors"
            aria-label="Tutup menu navigasi"
          >
            <X size={22} />
          </button>
        </div>

        <nav className="flex flex-col gap-2 overflow-y-auto">
          {navItems.map((item) => {
            const Icon = item.icon;
            const isActive = location.pathname === item.path;

            return (
              <Link
                key={item.path}
                to={item.path}
                onClick={() => setIsOpen(false)} // Otomatis tutup drawer setelah pilih menu di mobile
                className={cn(
                  'flex items-center gap-3 px-4 py-3 rounded-xl transition-all duration-200 text-sm font-medium',
                  isActive
                    ? 'bg-primary text-white shadow-lg shadow-primary/20'
                    : 'text-muted-foreground hover:bg-white/5 hover:text-white'
                )}
              >
                <Icon size={20} />
                {item.name}
              </Link>
            );
          })}
        </nav>
      </aside>
    </>
  );
};