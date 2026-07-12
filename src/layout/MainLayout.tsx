import { Outlet } from 'react-router-dom';
import { Sidebar } from '../components/Sidebar';

export const MainLayout = () => {
  return (
    <div className="flex min-h-screen bg-background text-foreground">
      <Sidebar />
      
      {/* Margin-left 64 (256px) untuk memberi ruang bagi sidebar yang fixed */}
      <main className="flex-1 ml-64 p-8">
        <div className="max-w-7xl mx-auto">
          <Outlet />
        </div>
      </main>
    </div>
  );
};