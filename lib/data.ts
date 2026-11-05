export type Entry = {
  id: string;
  title: string;
  body: string;
  date: string;
  image: string;
};

const allowed = [
  'Profil',
  'Berita',
  'Pengumuman',
  'Guru',
  'Galeri',
  'Prestasi',
  'Ekskul',
  'Kegiatan',
  'Video',
  'Jurusan',
  'Statistik',
  'Setting',
] as const;

export type Section = (typeof allowed)[number];

export function validSection(v: string): v is Section {
  return (allowed as readonly string[]).includes(v);
}

const DEFAULT_GAS_URL = 'https://script.google.com/macros/s/AKfycbxhTHKZwgEwniZdqGcD7ae_PWBBleOMkgmkUqHzwH6QquYvC1ut_RjstqiKWa7WsB8x/exec';
const DEFAULT_GAS_SECRET = 'b2c4cf414b91f062212d5a5c18c38a25c18e626b593eeb5d65e7711935454a433cc5dda77c30be44e2276e8a8dd06fa2';

/** Mengambil konfigurasi GAS dengan fallback jika salah satu format ENV digunakan */
export function getGasConfig() {
  let url = process.env.GAS_WEB_APP_URL || process.env.GOOGLE_SCRIPT_URL || DEFAULT_GAS_URL;
  if (url.includes('REPLACE') || !url) {
    url = process.env.GOOGLE_SCRIPT_URL || DEFAULT_GAS_URL;
  }

  let secret = process.env.GAS_API_SECRET || process.env.API_SECRET || DEFAULT_GAS_SECRET;
  if (secret === 'replace-with-long-random-secret' || !secret) {
    secret = process.env.API_SECRET || DEFAULT_GAS_SECRET;
  }

  secret = secret.trim();
  if (secret.startsWith('API_SECRET=')) {
    secret = secret.substring('API_SECRET='.length).trim();
  }
  // Hapus tanda kutip jika ada
  secret = secret.replace(/^["']|["']$/g, '');

  return {
    url: url.trim(),
    secret: secret,
    isConfigured: Boolean(url && !url.includes('REPLACE') && secret && secret !== 'replace-with-long-random-secret'),
  };
}

/** Panggilan utama ke Google Apps Script backend */
export async function gas(
  section: Section,
  action: 'list' | 'save' | 'batch_save' | 'delete' = 'list',
  item?: Partial<Entry> & { id?: string },
  items?: Partial<Entry>[]
): Promise<Entry[]> {
  const { url, secret, isConfigured } = getGasConfig();

  if (!isConfigured) {
    throw new Error('Google Apps Script belum dikonfigurasi di .env.local');
  }

  const res = await fetch(url, {
    method: 'POST',
    headers: {
      'Content-Type': 'text/plain;charset=utf-8',
    },
    body: JSON.stringify({
      secret,
      section,
      action,
      item,
      items,
    }),
    cache: 'no-store',
    redirect: 'follow',
  });

  if (!res.ok) {
    throw new Error(`Gagal menghubungi Google Apps Script (HTTP ${res.status})`);
  }

  const result = await res.json();
  if (!result.ok) {
    throw new Error(result.error || 'Kesalahan data dari Google Apps Script');
  }

  return (result.data || []) as Entry[];
}

/** Fungsi aman untuk memuat data tanpa throw error jika Sheet belum ada isi */
export async function loadSectionSafe(section: Section): Promise<Entry[]> {
  try {
    return await gas(section, 'list');
  } catch (err) {
    // Diam-diam fallback ke data statis jika belum ada koneksi / data kosong
    return [];
  }
}
