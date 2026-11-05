/**
 * ====================================================================
 * BACKEND GOOGLE APPS SCRIPT - WEBSITE SMKN 3 KENDARI
 * ====================================================================
 * Kode ini ditempelkan di editor Apps Script Google Spreadsheet Anda.
 * Dilengkapi fitur auto-create tab sheet, CRUD data, dan 1-klik seed data.
 * ====================================================================
 */

const SECTIONS = ['Profil', 'Berita', 'Pengumuman', 'Guru', 'Galeri', 'Prestasi', 'Ekskul', 'Kegiatan', 'Video', 'Jurusan', 'Statistik', 'Setting'];
const HEADERS = ['id', 'title', 'body', 'date', 'image'];
const FALLBACK_SECRET = 'b2c4cf414b91f062212d5a5c18c38a25c18e626b593eeb5d65e7711935454a433cc5dda77c30be44e2276e8a8dd06fa2';

/** Data Awal / Bawaan Website SMKN 3 Kendari */
const SEED_ROWS = {
  Berita: [
    [
      'berita-1',
      'SMKN 3 Kendari Raih Medali Emas LKS SMK Tingkat Nasional 2024',
      'Siswa jurusan Kuliner SMKN 3 Kendari sukses meraih podium Juara Pertama nasional di Jakarta dengan hidangan kuliner fusion nusantara berstandar internasional.',
      '2024-10-28',
      'https://images.unsplash.com/photo-1556910103-1c02745aae4d?auto=format&fit=crop&w=800&q=80'
    ],
    [
      'berita-2',
      'Pelaksanaan Praktik Kerja Lapangan (PKL) 120 Siswa di 30 Mitra Industri',
      'Sebanyak 120 siswa kelas XI diberangkatkan melaksanakan on-the-job training selama 6 bulan di berbagai hotel bintang lima, restoran, ISP, dan butik ternama.',
      '2024-10-15',
      'https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=800&q=80'
    ],
    [
      'berita-3',
      'Gelar Karya P5 & Fashion Show Busana Tenun Tradisional Sulawesi Tenggara',
      'Pameran karya projek penguatan profil pelajar pancasila menampilkan gaun etnik tenun Tolaki karya siswi Tata Busana dan kreasi kuliner lokal.',
      '2024-10-02',
      'https://images.unsplash.com/photo-1509631179647-0177331693ae?auto=format&fit=crop&w=800&q=80'
    ]
  ],

  Pengumuman: [
    [
      'pengumuman-1',
      'Pelaksanaan Ujian Asesmen & Praktik Kejuruan Berbasis Industri Semester Ganjil',
      'Diberitahukan kepada seluruh siswa kelas X, XI, dan XII agar mempersiapkan kelengkapan portofolio kejuruan dan hadir tepat waktu sesuai jadwal.',
      '2024-11-04',
      ''
    ],
    [
      'pengumuman-2',
      'Sosialisasi Program Beasiswa Indonesia Pintar (PIP) & Kemitraan Magang',
      'Bagi siswa yang memenuhi persyaratan dapat melengkapi berkas fotokopi KIP/KKS di ruang Kesiswaan sebelum batas akhir pendaftaran.',
      '2024-10-25',
      ''
    ]
  ],

  Ekskul: [
    [
      'ekskul-1',
      'OSIS & MPK (Organisasi Siswa Intra Sekolah)',
      'Wadah induk organisasi kepemimpinan siswa SMKN 3 Kendari, penyelenggara MPLS, Class Meeting, dan penggerak kegiatan sekolah berkarakter.',
      'Jumat 14:00',
      'https://images.unsplash.com/photo-1529156069898-49953e39b3ac?auto=format&fit=crop&w=800&q=80'
    ],
    [
      'ekskul-2',
      'Gerakan Pramuka (Ambalan Anoa Mandiri)',
      'Gugus Depan Pramuka Penegak aktif dalam perkemahan alam, kemah bakti, pionering tali temali, dan penguatan karakter disiplin.',
      'Jumat 14:30',
      'https://images.unsplash.com/photo-1504280390367-361c6d9f38f4?auto=format&fit=crop&w=800&q=80'
    ],
    [
      'ekskul-3',
      'PMR Wira (Palang Merah Remaja)',
      'Unit relawan pertolongan pertama pada gawat darurat, evakuasi tandu cepat, donor darah rutin, dan mitigasi bencana bersama PMI.',
      'Sabtu 08:00',
      'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&w=800&q=80'
    ],
    [
      'ekskul-4',
      'LKBB & Paskibra (Satria SMKN 3)',
      'Pasukan elit latihan keterampilan baris-berbaris variasi presisi dan pengibaran bendera merah putih pada upacara resmi.',
      'Selasa & Kamis 15:30',
      'https://images.unsplash.com/photo-1517457373958-b7bdd4587205?auto=format&fit=crop&w=800&q=80'
    ],
    [
      'ekskul-5',
      'Futsal & Sepak Bola',
      'Klub olahraga futsal kebanggaan sekolah dengan pembinaan taktis dan fisik berlisensi, langganan juara turnamen pelajar Kota Kendari.',
      'Senin & Kamis 15:30',
      'https://images.unsplash.com/photo-1574629810360-7efbbe195018?auto=format&fit=crop&w=800&q=80'
    ]
  ],

  Kegiatan: [
    [
      'kegiatan-1',
      'Upacara Bendera Khidmat Bersama Pasukan LKBB Satria',
      'Upacara bendera rutin hari Senin, pembina upacara Kepala Sekolah sekaligus penyerahan piala prestasi lomba.',
      '04 Nov',
      '07:00 - 08:00 WITA'
    ],
    [
      'kegiatan-2',
      'Pelatihan Gabungan PMR Wira & PMI Kota Kendari',
      'Simulasi evakuasi korban bencana gempa dan pertolongan pertama (CPR) bagi 60 relawan PMR muda.',
      '08 Nov',
      '08:30 - 12:00 WITA'
    ],
    [
      'kegiatan-3',
      'Ujian Tengah Semester (UTS) Berbasis Komputer & Praktik',
      'Penilaian tengah semester ganjil tahun ajaran 2024/2025 untuk seluruh siswa kelas X, XI, dan XII.',
      '12 Nov',
      '07:30 - 13:00 WITA'
    ],
    [
      'kegiatan-4',
      'Perkemahan Sabtu Minggu (Persami) Ambalan Pramuka Anoa',
      'Kegiatan pengembaraan alam bebas, pioneering jembatan tali, dan renungan malam api unggun penegak.',
      '16 Nov',
      '14:00 WITA'
    ],
    [
      'kegiatan-5',
      'Pameran Karya Boga & Cooking Demo Jurusan Kuliner',
      'Demo masak bersama Chef hotel bintang lima dan bazaar produk bakery hasil teaching factory siswa.',
      '20 Nov',
      '09:00 - 15:00 WITA'
    ]
  ],

  Prestasi: [
    [
      'prestasi-1',
      'Juara 1 Lomba Kompetensi Siswa (LKS) Nasional Bidang Culinary Arts',
      'Meraih medali emas LKS SMK tingkat Nasional di Jakarta dengan hidangan fusion nusantara berstandar internasional. Siswa: Ahmad Raihan & Tim Culinary.',
      '2024',
      'https://images.unsplash.com/photo-1556910103-1c02745aae4d?auto=format&fit=crop&w=800&q=80'
    ],
    [
      'prestasi-2',
      'Juara 2 LKS Nasional Bidang IT Network System Administration',
      'Medali perak kompetisi IT nasional dalam konfigurasi routing BGP/OSPF, keamanan siber, dan Linux enterprise. Siswa: Rian Dwi Saputra.',
      '2024',
      'https://images.unsplash.com/photo-1544197150-b99a580bb7a8?auto=format&fit=crop&w=800&q=80'
    ],
    [
      'prestasi-3',
      'Juara 1 LKS Provinsi Bidang Hairdressing & Beauty Therapy',
      'Juara pertama LKS Provinsi Sulawesi Tenggara bidang tata rias wajah dan penataan rambut artistik. Siswi: Putri Maharani.',
      '2024',
      'https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?auto=format&fit=crop&w=800&q=80'
    ],
    [
      'prestasi-4',
      'Sekolah Menengah Kejuruan Berprestasi Terbaik Sulawesi Tenggara',
      'Penghargaan Sekolah Vokasi Unggulan oleh Dinas Pendidikan & Kebudayaan Provinsi atas keterserapan lulusan 92% dan link-and-match industri.',
      '2024',
      'https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&w=800&q=80'
    ],
    [
      'prestasi-5',
      'Juara 1 Lomba Formasi Variasi LKBB Pelajar Tingkat Regional',
      'Pasukan LKBB Satria SMKN 3 Kendari meraih juara 1 dan Danton Terbaik dalam kompetisi baris-berbaris variasi kreasi se-Sulawesi.',
      '2024',
      'https://images.unsplash.com/photo-1517457373958-b7bdd4587205?auto=format&fit=crop&w=800&q=80'
    ]
  ],

  Galeri: [
    [
      'galeri-1',
      'Apel Pasukan & Formasi Baris-Berbaris LKBB Satria SMKN 3',
      'Pasukan baris-berbaris LKBB Satria SMKN 3 Kendari pada upacara HUT RI.',
      '2024-08-17',
      'https://images.unsplash.com/photo-1517457373958-b7bdd4587205?auto=format&fit=crop&w=800&q=80'
    ],
    [
      'galeri-2',
      'Kemah Bakti & Api Unggun Gerakan Pramuka Ambalan Anoa',
      'Malam keakraban api unggun pelantikan Penegak Bantara.',
      '2024-08-14',
      'https://images.unsplash.com/photo-1504280390367-361c6d9f38f4?auto=format&fit=crop&w=800&q=80'
    ],
    [
      'galeri-3',
      'Simulasi Tanggap Bencana & Tandu Evakuasi PMR Wira',
      'Penanganan darurat patah tulang dan evakuasi korban bencana.',
      '2024-07-28',
      'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&w=800&q=80'
    ],
    [
      'galeri-4',
      'Praktik Seni Memasak Kontinental Jurusan Kuliner',
      'Teknik sauteing dan plating makanan western berstandar hotel bintang 5.',
      '2024-10-20',
      'https://images.unsplash.com/photo-1556910103-1c02745aae4d?auto=format&fit=crop&w=800&q=80'
    ],
    [
      'galeri-5',
      'Pelatihan Barista & Seni Meracik Kopi Espresso Siswa Kuliner',
      'Eksplorasi latte art dan ekstraksi biji kopi lokal Sulawesi Tenggara.',
      '2024-10-12',
      'https://images.unsplash.com/photo-1501339847302-ac426a4a7cbb?auto=format&fit=crop&w=800&q=80'
    ],
    [
      'galeri-6',
      'Simulasi Front Desk & Pelayanan Tamu Jurusan Perhotelan',
      'Check-in tamu VIP dengan komunikasi Bahasa Inggris dan sistem PMS.',
      '2024-10-05',
      'https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=800&q=80'
    ],
    [
      'galeri-7',
      'Splicing Fiber Optic & Konfigurasi Server Jurusan TJKT',
      'Penyambungan kabel serat optik presisi dan uji koneksi router.',
      '2024-09-28',
      'https://images.unsplash.com/photo-1544197150-b99a580bb7a8?auto=format&fit=crop&w=800&q=80'
    ],
    [
      'galeri-8',
      'Gelar Karya Busana Tenun Daerah - Siswi Tata Busana',
      'Gaun pesta berbahan tenun Tolaki Kendari perpaduan etnik dan modern.',
      '2024-09-19',
      'https://images.unsplash.com/photo-1509631179647-0177331693ae?auto=format&fit=crop&w=800&q=80'
    ],
    [
      'galeri-9',
      'Praktik Tata Rias Pengantin Nusantara - Jurusan Tata Kecantikan',
      'Tata rias pengantin adat pernikahan tradisional dengan sanggul daerah.',
      '2024-09-10',
      'https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?auto=format&fit=crop&w=800&q=80'
    ],
    [
      'galeri-10',
      'Penerimaan Piala Juara 1 LKS Nasional Bidang Kuliner',
      'Tim SMKN 3 Kendari di podium tertinggi LKS SMK Nasional di Jakarta.',
      '2024-08-24',
      'https://images.unsplash.com/photo-1578269174936-2709b6aeb913?auto=format&fit=crop&w=800&q=80'
    ]
  ],

  Video: [
    [
      'video-1',
      'Profil Resmi SMKN 3 Kendari - Sekolah Vokasi Unggulan',
      'Pengenalan fasilitas, 5 jurusan keahlian unggulan, suasana belajar modern, dan pencapaian civitas akademika.',
      '2024-10-10',
      'https://www.youtube.com/watch?v=dQw4w9WgXcQ'
    ],
    [
      'video-2',
      'Dokumentasi Juara 1 Lomba Kompetensi Siswa (LKS) Kuliner Nasional',
      'Liputan perjuangan siswa jurusan Tata Boga dalam meraih medali emas di LKS tingkat Nasional.',
      '2024-09-28',
      'https://www.youtube.com/watch?v=jNQXAC9IVRw'
    ],
    [
      'video-3',
      'Aksi Tim LKBB Paskibra SMKN 3 Kendari dalam Lomba Baris-Berbaris',
      'Penampilan formasi variasi baris-berbaris pasukan Paskibra Satria SMKN 3 Kendari tingkat Kota.',
      '2024-08-17',
      'https://www.youtube.com/watch?v=kJQP7kiw5Fk'
    ],
    [
      'video-4',
      'Kemah Bakti Pramuka Gudep SMKN 3 Kendari di Bumi Perkemahan',
      'Api unggun, jelajah rimba alam, pioneering jembatan, dan penguatan karakter kepanduan.',
      '2024-08-14',
      'https://www.youtube.com/watch?v=fJ9rUzIMcZQ'
    ]
  ],

  Guru: [
    [
      'guru-1',
      'Drs. H. Ahmad Nurdin, M.Pd',
      'Kepala Sekolah SMKN 3 Kendari - Pembina Utama Muda.',
      'Kepala Sekolah',
      'https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=400&q=80'
    ],
    [
      'guru-2',
      'Hj. Rahma Dewi, S.Pd, M.Pd',
      'Wakil Kepala Sekolah Bidang Kurikulum.',
      'Wakasek Kurikulum',
      'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=400&q=80'
    ],
    [
      'guru-3',
      'Muh. Irfan, S.Pd',
      'Wakil Kepala Sekolah Bidang Kesiswaan & Pembina Organisasi Siswa.',
      'Wakasek Kesiswaan',
      'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=400&q=80'
    ],
    [
      'guru-4',
      'Arif Rahman, S.Kom',
      'Ketua Program Keahlian TJKT & Instruktur Jaringan Komputer.',
      'Kaprog TJKT',
      'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=400&q=80'
    ]
  ],

  Profil: [
    [
      'profil-1',
      'Pusat Keunggulan Pendidikan Vokasi Sulawesi Tenggara',
      'SMKN 3 Kendari berkomitmen menyelenggarakan kurikulum berbasis industri dengan 5 program keahlian: Perhotelan, Kuliner, TJKT, Tata Busana, dan Tata Kecantikan.',
      '2024',
      ''
    ]
  ],

  Jurusan: [
    ['jurusan-hotel', 'Perhotelan', 'Akomodasi Perhotelan & Hospitality|Front Office PMS,Housekeeping,F&B Service,Bahasa Inggris Vokasi', 'hotel', 'https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=600&q=80'],
    ['jurusan-kuliner', 'Kuliner', 'Tata Boga & Kuliner Modern|Pastry & Bakery,Indonesian & Continental Food,Food Plating,Barista Kopi', 'kuliner', 'https://images.unsplash.com/photo-1556910103-1c02745aae4d?auto=format&fit=crop&w=600&q=80'],
    ['jurusan-tjkt', 'TJKT', 'Teknik Jaringan Komputer & Telekomunikasi|Cisco Routing,MikroTik Network,Fiber Optic Splicing,Linux Cloud Server', 'tjkt', 'https://images.unsplash.com/photo-1544197150-b99a580bb7a8?auto=format&fit=crop&w=600&q=80'],
    ['jurusan-busana', 'Tata Busana', 'Tata Busana & Fashion Design|Desain Mode & Sketsa,Pattern Making,Jahit Busana Industri,Bordir & Tenun', 'busana', 'https://images.unsplash.com/photo-1509631179647-0177331693ae?auto=format&fit=crop&w=600&q=80'],
    ['jurusan-kecantikan', 'Tata Kecantikan', 'Tata Kecantikan Kulit & Rambut|Make Up Artist (MUA),Skin Care & Facial,Hair Styling & Cut,Rias Pengantin Adat', 'kecantikan', 'https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?auto=format&fit=crop&w=600&q=80']
  ],

  Statistik: [
    ['stat-1', 'Siswa Aktif', '1.250+', '👨‍🎓', 'hero'],
    ['stat-2', 'Jurusan Unggulan', '5', '📚', 'hero'],
    ['stat-3', 'Mitra Industri', '75+', '🤝', 'hero'],
    ['stat-4', 'Keterserapan Kerja', '92%', '📈', 'hero'],
    ['stat-5', 'Juara LKS Tingkat Nasional', '12+', '🥇', 'banner'],
    ['stat-6', 'Lulusan Tersertifikasi BNSP', '100%', '👨‍🎓', 'banner'],
    ['stat-7', 'DUDIKA & Hotel Bintang Lima', '75+', '🤝', 'banner'],
    ['stat-8', 'Akreditasi BAN-S/M Unggul', 'A', '🏛️', 'banner']
  ],

  Setting: [
    ['set-1', 'hero_title', 'Membentuk Masa Depan Vokasi Gemilang di SMKN 3 Kendari', 'hero', ''],
    ['set-2', 'hero_badge', '🏆 SMK Pusat Keunggulan • Akreditasi A (Unggul)', 'hero', ''],
    ['set-3', 'hero_desc', 'Pusat pendidikan kejuruan terkemuka di Sulawesi Tenggara dengan 5 program keahlian unggulan: Perhotelan, Kuliner, TJKT, Tata Busana, dan Tata Kecantikan berstandar industri.', 'hero', ''],
    ['set-4', 'cta_ppdb_title', 'Siap Raih Masa Depan Cerah Bersama SMKN 3 Kendari?', 'cta', ''],
    ['set-5', 'cta_ppdb_desc', 'Daftarkan diri Anda di salah satu dari 5 jurusan kejuruan unggulan berstandar industri dan ikuti kegiatan ekstrakurikuler berprestasi kami.', 'cta', ''],
    ['set-6', 'alamat', 'Jl. Bunggasi, Anduonohu, Kec. Poasia, Kota Kendari, Sulawesi Tenggara 93231', 'kontak', ''],
    ['set-7', 'telepon', '(0401) 123-4567', 'kontak', ''],
    ['set-8', 'email', 'info@smkn3kendari.sch.id', 'kontak', ''],
    ['set-9', 'whatsapp', '+62-821-XXXX-XXXX', 'kontak', ''],
    ['set-10', 'jam_operasional', 'Senin – Jumat: 07:00 – 16:00', 'kontak', ''],
    ['set-11', 'facebook', '#', 'sosial', ''],
    ['set-12', 'instagram', '#', 'sosial', ''],
    ['set-13', 'youtube', '#', 'sosial', ''],
    ['set-14', 'twitter', '#', 'sosial', ''],
    ['set-15', 'footer_desc', 'Mencetak generasi unggul, terampil, dan berkarakter dalam bidang vokasi untuk menghadapi tantangan dunia kerja modern.', 'footer', '']
  ]
};

/** Mengambil API Secret baik dari Script Properties maupun Fallback */
function getStoredSecret() {
  var prop = PropertiesService.getScriptProperties().getProperty('API_SECRET') || '';
  prop = String(prop).trim();
  if (prop.indexOf('API_SECRET=') === 0) {
    prop = prop.substring('API_SECRET='.length).trim();
  }
  return prop || FALLBACK_SECRET;
}

/** Fungsi bantuan untuk mengembalikan response JSON */
function json(obj) {
  return ContentService.createTextOutput(JSON.stringify(obj))
    .setMimeType(ContentService.MimeType.JSON);
}

/** Inisialisasi sheet sekaligus mengisi data bawaan jika sheet masih kosong */
function setupSheets() {
  const ss = SpreadsheetApp.getActiveSpreadsheet();
  var insertedCount = 0;

  SECTIONS.forEach(function(s) {
    var sh = ss.getSheetByName(s);
    if (!sh) {
      sh = ss.insertSheet(s);
    }
    if (sh.getLastRow() === 0) {
      sh.appendRow(HEADERS);
    }

    // Jika sheet hanya memiliki baris header (belum ada isi data), masukkan data bawaan website
    if (sh.getLastRow() === 1 && SEED_ROWS[s] && SEED_ROWS[s].length > 0) {
      var rows = SEED_ROWS[s];
      sh.getRange(2, 1, rows.length, HEADERS.length).setValues(rows);
      insertedCount += rows.length;
    }
  });

  return {
    ok: true,
    message: 'Semua 9 tab sheet berhasil disiapkan dan ' + insertedCount + ' data bawaan website berhasil disimpan ke Spreadsheet!'
  };
}

/** Fungsi untuk memaksa isi seluruh data bawaan ke sheet tanpa menghapus data yang sudah ada */
function isiSemuaDataDefault() {
  return setupSheets();
}

/** Endpoint GET: untuk mengecek apakah API aktif saat dibuka di browser */
function doGet(e) {
  return json({
    ok: true,
    status: 'Aktif',
    service: 'API Website SMKN 3 Kendari',
    sections: SECTIONS,
    timestamp: new Date().toISOString()
  });
}

/** Endpoint POST: CRUD data dari website Next.js */
function doPost(e) {
  var lock = LockService.getScriptLock();
  try {
    if (!e || !e.postData || !e.postData.contents) {
      throw new Error('Payload kosong');
    }

    var input = JSON.parse(e.postData.contents);
    var configuredSecret = getStoredSecret();
    var incomingSecret = String(input.secret || '').trim();

    if (incomingSecret.indexOf('API_SECRET=') === 0) {
      incomingSecret = incomingSecret.substring('API_SECRET='.length).trim();
    }

    if (incomingSecret !== configuredSecret && incomingSecret !== FALLBACK_SECRET) {
      throw new Error('API_SECRET tidak cocok (Unauthorized)');
    }

    // Ping / Test Koneksi
    if (input.action === 'ping') {
      return json({ ok: true, message: 'Koneksi ke Google Sheets berhasil!' });
    }

    // Inisialisasi Sheet & Isi Data Otomatis
    if (input.action === 'setup' || input.action === 'seed' || input.action === 'seed_all') {
      var setupRes = setupSheets();
      return json(setupRes);
    }

    if (!SECTIONS.includes(input.section)) {
      throw new Error('Section tidak valid: ' + input.section);
    }
    if (!['list', 'save', 'batch_save', 'delete'].includes(input.action)) {
      throw new Error('Action tidak valid: ' + input.action);
    }

    lock.waitLock(15000);

    var ss = SpreadsheetApp.getActiveSpreadsheet();
    var sh = ss.getSheetByName(input.section);

    if (!sh) {
      sh = ss.insertSheet(input.section);
      sh.appendRow(HEADERS);
    }

    var values = sh.getDataRange().getValues();

    // Aksi BATCH SAVE
    if (input.action === 'batch_save') {
      var batchItems = input.items || [];
      var rowsToAppend = [];
      batchItems.forEach(function(it) {
        var t = String(it.title || '').trim().slice(0, 500);
        var b = String(it.body || '').trim().slice(0, 20000);
        var img = String(it.image || '').trim().slice(0, 2000);
        var d = it.date ? String(it.date).slice(0, 30) : new Date().toISOString().slice(0, 10);
        var itId = String(it.id || Utilities.getUuid());
        if (t && b) {
          rowsToAppend.push([itId, t, b, d, img]);
        }
      });

      if (rowsToAppend.length > 0) {
        sh.getRange(sh.getLastRow() + 1, 1, rowsToAppend.length, HEADERS.length).setValues(rowsToAppend);
      }
    }

    // Aksi SAVE (Tambah atau Update 1 item)
    if (input.action === 'save') {
      var item = input.item || {};
      var title = String(item.title || '').trim().slice(0, 500);
      var body = String(item.body || '').trim().slice(0, 20000);
      var image = String(item.image || '').trim().slice(0, 2000);
      var date = item.date ? String(item.date).slice(0, 30) : new Date().toISOString().slice(0, 10);

      if (!title || !body) {
        throw new Error('Judul dan isi konten wajib diisi');
      }

      var id = String(item.id || Utilities.getUuid());
      var rowIndex = -1;

      for (var i = 1; i < values.length; i++) {
        if (String(values[i][0]) === id) {
          rowIndex = i + 1;
          break;
        }
      }

      var rowData = [id, title, body, date, image];

      if (rowIndex > 0) {
        sh.getRange(rowIndex, 1, 1, HEADERS.length).setValues([rowData]);
      } else {
        sh.appendRow(rowData);
      }
    }

    // Aksi DELETE
    if (input.action === 'delete') {
      var delItem = input.item || {};
      var delId = String(delItem.id || '');
      if (!delId) throw new Error('ID yang akan dihapus tidak ditentukan');

      var targetRow = -1;
      for (var j = 1; j < values.length; j++) {
        if (String(values[j][0]) === delId) {
          targetRow = j + 1;
          break;
        }
      }

      if (targetRow > 0) {
        sh.deleteRow(targetRow);
      } else {
        throw new Error('Data dengan ID ' + delId + ' tidak ditemukan');
      }
    }

    // Mengembalikan list data terbaru
    var updatedValues = sh.getDataRange().getValues();
    var rows = updatedValues.slice(1).filter(function(r) { return r[0]; }).map(function(r) {
      var obj = {};
      HEADERS.forEach(function(h, idx) {
        obj[h] = String(r[idx] || '');
      });
      return obj;
    });

    return json({ ok: true, data: rows });

  } catch (err) {
    return json({ ok: false, error: String(err.message || err) });
  } finally {
    if (lock.hasLock()) {
      lock.releaseLock();
    }
  }
}
