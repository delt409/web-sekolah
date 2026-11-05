import Link from 'next/link';

const jurusanLinks = [
  { href: '/jurusan/hotel', label: 'Perhotelan' },
  { href: '/jurusan/kuliner', label: 'Kuliner / Tata Boga' },
  { href: '/jurusan/tjkt', label: 'TJKT' },
  { href: '/jurusan/busana', label: 'Tata Busana' },
  { href: '/jurusan/kecantikan', label: 'Tata Kecantikan' },
];

const menuLinks = [
  { href: '/profil', label: 'Profil Sekolah' },
  { href: '/galeri', label: 'Galeri Foto' },
  { href: '/prestasi', label: 'Prestasi' },
  { href: '/ekskul', label: 'Ekstrakulikuler' },
  { href: '/kegiatan', label: 'Jadwal Kegiatan' },
  { href: '/video', label: 'Video Kegiatan' },
];

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-grid">
          {/* Brand */}
          <div className="footer-brand">
            <div className="footer-logo">
              <div className="footer-logo-icon">S3K</div>
              <div>
                <div className="footer-logo-text">SMKN 3 Kendari</div>
                <div className="footer-logo-sub">Sekolah Menengah Kejuruan Negeri</div>
              </div>
            </div>
            <p className="footer-desc">
              Mencetak generasi unggul, terampil, dan berkarakter dalam bidang vokasi
              untuk menghadapi tantangan dunia kerja modern.
            </p>
            <div className="footer-socials">
              <a href="#" className="social-btn" aria-label="Facebook">📘</a>
              <a href="#" className="social-btn" aria-label="Instagram">📷</a>
              <a href="#" className="social-btn" aria-label="YouTube">▶️</a>
              <a href="#" className="social-btn" aria-label="Twitter">🐦</a>
            </div>
          </div>

          {/* Menu */}
          <div>
            <div className="footer-title">Menu Utama</div>
            <ul className="footer-links">
              {menuLinks.map((l) => (
                <li key={l.href}>
                  <Link href={l.href}>› {l.label}</Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Jurusan */}
          <div>
            <div className="footer-title">Jurusan</div>
            <ul className="footer-links">
              {jurusanLinks.map((l) => (
                <li key={l.href}>
                  <Link href={l.href}>› {l.label}</Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Kontak */}
          <div>
            <div className="footer-title">Kontak</div>
            <div className="footer-contact-item">
              <span className="footer-contact-icon">📍</span>
              <span>Jl. Bunggasi, Anduonohu, Kec. Poasia, Kota Kendari, Sulawesi Tenggara 93231</span>
            </div>
            <div className="footer-contact-item">
              <span className="footer-contact-icon">📞</span>
              <span>(0401) 123-4567</span>
            </div>
            <div className="footer-contact-item">
              <span className="footer-contact-icon">✉️</span>
              <span>info@smkn3kendari.sch.id</span>
            </div>
            <div className="footer-contact-item">
              <span className="footer-contact-icon">🕐</span>
              <span>Senin – Jumat: 07:00 – 16:00</span>
            </div>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <div className="container" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', width: '100%', flexWrap: 'wrap', gap: '0.5rem' }}>
          <span>© {new Date().getFullYear()} SMKN 3 Kendari. Hak cipta dilindungi undang-undang.</span>
          <span>Dibuat dengan ❤️ untuk dunia pendidikan</span>
        </div>
      </div>
    </footer>
  );
}
