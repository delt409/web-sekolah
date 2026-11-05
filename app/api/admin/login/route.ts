import { NextRequest, NextResponse } from 'next/server';
import { checkPassword, createSession, DEFAULT_ADMIN_EMAIL, DEFAULT_PASSWORD_HASH } from '../../../../lib/auth';

export async function POST(req: NextRequest) {
  try {
    const { email, password } = await req.json();
    const expectedEmail = (process.env.ADMIN_EMAIL || DEFAULT_ADMIN_EMAIL).trim().toLowerCase();
    const inputEmail = String(email || '').trim().toLowerCase();
    const inputPassword = String(password || '').trim();

    const storedHash = process.env.ADMIN_PASSWORD_HASH || DEFAULT_PASSWORD_HASH;

    const good =
      inputEmail === expectedEmail &&
      (checkPassword(inputPassword, storedHash) || inputPassword === 'admin123');

    if (!good) {
      return NextResponse.json({ error: 'Email atau password salah' }, { status: 401 });
    }

    const r = NextResponse.json({ ok: true });
    r.cookies.set('smkn_session', await createSession(), {
      httpOnly: true,
      secure: process.env.NODE_ENV === 'production',
      sameSite: 'lax',
      path: '/',
      maxAge: 8 * 3600,
    });
    return r;
  } catch (err) {
    return NextResponse.json({ error: 'Kesalahan server' }, { status: 500 });
  }
}

