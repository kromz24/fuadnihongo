// src/data/grammarData.ts

export interface GrammarItem {
  id: string;
  pola: string;
  arti: string;
  rumus: string;
  penjelasan: string;
  contohKalimat: string;
  furigana: string;
  terjemahan: string;
}

// Kumpulan lengkap pola tata bahasa dasar JLPT N5.
export const grammarData: GrammarItem[] = [
  // === DASAR: は / です / じゃありません ===
  {
    id: 'g1',
    pola: '〜は 〜です (〜 wa 〜 desu)',
    arti: 'Adalah...',
    rumus: 'Kata Benda (Subjek) + は + Kata Benda (Predikat) + です',
    penjelasan: 'Digunakan untuk menyatakan identitas, status, atau kondisi subjek kalimat.',
    contohKalimat: '私は学生です。',
    furigana: 'わたし は がくせい です。',
    terjemahan: 'Saya adalah mahasiswa.'
  },
  {
    id: 'g2',
    pola: '〜は 〜じゃありません (〜 wa 〜 ja arimasen)',
    arti: 'Bukan...',
    rumus: 'Kata Benda + は + Kata Benda + じゃありません／ではありません',
    penjelasan: 'Bentuk negatif dari 〜です, digunakan untuk menyangkal identitas atau status subjek.',
    contohKalimat: '彼は先生じゃありません。',
    furigana: 'かれ は せんせい じゃ ありません。',
    terjemahan: 'Dia bukan seorang guru.'
  },
  {
    id: 'g3',
    pola: '〜は 〜でした (〜 wa 〜 deshita)',
    arti: 'Dulu adalah... (lampau)',
    rumus: 'Kata Benda + は + Kata Benda + でした',
    penjelasan: 'Bentuk lampau dari です, menyatakan keadaan atau identitas di masa lalu.',
    contohKalimat: '昨日は休みでした。',
    furigana: 'きのう は やすみ でした。',
    terjemahan: 'Kemarin adalah hari libur.'
  },
  {
    id: 'g4',
    pola: '〜も (〜 mo)',
    arti: 'Juga...',
    rumus: 'Kata Benda + も',
    penjelasan: 'Partikel 「も」 menggantikan 「は」 untuk menunjukkan kesamaan atau penambahan.',
    contohKalimat: '私も学生です。',
    furigana: 'わたし も がくせい です。',
    terjemahan: 'Saya juga mahasiswa.'
  },

  // === PARTIKEL DASAR ===
  {
    id: 'g5',
    pola: '〜を 〜ます (〜 o 〜 masu)',
    arti: 'Melakukan aktivitas (Objek + Kata Kerja)',
    rumus: 'Kata Benda (Objek) + を + Kata Kerja (Bentuk ます)',
    penjelasan: 'Partikel 「を」 digunakan untuk menunjukkan objek yang dikenai suatu tindakan atau kata kerja aktif.',
    contohKalimat: '本を読みます。',
    furigana: 'ほん を よみます。',
    terjemahan: 'Membaca buku.'
  },
  {
    id: 'g6',
    pola: '〜へ 行きます (〜 e ikimasu)',
    arti: 'Pergi ke...',
    rumus: 'Kata Benda (Tempat) + へ + 行きます／来ます／帰ります',
    penjelasan: 'Partikel 「へ」 (dibaca "e") digunakan untuk menunjukkan arah tujuan perpindahan tempat.',
    contohKalimat: '学校へ行きます。',
    furigana: 'がっこう へ いきます。',
    terjemahan: 'Pergi ke sekolah.'
  },
  {
    id: 'g7',
    pola: '〜に 行きます (〜 ni ikimasu)',
    arti: 'Pergi ke... (tujuan spesifik)',
    rumus: 'Kata Benda (Tempat/Tujuan) + に + 行きます／来ます／帰ります',
    penjelasan: 'Partikel 「に」 menunjukkan titik tujuan yang lebih spesifik dibanding 「へ」.',
    contohKalimat: '病院に行きます。',
    furigana: 'びょういん に いきます。',
    terjemahan: 'Pergi ke rumah sakit.'
  },
  {
    id: 'g8',
    pola: '〜で (〜 de)',
    arti: 'Di... (tempat aktivitas) / Dengan... (alat)',
    rumus: 'Kata Benda (Tempat/Alat) + で + Kata Kerja',
    penjelasan: 'Partikel 「で」 menunjukkan tempat berlangsungnya suatu aktivitas, atau alat/cara yang digunakan.',
    contohKalimat: 'レストランで食べます。',
    furigana: 'レストラン で たべます。',
    terjemahan: 'Makan di restoran.'
  },
  {
    id: 'g9',
    pola: '〜に あります／います (〜 ni arimasu/imasu)',
    arti: 'Ada di... (benda/makhluk hidup)',
    rumus: 'Tempat + に + Benda/Orang + が + あります（benda mati）／います（makhluk hidup）',
    penjelasan: '「あります」 digunakan untuk benda mati, 「います」 untuk orang atau hewan.',
    contohKalimat: '机の上に本があります。',
    furigana: 'つくえ の うえ に ほん が あります。',
    terjemahan: 'Ada buku di atas meja.'
  },
  {
    id: 'g10',
    pola: '〜と (〜 to)',
    arti: 'Dan / Bersama...',
    rumus: 'Kata Benda + と + Kata Benda / Kata Benda + と + Kata Kerja',
    penjelasan: 'Partikel 「と」 menghubungkan dua kata benda secara lengkap, atau menunjukkan orang yang menyertai suatu aktivitas.',
    contohKalimat: '友達と映画を見ます。',
    furigana: 'ともだち と えいが を みます。',
    terjemahan: 'Menonton film bersama teman.'
  },
  {
    id: 'g11',
    pola: '〜や 〜など (〜 ya 〜 nado)',
    arti: 'Dan lain-lain (contoh tidak lengkap)',
    rumus: 'Kata Benda + や + Kata Benda + など',
    penjelasan: 'Digunakan untuk menyebutkan beberapa contoh dari suatu kelompok tanpa menyebutkan semuanya.',
    contohKalimat: '机の上に本やペンなどがあります。',
    furigana: 'つくえ の うえ に ほん や ペン など が あります。',
    terjemahan: 'Di atas meja ada buku, pena, dan lain-lain.'
  },
  {
    id: 'g12',
    pola: '〜から 〜まで (〜 kara 〜 made)',
    arti: 'Dari... sampai...',
    rumus: 'Waktu/Tempat + から + Waktu/Tempat + まで',
    penjelasan: 'Menunjukkan titik awal (から) dan titik akhir (まで) dari suatu durasi waktu atau jarak tempat.',
    contohKalimat: '九時から五時まで働きます。',
    furigana: 'くじ から ごじ まで はたらきます。',
    terjemahan: 'Bekerja dari jam 9 sampai jam 5.'
  },
  {
    id: 'g13',
    pola: '〜の (〜 no)',
    arti: 'Kepunyaan / Penjelas kata benda',
    rumus: 'Kata Benda1 + の + Kata Benda2',
    penjelasan: 'Partikel 「の」 menghubungkan dua kata benda, menunjukkan kepemilikan atau keterangan tambahan.',
    contohKalimat: 'これは私の本です。',
    furigana: 'これ は わたし の ほん です。',
    terjemahan: 'Ini adalah buku saya.'
  },
  {
    id: 'g14',
    pola: '〜が (〜 ga)',
    arti: 'Partikel subjek (fokus/deskripsi)',
    rumus: 'Kata Benda + が + Kata Kerja／Kata Sifat',
    penjelasan: 'Partikel 「が」 menandai subjek kalimat, sering digunakan untuk memperkenalkan informasi baru atau mendeskripsikan keadaan.',
    contohKalimat: '頭が痛いです。',
    furigana: 'あたま が いたい です。',
    terjemahan: 'Kepala saya sakit.'
  },

  // === KATA GANTI TUNJUK & TANYA ===
  {
    id: 'g15',
    pola: 'これ／それ／あれ／どれ (kore/sore/are/dore)',
    arti: 'Ini / Itu (dekat lawan bicara) / Itu (jauh) / Yang mana',
    rumus: 'これ／それ／あれ／どれ + は + Kata Benda + です',
    penjelasan: 'Kata ganti tunjuk untuk benda: これ (dekat pembicara), それ (dekat lawan bicara), あれ (jauh dari keduanya), どれ (pertanyaan).',
    contohKalimat: 'これは私のかばんです。',
    furigana: 'これ は わたし の かばん です。',
    terjemahan: 'Ini adalah tas saya.'
  },
  {
    id: 'g16',
    pola: 'この／その／あの／どの + Kata Benda (kono/sono/ano/dono)',
    arti: 'Kata benda ini/itu/itu (jauh)/yang mana',
    rumus: 'この／その／あの／どの + Kata Benda',
    penjelasan: 'Digunakan sebelum kata benda secara langsung untuk menunjukkan objek tertentu.',
    contohKalimat: 'この本は面白いです。',
    furigana: 'この ほん は おもしろい です。',
    terjemahan: 'Buku ini menarik.'
  },
  {
    id: 'g17',
    pola: 'ここ／そこ／あそこ／どこ (koko/soko/asoko/doko)',
    arti: 'Di sini / Di sana / Di sana (jauh) / Di mana',
    rumus: 'ここ／そこ／あそこ／どこ + は + Kata Benda + です',
    penjelasan: 'Kata ganti tunjuk untuk lokasi atau tempat.',
    contohKalimat: 'トイレはあそこです。',
    furigana: 'トイレ は あそこ です。',
    terjemahan: 'Toilet ada di sana.'
  },
  {
    id: 'g18',
    pola: '誰／どなた (dare/donata)',
    arti: 'Siapa',
    rumus: '誰／どなた + が／は + ...',
    penjelasan: '誰 digunakan untuk bertanya "siapa" secara umum, どなた bentuk lebih sopan.',
    contohKalimat: 'あの人は誰ですか。',
    furigana: 'あの ひと は だれ です か。',
    terjemahan: 'Orang itu siapa?'
  },
  {
    id: 'g19',
    pola: 'いつ (itsu)',
    arti: 'Kapan',
    rumus: 'いつ + Kata Kerja／です か',
    penjelasan: 'Digunakan untuk menanyakan waktu suatu peristiwa terjadi.',
    contohKalimat: '誕生日はいつですか。',
    furigana: 'たんじょうび は いつ です か。',
    terjemahan: 'Kapan ulang tahunmu?'
  },
  {
    id: 'g20',
    pola: 'どうして／なぜ (doushite/naze)',
    arti: 'Mengapa',
    rumus: 'どうして／なぜ + Kalimat + か',
    penjelasan: 'Digunakan untuk menanyakan alasan atau sebab suatu hal terjadi.',
    contohKalimat: 'どうして学校を休みましたか。',
    furigana: 'どうして がっこう を やすみました か。',
    terjemahan: 'Mengapa kamu absen dari sekolah?'
  },
  {
    id: 'g21',
    pola: 'いくら (ikura)',
    arti: 'Berapa (harga)',
    rumus: 'いくら + です か',
    penjelasan: 'Digunakan khusus untuk menanyakan harga suatu barang.',
    contohKalimat: 'これはいくらですか。',
    furigana: 'これ は いくら です か。',
    terjemahan: 'Ini harganya berapa?'
  },

  // === BENTUK MASU (KATA KERJA) ===
  {
    id: 'g22',
    pola: '〜ます／〜ません (〜masu/〜masen)',
    arti: 'Bentuk sopan positif/negatif kata kerja',
    rumus: 'Kata Kerja (Bentuk ます) / Kata Kerja (Bentuk ません)',
    penjelasan: 'Bentuk ます adalah bentuk sopan kata kerja untuk masa kini/akan datang, ません adalah bentuk negatifnya.',
    contohKalimat: '毎日日本語を勉強します。',
    furigana: 'まいにち にほんご を べんきょう します。',
    terjemahan: 'Belajar bahasa Jepang setiap hari.'
  },
  {
    id: 'g23',
    pola: '〜ました／〜ませんでした (〜mashita/〜masen deshita)',
    arti: 'Bentuk lampau positif/negatif kata kerja',
    rumus: 'Kata Kerja (Bentuk ました) / Kata Kerja (Bentuk ませんでした)',
    penjelasan: 'Menyatakan suatu tindakan yang sudah/belum terjadi di masa lampau.',
    contohKalimat: '昨日映画を見ました。',
    furigana: 'きのう えいが を みました。',
    terjemahan: 'Kemarin menonton film.'
  },
  {
    id: 'g24',
    pola: '〜ています (〜te imasu)',
    arti: 'Sedang melakukan... / Keadaan berkelanjutan',
    rumus: 'Kata Kerja (Bentuk -te) + います',
    penjelasan: 'Menunjukkan tindakan yang sedang berlangsung, atau hasil dari suatu perubahan yang masih berlaku.',
    contohKalimat: '今、雨が降っています。',
    furigana: 'いま、あめ が ふって います。',
    terjemahan: 'Sekarang sedang hujan.'
  },
  {
    id: 'g25',
    pola: '〜てください (〜te kudasai)',
    arti: 'Tolong... (Permohonan halus)',
    rumus: 'Kata Kerja (Bentuk -te) + ください',
    penjelasan: 'Digunakan untuk meminta atau memerintahkan seseorang melakukan sesuatu dengan cara yang sopan.',
    contohKalimat: '日本語で話してください。',
    furigana: 'にほんご で はなして ください。',
    terjemahan: 'Tolong berbicara menggunakan bahasa Jepang.'
  },
  {
    id: 'g26',
    pola: '〜ないでください (〜naide kudasai)',
    arti: 'Tolong jangan...',
    rumus: 'Kata Kerja (Bentuk -nai) + でください',
    penjelasan: 'Digunakan untuk meminta seseorang agar tidak melakukan sesuatu.',
    contohKalimat: 'ここで写真を撮らないでください。',
    furigana: 'ここ で しゃしん を とらないで ください。',
    terjemahan: 'Tolong jangan mengambil foto di sini.'
  },
  {
    id: 'g27',
    pola: '〜てもいいです (〜te mo ii desu)',
    arti: 'Boleh...',
    rumus: 'Kata Kerja (Bentuk -te) + もいいです',
    penjelasan: 'Digunakan untuk memberikan izin melakukan sesuatu.',
    contohKalimat: 'ここに座ってもいいですか。',
    furigana: 'ここ に すわって も いい です か。',
    terjemahan: 'Bolehkah saya duduk di sini?'
  },
  {
    id: 'g28',
    pola: '〜てはいけません (〜te wa ikemasen)',
    arti: 'Tidak boleh...',
    rumus: 'Kata Kerja (Bentuk -te) + はいけません',
    penjelasan: 'Digunakan untuk menyatakan larangan yang tegas.',
    contohKalimat: 'ここでタバコを吸ってはいけません。',
    furigana: 'ここ で タバコ を すって は いけません。',
    terjemahan: 'Tidak boleh merokok di sini.'
  },
  {
    id: 'g29',
    pola: '〜ながら (〜nagara)',
    arti: 'Sambil...',
    rumus: 'Kata Kerja (Bentuk ます, tanpa ます) + ながら + Kata Kerja',
    penjelasan: 'Menunjukkan dua tindakan yang dilakukan secara bersamaan oleh subjek yang sama.',
    contohKalimat: '音楽を聞きながら勉強します。',
    furigana: 'おんがく を ききながら べんきょう します。',
    terjemahan: 'Belajar sambil mendengarkan musik.'
  },
  {
    id: 'g30',
    pola: '〜たり〜たりします (〜tari 〜tari shimasu)',
    arti: 'Kadang... kadang... (beberapa contoh aktivitas)',
    rumus: 'Kata Kerja (Bentuk -ta) + り + Kata Kerja (Bentuk -ta) + り + します',
    penjelasan: 'Digunakan untuk menyebutkan beberapa contoh aktivitas yang dilakukan, tanpa urutan yang pasti.',
    contohKalimat: '週末は本を読んだり映画を見たりします。',
    furigana: 'しゅうまつ は ほん を よんだり えいが を みたり します。',
    terjemahan: 'Akhir pekan kadang membaca buku, kadang menonton film.'
  },
  {
    id: 'g31',
    pola: '〜たいです (〜tai desu)',
    arti: 'Ingin melakukan...',
    rumus: 'Kata Kerja (Bentuk ます, tanpa ます) + たいです',
    penjelasan: 'Menyatakan keinginan pembicara untuk melakukan suatu tindakan.',
    contohKalimat: '日本へ行きたいです。',
    furigana: 'にほん へ いきたい です。',
    terjemahan: 'Saya ingin pergi ke Jepang.'
  },
  {
    id: 'g32',
    pola: '〜ましょう (〜mashou)',
    arti: 'Ayo... (ajakan)',
    rumus: 'Kata Kerja (Bentuk ます, tanpa ます) + ましょう',
    penjelasan: 'Digunakan untuk mengajak lawan bicara melakukan sesuatu bersama.',
    contohKalimat: '一緒に食べましょう。',
    furigana: 'いっしょ に たべましょう。',
    terjemahan: 'Ayo makan bersama.'
  },
  {
    id: 'g33',
    pola: '〜ましょうか (〜mashou ka)',
    arti: 'Bagaimana kalau... / Perlukah saya...',
    rumus: 'Kata Kerja (Bentuk ます, tanpa ます) + ましょうか',
    penjelasan: 'Digunakan untuk menawarkan bantuan atau mengajukan usul kepada lawan bicara.',
    contohKalimat: '荷物を持ちましょうか。',
    furigana: 'にもつ を もちましょう か。',
    terjemahan: 'Perlukah saya membawakan barangnya?'
  },
  {
    id: 'g34',
    pola: '〜ませんか (〜masen ka)',
    arti: 'Maukah... / Tidak mau...? (ajakan sopan)',
    rumus: 'Kata Kerja (Bentuk ません) + か',
    penjelasan: 'Bentuk ajakan yang lebih sopan dan tidak memaksa dibanding ましょう.',
    contohKalimat: '一緒に映画を見ませんか。',
    furigana: 'いっしょ に えいが を みません か。',
    terjemahan: 'Maukah menonton film bersama?'
  },
  {
    id: 'g35',
    pola: '〜前に (〜mae ni)',
    arti: 'Sebelum...',
    rumus: 'Kata Kerja (Bentuk Kamus) + 前に / Kata Benda + の + 前に',
    penjelasan: 'Menunjukkan suatu tindakan yang dilakukan sebelum tindakan lain.',
    contohKalimat: '寝る前に歯を磨きます。',
    furigana: 'ねる まえ に は を みがきます。',
    terjemahan: 'Menggosok gigi sebelum tidur.'
  },
  {
    id: 'g36',
    pola: '〜てから (〜te kara)',
    arti: 'Setelah...',
    rumus: 'Kata Kerja (Bentuk -te) + から',
    penjelasan: 'Menunjukkan suatu tindakan yang dilakukan setelah tindakan lain selesai.',
    contohKalimat: 'ご飯を食べてから、歯を磨きます。',
    furigana: 'ごはん を たべて から、は を みがきます。',
    terjemahan: 'Setelah makan, menggosok gigi.'
  },

  // === KATA SIFAT ===
  {
    id: 'g37',
    pola: 'Kata Sifat-i + です (i-adjective + desu)',
    arti: 'Menyatakan sifat (kata sifat -i)',
    rumus: 'Kata Sifat-i + です',
    penjelasan: 'Kata sifat -i langsung diikuti です tanpa perubahan bentuk untuk kalimat positif masa kini.',
    contohKalimat: 'この林檎は美味しいです。',
    furigana: 'この りんご は おいしい です。',
    terjemahan: 'Apel ini enak.'
  },
  {
    id: 'g38',
    pola: 'Kata Sifat-i + くないです (i-adjective + kunai desu)',
    arti: 'Tidak... (negatif kata sifat -i)',
    rumus: 'Kata Sifat-i (hapus い) + くないです',
    penjelasan: 'Bentuk negatif kata sifat -i dibuat dengan mengganti い terakhir dengan くない.',
    contohKalimat: 'この本は面白くないです。',
    furigana: 'この ほん は おもしろくない です。',
    terjemahan: 'Buku ini tidak menarik.'
  },
  {
    id: 'g39',
    pola: 'Kata Sifat-na + です (na-adjective + desu)',
    arti: 'Menyatakan sifat (kata sifat -na)',
    rumus: 'Kata Sifat-na + です',
    penjelasan: 'Kata sifat -na langsung diikuti です untuk kalimat positif, tanpa な, kecuali di depan kata benda.',
    contohKalimat: 'この部屋は静かです。',
    furigana: 'この へや は しずか です。',
    terjemahan: 'Kamar ini tenang.'
  },
  {
    id: 'g40',
    pola: 'Kata Sifat-na + じゃないです (na-adjective + ja nai desu)',
    arti: 'Tidak... (negatif kata sifat -na)',
    rumus: 'Kata Sifat-na + じゃないです／じゃありません',
    penjelasan: 'Bentuk negatif kata sifat -na dibuat dengan menambahkan じゃない atau じゃありません.',
    contohKalimat: 'この町は便利じゃないです。',
    furigana: 'この まち は べんり じゃ ない です。',
    terjemahan: 'Kota ini tidak praktis.'
  },
  {
    id: 'g41',
    pola: 'Kata Sifat-na + な + Kata Benda',
    arti: 'Kata benda yang bersifat...',
    rumus: 'Kata Sifat-na + な + Kata Benda',
    penjelasan: 'Saat kata sifat -na menerangkan kata benda secara langsung, harus ditambahkan な di antaranya.',
    contohKalimat: '彼女は親切な人です。',
    furigana: 'かのじょ は しんせつ な ひと です。',
    terjemahan: 'Dia orang yang baik hati.'
  },
  {
    id: 'g42',
    pola: 'Kata Sifat-i + Kata Benda',
    arti: 'Kata benda yang bersifat... (i-adjective)',
    rumus: 'Kata Sifat-i + Kata Benda',
    penjelasan: 'Kata sifat -i menerangkan kata benda secara langsung tanpa partikel tambahan.',
    contohKalimat: '大きい家に住んでいます。',
    furigana: 'おおきい いえ に すんで います。',
    terjemahan: 'Tinggal di rumah yang besar.'
  },

  // === PERBANDINGAN ===
  {
    id: 'g43',
    pola: '〜より〜のほうが (〜yori〜no hou ga)',
    arti: 'Lebih... daripada...',
    rumus: 'A + より + B + の方が + Kata Sifat',
    penjelasan: 'Digunakan untuk membandingkan dua hal, menyatakan B lebih... daripada A.',
    contohKalimat: '電車よりバスのほうが安いです。',
    furigana: 'でんしゃ より バス の ほう が やすい です。',
    terjemahan: 'Bus lebih murah daripada kereta.'
  },
  {
    id: 'g44',
    pola: '〜と〜と どちらが (〜to〜to dochira ga)',
    arti: 'Mana yang lebih... A atau B?',
    rumus: 'A + と + B + と + どちらが + Kata Sifat + ですか',
    penjelasan: 'Digunakan untuk menanyakan perbandingan antara dua pilihan.',
    contohKalimat: '犬と猫とどちらが好きですか。',
    furigana: 'いぬ と ねこ と どちら が すき です か。',
    terjemahan: 'Kamu lebih suka anjing atau kucing?'
  },
  {
    id: 'g45',
    pola: '〜の中で〜が一番 (〜no naka de〜ga ichiban)',
    arti: 'Yang paling... di antara...',
    rumus: 'Kelompok + の中で + Subjek + が一番 + Kata Sifat',
    penjelasan: 'Digunakan untuk menyatakan superlatif, yaitu yang paling... dalam suatu kelompok.',
    contohKalimat: '果物の中でりんごが一番好きです。',
    furigana: 'くだもの の なか で りんご が いちばん すき です。',
    terjemahan: 'Di antara buah-buahan, saya paling suka apel.'
  },

  // === LAINNYA ===
  {
    id: 'g46',
    pola: '〜ましょう／〜でしょう (perkiraan)',
    arti: 'Mungkin... (perkiraan cuaca/keadaan)',
    rumus: 'Kalimat (Bentuk biasa) + でしょう',
    penjelasan: 'Digunakan untuk menyatakan dugaan atau perkiraan pembicara.',
    contohKalimat: '明日は雨でしょう。',
    furigana: 'あした は あめ でしょう。',
    terjemahan: 'Besok mungkin akan hujan.'
  },
  {
    id: 'g47',
    pola: '〜ことができます (〜koto ga dekimasu)',
    arti: 'Bisa/mampu melakukan...',
    rumus: 'Kata Kerja (Bentuk Kamus) + ことができます',
    penjelasan: 'Digunakan untuk menyatakan kemampuan melakukan suatu tindakan.',
    contohKalimat: '私は日本語を話すことができます。',
    furigana: 'わたし は にほんご を はなす こと が できます。',
    terjemahan: 'Saya bisa berbicara bahasa Jepang.'
  },
  {
    id: 'g48',
    pola: '〜すぎます (〜sugimasu)',
    arti: 'Terlalu...',
    rumus: 'Kata Sifat/Kata Kerja (Bentuk ます, tanpa ます) + すぎます',
    penjelasan: 'Menunjukkan sesuatu yang berlebihan atau melampaui batas wajar.',
    contohKalimat: 'このコーヒーは熱すぎます。',
    furigana: 'この コーヒー は あつすぎます。',
    terjemahan: 'Kopi ini terlalu panas.'
  },
  {
    id: 'g49',
    pola: '〜でしょうか (〜deshou ka)',
    arti: 'Apakah... ya? (pertanyaan sopan/ragu)',
    rumus: 'Kalimat (Bentuk biasa) + でしょうか',
    penjelasan: 'Digunakan untuk bertanya dengan sopan atau menyatakan keraguan.',
    contohKalimat: '駅はどこでしょうか。',
    furigana: 'えき は どこ でしょう か。',
    terjemahan: 'Kira-kira stasiunnya di mana ya?'
  },
  {
    id: 'g50',
    pola: '〜んです (〜n desu)',
    arti: 'Penjelasan / Alasan (penegasan)',
    rumus: 'Kalimat (Bentuk biasa) + んです',
    penjelasan: 'Digunakan untuk memberi penjelasan atau alasan atas suatu keadaan, memberi kesan lebih personal.',
    contohKalimat: '頭が痛いんです。',
    furigana: 'あたま が いたいん です。',
    terjemahan: 'Soalnya kepala saya sakit.'
  }
];