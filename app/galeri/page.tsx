import type { Metadata } from 'next';
import Link from 'next/link';
import GaleriGrid, { type GaleriItem } from '../../components/GaleriGrid';
import { gas, type Entry } from '../../lib/data';

export const dynamic = 'force-dynamic';
export const revalidate = 0;

export const metadata: Metadata = {
  title: 'Galeri Foto Kegiatan & Fasilitas',
  description: 'Dokumentasi foto kegiatan sekolah, praktik 5 kejuruan, aksi ekskul OSIS, Pramuka, PMR, LKBB, dan prestasi SMKN 3 Kendari.',
};

async function safeLoad(): Promise<Entry[]> {
  try { return await gas('Galeri'); } catch { return []; }
}

const staticGaleri: GaleriItem[] = [
  // Ekskul Utama
  {
    id: 'g1',
    title: 'Apel Pasukan & Formasi Baris-Berbaris LKBB Satria SMKN 3',
    category: 'Ekskul (OSIS, Pramuka, PMR, LKBB)',
    image: 'https://images.unsplash.com/photo-1517457373958-b7bdd4587205?auto=format&fit=crop&w=800&q=80',
    date: '17 Agustus 2024',
    location: 'Lapangan Upacara SMKN 3 Kendari',
    caption: 'Pasukan baris-berbaris LKBB Satria SMKN 3 Kendari menunjukkan ketepatan langkah dan formasi variasi memukau pada peringatan HUT RI ke-79.',
  },
  {
    id: 'g2',
    title: 'Kemah Bakti & Api Unggun Gerakan Pramuka Ambalan Anoa',
    category: 'Ekskul (OSIS, Pramuka, PMR, LKBB)',
    image: 'https://images.unsplash.com/photo-1504280390367-361c6d9f38f4?auto=format&fit=crop&w=800&q=80',
    date: '14 Agustus 2024',
    location: 'Bumi Perkemahan Moramo',
    caption: 'Malam keakraban api unggun dan pelantikan Penegak Bantara Pramuka Gugus Depan SMKN 3 Kendari di bawah gemerlap bintang.',
  },
  {
    id: 'g3',
    title: 'Simulasi Tanggap Bencana & Tandu Evakuasi PMR Wira',
    category: 'Ekskul (OSIS, Pramuka, PMR, LKBB)',
    image: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&w=800&q=80',
    date: '28 Juli 2024',
    location: 'Posko PMR Wira SMKN 3 Kendari',
    caption: 'Anggota PMR Wira memperagakan penanganan darurat patah tulang dan evakuasi korban bencana dengan tandu cepat standar PMI.',
  },
  {
    id: 'g4',
    title: 'Sidang Pleno & Musyawarah Kerja Pengurus OSIS - MPK',
    category: 'Ekskul (OSIS, Pramuka, PMR, LKBB)',
    image: 'https://images.unsplash.com/photo-1529156069898-49953e39b3ac?auto=format&fit=crop&w=800&q=80',
    date: '15 Juli 2024',
    location: 'Aula Graha Siswa SMKN 3',
    caption: 'Pengurus OSIS dan perwakilan MPK berdiskusi menyusun program kerja tahunan berbasis aspirasi seluruh peserta didik.',
  },

  // Praktik Kejuruan
  {
    id: 'g5',
    title: 'Praktik Seni Memasak Kontinental Jurusan Kuliner / Tata Boga',
    category: 'Praktik Kejuruan',
    image: 'https://images.unsplash.com/photo-1556910103-1c02745aae4d?auto=format&fit=crop&w=800&q=80',
    date: '20 Oktober 2024',
    location: 'Dapur Produksi Kitchen 1',
    caption: 'Siswa kelas XII Kuliner mempraktikkan teknik sauteing dan plating makanan western berstandar hotel bintang lima.',
  },
  {
    id: 'g6',
    title: 'Pelatihan Barista & Seni Meracik Kopi Espresso Siswa Kuliner',
    category: 'Praktik Kejuruan',
    image: 'https://images.unsplash.com/photo-1501339847302-ac426a4a7cbb?auto=format&fit=crop&w=800&q=80',
    date: '12 Oktober 2024',
    location: 'Teaching Factory Coffee Shop',
    caption: 'Eksplorasi teknik latte art dan ekstraksi biji kopi lokal Sulawesi Tenggara oleh barista muda SMKN 3 Kendari.',
  },
  {
    id: 'g7',
    title: 'Simulasi Front Desk & Pelayanan Tamu Jurusan Perhotelan',
    category: 'Praktik Kejuruan',
    image: 'https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=800&q=80',
    date: '05 Oktober 2024',
    location: 'Edotel SMKN 3 Kendari',
    caption: 'Latihan check-in tamu VIP dengan komunikasi Bahasa Inggris santun dan sistem reservasi hotel terkomputerisasi.',
  },
  {
    id: 'g8',
    title: 'Splicing Fiber Optic & Konfigurasi Server Jurusan TJKT',
    category: 'Praktik Kejuruan',
    image: 'https://images.unsplash.com/photo-1544197150-b99a580bb7a8?auto=format&fit=crop&w=800&q=80',
    date: '28 September 2024',
    location: 'Lab Jaringan Komputer & Fiber Optic',
    caption: 'Teknisi muda jurusan TJKT melakukan penyambungan serat optik presisi dan uji koneksi router MikroTik.',
  },
  {
    id: 'g9',
    title: 'Gelar Karya Busana Tenun Daerah - Siswi Tata Busana',
    category: 'Praktik Kejuruan',
    image: 'https://images.unsplash.com/photo-1509631179647-0177331693ae?auto=format&fit=crop&w=800&q=80',
    date: '19 September 2024',
    location: 'Catwalk Workshop Busana',
    caption: 'Koleksi busana pesta berbahan dasar tenun Tolaki Kendari karya siswi Tata Busana yang memadukan etnik dan modern.',
  },
  {
    id: 'g10',
    title: 'Praktik Tata Rias Pengantin Nusantara - Jurusan Tata Kecantikan',
    category: 'Praktik Kejuruan',
    image: 'https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?auto=format&fit=crop&w=800&q=80',
    date: '10 September 2024',
    location: 'Beauty Care Studio SMKN 3',
    caption: 'Keterampilan tata rias wajah dan sanggul adat pernikahan tradisional dengan teknik contouring dan kosmetik aman.',
  },

  // Prestasi & LKS
  {
    id: 'g11',
    title: 'Penerimaan Piala Juara 1 LKS Nasional Bidang Kuliner',
    category: 'Prestasi & LKS',
    image: 'https://images.unsplash.com/photo-1578269174936-2709b6aeb913?auto=format&fit=crop&w=800&q=80',
    date: '24 Agustus 2024',
    location: 'Jakarta International Expo',
    caption: 'Tim SMKN 3 Kendari mengibarkan bendera Sulawesi Tenggara di podium tertinggi Lomba Kompetensi Siswa Nasional.',
  },
  {
    id: 'g12',
    title: 'Penghargaan Medali Perak LKS IT Network Systems',
    category: 'Prestasi & LKS',
    image: 'https://images.unsplash.com/photo-1531482615713-2afd69097998?auto=format&fit=crop&w=800&q=80',
    date: '24 Agustus 2024',
    location: 'Jakarta International Expo',
    caption: 'Peraih medali perak bidang IT Network Administrator bersama pembimbing usai kompetisi ketat 3 hari berturut-turut.',
  },

  // Fasilitas & Lingkungan
  {
    id: 'g13',
    title: 'Gedung Edotel & Mini Hotel Praktik SMKN 3 Kendari',
    category: 'Fasilitas & Lingkungan',
    image: 'https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&w=800&q=80',
    date: '01 Agustus 2024',
    location: 'Area Kampus SMKN 3 Kendari',
    caption: 'Fasilitas akomodasi hotel training berstandar bintang 3 untuk sarana belajar nyata siswa dan kunjungan kedinasan.',
  },
  {
    id: 'g14',
    title: 'Laboratorium Komputer & Server Center Berstandar Cisco',
    category: 'Fasilitas & Lingkungan',
    image: 'https://images.unsplash.com/photo-1562774053-701939374585?auto=format&fit=crop&w=800&q=80',
    date: '15 Juli 2024',
    location: 'Gedung IT Lantai 2',
    caption: '60 PC spesifikasi tinggi terhubung koneksi gigabit untuk pembelajaran sertifikasi jaringan internasional.',
  },
  {
    id: 'g15',
    title: 'Upacara Wisuda & Pelepasan 350 Lulusan Angkatan 2024',
    category: 'Upacara & Seremoni',
    image: 'https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&w=800&q=80',
    date: '20 Mei 2024',
    location: 'Hotel Claro Kendari',
    caption: 'Momen penuh haru dan kebanggaan pelepasan wisudawan-wisudawati siap kerja dan siap berwirausaha.',
  },
  {
    id: 'g16',
    title: 'Upacara Bendera Hari Kemerdekaan RI di Lapangan Sekolah',
    category: 'Upacara & Seremoni',
    image: 'https://images.unsplash.com/photo-1464746133101-a2c3f88e0dd9?auto=format&fit=crop&w=800&q=80',
    date: '17 Agustus 2024',
    location: 'Lapangan Utama SMKN 3',
    caption: 'Pengibaran sang merah putih dengan khidmat dipimpin oleh barisan paskibra dan diiringi paduan suara sekolah.',
  },
];

export default async function GaleriPage() {
  const dbItems = await safeLoad();
  const gasItems: GaleriItem[] = dbItems.map((e) => ({
    id: e.id,
    title: e.title,
    category: 'Praktik Kejuruan',
    image: e.image || 'https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&w=800&q=80',
    date: e.date || 'Terbaru',
    caption: e.body,
  }));

  const items = gasItems.length > 0 ? [...gasItems, ...staticGaleri] : staticGaleri;

  return (
    <>
      <section className="page-hero">
        <div className="container page-hero-content">
          <div className="breadcrumb">
            <Link href="/">Beranda</Link>
            <span className="breadcrumb-sep">›</span>
            <span>Galeri Foto</span>
          </div>
          <h1>Galeri Foto SMKN 3 Kendari</h1>
          <p>Potret kehidupan kampus, fasilitas berstandar industri, aksi ekskul (OSIS, Pramuka, PMR, LKBB), dan momen prestasi siswa.</p>
        </div>
      </section>

      {/* Info Stats */}
      <section style={{ background: 'var(--dark)', padding: '2.5rem 0' }}>
        <div className="container">
          <div className="stats-grid">
            {[
              { icon: '📸', num: '500+', label: 'Foto Dokumentasi Kegiatan' },
              { icon: '🏨', num: '5', label: 'Jurusan Berstandar Industri' },
              { icon: '🎖️', num: '100%', label: 'Karya Asli Siswa & Guru' },
              { icon: '🌟', num: '2024', label: 'Arsip Terbaru Terupdate' },
            ].map((s) => (
              <div key={s.label} className="stat-item">
                <div className="stat-icon">{s.icon}</div>
                <div className="stat-number">{s.num}</div>
                <div className="stat-label">{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery Grid with Lightbox */}
      <section className="section">
        <div className="container">
          <div className="section-header">
            <div className="badge">Dokumentasi Terkini</div>
            <h2>Jelajahi Momen Terbaik</h2>
            <p>Klik pada foto mana saja untuk memperbesar (lightbox) dan membaca keterangan lengkap kegiatan.</p>
          </div>
          <GaleriGrid items={items} showFilter={true} />
        </div>
      </section>

      {/* Upload info / CTA */}
      <section className="section bg-light">
        <div className="container">
          <div className="alert alert-info" style={{ maxWidth: '700px', margin: '0 auto', padding: '1.75rem' }}>
            <span style={{ fontSize: '2.5rem' }}>📷</span>
            <div>
              <strong style={{ fontSize: '1.1rem', color: 'var(--primary)' }}>Ingin Membagikan Foto Kegiatan Sekolah?</strong>
              <p style={{ marginTop: '0.4rem', fontSize: '0.9rem', color: 'var(--text)' }}>
                Siswa dan alumni dapat mengirimkan foto dokumentasi kegiatan ekskul, praktik kejuruan, atau prestasi ke redaksi humas SMKN 3 Kendari melalui panel admin atau email sekolah.
              </p>
              <div style={{ marginTop: '1rem', display: 'flex', gap: '0.75rem', flexWrap: 'wrap' }}>
                <Link href="/video" className="btn btn-teal btn-sm">
                  ▶ Lihat Galeri Video
                </Link>
                <Link href="/ekskul" className="btn btn-outline btn-sm" style={{ color: 'var(--primary)', borderColor: 'var(--primary)' }}>
                  ⚡ Ekstrakulikuler
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
