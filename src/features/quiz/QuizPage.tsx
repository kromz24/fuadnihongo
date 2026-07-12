import { useState, useEffect } from 'react';
import { db } from '../../services/db';
import { initialVocabulary } from '../../data/initialData';

interface VocabularyItem {
  id: string;
  kata: string;
  arti: string;
  furigana: string;
  level: 'N5' | 'N4' | 'N3';
}

export const QuizPage = () => {
  const [questions, setQuestions] = useState<VocabularyItem[]>([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [score, setScore] = useState(0);
  const [loading, setLoading] = useState(true);
  const [answered, setAnswered] = useState(false);
  const [options, setOptions] = useState<string[]>([]);

  // FUNGSI TEXT-TO-SPEECH
  // Disamakan dengan pola playSound() di VocabularyPage.tsx
  const playSound = (text: string) => {
    window.speechSynthesis.cancel(); // Reset suara agar tidak tumpuk
    const utterance = new SpeechSynthesisUtterance(text);
    utterance.lang = 'ja-JP';
    window.speechSynthesis.speak(utterance);
  };

  // Suara feedback singkat untuk jawaban benar/salah (fitur tambahan khusus quiz)
  const speakFeedback = (text: string) => {
    window.speechSynthesis.cancel();
    const utterance = new SpeechSynthesisUtterance(text);
    utterance.lang = 'ja-JP';
    utterance.rate = 1.0;
    window.speechSynthesis.speak(utterance);
  };

  // Helper: hitung opsi jawaban untuk 1 soal tertentu
  const buildOptions = (list: VocabularyItem[], index: number) => {
    if (list.length === 0 || !list[index]) return [];

    const currentCorrect = list[index].arti;
    const others = list
      .filter((q) => q.arti !== currentCorrect)
      .sort(() => 0.5 - Math.random())
      .slice(0, 3)
      .map((q) => q.arti);

    return [currentCorrect, ...others].sort(() => 0.5 - Math.random());
  };

  // LOAD DATA
  useEffect(() => {
    const initQuiz = async () => {
      setLoading(true);
      try {
        let data = await db.vocabulary.toArray();
        if (!data || data.length < 3) {
          data = initialVocabulary;
        }
        const shuffled = [...data].sort(() => 0.5 - Math.random());
        setQuestions(shuffled);
        setOptions(buildOptions(shuffled, 0));
      } catch (err) {
        console.error("Gagal memuat database:", err);
        setQuestions(initialVocabulary);
        setOptions(buildOptions(initialVocabulary, 0));
      } finally {
        setLoading(false);
      }
    };
    initQuiz();
  }, []);

  // HANDLER JAWABAN
  const handleAnswer = (selected: string) => {
    if (answered) return;

    if (selected === questions[currentIndex].arti) {
      setScore(score + 10);
      speakFeedback('Seikai');
    } else {
      speakFeedback('Zannen');
    }
    setAnswered(true);
  };

  const nextQuestion = () => {
    const nextIndex = currentIndex + 1;
    setAnswered(false);
    setCurrentIndex(nextIndex);
    setOptions(buildOptions(questions, nextIndex));
  };

  // RENDER
  if (loading) return <div className="text-white p-10 text-center">Menyiapkan Arena Kuis...</div>;

  if (questions.length === 0) return <div className="text-white p-10">Data tidak ditemukan.</div>;

  if (currentIndex >= questions.length) {
    return (
      <div className="p-10 text-white text-center">
        <h2 className="text-3xl font-bold">Kuis Selesai!</h2>
        <p className="text-xl mt-4">Skor Akhir: {score}</p>
        <button onClick={() => window.location.reload()} className="mt-6 bg-primary px-6 py-2 rounded-xl">Mulai Lagi</button>
      </div>
    );
  }

  const currentQ = questions[currentIndex];

  return (
    <div className="max-w-2xl mx-auto p-6 text-white">
      <div className="bg-zinc-900 border border-white/10 p-8 rounded-3xl shadow-xl">
        <div className="flex justify-between text-sm text-zinc-500 mb-6">
          <span>Soal {currentIndex + 1} dari {questions.length}</span>
          <span>Skor: {score}</span>
        </div>

        {/* Kata + Furigana (Hiragana/Katakana) + Tombol Suara */}
        <div className="flex items-start justify-between gap-4 mb-8">
          <div>
            <h2 className="text-4xl font-black">{currentQ.kata}</h2>
            <p className="text-base text-zinc-400 mt-1">{currentQ.furigana}</p>
          </div>
          <button
            onClick={() => playSound(currentQ.kata)}
            className="shrink-0 p-2.5 bg-zinc-800 rounded-full hover:bg-primary transition-colors text-lg"
            aria-label="Dengarkan pengucapan"
          >
            🔊
          </button>
        </div>

        <div className="grid grid-cols-1 gap-3">
          {options.map((option, idx) => (
            <button
              key={idx}
              onClick={() => handleAnswer(option)}
              className={`w-full p-4 rounded-xl border text-left transition-colors ${
                answered && option === currentQ.arti ? 'bg-green-600 border-green-500' :
                answered && option !== currentQ.arti ? 'bg-zinc-800 opacity-50' :
                'bg-zinc-800 hover:bg-zinc-700 border-white/10'
              }`}
            >
              {option}
            </button>
          ))}
        </div>

        {answered && (
          <button onClick={nextQuestion} className="w-full mt-6 bg-primary text-black font-bold py-3 rounded-xl">
            Lanjut Soal Berikutnya
          </button>
        )}
      </div>
    </div>
  );
};