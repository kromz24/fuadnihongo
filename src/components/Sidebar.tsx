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
  Settings 
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

  return (
    <aside className="w-64 border-r border-card bg-card p-6 flex flex-col h-screen fixed">
      <div className="mb-10 px-2">
        <h1 className="text-2xl font-bold text-primary tracking-tight">Nihongo Trainer</h1>
      </div>

      <nav className="flex flex-col gap-2">
        {navItems.map((item) => {
          const Icon = item.icon;
          const isActive = location.pathname === item.path;
          
          return (
            <Link
              key={item.path}
              to={item.path}
              className={cn(
                "flex items-center gap-3 px-4 py-3 rounded-xl transition-all duration-200 text-sm font-medium",
                isActive 
                  ? "bg-primary text-white shadow-lg shadow-primary/20" 
                  : "text-muted-foreground hover:bg-white/5 hover:text-white"
              )}
            >
              <Icon size={20} />
              {item.name}
            </Link>
          );
        })}
      </nav>
    </aside>
  );
};