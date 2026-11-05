import { NextRequest, NextResponse } from 'next/server';
import { isAdmin } from '../../../../lib/auth';
import { gas, validSection, getGasConfig, type Section } from '../../../../lib/data';
import { allSeedData } from '../../../../lib/seedData';

export async function POST(req: NextRequest) {
  if (!(await isAdmin())) {
    return NextResponse.json({ error: 'Tidak berwenang (Silakan login terlebih dahulu)' }, { status: 401 });
  }

  try {
    const { section, action, item } = await req.json();

    // Check if user requested connection status test
    if (action === 'status') {
      const cfg = getGasConfig();
      if (!cfg.isConfigured) {
        return NextResponse.json({
          ok: false,
          configured: false,
          message: 'GAS_WEB_APP_URL atau GAS_API_SECRET belum diisi di .env.local',
        });
      }

      // Try pinging Google Apps Script
      try {
        const res = await fetch(cfg.url, {
          method: 'POST',
          headers: { 'Content-Type': 'text/plain;charset=utf-8' },
          body: JSON.stringify({ secret: cfg.secret, action: 'ping' }),
          cache: 'no-store',
          redirect: 'follow',
        });
        const json = await res.json();
        return NextResponse.json({
          ok: json.ok,
          configured: true,
          url: cfg.url,
          message: json.ok ? 'Terhubung dengan Google Sheets!' : json.error,
        });
      } catch (e) {
        return NextResponse.json({
          ok: false,
          configured: true,
          url: cfg.url,
          message: e instanceof Error ? e.message : 'Gagal menghubungi Google Apps Script',
        });
      }
    }

    // Inisialisasi sheet otomatis & Seed All
    if (action === 'setup' || action === 'seed_all') {
      const cfg = getGasConfig();
      try {
        const res = await fetch(cfg.url, {
          method: 'POST',
          headers: { 'Content-Type': 'text/plain;charset=utf-8' },
          body: JSON.stringify({ secret: cfg.secret, action: 'setup' }),
          cache: 'no-store',
          redirect: 'follow',
        });
        const json = await res.json();
        return NextResponse.json(json);
      } catch (e) {
        return NextResponse.json({ ok: false, error: e instanceof Error ? e.message : 'Gagal setup sheet' }, { status: 500 });
      }
    }

    // Seed / Sync Data Website Default ke Google Sheets
    if (action === 'seed') {
      if (!validSection(section)) {
        return NextResponse.json({ error: `Section '${section}' tidak valid untuk disinkronkan` }, { status: 400 });
      }

      const seedList = allSeedData[section] || [];
      if (seedList.length === 0) {
        return NextResponse.json({ ok: true, count: 0, message: `Tidak ada data seed untuk ${section}` });
      }

      // Coba batch_save terlebih dahulu
      let batchSuccess = false;
      try {
        await gas(section as Section, 'batch_save', undefined, seedList);
        batchSuccess = true;
      } catch {
        batchSuccess = false;
      }

      // Jika batch_save gagal (misal Code.gs versi lama belum di-redeploy), simpan per-item
      let savedCount = seedList.length;
      if (!batchSuccess) {
        savedCount = 0;
        for (const it of seedList) {
          try {
            await gas(section as Section, 'save', it);
            savedCount++;
          } catch (err) {
            console.error(`Gagal menyimpan item ke ${section}:`, err);
          }
        }
      }

      const updated = await gas(section as Section, 'list');
      return NextResponse.json({
        ok: true,
        count: savedCount,
        section,
        data: updated,
        message: `${savedCount} data ${section} berhasil disimpan ke Google Sheets!`,
      });
    }

    // Standard CRUD actions
    if (!validSection(section) || !['list', 'save', 'delete'].includes(action)) {
      return NextResponse.json({ error: 'Permintaan tidak valid' }, { status: 400 });
    }

    if (action === 'save') {
      if (
        !item ||
        typeof item.title !== 'string' ||
        item.title.trim().length === 0 ||
        item.title.length > 500 ||
        typeof item.body !== 'string' ||
        item.body.length > 20000
      ) {
        return NextResponse.json({ error: 'Judul dan isi konten wajib diisi dengan benar' }, { status: 400 });
      }
    }

    const data = await gas(section as Section, action, item);
    return NextResponse.json({ ok: true, data });
  } catch (e) {
    return NextResponse.json(
      { error: e instanceof Error ? e.message : 'Server error' },
      { status: 500 }
    );
  }
}
