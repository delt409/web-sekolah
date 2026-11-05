import Link from 'next/link';

export interface JurusanData {
  slug: string;
  name: string;
  fullName: string;
  icon: string;
  bgClass: string;
  description: string;
  skills: string[];
  tagColor: string;
  image?: string;
}

interface JurusanCardProps {
  jurusan: JurusanData;
  compact?: boolean;
}

export default function JurusanCard({ jurusan, compact }: JurusanCardProps) {
  return (
    <div className="jurusan-card" style={{ borderTop: `4px solid ${jurusan.tagColor}` }}>
      {jurusan.image ? (
        <div style={{ position: 'relative', height: '180px', overflow: 'hidden' }}>
          <img
            src={jurusan.image}
            alt={jurusan.fullName}
            style={{ width: '100%', height: '100%', objectFit: 'cover' }}
          />
          <div style={{
            position: 'absolute',
            top: '12px',
            left: '12px',
            background: 'rgba(0,0,0,0.7)',
            backdropFilter: 'blur(4px)',
            color: 'white',
            padding: '0.25rem 0.75rem',
            borderRadius: 'var(--radius-full)',
            fontSize: '0.75rem',
            fontWeight: 700,
          }}>
            {jurusan.icon} {jurusan.name}
          </div>
        </div>
      ) : (
        <div className={`jurusan-card-header ${jurusan.bgClass}`}>
          <div className="jurusan-icon">{jurusan.icon}</div>
          <h3>{jurusan.name}</h3>
          <div className="jurusan-subtitle">{jurusan.fullName}</div>
        </div>
      )}

      <div className="jurusan-card-body">
        {jurusan.image && (
          <h3 style={{ fontSize: '1.15rem', color: 'var(--dark)', marginBottom: '0.4rem' }}>
            {jurusan.fullName}
          </h3>
        )}
        <p style={{ fontSize: '0.875rem', color: 'var(--text-muted)', lineHeight: '1.6', marginBottom: '1.25rem' }}>
          {jurusan.description}
        </p>

        {!compact && (
          <div className="jurusan-skills" style={{ marginBottom: '1.25rem' }}>
            {jurusan.skills.map((s) => (
              <span
                key={s}
                className="skill-tag"
                style={{
                  borderColor: jurusan.tagColor,
                  color: jurusan.tagColor,
                  background: `${jurusan.tagColor}15`,
                }}
              >
                {s}
              </span>
            ))}
          </div>
        )}

        <Link
          href={`/jurusan/${jurusan.slug}`}
          className="btn btn-teal btn-sm"
          style={{ width: '100%', justifyContent: 'center' }}
        >
          Lihat Profil Jurusan Lengkap →
        </Link>
      </div>
    </div>
  );
}
