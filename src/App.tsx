// src/App.tsx
import { useEffect } from 'react';
import { AppRouter } from './router/AppRouter';
import { seedDatabase } from './services/dbInitializer'; // Import yang benar

function App() {
  useEffect(() => {
    // Jalankan seeding otomatis saat aplikasi dibuka
    seedDatabase();
  }, []);

  return <AppRouter />;
}

export default App;