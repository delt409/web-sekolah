'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { allSeedData } from '../../lib/seedData';
import type { Section } from '../../lib/data';

type Entry = {
  id: string;
  title: string;
  body: string;
  date: string;
  image: string;
};

const sections = [
  { id: 'Berita', label: '📰 Berita Sekolah', desc: 'Artikel, kabar kegiatan, liputan prestasi' },
  { id: 'Pengumuman', label: '📢 Pengumuman', desc: 'Edaran resmi, libur, jadwal ujian, PPDB' },
  { id: 'Galeri', label: '📸 Galeri Foto', desc: 'Foto dokumentasi kegiatan dan fasilitas' },
  { id: 'Prestasi', label: '🏆 Galeri Prestasi', desc: 'Piala, medali LKS, kejuaraan regional/nasional' },
  { id: 'Ekskul', label: '⚡ Ekstrakulikuler', desc: 'OSIS, Pramuka, PMR, LKBB, dan ekskul lainnya' },
  { id: 'Kegiatan', label: '🗓️ Jadwal Kegiatan', desc: 'Agenda bulanan dan kalender akademik' },
  { id: 'Video', label: '▶ Video Kegiatan', desc: 'Link YouTube / video dokumentasi sekolah' },
  { id: 'Profil', label: '🏫 Profil Sekolah', desc: 'Informasi sekolah, sejarah, visi misi' },
  { id: 'Guru', label: '👨‍🏫 Guru & Tendik', desc: 'Daftar guru pengajar dan staf kependidikan' },
];

export default function Dashboard({ loggedIn }: { loggedIn: boolean }) {
  const [logged, setLogged] = useState(loggedIn);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [section, setSection] = useState('Berita');
  const [items, setItems] = useState<Entry[]>([]);
  const [item, setItem] = useState<Partial<Entry>>({ title: '', body: '', image: '', date: '' });
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');
  const [busy, setBusy] = useState(false);
  const [connectionStatus, setConnectionStatus] = useState<string | null>(null);
  const [isSeeding, setIsSeeding] = useState(false);
  const [seedProgress, setSeedProgress] = useState<{ title: string; percent: number; message: string } | null>(null);

  // Cek status koneksi Google Sheets saat load
  useEffect(() => {
    if (logged) {
      checkStatus();
      loadItems(section);
    }
  }, [logged]);

  async function checkStatus() {
    try {
      const res = await fetch('/api/admin/items', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ action: 'status' }),
      });
      const data = await res.json();
      if (data.ok) {
        setConnectionStatus('✅ Terhubung ke Google Sheets via Apps Script');
      } else {
        setConnectionStatus(`⚠️ Status: ${data.message || 'Belum terhubung'}`);
      }
    } catch {
      setConnectionStatus('⚠️ Belum dapat mengecek status Google Apps Script');
    }
  }

  async function handleSetupSheets() {
    setBusy(true);
    setError('');
    setSuccess('');
    try {
      const res = await fetch('/api/admin/items', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ action: 'setup' }),
      });
      const data = await res.json();
      if (data.ok) {
        setSuccess('Semua tab sheet (Berita, Galeri, Prestasi, Ekskul, dll) berhasil dibuat di Google Spreadsheet!');
        loadItems(section);
      } else {
        setError(data.error || 'Gagal inisialisasi sheet');
      }
    } catch (e) {
      setError(e instanceof Error ? e.message : 'Gagal menghubungi server');
    } finally {
      setBusy(false);
    }
  }

  // Sinkronisasi data bawaan untuk 1 seksi saja
  async function handleSeedSection(targetSection: string) {
    setIsSeeding(true);
    setError('');
    setSuccess('');
    try {
      const seedList = allSeedData[targetSection as Section] || [];
      if (seedList.length === 0) {
        setSuccess(`Tidak ada data bawaan untuk seksi ${targetSection}`);
        setIsSeeding(false);
        return;
      }

      // Ambil data yang sudah ada di sheet saat ini
      let existingTitles: string[] = [];
      try {
        const checkRes = await fetch('/api/admin/items', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ section: targetSection, action: 'list' }),
        });
        const checkJson = await checkRes.json();
        if (checkJson.ok && Array.isArray(checkJson.data)) {
          existingTitles = checkJson.data.map((x: Entry) => (x.title || '').trim().toLowerCase());
        }
      } catch {
        existingTitles = [];
      }

      let count = 0;
      for (let i = 0; i < seedList.length; i++) {
        const itemToSave = seedList[i];
        const titleLower = (itemToSave.title || '').trim().toLowerCase();
        if (existingTitles.includes(titleLower)) continue;

        setSeedProgress({
          title: `Menyimpan data ${targetSection} (${i + 1}/${seedList.length})`,
          percent: Math.round(((i + 1) / seedList.length) * 100),
          message: `Menyimpan: "${itemToSave.title?.slice(0, 45)}..." ke Google Sheets`,
        });

        await fetch('/api/admin/items', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ section: targetSection, action: 'save', item: itemToSave }),
        });
        count++;
      }

      setSuccess(`✅ ${count} data ${targetSection} berhasil disimpan ke Google Sheets!`);
      loadItems(targetSection);
      setTimeout(() => setSeedProgress(null), 4000);
    } catch (e) {
      setError(e instanceof Error ? e.message : 'Gagal sinkronisasi data');
      setSeedProgress(null);
    } finally {
      setIsSeeding(false);
    }
  }

  // Sinkronisasi seluruh 9 kategori secara nyata baris per baris ke Google Sheets
  async function handleSeedAll() {
    if (!confirm('Simpan seluruh data bawaan website (Berita, Galeri, Prestasi, Ekskul, Jadwal, Video, dll) ke Google Spreadsheet? Data yang sudah Anda buat tidak akan terhapus.')) {
      return;
    }
    setIsSeeding(true);
    setError('');
    setSuccess('');

    try {
      // Hitung total item
      let totalItems = 0;
      sections.forEach((s) => {
        const list = allSeedData[s.id as Section] || [];
        totalItems += list.length;
      });

      let currentCount = 0;
      let insertedCount = 0;

      for (let i = 0; i < sections.length; i++) {
        const sec = sections[i];
        const seedList = allSeedData[sec.id as Section] || [];

        // Ambil data yang sudah ada di sheet ini
        let existingTitles: string[] = [];
        try {
          const checkRes = await fetch('/api/admin/items', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ section: sec.id, action: 'list' }),
          });
          const checkJson = await checkRes.json();
          if (checkJson.ok && Array.isArray(checkJson.data)) {
            existingTitles = checkJson.data.map((x: Entry) => (x.title || '').trim().toLowerCase());
          }
        } catch {
          existingTitles = [];
        }

        // Simpan setiap item yang belum ada ke Google Sheets via action: 'save'
        for (const itemToSave of seedList) {
          currentCount++;
          const pct = Math.round((currentCount / totalItems) * 100);

          setSeedProgress({
            title: `Menyimpan data (${currentCount}/${totalItems})`,
            percent: pct,
            message: `[${sec.id}] Menyimpan: "${itemToSave.title?.slice(0, 45)}..." ke Spreadsheet`,
          });

          // Lewati jika sudah ada (misal data yang sudah diinput user)
          const titleLower = (itemToSave.title || '').trim().toLowerCase();
          if (existingTitles.includes(titleLower)) {
            continue;
          }

          try {
            await fetch('/api/admin/items', {
              method: 'POST',
              headers: { 'Content-Type': 'application/json' },
              body: JSON.stringify({
                section: sec.id,
                action: 'save',
                item: itemToSave,
              }),
            });
            insertedCount++;
          } catch (err) {
            console.error(`Gagal menyimpan ${itemToSave.title}:`, err);
          }
        }
      }

      setSeedProgress({
        title: '🎉 Sinkronisasi Selesai!',
        percent: 100,
        message: `${insertedCount} data website berhasil tersimpan di Google Spreadsheet!`,
      });
      setSuccess(`🎉 Berhasil! Sebanyak ${insertedCount} data website telah masuk ke tab Google Spreadsheet.`);
      loadItems(section);
      setTimeout(() => setSeedProgress(null), 6000);
    } catch (e) {
      setError(e instanceof Error ? e.message : 'Terjadi gangguan saat sinkronisasi');
      setSeedProgress(null);
    } finally {
      setIsSeeding(false);
    }
  }

  async function loadItems(sec = section) {
    setBusy(true);
    setError('');
    try {
      const r = await fetch('/api/admin/items', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ section: sec, action: 'list' }),
      });
      const j = await r.json();
      if (!r.ok) throw new Error(j.error || 'Gagal memuat data');
      setItems(j.data || []);
    } catch (e) {
      setError(e instanceof Error ? e.message : 'Kesalahan jaringan');
    } finally {
      setBusy(false);
    }
  }

  async function handleSave(e: React.FormEvent) {
    e.preventDefault();
    setBusy(true);
    setError('');
    setSuccess('');
    try {
      const r = await fetch('/api/admin/items', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ section, action: 'save', item }),
      });
      const j = await r.json();
      if (!r.ok) throw new Error(j.error || 'Gagal menyimpan data ke Google Sheets');
      setItems(j.data || []);
      setItem({ title: '', body: '', image: '', date: '' });
      setSuccess(`Data ${section} berhasil disimpan ke Google Sheets!`);
      setTimeout(() => setSuccess(''), 4000);
    } catch (e) {
      setError(e instanceof Error ? e.message : 'Gagal menyimpan data');
    } finally {
      setBusy(false);
    }
  }

  async function handleDelete(delId: string) {
    if (!confirm('Yakin ingin menghapus data ini dari Google Sheets?')) return;
    setBusy(true);
    setError('');
    try {
      const r = await fetch('/api/admin/items', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ section, action: 'delete', item: { id: delId } }),
      });
      const j = await r.json();
      if (!r.ok) throw new Error(j.error || 'Gagal menghapus');
      setItems(j.data || []);
      setSuccess('Data berhasil dihapus dari Google Sheets.');
      setTimeout(() => setSuccess(''), 3000);
    } catch (e) {
      setError(e instanceof Error ? e.message : 'Gagal menghapus data');
    } finally {
      setBusy(false);
    }
  }

  async function login(e: React.FormEvent) {
    e.preventDefault();
    setError('');
    try {
      const r = await fetch('/api/admin/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, password }),
      });
      if (r.ok) {
        setLogged(true);
        setPassword('');
      } else {
        const j = await r.json();
        setError(j.error || 'Email atau password salah');
      }
    } catch {
      setError('Gagal login ke server');
    }
  }

  async function logout() {
    await fetch('/api/admin/logout', { method: 'POST' });
    setLogged(false);
  }

  // ===== TAMPILAN LOGIN =====
  if (!logged) {
    return (
      <section className="panel" style={{ maxWidth: '460px', margin: '80px auto' }}>
        <div style={{ textAlign: 'center', marginBottom: '1.5rem' }}>
          <div style={{ fontSize: '3rem', marginBottom: '0.5rem' }}>🔐</div>
          <h1 style={{ fontSize: '1.75rem', color: 'var(--dark)' }}>CMS Admin Login</h1>
          <p style={{ fontSize: '0.9rem', color: 'var(--text-muted)' }}>
            Kelola data dinamis website SMKN 3 Kendari via Google Sheets
          </p>
        </div>

        <form onSubmit={login}>
          <label style={{ display: 'block', marginBottom: '0.4rem', fontWeight: 600 }}>Email Admin</label>
          <input
            type="email"
            required
            placeholder="admin@smkn3kendari.sch.id"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />

          <label style={{ display: 'block', marginBottom: '0.4rem', fontWeight: 600, marginTop: '1rem' }}>Password</label>
          <input
            type="password"
            required
            placeholder="••••••••"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />

          <button
            type="submit"
            className="btn btn-teal"
            style={{ width: '100%', justifyContent: 'center', marginTop: '1.25rem', padding: '0.85rem' }}
          >
            Masuk ke Dashboard CMS →
          </button>
        </form>

        {error && (
          <div className="alert alert-warning" style={{ marginTop: '1rem', background: '#fee2e2', color: '#b91c1c' }}>
            <span>⚠️</span> <div>{error}</div>
          </div>
        )}

        <div style={{ marginTop: '1.75rem', padding: '1rem', background: 'var(--gray-100)', borderRadius: 'var(--radius)', fontSize: '0.8rem', color: 'var(--text-muted)' }}>
          <strong>ℹ️ Kredensial Default di .env.local:</strong><br />
          Email: <code>admin@smkn3kendari.sch.id</code><br />
          Password: <code>admin123</code>
        </div>
      </section>
    );
  }

  // ===== TAMPILAN DASHBOARD CMS ADMIN =====
  const currentSecInfo = sections.find((s) => s.id === section);

  return (
    <section className="panel" style={{ maxWidth: '1050px', margin: '60px auto' }}>
      {/* Header Admin */}
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '1rem', paddingBottom: '1.25rem', borderBottom: '1px solid var(--border)' }}>
        <div>
          <h1 style={{ fontSize: '1.6rem', color: 'var(--dark)', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
            <span>⚙️</span> CMS Admin SMKN 3 Kendari
          </h1>
          <div style={{ fontSize: '0.85rem', color: 'var(--text-muted)' }}>
            Database terhubung langsung dengan Google Sheets Spreadsheet
          </div>
        </div>
        <div style={{ display: 'flex', gap: '0.75rem', alignItems: 'center' }}>
          <Link href="/" className="btn btn-outline btn-sm" style={{ color: 'var(--primary)', borderColor: 'var(--primary)' }}>
            🌐 Lihat Website
          </Link>
          <button onClick={logout} className="btn btn-sm" style={{ background: '#ef4444', color: 'white' }}>
            Keluar ✕
          </button>
        </div>
      </div>

      {/* Google Sheets Status Banner */}
      <div style={{
        marginTop: '1.25rem',
        padding: '0.85rem 1.25rem',
        background: connectionStatus?.includes('✅') ? 'rgba(13,115,119,0.1)' : 'rgba(243,156,18,0.15)',
        borderRadius: 'var(--radius)',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        flexWrap: 'wrap',
        gap: '0.75rem',
        fontSize: '0.85rem',
      }}>
        <div>
          <strong>Status Google Apps Script:</strong> {connectionStatus || 'Memeriksa...'}
        </div>
        <div style={{ display: 'flex', gap: '0.5rem', flexWrap: 'wrap' }}>
          <button
            onClick={checkStatus}
            className="btn btn-sm"
            style={{ background: 'white', border: '1px solid var(--border)', color: 'var(--dark)', padding: '0.35rem 0.75rem' }}
          >
            🔄 Tes Koneksi
          </button>
          <button
            onClick={handleSetupSheets}
            disabled={busy || isSeeding}
            className="btn btn-sm btn-teal"
            style={{ padding: '0.35rem 0.75rem' }}
            title="Buat seluruh 9 tab sheet di spreadsheet"
          >
            ⚡ Inisialisasi Sheet Tab
          </button>
          <button
            onClick={handleSeedAll}
            disabled={busy || isSeeding}
            className="btn btn-sm btn-gold"
            style={{ padding: '0.35rem 0.85rem', fontWeight: 700 }}
            title="Salin semua data berita, galeri, prestasi, ekskul, dll ke Google Sheets"
          >
            {isSeeding ? '⏳ Menyimpan...' : '📥 Simpan Semua Data Web ke Google Sheets'}
          </button>
        </div>
      </div>

      {/* Progress Bar Sinkronisasi */}
      {seedProgress && (
        <div style={{
          marginTop: '1rem',
          padding: '1.25rem',
          background: 'white',
          border: '2px solid var(--primary)',
          borderRadius: 'var(--radius)',
          boxShadow: 'var(--shadow-md)',
        }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '0.6rem' }}>
            <strong style={{ color: 'var(--dark)', fontSize: '0.95rem' }}>{seedProgress.title}</strong>
            <span style={{ fontWeight: 800, color: 'var(--primary)', fontSize: '1.1rem' }}>{seedProgress.percent}%</span>
          </div>
          <div style={{ width: '100%', height: '12px', background: 'var(--gray-200)', borderRadius: '999px', overflow: 'hidden' }}>
            <div
              style={{
                width: `${seedProgress.percent}%`,
                height: '100%',
                background: 'linear-gradient(90deg, var(--primary), var(--accent-gold))',
                transition: 'width 0.4s ease',
              }}
            />
          </div>
          <p style={{ margin: '0.6rem 0 0', fontSize: '0.85rem', color: 'var(--text-muted)' }}>
            {seedProgress.message}
          </p>
        </div>
      )}

      {/* Navigasi Tab Seksi */}
      <div style={{ marginTop: '1.75rem', marginBottom: '1.5rem' }}>
        <label style={{ fontSize: '0.85rem', fontWeight: 700, color: 'var(--dark)', marginBottom: '0.6rem', display: 'block' }}>
          PILIH KATEGORI KONTEN:
        </label>
        <div style={{ display: 'flex', gap: '0.5rem', flexWrap: 'wrap' }}>
          {sections.map((s) => (
            <button
              key={s.id}
              onClick={() => {
                setSection(s.id);
                setItem({ title: '', body: '', image: '', date: '' });
                loadItems(s.id);
              }}
              style={{
                padding: '0.5rem 0.9rem',
                borderRadius: 'var(--radius-sm)',
                border: section === s.id ? '2px solid var(--primary)' : '1px solid var(--border)',
                background: section === s.id ? 'var(--primary)' : 'white',
                color: section === s.id ? 'white' : 'var(--dark)',
                fontWeight: section === s.id ? 700 : 500,
                fontSize: '0.85rem',
                cursor: 'pointer',
                transition: 'var(--transition)',
              }}
            >
              {s.label}
            </button>
          ))}
        </div>
        {currentSecInfo && (
          <p style={{ fontSize: '0.8rem', color: 'var(--text-muted)', marginTop: '0.5rem' }}>
            ℹ️ {currentSecInfo.desc}
          </p>
        )}
      </div>

      {/* Form Tambah / Edit */}
      <div style={{
        background: 'var(--light)',
        border: '1px solid var(--border)',
        borderRadius: 'var(--radius-lg)',
        padding: '1.75rem',
        marginBottom: '2rem',
      }}>
        <h2 style={{ fontSize: '1.25rem', color: 'var(--dark)', marginBottom: '1.25rem' }}>
          {item.id ? '✏️ Edit Data' : '➕ Tambah Data Baru'} di Seksi: <span style={{ color: 'var(--primary)' }}>{section}</span>
        </h2>

        <form onSubmit={handleSave}>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '1rem' }}>
            <div>
              <label style={{ display: 'block', marginBottom: '0.35rem', fontWeight: 600, fontSize: '0.85rem' }}>
                Judul / Nama Agenda / Nama Siswa *
              </label>
              <input
                required
                maxLength={180}
                placeholder="Contoh: Juara 1 Lomba Memasak / Pembagian Rapor"
                value={item.title || ''}
                onChange={(e) => setItem({ ...item, title: e.target.value })}
              />
            </div>

            <div>
              <label style={{ display: 'block', marginBottom: '0.35rem', fontWeight: 600, fontSize: '0.85rem' }}>
                Tanggal (Opsional)
              </label>
              <input
                type="text"
                placeholder="Contoh: 2024-11-15 atau 15 November 2024"
                value={item.date || ''}
                onChange={(e) => setItem({ ...item, date: e.target.value })}
              />
            </div>
          </div>

          <label style={{ display: 'block', marginBottom: '0.35rem', fontWeight: 600, fontSize: '0.85rem' }}>
            Deskripsi Lengkap / Isi Berita / Keterangan *
          </label>
          <textarea
            required
            rows={5}
            placeholder="Tuliskan keterangan detail di sini..."
            value={item.body || ''}
            onChange={(e) => setItem({ ...item, body: e.target.value })}
          />

          <label style={{ display: 'block', marginBottom: '0.35rem', fontWeight: 600, fontSize: '0.85rem' }}>
            URL Foto Gambar / Link YouTube (Opsional)
          </label>
          <input
            type="url"
            placeholder="https://images.unsplash.com/... atau https://youtube.com/..."
            value={item.image || ''}
            onChange={(e) => setItem({ ...item, image: e.target.value })}
          />

          {item.image && (
            <div style={{ marginBottom: '1rem' }}>
              <span style={{ fontSize: '0.75rem', color: 'var(--text-muted)' }}>Preview Gambar:</span>
              <img
                src={item.image}
                alt="Preview"
                style={{ width: '100px', height: '60px', objectFit: 'cover', borderRadius: '4px', marginTop: '4px' }}
                onError={(e) => { (e.target as HTMLElement).style.display = 'none'; }}
              />
            </div>
          )}

          <div style={{ display: 'flex', gap: '0.75rem', marginTop: '1rem', flexWrap: 'wrap' }}>
            <button
              type="submit"
              disabled={busy}
              className="btn btn-teal"
              style={{ padding: '0.65rem 1.5rem' }}
            >
              {busy ? '⏳ Menyimpan ke Google Sheets...' : item.id ? '💾 Simpan Perubahan' : '➕ Tambah ke Google Sheets'}
            </button>

            {item.id && (
              <button
                type="button"
                onClick={() => setItem({ title: '', body: '', image: '', date: '' })}
                className="btn btn-outline"
                style={{ color: 'var(--dark)', borderColor: 'var(--border)' }}
              >
                Batal Edit
              </button>
            )}

            <button
              type="button"
              disabled={busy || isSeeding}
              onClick={() => handleSeedSection(section)}
              className="btn btn-outline"
              style={{ color: 'var(--accent-gold, #f39c12)', borderColor: 'var(--accent-gold, #f39c12)' }}
              title={`Isi sheet ${section} dengan data bawaan website`}
            >
              📥 Isi Data Bawaan {section}
            </button>

            <button
              type="button"
              disabled={busy || isSeeding}
              onClick={() => loadItems(section)}
              className="btn btn-outline"
              style={{ color: 'var(--primary)', borderColor: 'var(--primary)', marginLeft: 'auto' }}
            >
              🔄 Refresh Data Sheet
            </button>
          </div>
        </form>

        {error && (
          <div className="alert alert-warning" style={{ marginTop: '1rem', background: '#fee2e2', color: '#b91c1c' }}>
            <span>⚠️</span> <div>{error}</div>
          </div>
        )}

        {success && (
          <div className="alert alert-info" style={{ marginTop: '1rem', background: '#dcfce7', color: '#15803d' }}>
            <span>✅</span> <div>{success}</div>
          </div>
        )}
      </div>

      {/* Daftar Data di Google Sheets */}
      <div>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1rem', flexWrap: 'wrap', gap: '0.5rem' }}>
          <h2 style={{ fontSize: '1.25rem', color: 'var(--dark)' }}>
            Daftar Konten di Sheet: <strong>{section}</strong> ({items.length} item)
          </h2>
          <div style={{ fontSize: '0.85rem', color: 'var(--text-muted)' }}>
            Data tersimpan permanen di tab sheet <code>{section}</code>
          </div>
        </div>

        {busy && <p style={{ color: 'var(--text-muted)', fontSize: '0.9rem' }}>⏳ Sedang memuat data dari Google Sheets...</p>}

        {!busy && items.length === 0 ? (
          <div style={{ textAlign: 'center', padding: '3rem 1.5rem', background: 'var(--gray-100)', borderRadius: 'var(--radius)' }}>
            <div style={{ fontSize: '2.5rem', marginBottom: '0.5rem' }}>📭</div>
            <p style={{ color: 'var(--text-muted)', maxWidth: '520px', margin: '0 auto 1.25rem' }}>
              Belum ada data di tab sheet <strong>{section}</strong> Google Spreadsheet Anda. Gunakan form di atas untuk menambah data baru, atau isi otomatis dengan data bawaan website:
            </p>
            <div style={{ display: 'flex', gap: '0.75rem', justifyContent: 'center', flexWrap: 'wrap' }}>
              <button
                type="button"
                onClick={() => handleSeedSection(section)}
                disabled={busy || isSeeding}
                className="btn btn-teal btn-sm"
              >
                📥 Isi Data Bawaan {section} Sekarang
              </button>
              <button
                type="button"
                onClick={handleSeedAll}
                disabled={busy || isSeeding}
                className="btn btn-gold btn-sm"
              >
                ⚡ Simpan Semua Data Web Sekaligus (9 Kategori)
              </button>
            </div>
          </div>
        ) : (
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))', gap: '1.25rem' }}>
            {items.map((x) => (
              <div
                key={x.id}
                className="card"
                style={{
                  padding: '1.25rem',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'space-between',
                  borderTop: '3px solid var(--primary)',
                }}
              >
                <div>
                  {x.image && (
                    <img
                      src={x.image}
                      alt={x.title}
                      style={{ width: '100%', height: '140px', objectFit: 'cover', borderRadius: '6px', marginBottom: '0.75rem' }}
                      onError={(e) => { (e.target as HTMLElement).style.display = 'none'; }}
                    />
                  )}
                  <div style={{ fontSize: '0.75rem', color: 'var(--text-muted)', marginBottom: '0.3rem' }}>
                    📅 {x.date || 'Tanpa tanggal'}
                  </div>
                  <h3 style={{ fontSize: '1.05rem', color: 'var(--dark)', marginBottom: '0.5rem', lineHeight: '1.3' }}>
                    {x.title}
                  </h3>
                  <p style={{ fontSize: '0.85rem', color: 'var(--text-muted)', lineHeight: '1.5', marginBottom: '1rem' }}>
                    {x.body.slice(0, 160)}{x.body.length > 160 ? '...' : ''}
                  </p>
                </div>

                <div style={{ display: 'flex', gap: '0.5rem', borderTop: '1px solid var(--border)', paddingTop: '0.75rem' }}>
                  <button
                    onClick={() => {
                      setItem(x);
                      window.scrollTo({ top: 120, behavior: 'smooth' });
                    }}
                    className="btn btn-outline btn-sm"
                    style={{ flex: 1, justifyContent: 'center', borderColor: 'var(--primary)', color: 'var(--primary)' }}
                  >
                    ✏️ Edit
                  </button>
                  <button
                    disabled={busy}
                    onClick={() => handleDelete(x.id)}
                    className="btn btn-sm"
                    style={{ background: '#fee2e2', color: '#b91c1c', border: '1px solid #fca5a5' }}
                  >
                    🗑️ Hapus
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
