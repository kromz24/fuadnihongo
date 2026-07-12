// src/router/AppRouter.tsx
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { MainLayout } from '../layout/MainLayout';
import { Dashboard } from '../pages/Dashboard';
import { VocabularyPage } from '../features/vocabulary/VocabularyPage';
import { QuizPage } from '../features/quiz/QuizPage';
import { KanaPage } from '../features/kana/KanaPage';
import { GrammarPage } from '../features/grammar/GrammarPage';
import { KanjiPage } from '../features/kanji/KanjiPage';
import { ReviewPage } from '../features/review/ReviewPage';
import { StatisticsPage } from '../pages/StatisticsPage';
import { SettingsPage } from '../features/settings/SettingsPage';

export const AppRouter = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainLayout />}>
          {/* Main Dashboard */}
          <Route index element={<Dashboard />} />
          
          {/* Features */}
          <Route path="vocabulary" element={<VocabularyPage />} />
          <Route path="quiz" element={<QuizPage />} />
          <Route path="kana" element={<KanaPage />} />
          <Route path="grammar" element={<GrammarPage />} />
          <Route path="kanji" element={<KanjiPage />} />
          <Route path="review" element={<ReviewPage />} />
          <Route path="statistics" element={<StatisticsPage />} />
          <Route path="settings" element={<SettingsPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};