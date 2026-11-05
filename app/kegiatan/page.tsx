import type { Metadata } from 'next';
import Link from 'next/link';
import { gas, type Entry } from '../../lib/data';

export const dynamic = 'force-dynamic';
export const revalidate = 0;

export const metadata: Metadata = {
  title: 'Jadwal & Agenda Kegiatan Sekolah',
  description: 'Kalender akademik, jadwal kegiatan OSIS, Pramuka, PMR, LKBB, ujian sekolah, dan agenda tahunan SMKN 3 Kendari.',
};

async function safeLoad(): Promise<Entry[]> {
  try { return await gas('Kegiatan'); } catch { return []; }
}

const agendaBulanIni = [
  {
    day: '04',
    month: 'Nov',
    title: 'Upacara Bendera Khidmat Bersama Pasukan LKBB Satria',
    desc: 'Upacara bendera rutin hari Senin, pembina upacara Kepala Sekolah sekaligus penyerahan medali lomba.',
    time: '07:00 - 08:00 WITA',
    category: 'Upacara & Rutin',
    location: 'Lapangan Utama',
  },
  {
    day: '08',
    month: 'Nov',
    title: 'Pelatihan Gabungan PMR Wira & PMI Kota Kendari',
    desc: 'Simulasi evakuasi korban bencana gempa dan pertolongan pertama (CPR) bagi 60 relawan PMR muda.',
    time: '08:30 - 12:00 WITA',
    category: 'Ekskul PMR',
    location: 'Aula & Lapangan',
  },
  {
    day: '12',
    month: 'Nov',
    title: 'Ujian Tengah Semester (UTS) Berbasis Komputer & Praktik',
    desc: 'Penilaian tengah semester ganjil tahun ajaran 2024/2025 untuk seluruh siswa kelas X, XI, dan XII.',
    time: '07:30 - 13:00 WITA',
    category: 'Akademik',
    location: 'Lab Komputer & Ruang Kelas',
  },
  {
    day: '16',
    month: 'Nov',
    title: 'Perkemahan Sabtu Minggu (Persami) Ambalan Pramuka Anoa',
    desc: 'Kegiatan pengembaraan alam bebas, pioneering jembatan tali, dan renungan malam api unggun penegak.',
    time: 'Sabtu 14:00 - Minggu 11:00 WITA',
    category: 'Ekskul Pramuka',
    location: 'Bumi Perkemahan Moramo',
  },
  {
    day: '20',
    month: 'Nov',
    title: 'Pameran Karya Boga & Cooking Demo Jurusan Kuliner',
    desc: 'Demo masak bersama Chef hotel bintang lima dan bazaar produk bakery hasil teaching factory siswa.',
    time: '09:00 - 15:00 WITA',
    category: 'Vokasi Kejuruan',
    location: 'Dapur Produksi SMKN 3',
  },
  {
    day: '25',
    month: 'Nov',
    title: 'Peringatan Hari Guru Nasional & Pelantikan Pengurus OSIS Baru',
    desc: 'Upacara perayaan Hari Guru ke-79, penampilan paduan suara, serta serah terima jabatan ketua OSIS dan MPK.',
    time: '07:30 - 11:30 WITA',
    category: 'Organisasi OSIS',
    location: 'Graha Siswa SMKN 3',
  },
  {
    day: '29',
    month: 'Nov',
    title: 'Seleksi Internal Calon Peserta Lomba Kompetensi Siswa (LKS)',
    desc: 'Uji keterampilan teknis 5 jurusan untuk memilih wakil terbaik sekolah menuju LKS tingkat Provinsi 2025.',
    time: '08:00 - 16:00 WITA',
    category: 'Kompetisi LKS',
    location: 'Workshop Masing-masing Jurusan',
  },
];

const agendaTahunan = [
  { bulan: 'Juli', kegiatan: ['Masa Pengenalan Lingkungan Sekolah (MPLS)', 'Penerimaan Tamu Ambalan Pramuka', 'Bazar Pendaftaran Ekskul'] },
  { bulan: 'Agustus', kegiatan: ['HUT Kemerdekaan RI ke-79', 'Tugas Pengibaran Bendera LKBB/Paskibra', 'Aksi Donor Darah PMR'] },
  { bulan: 'September', kegiatan: ['Ujian Tengah Semester Ganjil', 'Pemberangkatan PKL Tahap 1', 'Lomba Fashion Show Kreasi Tenun'] },
  { bulan: 'Oktober', kegiatan: ['Bulan Bahasa & Pentas Seni Pelajar', 'LKS Tingkat Kota Kendari', 'Peringatan Hari Sumpah Pemuda'] },
  { bulan: 'November', kegiatan: ['Peringatan Hari Guru Nasional', 'Pemilu Ketua OSIS & MPK', 'Kemah Bakti Pramuka Penegak'] },
  { bulan: 'Desember', kegiatan: ['Penilaian Akhir Semester (PAS)', 'Porseni & Class Meeting OSIS', 'Pembagian Buku Rapor Semester 1'] },
  { bulan: 'Januari', kegiatan: ['Awal Semester Genap 2025', 'Pemberangkatan PKL Tahap 2', 'Workshop Sertifikasi BNSP'] },
  { bulan: 'Februari', kegiatan: ['Uji Kompetensi Keahlian (UKK) Praktik', 'Lomba PMR Wira Se-Kota Kendari', 'Gebyar Vokasi SMKN 3'] },
  { bulan: 'Maret', kegiatan: ['Ujian Sekolah Kelas XII', 'Kunjungan Industri DUDIKA', 'Pameran Teaching Factory'] },
  { bulan: 'April', kegiatan: ['Pesantren Kilat Ramadhan Rohis', 'Bakti Sosial OSIS ke Panti Asuhan', 'Try Out Ujian Kejuruan'] },
  { bulan: 'Mei', kegiatan: ['Pengumuman Kelulusan Kelas XII', 'Wisuda & Pelepasan 350 Lulusan', 'Bursa Kerja Khusus (BKK) Job Fair'] },
  { bulan: 'Juni', kegiatan: ['Penilaian Akhir Tahun (PAT)', 'Penerimaan Rapor Kenaikan Kelas', 'Sosialisasi PPDB Tahun Ajaran Baru'] },
];

const categoryColor: Record<string, string> = {
  'Upacara & Rutin': '#64748b',
  'Akademik': '#1565C0',
  'Ekskul PMR': '#C62828',
  'Ekskul Pramuka': '#2E7D32',
  'Organisasi OSIS': '#1565C0',
  'Vokasi Kejuruan': '#E65100',
  'Kompetisi LKS': '#f39c12',
};

const calendarDays = Array.from({ length: 30 }, (_, i) => i + 1);
const eventDays = [4, 8, 12, 16, 20, 25, 29];

export default async function KegiatanPage() {
  const dbItems = await safeLoad();

  const dynamicAgenda = dbItems.map((item, i) => {
    const rawDate = item.date || '01 Nov';
    const day = rawDate.match(/\d{1,2}/)?.[0]?.padStart(2, '0') || '01';
    const month = rawDate.includes('-') ? 'Nov' : rawDate.split(' ')[1] || 'Nov';
    return {
      day,
      month,
      title: item.title,
      desc: item.body,
      time: item.image || '08:00 WITA',
      category: 'Agenda Sekolah',
      location: 'SMKN 3 Kendari',
    };
  });

  const listKegiatan = dynamicAgenda.length > 0 ? [...dynamicAgenda, ...agendaBulanIni] : agendaBulanIni;

  return (
    <>
      <section className="page-hero">
        <div className="container page-hero-content">
          <div className="breadcrumb">
            <Link href="/">Beranda</Link>
            <span className="breadcrumb-sep">›</span>
            <span>Jadwal Kegiatan</span>
          </div>
          <h1>Jadwal & Agenda Kegiatan Sekolah</h1>
          <p>Pantau jadwal kegiatan akademik, agenda ekskul (OSIS, Pramuka, PMR, LKBB), uji kompetensi kejuruan, dan kalender pendidikan SMKN 3 Kendari.</p>
        </div>
      </section>

      {/* Info Bar */}
      <section style={{ background: 'var(--dark)', padding: '2.5rem 0' }}>
        <div className="container">
          <div className="stats-grid">
            {[
              { icon: '📅', num: 'November 2024', label: 'Bulan Berjalan Aktif' },
              { icon: '⏰', num: '07:00 - 15:30', label: 'Jam Pembelajaran Efektif' },
              { icon: '⚡', num: '7 Agenda', label: 'Kegiatan Utama Bulan Ini' },
              { icon: '🏛️', num: 'Semester Ganjil', label: 'Tahun Ajaran 2024/2025' },
            ].map((s) => (
              <div key={s.label} className="stat-item">
                <div className="stat-icon">{s.icon}</div>
                <div className="stat-number" style={{ fontSize: '1.6rem' }}>{s.num}</div>
                <div className="stat-label">{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Kegiatan Bulan Ini */}
      <section className="section">
        <div className="container">
          <div className="section-header">
            <div className="badge">Agenda Bulan Berjalan</div>
            <h2>Kegiatan November 2024</h2>
            <p>Jadwal penting yang melibatkan civitas akademika dan organisasi kesiswaan SMKN 3 Kendari.</p>
          </div>

          <div className="kegiatan-grid">
            {/* Kolom Kiri: Daftar Event */}
            <div>
              <div className="kegiatan-list">
                {listKegiatan.map((k, idx) => (
                  <div key={idx} className="kegiatan-item" style={{ boxShadow: 'var(--shadow-sm)' }}>
                    <div className="kegiatan-date">
                      <span className="day">{k.day}</span>
                      <span className="month">{k.month}</span>
                    </div>
                    <div className="kegiatan-info" style={{ flex: 1 }}>
                      <h4 style={{ fontSize: '1.05rem', color: 'var(--dark)', marginBottom: '0.35rem' }}>
                        {k.title}
                      </h4>
                      <p style={{ fontSize: '0.85rem', color: 'var(--text-muted)', lineHeight: '1.6' }}>
                        {k.desc}
                      </p>
                      <div className="kegiatan-time" style={{ display: 'flex', gap: '0.75rem', flexWrap: 'wrap', alignItems: 'center', marginTop: '0.5rem' }}>
                        <span>⏰ {k.time}</span>
                        <span>📍 {k.location}</span>
                        <span style={{
                          padding: '0.15rem 0.6rem',
                          borderRadius: '99px',
                          background: `${categoryColor[k.category] || '#64748b'}15`,
                          color: categoryColor[k.category] || '#64748b',
                          fontSize: '0.72rem',
                          fontWeight: 700,
                        }}>
                          {k.category}
                        </span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Kolom Kanan: Kalender Widget */}
            <div>
              <div className="calendar-widget" style={{ boxShadow: 'var(--shadow-md)' }}>
                <div className="calendar-header">
                  <div style={{ fontWeight: 800, fontSize: '1.1rem', color: 'var(--primary)' }}>
                    🗓️ November 2024
                  </div>
                  <div style={{ fontSize: '0.8rem', color: 'var(--text-muted)' }}>
                    Semester Ganjil
                  </div>
                </div>
                <div className="calendar-days">
                  {['Min', 'Sen', 'Sel', 'Rab', 'Kam', 'Jum', 'Sab'].map((d) => (
                    <div key={d} className="calendar-day-name">{d}</div>
                  ))}
                  {/* Offset hari */}
                  {Array.from({ length: 5 }).map((_, i) => (
                    <div key={`empty-${i}`} />
                  ))}
                  {calendarDays.map((day) => (
                    <div
                      key={day}
                      className={`calendar-day${day === 3 ? ' today' : ''}${eventDays.includes(day) ? ' has-event' : ''}`}
                      title={eventDays.includes(day) ? `Ada kegiatan pada tanggal ${day} November` : undefined}
                    >
                      {day}
                    </div>
                  ))}
                </div>

                <div style={{ marginTop: '1.5rem', display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                  <div className="alert alert-info" style={{ fontSize: '0.825rem', padding: '0.75rem' }}>
                    💡 <strong>Keterangan:</strong> Titik emas menandakan adanya agenda resmi sekolah / ekskul pada tanggal tersebut.
                  </div>
                </div>

                {/* Kategori Legenda */}
                <div style={{ marginTop: '1.5rem', borderTop: '1px solid var(--border)', paddingTop: '1rem' }}>
                  <div style={{ fontWeight: 700, fontSize: '0.85rem', marginBottom: '0.75rem', color: 'var(--dark)' }}>
                    Kategori Agenda:
                  </div>
                  <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '0.5rem' }}>
                    {Object.entries(categoryColor).map(([cat, color]) => (
                      <div key={cat} style={{ display: 'flex', alignItems: 'center', gap: '0.4rem', fontSize: '0.75rem' }}>
                        <div style={{ width: '8px', height: '8px', borderRadius: '50%', background: color, flexShrink: 0 }} />
                        <span>{cat}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Fast links */}
              <div style={{ marginTop: '1.5rem', display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
                <Link href="/ekskul" className="btn btn-teal" style={{ justifyContent: 'center' }}>
                  ⚡ Jadwal Latihan Ekskul (OSIS, Pramuka, PMR, LKBB)
                </Link>
                <Link href="/video" className="btn btn-outline" style={{ color: 'var(--primary)', borderColor: 'var(--primary)', justifyContent: 'center' }}>
                  ▶ Video Dokumentasi Kegiatan Lalu
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Agenda Tahunan 12 Bulan */}
      <section className="section bg-light">
        <div className="container">
          <div className="section-header">
            <div className="badge">Kalender Pendidikan</div>
            <h2>Agenda Tahunan 2024/2025</h2>
            <p>Rangkuman program kerja dan siklus kegiatan akademik sepanjang satu tahun ajaran.</p>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(260px, 1fr))', gap: '1.5rem' }}>
            {agendaTahunan.map((a) => (
              <div key={a.bulan} className="card" style={{ padding: '1.5rem', boxShadow: 'var(--shadow-sm)' }}>
                <div style={{
                  background: 'linear-gradient(135deg, var(--primary), var(--primary-light))',
                  color: 'white',
                  padding: '0.35rem 0.85rem',
                  borderRadius: 'var(--radius-full)',
                  display: 'inline-block',
                  fontSize: '0.85rem',
                  fontWeight: 700,
                  marginBottom: '1rem',
                }}>
                  📅 Bulan {a.bulan}
                </div>
                <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                  {a.kegiatan.map((k) => (
                    <li key={k} style={{ fontSize: '0.85rem', color: 'var(--dark)', display: 'flex', gap: '0.5rem', alignItems: 'flex-start' }}>
                      <span style={{ color: 'var(--primary)', fontWeight: 800, flexShrink: 0 }}>✓</span>
                      <span>{k}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
