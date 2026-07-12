import { Outlet } from 'react-router-dom';
import { Sidebar } from '../components/Sidebar';

export const MainLayout = () => {
  return (
    <div className="flex min-h-screen bg-background text-foreground">
      <Sidebar />

      {/*
        Mobile: konten full width, ada pt-20 utk ruang top bar (h-16) + jarak.
        Desktop (lg ke atas): margin-left 64 (256px) spt semula utk sidebar fixed.
      */}
      <main className="flex-1 lg:ml-64 pt-20 lg:pt-8 p-4 sm:p-6 lg:p-8">
        <div className="max-w-7xl mx-auto">
          <Outlet />
        </div>
      </main>
    </div>
  );
};