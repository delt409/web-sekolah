import type { Entry, Section } from './data';

export const allSeedData: Record<Section, Partial<Entry>[]> = {
  Jurusan: [
    {
      title: 'Perhotelan',
      body: 'Akomodasi Perhotelan & Hospitality|Front Office PMS,Housekeeping,F&B Service,Bahasa Inggris Vokasi',
      date: 'hotel',
      image: 'https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=600&q=80',
    },
    {
      title: 'Kuliner',
      body: 'Tata Boga & Kuliner Modern|Pastry & Bakery,Indonesian & Continental Food,Food Plating,Barista Kopi',
      date: 'kuliner',
      image: 'https://images.unsplash.com/photo-1556910103-1c02745aae4d?auto=format&fit=crop&w=600&q=80',
    },
    {
      title: 'TJKT',
      body: 'Teknik Jaringan Komputer & Telekomunikasi|Cisco Routing,MikroTik Network,Fiber Optic Splicing,Linux Cloud Server',
      date: 'tjkt',
      image: 'https://images.unsplash.com/photo-1544197150-b99a580bb7a8?auto=format&fit=crop&w=600&q=80',
    },
    {
      title: 'Tata Busana',
      body: 'Tata Busana & Fashion Design|Desain Mode & Sketsa,Pattern Making,Jahit Busana Industri,Bordir & Tenun',
      date: 'busana',
      image: 'https://images.unsplash.com/photo-1509631179647-0177331693ae?auto=format&fit=crop&w=600&q=80',
    },
    {
      title: 'Tata Kecantikan',
      body: 'Tata Kecantikan Kulit & Rambut|Make Up Artist (MUA),Skin Care & Facial,Hair Styling & Cut,Rias Pengantin Adat',
      date: 'kecantikan',
      image: 'https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?auto=format&fit=crop&w=600&q=80',
    },
  ],

  Statistik: [
    { title: 'Siswa Aktif', body: '1.250+', date: '👨‍🎓', image: 'hero' },
    { title: 'Jurusan Unggulan', body: '5', date: '📚', image: 'hero' },
    { title: 'Mitra Industri', body: '75+', date: '🤝', image: 'hero' },
    { title: 'Keterserapan Kerja', body: '92%', date: '📈', image: 'hero' },
    { title: 'Juara LKS Tingkat Nasional', body: '12+', date: '🥇', image: 'banner' },
    { title: 'Lulusan Tersertifikasi BNSP', body: '100%', date: '👨‍🎓', image: 'banner' },
    { title: 'DUDIKA & Hotel Bintang Lima', body: '75+', date: '🤝', image: 'banner' },
    { title: 'Akreditasi BAN-S/M Unggul', body: 'A', date: '🏛️', image: 'banner' },
  ],

  Setting: [
    { title: 'hero_title', body: 'Membentuk Masa Depan Vokasi Gemilang di SMKN 3 Kendari', date: 'hero', image: '' },
    { title: 'hero_badge', body: '🏆 SMK Pusat Keunggulan • Akreditasi A (Unggul)', date: 'hero', image: '' },
    { title: 'hero_desc', body: 'Pusat pendidikan kejuruan terkemuka di Sulawesi Tenggara dengan 5 program keahlian unggulan: Perhotelan, Kuliner, TJKT, Tata Busana, dan Tata Kecantikan berstandar industri.', date: 'hero', image: '' },
    { title: 'cta_ppdb_title', body: 'Siap Raih Masa Depan Cerah Bersama SMKN 3 Kendari?', date: 'cta', image: '' },
    { title: 'cta_ppdb_desc', body: 'Daftarkan diri Anda di salah satu dari 5 jurusan kejuruan unggulan berstandar industri dan ikuti kegiatan ekstrakurikuler berprestasi kami.', date: 'cta', image: '' },
    { title: 'alamat', body: 'Jl. Bunggasi, Anduonohu, Kec. Poasia, Kota Kendari, Sulawesi Tenggara 93231', date: 'kontak', image: '' },
    { title: 'telepon', body: '(0401) 123-4567', date: 'kontak', image: '' },
    { title: 'email', body: 'info@smkn3kendari.sch.id', date: 'kontak', image: '' },
    { title: 'whatsapp', body: '+62-821-XXXX-XXXX', date: 'kontak', image: '' },
    { title: 'jam_operasional', body: 'Senin – Jumat: 07:00 – 16:00', date: 'kontak', image: '' },
    { title: 'facebook', body: '#', date: 'sosial', image: '' },
    { title: 'instagram', body: '#', date: 'sosial', image: '' },
    { title: 'youtube', body: '#', date: 'sosial', image: '' },
    { title: 'twitter', body: '#', date: 'sosial', image: '' },
    { title: 'footer_desc', body: 'Mencetak generasi unggul, terampil, dan berkarakter dalam bidang vokasi untuk menghadapi tantangan dunia kerja modern.', date: 'footer', image: '' },
  ],
  Berita: [
    {
      title: 'SMKN 3 Kendari Raih Medali Emas LKS SMK Tingkat Nasional 2024',
      body: 'Siswa jurusan Kuliner SMKN 3 Kendari sukses meraih podium Juara Pertama nasional di Jakarta dengan hidangan kuliner fusion nusantara berstandar internasional.',
      date: '2024-10-28',
      image: 'https://images.unsplash.com/photo-1556910103-1c02745aae4d?auto=format&fit=crop&w=800&q=80',
    },
    {
      title: 'Pelaksanaan Praktik Kerja Lapangan (PKL) 120 Siswa di 30 Mitra Industri',
      body: 'Sebanyak 120 siswa kelas XI diberangkatkan melaksanakan on-the-job training selama 6 bulan di berbagai hotel bintang lima, restoran, ISP, dan butik ternama.',
      date: '2024-10-15',
      image: 'https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=800&q=80',
    },
    {
      title: 'Gelar Karya P5 & Fashion Show Busana Tenun Tradisional Sulawesi Tenggara',
      body: 'Pameran karya projek penguatan profil pelajar pancasila menampilkan gaun etnik tenun Tolaki karya siswi Tata Busana dan kreasi kuliner lokal.',
      date: '2024-10-02',
      image: 'https://images.unsplash.com/photo-1509631179647-0177331693ae?auto=format&fit=crop&w=800&q=80',
    },
  ],

  Galeri: [
    {
      title: 'Apel Pasukan & Formasi Baris-Berbaris LKBB Satria SMKN 3',
      body: 'Ekskul (OSIS, Pramuka, PMR, LKBB) - Pasukan baris-berbaris LKBB Satria SMKN 3 Kendari pada upacara HUT RI.',
      date: '2024-08-17',
      image: 'https://images.unsplash.com/photo-1517457373958-b7bdd4587205?auto=format&fit=crop&w=800&q=80',
    },
    {
      title: 'Kemah Bakti & Api Unggun Gerakan Pramuka Ambalan Anoa',
      body: 'Ekskul (OSIS, Pramuka, PMR, LKBB) - Malam keakraban api unggun pelantikan Penegak Bantara.',
      date: '2024-08-14',
      image: 'https://images.unsplash.com/photo-1504280390367-361c6d9f38f4?auto=format&fit=crop&w=800&q=80',
    },
    {
      title: 'Simulasi Tanggap Bencana & Tandu Evakuasi PMR Wira',
      body: 'Ekskul (OSIS, Pramuka, PMR, LKBB) - Penanganan darurat patah tulang dan evakuasi korban bencana.',
      date: '2024-07-28',
      image: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&w=800&q=80',
    },
    {
      title: 'Praktik Seni Memasak Kontinental Jurusan Kuliner / Tata Boga',
      body: 'Praktik Kejuruan - Teknik sauteing dan plating makanan western berstandar hotel bintang 5.',
      date: '2024-10-20',
      image: 'https://images.unsplash.com/photo-1556910103-1c02745aae4d?auto=format&fit=crop&w=800&q=80',
    },
    {
      title: 'Pelatihan Barista & Seni Meracik Kopi Espresso Siswa Kuliner',
      body: 'Praktik Kejuruan - Eksplorasi latte art dan ekstraksi biji kopi lokal Sulawesi Tenggara.',
      date: '2024-10-12',
      image: 'https://images.unsplash.com/photo-1501339847302-ac426a4a7cbb?auto=format&fit=crop&w=800&q=80',
    },
    {
      title: 'Simulasi Front Desk & Pelayanan Tamu Jurusan Perhotelan',
      body: 'Praktik Kejuruan - Check-in tamu VIP dengan komunikasi Bahasa Inggris dan sistem PMS.',
      date: '2024-10-05',
      image: 'https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=800&q=80',
    },
    {
      title: 'Splicing Fiber Optic & Konfigurasi Server Jurusan TJKT',
      body: 'Praktik Kejuruan - Penyambungan kabel serat optik presisi dan uji koneksi router.',
      date: '2024-09-28',
      image: 'https://images.unsplash.com/photo-1544197150-b99a580bb7a8?auto=format&fit=crop&w=800&q=80',
    },
    {
      title: 'Gelar Karya Busana Tenun Daerah - Siswi Tata Busana',
      body: 'Praktik Kejuruan - Gaun pesta berbahan tenun Tolaki Kendari perpaduan etnik dan modern.',
      date: '2024-09-19',
      image: 'https://images.unsplash.com/photo-1509631179647-0177331693ae?auto=format&fit=crop&w=800&q=80',
    },
    {
      title: 'Praktik Tata Rias Pengantin Nusantara - Jurusan Tata Kecantikan',
      body: 'Praktik Kejuruan - Tata rias pengantin adat pernikahan tradisional dengan sanggul daerah.',
      date: '2024-09-10',
      image: 'https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?auto=format&fit=crop&w=800&q=80',
    },
    {
      title: 'Penerimaan Piala Juara 1 LKS Nasional Bidang Kuliner',
      body: 'Prestasi & LKS - Tim SMKN 3 Kendari di podium tertinggi LKS SMK Nasional di Jakarta.',
      date: '2024-08-24',
      image: 'https://images.unsplash.com/photo-1578269174936-2709b6aeb913?auto=format&fit=crop&w=800&q=80',
    },
  ],

  Prestasi: [
    {
      title: 'Juara 1 Lomba Kompetensi Siswa (LKS) Nasional Bidang Culinary Arts',
      body: 'Meraih medali emas LKS SMK tingkat Nasional di Jakarta dengan hidangan fusion nusantara berstandar internasional. Siswa: Ahmad Raihan & Tim Culinary.',
      date: '2024',
      image: 'https://images.unsplash.com/photo-1556910103-1c02745aae4d?auto=format&fit=crop&w=800&q=80',
    },
    {
      title: 'Juara 2 LKS Nasional Bidang IT Network System Administration',
      body: 'Medali perak kompetisi IT nasional dalam konfigurasi routing BGP/OSPF, keamanan siber, dan Linux enterprise. Siswa: Rian Dwi Saputra.',
      date: '2024',
      image: 'https://images.unsplash.com/photo-1544197150-b99a580bb7a8?auto=format&fit=crop&w=800&q=80',
    },
    {
      title: 'Juara 1 LKS Provinsi Bidang Hairdressing & Beauty Therapy',
      body: 'Juara pertama LKS Provinsi Sulawesi Tenggara bidang tata rias wajah dan penataan rambut artistik. Siswi: Putri Maharani.',
      date: '2024',
      image: 'https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?auto=format&fit=crop&w=800&q=80',
    },
    {
      title: 'Sekolah Menengah Kejuruan Berprestasi Terbaik Sulawesi Tenggara',
      body: 'Penghargaan Sekolah Vokasi Unggulan oleh Dinas Pendidikan & Kebudayaan Provinsi atas keterserapan lulusan 92% dan link-and-match industri.',
      date: '2024',
      image: 'https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&w=800&q=80',
    },
    {
      title: 'Juara 1 Lomba Formasi Variasi LKBB Pelajar Tingkat Regional',
      body: 'Pasukan LKBB Satria SMKN 3 Kendari meraih juara 1 dan Danton Terbaik dalam kompetisi baris-berbaris variasi kreasi se-Sulawesi.',
      date: '2024',
      image: 'https://images.unsplash.com/photo-1517457373958-b7bdd4587205?auto=format&fit=crop&w=800&q=80',
    },
  ],

  Ekskul: [
    {
      title: 'OSIS & MPK (Organisasi Siswa Intra Sekolah)',
      body: 'Wadah induk organisasi kepemimpinan siswa SMKN 3 Kendari, penyelenggara MPLS, Class Meeting, dan penggerak kegiatan sekolah berkarakter.',
      date: 'Jumat 14:00',
      image: 'https://images.unsplash.com/photo-1529156069898-49953e39b3ac?auto=format&fit=crop&w=800&q=80',
    },
    {
      title: 'Gerakan Pramuka (Ambalan Anoa Mandiri)',
      body: 'Gugus Depan Pramuka Penegak aktif dalam perkemahan alam, kemah bakti, pionering tali temali, dan penguatan karakter disiplin.',
      date: 'Jumat 14:30',
      image: 'https://images.unsplash.com/photo-1504280390367-361c6d9f38f4?auto=format&fit=crop&w=800&q=80',
    },
    {
      title: 'PMR Wira (Palang Merah Remaja)',
      body: 'Unit relawan pertolongan pertama pada gawat darurat, evakuasi tandu cepat, donor darah rutin, dan mitigasi bencana bersama PMI.',
      date: 'Sabtu 08:00',
      image: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&w=800&q=80',
    },
    {
      title: 'LKBB & Paskibra (Satria SMKN 3)',
      body: 'Pasukan elit latihan keterampilan baris-berbaris variasi presisi dan pengibaran bendera merah putih pada upacara resmi.',
      date: 'Selasa & Kamis 15:30',
      image: 'https://images.unsplash.com/photo-1517457373958-b7bdd4587205?auto=format&fit=crop&w=800&q=80',
    },
    {
      title: 'Futsal & Sepak Bola',
      body: 'Klub olahraga futsal kebanggaan sekolah dengan pembinaan taktis dan fisik berlisensi, langganan juara turnamen pelajar Kota Kendari.',
      date: 'Senin & Kamis 15:30',
      image: 'https://images.unsplash.com/photo-1574629810360-7efbbe195018?auto=format&fit=crop&w=800&q=80',
    },
  ],

  Kegiatan: [
    {
      title: 'Upacara Bendera Khidmat Bersama Pasukan LKBB Satria',
      body: 'Upacara bendera rutin hari Senin, pembina upacara Kepala Sekolah sekaligus penyerahan piala prestasi lomba.',
      date: '04 Nov',
      image: '07:00 - 08:00 WITA',
    },
    {
      title: 'Pelatihan Gabungan PMR Wira & PMI Kota Kendari',
      body: 'Simulasi evakuasi korban bencana gempa dan pertolongan pertama (CPR) bagi 60 relawan PMR muda.',
      date: '08 Nov',
      image: '08:30 - 12:00 WITA',
    },
    {
      title: 'Ujian Tengah Semester (UTS) Berbasis Komputer & Praktik',
      body: 'Penilaian tengah semester ganjil tahun ajaran 2024/2025 untuk seluruh siswa kelas X, XI, dan XII.',
      date: '12 Nov',
      image: '07:30 - 13:00 WITA',
    },
    {
      title: 'Perkemahan Sabtu Minggu (Persami) Ambalan Pramuka Anoa',
      body: 'Kegiatan pengembaraan alam bebas, pioneering jembatan tali, dan renungan malam api unggun penegak.',
      date: '16 Nov',
      image: '14:00 WITA',
    },
    {
      title: 'Pameran Karya Boga & Cooking Demo Jurusan Kuliner',
      body: 'Demo masak bersama Chef hotel bintang lima dan bazaar produk bakery hasil teaching factory siswa.',
      date: '20 Nov',
      image: '09:00 - 15:00 WITA',
    },
  ],

  Video: [
    {
      title: 'Profil Resmi SMKN 3 Kendari - Sekolah Vokasi Unggulan',
      body: 'Pengenalan fasilitas, 5 jurusan keahlian unggulan, suasana belajar modern, dan pencapaian civitas akademika.',
      date: '2024-10-10',
      image: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ',
    },
    {
      title: 'Dokumentasi Juara 1 Lomba Kompetensi Siswa (LKS) Kuliner Nasional',
      body: 'Liputan perjuangan siswa jurusan Tata Boga dalam meraih medali emas di LKS tingkat Nasional.',
      date: '2024-09-28',
      image: 'https://www.youtube.com/watch?v=jNQXAC9IVRw',
    },
    {
      title: 'Aksi Tim LKBB Paskibra SMKN 3 Kendari dalam Lomba Baris-Berbaris',
      body: 'Penampilan formasi variasi baris-berbaris pasukan Paskibra Satria SMKN 3 Kendari tingkat Kota.',
      date: '2024-08-17',
      image: 'https://www.youtube.com/watch?v=kJQP7kiw5Fk',
    },
    {
      title: 'Kemah Bakti Pramuka Gudep SMKN 3 Kendari di Bumi Perkemahan',
      body: 'Api unggun, jelajah rimba alam, pioneering jembatan, dan penguatan karakter kepanduan.',
      date: '2024-08-14',
      image: 'https://www.youtube.com/watch?v=fJ9rUzIMcZQ',
    },
  ],

  Pengumuman: [
    {
      title: 'Jadwal Pelaksanaan Asesmen Bakat & Minat Siswa Baru',
      body: 'Diberitahukan kepada seluruh siswa baru agar hadir tepat waktu pada tanggal 10 dengan seragam lengkap.',
      date: '2024-11-01',
      image: '',
    },
    {
      title: 'Informasi Pendaftaran Beasiswa Program Indonesia Pintar (PIP)',
      body: 'Bagi siswa yang memenuhi persyaratan dapat melengkapi berkas fotokopi KIP/KKS di ruang Kesiswaan.',
      date: '2024-10-25',
      image: '',
    },
  ],

  Profil: [
    {
      title: 'Pusat Keunggulan Vokasi Sulawesi Tenggara',
      body: 'SMKN 3 Kendari berkomitmen menyelenggarakan kurikulum berbasis industri dengan 5 program keahlian: Perhotelan, Kuliner, TJKT, Tata Busana, dan Tata Kecantikan.',
      date: '2024',
      image: '',
    },
  ],

  Guru: [
    {
      title: 'Drs. H. Ahmad Nurdin, M.Pd',
      body: 'Kepala Sekolah SMKN 3 Kendari - Pembina Utama Muda.',
      date: 'Kepala Sekolah',
      image: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=400&q=80',
    },
    {
      title: 'Hj. Rahma Dewi, S.Pd, M.Pd',
      body: 'Wakil Kepala Sekolah Bidang Kurikulum.',
      date: 'Wakasek Kurikulum',
      image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=400&q=80',
    },
    {
      title: 'Muh. Irfan, S.Pd',
      body: 'Wakil Kepala Sekolah Bidang Kesiswaan & Pembina Organisasi Siswa.',
      date: 'Wakasek Kesiswaan',
      image: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=400&q=80',
    },
    {
      title: 'Arif Rahman, S.Kom',
      body: 'Ketua Program Keahlian TJKT & Instruktur Jaringan Komputer.',
      date: 'Kaprog TJKT',
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=400&q=80',
    },
  ],
};

