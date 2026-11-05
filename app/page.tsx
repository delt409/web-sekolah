import Link from 'next/link';
import { loadSectionSafe } from '../lib/data';

export const dynamic = 'force-dynamic';
export const revalidate = 0;

const jurusanList = [
  {
    slug: 'hotel',
    name: 'Perhotelan',
    fullName: 'Akomodasi Perhotelan & Hospitality',
    icon: '🏨',
    image: 'https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=600&q=80',
    description: 'Mempersiapkan tenaga profesional di bidang front office, housekeeping, dan F&B service berstandar hotel bintang 5.',
    skills: ['Front Office PMS', 'Housekeeping', 'F&B Service', 'Bahasa Inggris Vokasi'],
    tagColor: '#1565C0',
  },
  {
    slug: 'kuliner',
    name: 'Kuliner',
    fullName: 'Tata Boga & Kuliner Modern',
    icon: '🍳',
    image: 'https://images.unsplash.com/photo-1556910103-1c02745aae4d?auto=format&fit=crop&w=600&q=80',
    description: 'Mencetak chef handal, barista kopi profesional, ahli pastry & bakery, serta wirausahawan kuliner kreatif.',
    skills: ['Pastry & Bakery', 'Indonesian & Continental Food', 'Food Plating', 'Barista Kopi'],
    tagColor: '#E65100',
  },
  {
    slug: 'tjkt',
    name: 'TJKT',
    fullName: 'Teknik Jaringan Komputer & Telekomunikasi',
    icon: '💻',
    image: 'https://images.unsplash.com/photo-1544197150-b99a580bb7a8?auto=format&fit=crop&w=600&q=80',
    description: 'Menghasilkan teknisi jaringan komputer, perakitan fiber optic, cloud server, dan cybersecurity masa depan.',
    skills: ['Cisco Routing', 'MikroTik Network', 'Fiber Optic Splicing', 'Linux Cloud Server'],
    tagColor: '#1B5E20',
  },
  {
    slug: 'busana',
    name: 'Tata Busana',
    fullName: 'Tata Busana & Fashion Design',
    icon: '👗',
    image: 'https://images.unsplash.com/photo-1509631179647-0177331693ae?auto=format&fit=crop&w=600&q=80',
    description: 'Mendidik desainer busana inovatif, pembuat pola presisi, dan pengusaha butik busana berdaya saing global.',
    skills: ['Desain Mode & Sketsa', 'Pattern Making', 'Jahit Busana Industri', 'Bordir & Tenun'],
    tagColor: '#880E4F',
  },
  {
    slug: 'kecantikan',
    name: 'Tata Kecantikan',
    fullName: 'Tata Kecantikan Kulit & Rambut',
    icon: '💄',
    image: 'https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?auto=format&fit=crop&w=600&q=80',
    description: 'Menyiapkan beauty therapist, Make Up Artist (MUA), hair stylist, dan perias pengantin tersertifikasi BNSP.',
    skills: ['Make Up Artist (MUA)', 'Skin Care & Facial', 'Hair Styling & Cut', 'Rias Pengantin Adat'],
    tagColor: '#6A1B9A',
  },
];

const ekskulUtama = [
  {
    name: 'OSIS & MPK',
    role: 'Induk Kepemimpinan Siswa',
    icon: '🏛️',
    image: 'https://images.unsplash.com/photo-1529156069898-49953e39b3ac?auto=format&fit=crop&w=600&q=80',
    desc: 'Wadah kepemimpinan, penyelenggara MPLS, Class Meeting, dan penggerak kegiatan kesiswaan berkarakter.',
    badge: 'Organisasi Induk',
    color: '#1565C0',
  },
  {
    name: 'Gerakan Pramuka',
    role: 'Ambalan Anoa Mandiri',
    icon: '⚜️',
    image: 'https://images.unsplash.com/photo-1504280390367-361c6d9f38f4?auto=format&fit=crop&w=600&q=80',
    desc: 'Pendidikan kepanduan penegak, survival alam, kemah bakti, pionering tali temali, dan pengabdian masyarakat.',
    badge: 'Kepanduan Berprestasi',
    color: '#2E7D32',
  },
  {
    name: 'PMR Wira',
    role: 'Palang Merah Remaja Unit SMKN 3',
    icon: '🏥',
    image: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&w=600&q=80',
    desc: 'Korp sukarela pertolongan pertama pada gawat darurat, simulasi bencana, dan aksi donor darah rutin.',
    badge: 'Relawan Medis',
    color: '#C62828',
  },
  {
    name: 'LKBB & Paskibra',
    role: 'Pasukan Pengibar Bendera Pusaka',
    icon: '🎖️',
    image: 'https://images.unsplash.com/photo-1517457373958-b7bdd4587205?auto=format&fit=crop&w=600&q=80',
    desc: 'Pasukan disiplin tinggi dalam formasi baris-berbaris variasi indah dan pengibaran bendera merah putih.',
    badge: 'Juara LKBB 2024',
    color: '#E65100',
  },
];

const staticBerita = [
  {
    id: '1',
    title: 'SMKN 3 Kendari Raih Medali Emas LKS SMK Tingkat Nasional 2024',
    body: 'Siswa jurusan Kuliner SMKN 3 Kendari sukses meraih podium Juara Pertama nasional di Jakarta dengan hidangan kuliner fusion nusantara berstandar internasional.',
    date: '28 Oktober 2024',
    image: 'https://images.unsplash.com/photo-1556910103-1c02745aae4d?auto=format&fit=crop&w=600&q=80',
    tag: 'Prestasi Nasional',
  },
  {
    id: '2',
    title: 'Pelaksanaan Praktik Kerja Lapangan (PKL) 120 Siswa di 30 Mitra Industri',
    body: 'Sebanyak 120 siswa kelas XI diberangkatkan melaksanakan on-the-job training selama 6 bulan di berbagai hotel bintang lima, restoran, ISP, dan butik ternama.',
    date: '15 Oktober 2024',
    image: 'https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=600&q=80',
    tag: 'Link & Match',
  },
  {
    id: '3',
    title: 'Gelar Karya P5 & Fashion Show Busana Tenun Tradisional Sulawesi Tenggara',
    body: 'Pameran karya projek penguatan profil pelajar pancasila menampilkan gaun etnik tenun Tolaki karya siswi Tata Busana dan kreasi kuliner lokal.',
    date: '02 Oktober 2024',
    image: 'https://images.unsplash.com/photo-1509631179647-0177331693ae?auto=format&fit=crop&w=600&q=80',
    tag: 'Gelar Karya Siswa',
  },
];

export default async function Home() {
  // Ambil data dinamis dari seluruh 9 kategori Google Sheets
  const [
    dbBerita,
    dbPengumuman,
    dbPrestasi,
    dbGaleri,
    dbEkskul,
    dbKegiatan,
    dbVideo,
    dbGuru,
    dbProfil,
  ] = await Promise.all([
    loadSectionSafe('Berita'),
    loadSectionSafe('Pengumuman'),
    loadSectionSafe('Prestasi'),
    loadSectionSafe('Galeri'),
    loadSectionSafe('Ekskul'),
    loadSectionSafe('Kegiatan'),
    loadSectionSafe('Video'),
    loadSectionSafe('Guru'),
    loadSectionSafe('Profil'),
  ]);

  // 1. Pengumuman
  const displayPengumuman = dbPengumuman.length > 0
    ? dbPengumuman
    : [
        {
          id: 'p1',
          title: 'Pelaksanaan Ujian Asesmen & Praktik Kejuruan Berbasis Industri Semester Ganjil',
          body: 'Diberitahukan kepada seluruh siswa kelas X, XI, dan XII agar mempersiapkan portofolio kejuruan.',
          date: '04 November 2024',
        },
      ];

  // 2. Berita (data Google Sheets diutamakan paling depan)
  const displayBerita = dbBerita.length > 0
    ? [...dbBerita, ...staticBerita.filter((sb) => !dbBerita.some((db) => db.title === sb.title))].slice(0, 3)
    : staticBerita;

  // 3. Prestasi
  const displayPrestasi = dbPrestasi.length > 0
    ? dbPrestasi.slice(0, 3).map((p) => ({
        medal: '🏆',
        title: p.title,
        year: p.date || '2024',
        level: 'Prestasi SMKN 3',
        desc: p.body,
      }))
    : [
        { medal: '🥇', title: 'Juara 1 LKS Nasional Culinary Arts', year: '2024', level: 'Tingkat Nasional', desc: 'Medali Emas Lomba Kompetensi Siswa SMK tingkat Nasional di Jakarta.' },
        { medal: '🥈', title: 'Juara 2 LKS Nasional IT Network System', year: '2024', level: 'Tingkat Nasional', desc: 'Medali Perak dalam pengujian sistem jaringan skala enterprise & cybersecurity.' },
        { medal: '🥇', title: 'Juara 1 Lomba LKBB Variasi Pelajar Regional', year: '2024', level: 'Tingkat Regional', desc: 'Pasukan baris-berbaris LKBB Satria SMKN 3 meraih piala bergilir se-Sulawesi.' },
      ];

  // 4. Ekskul (Data Google Sheets seperti 'Ekskul IOT' langsung tampil terdepan!)
  const dynamicEkskul = dbEkskul.map((e, idx) => {
    const colors = ['#0d7377', '#1565C0', '#2E7D32', '#C62828', '#E65100', '#6A1B9A'];
    const icons = ['⚡', '🤖', '💻', '⚽', '🏛️', '⚜️', '🏥', '🎖️'];
    return {
      name: e.title,
      role: e.date || 'Ekstrakurikuler SMKN 3',
      icon: icons[idx % icons.length],
      image: e.image || 'https://images.unsplash.com/photo-1529156069898-49953e39b3ac?auto=format&fit=crop&w=600&q=80',
      desc: e.body,
      badge: 'Database Sheet',
      color: colors[idx % colors.length],
    };
  });

  const displayEkskul = dynamicEkskul.length > 0
    ? [...dynamicEkskul, ...ekskulUtama.filter((eu) => !dynamicEkskul.some((de) => de.name.toLowerCase().includes(eu.name.toLowerCase().slice(0, 4))))].slice(0, 8)
    : ekskulUtama;

  // 5. Galeri
  const displayGaleri = dbGaleri.length > 0
    ? dbGaleri.slice(0, 6).map((g) => ({
        title: g.title,
        image: g.image || 'https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&w=600&q=80',
        tag: 'Dokumentasi',
      }))
    : [
        { title: 'Latihan Variasi Barisan LKBB Satria', image: 'https://images.unsplash.com/photo-1517457373958-b7bdd4587205?auto=format&fit=crop&w=600&q=80', tag: 'LKBB / Paskibra' },
        { title: 'Api Unggun Kemah Pramuka Penegak', image: 'https://images.unsplash.com/photo-1504280390367-361c6d9f38f4?auto=format&fit=crop&w=600&q=80', tag: 'Gerakan Pramuka' },
        { title: 'Simulasi Tanggap Bencana PMR Wira', image: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&w=600&q=80', tag: 'PMR Wira' },
        { title: 'Praktik Memasak Dapur Restoran', image: 'https://images.unsplash.com/photo-1556910103-1c02745aae4d?auto=format&fit=crop&w=600&q=80', tag: 'Kuliner' },
        { title: 'Konfigurasi Jaringan Server TJKT', image: 'https://images.unsplash.com/photo-1544197150-b99a580bb7a8?auto=format&fit=crop&w=600&q=80', tag: 'TJKT' },
        { title: 'Fashion Show Kreasi Tenun Daerah', image: 'https://images.unsplash.com/photo-1509631179647-0177331693ae?auto=format&fit=crop&w=600&q=80', tag: 'Tata Busana' },
      ];

  // 6. Kegiatan / Agenda
  const displayKegiatan = dbKegiatan.length > 0
    ? dbKegiatan.slice(0, 4).map((k) => ({
        title: k.title,
        date: k.date || 'Agenda',
        body: k.body,
        time: k.image?.includes('WITA') ? k.image : '08:00 WITA',
      }))
    : [
        { title: 'Upacara Bendera Khidmat Bersama Pasukan LKBB', date: '04 Nov', time: '07:00 WITA', body: 'Upacara rutin Senin dirangkaikan penyematan lencana prestasi lomba.' },
        { title: 'Pelatihan Gabungan PMR Wira & PMI Kota Kendari', date: '08 Nov', time: '08:30 WITA', body: 'Simulasi evakuasi korban bencana gempa dan pertolongan pertama (CPR).' },
        { title: 'Ujian Tengah Semester (UTS) Berbasis Komputer & Praktik', date: '12 Nov', time: '07:30 WITA', body: 'Penilaian tengah semester ganjil untuk 5 program keahlian kejuruan.' },
        { title: 'Pameran Karya Boga & Cooking Demo Chef Bintang 5', date: '20 Nov', time: '09:00 WITA', body: 'Demo masak kuliner kontinental dan bazar teaching factory siswa.' },
      ];

  // 7. Video
  const displayVideo = dbVideo.length > 0
    ? dbVideo.slice(0, 3)
    : [
        { title: 'Profil Resmi SMKN 3 Kendari - Sekolah Vokasi Unggulan', image: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ', date: '2024' },
        { title: 'Dokumentasi Juara 1 Lomba Kompetensi Siswa (LKS) Kuliner', image: 'https://www.youtube.com/watch?v=jNQXAC9IVRw', date: '2024' },
        { title: 'Aksi Tim LKBB Paskibra SMKN 3 Kendari', image: 'https://www.youtube.com/watch?v=kJQP7kiw5Fk', date: '2024' },
      ];

  // 8. Guru & Tendik
  const displayGuru = dbGuru.length > 0
    ? dbGuru.slice(0, 4)
    : [
        { title: 'Drs. H. Ahmad Nurdin, M.Pd', body: 'Kepala Sekolah SMKN 3 Kendari - Pembina Utama Muda', image: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=400&q=80', date: 'Kepala Sekolah' },
        { title: 'Hj. Rahma Dewi, S.Pd, M.Pd', body: 'Wakil Kepala Sekolah Bidang Kurikulum', image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=400&q=80', date: 'Wakasek Kurikulum' },
        { title: 'Muh. Irfan, S.Pd', body: 'Wakil Kepala Sekolah Bidang Kesiswaan & Pembina Ekskul', image: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=400&q=80', date: 'Wakasek Kesiswaan' },
        { title: 'Arif Rahman, S.Kom', body: 'Ketua Program Keahlian TJKT & Instruktur Jaringan', image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=400&q=80', date: 'Kaprog TJKT' },
      ];

  // 9. Profil
  const displayProfil = dbProfil.length > 0 ? dbProfil[0] : null;

  return (
    <>
      {/* ===== HERO SECTION MODERN ===== */}
      <section className="hero">
        <div className="hero-shapes">
          <div className="hero-shape hero-shape-1" />
          <div className="hero-shape hero-shape-2" />
          <div className="hero-shape hero-shape-3" />
        </div>
        <div className="container" style={{ width: '100%', display: 'grid', gridTemplateColumns: '1.2fr 0.8fr', gap: '3rem', alignItems: 'center', padding: '8.5rem 1.5rem 6.5rem' }}>
          <div className="hero-content fade-up">
            <div className="hero-badge">
              🏆 SMK Pusat Keunggulan • Akreditasi A (Unggul)
            </div>
            <h1 style={{ fontSize: 'clamp(2.2rem, 5vw, 3.8rem)', lineHeight: '1.15', marginBottom: '1.25rem' }}>
              Membentuk Masa Depan Vokasi Gemilang di<br />
              <span>SMKN 3 Kendari</span>
            </h1>
            <p style={{ fontSize: '1.15rem', color: 'rgba(255,255,255,0.92)', lineHeight: '1.7', marginBottom: '2.25rem', maxWidth: '620px' }}>
              {displayProfil?.body ||
                'Pusat pendidikan kejuruan terkemuka di Sulawesi Tenggara dengan 5 program keahlian unggulan: Perhotelan, Kuliner, TJKT, Tata Busana, dan Tata Kecantikan berstandar industri.'}
            </p>
            <div className="hero-actions">
              <Link href="/jurusan" className="btn btn-primary btn-lg">
                📚 5 Jurusan Unggulan
              </Link>
              <Link href="/profil" className="btn btn-outline btn-lg">
                🏫 Profil & Visi Misi
              </Link>
              <Link href="/admin" className="btn btn-accent btn-lg" style={{ background: 'var(--accent-gold, #f39c12)' }}>
                ⚙️ Dashboard Admin CMS
              </Link>
            </div>
            <div className="hero-stats">
              <div>
                <div className="hero-stat-num">1.250+</div>
                <div className="hero-stat-label">Siswa Aktif</div>
              </div>
              <div>
                <div className="hero-stat-num">5</div>
                <div className="hero-stat-label">Jurusan Unggulan</div>
              </div>
              <div>
                <div className="hero-stat-num">75+</div>
                <div className="hero-stat-label">Mitra Industri</div>
              </div>
              <div>
                <div className="hero-stat-num">92%</div>
                <div className="hero-stat-label">Keterserapan Kerja</div>
              </div>
            </div>
          </div>

          <div className="hero-image-area fade-up fade-up-delay-2">
            <div style={{
              background: 'rgba(255,255,255,0.12)',
              backdropFilter: 'blur(16px)',
              border: '1px solid rgba(255,255,255,0.25)',
              borderRadius: 'var(--radius-lg)',
              padding: '1.75rem',
              color: 'white',
              boxShadow: 'var(--shadow-xl)',
              width: '100%',
              maxWidth: '440px',
            }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '1.25rem', paddingBottom: '1rem', borderBottom: '1px solid rgba(255,255,255,0.15)' }}>
                <div style={{ width: '48px', height: '48px', borderRadius: '12px', background: 'var(--accent)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '1.5rem' }}>
                  ⭐
                </div>
                <div>
                  <h3 style={{ color: 'white', fontSize: '1.1rem', margin: 0 }}>5 Jurusan Berstandar Industri</h3>
                  <div style={{ fontSize: '0.8rem', color: 'rgba(255,255,255,0.75)' }}>Siap Kerja • Siap Kuliah • Siap Wirausaha</div>
                </div>
              </div>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
                {jurusanList.map((j) => (
                  <Link
                    key={j.slug}
                    href={`/jurusan/${j.slug}`}
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'space-between',
                      background: 'rgba(255,255,255,0.08)',
                      padding: '0.75rem 1rem',
                      borderRadius: 'var(--radius-sm)',
                      transition: 'var(--transition)',
                      color: 'white',
                    }}
                  >
                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                      <span style={{ fontSize: '1.4rem' }}>{j.icon}</span>
                      <div>
                        <div style={{ fontWeight: 700, fontSize: '0.9rem' }}>{j.name}</div>
                        <div style={{ fontSize: '0.75rem', color: 'rgba(255,255,255,0.7)' }}>{j.fullName}</div>
                      </div>
                    </div>
                    <span style={{ fontSize: '1.1rem', opacity: 0.8 }}>→</span>
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ===== 1. FITUR PENGUMUMAN RESMI (BANNER ALERT) ===== */}
      {displayPengumuman.length > 0 && (
        <section style={{ background: '#fffbeb', borderBottom: '2px solid #fef3c7', padding: '1rem 0' }}>
          <div className="container" style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: '1rem' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
              <span style={{ fontSize: '1.4rem' }}>📢</span>
              <div>
                <strong style={{ color: '#b45309', fontSize: '0.9rem', marginRight: '0.5rem' }}>
                  [PENGUMUMAN {displayPengumuman[0].date ? `• ${displayPengumuman[0].date}` : ''}]:
                </strong>
                <span style={{ color: '#78350f', fontSize: '0.9rem' }}>
                  {displayPengumuman[0].title} - {displayPengumuman[0].body}
                </span>
              </div>
            </div>
            <Link href="/admin" style={{ fontSize: '0.8rem', fontWeight: 700, color: '#b45309', textDecoration: 'underline' }}>
              Kelola di Admin →
            </Link>
          </div>
        </section>
      )}

      {/* ===== STATS BANNER ===== */}
      <section className="stats-section">
        <div className="container">
          <div className="stats-grid">
            {[
              { icon: '🥇', num: '12+', label: 'Juara LKS Tingkat Nasional' },
              { icon: '👨‍🎓', num: '100%', label: 'Lulusan Tersertifikasi BNSP' },
              { icon: '🤝', num: '75+', label: 'DUDIKA & Hotel Bintang Lima' },
              { icon: '🏛️', num: 'A', label: 'Akreditasi BAN-S/M Unggul' },
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

      {/* ===== 2. FITUR 5 JURUSAN SECTION DENGAN GAMBAR ===== */}
      <section className="section bg-light">
        <div className="container">
          <div className="section-header">
            <div className="badge">Pendidikan Keahlian</div>
            <h2>5 Program Keahlian Unggulan</h2>
            <p>Setiap jurusan dilengkapi laboratorium berstandar industri, guru ahli berpengalaman, dan sertifikasi profesi nasional.</p>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '2rem' }}>
            {jurusanList.map((j) => (
              <div
                key={j.slug}
                className="jurusan-card"
                style={{
                  borderTop: `4px solid ${j.tagColor}`,
                  display: 'flex',
                  flexDirection: 'column',
                  borderRadius: 'var(--radius-lg)',
                  overflow: 'hidden',
                  background: 'white',
                  boxShadow: 'var(--shadow-md)',
                  transition: 'var(--transition)',
                }}
              >
                <div style={{ position: 'relative', height: '210px', overflow: 'hidden' }}>
                  <img
                    src={j.image}
                    alt={j.name}
                    style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                  />
                  <div style={{
                    position: 'absolute',
                    top: '12px',
                    left: '12px',
                    background: 'rgba(255,255,255,0.95)',
                    color: j.tagColor,
                    padding: '0.3rem 0.8rem',
                    borderRadius: 'var(--radius-full)',
                    fontSize: '0.78rem',
                    fontWeight: 700,
                    boxShadow: 'var(--shadow-sm)',
                  }}>
                    {j.icon} {j.name}
                  </div>
                </div>

                <div style={{ padding: '1.75rem', flex: 1, display: 'flex', flexDirection: 'column' }}>
                  <h3 style={{ fontSize: '1.25rem', marginBottom: '0.35rem', color: 'var(--dark)' }}>
                    {j.fullName}
                  </h3>
                  <p style={{ fontSize: '0.875rem', color: 'var(--text-muted)', lineHeight: '1.6', marginBottom: '1.25rem', flex: 1 }}>
                    {j.description}
                  </p>

                  <div style={{ marginBottom: '1.5rem' }}>
                    <div style={{ fontSize: '0.75rem', fontWeight: 700, textTransform: 'uppercase', color: 'var(--text-muted)', marginBottom: '0.5rem', letterSpacing: '0.05em' }}>
                      Kompetensi Kunci:
                    </div>
                    <div style={{ display: 'flex', gap: '0.4rem', flexWrap: 'wrap' }}>
                      {j.skills.map((sk) => (
                        <span
                          key={sk}
                          style={{
                            background: 'var(--gray-100)',
                            color: 'var(--dark)',
                            fontSize: '0.75rem',
                            padding: '0.2rem 0.6rem',
                            borderRadius: '4px',
                            fontWeight: 500,
                          }}
                        >
                          {sk}
                        </span>
                      ))}
                    </div>
                  </div>

                  <Link href={`/jurusan/${j.slug}`} className="btn btn-outline btn-sm" style={{ color: j.tagColor, borderColor: j.tagColor, justifyContent: 'center' }}>
                    Profil Lengkap & Fasilitas →
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== 3. FITUR EKSTRAKURIKULER (TERHUBUNG KE SHEET 'Ekskul') ===== */}
      <section className="section">
        <div className="container">
          <div className="section-header">
            <div className="badge">Karakter & Kedisiplinan</div>
            <h2>Pilar Organisasi & Ekstrakulikuler</h2>
            <p>Data dinamis terhubung langsung dari Google Spreadsheet. Menampilkan ekskul aktif siswa SMKN 3 Kendari.</p>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: '1.75rem' }}>
            {displayEkskul.map((e) => (
              <div
                key={e.name}
                className="card"
                style={{
                  borderTop: `4px solid ${e.color}`,
                  display: 'flex',
                  flexDirection: 'column',
                  overflow: 'hidden',
                  boxShadow: 'var(--shadow-md)',
                }}
              >
                <div style={{ position: 'relative', height: '170px', overflow: 'hidden' }}>
                  <img
                    src={e.image}
                    alt={e.name}
                    style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                  />
                  <span style={{
                    position: 'absolute',
                    top: '10px',
                    left: '10px',
                    background: 'rgba(255,255,255,0.95)',
                    color: e.color,
                    padding: '0.2rem 0.6rem',
                    borderRadius: 'var(--radius-full)',
                    fontSize: '0.7rem',
                    fontWeight: 700,
                  }}>
                    {e.badge}
                  </span>
                </div>
                <div style={{ padding: '1.5rem', flex: 1, display: 'flex', flexDirection: 'column' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.3rem' }}>
                    <span style={{ fontSize: '1.5rem' }}>{e.icon}</span>
                    <h3 style={{ fontSize: '1.15rem', color: 'var(--dark)' }}>{e.name}</h3>
                  </div>
                  <div style={{ fontSize: '0.78rem', color: e.color, fontWeight: 600, marginBottom: '0.75rem' }}>
                    {e.role}
                  </div>
                  <p style={{ fontSize: '0.85rem', color: 'var(--text-muted)', lineHeight: '1.6', marginBottom: '1.25rem', flex: 1 }}>
                    {e.desc}
                  </p>
                  <Link href="/ekskul" className="btn btn-outline btn-sm" style={{ color: e.color, borderColor: e.color, justifyContent: 'center' }}>
                    Detail Kegiatan →
                  </Link>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-4">
            <Link href="/ekskul" className="btn btn-teal btn-lg">
              ⚡ Jelajahi Halaman Ekstrakulikuler Lengkap →
            </Link>
          </div>
        </div>
      </section>

      {/* ===== 4. FITUR BERITA SEKOLAH (TERHUBUNG KE SHEET 'Berita') ===== */}
      <section className="section bg-light">
        <div className="container">
          <div className="section-header">
            <div className="badge">Kabar Sekolah</div>
            <h2>Berita & Artikel Terkini</h2>
            <p>Kabar kegiatan, liputan lomba, dan informasi resmi dari Google Spreadsheet SMKN 3 Kendari.</p>
          </div>

          <div className="grid-3">
            {displayBerita.map((b) => (
              <article key={b.id || b.title} className="card" style={{ display: 'flex', flexDirection: 'column' }}>
                <div style={{ height: '190px', overflow: 'hidden' }}>
                  <img
                    src={b.image || 'https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&w=600&q=80'}
                    alt={b.title}
                    style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                  />
                </div>
                <div className="card-body" style={{ flex: 1, display: 'flex', flexDirection: 'column' }}>
                  <div className="card-meta" style={{ marginBottom: '0.6rem' }}>
                    <span>📅</span>
                    <span>{b.date || 'Terbaru'}</span>
                    <span className="card-tag">Berita Resmi</span>
                  </div>
                  <h3 style={{ fontSize: '1.1rem', lineHeight: '1.4', marginBottom: '0.6rem', color: 'var(--dark)' }}>
                    {b.title}
                  </h3>
                  <p style={{ fontSize: '0.875rem', color: 'var(--text-muted)', lineHeight: '1.6', marginBottom: '1.25rem', flex: 1 }}>
                    {b.body?.slice(0, 140)}{b.body && b.body.length > 140 ? '...' : ''}
                  </p>
                  <Link href="/kegiatan" className="btn btn-outline btn-sm" style={{ color: 'var(--primary)', borderColor: 'var(--primary)', justifyContent: 'center' }}>
                    Baca Selengkapnya →
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* ===== 5. FITUR AGENDA & JADWAL KEGIATAN (TERHUBUNG KE SHEET 'Kegiatan') ===== */}
      <section className="section">
        <div className="container">
          <div className="section-header">
            <div className="badge">Kalender Akademik</div>
            <h2>Jadwal & Agenda Terdekat</h2>
            <p>Jadwal ujian, perkemahan, upacara, dan kegiatan ekstrakurikuler sekolah.</p>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '1.5rem' }}>
            {displayKegiatan.map((k, idx) => (
              <div
                key={idx}
                className="card"
                style={{ padding: '1.5rem', display: 'flex', gap: '1.25rem', alignItems: 'flex-start', borderLeft: '4px solid var(--primary)' }}
              >
                <div style={{
                  background: 'var(--primary)',
                  color: 'white',
                  borderRadius: 'var(--radius-sm)',
                  padding: '0.6rem 0.8rem',
                  textAlign: 'center',
                  minWidth: '65px',
                  flexShrink: 0,
                }}>
                  <div style={{ fontSize: '1.2rem', fontWeight: 800, lineHeight: 1 }}>{k.date.split(' ')[0]}</div>
                  <div style={{ fontSize: '0.7rem', textTransform: 'uppercase', marginTop: '2px' }}>{k.date.split(' ')[1] || 'AGENDA'}</div>
                </div>
                <div>
                  <div style={{ fontSize: '0.8rem', color: 'var(--primary)', fontWeight: 600, marginBottom: '0.25rem' }}>
                    ⏰ {k.time}
                  </div>
                  <h3 style={{ fontSize: '1.05rem', color: 'var(--dark)', marginBottom: '0.4rem', lineHeight: 1.3 }}>
                    {k.title}
                  </h3>
                  <p style={{ fontSize: '0.825rem', color: 'var(--text-muted)', margin: 0, lineHeight: 1.5 }}>
                    {k.body}
                  </p>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-4">
            <Link href="/kegiatan" className="btn btn-outline btn-lg" style={{ color: 'var(--primary)', borderColor: 'var(--primary)' }}>
              🗓️ Buka Kalender Kegiatan Sekolah Lengkap →
            </Link>
          </div>
        </div>
      </section>

      {/* ===== 6. FITUR PRESTASI & HALL OF FAME (TERHUBUNG KE SHEET 'Prestasi') ===== */}
      <section className="section bg-light">
        <div className="container">
          <div className="section-header">
            <div className="badge">Hall of Fame</div>
            <h2>Galeri Prestasi & Kejuaraan</h2>
            <p>Piala dan medali LKS Nasional serta kejuaraan bergengsi siswa SMKN 3 Kendari.</p>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '1.75rem' }}>
            {displayPrestasi.map((item, idx) => (
              <div key={idx} className="card" style={{ padding: '2rem 1.75rem', display: 'flex', gap: '1.25rem', alignItems: 'flex-start' }}>
                <div style={{ fontSize: '3rem', flexShrink: 0 }}>{item.medal}</div>
                <div>
                  <div style={{ display: 'flex', gap: '0.5rem', alignItems: 'center', marginBottom: '0.35rem' }}>
                    <span className="card-tag" style={{ background: 'rgba(243,156,18,0.15)', color: '#b7791f', fontWeight: 700 }}>
                      {item.level}
                    </span>
                    <span style={{ fontSize: '0.8rem', color: 'var(--text-muted)' }}>📅 {item.year}</span>
                  </div>
                  <h3 style={{ fontSize: '1.1rem', marginBottom: '0.5rem', color: 'var(--dark)' }}>{item.title}</h3>
                  <p style={{ fontSize: '0.85rem', color: 'var(--text-muted)' }}>{item.desc}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-4">
            <Link href="/prestasi" className="btn btn-teal btn-lg">
              🏆 Lihat Semua Prestasi & Piala Sekolah →
            </Link>
          </div>
        </div>
      </section>

      {/* ===== 7. FITUR GALERI FOTO (TERHUBUNG KE SHEET 'Galeri') ===== */}
      <section className="section">
        <div className="container">
          <div className="section-header">
            <div className="badge">Dokumentasi Sekolah</div>
            <h2>Galeri Foto Kegiatan & Fasilitas</h2>
            <p>Momen terbaik praktikum kejuruan, aksi ekskul, dan sarana modern SMKN 3 Kendari.</p>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: '1.5rem', marginBottom: '2.5rem' }}>
            {displayGaleri.map((p, idx) => (
              <div
                key={idx}
                className="card"
                style={{ overflow: 'hidden' }}
              >
                <div style={{ height: '180px', overflow: 'hidden', position: 'relative' }}>
                  <img
                    src={p.image}
                    alt={p.title}
                    style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                  />
                  <span style={{
                    position: 'absolute',
                    bottom: '8px',
                    left: '8px',
                    background: 'rgba(0,0,0,0.7)',
                    color: 'white',
                    padding: '0.2rem 0.5rem',
                    borderRadius: '4px',
                    fontSize: '0.7rem',
                    fontWeight: 600,
                  }}>
                    {p.tag}
                  </span>
                </div>
                <div style={{ padding: '0.85rem 1rem' }}>
                  <div style={{ fontWeight: 600, fontSize: '0.875rem', color: 'var(--dark)' }}>
                    {p.title}
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
            <Link href="/galeri" className="btn btn-teal btn-lg">
              📸 Buka Galeri Foto Lengkap
            </Link>
          </div>
        </div>
      </section>

      {/* ===== 8. FITUR VIDEO KEGIATAN (TERHUBUNG KE SHEET 'Video') ===== */}
      <section className="section bg-light">
        <div className="container">
          <div className="section-header">
            <div className="badge">Multimedia Video</div>
            <h2>Video Dokumentasi & Kegiatan</h2>
            <p>Tonton liputan prestasi, video profil, dan unjuk kebolehan siswa SMKN 3 Kendari.</p>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '2rem' }}>
            {displayVideo.map((v, idx) => (
              <div key={idx} className="card" style={{ overflow: 'hidden' }}>
                <div style={{ position: 'relative', height: '200px', background: 'var(--dark)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                  <div style={{ fontSize: '3.5rem', color: '#ff0000', cursor: 'pointer' }}>▶</div>
                  <span style={{ position: 'absolute', bottom: '10px', right: '10px', background: 'rgba(0,0,0,0.8)', color: 'white', fontSize: '0.75rem', padding: '0.2rem 0.5rem', borderRadius: '4px' }}>
                    {v.date || 'YouTube'}
                  </span>
                </div>
                <div style={{ padding: '1.25rem' }}>
                  <h3 style={{ fontSize: '1.05rem', color: 'var(--dark)', marginBottom: '0.5rem' }}>{v.title}</h3>
                  <Link href="/video" className="btn btn-outline btn-sm" style={{ color: 'var(--primary)', borderColor: 'var(--primary)', width: '100%', justifyContent: 'center' }}>
                    Tonton Video di Web →
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== 9. FITUR GURU & TENAGA KEPENDIDIKAN (TERHUBUNG KE SHEET 'Guru') ===== */}
      <section className="section">
        <div className="container">
          <div className="section-header">
            <div className="badge">Tenaga Pendidik</div>
            <h2>Pimpinan & Guru Pengajar</h2>
            <p>Guru ahli bersertifikasi industri yang siap membimbing siswa meraih kompetensi terbaik.</p>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: '1.75rem' }}>
            {displayGuru.map((g, idx) => (
              <div key={idx} className="card" style={{ padding: '1.5rem', textAlign: 'center', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                <img
                  src={g.image || 'https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=400&q=80'}
                  alt={g.title}
                  style={{ width: '110px', height: '110px', borderRadius: '50%', objectFit: 'cover', marginBottom: '1rem', border: '3px solid var(--primary)' }}
                />
                <h3 style={{ fontSize: '1.05rem', color: 'var(--dark)', marginBottom: '0.25rem' }}>{g.title}</h3>
                <div style={{ fontSize: '0.8rem', color: 'var(--primary)', fontWeight: 600, marginBottom: '0.5rem' }}>{g.date}</div>
                <p style={{ fontSize: '0.8rem', color: 'var(--text-muted)', margin: 0 }}>{g.body}</p>
              </div>
            ))}
          </div>

          <div className="text-center mt-4">
            <Link href="/profil" className="btn btn-outline btn-lg" style={{ color: 'var(--primary)', borderColor: 'var(--primary)' }}>
              🏫 Lihat Profil Sekolah & Struktur Lengkap →
            </Link>
          </div>
        </div>
      </section>

      {/* ===== CTA PENDAFTARAN ===== */}
      <section style={{
        background: 'linear-gradient(135deg, var(--dark) 0%, #0a4f52 100%)',
        padding: '6rem 0',
        color: 'white',
        textAlign: 'center',
      }}>
        <div className="container" style={{ maxWidth: '750px' }}>
          <div className="badge" style={{ background: 'rgba(255,255,255,0.15)', color: 'white', border: 'none', marginBottom: '1rem' }}>
            Penerimaan Peserta Didik Baru (PPDB)
          </div>
          <h2 style={{ color: 'white', fontSize: '2.5rem', marginBottom: '1.25rem' }}>
            Siap Raih Masa Depan Cerah Bersama SMKN 3 Kendari?
          </h2>
          <p style={{ color: 'rgba(255,255,255,0.85)', fontSize: '1.1rem', lineHeight: '1.7', marginBottom: '2.5rem' }}>
            Daftarkan diri Anda di salah satu dari 5 jurusan kejuruan unggulan berstandar industri dan ikuti kegiatan ekstrakurikuler berprestasi kami.
          </p>
          <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
            <Link href="/jurusan" className="btn btn-primary btn-lg">
              Pilih Jurusan Kejuruan →
            </Link>
            <Link href="/profil" className="btn btn-outline btn-lg" style={{ borderColor: 'white', color: 'white' }}>
              Informasi Kontak & Lokasi
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
