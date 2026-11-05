'use client';

import { useState } from 'react';
import Link from 'next/link';

export interface PrestasiItem {
  id: string;
  medal: string;
  title: string;
  level: string;
  year: string;
  category: string;
  body: string;
  image: string;
  student: string;
  jurusan: string;
  type: 'gold' | 'silver' | 'bronze';
}

const levels = ['Semua Tingkat', 'Nasional', 'Regional', 'Provinsi', 'Kota'];

export default function PrestasiClient({ initialItems }: { initialItems: PrestasiItem[] }) {
  const [selectedLevel, setSelectedLevel] = useState('Semua Tingkat');

  const filtered = selectedLevel === 'Semua Tingkat'
    ? initialItems
    : initialItems.filter((p) => p.level.toLowerCase().includes(selectedLevel.toLowerCase()));

  return (
    <>
      <section className="section">
        <div className="container">
          <div className="section-header">
            <div className="badge">Hall of Fame</div>
            <h2>Prestasi Membanggakan SMKN 3 Kendari</h2>
            <p>Bukti dedikasi, kerja keras, dan kualitas pendidikan vokasi berstandar industri.</p>
          </div>

          {/* Level Filter */}
          <div className="galeri-filter">
            {levels.map((l) => (
              <button
                key={l}
                className={`filter-btn${selectedLevel === l ? ' active' : ''}`}
                onClick={() => setSelectedLevel(l)}
              >
                {l === 'Nasional' ? '🇮🇩 Nasional' : l === 'Provinsi' ? '🏛️ Provinsi' : l === 'Kota' ? '🏙️ Kota' : l}
              </button>
            ))}
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(340px, 1fr))', gap: '2rem' }}>
            {filtered.map((item) => (
              <div
                key={item.id}
                className="card"
                style={{
                  display: 'flex',
                  flexDirection: 'column',
                  borderTop: item.type === 'gold' ? '4px solid #f39c12' : item.type === 'silver' ? '4px solid #718096' : '4px solid #9c6432',
                  boxShadow: 'var(--shadow-md)',
                }}
              >
                <div style={{ position: 'relative', height: '200px', overflow: 'hidden' }}>
                  <img
                    src={item.image}
                    alt={item.title}
                    style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                  />
                  <div style={{
                    position: 'absolute',
                    top: '12px',
                    left: '12px',
                    background: 'rgba(0,0,0,0.75)',
                    backdropFilter: 'blur(4px)',
                    color: 'white',
                    padding: '0.25rem 0.75rem',
                    borderRadius: 'var(--radius-full)',
                    fontSize: '0.75rem',
                    fontWeight: 700,
                  }}>
                    {item.level.includes('Nasional') ? '🇮🇩 Tingkat Nasional' : `🏛️ Tingkat ${item.level}`}
                  </div>
                  <div style={{
                    position: 'absolute',
                    bottom: '12px',
                    right: '12px',
                    width: '42px',
                    height: '42px',
                    background: 'white',
                    borderRadius: '50%',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    fontSize: '1.5rem',
                    boxShadow: 'var(--shadow)',
                  }}>
                    {item.medal}
                  </div>
                </div>

                <div className="card-body" style={{ flex: 1, display: 'flex', flexDirection: 'column' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.5rem' }}>
                    <span className="card-tag" style={{ background: 'rgba(13,115,119,0.1)', color: 'var(--primary)' }}>
                      {item.jurusan}
                    </span>
                    <span style={{ fontSize: '0.75rem', color: 'var(--text-muted)' }}>
                      📅 Tahun {item.year}
                    </span>
                  </div>

                  <h3 style={{ fontSize: '1.15rem', color: 'var(--dark)', lineHeight: '1.4', marginBottom: '0.75rem' }}>
                    {item.title}
                  </h3>

                  <p style={{ fontSize: '0.875rem', color: 'var(--text-muted)', lineHeight: '1.6', marginBottom: '1.25rem', flex: 1 }}>
                    {item.body}
                  </p>

                  <div style={{
                    background: 'var(--gray-100)',
                    padding: '0.75rem 1rem',
                    borderRadius: 'var(--radius-sm)',
                    fontSize: '0.8rem',
                    color: 'var(--dark)',
                  }}>
                    <strong>👤 Siswa / Tim:</strong> {item.student}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

