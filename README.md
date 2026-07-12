# 🇯🇵 Nihongo Trainer

Aplikasi belajar bahasa Jepang interaktif — belajar Kana, Kosakata, Kanji, dan Tata Bahasa (Grammar) level N5–N4, lengkap dengan kuis, flashcard review (SRS), text-to-speech, dan statistik progres belajar.

## ✨ Fitur

- **Kana Zen Board** — latihan Hiragana & Katakana dengan audio pelafalan
- **Vocabulary Nexus** — database kosakata N5 & N4 lengkap dengan contoh kalimat + audio
- **Kanji Tracker** — lacak karakter Kanji yang sudah dihafal, dengan detail onyomi/kunyomi
- **Bunpou Grid** — pola tata bahasa dasar N5 lengkap dengan contoh & audio
- **Daily Arena Quiz** — kuis pilihan ganda untuk menguji hafalan kosakata
- **SRS Flashcard Review** — review kanji yang sudah ditandai "hafal"
- **Statistics** — visualisasi progres XP mingguan
- **Sync ke Cloud** — login dan simpan progres (XP, streak, kanji dikuasai) ke Supabase, bisa diakses dari device lain
- **Mobile-friendly** — sidebar berubah jadi drawer/hamburger menu di layar kecil

## 🛠️ Tech Stack

- **React** + **Vite** + **TypeScript**
- **Tailwind CSS** untuk styling
- **react-router-dom** untuk routing
- **Dexie.js** (IndexedDB) untuk penyimpanan data kosakata lokal
- **Recharts** untuk grafik statistik
- **lucide-react** untuk ikon
- **Supabase** untuk autentikasi & sync progres ke cloud
- **Web Speech API** (`speechSynthesis`) untuk text-to-speech bahasa Jepang

## 🚀 Menjalankan di Lokal

```bash
npm install
npm run dev
```

## ☁️ Setup Sync ke Cloud (Supabase)

Fitur sync progres butuh project Supabase sendiri (gratis). Berikut langkahnya:

### 1. Buat project Supabase
1. Daftar/login di [supabase.com](https://supabase.com)
2. Buat **New Project**, catat **Project URL** dan **anon public key** (ada di Project Settings → API)

### 2. Buat tabel `user_progress`
Buka **SQL Editor** di dashboard Supabase, lalu jalankan:

```sql
create table user_progress (
  user_id uuid references auth.users(id) primary key,
  xp integer default 0,
  streak integer default 0,
  daily_goal integer default 0,
  mastered_kanji jsonb default '[]'::jsonb,
  updated_at timestamptz default now()
);

alter table user_progress enable row level security;

create policy "Users can view own progress"
  on user_progress for select
  using (auth.uid() = user_id);

create policy "Users can insert own progress"
  on user_progress for insert
  with check (auth.uid() = user_id);

create policy "Users can update own progress"
  on user_progress for update
  using (auth.uid() = user_id);
```

### 3. Install package Supabase
```bash
npm install @supabase/supabase-js
```

### 4. Konfigurasi environment variables
Buat file `.env` di root project (contoh ada di `.env.example`):

```
VITE_SUPABASE_URL=https://xxxxxxxxxxxx.supabase.co
VITE_SUPABASE_ANON_KEY=isi-dengan-anon-public-key-kamu
```

### 5. Tempatkan file-file berikut ke project
| File | Lokasi |
|---|---|
| `supabaseClient.ts` | `src/services/supabaseClient.ts` |
| `progressSync.ts` | `src/services/progressSync.ts` |
| `useAuth.ts` | `src/hooks/useAuth.ts` |
| `SettingsPage.tsx` | `src/features/settings/SettingsPage.tsx` (timpa yang lama) |

### 6. Tambahkan `.env` ke `.gitignore`
Pastikan file `.env` **tidak** ter-commit ke git (biasanya Vite sudah meng-ignore ini secara default).

### 7. Kalau deploy di Vercel
Tambahkan `VITE_SUPABASE_URL` dan `VITE_SUPABASE_ANON_KEY` di **Project Settings → Environment Variables** di dashboard Vercel, lalu redeploy.

Setelah semua ini beres, buka halaman **Settings** di aplikasi → akan muncul kartu "Sync ke Cloud" untuk daftar/login dan sync progres.

## 📱 Mobile Support

Sidebar otomatis berubah jadi drawer (hamburger menu) di layar kecil (`<lg` breakpoint Tailwind), dan tetap sidebar fixed seperti biasa di layar besar.

## 🌐 Deployment

Project ini di-deploy menggunakan **Vercel**. File `vercel.json` sudah dikonfigurasi dengan rewrite rule supaya routing client-side (react-router) tidak 404 saat halaman di-refresh.

## 📄 Lisensi

Project pribadi untuk keperluan belajar bahasa Jepang.
