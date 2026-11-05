import type { Metadata } from 'next';
import Link from 'next/link';
import { loadSectionSafe } from '../../lib/data';

export const dynamic = 'force-dynamic';
export const revalidate = 0;

export const metadata: Metadata = {
  title: 'Profil Sekolah, Visi Misi & Struktur Organisasi',
  description: 'Profil lengkap SMKN 3 Kendari, sejarah berdirinya, visi misi, tujuan sekolah, struktur organisasi komite dan pimpinan, serta fasilitas modern.',
};

const visiText =
  'Terwujudnya SMK Negeri 3 Kendari sebagai Pusat Pendidikan Vokasi yang Unggul, Berkarakter Profil Pelajar Pancasila, Berdaya Saing Global, dan Berwawasan Lingkungan pada Tahun 2028.';

const misiList = [
  'Menyelenggarakan kurikulum vokasi berbasis kompetensi industri dan Kurikulum Merdeka yang adaptif terhadap era digital 4.0.',
  'Menanamkan nilai-nilai keimanan, ketaqwaan, budi pekerti luhur, dan disiplin tinggi melalui pembiasaan positif serta kegiatan ekstrakulikuler.',
  'Mengembangkan program Teaching Factory (TEFA) pada seluruh 5 program keahlian untuk menghasilkan produk dan jasa bernilai jual.',
  'Meningkatkan kemitraan strategis (Link and Match) dengan Dunia Usaha, Dunia Industri, dan Dunia Kerja (DUDIKA) berskala nasional dan multinasional.',
  'Meningkatkan profesionalisme guru dan tenaga kependidikan melalui sertifikasi kompetensi keahlian dan magang industri.',
  'Menyediakan sarana, laboratorium, dan lingkungan sekolah yang modern, aman, bersih, dan ramah anak.',
  'Membekali lulusan dengan jiwa kewirausahaan (entrepreneurship) dan sertifikasi profesi BNSP agar siap bekerja, berwirausaha, atau melanjutkan studi (BMW).',
];

const tujuanList = [
  'Mencapai persentase kelulusan 100% dengan rata-rata nilai kompetensi kejuruan di atas standar nasional.',
  'Meningkatkan keterserapan lulusan ke dunia kerja dan wirausaha mandiri minimal 85% dalam kurun waktu 1 tahun setelah kelulusan.',
  'Menjuarai minimal 5 ajang Lomba Kompetensi Siswa (LKS) tingkat Provinsi dan meraih medali di tingkat Nasional setiap tahun.',
  'Menjalin kerjasama MoU dengan sedikitnya 60 mitra industri aktif untuk pelaksanaan Prakerin dan perekrutan kerja.',
];

const timeline = [
  { year: '1990', title: 'Pendirian Sekolah Vokasi', desc: 'Resmi didirikan atas inisiasi Departemen Pendidikan untuk mencukupi kebutuhan tenaga terampil pariwisata dan kerajinan di Kota Kendari.' },
  { year: '1998', title: 'Ekspansi Program Keahlian', desc: 'Dibuka jurusan Tata Boga (Kuliner) dan Tata Busana dengan fasilitas laboratorium mandiri pertama di Sulawesi Tenggara.' },
  { year: '2008', title: 'Raihan Akreditasi A Pertama', desc: 'Meraih akreditasi A dari Badan Akreditasi Nasional Sekolah/Madrasah (BAN-S/M) untuk seluruh kompetensi keahlian.' },
  { year: '2015', title: 'Pendirian Jurusan TJKT & Tata Kecantikan', desc: 'Membuka program Teknik Jaringan Komputer & Telekomunikasi (TJKT) serta Tata Kecantikan Kulit & Rambut berstandar industri modern.' },
  { year: '2020', title: 'Pembangunan Edotel & Teaching Factory', desc: 'Peresmian gedung Hotel Training (Edotel) dan Dapur Produksi Komersial sebagai wahana pembelajaran nyata siswa.' },
  { year: '2022', title: 'Penetapan SMK Pusat Keunggulan', desc: 'Terpilih menjadi SMK Pusat Keunggulan (Center of Excellence) dan SMK Pelaksana Kurikulum Merdeka oleh Kemendikbudristek RI.' },
  { year: '2024', title: 'Sekolah Vokasi Berprestasi Terbaik Sultra', desc: 'Memenangkan Juara 1 LKS Nasional Culinary Arts dan dianugerahi predikat Sekolah Menengah Kejuruan Berprestasi se-Sulawesi Tenggara.' },
];

const pimpinanSekolah = [
  {
    role: 'Kepala Sekolah',
    name: 'Drs. H. Ahmad Nurdin, M.Pd',
    nip: 'NIP. 19680512 199403 1 004',
    image: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=400&q=80',
    sambutan: 'Selamat datang di portal informasi resmi SMKN 3 Kendari. Kami bertekad mendidik putra-putri bangsa dengan keterampilan nyata, karakter tangguh, dan sertifikasi profesi bertaraf nasional.',
  },
  {
    role: 'Wakasek Bid. Kurikulum',
    name: 'Hj. Rahma Dewi, S.Pd, M.Pd',
    nip: 'NIP. 19740815 199903 2 006',
    image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=400&q=80',
    sambutan: 'Mengembangkan pembelajaran berbasis proyek (PjBL) dan integrasi sertifikasi kompetensi industri.',
  },
  {
    role: 'Wakasek Bid. Kesiswaan',
    name: 'Muh. Irfan, S.Pd',
    nip: 'NIP. 19790210 200501 1 008',
    image: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&w=400&q=80',
    sambutan: 'Membimbing pembentukan karakter disiplin melalui OSIS, Pramuka, PMR, LKBB, dan ragam ekstrakulikuler.',
  },
  {
    role: 'Wakasek Bid. Humas & Hubin',
    name: 'Siti Aisyah, S.Pd, M.M',
    nip: 'NIP. 19811123 200604 2 012',
    image: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=400&q=80',
    sambutan: 'Menjembatani kerjasama Prakerin dan penyaluran kerja ke lebih dari 75 mitra industri terkemuka.',
  },
  {
    role: 'Wakasek Bid. Sarana & Prasarana',
    name: 'Budi Santoso, S.T, M.T',
    nip: 'NIP. 19760419 200312 1 005',
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=400&q=80',
    sambutan: 'Memastikan fasilitas bengkel, lab komputer, edotel, dan dapur produksi selalu terawat optimal.',
  },
];

const kepalaJurusan = [
  { namaJur: 'Perhotelan', namaKa: 'Sri Wahyuni, S.Pd', icon: '🏨', color: '#1565C0' },
  { namaJur: 'Kuliner / Tata Boga', namaKa: 'Fatimah Zahra, S.Pd', icon: '🍳', color: '#E65100' },
  { namaJur: 'TJKT (Jaringan Komputer)', namaKa: 'Arif Rahman, S.Kom, M.Kom', icon: '💻', color: '#1B5E20' },
  { namaJur: 'Tata Busana', namaKa: 'Nurlinda, S.Pd', icon: '👗', color: '#880E4F' },
  { namaJur: 'Tata Kecantikan', namaKa: 'Hasriani, S.Pd', icon: '💄', color: '#6A1B9A' },
];

export default async function ProfilPage() {
  const dbProfil = await loadSectionSafe('Profil');
  return (
    <>
      {/* Page Hero */}
      <section className="page-hero">
        <div className="container page-hero-content">
          <div className="breadcrumb">
            <Link href="/">Beranda</Link>
            <span className="breadcrumb-sep">›</span>
            <span>Profil Sekolah</span>
          </div>
          <h1>Profil Lengkap SMKN 3 Kendari</h1>
          <p>Mengenal sejarah, visi misi, komitmen mutu, struktur pimpinan organisasi, dan sarana prasarana sekolah kejuruan rujukan di Kota Kendari.</p>
        </div>
      </section>

      {/* Dinamis dari Google Sheets (jika ada) */}
      {dbProfil.length > 0 && (
        <section className="section bg-light" style={{ padding: '2.5rem 0' }}>
          <div className="container">
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
              {dbProfil.map((p) => (
                <div key={p.id} className="alert alert-info" style={{ padding: '1.25rem 1.5rem', background: 'white' }}>
                  <span style={{ fontSize: '1.8rem' }}>📢</span>
                  <div>
                    <h3 style={{ fontSize: '1.1rem', marginBottom: '0.25rem', color: 'var(--primary)' }}>{p.title}</h3>
                    <p style={{ margin: 0, fontSize: '0.9rem', color: 'var(--text)' }}>{p.body}</p>
                    {p.date && <small style={{ color: 'var(--text-muted)' }}>📅 {p.date}</small>}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Sambutan Kepala Sekolah */}
      <section className="section">
        <div className="container">
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
            gap: '3rem',
            alignItems: 'center',
            background: 'white',
            borderRadius: 'var(--radius-lg)',
            padding: '3rem',
            border: '1px solid var(--border)',
            boxShadow: 'var(--shadow-md)',
          }}>
            <div style={{ position: 'relative', textAlign: 'center' }}>
              <div style={{
                width: '260px',
                height: '260px',
                margin: '0 auto',
                borderRadius: '50%',
                overflow: 'hidden',
                boxShadow: 'var(--shadow-xl)',
                border: '6px solid white',
                outline: '4px solid var(--primary)',
              }}>
                <img
                  src={pimpinanSekolah[0].image}
                  alt={pimpinanSekolah[0].name}
                  style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                />
              </div>
              <div style={{ marginTop: '1.25rem' }}>
                <h3 style={{ fontSize: '1.25rem', color: 'var(--dark)' }}>{pimpinanSekolah[0].name}</h3>
                <div style={{ color: 'var(--primary)', fontWeight: 700, fontSize: '0.9rem' }}>{pimpinanSekolah[0].role}</div>
                <div style={{ color: 'var(--text-muted)', fontSize: '0.8rem' }}>{pimpinanSekolah[0].nip}</div>
              </div>
            </div>

            <div>
              <div className="badge" style={{ marginBottom: '1rem' }}>Kata Sambutan</div>
              <h2 style={{ fontSize: '1.8rem', marginBottom: '1.25rem', color: 'var(--dark)' }}>
                Mewujudkan Generasi Terampil, Mandiri & Berkarakter
              </h2>
              <p style={{ fontSize: '1rem', lineHeight: '1.8', color: 'var(--text)', marginBottom: '1.25rem' }}>
                &ldquo;Puji syukur kita panjatkan ke hadirat Tuhan Yang Maha Esa atas hadirnya wajah baru portal resmi SMK Negeri 3 Kendari. Sebagai lembaga pendidikan vokasi terkemuka, kami berkomitmen mencetak generasi muda yang tidak hanya menguasai keterampilan teknis 5 jurusan keahlian, tetapi juga berintegritas tinggi, berbudi pekerti luhur, dan berjiwa wirausaha tangguh.&rdquo;
              </p>
              <p style={{ fontSize: '0.95rem', lineHeight: '1.7', color: 'var(--text-muted)', marginBottom: '1.5rem' }}>
                Dukungan sarana modern, kerjasama industri yang kuat, serta keaktifan organisasi siswa seperti OSIS, Pramuka, PMR, dan LKBB menjadikan SMKN 3 Kendari rumah kedua yang menginspirasi bagi masa depan siswa.
              </p>
              <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
                <Link href="/jurusan" className="btn btn-teal">
                  📚 Eksplorasi 5 Jurusan
                </Link>
                <Link href="/prestasi" className="btn btn-outline" style={{ color: 'var(--primary)', borderColor: 'var(--primary)' }}>
                  🏆 Lihat Prestasi Kami
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Identitas Sekolah Grid */}
      <section className="section bg-light">
        <div className="container">
          <div className="section-header">
            <div className="badge">Data Pokok Pendidikan</div>
            <h2>Identitas Resmi Sekolah</h2>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '1.5rem' }}>
            {[
              { label: 'Nama Lembaga', value: 'SMK Negeri 3 Kendari', icon: '🏫' },
              { label: 'NPSN Resmi', value: '40402345', icon: '🔢' },
              { label: 'Status & Akreditasi', value: 'Negeri • Akreditasi A (Unggul)', icon: '✅' },
              { label: 'Alamat Kampus', value: 'Jl. Bunggasi, Anduonohu, Kec. Poasia', icon: '📍' },
              { label: 'Kabupaten / Kota', value: 'Kota Kendari, Sulawesi Tenggara 93231', icon: '🗺️' },
              { label: 'Telepon Kantor', value: '(0401) 123-4567 / 0812-3456-7890', icon: '📞' },
              { label: 'Email Resmi', value: 'info@smkn3kendari.sch.id', icon: '✉️' },
              { label: 'Kurikulum Operasional', value: 'Kurikulum Merdeka & Vokasi Industri', icon: '📘' },
            ].map((item) => (
              <div key={item.label} className="card" style={{ padding: '1.25rem 1.5rem', display: 'flex', alignItems: 'center', gap: '1rem' }}>
                <span style={{ fontSize: '2rem', flexShrink: 0 }}>{item.icon}</span>
                <div>
                  <div style={{ fontSize: '0.75rem', color: 'var(--text-muted)', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.05em' }}>{item.label}</div>
                  <div style={{ fontWeight: 700, color: 'var(--dark)', fontSize: '0.95rem' }}>{item.value}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Visi Misi & Tujuan */}
      <section className="section">
        <div className="container">
          <div className="section-header">
            <div className="badge">Arah Kebijakan</div>
            <h2>Visi, Misi & Tujuan Sekolah</h2>
            <p>Pedoman komprehensif dalam mengarahkan seluruh kegiatan akademik, vokasi, dan pengembangan karakter.</p>
          </div>

          <div className="visi-misi-grid">
            <div className="vm-card visi">
              <div className="vm-icon">🔭</div>
              <h3>Visi Sekolah</h3>
              <p style={{ color: 'var(--dark)', fontSize: '1.1rem', fontStyle: 'italic', lineHeight: '1.8', fontWeight: 600, marginBottom: '2rem' }}>
                &ldquo;{visiText}&rdquo;
              </p>

              <div style={{ borderTop: '2px dashed var(--border)', paddingTop: '1.5rem', marginTop: '1.5rem' }}>
                <h4 style={{ fontSize: '1.1rem', color: 'var(--primary)', marginBottom: '0.75rem' }}>🎯 Tujuan Strategis:</h4>
                <ul className="misi-list">
                  {tujuanList.map((t, i) => (
                    <li key={i}>{t}</li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="vm-card misi">
              <div className="vm-icon">🎯</div>
              <h3 style={{ color: 'var(--accent-dark)' }}>7 Misi Utama</h3>
              <ul className="misi-list">
                {misiList.map((m, i) => (
                  <li key={i}>{m}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Sejarah Singkat */}
      <section className="section bg-light">
        <div className="container">
          <div className="section-header">
            <div className="badge">Rekam Jejak</div>
            <h2>Sejarah Singkat SMKN 3 Kendari</h2>
            <p>Tiga dekade lebih mendedikasikan diri untuk kemajuan vokasi di Sulawesi Tenggara.</p>
          </div>

          <div className="sejarah-section">
            <p style={{ color: 'var(--dark)', marginBottom: '2.5rem', fontSize: '1.05rem', lineHeight: '1.8' }}>
              SMKN 3 Kendari didirikan pada era 1990-an guna menjawab tuntutan pasar tenaga kerja terampil di kawasan timur Indonesia. Bermula dari program keahlian pariwisata dan tata boga, sekolah terus bertransformasi mengikuti era digitalisasi dengan penambahan program TJKT dan modernisasi kejuruan lainnya. Saat ini, SMKN 3 Kendari berstatus SMK Pusat Keunggulan dengan ribuan alumni sukses di berbagai sektor perhotelan, kuliner, telekomunikasi, dan mode busana.
            </p>

            <div className="timeline">
              {timeline.map((t) => (
                <div key={t.year} className="timeline-item">
                  <div className="timeline-year">{t.year}</div>
                  <div className="timeline-title">{t.title}</div>
                  <p className="timeline-desc">{t.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Struktur Organisasi Pimpinan */}
      <section className="section">
        <div className="container">
          <div className="section-header">
            <div className="badge">Manajemen Sekolah</div>
            <h2>Struktur Organisasi Pimpinan</h2>
            <p>Jajaran pimpinan dan wakil kepala sekolah yang mengawal tata kelola akademik dan kesiswaan.</p>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '1.75rem', marginBottom: '3.5rem' }}>
            {pimpinanSekolah.map((p) => (
              <div key={p.role} className="card" style={{ textAlign: 'center', padding: '1.75rem 1.25rem' }}>
                <div style={{
                  width: '110px',
                  height: '110px',
                  borderRadius: '50%',
                  margin: '0 auto 1rem',
                  overflow: 'hidden',
                  border: '3px solid var(--primary)',
                }}>
                  <img
                    src={p.image}
                    alt={p.name}
                    style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                  />
                </div>
                <div style={{ fontSize: '0.8rem', color: 'var(--primary)', fontWeight: 700, marginBottom: '0.3rem' }}>
                  {p.role}
                </div>
                <h3 style={{ fontSize: '0.95rem', color: 'var(--dark)', marginBottom: '0.3rem', lineHeight: '1.3' }}>
                  {p.name}
                </h3>
                <div style={{ fontSize: '0.75rem', color: 'var(--text-muted)' }}>
                  {p.nip}
                </div>
              </div>
            ))}
          </div>

          {/* Kepala Program Keahlian / Jurusan */}
          <div className="section-header" style={{ marginBottom: '2rem' }}>
            <div className="badge">Ketua Program Keahlian</div>
            <h3>Pimpinan 5 Jurusan Unggulan</h3>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '1.25rem' }}>
            {kepalaJurusan.map((kj) => (
              <div
                key={kj.namaJur}
                className="card"
                style={{
                  padding: '1.5rem',
                  textAlign: 'center',
                  borderTop: `4px solid ${kj.color}`,
                }}
              >
                <div style={{ fontSize: '2.5rem', marginBottom: '0.5rem' }}>{kj.icon}</div>
                <div style={{ fontSize: '0.8rem', fontWeight: 600, color: kj.color, marginBottom: '0.25rem' }}>
                  Jurusan {kj.namaJur}
                </div>
                <div style={{ fontWeight: 700, color: 'var(--dark)', fontSize: '0.95rem' }}>
                  {kj.namaKa}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Fasilitas Unggulan */}
      <section className="section bg-light">
        <div className="container">
          <div className="section-header">
            <div className="badge">Sarana & Prasarana</div>
            <h2>Fasilitas Pembelajaran Modern</h2>
            <p>Laboratorium, bengkel kerja, dan mini industri yang dirancang menyamai standar dunia kerja nyata.</p>
          </div>

          <div className="grid-4">
            {[
              { title: 'Edotel (Mini Hotel Training)', icon: '🏩', desc: 'Hotel simulasi dengan kamar standar bintang 3, lobby front desk, dan sistem reservasi PMS.' },
              { title: 'Dapur Produksi & Bakery', icon: '🍽️', desc: 'Dapur komersial berstandar HACCP dengan kompor industri, oven gas, dan mesin mixer adonan.' },
              { title: 'Lab Cisco Jaringan Komputer', icon: '🖥️', desc: 'Router, switch manageable, server rack, dan splicer kabel fiber optik untuk siswa TJKT.' },
              { title: 'Workshop Jahit & Catwalk', icon: '🧵', desc: '40 unit mesin jahit berkecepatan tinggi, mesin obras, meja potong pola, dan catwalk fashion.' },
              { title: 'Salon Kecantikan & Spa Room', icon: '💆', desc: 'Kursi styling hidrolik, alat facial uap, bed lulur spa, dan peralatan nail art lengkap.' },
              { title: 'Perpustakaan Digital', icon: '📚', desc: 'Koleksi ribuan e-book, ruang diskusi ber-AC, dan komputer akses jurnal ilmiah.' },
              { title: 'Lapangan Olahraga Serbaguna', icon: '⚽', desc: 'Lapangan futsal, voli, dan basket dengan tribun penonton untuk olahraga dan upacara.' },
              { title: 'Masjid Babussalam & Aula', icon: '🕌', desc: 'Sarana ibadah representatif dan aula pertemuan berkapasitas 500 orang untuk kegiatan akbar.' },
            ].map((f) => (
              <div key={f.title} className="card" style={{ padding: '1.75rem' }}>
                <div style={{ fontSize: '2.5rem', marginBottom: '1rem' }}>{f.icon}</div>
                <h3 style={{ fontSize: '1.05rem', marginBottom: '0.5rem', color: 'var(--dark)' }}>{f.title}</h3>
                <p style={{ fontSize: '0.85rem', color: 'var(--text-muted)', lineHeight: '1.6' }}>{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
