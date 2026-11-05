import type { Metadata } from 'next';
import Link from 'next/link';
import { loadSectionSafe } from '../../lib/data';
import VideoClient, { type VideoItem } from './VideoClient';

export const dynamic = 'force-dynamic';
export const revalidate = 0;

export const metadata: Metadata = {
  title: 'Galeri Video Kegiatan & Praktik',
  description: 'Tonton liputan video seputar kegiatan sekolah, dokumentasi ekskul (OSIS, Pramuka, PMR, LKBB), praktik 5 jurusan, dan prestasi SMKN 3 Kendari.',
};

function extractYoutubeId(urlOrId: string): string {
  if (!urlOrId) return 'dQw4w9WgXcQ';
  const match = urlOrId.match(/(?:youtu\.be\/|youtube\.com\/(?:embed\/|v\/|watch\?v=|watch\?.+&v=))([\w-]{11})/);
  if (match && match[1]) return match[1];
  if (/^[\w-]{11}$/.test(urlOrId.trim())) return urlOrId.trim();
  return 'dQw4w9WgXcQ';
}

const staticVideos: VideoItem[] = [
  {
    id: '1',
    title: 'Profil Resmi SMKN 3 Kendari - Sekolah Vokasi Unggulan Sulawesi Tenggara',
    description: 'Video pengenalan fasilitas, 5 program keahlian unggulan, suasana belajar modern, dan pencapaian civitas akademika SMKN 3 Kendari.',
    category: 'Profil',
    youtubeId: 'dQw4w9WgXcQ',
    duration: '06:45',
    date: '10 Oktober 2024',
    views: '12.4K tayangan',
    thumbnail: 'https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&w=800&q=80',
  },
  {
    id: '2',
    title: 'Dokumentasi Juara 1 Lomba Kompetensi Siswa (LKS) Bidang Kuliner Nasional',
    description: 'Liputan perjuangan siswa jurusan Tata Boga SMKN 3 Kendari dalam memenangkan medali emas di ajang LKS SMK tingkat Nasional.',
    category: 'Prestasi',
    youtubeId: 'jNQXAC9IVRw',
    duration: '08:20',
    date: '28 September 2024',
    views: '8.7K tayangan',
    thumbnail: 'https://images.unsplash.com/photo-1556910103-1c02745aae4d?auto=format&fit=crop&w=800&q=80',
  },
  {
    id: '3',
    title: 'Aksi Tim LKBB Paskibra SMKN 3 Kendari dalam Lomba Baris-Berbaris',
    description: 'Penampilan memukau dan formasi variasi baris-berbaris pasukan Paskibra / LKBB Satria SMKN 3 Kendari tingkat Kota.',
    category: 'Ekskul',
    youtubeId: 'kJQP7kiw5Fk',
    duration: '11:15',
    date: '17 Agustus 2024',
    views: '15.2K tayangan',
    thumbnail: 'https://images.unsplash.com/photo-1517457373958-b7bdd4587205?auto=format&fit=crop&w=800&q=80',
  },
  {
    id: '4',
    title: 'Kemah Bakti Pramuka Gudep SMKN 3 Kendari di Bumi Perkemahan',
    description: 'Keseruan kegiatan api unggun, jelajah alam, pioneering, dan penguatan karakter kepanduan anggota Gerakan Pramuka Ambalan SMKN 3.',
    category: 'Ekskul',
    youtubeId: 'fJ9rUzIMcZQ',
    duration: '09:40',
    date: '14 Agustus 2024',
    views: '6.9K tayangan',
    thumbnail: 'https://images.unsplash.com/photo-1504280390367-361c6d9f38f4?auto=format&fit=crop&w=800&q=80',
  },
  {
    id: '5',
    title: 'Simulasi Tanggap Bencana & Pertolongan Pertama PMR Wira SMKN 3',
    description: 'Latihan gabungan PMR Wira bersama PMI Kota Kendari dalam pertolongan gawat darurat, evakuasi tandu, dan mitigasi bencana.',
    category: 'Ekskul',
    youtubeId: '3JZ_D3ELwOQ',
    duration: '07:10',
    date: '22 Juli 2024',
    views: '5.3K tayangan',
    thumbnail: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&w=800&q=80',
  },
  {
    id: '6',
    title: 'Fashion Show Tahunan Siswa Tata Busana - Kreasi Kain Tenun Sultra',
    description: 'Gelar karya busana spektakuler memadukan kearifan lokal tenun khas Sulawesi Tenggara dengan gaya haute couture modern.',
    category: 'Praktik',
    youtubeId: 'kXYiU_JCYtU',
    duration: '14:22',
    date: '02 Mei 2024',
    views: '18.9K tayangan',
    thumbnail: 'https://images.unsplash.com/photo-1509631179647-0177331693ae?auto=format&fit=crop&w=800&q=80',
  },
];

export default async function VideoPage() {
  const dbItems = await loadSectionSafe('Video');

  const dynamicVideos: VideoItem[] = dbItems.map((v, i) => {
    const yId = extractYoutubeId(v.image);
    return {
      id: v.id || `gas-video-${i}`,
      title: v.title,
      description: v.body,
      category: 'Kegiatan',
      youtubeId: yId,
      duration: 'Dokumentasi',
      date: v.date || 'Terbaru',
      views: 'Tayangan Baru',
      thumbnail: v.image && v.image.startsWith('http') && !v.image.includes('youtube.com') && !v.image.includes('youtu.be')
        ? v.image
        : `https://img.youtube.com/vi/${yId}/hqdefault.jpg`,
    };
  });

  const allVideos = dynamicVideos.length > 0 ? [...dynamicVideos, ...staticVideos] : staticVideos;

  return (
    <>
      <section className="page-hero">
        <div className="container page-hero-content">
          <div className="breadcrumb">
            <Link href="/">Beranda</Link>
            <span className="breadcrumb-sep">›</span>
            <span>Video Kegiatan</span>
          </div>
          <h1>Galeri Video Kegiatan</h1>
          <p>Tonton liputan video seputar kegiatan sekolah, dokumentasi ekskul (OSIS, Pramuka, PMR, LKBB), praktik 5 jurusan, dan prestasi SMKN 3 Kendari.</p>
        </div>
      </section>

      {/* Interactive Video Client Component */}
      <VideoClient videoList={allVideos} />

      {/* YouTube Channel Promo */}
      <section className="section bg-light text-center">
        <div className="container" style={{ maxWidth: '700px' }}>
          <div style={{ fontSize: '3rem', marginBottom: '1rem' }}>📺</div>
          <h2 style={{ marginBottom: '0.75rem' }}>Berlangganan Channel YouTube Kami</h2>
          <p style={{ marginBottom: '1.75rem' }}>
            Dapatkan update video kegiatan terbaru, tutorial keahlian vokasi, dokumentasi perayaan sekolah, dan karya inspiratif siswa SMKN 3 Kendari secara berkala.
          </p>
          <a
            href="https://youtube.com"
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-accent btn-lg"
          >
            ▶ Subscribe di YouTube Resmi SMKN 3 Kendari
          </a>
        </div>
      </section>
    </>
  );
}
