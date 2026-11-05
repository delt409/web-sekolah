import type { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';

const jurusanData: Record<string, {
  slug: string;
  name: string;
  fullName: string;
  icon: string;
  bgClass: string;
  tagColor: string;
  heroImage: string;
  galleryImages: { url: string; title: string }[];
  description: string;
  longDesc: string;
  skills: string[];
  kompetensi: string[];
  karir: { title: string; icon: string }[];
  fasilitas: { title: string; icon: string; desc: string }[];
  stats: { label: string; value: string }[];
}> = {
  hotel: {
    slug: 'hotel',
    name: 'Perhotelan',
    fullName: 'Akomodasi Perhotelan & Hospitality',
    icon: '🏨',
    bgClass: 'bg-hotel',
    tagColor: '#1565C0',
    heroImage: 'https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=1200&q=80',
    galleryImages: [
      { url: 'https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&w=600&q=80', title: 'Edotel Kamar Tamu Standard Bintang 3' },
      { url: 'https://images.unsplash.com/photo-1571896349842-33c89424de2d?auto=format&fit=crop&w=600&q=80', title: 'Front Desk Reservasi & Check-in Tamu' },
      { url: 'https://images.unsplash.com/photo-1544161515-4ab6ce6db874?auto=format&fit=crop&w=600&q=80', title: 'Housekeeping & Penataan Kamar Hotel' },
      { url: 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=600&q=80', title: 'Table Manner & Restoran Simulasi' },
    ],
    description: 'Mempersiapkan siswa menjadi tenaga profesional di industri perhotelan dan pariwisata bertaraf internasional.',
    longDesc: 'Program Keahlian Perhotelan SMKN 3 Kendari dirancang untuk menghasilkan lulusan yang kompeten dalam bidang pelayanan hotel dan hospitality pariwisata. Kurikulum kami mengintegrasikan teori dan praktik dengan standar industri internasional, didukung fasilitas Edotel (hotel training sekolah) dan program kemitraan magang di hotel berbintang terkemuka di Kota Kendari dan kota besar lainnya.',
    skills: ['Front Office PMS', 'Housekeeping SOP', 'F&B Service', 'Bahasa Inggris Vokasi', 'Etiket Pelayanan Tamu', 'Public Relation'],
    kompetensi: [
      'Melakukan prosedur reservasi, check-in, dan check-out tamu hotel dengan sistem PMS modern',
      'Mengelola penataan, pembersihan, dan sanitasi kamar tamu hotel sesuai standar bintang 4-5',
      'Menyajikan makanan dan minuman di restoran hotel dengan teknik table manners dan banquet service',
      'Berkomunikasi secara fasih menggunakan Bahasa Inggris dalam situasi perhotelan internasional',
      'Menangani keluhan tamu (guest complaint handling) secara profesional dan solutif',
      'Mengoperasikan telephone operator dan layanan concierge hotel',
    ],
    karir: [
      { title: 'Front Office Receptionist', icon: '🛎️' },
      { title: 'Housekeeping Supervisor', icon: '🛏️' },
      { title: 'Restaurant Captain / Waiter', icon: '🍽️' },
      { title: 'Concierge & Reservationist', icon: '📞' },
      { title: 'Event & Banquet Coordinator', icon: '🎉' },
      { title: 'Pengelola Homestay / Villa', icon: '🏡' },
    ],
    fasilitas: [
      { title: 'Edotel Mini Hotel', icon: '🏩', desc: 'Hotel praktik berstandar bintang 3 dengan fasilitas kamar suite, deluxe, dan lobby.' },
      { title: 'Front Desk System', icon: '💻', desc: 'Komputer dan sistem reservasi perhotelan PMS (Property Management System).' },
      { title: 'Restoran Training', icon: '🍽️', desc: 'Ruang simulasi restoran lengkap dengan cutlery, glassware, dan meja banquet.' },
      { title: 'Lab Laundry & Linen', icon: '🧺', desc: 'Mesin cuci industri, setrika uap roll, dan ruang penyimpanan linen hotel.' },
    ],
    stats: [
      { label: 'Siswa Aktif', value: '280+' },
      { label: 'Keterserapan Lulusan', value: '91%' },
      { label: 'Mitra Hotel Berbintang', value: '25+' },
      { label: 'Sertifikasi BNSP', value: '100%' },
    ],
  },

  kuliner: {
    slug: 'kuliner',
    name: 'Kuliner',
    fullName: 'Kuliner / Tata Boga',
    icon: '🍳',
    bgClass: 'bg-kuliner',
    tagColor: '#E65100',
    heroImage: 'https://images.unsplash.com/photo-1556910103-1c02745aae4d?auto=format&fit=crop&w=1200&q=80',
    galleryImages: [
      { url: 'https://images.unsplash.com/photo-1501339847302-ac426a4a7cbb?auto=format&fit=crop&w=600&q=80', title: 'Pelatihan Barista & Coffee Brewing' },
      { url: 'https://images.unsplash.com/photo-1509440159596-0249088772ff?auto=format&fit=crop&w=600&q=80', title: 'Pastry & Bakery Pembuatan Roti' },
      { url: 'https://images.unsplash.com/photo-1555396273-367ea4eb4db5?auto=format&fit=crop&w=600&q=80', title: 'Food Plating & Seni Presentasi Hidangan' },
      { url: 'https://images.unsplash.com/photo-1547496502-affa22d38842?auto=format&fit=crop&w=600&q=80', title: 'Pengolahan Hidangan Kontinental & Tradisional' },
    ],
    description: 'Mencetak ahli kuliner, pastry chef, dan wirausahawan di bidang pengolahan makanan modern.',
    longDesc: 'Program Keahlian Tata Boga SMKN 3 Kendari membekali siswa dengan keterampilan memasak masakan Indonesia, oriental, dan kontinental, seni bakery & pastry, barista kopi, food plating, serta manajemen bisnis kuliner. Siswa berlatih langsung di dapur produksi komersial dan teaching factory yang sering menyuplai pesanan catering besar.',
    skills: ['Indonesian Food', 'Continental Cuisine', 'Pastry & Bakery', 'Food Plating & Garnish', 'Barista Coffee', 'Manajemen Catering'],
    kompetensi: [
      'Mengolah aneka masakan Indonesia dari Sabang sampai Merauke dengan resep otentik',
      'Memasak hidangan barat (Continental) mulai appetizer, soup, main course, hingga dessert',
      'Memproduksi aneka roti manis, kue tradisional, cake dekorasi, dan pastry flaky',
      'Menerapkan food hygiene, sanitation, dan standar keamanan pangan HACCP',
      'Meracik espresso, latte art, dan aneka signature drink kekinian',
      'Menghitung harga pokok produksi (HPP) dan mengelola usaha kuliner mandiri',
    ],
    karir: [
      { title: 'Executive Chef / Demi Chef', icon: '👨‍🍳' },
      { title: 'Pastry & Baker Chef', icon: '🎂' },
      { title: 'Professional Barista', icon: '☕' },
      { title: 'Food Stylist & Fotografer Makanan', icon: '📸' },
      { title: 'Owner Bisnis Kuliner & Cafe', icon: '🏪' },
      { title: 'Catering & Banquet Specialist', icon: '🍱' },
    ],
    fasilitas: [
      { title: 'Dapur Produksi Industri', icon: '🔥', desc: 'Dapur komersial stainless steel dengan gas range, exhaust hood, dan prep station.' },
      { title: 'Lab Bakery & Pastry', icon: '🧁', desc: 'Deck oven industri, proofer pengembang roti, spiral mixer, dan meja marmer.' },
      { title: 'Coffee Barista Station', icon: '☕', desc: 'Mesin espresso komersial 2 group, grinder elektrik, dan peralatan pour-over V60.' },
      { title: 'Ruang Uji Inderawi / Rasa', icon: '🍽️', desc: 'Ruang steril untuk evaluasi sensorik cita rasa, aroma, dan tekstur olahan makanan.' },
    ],
    stats: [
      { label: 'Siswa Aktif', value: '260+' },
      { label: 'Juara LKS Nasional', value: 'Medali Emas' },
      { label: 'Alumni Wirausaha', value: '45%' },
      { label: 'Mitra Resto & Hotel', value: '30+' },
    ],
  },

  tjkt: {
    slug: 'tjkt',
    name: 'TJKT',
    fullName: 'Teknik Jaringan Komputer & Telekomunikasi',
    icon: '💻',
    bgClass: 'bg-tjkt',
    tagColor: '#1B5E20',
    heroImage: 'https://images.unsplash.com/photo-1544197150-b99a580bb7a8?auto=format&fit=crop&w=1200&q=80',
    galleryImages: [
      { url: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&w=600&q=80', title: 'Data Center & Manajemen Server Rack' },
      { url: 'https://images.unsplash.com/photo-1517694712202-14dd9538aa97?auto=format&fit=crop&w=600&q=80', title: 'Praktik Konfigurasi Jaringan Cisco Packet Tracer' },
      { url: 'https://images.unsplash.com/photo-1563770660941-20978e870e26?auto=format&fit=crop&w=600&q=80', title: 'Penyambungan Kabel Serat Optik (Fiber Splicing)' },
      { url: 'https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?auto=format&fit=crop&w=600&q=80', title: 'Cybersecurity & Administrasi Server Linux' },
    ],
    description: 'Menghasilkan teknisi jaringan komputer dan telekomunikasi yang kompeten di era digital dan revolusi 4.0.',
    longDesc: 'Program Keahlian TJKT membekali siswa dengan keahlian komprehensif rancang bangun jaringan komputer (LAN/WAN/Wireless), perakitan dan konfigurasi server cloud Linux, teknik penyambungan serat optik (fiber optic), keamanan siber (cybersecurity), serta sertifikasi industri seperti MikroTik (MTCNA) dan Cisco (CCNA).',
    skills: ['Cisco Routing & Switching', 'MikroTik Network', 'Fiber Optic Splicing', 'Linux Server Admin', 'Cybersecurity Basics', 'Cloud Computing'],
    kompetensi: [
      'Merancang topologi jaringan komputer skala enterprise menggunakan router & switch manageable',
      'Melakukan konfigurasi routing protocol (RIP, OSPF, BGP) dan VLAN berkeamanan tinggi',
      'Melakukan penyambungan kabel fiber optik dengan fusion splicer dan pengukuran OTDR',
      'Membangun dan mengamankan web server, database server, dan mail server di Linux/Ubuntu',
      'Melakukan instalasi dan konfigurasi sistem keamanan jaringan (firewall, IDS/IPS, VPN)',
      'Melakukan troubleshooting koneksi internet, CCTV IP Camera, dan perangkat telekomunikasi',
    ],
    karir: [
      { title: 'Network Engineer', icon: '🌐' },
      { title: 'System / Server Administrator', icon: '🖥️' },
      { title: 'Fiber Optic Technician', icon: '⚡' },
      { title: 'IT Support & Helpdesk Specialist', icon: '🛠️' },
      { title: 'Cybersecurity Associate', icon: '🔒' },
      { title: 'Cloud Infrastructure Associate', icon: '☁️' },
    ],
    fasilitas: [
      { title: 'Lab Cisco & MikroTik', icon: '🌐', desc: 'Rack server lengkap dengan router Cisco 2900 series dan MikroTik RouterBoard.' },
      { title: 'Lab Fiber Optic', icon: '⚡', desc: 'Fusion splicer otomatis, cleaver presisi, stripper, dan optical power meter.' },
      { title: 'Lab Komputer Spek Tinggi', icon: '💻', desc: '60 unit PC Intel Core i7 dengan RAM 16GB dan SSD untuk virtualisasi server.' },
      { title: 'IoT & Hardware Station', icon: '📡', desc: 'Peralatan crimping, tester kabel Fluke, access point outdoor, dan mikrokontroler.' },
    ],
    stats: [
      { label: 'Siswa Aktif', value: '320+' },
      { label: 'Sertifikasi Internasional', value: '85 Siswa' },
      { label: 'Mitra ISP & Telco', value: '20+' },
      { label: 'Keterserapan IT', value: '94%' },
    ],
  },

  busana: {
    slug: 'busana',
    name: 'Tata Busana',
    fullName: 'Tata Busana & Desain Mode',
    icon: '👗',
    bgClass: 'bg-busana',
    tagColor: '#880E4F',
    heroImage: 'https://images.unsplash.com/photo-1509631179647-0177331693ae?auto=format&fit=crop&w=1200&q=80',
    galleryImages: [
      { url: 'https://images.unsplash.com/photo-1558769132-cb1aea458c5e?auto=format&fit=crop&w=600&q=80', title: 'Desain Sketsa Busana & Pembuatan Moodboard' },
      { url: 'https://images.unsplash.com/photo-1512436991641-6745cdb1723f?auto=format&fit=crop&w=600&q=80', title: 'Workshop Mesin Jahit Industri High Speed' },
      { url: 'https://images.unsplash.com/photo-1590736969955-71cc94801759?auto=format&fit=crop&w=600&q=80', title: 'Koleksi Tenun Etnik Sulawesi Tenggara' },
      { url: 'https://images.unsplash.com/photo-1490481651871-ab68de25d43d?auto=format&fit=crop&w=600&q=80', title: 'Peragaan Busana / Catwalk Fashion Show Tahunan' },
    ],
    description: 'Mendidik desainer busana dan penjahit profesional yang siap berkarya di industri fashion.',
    longDesc: 'Program Keahlian Tata Busana SMKN 3 Kendari membekali siswa kemampuan dari hulu ke hilir dunia mode: pembuatan sketsa desain, pembuatan pola standar dan grading, pemotongan kain, penjahitan busana wanita/pria, bordir dan sulam aplikasi, hingga penyelenggaraan fashion show dan butik mandiri.',
    skills: ['Fashion Illustration', 'Pattern Drafting (Pola)', 'Industrial Sewing', 'Draping Technique', 'Textile Knowledge', 'Boutique Business'],
    kompetensi: [
      'Menggambar ilustrasi mode busana (fashion sketch) dengan proporsi tubuh ideal',
      'Mengambil ukuran tubuh dan membuat pola konstruksi busana wanita, pria, dan anak',
      'Mengoperasikan mesin jahit industri, mesin obras, dan mesin pasang kancing high-speed',
      'Membuat busana kemeja, blazer kerja, gaun pesta, dan busana etnik modifikasi',
      'Menerapkan teknik penyelesaian jahitan tangan, pasang payet, dan bordir dekoratif',
      'Mengelola bisnis butik, costing harga jual busana, dan pemasaran digital fashion',
    ],
    karir: [
      { title: 'Fashion Designer / Perancang Busana', icon: '✏️' },
      { title: 'Pattern Maker (Pembuat Pola)', icon: '📐' },
      { title: 'Penjahit Busana Haute Couture', icon: '🧵' },
      { title: 'Fashion Stylist & Wardrobe', icon: '💅' },
      { title: 'Owner Butik / Rumah Jahit', icon: '👘' },
      { title: 'Visual Merchandiser Fashion', icon: '🏬' },
    ],
    fasilitas: [
      { title: 'Workshop Jahit Industri', icon: '🧵', desc: '40 unit mesin jahit otomatis high-speed Juki dan mesin obras 4 benang.' },
      { title: 'Ruang Potong & Pola', icon: '✂️', desc: 'Meja potong kayu panjang, cutting knife elektrik, dan manekin pasform.' },
      { title: 'Fashion Design Studio', icon: '✏️', desc: 'Meja gambar arsitek mode, light box tracing, dan katalog sampel kain tekstil.' },
      { title: 'Catwalk Runway', icon: '👠', desc: 'Panggung peragaan busana dilengkapi lighting panggung dan sound system.' },
    ],
    stats: [
      { label: 'Siswa Aktif', value: '220+' },
      { label: 'Koleksi Busana / Tahun', value: '150+ Pcs' },
      { label: 'Alumni Wirausaha Butik', value: '42%' },
      { label: 'Pameran Fashion Show', value: 'Rutin' },
    ],
  },

  kecantikan: {
    slug: 'kecantikan',
    name: 'Tata Kecantikan',
    fullName: 'Tata Kecantikan Kulit & Rambut',
    icon: '💄',
    bgClass: 'bg-kecantikan',
    tagColor: '#6A1B9A',
    heroImage: 'https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?auto=format&fit=crop&w=1200&q=80',
    galleryImages: [
      { url: 'https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?auto=format&fit=crop&w=600&q=80', title: 'Tata Rias Wajah Pesta & Pengantin (MUA)' },
      { url: 'https://images.unsplash.com/photo-1560066984-138dadb4c035?auto=format&fit=crop&w=600&q=80', title: 'Hair Styling, Pewarnaan & Pemangkasan Rambut' },
      { url: 'https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?auto=format&fit=crop&w=600&q=80', title: 'Perawatan Kulit Wajah (Facial Treatment)' },
      { url: 'https://images.unsplash.com/photo-1607779097040-26e80aa78e66?auto=format&fit=crop&w=600&q=80', title: 'Body Spa & Nail Art Artistik' },
    ],
    description: 'Menyiapkan beauty therapist, penata rambut, dan MUA profesional yang siap berkarier di salon terkemuka.',
    longDesc: 'Program Keahlian Tata Kecantikan SMKN 3 Kendari mencakup keterampilan perawatan kecantikan kulit wajah (facial manual & elektrik), perawatan badan (spa & massage), perawatan dan penataan rambut (hair styling, cutting, coloring, sanggul daerah & modern), rias pengantin adat maupun barat, serta nail art dan manicure-pedicure.',
    skills: ['Make Up Artist (MUA)', 'Skin Care & Facial', 'Hair Cutting & Styling', 'Bridal Makeup', 'Spa & Body Massage', 'Nail Art & Manicure'],
    kompetensi: [
      'Melakukan analisis kondisi kulit wajah dan penanganan facial modern sesuai jenis kulit',
      'Melakukan tata rias wajah sehari-hari, rias panggung, dan rias karakter',
      'Merias pengantin adat tradisional Sulawesi Tenggara, Jawa, Sunda, serta gaun modern',
      'Memangkas rambut pria dan wanita dengan teknik clipper dan gunting layer',
      'Melakukan pewarnaan rambut, pelurusan (smoothing), dan pengeritingan artistik',
      'Memberikan layanan body spa relaksasi, lulur rempah nusantara, dan nail art',
    ],
    karir: [
      { title: 'Professional MUA (Make Up Artist)', icon: '💄' },
      { title: 'Beauty Therapist Klinik Kecantikan', icon: '💆' },
      { title: 'Hair Stylist & Colorist Salon', icon: '💇' },
      { title: 'Perias Pengantin / Sanggar Rias', icon: '👰' },
      { title: 'Nail Artist & Esthetician', icon: '🌸' },
      { title: 'Owner Salon Kecantikan & Spa', icon: '💅' },
    ],
    fasilitas: [
      { title: 'Salon Praktik Komersial', icon: '💄', desc: 'Kursi hidrolik styling, cermin rias lampu LED studio, dan washbak keramas.' },
      { title: 'Studio Facial & Skin Care', icon: '💆', desc: 'Bed facial elektrik, alat vapor uap, high frequency (HF), dan galvanic machine.' },
      { title: 'Bridal Room Khusus', icon: '👰', desc: 'Koleksi busana pengantin adat Nusantara, sanggul, mahkota, dan asesori pengantin.' },
      { title: 'Nail Art & Spa Corner', icon: '🌸', desc: 'Meja manicure, lampu UV curing kuku gel, foot bath whirlpool, dan minyak aromaterapi.' },
    ],
    stats: [
      { label: 'Siswa Aktif', value: '180+' },
      { label: 'Sertifikasi Profesi BNSP', value: '95%' },
      { label: 'Mitra Klinik & Salon', value: '22+' },
      { label: 'Alumni Mandiri Buka Usaha', value: '48%' },
    ],
  },
};

export async function generateStaticParams() {
  return Object.keys(jurusanData).map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const j = jurusanData[slug];
  return {
    title: j ? `Jurusan ${j.name} - SMKN 3 Kendari` : 'Profil Jurusan',
    description: j?.description,
  };
}

export default async function JurusanDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const j = jurusanData[slug];
  if (!j) notFound();

  return (
    <>
      {/* Page Hero with Background Image Overlay */}
      <section style={{
        position: 'relative',
        paddingTop: 'calc(70px + 4rem)',
        paddingBottom: '5rem',
        color: 'white',
        overflow: 'hidden',
        minHeight: '450px',
        display: 'flex',
        alignItems: 'center',
      }}>
        <div style={{
          position: 'absolute',
          inset: 0,
          backgroundImage: `url(${j.heroImage})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          filter: 'brightness(0.28)',
          zIndex: 0,
        }} />
        <div style={{
          position: 'absolute',
          inset: 0,
          background: `linear-gradient(135deg, ${j.tagColor}88 0%, rgba(26,26,46,0.92) 100%)`,
          zIndex: 1,
        }} />

        <div className="container" style={{ position: 'relative', zIndex: 2 }}>
          <div className="breadcrumb">
            <Link href="/">Beranda</Link>
            <span className="breadcrumb-sep">›</span>
            <Link href="/jurusan">Jurusan</Link>
            <span className="breadcrumb-sep">›</span>
            <span>{j.name}</span>
          </div>

          <div style={{ display: 'inline-flex', alignItems: 'center', gap: '0.6rem', background: 'rgba(255,255,255,0.2)', backdropFilter: 'blur(10px)', padding: '0.4rem 1.25rem', borderRadius: 'var(--radius-full)', marginBottom: '1.25rem', fontSize: '0.9rem', fontWeight: 600 }}>
            <span>{j.icon}</span> Program Keahlian Unggulan
          </div>

          <h1 style={{ color: 'white', fontSize: 'clamp(2rem, 4vw, 3.2rem)', marginBottom: '1rem', lineHeight: '1.2' }}>
            {j.fullName}
          </h1>
          <p style={{ color: 'rgba(255,255,255,0.9)', fontSize: '1.2rem', maxWidth: '750px', lineHeight: '1.7', marginBottom: '2rem' }}>
            {j.description}
          </p>

          <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
            <a href="#kompetensi" className="btn btn-primary">
              📋 Pelajari Kompetensi
            </a>
            <Link href="/galeri" className="btn btn-outline">
              📸 Foto Praktik Jurusan
            </Link>
            <Link href="/video" className="btn btn-outline">
              ▶ Tonton Video Kegiatan
            </Link>
          </div>
        </div>
      </section>

      {/* Stats Bar */}
      <section style={{ background: 'var(--dark)', padding: '2.5rem 0' }}>
        <div className="container">
          <div className="stats-grid">
            {j.stats.map((s) => (
              <div key={s.label} className="stat-item" style={{ padding: '0.75rem' }}>
                <div className="stat-number" style={{ fontSize: '2.2rem', color: '#ffd700' }}>{s.value}</div>
                <div className="stat-label">{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery Foto Praktik Jurusan */}
      <section className="section bg-light">
        <div className="container">
          <div className="section-header">
            <div className="badge">Dokumentasi Praktik</div>
            <h2>Foto Kegiatan & Fasilitas Jurusan {j.name}</h2>
            <p>Gambaran suasana belajar dan sarana berstandar industri yang digunakan siswa sehari-hari.</p>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: '1.5rem' }}>
            {j.galleryImages.map((img, idx) => (
              <div
                key={idx}
                className="card"
                style={{ overflow: 'hidden', boxShadow: 'var(--shadow-md)' }}
              >
                <div style={{ height: '200px', overflow: 'hidden' }}>
                  <img
                    src={img.url}
                    alt={img.title}
                    style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                  />
                </div>
                <div style={{ padding: '1rem 1.25rem' }}>
                  <div style={{ fontSize: '0.9rem', fontWeight: 600, color: 'var(--dark)' }}>
                    {img.title}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Overview & Kompetensi */}
      <section id="kompetensi" className="section">
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '3.5rem', alignItems: 'start' }}>
            <div>
              <div className="badge" style={{ marginBottom: '1rem' }}>Kurikulum Vokasi</div>
              <h2 style={{ marginBottom: '1.25rem', color: 'var(--dark)' }}>
                Tentang Program Keahlian {j.name}
              </h2>
              <p style={{ fontSize: '1.05rem', lineHeight: '1.8', color: 'var(--text)', marginBottom: '1.75rem' }}>
                {j.longDesc}
              </p>

              <h4 style={{ fontSize: '1.05rem', color: 'var(--dark)', marginBottom: '0.75rem' }}>
                Keahlian Kunci yang Dikuasai:
              </h4>
              <div className="jurusan-skills" style={{ marginBottom: '2rem' }}>
                {j.skills.map((s) => (
                  <span
                    key={s}
                    className="skill-tag"
                    style={{
                      borderColor: j.tagColor,
                      color: j.tagColor,
                      background: `${j.tagColor}15`,
                      fontSize: '0.85rem',
                      padding: '0.35rem 0.85rem',
                    }}
                  >
                    {s}
                  </span>
                ))}
              </div>

              <div className="alert alert-info" style={{ marginTop: '1.5rem' }}>
                <span>💡</span>
                <div>
                  <strong>Program Magang / PKL Industri:</strong><br />
                  Setiap siswa jurusan {j.name} mengikuti Praktik Kerja Lapangan (PKL) selama 6 bulan di instansi mitra tersertifikasi untuk mengasah kesiapan kerja nyata.
                </div>
              </div>
            </div>

            <div>
              <div className="vm-card visi" style={{ background: `${j.tagColor}08`, border: `2px solid ${j.tagColor}30`, padding: '2.5rem' }}>
                <div style={{ fontSize: '2rem', marginBottom: '1rem' }}>📋</div>
                <h3 style={{ color: j.tagColor, marginBottom: '1.25rem', fontSize: '1.3rem' }}>
                  Standar Kompetensi Lulusan
                </h3>
                <ul className="misi-list">
                  {j.kompetensi.map((k, i) => (
                    <li key={i} style={{ borderColor: `${j.tagColor}20`, fontSize: '0.925rem' }}>
                      {k}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Fasilitas Jurusan */}
      <section className="section bg-light">
        <div className="container">
          <div className="section-header">
            <div className="badge">Sarana Praktik</div>
            <h2>Fasilitas Khusus Jurusan {j.name}</h2>
            <p>Laboratorium dan bengkel kerja berstandar industri terkini.</p>
          </div>
          <div className="grid-4">
            {j.fasilitas.map((f) => (
              <div key={f.title} className="card" style={{ padding: '2rem 1.5rem' }}>
                <div style={{ fontSize: '2.75rem', marginBottom: '1rem' }}>{f.icon}</div>
                <h3 style={{ fontSize: '1.1rem', marginBottom: '0.5rem', color: 'var(--dark)' }}>{f.title}</h3>
                <p style={{ fontSize: '0.875rem', color: 'var(--text-muted)', lineHeight: '1.6' }}>{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Prospek Karir */}
      <section className="section">
        <div className="container">
          <div className="section-header">
            <div className="badge">Masa Depan Cerah</div>
            <h2>Peluang Karir Lulusan {j.name}</h2>
            <p>Pilihan profesi di industri maupun peluang membangun usaha mandiri (wirausaha).</p>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(180px, 1fr))', gap: '1.5rem' }}>
            {j.karir.map((k) => (
              <div
                key={k.title}
                className="card"
                style={{
                  padding: '1.75rem 1.25rem',
                  textAlign: 'center',
                  transition: 'var(--transition)',
                  borderTop: `3px solid ${j.tagColor}`,
                }}
              >
                <div style={{ fontSize: '2.75rem', marginBottom: '0.75rem' }}>{k.icon}</div>
                <h3 style={{ fontSize: '0.95rem', fontWeight: 700, color: 'var(--dark)', lineHeight: '1.3' }}>
                  {k.title}
                </h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Pendaftaran Jurusan */}
      <section style={{
        background: `linear-gradient(135deg, ${j.tagColor} 0%, #0d3b3c 100%)`,
        padding: '5rem 0',
        color: 'white',
      }}>
        <div className="container text-center">
          <div style={{ fontSize: '3rem', marginBottom: '1rem' }}>{j.icon}</div>
          <h2 style={{ color: 'white', marginBottom: '1rem', fontSize: '2.2rem' }}>
            Siap Bergabung dengan Jurusan {j.name}?
          </h2>
          <p style={{ color: 'rgba(255,255,255,0.9)', marginBottom: '2.5rem', fontSize: '1.15rem', maxWidth: '650px', margin: '0 auto 2.5rem', lineHeight: '1.7' }}>
            Daftarkan dirimu pada Penerimaan Peserta Didik Baru (PPDB) SMKN 3 Kendari dan jadilah tenaga ahli profesional masa depan!
          </p>
          <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
            <Link href="/jurusan" className="btn btn-primary btn-lg">
              ← Lihat Jurusan Lainnya
            </Link>
            <Link href="/ekskul" className="btn btn-outline btn-lg">
              ⚡ Jelajahi Ekskul Kami
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
