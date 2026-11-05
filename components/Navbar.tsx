'use client';
import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

const navItems = [
  { href: '/', label: 'Beranda' },
  { href: '/profil', label: 'Profil Sekolah' },
  {
    label: 'Jurusan',
    children: [
      { href: '/jurusan', label: '📚 Semua 5 Jurusan' },
      { href: '/jurusan/hotel', label: '🏨 Perhotelan' },
      { href: '/jurusan/kuliner', label: '🍳 Kuliner / Tata Boga' },
      { href: '/jurusan/tjkt', label: '💻 TJKT (Jaringan)' },
      { href: '/jurusan/busana', label: '👗 Tata Busana' },
      { href: '/jurusan/kecantikan', label: '💄 Tata Kecantikan' },
    ],
  },
  { href: '/galeri', label: 'Galeri Foto' },
  { href: '/prestasi', label: 'Prestasi' },
  { href: '/ekskul', label: 'Ekstrakulikuler' },
  { href: '/kegiatan', label: 'Jadwal' },
  { href: '/video', label: 'Video Kegiatan' },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handler);
    return () => window.removeEventListener('scroll', handler);
  }, []);

  useEffect(() => {
    setOpen(false);
    setDropdownOpen(false);
  }, [pathname]);

  useEffect(() => {
    if (open) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => { document.body.style.overflow = ''; };
  }, [open]);

  return (
    <nav className={`navbar${scrolled ? ' scrolled' : ''}`}>
      <div className="container navbar-inner">
        <Link href="/" className="navbar-brand">
          <div className="brand-logo">S3K</div>
          <div className="brand-text">
            <span className="brand-name">SMKN 3 Kendari</span>
            <span className="brand-sub">Sekolah Menengah Kejuruan Negeri</span>
          </div>
        </Link>

        <div className={`nav-menu${open ? ' open' : ''}`}>
          {navItems.map((item) =>
            item.children ? (
              <div
                key={item.label}
                className="nav-dropdown"
                onMouseEnter={() => setDropdownOpen(true)}
                onMouseLeave={() => setDropdownOpen(false)}
              >
                <span
                  className={`nav-link${pathname.startsWith('/jurusan') ? ' active' : ''}`}
                  onClick={() => setDropdownOpen((v) => !v)}
                  style={{ cursor: 'pointer', userSelect: 'none' }}
                >
                  {item.label} ▾
                </span>
                <div
                  className="dropdown-menu"
                  style={dropdownOpen ? { opacity: 1, visibility: 'visible', transform: 'translateX(-50%) translateY(0)' } : {}}
                >
                  {item.children.map((child) => (
                    <Link
                      key={child.href}
                      href={child.href}
                      className={pathname === child.href ? 'active' : ''}
                      style={{ padding: '0.6rem 1rem', display: 'block' }}
                    >
                      {child.label}
                    </Link>
                  ))}
                </div>
              </div>
            ) : (
              <Link
                key={item.href}
                href={item.href!}
                className={`nav-link${pathname === item.href ? ' active' : ''}`}
              >
                {item.label}
              </Link>
            )
          )}
          <Link href="/admin" className="nav-link nav-cta">
            🔐 Admin
          </Link>
        </div>

        <button
          className="hamburger"
          onClick={() => setOpen((v) => !v)}
          aria-label="Toggle menu"
        >
          <span style={open ? { transform: 'rotate(45deg) translate(5px, 5px)' } : {}} />
          <span style={open ? { opacity: 0 } : {}} />
          <span style={open ? { transform: 'rotate(-45deg) translate(5px, -5px)' } : {}} />
        </button>
      </div>
    </nav>
  );
}
