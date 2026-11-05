import type { Metadata } from 'next';
import Link from 'next/link';
import { loadSectionSafe } from '../../lib/data';
import PrestasiClient, { type PrestasiItem } from './PrestasiClient';

export const dynamic = 'force-dynamic';
export const revalidate = 0;

export const metadata: Metadata = {
  title: 'Galeri Prestasi & Hall of Fame',
  description: 'Pencapaian dan kejuaraan siswa-siswi SMKN 3 Kendari di ajang LKS Nasional, Regional, dan Provinsi.',
};

const staticPrestasi: PrestasiItem[] = [
  {
    id: '1',
    medal: '🥇',
    title: 'Juara 1 Lomba Kompetensi Siswa (LKS) Nasional Bidang Culinary Arts',
    level: 'Nasional',
    year: '2024',
    category: 'Akademik & Vokasi',
    body: 'Meraih medali emas LKS SMK tingkat Nasional di Jakarta dengan menampilkan kreasi hidangan nusantara fusion berstandar internasional dan teknik plating berkelas tinggi.',
    image: 'https://images.unsplash.com/photo-1556910103-1c02745aae4d?auto=format&fit=crop&w=800&q=80',
    student: 'Ahmad Raihan & Tim Culinary',
    jurusan: 'Kuliner / Tata Boga',
    type: 'gold',
  },
  {
    id: '2',
    medal: '🥈',
    title: 'Juara 2 LKS Nasional Bidang IT Network System Administration',
    level: 'Nasional',
    year: '2024',
    category: 'Akademik & Vokasi',
    body: 'Meraih medali perak kompetisi IT bergengsi nasional dalam pengujian konfigurasi routing BGP/OSPF, keamanan siber, dan arsitektur server Linux skala enterprise.',
    image: 'https://images.unsplash.com/photo-1544197150-b99a580bb7a8?auto=format&fit=crop&w=800&q=80',
    student: 'Rian Dwi Saputra',
    jurusan: 'TJKT',
    type: 'silver',
  },
  {
    id: '3',
    medal: '🥇',
    title: 'Juara 1 LKS Provinsi Bidang Hairdressing & Beauty Therapy',
    level: 'Provinsi',
    year: '2024',
    category: 'Akademik & Vokasi',
    body: 'Menjuarai LKS SMK tingkat Provinsi Sulawesi Tenggara bidang tata rias wajah dan penataan rambut artistik dengan nilai tertinggi dari dewan juri industri.',
    image: 'https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?auto=format&fit=crop&w=800&q=80',
    student: 'Putri Maharani',
    jurusan: 'Tata Kecantikan',
    type: 'gold',
  },
  {
    id: '4',
    medal: '🏆',
    title: 'Sekolah Menengah Kejuruan Berprestasi Terbaik Sulawesi Tenggara',
    level: 'Provinsi',
    year: '2024',
    category: 'Kelembagaan Sekolah',
    body: 'Dianugerahi penghargaan Sekolah Vokasi Unggulan oleh Dinas Pendidikan & Kebudayaan Provinsi atas komitmen mutu pembelajaran, penyerapan lulusan 92%, dan link-and-match industri.',
    image: 'https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&w=800&q=80',
    student: 'Civitas Akademika SMKN 3',
    jurusan: 'Seluruh Jurusan',
    type: 'gold',
  },
  {
    id: '5',
    medal: '🥇',
    title: 'Juara 1 Lomba Formasi Variasi LKBB Pelajar Tingkat Regional',
    level: 'Regional',
    year: '2024',
    category: 'Ekskul & Karakter',
    body: 'Pasukan LKBB Satria SMKN 3 Kendari sukses meraih podium juara pertama dan Danton Terbaik dalam kompetisi baris-berbaris variasi kreasi se-Sulawesi.',
    image: 'https://images.unsplash.com/photo-1517457373958-b7bdd4587205?auto=format&fit=crop&w=800&q=80',
    student: 'Tim LKBB Satria SMKN 3',
    jurusan: 'Ekskul LKBB / Paskibra',
    type: 'gold',
  },
  {
    id: '6',
    medal: '🥇',
    title: 'Juara 1 Fashion Show Busana Adat Modifikasi Tingkat Kota Kendari',
    level: 'Kota',
    year: '2024',
    category: 'Seni & Budaya',
    body: 'Karya gaun pesta berbahan tenun Tolaki karya siswi Tata Busana memikat juri dan memenangkan juara utama dalam Festival Budaya Sulawesi Tenggara.',
    image: 'https://images.unsplash.com/photo-1509631179647-0177331693ae?auto=format&fit=crop&w=800&q=80',
    student: 'Dewi Lestari & Tim Busana',
    jurusan: 'Tata Busana',
    type: 'gold',
  },
  {
    id: '7',
    medal: '🥉',
    title: 'Juara 3 LKS Nasional Bidang Restaurant Service & Table Setting',
    level: 'Nasional',
    year: '2023',
    category: 'Akademik & Vokasi',
    body: 'Meraih medali perunggu nasional dalam keterampilan etiket pelayanan jamuan makan malam resmi, wine opening, dan flambe dessert di hadapan juri hospitality internasional.',
    image: 'https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=800&q=80',
    student: 'Fajar Nugraha',
    jurusan: 'Perhotelan',
    type: 'bronze',
  },
  {
    id: '8',
    medal: '🥈',
    title: 'Runner Up Barista Championship Regional Sulawesi',
    level: 'Regional',
    year: '2023',
    category: 'Akademik & Vokasi',
    body: 'Siswa jurusan Kuliner bersaing dengan barista profesional umum di Makassar dan berhasil meraih Juara 2 dalam signature drink kopi rempah nusantara.',
    image: 'https://images.unsplash.com/photo-1501339847302-ac426a4a7cbb?auto=format&fit=crop&w=800&q=80',
    student: 'Gilang Ramadhan',
    jurusan: 'Kuliner',
    type: 'silver',
  },
];

export default async function PrestasiPage() {
  const dbItems = await loadSectionSafe('Prestasi');

  // Map Google Sheets data into PrestasiItem format
  const dynamicItems: PrestasiItem[] = dbItems.map((e, index) => ({
    id: e.id || `gas-${index}`,
    medal: '🏆',
    title: e.title,
    level: 'Nasional',
    year: e.date || 'Terbaru',
    category: 'Akademik & Vokasi',
    body: e.body,
    image: e.image || 'https://images.unsplash.com/photo-1578269174936-2709b6aeb913?auto=format&fit=crop&w=800&q=80',
    student: 'Siswa Berprestasi SMKN 3',
    jurusan: 'SMKN 3 Kendari',
    type: 'gold',
  }));

  const allItems = dynamicItems.length > 0 ? [...dynamicItems, ...staticPrestasi] : staticPrestasi;

  return (
    <>
      <section className="page-hero">
        <div className="container page-hero-content">
          <div className="breadcrumb">
            <Link href="/">Beranda</Link>
            <span className="breadcrumb-sep">›</span>
            <span>Galeri Prestasi</span>
          </div>
          <h1>Galeri Prestasi & Penghargaan</h1>
          <p>Deretan kejuaraan bergengsi tingkat Kota, Provinsi, Regional, dan Nasional yang ditorehkan oleh siswa-siswi dan kelembagaan SMKN 3 Kendari.</p>
        </div>
      </section>

      {/* Ringkasan Prestasi Stats */}
      <section style={{ background: 'var(--dark)', padding: '3rem 0' }}>
        <div className="container">
          <div className="stats-grid">
            {[
              { icon: '🥇', num: '28+', label: 'Medali Emas & Juara 1' },
              { icon: '🥈', num: '19+', label: 'Medali Perak & Juara 2' },
              { icon: '🇮🇩', num: '12', label: 'Prestasi Tingkat Nasional' },
              { icon: '🏛️', num: 'Akreditasi A', label: 'Predikat BAN-S/M' },
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

      {/* Interactive Prestasi Client Component */}
      <PrestasiClient initialItems={allItems} />

      {/* Pembinaan Prestasi Banner */}
      <section className="section bg-light">
        <div className="container" style={{ maxWidth: '800px' }}>
          <div className="vm-card misi">
            <div style={{ fontSize: '2.5rem', marginBottom: '1rem' }}>🌟</div>
            <h3 style={{ color: 'var(--accent-dark)', marginBottom: '1rem', fontSize: '1.3rem' }}>
              Program Pembinaan Prestasi Siswa
            </h3>
            <p style={{ color: 'var(--text)', fontSize: '0.95rem', lineHeight: '1.8', marginBottom: '1rem' }}>
              SMKN 3 Kendari memiliki pusat pelatihan khusus (Center of Excellence) untuk mempersiapkan siswa-siswi terbaik menghadapi LKS SMK, perlombaan seni budaya, olimpiade vokasi, dan kejuaraan baris-berbaris maupun kepramukaan dengan bimbingan intensif dari guru ahli dan praktisi industri.
            </p>
            <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
              <Link href="/galeri" className="btn btn-teal">
                📸 Lihat Galeri Foto
              </Link>
              <Link href="/video" className="btn btn-outline" style={{ color: 'var(--primary)', borderColor: 'var(--primary)' }}>
                ▶ Tonton Video Dokumentasi
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
