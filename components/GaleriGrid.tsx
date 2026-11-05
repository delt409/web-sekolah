'use client';

import { useState } from 'react';

export interface GaleriItem {
  id: string;
  title: string;
  category: string;
  image: string;
  date: string;
  location?: string;
  caption?: string;
}

interface GaleriGridProps {
  items: GaleriItem[];
  showFilter?: boolean;
}

const categories = [
  'Semua',
  'Praktik Kejuruan',
  'Ekskul (OSIS, Pramuka, PMR, LKBB)',
  'Prestasi & LKS',
  'Fasilitas & Lingkungan',
  'Upacara & Seremoni',
];

export default function GaleriGrid({ items, showFilter = true }: GaleriGridProps) {
  const [activeFilter, setActiveFilter] = useState('Semua');
  const [selectedImage, setSelectedImage] = useState<GaleriItem | null>(null);

  const filtered = activeFilter === 'Semua'
    ? items
    : items.filter((i) => i.category.toLowerCase().includes(activeFilter.toLowerCase().slice(0, 7)));

  return (
    <div>
      {showFilter && (
        <div className="galeri-filter">
          {categories.map((cat) => (
            <button
              key={cat}
              className={`filter-btn${activeFilter === cat ? ' active' : ''}`}
              onClick={() => setActiveFilter(cat)}
            >
              {cat}
            </button>
          ))}
        </div>
      )}

      <div className="galeri-grid">
        {filtered.map((item) => (
          <div
            key={item.id}
            className="galeri-item"
            onClick={() => setSelectedImage(item)}
            style={{ position: 'relative', overflow: 'hidden', cursor: 'pointer', borderRadius: 'var(--radius)' }}
          >
            <img
              src={item.image}
              alt={item.title}
              style={{
                width: '100%',
                height: '100%',
                objectFit: 'cover',
                transition: 'transform 0.5s ease',
              }}
            />
            <div className="galeri-overlay" style={{
              position: 'absolute',
              inset: 0,
              background: 'linear-gradient(to top, rgba(0,0,0,0.85) 0%, rgba(0,0,0,0.2) 60%, transparent 100%)',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'flex-end',
              padding: '1.25rem',
              color: 'white',
            }}>
              <span style={{
                background: 'rgba(255,255,255,0.25)',
                backdropFilter: 'blur(5px)',
                padding: '0.2rem 0.6rem',
                borderRadius: 'var(--radius-full)',
                fontSize: '0.7rem',
                fontWeight: 600,
                alignSelf: 'flex-start',
                marginBottom: '0.4rem',
              }}>
                {item.category}
              </span>
              <div className="galeri-caption" style={{ fontWeight: 700, fontSize: '0.95rem', lineHeight: '1.3' }}>
                📸 {item.title}
              </div>
              <div style={{ fontSize: '0.75rem', opacity: 0.8, marginTop: '0.25rem' }}>
                📅 {item.date} {item.location ? `• 📍 ${item.location}` : ''}
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Lightbox / Modal */}
      {selectedImage && (
        <div
          style={{
            position: 'fixed',
            inset: 0,
            background: 'rgba(0,0,0,0.92)',
            zIndex: 99999,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            padding: '1.5rem',
            backdropFilter: 'blur(8px)',
          }}
          onClick={() => setSelectedImage(null)}
        >
          <div
            style={{
              position: 'relative',
              maxWidth: '900px',
              width: '100%',
              background: '#1a1a2e',
              borderRadius: 'var(--radius-lg)',
              overflow: 'hidden',
              boxShadow: 'var(--shadow-xl)',
            }}
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setSelectedImage(null)}
              style={{
                position: 'absolute',
                top: '15px',
                right: '15px',
                background: 'rgba(255,255,255,0.8)',
                border: 'none',
                borderRadius: '50%',
                width: '38px',
                height: '38px',
                cursor: 'pointer',
                fontWeight: 900,
                fontSize: '1.2rem',
                zIndex: 10,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
              }}
            >
              ✕
            </button>
            <div style={{ maxHeight: '65vh', background: '#000', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <img
                src={selectedImage.image}
                alt={selectedImage.title}
                style={{ width: '100%', maxHeight: '65vh', objectFit: 'contain' }}
              />
            </div>
            <div style={{ padding: '1.5rem 2rem', color: 'white' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '0.5rem', flexWrap: 'wrap' }}>
                <span className="card-tag" style={{ background: 'var(--primary)', color: 'white' }}>
                  {selectedImage.category}
                </span>
                <span style={{ fontSize: '0.8rem', opacity: 0.7 }}>📅 {selectedImage.date}</span>
                {selectedImage.location && (
                  <span style={{ fontSize: '0.8rem', opacity: 0.7 }}>📍 {selectedImage.location}</span>
                )}
              </div>
              <h3 style={{ fontSize: '1.3rem', color: 'white', marginBottom: '0.5rem' }}>
                {selectedImage.title}
              </h3>
              <p style={{ fontSize: '0.9rem', color: 'rgba(255,255,255,0.8)', lineHeight: '1.6' }}>
                {selectedImage.caption || 'Dokumentasi resmi kegiatan civitas akademika SMK Negeri 3 Kendari.'}
              </p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
