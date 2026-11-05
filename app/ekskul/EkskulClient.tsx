'use client';

import { useState } from 'react';
import Link from 'next/link';

export interface EkskulItem {
  id: string;
  name: string;
  category: string;
  shortDesc: string;
  longDesc: string;
  icon: string;
  image: string;
  jadwal: string;
  lokasi: string;
  anggota: string;
  pembina: string;
  ketua: string;
  prestasi: string[];
  featured?: boolean;
  accentColor: string;
}

const categories = ['Semua', '4 Ekskul Utama', 'Olahraga', 'Seni & Budaya', 'Teknologi & Sains', 'Akademik & Bahasa'];

export default function EkskulClient({ ekskulList }: { ekskulList: EkskulItem[] }) {
  const [selectedCat, setSelectedCat] = useState('Semua');
  const [activeModal, setActiveModal] = useState<EkskulItem | null>(null);

  const filtered = selectedCat === 'Semua'
    ? ekskulList
    : selectedCat === '4 Ekskul Utama'
    ? ekskulList.filter((e) => e.featured)
    : ekskulList.filter((e) => e.category.toLowerCase().includes(selectedCat.split(' ')[0].toLowerCase()));

  return (
    <>
      {/* 4 Organisasi Utama Spotlight */}
      <section className="section bg-light">
        <div className="container">
          <div className="section-header">
            <div className="badge">Pilar Kepemimpinan & Karakter</div>
            <h2>4 Organisasi & Ekskul Utama</h2>
            <p>OSIS, Gerakan Pramuka, PMR Wira, dan LKBB/Paskibra menjadi ujung tombak kedisiplinan dan pengabdian siswa SMKN 3 Kendari.</p>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem' }}>
            {ekskulList.filter((e) => e.featured).map((item) => (
              <div
                key={item.id}
                className="card"
                style={{
                  borderTop: `4px solid ${item.accentColor}`,
                  boxShadow: 'var(--shadow-md)',
                  transition: 'var(--transition)',
                  display: 'flex',
                  flexDirection: 'column',
                }}
              >
                <div style={{ position: 'relative', height: '200px', overflow: 'hidden' }}>
                  <img
                    src={item.image}
                    alt={item.name}
                    style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                  />
                  <div style={{
                    position: 'absolute',
                    top: '12px',
                    left: '12px',
                    background: 'rgba(255,255,255,0.95)',
                    padding: '0.3rem 0.75rem',
                    borderRadius: 'var(--radius-full)',
                    fontSize: '0.75rem',
                    fontWeight: 700,
                    color: item.accentColor,
                    boxShadow: 'var(--shadow-sm)',
                  }}>
                    {item.icon} {item.category}
                  </div>
                </div>

                <div className="card-body" style={{ flex: 1, display: 'flex', flexDirection: 'column' }}>
                  <h3 style={{ fontSize: '1.25rem', marginBottom: '0.5rem', color: 'var(--dark)' }}>
                    {item.name}
                  </h3>
                  <p style={{ fontSize: '0.875rem', color: 'var(--text-muted)', marginBottom: '1.25rem', flex: 1, lineHeight: '1.6' }}>
                    {item.shortDesc}
                  </p>

                  <div style={{
                    background: 'var(--gray-100)',
                    borderRadius: 'var(--radius-sm)',
                    padding: '0.85rem',
                    fontSize: '0.8rem',
                    marginBottom: '1.25rem',
                    display: 'flex',
                    flexDirection: 'column',
                    gap: '0.35rem',
                  }}>
                    <div><strong>📅 Jadwal:</strong> {item.jadwal}</div>
                    <div><strong>👥 Anggota:</strong> {item.anggota}</div>
                    <div><strong>👨‍🏫 Pembina:</strong> {item.pembina}</div>
                  </div>

                  <button
                    onClick={() => setActiveModal(item)}
                    className="btn btn-teal btn-sm"
                    style={{ width: '100%', justifyContent: 'center' }}
                  >
                    Lihat Profil & Prestasi Lengkap →
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Semua Ekstrakulikuler Grid */}
      <section className="section">
        <div className="container">
          <div className="section-header">
            <div className="badge">Daftar Lengkap</div>
            <h2>Semua Bidang Ekstrakulikuler</h2>
            <p>Pilih kategori yang sesuai dengan minat dan bakatmu</p>
          </div>

          {/* Filter */}
          <div className="galeri-filter">
            {categories.map((c) => (
              <button
                key={c}
                className={`filter-btn${selectedCat === c ? ' active' : ''}`}
                onClick={() => setSelectedCat(c)}
              >
                {c}
              </button>
            ))}
          </div>

          <div className="grid-3">
            {filtered.map((item) => (
              <div key={item.id} className="card" style={{ display: 'flex', flexDirection: 'column' }}>
                <div style={{ position: 'relative', height: '180px', overflow: 'hidden' }}>
                  <img
                    src={item.image}
                    alt={item.name}
                    style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                  />
                  <span style={{
                    position: 'absolute',
                    bottom: '10px',
                    left: '10px',
                    background: 'rgba(0,0,0,0.7)',
                    color: 'white',
                    padding: '0.2rem 0.6rem',
                    borderRadius: '4px',
                    fontSize: '0.75rem',
                    fontWeight: 600,
                  }}>
                    {item.icon} {item.category}
                  </span>
                </div>
                <div className="card-body" style={{ flex: 1, display: 'flex', flexDirection: 'column' }}>
                  <h3 style={{ fontSize: '1.1rem', marginBottom: '0.4rem', color: 'var(--dark)' }}>
                    {item.name}
                  </h3>
                  <p style={{ fontSize: '0.85rem', color: 'var(--text-muted)', marginBottom: '1rem', flex: 1 }}>
                    {item.shortDesc}
                  </p>
                  <div style={{ fontSize: '0.8rem', color: 'var(--text-muted)', marginBottom: '1rem' }}>
                    <div>⏰ {item.jadwal}</div>
                    <div>📍 {item.lokasi}</div>
                  </div>
                  <button
                    onClick={() => setActiveModal(item)}
                    className="btn btn-outline btn-sm"
                    style={{ color: 'var(--primary)', borderColor: 'var(--primary)', justifyContent: 'center' }}
                  >
                    Detail Kegiatan →
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Modal Detail Ekskul */}
      {activeModal && (
        <div
          style={{
            position: 'fixed',
            inset: 0,
            background: 'rgba(0,0,0,0.75)',
            zIndex: 9999,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            padding: '1.5rem',
            backdropFilter: 'blur(5px)',
          }}
          onClick={() => setActiveModal(null)}
        >
          <div
            style={{
              background: 'white',
              borderRadius: 'var(--radius-lg)',
              maxWidth: '650px',
              width: '100%',
              maxHeight: '90vh',
              overflowY: 'auto',
              boxShadow: 'var(--shadow-xl)',
            }}
            onClick={(e) => e.stopPropagation()}
          >
            <div style={{ position: 'relative', height: '240px' }}>
              <img
                src={activeModal.image}
                alt={activeModal.name}
                style={{ width: '100%', height: '100%', objectFit: 'cover' }}
              />
              <button
                onClick={() => setActiveModal(null)}
                style={{
                  position: 'absolute',
                  top: '12px',
                  right: '12px',
                  background: 'white',
                  borderRadius: '50%',
                  width: '36px',
                  height: '36px',
                  border: 'none',
                  fontWeight: 800,
                  fontSize: '1.1rem',
                  cursor: 'pointer',
                  boxShadow: 'var(--shadow)',
                }}
              >
                ✕
              </button>
              <div style={{
                position: 'absolute',
                bottom: '12px',
                left: '16px',
                background: 'rgba(0,0,0,0.75)',
                color: 'white',
                padding: '0.35rem 0.85rem',
                borderRadius: 'var(--radius-full)',
                fontSize: '0.85rem',
                fontWeight: 600,
              }}>
                {activeModal.icon} {activeModal.category}
              </div>
            </div>

            <div style={{ padding: '2rem' }}>
              <h2 style={{ fontSize: '1.5rem', marginBottom: '0.5rem', color: 'var(--dark)' }}>
                {activeModal.name}
              </h2>
              <p style={{ fontSize: '0.95rem', color: 'var(--text)', lineHeight: '1.7', marginBottom: '1.5rem' }}>
                {activeModal.longDesc}
              </p>

              <div style={{
                background: 'var(--gray-100)',
                borderRadius: 'var(--radius)',
                padding: '1.25rem',
                display: 'grid',
                gridTemplateColumns: '1fr 1fr',
                gap: '0.75rem',
                fontSize: '0.85rem',
                marginBottom: '1.5rem',
              }}>
                <div><strong>⏰ Waktu Latihan:</strong><br />{activeModal.jadwal}</div>
                <div><strong>📍 Tempat:</strong><br />{activeModal.lokasi}</div>
                <div><strong>👨‍🏫 Pembina:</strong><br />{activeModal.pembina}</div>
                <div><strong>🎖️ Ketua / Danton:</strong><br />{activeModal.ketua}</div>
              </div>

              <div style={{ marginBottom: '1.75rem' }}>
                <h4 style={{ fontSize: '1rem', color: 'var(--dark)', marginBottom: '0.75rem' }}>
                  🏆 Prestasi & Kontribusi:
                </h4>
                <ul className="misi-list">
                  {activeModal.prestasi.map((p, idx) => (
                    <li key={idx} style={{ fontSize: '0.875rem' }}>{p}</li>
                  ))}
                </ul>
              </div>

              <div style={{ display: 'flex', gap: '1rem', justifyContent: 'flex-end' }}>
                <button
                  onClick={() => setActiveModal(null)}
                  className="btn btn-outline"
                  style={{ color: 'var(--gray-700)', borderColor: 'var(--gray-300)' }}
                >
                  Tutup
                </button>
                <a href="tel:+62401123456" className="btn btn-teal">
                  📞 Daftar Sekarang
                </a>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

