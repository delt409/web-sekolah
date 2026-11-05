import { SignJWT, jwtVerify } from 'jose';
import { cookies } from 'next/headers';
import { scryptSync, timingSafeEqual, randomBytes } from 'node:crypto';
const key = () => new TextEncoder().encode(process.env.SESSION_SECRET || '');
export function passwordHash(p: string, salt = randomBytes(16).toString('hex')) { return `${salt}:${scryptSync(p,salt,64).toString('hex')}`; }
export function checkPassword(p: string, stored: string) { const [salt,hash] = stored.split(':'); if (!salt || !hash || !/^[0-9a-f]{128}$/i.test(hash)) return false; const a=scryptSync(p,salt,64),b=Buffer.from(hash,'hex'); return timingSafeEqual(a,b); }
export async function isAdmin() { try { const token=(await cookies()).get('smkn_session')?.value; if(!token || !process.env.SESSION_SECRET) return false; const {payload}=await jwtVerify(token,key()); return payload.role==='admin'; } catch {return false;} }
export async function createSession() { return new SignJWT({role:'admin'}).setProtectedHeader({alg:'HS256'}).setIssuedAt().setExpirationTime('8h').sign(key()); }
