'use client';

import { useState } from 'react';

export interface VideoItem {
  id: string;
  title: string;
  description: string;
  category: string;
  youtubeId: string;
  duration: string;
  date: string;
  views: string;
  thumbnail: string;
}

const categories = ['Semua', 'Profil', 'Prestasi', 'Ekskul', 'Praktik'];

export default function VideoClient({ videoList }: { videoList: VideoItem[] }) {
  const [selectedCat, setSelectedCat] = useState('Semua');
  const [activeVideo, setActiveVideo] = useState<VideoItem | null>(null);

  const filtered = selectedCat === 'Semua'
    ? videoList
    : videoList.filter((v) => v.category.toLowerCase().includes(selectedCat.toLowerCase()));

  const featured = videoList[0];

  return (
    <>
      {/* Featured Video Section */}
      {featured && (
        <section className="section bg-light">
          <div className="container">
            <div className="section-header">
              <div className="badge">Video Utama</div>
              <h2>Video Profil Unggulan</h2>
              <p>Mengenal lebih dekat lingkungan belajar, sarana praktik, dan keunggulan SMKN 3 Kendari</p>
            </div>

            <div style={{
              background: 'white',
              borderRadius: 'var(--radius-lg)',
              overflow: 'hidden',
              border: '1px solid var(--border)',
              boxShadow: 'var(--shadow-xl)',
              maxWidth: '960px',
              margin: '0 auto',
            }}>
              <div style={{ position: 'relative', aspectRatio: '16/9', background: '#000' }}>
                <iframe
                  src={`https://www.youtube.com/embed/${featured.youtubeId}?rel=0`}
                  title={featured.title}
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  style={{ width: '100%', height: '100%', border: 'none' }}
                />
              </div>
              <div style={{ padding: '2rem' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '0.75rem', flexWrap: 'wrap' }}>
                  <span className="card-tag" style={{ background: 'rgba(13,115,119,0.15)', color: 'var(--primary)', fontWeight: 700 }}>
                    🌟 Video Pilihan
                  </span>
                  <span style={{ fontSize: '0.85rem', color: 'var(--text-muted)' }}>📅 {featured.date}</span>
                  <span style={{ fontSize: '0.85rem', color: 'var(--text-muted)' }}>👁️ {featured.views}</span>
                </div>
                <h2 style={{ fontSize: '1.4rem', marginBottom: '0.75rem', color: 'var(--dark)' }}>
                  {featured.title}
                </h2>
                <p style={{ fontSize: '0.95rem', color: 'var(--text-muted)', lineHeight: '1.7' }}>
                  {featured.description}
                </p>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Video Grid Section */}
      <section className="section">
        <div className="container">
          <div className="section-header">
            <div className="badge">Koleksi Video</div>
            <h2>Semua Dokumentasi Video</h2>
            <p>Pilih kategori untuk memfilter dokumentasi video kegiatan sekolah</p>
          </div>

          {/* Filter */}
          <div className="galeri-filter">
            {categories.map((c) => (
              <button
                key={c}
                className={`filter-btn${selectedCat === c ? ' active' : ''}`}
                onClick={() => setSelectedCat(c)}
              >
                {c === 'Ekskul' ? '⚡ OSIS, Pramuka, PMR, LKBB' : c}
              </button>
            ))}
          </div>

          <div className="video-grid">
            {filtered.map((item) => (
              <div key={item.id} className="video-card">
                <div
                  className="video-thumb"
                  style={{ cursor: 'pointer' }}
                  onClick={() => setActiveVideo(item)}
                >
                  <img
                    src={item.thumbnail}
                    alt={item.title}
                    style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                  />
                  <div className="video-play-overlay">
                    <div className="play-btn">▶</div>
                  </div>
                  <div style={{
                    position: 'absolute',
                    bottom: '10px',
                    right: '10px',
                    background: 'rgba(0,0,0,0.75)',
                    color: 'white',
                    padding: '0.2rem 0.5rem',
                    borderRadius: '4px',
                    fontSize: '0.75rem',
                    fontWeight: 600,
                  }}>
                    ⏱️ {item.duration}
                  </div>
                </div>
                <div className="video-info">
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.5rem' }}>
                    <span className="card-tag">{item.category}</span>
                    <span style={{ fontSize: '0.75rem', color: 'var(--text-muted)' }}>{item.date}</span>
                  </div>
                  <h3 style={{ fontSize: '1rem', lineHeight: '1.4', marginBottom: '0.5rem', color: 'var(--dark)' }}>
                    {item.title}
                  </h3>
                  <p style={{ fontSize: '0.85rem', color: 'var(--text-muted)', marginBottom: '1rem', lineHeight: '1.6' }}>
                    {item.description}
                  </p>
                  <div className="video-meta" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                    <span>👁️ {item.views}</span>
                    <button
                      onClick={() => setActiveVideo(item)}
                      className="btn btn-teal btn-sm"
                      style={{ padding: '0.35rem 0.85rem' }}
                    >
                      Tonton Sekarang ▶
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Modal Popup Video */}
      {activeVideo && (
        <div
          style={{
            position: 'fixed',
            inset: 0,
            background: 'rgba(0,0,0,0.85)',
            zIndex: 9999,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            padding: '1.5rem',
            backdropFilter: 'blur(5px)',
          }}
          onClick={() => setActiveVideo(null)}
        >
          <div
            style={{
              background: 'white',
              borderRadius: 'var(--radius-lg)',
              maxWidth: '850px',
              width: '100%',
              overflow: 'hidden',
              boxShadow: 'var(--shadow-xl)',
            }}
            onClick={(e) => e.stopPropagation()}
          >
            <div style={{ position: 'relative', aspectRatio: '16/9', background: '#000' }}>
              <iframe
                src={`https://www.youtube.com/embed/${activeVideo.youtubeId}?autoplay=1`}
                title={activeVideo.title}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                style={{ width: '100%', height: '100%', border: 'none' }}
              />
            </div>
            <div style={{ padding: '1.5rem' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', gap: '1rem', marginBottom: '0.75rem' }}>
                <h3 style={{ fontSize: '1.2rem', color: 'var(--dark)' }}>{activeVideo.title}</h3>
                <button
                  onClick={() => setActiveVideo(null)}
                  style={{
                    background: 'var(--gray-200)',
                    border: 'none',
                    borderRadius: '50%',
                    width: '32px',
                    height: '32px',
                    cursor: 'pointer',
                    fontSize: '1rem',
                    fontWeight: 700,
                  }}
                >
                  ✕
                </button>
              </div>
              <p style={{ fontSize: '0.9rem', color: 'var(--text-muted)', lineHeight: '1.6' }}>
                {activeVideo.description}
              </p>
              <div style={{ display: 'flex', gap: '1rem', marginTop: '1rem', fontSize: '0.8rem', color: 'var(--text-muted)' }}>
                <span>📁 {activeVideo.category}</span>
                <span>📅 {activeVideo.date}</span>
                <span>⏱️ {activeVideo.duration}</span>
                <span>👁️ {activeVideo.views}</span>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

