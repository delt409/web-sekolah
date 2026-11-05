import type { Metadata } from 'next';
import Link from 'next/link';
import { loadSectionSafe } from '../../lib/data';
import EkskulClient, { type EkskulItem } from './EkskulClient';

export const dynamic = 'force-dynamic';
export const revalidate = 0;

export const metadata: Metadata = {
  title: 'Ekstrakulikuler & Organisasi Siswa',
  description: '12+ Pilihan ekstrakulikuler SMKN 3 Kendari termasuk OSIS, Pramuka, PMR Wira, dan LKBB Paskibra.',
};

const staticEkskul: EkskulItem[] = [
  // 4 Utama yang diminta khusus oleh user:
  {
    id: 'osis',
    name: 'OSIS & MPK',
    category: 'Organisasi Kepemimpinan',
    shortDesc: 'Wadah induk organisasi kepemimpinan siswa SMKN 3 Kendari penggerak kegiatan sekolah.',
    longDesc: 'Organisasi Siswa Intra Sekolah (OSIS) bersama Majelis Perwakilan Kelas (MPK) merupakan induk organisasi kesiswaan yang bertugas memfasilitasi aspirasi, mengembangkan kepemimpinan, kepribadian, serta menyelenggarakan program-program besar sekolah seperti MPLS, Class Meeting, Peringatan Hari Besar Nasional, dan Bakti Sosial.',
    icon: '🏛️',
    image: 'https://images.unsplash.com/photo-1529156069898-49953e39b3ac?auto=format&fit=crop&w=800&q=80',
    jadwal: 'Rapat Pleno: Setiap Jumat 14:00',
    lokasi: 'Ruang Sekretariat OSIS SMKN 3',
    anggota: '55 Pengurus Terpilih',
    pembina: 'Muh. Irfan, S.Pd (Wakasek Kesiswaan)',
    ketua: 'Muhammad Fathir (Kelas XI TJKT)',
    prestasi: [
      'Penyelenggara Terbaik Peringatan HUT RI Tingkat Sekolah 2024',
      'Inisiator Program Gerakan SMKN 3 Peduli Lingkungan & Bebas Sampah Plastik',
      'Delegasi Forum OSIS Sulawesi Tenggara 2024',
    ],
    featured: true,
    accentColor: '#1565C0',
  },
  {
    id: 'pramuka',
    name: 'Gerakan Pramuka (Gudep & Ambalan)',
    category: 'Kepanduan',
    shortDesc: 'Gugus Depan Pramuka Penegak aktif dalam perkemahan, survival alam, dan bakti sosial.',
    longDesc: 'Gerakan Pramuka Gugus Depan SMKN 3 Kendari (Ambalan Anoa Mandiri) mendidik generasi muda agar berwatak luhur, berkarakter tangguh, cinta alam, dan memiliki keterampilan kepanduan tingkat Penegak Bantara & Laksana. Rutin mengadakan perkemahan sabtu-minggu (Persami), pengembaraan rimba, serta bakti sosial kemasyarakatan.',
    icon: '⚜️',
    image: 'https://images.unsplash.com/photo-1504280390367-361c6d9f38f4?auto=format&fit=crop&w=800&q=80',
    jadwal: 'Latihan Rutin: Jumat 14:30 - 17:00',
    lokasi: 'Lapangan Utama & Sanggar Pramuka',
    anggota: '120+ Anggota Aktif',
    pembina: 'Wahidin, S.Pd & Rina Astuti, S.Pd',
    ketua: 'Pradana: Dimas Prasetyo (Kelas XI Hotel)',
    prestasi: [
      'Juara 1 Lomba Pionering & Tali Temali Kemah Budaya Sultra 2024',
      'Juara Umum Kemah Bakti Penegak Se-Kota Kendari 2023',
      'Pramuka Garuda Tingkat Kwartir Cabang Kota Kendari 2024',
    ],
    featured: true,
    accentColor: '#2E7D32',
  },
  {
    id: 'pmr',
    name: 'PMR Wira (Palang Merah Remaja)',
    category: 'Kemanusiaan & Kesehatan',
    shortDesc: 'Unit pertolongan pertama pada kecelakaan, donor darah, dan relawan kemanusiaan.',
    longDesc: 'Palang Merah Remaja (PMR) Unit Wira SMKN 3 Kendari adalah wadah pembinaan remaja di bidang pertolongan pertama, penanganan cedera medis darurat, kepalangmerahan, donor darah sukarela, dan kesiapsiagaan bencana. Berada di bawah naungan PMI Cabang Kota Kendari dan selalu siaga dalam setiap upacara serta kegiatan besar sekolah.',
    icon: '🏥',
    image: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&w=800&q=80',
    jadwal: 'Latihan Rutin: Sabtu 08:00 - 11:00',
    lokasi: 'Ruang UKS & Lapangan Upacara',
    anggota: '65+ Relawan Muda',
    pembina: 'Aisyah, S.Pd & Tim Medis PMI',
    ketua: 'Komandan: Nurul Hidayah (Kelas XI Busana)',
    prestasi: [
      'Juara 1 Pertolongan Pertama (PP) Jumbara PMR Kota Kendari 2024',
      'Penyelenggara Sukses Aksi Donor Darah 150 Kantong 2024',
      'Juara 2 Lomba Tandu Cepat dan Pasang Tenda Darurat 2023',
    ],
    featured: true,
    accentColor: '#C62828',
  },
  {
    id: 'lkbb',
    name: 'LKBB & Paskibra (Pasukan Pengibar Bendera)',
    category: 'Kedisiplinan & Baris Berbaris',
    shortDesc: 'Pasukan elit LKBB dan pengibar bendera pusaka dengan formasi disiplin tinggi.',
    longDesc: 'Latihan Keterampilan Baris Berbaris (LKBB) Satria Paskibra SMKN 3 Kendari melatih ketegasan, kedisiplinan militer halus, kekompakan barisan, serta postur fisik yang prima. Anggota dilatih secara profesional untuk bertugas pada upacara kenegaraan, seleksi Paskibraka Kota/Provinsi, dan ajang lomba LKBB variasi tingkat regional.',
    icon: '🎖️',
    image: 'https://images.unsplash.com/photo-1517457373958-b7bdd4587205?auto=format&fit=crop&w=800&q=80',
    jadwal: 'Latihan: Selasa & Kamis 15:30 - 17:30',
    lokasi: 'Lapangan Upacara SMKN 3 Kendari',
    anggota: '48 Pasukan Inti',
    pembina: 'Kapten (Purn) Darmawan & Bpk. Hendra, S.Pd',
    ketua: 'Danton: Rizky Firmansyah (Kelas XI Kuliner)',
    prestasi: [
      'Juara 1 Formasi Terbaik Lomba LKBB Pelajar Se-Sulawesi Tenggara 2024',
      'Lolos 4 Siswa Menjadi Paskibraka Kota Kendari Tingkat Provinsi 2024',
      'Juara Umum Danton Terbaik Lomba Baris-Berbaris Kreasi 2023',
    ],
    featured: true,
    accentColor: '#E65100',
  },

  // Ekskul Lainnya:
  {
    id: 'futsal',
    name: 'Futsal & Sepak Bola',
    category: 'Olahraga',
    shortDesc: 'Tim futsal kebanggaan sekolah yang rutin menjuarai turnamen antar pelajar.',
    longDesc: 'Ekskul futsal membina bakat sepak bola dan futsal siswa dengan pelatih berlisensi. Mengembangkan strategi taktis, kerjasama tim, daya tahan fisik, serta mental sportif di lapangan kompetisi.',
    icon: '⚽',
    image: 'https://images.unsplash.com/photo-1574629810360-7efbbe195018?auto=format&fit=crop&w=800&q=80',
    jadwal: 'Senin & Kamis 15:30',
    lokasi: 'Lapangan Olahraga Serbaguna',
    anggota: '45 Anggota',
    pembina: 'Bpk. Ruslan, S.Pd',
    ketua: 'Alamsyah (Kelas XI TJKT)',
    prestasi: ['Juara 2 Futsal Cup Pelajar Kendari 2024', 'Top Scorer Turnamen Walikota Cup 2023'],
    accentColor: '#2E7D32',
  },
  {
    id: 'voli',
    name: 'Bola Voli Putra & Putri',
    category: 'Olahraga',
    shortDesc: 'Klub bola voli dengan atlet-atlet bertalenta di kompetisi tingkat daerah.',
    longDesc: 'Pelatihan rutin smash, blocking, passing, dan servis presisi untuk tim putra maupun putri. Melahirkan atlet-atlet yang siap mewakili sekolah pada POPDA dan kejuaraan voli daerah.',
    icon: '🏐',
    image: 'https://images.unsplash.com/photo-1612872087720-bb876e2e67d1?auto=format&fit=crop&w=800&q=80',
    jadwal: 'Selasa & Sabtu 15:30',
    lokasi: 'Lapangan Voli Outdoor',
    anggota: '36 Anggota',
    pembina: 'Ibu Sumarni, S.Pd',
    ketua: 'Siti Rahmawati (Kelas XI Kecantikan)',
    prestasi: ['Juara 1 Voli Putri Kejuaraan Pelajar Sultra 2023'],
    accentColor: '#1565C0',
  },
  {
    id: 'silat',
    name: 'Pencak Silat',
    category: 'Olahraga & Seni Budaya',
    shortDesc: 'Seni bela diri warisan leluhur Indonesia dengan penempaan jurus dan mental ksatria.',
    longDesc: 'Mempelajari jurus tunggal, ganda, dan tanding silat prestasi dengan penanaman nilai budi pekerti luhur, ketenangan batin, serta pertahanan diri yang tangkas.',
    icon: '🥋',
    image: 'https://images.unsplash.com/photo-1555597673-b21d5c935865?auto=format&fit=crop&w=800&q=80',
    jadwal: 'Rabu & Sabtu 16:00',
    lokasi: 'Aula Serbaguna SMKN 3',
    anggota: '28 Anggota',
    pembina: 'Bpk. Ilham Syah (Pendekar Silat)',
    ketua: 'Bagus Setiawan (Kelas X Hotel)',
    prestasi: ['Medali Emas Kejurda Pencak Silat Pelajar 2024'],
    accentColor: '#880E4F',
  },
  {
    id: 'tari',
    name: 'Seni Tari Tradisional & Kreasi',
    category: 'Seni & Budaya',
    shortDesc: 'Sanggar tari pelestari kesenian tari daerah Sulawesi Tenggara dan tari kreasi Nusantara.',
    longDesc: 'Mempromosikan tarian tradisional seperti Tari Lulo, Tari Mondotambe, dan koreografi kreasi baru untuk pembukaan acara kenegaraan, penyambutan tamu terhormat, serta festival seni.',
    icon: '💃',
    image: 'https://images.unsplash.com/photo-1508700115892-45ecd05ae2ad?auto=format&fit=crop&w=800&q=80',
    jadwal: 'Rabu 14:00 - 16:30',
    lokasi: 'Ruang Teater & Sanggar Tari',
    anggota: '32 Anggota',
    pembina: 'Ibu Nurhayati, S.Pd',
    ketua: 'Anisa Maharani (Kelas XI Busana)',
    prestasi: ['Penyaji Tari Terbaik Festival Seni Pelajar Nusantara 2024'],
    accentColor: '#E65100',
  },
  {
    id: 'itclub',
    name: 'IT & Cyber Coding Club',
    category: 'Teknologi & Sains',
    shortDesc: 'Komunitas coder muda, web development, robotika, dan jaringan komputer.',
    longDesc: 'Ekskul bagi pecinta dunia digital, pemrograman web, konfigurasi MikroTik, IoT, dan perakitan PC yang mendukung kompetensi LKS IT Network dan Web Technologies.',
    icon: '💻',
    image: 'https://images.unsplash.com/photo-1517694712202-14dd9538aa97?auto=format&fit=crop&w=800&q=80',
    jadwal: 'Sabtu 09:00 - 12:00',
    lokasi: 'Laboratorium Komputer 1',
    anggota: '35 Anggota',
    pembina: 'Arif Rahman, S.Kom',
    ketua: 'Fikri Haikal (Kelas XI TJKT)',
    prestasi: ['Juara 1 Web Design Pelajar Sultra 2024'],
    accentColor: '#00695C',
  },
];

export default async function EkskulPage() {
  const dbItems = await loadSectionSafe('Ekskul');

  // Convert Google Sheets data into EkskulItem format
  const dynamicItems: EkskulItem[] = dbItems.map((e, idx) => ({
    id: e.id || `gas-ekskul-${idx}`,
    name: e.title,
    category: 'Organisasi Siswa',
    shortDesc: e.body.slice(0, 120),
    longDesc: e.body,
    icon: '⚡',
    image: e.image || 'https://images.unsplash.com/photo-1529156069898-49953e39b3ac?auto=format&fit=crop&w=800&q=80',
    jadwal: e.date || 'Setiap Minggu',
    lokasi: 'SMKN 3 Kendari',
    anggota: '30+ Anggota',
    pembina: 'Pembina Kesiswaan',
    ketua: 'Ketua Ekskul',
    prestasi: ['Aktif Berpartisipasi di Kegiatan Sekolah'],
    featured: true,
    accentColor: '#0d7377',
  }));

  const allList = dynamicItems.length > 0 ? [...dynamicItems, ...staticEkskul] : staticEkskul;

  return (
    <>
      {/* Page Hero */}
      <section className="page-hero">
        <div className="container page-hero-content">
          <div className="breadcrumb">
            <Link href="/">Beranda</Link>
            <span className="breadcrumb-sep">›</span>
            <span>Ekstrakulikuler</span>
          </div>
          <h1>Ekstrakulikuler & Organisasi Siswa</h1>
          <p>Kembangkan bakat, jiwa kepemimpinan, dan karakter unggulmu melalui 12+ pilihan organisasi dan ekstrakulikuler berprestasi di SMKN 3 Kendari.</p>
        </div>
      </section>

      {/* Stats Bar */}
      <section style={{ background: 'var(--dark)', padding: '2.5rem 0' }}>
        <div className="container">
          <div className="stats-grid">
            {[
              { icon: '🏛️', num: '4', label: 'Organisasi Utama (OSIS, Pramuka, PMR, LKBB)' },
              { icon: '🎯', num: '12+', label: 'Total Unit Ekstrakulikuler' },
              { icon: '👥', num: '650+', label: 'Siswa Aktif Terlibat' },
              { icon: '🏆', num: '35+', label: 'Piala Prestasi Ekskul 2023-2024' },
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

      {/* Interactive Ekskul Client */}
      <EkskulClient ekskulList={allList} />

      {/* Cara Bergabung Ekskul */}
      <section className="section bg-light">
        <div className="container" style={{ maxWidth: '800px' }}>
          <div className="vm-card visi">
            <div style={{ fontSize: '2.5rem', marginBottom: '1rem' }}>📋</div>
            <h3 style={{ color: 'var(--primary)', marginBottom: '1rem', fontSize: '1.3rem' }}>
              Panduan Pendaftaran Ekstrakulikuler
            </h3>
            <ul className="misi-list">
              <li>Pilih maksimal 2 ekstrakulikuler agar tidak mengganggu fokus jam pembelajaran kejuruan utama.</li>
              <li>Siswa kelas X wajib mengikuti salah satu dari Gerakan Pramuka atau OSIS/PMR/LKBB sebagai penguatan karakter Profil Pelajar Pancasila.</li>
              <li>Pendaftaran resmi dibuka setiap awal semester gasal (bulan Juli-Agustus) di stan Kesiswaan & Bazar Ekskul.</li>
              <li>Anggota berprestasi berhak mendapatkan sertifikat resmi dan rekomendasi beasiswa siswa berprestasi.</li>
            </ul>
            <div style={{ marginTop: '1.5rem', display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
              <Link href="/video" className="btn btn-teal">
                ▶ Tonton Video Kegiatan Ekskul
              </Link>
              <Link href="/galeri" className="btn btn-outline" style={{ color: 'var(--primary)', borderColor: 'var(--primary)' }}>
                📸 Lihat Galeri Foto
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
