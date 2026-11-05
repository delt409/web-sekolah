import type { Metadata } from 'next';
import './globals.css';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

export const metadata: Metadata = {
  title: {
    default: 'SMKN 3 Kendari',
    template: '%s | SMKN 3 Kendari',
  },
  description:
    'Website resmi SMKN 3 Kendari – Sekolah Menengah Kejuruan Negeri 3 Kota Kendari, Sulawesi Tenggara. Informasi jurusan, profil sekolah, galeri, prestasi, dan kegiatan.',
  keywords: ['SMKN 3 Kendari', 'SMK Kendari', 'Perhotelan', 'Kuliner', 'TJKT', 'Tata Busana', 'Tata Kecantikan'],
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="id">
      <body>
        <Navbar />
        <main>
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
