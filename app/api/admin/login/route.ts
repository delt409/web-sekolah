import { NextRequest, NextResponse } from 'next/server';
import { checkPassword, createSession } from '../../../../lib/auth';

export async function POST(req: NextRequest) {
  try {
    const { email, password } = await req.json();
    const expectedEmail = (process.env.ADMIN_EMAIL || 'admin@smkn3kendari.sch.id').trim().toLowerCase();
    const inputEmail = String(email || '').trim().toLowerCase();

    const good =
      inputEmail === expectedEmail &&
      checkPassword(String(password || ''), process.env.ADMIN_PASSWORD_HASH || '');

    if (!good) {
      return NextResponse.json({ error: 'Email atau password salah' }, { status: 401 });
    }

    if (!process.env.SESSION_SECRET || process.env.SESSION_SECRET.length < 32) {
      return NextResponse.json({ error: 'SESSION_SECRET belum dikonfigurasi' }, { status: 500 });
    }

    const r = NextResponse.json({ ok: true });
    r.cookies.set('smkn_session', await createSession(), {
      httpOnly: true,
      secure: process.env.NODE_ENV === 'production',
      sameSite: 'strict',
      path: '/',
      maxAge: 8 * 3600,
    });
    return r;
  } catch (err) {
    return NextResponse.json({ error: 'Kesalahan server' }, { status: 500 });
  }
}

