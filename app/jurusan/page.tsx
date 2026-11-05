import type { Metadata } from 'next';
import Link from 'next/link';
import JurusanCard, { type JurusanData } from '../../components/JurusanCard';

export const metadata: Metadata = {
  title: 'Program Keahlian (5 Jurusan Unggulan)',
  description: '5 Program Keahlian Unggulan SMKN 3 Kendari: Perhotelan, Kuliner (Tata Boga), TJKT (Teknik Jaringan Komputer), Tata Busana, dan Tata Kecantikan.',
};

export const jurusanList: JurusanData[] = [
  {
    slug: 'hotel',
    name: 'Perhotelan',
    fullName: 'Akomodasi Perhotelan & Hospitality',
    icon: '🏨',
    bgClass: 'bg-hotel',
    image: 'https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=600&q=80',
    description: 'Mempersiapkan siswa menjadi tenaga profesional di industri perhotelan dan pariwisata bertaraf internasional dengan kompetensi front office, housekeeping, dan food & beverage service.',
    skills: ['Front Office PMS', 'Housekeeping', 'F&B Service', 'Bahasa Inggris Vokasi', 'Etiket Hospitality'],
    tagColor: '#1565C0',
  },
  {
    slug: 'kuliner',
    name: 'Kuliner',
    fullName: 'Kuliner / Tata Boga',
    icon: '🍳',
    bgClass: 'bg-kuliner',
    image: 'https://images.unsplash.com/photo-1556910103-1c02745aae4d?auto=format&fit=crop&w=600&q=80',
    description: 'Mencetak ahli kuliner dan wirausahawan di bidang pengolahan makanan, pastry & bakery, dan bisnis kuliner modern yang siap bersaing di industri food & beverage internasional.',
    skills: ['Indonesian Cuisine', 'Pastry & Bakery', 'Food Plating', 'Barista Kopi', 'HACCP Sanitasi'],
    tagColor: '#E65100',
  },
  {
    slug: 'tjkt',
    name: 'TJKT',
    fullName: 'Teknik Jaringan Komputer & Telekomunikasi',
    icon: '💻',
    bgClass: 'bg-tjkt',
    image: 'https://images.unsplash.com/photo-1544197150-b99a580bb7a8?auto=format&fit=crop&w=600&q=80',
    description: 'Menghasilkan teknisi jaringan komputer dan telekomunikasi yang kompeten di era digital dan industri 4.0 dengan kemampuan konfigurasi, keamanan, dan pemeliharaan jaringan cloud.',
    skills: ['Cisco Routing', 'MikroTik Network', 'Cybersecurity', 'Cloud Server Linux', 'Fiber Splicing'],
    tagColor: '#1B5E20',
  },
  {
    slug: 'busana',
    name: 'Tata Busana',
    fullName: 'Tata Busana & Fashion Design',
    icon: '👗',
    bgClass: 'bg-busana',
    image: 'https://images.unsplash.com/photo-1509631179647-0177331693ae?auto=format&fit=crop&w=600&q=80',
    description: 'Mendidik desainer busana dan penjahit profesional yang mampu berkarya di industri fashion lokal maupun internasional dengan menguasai desain, pola, dan konstruksi busana modifikasi tenun.',
    skills: ['Fashion Sketching', 'Pattern Making', 'Jahit Industri', 'Fashion Show Catwalk', 'Bisnis Butik'],
    tagColor: '#880E4F',
  },
  {
    slug: 'kecantikan',
    name: 'Tata Kecantikan',
    fullName: 'Tata Kecantikan Kulit & Rambut',
    icon: '💄',
    bgClass: 'bg-kecantikan',
    image: 'https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?auto=format&fit=crop&w=600&q=80',
    description: 'Menyiapkan beauty therapist dan penata rambut profesional yang siap berkarier di salon, spa, klinik kecantikan dengan kemampuan merawat, merias, dan menata bersertifikat BNSP.',
    skills: ['MUA Pengantin & Pesta', 'Facial Skin Care', 'Hair Cutting & Styling', 'Body Spa', 'Nail Art'],
    tagColor: '#6A1B9A',
  },
];

export default function JurusanPage() {
  return (
    <>
      <section className="page-hero">
        <div className="container page-hero-content">
          <div className="breadcrumb">
            <Link href="/">Beranda</Link>
            <span className="breadcrumb-sep">›</span>
            <span>Program Keahlian</span>
          </div>
          <h1>5 Program Keahlian Unggulan</h1>
          <p>SMKN 3 Kendari menyelenggarakan 5 jurusan vokasi berstandar industri dengan fasilitas laboratorium modern, teaching factory, dan sertifikasi BNSP.</p>
        </div>
      </section>

      {/* Info Stats */}
      <section style={{ background: 'var(--dark)', padding: '2.5rem 0' }}>
        <div className="container">
          <div className="stats-grid">
            {[
              { icon: '🏨', num: '5', label: 'Program Keahlian Terakreditasi A' },
              { icon: '👨‍🎓', num: '1.250+', label: 'Peserta Didik Aktif' },
              { icon: '🤝', num: '75+', label: 'Mitra Industri Prakerin' },
              { icon: '🏆', num: '100%', label: 'Uji Kompetensi Kejuruan (UKK)' },
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

      <section className="section">
        <div className="container">
          <div className="section-header">
            <div className="badge">Daftar Jurusan</div>
            <h2>Pilih Minat & Bakat Masa Depanmu</h2>
            <p>Setiap jurusan dirancang untuk menghasilkan lulusan yang siap bekerja, melanjutkan studi, atau berwirausaha mandiri (BMW).</p>
          </div>
          <div className="grid-3">
            {jurusanList.map((j) => (
              <JurusanCard key={j.slug} jurusan={j} />
            ))}
          </div>
        </div>
      </section>

      {/* Alur PPDB */}
      <section className="section bg-light">
        <div className="container">
          <div className="section-header">
            <div className="badge">Informasi PPDB</div>
            <h2>Alur Pendaftaran Peserta Didik Baru</h2>
            <p>Tahapan mudah bergabung menjadi bagian dari keluarga besar SMKN 3 Kendari.</p>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '1.5rem' }}>
            {[
              { step: '01', title: 'Pendaftaran Online', desc: 'Daftar melalui portal resmi PPDB Dinas Pendidikan Kota Kendari / Sultra.' },
              { step: '02', title: 'Pilih Jurusan', desc: 'Tentukan pilihan pertama dan kedua dari 5 jurusan favoritmu di SMKN 3.' },
              { step: '03', title: 'Unggah Berkas', desc: 'Upload KK, Akta Kelahiran, Rapor SMP, dan sertifikat prestasi (jika ada).' },
              { step: '04', title: 'Tes Minat & Bakat', desc: 'Mengikuti asesmen minat bakat dan pemeriksaan kesehatan dasar.' },
              { step: '05', title: 'Pengumuman Resmi', desc: 'Lihat status kelulusan di portal PPDB dan papan pengumuman sekolah.' },
              { step: '06', title: 'Daftar Ulang & MPLS', desc: 'Konfirmasi pendaftaran ulang dan ikuti Masa Pengenalan Lingkungan Sekolah.' },
            ].map((s) => (
              <div key={s.step} className="card" style={{ padding: '1.75rem', textAlign: 'center' }}>
                <div style={{
                  width: '48px', height: '48px',
                  background: 'linear-gradient(135deg, var(--primary), var(--primary-light))',
                  color: 'white', borderRadius: '50%',
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  fontWeight: 800, fontSize: '0.9rem',
                  margin: '0 auto 1rem',
                }}>
                  {s.step}
                </div>
                <h3 style={{ fontSize: '1rem', marginBottom: '0.5rem', color: 'var(--dark)' }}>{s.title}</h3>
                <p style={{ fontSize: '0.85rem', color: 'var(--text-muted)' }}>{s.desc}</p>
              </div>
            ))}
          </div>
          <div className="text-center mt-4">
            <a href="tel:+62401123456" className="btn btn-teal btn-lg">
              📞 Hubungi Panitia PPDB SMKN 3 Kendari
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
