// src/data/kanjiData.ts

export interface KanjiItem {
  id: string;
  kanji: string;
  arti: string;
  onyomi: string;
  kunyomi: string;
  contoh: string;
  contohArti: string;
}

// Daftar lengkap kanji tingkat JLPT N5 (kurang lebih 110 kanji dasar
// yang paling umum diajarkan di level N5 — mencakup angka, waktu,
// arah, orang, alam, kata kerja dasar, warna, dan tubuh).
export const kanjiData: KanjiItem[] = [
  // === ANGKA ===
  { id: 'k1', kanji: '一', arti: 'Satu', onyomi: 'イチ (ichi)', kunyomi: 'ひと-つ (hito-tsu)', contoh: '一人 (hitori)', contohArti: 'Satu orang' },
  { id: 'k2', kanji: '二', arti: 'Dua', onyomi: 'ニ (ni)', kunyomi: 'ふた-つ (futa-tsu)', contoh: '二つ (futatsu)', contohArti: 'Dua buah' },
  { id: 'k3', kanji: '三', arti: 'Tiga', onyomi: 'サン (san)', kunyomi: 'みっ-つ (mit-tsu)', contoh: '三年生 (sannensei)', contohArti: 'Siswa kelas 3' },
  { id: 'k4', kanji: '四', arti: 'Empat', onyomi: 'シ (shi)', kunyomi: 'よん / よっ-つ (yon / yot-tsu)', contoh: '四月 (shigatsu)', contohArti: 'Bulan April' },
  { id: 'k5', kanji: '五', arti: 'Lima', onyomi: 'ゴ (go)', kunyomi: 'いつ-つ (itsu-tsu)', contoh: '五人 (gonin)', contohArti: 'Lima orang' },
  { id: 'k6', kanji: '六', arti: 'Enam', onyomi: 'ロク (roku)', kunyomi: 'むっ-つ (mut-tsu)', contoh: '六時 (rokuji)', contohArti: 'Jam enam' },
  { id: 'k7', kanji: '七', arti: 'Tujuh', onyomi: 'シチ (shichi)', kunyomi: 'なな-つ (nana-tsu)', contoh: '七月 (shichigatsu)', contohArti: 'Bulan Juli' },
  { id: 'k8', kanji: '八', arti: 'Delapan', onyomi: 'ハチ (hachi)', kunyomi: 'やっ-つ (yat-tsu)', contoh: '八時 (hachiji)', contohArti: 'Jam delapan' },
  { id: 'k9', kanji: '九', arti: 'Sembilan', onyomi: 'キュウ / ク (kyuu / ku)', kunyomi: 'ここの-つ (kokono-tsu)', contoh: '九月 (kugatsu)', contohArti: 'Bulan September' },
  { id: 'k10', kanji: '十', arti: 'Sepuluh', onyomi: 'ジュウ (juu)', kunyomi: 'とお (too)', contoh: '十人 (juunin)', contohArti: 'Sepuluh orang' },
  { id: 'k11', kanji: '百', arti: 'Seratus', onyomi: 'ヒャク (hyaku)', kunyomi: '-', contoh: '百円 (hyakuen)', contohArti: 'Seratus yen' },
  { id: 'k12', kanji: '千', arti: 'Seribu', onyomi: 'セン (sen)', kunyomi: '-', contoh: '千円 (senen)', contohArti: 'Seribu yen' },
  { id: 'k13', kanji: '万', arti: 'Sepuluh ribu', onyomi: 'マン (man)', kunyomi: '-', contoh: '一万円 (ichimanen)', contohArti: 'Sepuluh ribu yen' },
  { id: 'k14', kanji: '円', arti: 'Yen / Bulat', onyomi: 'エン (en)', kunyomi: 'まる-い (maru-i)', contoh: '百円 (hyakuen)', contohArti: 'Seratus yen' },

  // === WAKTU & KALENDER ===
  { id: 'k15', kanji: '日', arti: 'Hari / Matahari', onyomi: 'ニチ (nichi) / ジツ (jitsu)', kunyomi: 'ひ (hi) / -び (-bi)', contoh: '日本 (Nihon)', contohArti: 'Jepang' },
  { id: 'k16', kanji: '月', arti: 'Bulan', onyomi: 'ゲツ (getsu) / ガツ (gatsu)', kunyomi: 'つき (tsuki)', contoh: '月曜日 (getsuyoubi)', contohArti: 'Hari Senin' },
  { id: 'k17', kanji: '火', arti: 'Api', onyomi: 'カ (ka)', kunyomi: 'ひ (hi)', contoh: '火曜日 (kayoubi)', contohArti: 'Hari Selasa' },
  { id: 'k18', kanji: '水', arti: 'Air', onyomi: 'スイ (sui)', kunyomi: 'みず (mizu)', contoh: '水曜日 (suiyoubi)', contohArti: 'Hari Rabu' },
  { id: 'k19', kanji: '木', arti: 'Pohon / Kayu', onyomi: 'モク (moku)', kunyomi: 'き (ki)', contoh: '木曜日 (mokuyoubi)', contohArti: 'Hari Kamis' },
  { id: 'k20', kanji: '金', arti: 'Emas / Uang', onyomi: 'キン (kin)', kunyomi: 'かね (kane)', contoh: '金曜日 (kinyoubi)', contohArti: 'Hari Jumat' },
  { id: 'k21', kanji: '土', arti: 'Tanah', onyomi: 'ド (do)', kunyomi: 'つち (tsuchi)', contoh: '土曜日 (doyoubi)', contohArti: 'Hari Sabtu' },
  { id: 'k22', kanji: '曜', arti: 'Hari (dalam minggu)', onyomi: 'ヨウ (you)', kunyomi: '-', contoh: '何曜日 (nan-youbi)', contohArti: 'Hari apa' },
  { id: 'k23', kanji: '年', arti: 'Tahun', onyomi: 'ネン (nen)', kunyomi: 'とし (toshi)', contoh: '今年 (kotoshi)', contohArti: 'Tahun ini' },
  { id: 'k24', kanji: '今', arti: 'Sekarang', onyomi: 'コン (kon)', kunyomi: 'いま (ima)', contoh: '今日 (kyou)', contohArti: 'Hari ini' },
  { id: 'k25', kanji: '何', arti: 'Apa', onyomi: 'カ (ka)', kunyomi: 'なに / なん (nani / nan)', contoh: '何時 (nanji)', contohArti: 'Jam berapa' },
  { id: 'k26', kanji: '時', arti: 'Jam / Waktu', onyomi: 'ジ (ji)', kunyomi: 'とき (toki)', contoh: '一時 (ichiji)', contohArti: 'Jam satu' },
  { id: 'k27', kanji: '分', arti: 'Menit / Bagian', onyomi: 'フン / ブン (fun / bun)', kunyomi: 'わ-ける (wa-keru)', contoh: '五分 (gofun)', contohArti: 'Lima menit' },
  { id: 'k28', kanji: '半', arti: 'Setengah', onyomi: 'ハン (han)', kunyomi: 'なか-ば (naka-ba)', contoh: '三時半 (sanjihan)', contohArti: 'Jam setengah empat' },
  { id: 'k29', kanji: '週', arti: 'Minggu', onyomi: 'シュウ (shuu)', kunyomi: '-', contoh: '来週 (raishuu)', contohArti: 'Minggu depan' },
  { id: 'k30', kanji: '午', arti: 'Siang', onyomi: 'ゴ (go)', kunyomi: '-', contoh: '午前 (gozen)', contohArti: 'Pagi hari (sebelum siang)' },
  { id: 'k31', kanji: '前', arti: 'Depan / Sebelum', onyomi: 'ゼン (zen)', kunyomi: 'まえ (mae)', contoh: '午前 (gozen)', contohArti: 'Sebelum siang' },
  { id: 'k32', kanji: '後', arti: 'Belakang / Sesudah', onyomi: 'ゴ (go)', kunyomi: 'あと / うし-ろ (ato / ushi-ro)', contoh: '午後 (gogo)', contohArti: 'Sesudah siang' },
  { id: 'k33', kanji: '朝', arti: 'Pagi', onyomi: 'チョウ (chou)', kunyomi: 'あさ (asa)', contoh: '毎朝 (maiasa)', contohArti: 'Setiap pagi' },
  { id: 'k34', kanji: '昼', arti: 'Siang', onyomi: 'チュウ (chuu)', kunyomi: 'ひる (hiru)', contoh: '昼ご飯 (hirugohan)', contohArti: 'Makan siang' },
  { id: 'k35', kanji: '夜', arti: 'Malam', onyomi: 'ヤ (ya)', kunyomi: 'よる (yoru)', contoh: '今夜 (kon\'ya)', contohArti: 'Malam ini' },
  { id: 'k36', kanji: '毎', arti: 'Setiap', onyomi: 'マイ (mai)', kunyomi: '-', contoh: '毎日 (mainichi)', contohArti: 'Setiap hari' },

  // === ARAH & POSISI ===
  { id: 'k37', kanji: '上', arti: 'Atas', onyomi: 'ジョウ (jou)', kunyomi: 'うえ / あ-げる (ue / a-geru)', contoh: '机の上 (tsukue no ue)', contohArti: 'Di atas meja' },
  { id: 'k38', kanji: '下', arti: 'Bawah', onyomi: 'カ (ka)', kunyomi: 'した / さ-げる (shita / sa-geru)', contoh: '木の下 (ki no shita)', contohArti: 'Di bawah pohon' },
  { id: 'k39', kanji: '中', arti: 'Tengah / Dalam', onyomi: 'チュウ (chuu)', kunyomi: 'なか (naka)', contoh: '家の中 (ie no naka)', contohArti: 'Di dalam rumah' },
  { id: 'k40', kanji: '外', arti: 'Luar', onyomi: 'ガイ (gai)', kunyomi: 'そと (soto)', contoh: '外国 (gaikoku)', contohArti: 'Luar negeri' },
  { id: 'k41', kanji: '左', arti: 'Kiri', onyomi: 'サ (sa)', kunyomi: 'ひだり (hidari)', contoh: '左手 (hidarite)', contohArti: 'Tangan kiri' },
  { id: 'k42', kanji: '右', arti: 'Kanan', onyomi: 'ウ (u)', kunyomi: 'みぎ (migi)', contoh: '右手 (migite)', contohArti: 'Tangan kanan' },
  { id: 'k43', kanji: '東', arti: 'Timur', onyomi: 'トウ (tou)', kunyomi: 'ひがし (higashi)', contoh: '東京 (Toukyou)', contohArti: 'Tokyo' },
  { id: 'k44', kanji: '西', arti: 'Barat', onyomi: 'セイ (sei)', kunyomi: 'にし (nishi)', contoh: '西口 (nishiguchi)', contohArti: 'Pintu keluar sisi barat' },
  { id: 'k45', kanji: '南', arti: 'Selatan', onyomi: 'ナン (nan)', kunyomi: 'みなみ (minami)', contoh: '南口 (minamiguchi)', contohArti: 'Pintu keluar sisi selatan' },
  { id: 'k46', kanji: '北', arti: 'Utara', onyomi: 'ホク (hoku)', kunyomi: 'きた (kita)', contoh: '北口 (kitaguchi)', contohArti: 'Pintu keluar sisi utara' },
  { id: 'k47', kanji: '間', arti: 'Antara / Ruang', onyomi: 'カン (kan)', kunyomi: 'あいだ (aida)', contoh: '時間 (jikan)', contohArti: 'Waktu' },

  // === SIFAT & UKURAN ===
  { id: 'k48', kanji: '大', arti: 'Besar', onyomi: 'ダイ / タイ (dai / tai)', kunyomi: 'おお-きい (oo-kii)', contoh: '大学 (daigaku)', contohArti: 'Universitas' },
  { id: 'k49', kanji: '小', arti: 'Kecil', onyomi: 'ショウ (shou)', kunyomi: 'ちい-さい (chii-sai)', contoh: '小学校 (shougakkou)', contohArti: 'Sekolah dasar' },
  { id: 'k50', kanji: '多', arti: 'Banyak', onyomi: 'タ (ta)', kunyomi: 'おお-い (oo-i)', contoh: '多い (ooi)', contohArti: 'Banyak' },
  { id: 'k51', kanji: '少', arti: 'Sedikit', onyomi: 'ショウ (shou)', kunyomi: 'すこ-し / すく-ない (suko-shi / suku-nai)', contoh: '少し (sukoshi)', contohArti: 'Sedikit' },
  { id: 'k52', kanji: '高', arti: 'Tinggi / Mahal', onyomi: 'コウ (kou)', kunyomi: 'たか-い (taka-i)', contoh: '高校 (koukou)', contohArti: 'SMA' },
  { id: 'k53', kanji: '安', arti: 'Murah / Tenang', onyomi: 'アン (an)', kunyomi: 'やす-い (yasu-i)', contoh: '安い (yasui)', contohArti: 'Murah' },
  { id: 'k54', kanji: '長', arti: 'Panjang / Ketua', onyomi: 'チョウ (chou)', kunyomi: 'なが-い (naga-i)', contoh: '長い (nagai)', contohArti: 'Panjang' },
  { id: 'k55', kanji: '新', arti: 'Baru', onyomi: 'シン (shin)', kunyomi: 'あたら-しい (atara-shii)', contoh: '新聞 (shinbun)', contohArti: 'Koran' },
  { id: 'k56', kanji: '古', arti: 'Lama / Tua', onyomi: 'コ (ko)', kunyomi: 'ふる-い (furu-i)', contoh: '古い (furui)', contohArti: 'Lama' },
  { id: 'k57', kanji: '早', arti: 'Cepat / Pagi-pagi', onyomi: 'ソウ (sou)', kunyomi: 'はや-い (haya-i)', contoh: '早い (hayai)', contohArti: 'Cepat / awal' },

  // === ORANG & KELUARGA ===
  { id: 'k58', kanji: '人', arti: 'Orang', onyomi: 'ジン (jin) / ニン (nin)', kunyomi: 'ひと (hito)', contoh: '日本人 (Nihonjin)', contohArti: 'Orang Jepang' },
  { id: 'k59', kanji: '子', arti: 'Anak', onyomi: 'シ (shi)', kunyomi: 'こ (ko)', contoh: '子供 (kodomo)', contohArti: 'Anak-anak' },
  { id: 'k60', kanji: '男', arti: 'Laki-laki', onyomi: 'ダン (dan)', kunyomi: 'おとこ (otoko)', contoh: '男の子 (otoko no ko)', contohArti: 'Anak laki-laki' },
  { id: 'k61', kanji: '女', arti: 'Perempuan', onyomi: 'ジョ (jo)', kunyomi: 'おんな (onna)', contoh: '女の子 (onna no ko)', contohArti: 'Anak perempuan' },
  { id: 'k62', kanji: '父', arti: 'Ayah', onyomi: 'フ (fu)', kunyomi: 'ちち (chichi)', contoh: 'お父さん (otousan)', contohArti: 'Ayah (sapaan)' },
  { id: 'k63', kanji: '母', arti: 'Ibu', onyomi: 'ボ (bo)', kunyomi: 'はは (haha)', contoh: 'お母さん (okaasan)', contohArti: 'Ibu (sapaan)' },
  { id: 'k64', kanji: '友', arti: 'Teman', onyomi: 'ユウ (yuu)', kunyomi: 'とも (tomo)', contoh: '友達 (tomodachi)', contohArti: 'Teman' },
  { id: 'k65', kanji: '私', arti: 'Saya', onyomi: 'シ (shi)', kunyomi: 'わたし (watashi)', contoh: '私は学生です (watashi wa gakusei desu)', contohArti: 'Saya adalah mahasiswa' },
  { id: 'k66', kanji: '名', arti: 'Nama', onyomi: 'メイ (mei)', kunyomi: 'な (na)', contoh: '名前 (namae)', contohArti: 'Nama' },

  // === SEKOLAH & AKTIVITAS ===
  { id: 'k67', kanji: '学', arti: 'Belajar', onyomi: 'ガク (gaku)', kunyomi: 'まな-ぶ (mana-bu)', contoh: '学生 (gakusei)', contohArti: 'Siswa/mahasiswa' },
  { id: 'k68', kanji: '校', arti: 'Sekolah', onyomi: 'コウ (kou)', kunyomi: '-', contoh: '学校 (gakkou)', contohArti: 'Sekolah' },
  { id: 'k69', kanji: '生', arti: 'Hidup / Lahir', onyomi: 'セイ (sei)', kunyomi: 'い-きる / う-まれる (i-kiru / u-mareru)', contoh: '先生 (sensei)', contohArti: 'Guru' },
  { id: 'k70', kanji: '先', arti: 'Sebelum / Terdahulu', onyomi: 'セン (sen)', kunyomi: 'さき (saki)', contoh: '先生 (sensei)', contohArti: 'Guru' },
  { id: 'k71', kanji: '本', arti: 'Buku / Asal', onyomi: 'ホン (hon)', kunyomi: 'もと (moto)', contoh: '日本語 (Nihongo)', contohArti: 'Bahasa Jepang' },
  { id: 'k72', kanji: '語', arti: 'Bahasa', onyomi: 'ゴ (go)', kunyomi: 'かた-る (kata-ru)', contoh: '英語 (eigo)', contohArti: 'Bahasa Inggris' },
  { id: 'k73', kanji: '文', arti: 'Kalimat / Tulisan', onyomi: 'ブン (bun)', kunyomi: 'ふみ (fumi)', contoh: '文字 (moji)', contohArti: 'Huruf' },
  { id: 'k74', kanji: '字', arti: 'Huruf', onyomi: 'ジ (ji)', kunyomi: 'あざ (aza)', contoh: '漢字 (kanji)', contohArti: 'Huruf kanji' },
  { id: 'k75', kanji: '話', arti: 'Berbicara / Cerita', onyomi: 'ワ (wa)', kunyomi: 'はな-す (hana-su)', contoh: '電話 (denwa)', contohArti: 'Telepon' },
  { id: 'k76', kanji: '読', arti: 'Membaca', onyomi: 'ドク (doku)', kunyomi: 'よ-む (yo-mu)', contoh: '読む (yomu)', contohArti: 'Membaca' },
  { id: 'k77', kanji: '書', arti: 'Menulis', onyomi: 'ショ (sho)', kunyomi: 'か-く (ka-ku)', contoh: '書く (kaku)', contohArti: 'Menulis' },
  { id: 'k78', kanji: '聞', arti: 'Mendengar / Bertanya', onyomi: 'ブン (bun)', kunyomi: 'き-く (ki-ku)', contoh: '聞く (kiku)', contohArti: 'Mendengar / bertanya' },
  { id: 'k79', kanji: '言', arti: 'Berkata', onyomi: 'ゲン (gen)', kunyomi: 'い-う (i-u)', contoh: '言う (iu)', contohArti: 'Mengatakan' },
  { id: 'k80', kanji: '見', arti: 'Melihat', onyomi: 'ケン (ken)', kunyomi: 'み-る (mi-ru)', contoh: '見る (miru)', contohArti: 'Melihat' },

  // === KATA KERJA DASAR LAIN ===
  { id: 'k81', kanji: '行', arti: 'Pergi', onyomi: 'コウ (kou)', kunyomi: 'い-く (i-ku)', contoh: '行く (iku)', contohArti: 'Pergi' },
  { id: 'k82', kanji: '来', arti: 'Datang', onyomi: 'ライ (rai)', kunyomi: 'く-る (ku-ru)', contoh: '来る (kuru)', contohArti: 'Datang' },
  { id: 'k83', kanji: '帰', arti: 'Pulang', onyomi: 'キ (ki)', kunyomi: 'かえ-る (kae-ru)', contoh: '帰る (kaeru)', contohArti: 'Pulang' },
  { id: 'k84', kanji: '食', arti: 'Makan', onyomi: 'ショク (shoku)', kunyomi: 'た-べる (ta-beru)', contoh: '食べる (taberu)', contohArti: 'Makan' },
  { id: 'k85', kanji: '飲', arti: 'Minum', onyomi: 'イン (in)', kunyomi: 'の-む (no-mu)', contoh: '飲む (nomu)', contohArti: 'Minum' },
  { id: 'k86', kanji: '買', arti: 'Membeli', onyomi: 'バイ (bai)', kunyomi: 'か-う (ka-u)', contoh: '買う (kau)', contohArti: 'Membeli' },
  { id: 'k87', kanji: '出', arti: 'Keluar', onyomi: 'シュツ (shutsu)', kunyomi: 'で-る / だ-す (de-ru / da-su)', contoh: '出る (deru)', contohArti: 'Keluar' },
  { id: 'k88', kanji: '入', arti: 'Masuk', onyomi: 'ニュウ (nyuu)', kunyomi: 'はい-る / い-れる (hai-ru / i-reru)', contoh: '入る (hairu)', contohArti: 'Masuk' },
  { id: 'k89', kanji: '立', arti: 'Berdiri', onyomi: 'リツ (ritsu)', kunyomi: 'た-つ (ta-tsu)', contoh: '立つ (tatsu)', contohArti: 'Berdiri' },
  { id: 'k90', kanji: '会', arti: 'Bertemu / Perkumpulan', onyomi: 'カイ (kai)', kunyomi: 'あ-う (a-u)', contoh: '会社 (kaisha)', contohArti: 'Perusahaan' },
  { id: 'k91', kanji: '休', arti: 'Istirahat / Libur', onyomi: 'キュウ (kyuu)', kunyomi: 'やす-む (yasu-mu)', contoh: '休む (yasumu)', contohArti: 'Beristirahat / libur' },
  { id: 'k92', kanji: '物', arti: 'Barang / Benda', onyomi: 'ブツ (butsu)', kunyomi: 'もの (mono)', contoh: '買い物 (kaimono)', contohArti: 'Belanja' },

  // === ALAM ===
  { id: 'k93', kanji: '天', arti: 'Langit / Alam', onyomi: 'テン (ten)', kunyomi: '-', contoh: '天気 (tenki)', contohArti: 'Cuaca' },
  { id: 'k94', kanji: '気', arti: 'Udara / Perasaan', onyomi: 'キ (ki)', kunyomi: '-', contoh: '元気 (genki)', contohArti: 'Sehat/semangat' },
  { id: 'k95', kanji: '雨', arti: 'Hujan', onyomi: 'ウ (u)', kunyomi: 'あめ (ame)', contoh: '雨が降る (ame ga furu)', contohArti: 'Hujan turun' },
  { id: 'k96', kanji: '空', arti: 'Langit / Kosong', onyomi: 'クウ (kuu)', kunyomi: 'そら / から (sora / kara)', contoh: '空港 (kuukou)', contohArti: 'Bandara' },
  { id: 'k97', kanji: '山', arti: 'Gunung', onyomi: 'サン (san)', kunyomi: 'やま (yama)', contoh: '富士山 (Fujisan)', contohArti: 'Gunung Fuji' },
  { id: 'k98', kanji: '川', arti: 'Sungai', onyomi: 'セン (sen)', kunyomi: 'かわ (kawa)', contoh: '小川 (ogawa)', contohArti: 'Sungai kecil' },
  { id: 'k99', kanji: '田', arti: 'Sawah', onyomi: 'デン (den)', kunyomi: 'た (ta)', contoh: '水田 (suiden)', contohArti: 'Sawah berair' },
  { id: 'k100', kanji: '村', arti: 'Desa', onyomi: 'ソン (son)', kunyomi: 'むら (mura)', contoh: '村人 (murabito)', contohArti: 'Penduduk desa' },
  { id: 'k101', kanji: '国', arti: 'Negara', onyomi: 'コク (koku)', kunyomi: 'くに (kuni)', contoh: '外国 (gaikoku)', contohArti: 'Luar negeri' },

  // === TEMPAT & KENDARAAN ===
  { id: 'k102', kanji: '車', arti: 'Mobil / Kendaraan', onyomi: 'シャ (sha)', kunyomi: 'くるま (kuruma)', contoh: '電車 (densha)', contohArti: 'Kereta listrik' },
  { id: 'k103', kanji: '道', arti: 'Jalan', onyomi: 'ドウ (dou)', kunyomi: 'みち (michi)', contoh: '道を歩く (michi o aruku)', contohArti: 'Berjalan di jalan' },
  { id: 'k104', kanji: '駅', arti: 'Stasiun', onyomi: 'エキ (eki)', kunyomi: '-', contoh: '駅前 (ekimae)', contohArti: 'Depan stasiun' },
  { id: 'k105', kanji: '門', arti: 'Gerbang', onyomi: 'モン (mon)', kunyomi: 'かど (kado)', contoh: '正門 (seimon)', contohArti: 'Gerbang utama' },
  { id: 'k106', kanji: '店', arti: 'Toko', onyomi: 'テン (ten)', kunyomi: 'みせ (mise)', contoh: 'お店 (omise)', contohArti: 'Toko' },
  { id: 'k107', kanji: '社', arti: 'Perusahaan / Kuil', onyomi: 'シャ (sha)', kunyomi: 'やしろ (yashiro)', contoh: '会社 (kaisha)', contohArti: 'Perusahaan' },

  // === WARNA ===
  { id: 'k108', kanji: '白', arti: 'Putih', onyomi: 'ハク (haku)', kunyomi: 'しろ-い (shiro-i)', contoh: '白い (shiroi)', contohArti: 'Putih' },
  { id: 'k109', kanji: '黒', arti: 'Hitam', onyomi: 'コク (koku)', kunyomi: 'くろ-い (kuro-i)', contoh: '黒い (kuroi)', contohArti: 'Hitam' },
  { id: 'k110', kanji: '赤', arti: 'Merah', onyomi: 'セキ (seki)', kunyomi: 'あか-い (aka-i)', contoh: '赤い (akai)', contohArti: 'Merah' },
  { id: 'k111', kanji: '青', arti: 'Biru', onyomi: 'セイ (sei)', kunyomi: 'あお-い (ao-i)', contoh: '青い (aoi)', contohArti: 'Biru' },

  // === TUBUH ===
  { id: 'k112', kanji: '目', arti: 'Mata', onyomi: 'モク (moku)', kunyomi: 'め (me)', contoh: '目が痛い (me ga itai)', contohArti: 'Mata sakit' },
  { id: 'k113', kanji: '耳', arti: 'Telinga', onyomi: 'ジ (ji)', kunyomi: 'みみ (mimi)', contoh: '耳が痛い (mimi ga itai)', contohArti: 'Telinga sakit' },
  { id: 'k114', kanji: '口', arti: 'Mulut', onyomi: 'コウ (kou)', kunyomi: 'くち (kuchi)', contoh: '入り口 (iriguchi)', contohArti: 'Pintu masuk' },
  { id: 'k115', kanji: '手', arti: 'Tangan', onyomi: 'シュ (shu)', kunyomi: 'て (te)', contoh: '手紙 (tegami)', contohArti: 'Surat' },
  { id: 'k116', kanji: '足', arti: 'Kaki', onyomi: 'ソク (soku)', kunyomi: 'あし / た-りる (ashi / ta-riru)', contoh: '足が痛い (ashi ga itai)', contohArti: 'Kaki sakit' }
];