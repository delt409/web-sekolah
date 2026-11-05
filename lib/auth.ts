import { SignJWT, jwtVerify } from 'jose';
import { cookies } from 'next/headers';
import { scryptSync, timingSafeEqual, randomBytes } from 'node:crypto';

export const DEFAULT_SESSION_SECRET = 'c069f34a95da0190a9cf3911571c4e626d61becfab409c40458a8cdce0b1dee73a1a96e50ddd7bb332077ce8706b6426';
export const DEFAULT_PASSWORD_HASH = '90c871b43168257b5c7fd1f502211656:41e32802badc51c1f93479857c0ab8d859dbca14d0291057d814e12b9bc7f0bb01f505800cba5184f16d6e373b8724cf161b11606b69cdd66db836a8e998a690';
export const DEFAULT_ADMIN_EMAIL = 'admin@smkn3kendari.sch.id';

const getSecret = () => process.env.SESSION_SECRET || DEFAULT_SESSION_SECRET;
const key = () => new TextEncoder().encode(getSecret());

export function passwordHash(p: string, salt = randomBytes(16).toString('hex')) {
  return `${salt}:${scryptSync(p, salt, 64).toString('hex')}`;
}

export function checkPassword(p: string, stored: string) {
  const target = stored || DEFAULT_PASSWORD_HASH;
  const [salt, hash] = target.split(':');
  if (!salt || !hash || !/^[0-9a-f]{128}$/i.test(hash)) return false;
  const a = scryptSync(p, salt, 64);
  const b = Buffer.from(hash, 'hex');
  return timingSafeEqual(a, b);
}

export async function isAdmin() {
  try {
    const cookieStore = await cookies();
    const token = cookieStore.get('smkn_session')?.value;
    if (!token) return false;
    const { payload } = await jwtVerify(token, key());
    return payload.role === 'admin';
  } catch {
    return false;
  }
}

export async function createSession() {
  return new SignJWT({ role: 'admin' })
    .setProtectedHeader({ alg: 'HS256' })
    .setIssuedAt()
    .setExpirationTime('8h')
    .sign(key());
}
