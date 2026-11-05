# 🏫 Website Resmi SMKN 3 Kendari (Modern, Responsif & Terintegrasi)

Website profil dan portal informasi resmi **SMK Negeri 3 Kendari** (Sekolah Pusat Keunggulan & Terakreditasi A di Sulawesi Tenggara). Dibangun menggunakan teknologi modern **Next.js 15 (App Router)**, **React 19**, **TypeScript**, dan **Vanilla CSS Glassmorphism Design System**, serta terintegrasi langsung dengan **Google Apps Script & Google Spreadsheet** sebagai Content Management System (CMS) dan database dinamis gratis tanpa biaya langganan cloud database.

---

## 📑 Daftar Isi
1. [🌟 Gambaran & Daftar Fitur Lengkap](#-gambaran--daftar-fitur-lengkap)
2. [📊 Cara Menghubungkan Web ke Google Sheets (Database Gratis)](#-cara-menghubungkan-web-ke-google-sheets-database-gratis)
3. [📋 Struktur 9 Tab Sheet di Google Spreadsheet](#-struktur-9-tab-sheet-di-google-spreadsheet)
4. [🔐 Konfigurasi Environment Variables (.env.local)](#-konfigurasi-environment-variables-envlocal)
5. [💻 Panduan Instalasi Proyek dari GitHub (Lokal)](#-panduan-instalasi-proyek-dari-github-lokal)
6. [🚀 Panduan Deployment / Upload ke Hosting & Server](#-panduan-deployment--upload-ke-hosting--server)
   - [A. Deploy ke Vercel (Rekomendasi Utama)](#a-deploy-ke-vercel-rekomendasi-utama)
   - [B. Deploy ke Netlify](#b-deploy-ke-netlify)
   - [C. Deploy ke VPS Linux (Ubuntu / Debian dengan PM2 & Nginx)](#c-deploy-ke-vps-linux-ubuntu--debian-dengan-pm2--nginx)
7. [🛠️ Troubleshooting & Solusi Kendala Umum](#️-troubleshooting--solusi-kendala-umum)
8. [📞 Kontak & Hak Cipta Sekolah](#-kontak--hak-cipta-sekolah)

---

## 🌟 Gambaran & Daftar Fitur Lengkap

Semua fitur pada website publik dan CMS Admin telah disinkronkan 100%:

### 1. 🏠 Halaman Beranda (`/`)
- **Hero Section Interaktif**: Tampilan visual modern bertema *Teal & Gold*, kartu ringkasan 5 Jurusan dengan efek glassmorphism, badge Akreditasi A & SMK Pusat Keunggulan, serta statistik sekolah (*1.250+ Siswa, 5 Jurusan, 75+ Mitra Industri, 92% Keterserapan Kerja*).
- **📢 Banner Pengumuman Resmi**: Alert ticker langsung terhubung dengan tab `Pengumuman` dari spreadsheet.
- **📚 5 Program Keahlian Unggulan**: Kartu visual berstandar industri dengan kompetensi kunci.
- **⚡ Pilar Ekstrakulikuler**: Menampilkan ekskul aktif (termasuk ekskul baru dari Google Sheets).
- **📰 Berita & Kabar Sekolah**: Artikel kegiatan, liputan lomba, dan siaran pers terbaru.
- **🗓️ Jadwal & Agenda Terdekat**: Menampilkan kalender kegiatan terdekat lengkap dengan waktu dan tanggal.
- **🏆 Hall of Fame Prestasi**: Cuplikan prestasi medali emas LKS nasional dan kejuaraan regional.
- **📸 Galeri Foto Kegiatan**: Dokumentasi visual praktikum kejuruan dan aksi lapangan siswa.
- **▶️ Video Kegiatan**: Preview video YouTube kegiatan sekolah.
- **👨‍🏫 Profil Guru & Pimpinan**: Daftar kepala sekolah dan dewan pengajar kejuruan.

### 2. 🏫 Profil Sekolah & Visi Misi (`/profil`)
- **Sambutan Kepala Sekolah**: Paparan kepemimpinan vokasi dan target lulusan BMW (Bekerja, Melanjutkan, Wirausaha).
- **Identitas Lengkap Sekolah**: NPSN, status akreditasi unggul, alamat resmi, dan kontak.
- **Visi, Misi & Tujuan Sekolah**: 7 butir misi strategis dan 5 tujuan terukur kelembagaan.
- **Lini Masa Sejarah**: Perjalanan sekolah sejak berdiri tahun 1990 hingga menjadi SMK Pusat Keunggulan 2024.
- **Struktur Organisasi**: Bagan tata kelola komite, kepala sekolah, wakasek, dan kepala jurusan.
- **Sarana & Fasilitas Modern**: Edotel, Dapur Restoran Kontinental, Lab Jaringan Fiber Optic Cisco, Workshop Busana, dan Studio Salon Kecantikan.

### 3. 📚 5 Program Keahlian Unggulan (`/jurusan` & `/jurusan/[slug]`)
1. **Akomodasi Perhotelan (`/jurusan/hotel`)**: Front office PMS, housekeeping, F&B service, standard operasional hotel bintang 5.
2. **Kuliner / Tata Boga (`/jurusan/kuliner`)**: Masakan nusantara & kontinental, pastry & bakery, barista kopi, pemenang Medali Emas LKS Nasional.
3. **Teknik Jaringan Komputer & Telekomunikasi - TJKT (`/jurusan/tjkt`)**: Splicing fiber optic, routing Cisco/MikroTik, cloud computing, cybersecurity.
4. **Tata Busana (`/jurusan/busana`)**: Pembuatan pola (pattern drafting), desain sketsa mode, busana etnik tenun daerah, peragaan busana (fashion show).
5. **Tata Kecantikan Kulit & Rambut (`/jurusan/kecantikan`)**: Make Up Artist (MUA), hair styling, rias pengantin adat nusantara, facial treatment & spa.

### 4. ⚡ Ekstrakulikuler Siswa (`/ekskul`)
- **Spotlight 4 Organisasi Utama**:
  - 🏛️ **OSIS & MPK**: Induk kepemimpinan siswa, penggerak MPLS & kegiatan sekolah.
  - ⚜️ **Gerakan Pramuka (Ambalan Anoa Mandiri)**: Kemah bakti alam, pionering, kepanduan penegak bantara.
  - 🏥 **PMR Wira**: Relawan pertolongan pertama (PP), siaga gawat darurat, simulasi bencana, donor darah.
  - 🎖️ **LKBB & Paskibra (Satria SMKN 3)**: Pasukan variasi baris-berbaris presisi, pengibar bendera pusaka.
- **Ekskul Tambahan**: Futsal, Tari Tradisional, IT Coding Club, Paduan Suara, English Club, dll.
- **Modal Detail Interaktif**: Menampilkan jadwal latihan, lokasi, pembina, ketua, dan riwayat prestasi piala.

### 5. 📸 Galeri Foto Dokumentasi (`/galeri`)
- Koleksi dokumentasi foto kegiatan sekolah beresolusi tinggi.
- Filter kategori: Praktik Kejuruan, Ekskul Utama, Prestasi, Fasilitas, dan Upacara.
- **Modal Lightbox Layar Penuh**: Klik foto untuk melihat ukuran penuh beserta takarir (caption), tanggal, dan lokasi kegiatan.

### 6. 🏆 Galeri Prestasi & Hall of Fame (`/prestasi`)
- Daftar pencapaian medali emas, perak, dan perunggu (Nasional, Regional, Provinsi, Kota).
- Filter tingkat kejuaraan.
- Informasi lengkap nama siswa peraih, jurusan, tahun perolehan, dan foto dokumentasi piala.

### 7. 🗓️ Kalender Kegiatan Sekolah (`/kegiatan`)
- Agenda bulanan aktif dengan jam pelaksanaan (WITA) dan lokasi.
- **Widget Kalender Interaktif**: Indikator tanggal bernoda emas untuk hari-hari kegiatan.
- Kalender akademik tahunan lengkap 12 bulan (Juli - Juni).

### 8. ▶️ Galeri Video Kegiatan (`/video`)
- Video profil resmi SMKN 3 Kendari.
- Dokumentasi video LKS Kuliner Nasional, demonstrasi baris-berbaris LKBB, Persami Pramuka, dll.
- **Pemutar Modal YouTube**: Tonton video langsung di dalam web tanpa berpindah halaman.

### 9. 🔐 CMS Dashboard Admin (`/admin`)
- Autentikasi aman berbasis Cookie HttpOnly dengan enkripsi hash kata sandi `scrypt`.
- Indikator status koneksi langsung ke Google Apps Script Spreadsheet.
- Pengelola data 9 kategori: Berita, Pengumuman, Galeri, Prestasi, Ekskul, Kegiatan, Video, Profil, Guru.
- Tombol **1-Klik Inisialisasi Sheet Tab** dan **Sinkronisasi Data Otomatis**.

---

## 📊 Cara Menghubungkan Web ke Google Sheets (Database Gratis)

Anda dapat menggunakan Google Spreadsheet sebagai database real-time tanpa biaya hosting database (PostgreSQL/MySQL).

### Langkah 1: Siapkan Google Spreadsheet
1. Buka [Google Spreadsheet](https://sheets.new) di browser Anda.
2. Beri nama spreadsheet, misalnya: `DATABASE WEBSITE SMKN 3 KENDARI`.
3. Biarkan tab pertama atau biarkan kosong; tab-tab kategori akan dibuat otomatis oleh script.

### Langkah 2: Buka Editor Google Apps Script
1. Pada menu navigasi spreadsheet, klik **Extensions (Ekstensi)** ➔ **Apps Script**.
2. Beri nama proyek di kiri atas, misalnya: `Backend-Web-SMKN3`.

### Langkah 3: Tempelkan Script Backend
1. Hapus semua kode bawaan di dalam file `Code.gs`.
2. Buka file `apps-script/Code.gs` yang ada di dalam repository proyek ini.
3. Salin (*copy*) seluruh isinya dan tempelkan (*paste*) ke dalam editor `Code.gs` di Google Apps Script.
4. Klik ikon **Save (Simpan)** 💾 (atau tekan `Ctrl + S`).

### Langkah 4: Tentukan Token Rahasia (API Secret)
Agar API aman dari pihak luar yang tidak berwenang, tentukan token rahasia:
1. Di panel kiri Apps Script, klik ikon gerigi **Project Settings (Setelan Proyek)**.
2. Gulir ke bagian **Script Properties (Properti Skrip)** ➔ klik **Add script property (Tambahkan properti skrip)**.
3. Isi kolom:
   - **Property**: `API_SECRET`
   - **Value**: Masukkan kode rahasia unik dan panjang (misal: gabungan huruf dan angka acak 64 karakter).
4. Klik **Save script properties**.

> *Catatan: Script juga memiliki fallback token default yang siap pakai bila properti skrip belum diatur.*

### Langkah 5: Buat Tab Sheet & Isi Data Bawaan
1. Kembali ke tab editor **Code (<>)**.
2. Pada menu dropdown fungsi di toolbar atas, pilih fungsi **`setupSheets`**.
3. Klik tombol **▶ Run (Jalankan)**.
4. Jika Google meminta izin otorisasi (*Authorization Required*):
   - Klik **Review Permissions** ➔ Pilih akun Google Anda.
   - Klik **Advanced (Lanjutan)** ➔ Klik tautan **Go to Backend-Web-SMKN3 (unsafe)**.
   - Klik **Allow (Izinkan)**.
5. Periksa spreadsheet Anda: Seluruh 9 tab sheet (`Profil`, `Berita`, `Pengumuman`, `Guru`, `Galeri`, `Prestasi`, `Ekskul`, `Kegiatan`, `Video`) otomatis terbuat lengkap dengan baris data bawaan!

### Langkah 6: Deploy sebagai Web App (URL Endpoint Publik)
1. Di pojok kanan atas Apps Script, klik tombol biru **Deploy** ➔ **New deployment (Penerapan baru)**.
2. Klik ikon gerigi di sebelah kiri *Select type* ➔ pilih **Web app**.
3. Lengkapi formulir:
   - **Description**: `API Web SMKN 3 Kendari v1`
   - **Execute as**: **Me (email Anda sendiri)**
   - **Who has access (Siapa yang memiliki akses)**: **Anyone (Siapa saja)** *(Wajib dipilih "Anyone" agar server Next.js dapat membaca/menulis data tanpa popup Google Login)*.
4. Klik **Deploy**.
5. Salin (**Copy**) nilai **Web app URL** yang muncul (formatnya: `https://script.google.com/macros/s/AKfycbx.../exec`).

---

## 📋 Struktur 9 Tab Sheet di Google Spreadsheet

Setiap tab sheet di Google Spreadsheet memiliki 5 kolom header standar berikut pada baris pertama:

| Kolom A (`id`) | Kolom B (`title`) | Kolom C (`body`) | Kolom D (`date`) | Kolom E (`image`) |
|---|---|---|---|---|
| ID Unik (UUID) | Judul / Nama Konten | Deskripsi / Isi Berita Lengkap | Tanggal / Kategori Waktu | URL Gambar / Link YouTube |

### Pembagian Fungsi 9 Tab:
1. **`Berita`**: Artikel kegiatan, kabar sekolah, liputan prestasi.
2. **`Pengumuman`**: Edaran resmi sekolah, jadwal ujian, informasi beasiswa/PPDB.
3. **`Galeri`**: Dokumentasi foto kegiatan (Kolom `image` diisi link URL gambar).
4. **`Prestasi`**: Daftar juara, piala, dan medali siswa (Kolom `date` diisi tahun perolehan).
5. **`Ekskul`**: Daftar ekstrakurikuler (OSIS, Pramuka, PMR, LKBB, Futsal, dll).
6. **`Kegiatan`**: Agenda terdekat (Kolom `date` diisi tanggal, Kolom `image` diisi jam WITA).
7. **`Video`**: Dokumentasi video (Kolom `image` diisi link URL YouTube).
8. **`Guru`**: Direktori guru & pimpinan (Kolom `date` diisi jabatan).
9. **`Profil`**: Informasi identitas dan visi misi sekolah.

---

## 🔐 Konfigurasi Environment Variables (.env.local)

Buat file baru bernama `.env.local` di root folder proyek (atau salin dari `.env.example`):

```bash
cp .env.example .env.local
```

Isi file `.env.local` dengan kredensial Anda (*format tersamar sebagai panduan*):

```env
# ===================================================================
# KONFIGURASI GOOGLE APPS SCRIPT (DATABASE)
# ===================================================================
# Masukkan Web App URL dari Deployment Google Apps Script Anda:
GAS_WEB_APP_URL=https://script.google.com/macros/s/AKfycbx_CONTOH_DEPLOYMENT_ID_ANDA/exec

# Masukkan API_SECRET yang Anda tentukan di Script Properties Apps Script:
GAS_API_SECRET=masukkan-token-rahasia-panjang-disini

# Alias kompatibilitas (Opsional)
GOOGLE_SCRIPT_URL=https://script.google.com/macros/s/AKfycbx_CONTOH_DEPLOYMENT_ID_ANDA/exec
API_SECRET=masukkan-token-rahasia-panjang-disini

# ===================================================================
# KREDENSIAL LOGIN DASHBOARD CMS ADMIN (/admin)
# ===================================================================
# Email untuk masuk ke CMS Admin:
ADMIN_EMAIL=admin@smkn3kendari.sch.id

# Hash kata sandi Admin (menggunakan algoritma scrypt Node.js crypto).
# Nilai default di bawah ini adalah hash untuk kata sandi: admin123
ADMIN_PASSWORD_HASH=90c871b43168257b5c7fd1f502211656:41e32802badc51c1f93479857c0ab8d859dbca14d0291057d814e12b9bc7f0bb01f505800cba5184f16d6e373b8724cf161b11606b69cdd66db836a8e998a690

# Token sesi rahasia untuk menandatangani JWT Cookie Admin:
SESSION_SECRET=masukkan-string-acak-panjang-minimal-32-karakter-disini
```

### 💡 Cara Menghasilkan Password Hash Baru
Jika Anda ingin mengganti kata sandi admin selain `admin123`, jalankan perintah satu baris ini di terminal komputer Anda:

```bash
node -e 'const c=require("crypto");const s=c.randomBytes(16).toString("hex");c.scrypt("KATA_SANDI_BARU_ANDA",s,64,(e,k)=>console.log(s+":"+k.toString("hex")));'
```
*Ganti `KATA_SANDI_BARU_ANDA` dengan kata sandi yang Anda inginkan, lalu salin hasilnya ke `ADMIN_PASSWORD_HASH` di `.env.local`.*

---

## 💻 Panduan Instalasi Proyek dari GitHub (Lokal)

Ikuti langkah ini ketika Anda mengunduh (*clone*) proyek ini ke komputer baru:

### Prasyarat:
- **Node.js** versi 18.18 atau lebih baru ([Unduh Node.js](https://nodejs.org/)).
- **Git** terpasang di komputer.

### Langkah-langkah:
1. **Clone repository dari GitHub:**
   ```bash
   git clone https://github.com/username-anda/web-smkn3-kendari.git
   ```

2. **Masuk ke folder proyek:**
   ```bash
   cd web-smkn3-kendari/web-smkn3
   ```

3. **Install semua dependensi (package):**
   ```bash
   npm install
   # atau jika menggunakan pnpm:
   pnpm install
   ```

4. **Siapkan file environment:**
   ```bash
   cp .env.example .env.local
   ```
   *Buka `.env.local` menggunakan text editor (VS Code / Notepad) dan sesuaikan URL Google Script serta API Secret.*

5. **Jalankan web di mode development (pengembangan):**
   ```bash
   npm run dev
   ```

6. **Buka di browser:**
   - Website Publik: [http://localhost:3000](http://localhost:3000)
   - Panel Admin: [http://localhost:3000/admin](http://localhost:3000/admin) *(Email: `admin@smkn3kendari.sch.id` | Sandi: `admin123`)*

---

## 🚀 Panduan Deployment / Upload ke Hosting & Server

### A. Deploy ke Vercel (Rekomendasi Utama)
Vercel adalah platform hosting cloud terbaik dan paling optimal untuk Next.js (Gratis untuk sekolah/proyek personal).

1. Unggah (*push*) kode Anda ke repository GitHub (publik atau privat).
2. Buka [Vercel](https://vercel.com) dan login menggunakan akun GitHub Anda.
3. Klik tombol **Add New...** ➔ **Project**.
4. Impor (*Import*) repository `web-smkn3-kendari`.
5. Jika struktur folder proyek berada di subfolder `web-smkn3`:
   - Pada bagian **Root Directory**, klik *Edit* dan pilih folder `web-smkn3`.
6. Buka bagian **Environment Variables**, lalu tambahkan semua variabel dari `.env.local`:
   - `GAS_WEB_APP_URL` = `https://script.google.com/macros/s/.../exec`
   - `GAS_API_SECRET` = `[Secret Anda]`
   - `ADMIN_EMAIL` = `admin@smkn3kendari.sch.id`
   - `ADMIN_PASSWORD_HASH` = `[Hash Password Anda]`
   - `SESSION_SECRET` = `[Random Secret]`
7. Klik tombol **Deploy**.
8. Dalam waktu sekitar 1-2 menit, website Anda sudah aktif secara global dengan domain gratis `https://nama-proyek.vercel.app` dan sertifikat SSL otomatis! Anda juga dapat menghubungkan domain resmi sekolah (misal: `smkn3kendari.sch.id`) di menu *Settings ➔ Domains*.

---

### B. Deploy ke Netlify
1. Buka [Netlify](https://www.netlify.com) dan login.
2. Klik **Add new site** ➔ **Import an existing project** ➔ Pilih GitHub.
3. Tentukan build settings:
   - **Base directory**: `web-smkn3` (jika di dalam subfolder)
   - **Build command**: `npm run build`
   - **Publish directory**: `.next`
4. Di bagian **Site configuration** ➔ **Environment variables**, tambahkan variabel `GAS_WEB_APP_URL`, `GAS_API_SECRET`, `ADMIN_EMAIL`, `ADMIN_PASSWORD_HASH`, dan `SESSION_SECRET`.
5. Klik **Deploy site**.

---

### C. Deploy ke VPS Linux (Ubuntu / Debian dengan PM2 & Nginx)
Jika Anda memiliki server VPS sendiri (DigitalOcean, AWS, Linode, Niagahoster, DomaiNesia):

1. **Hubungkan ke VPS via SSH:**
   ```bash
   ssh root@ip-vps-anda
   ```

2. **Install Node.js 20 & Git:**
   ```bash
   curl -fsSL https://deb.nodesource.com/setup_20.x | sudo -E bash -
   sudo apt-get install -y nodejs git nginx
   sudo npm install -g pm2
   ```

3. **Clone proyek ke direktori server:**
   ```bash
   cd /var/www
   git clone https://github.com/username-anda/web-smkn3-kendari.git
   cd web-smkn3-kendari/web-smkn3
   ```

4. **Install dependensi & siapkan .env.local:**
   ```bash
   npm install
   nano .env.local
   # Tempelkan konfigurasi kredensial Anda, lalu simpan (Ctrl+O, Enter, Ctrl+X)
   ```

5. **Build proyek Next.js untuk produksi:**
   ```bash
   npm run build
   ```

6. **Jalankan aplikasi di background menggunakan PM2:**
   ```bash
   pm2 start npm --name "web-smkn3" -- start
   pm2 startup
   pm2 save
   ```

7. **Konfigurasi Nginx sebagai Reverse Proxy:**
   Buat file konfigurasi:
   ```bash
   sudo nano /etc/nginx/sites-available/smkn3kendari.sch.id
   ```
   Isi konfigurasi berikut:
   ```nginx
   server {
       listen 80;
       server_name smkn3kendari.sch.id www.smkn3kendari.sch.id;

       location / {
           proxy_pass http://localhost:3000;
           proxy_http_version 1.1;
           proxy_set_header Upgrade $http_upgrade;
           proxy_set_header Connection 'upgrade';
           proxy_set_header Host $host;
           proxy_cache_bypass $http_upgrade;
       }
   }
   ```
   Aktifkan konfigurasi dan restart Nginx:
   ```bash
   sudo ln -s /etc/nginx/sites-available/smkn3kendari.sch.id /etc/nginx/sites-enabled/
   sudo nginx -t
   sudo systemctl restart nginx
   ```

8. **Pasang Sertifikat SSL Gratis (HTTPS):**
   ```bash
   sudo apt install certbot python3-certbot-nginx -y
   sudo certbot --nginx -d smkn3kendari.sch.id -d www.smkn3kendari.sch.id
   ```

---

## 🛠️ Troubleshooting & Solusi Kendala Umum

| Kendala | Penyebab Umum | Solusi |
|---|---|---|
| **Status: API_SECRET tidak cocok (Unauthorized)** | Nilai `GAS_API_SECRET` di `.env.local` tidak sama dengan `API_SECRET` di Apps Script. | Pastikan token rahasia di Script Properties Google Apps Script sama persis dengan yang ada di `.env.local` tanpa ada spasi atau tanda kutip tambahan. |
| **Data yang diinput dari Admin belum tampil di halaman depan** | Halaman browser masih menampilkan cache lama. | Lakukan refresh halaman (*Hard Refresh*: tekan `Ctrl + F5`). Seluruh halaman Next.js di proyek ini sudah dipasangi `force-dynamic` sehingga data otomatis terambil langsung dari spreadsheet. |
| **Izin Akses Google Apps Script Ditolak / Forbidden (403/401)** | Deployment Web App belum disetel ke publik. | Pada Google Apps Script, klik **Deploy** ➔ **Manage deployments** ➔ Edit ➔ Pastikan **Who has access** diatur ke **Anyone** (Siapa saja). |
| **Tombol Sinkronisasi berhenti / gagal di tengah jalan** | Batas limit eksekusi Google Apps Script tercapai jika koneksi internet lambat. | Refresh halaman `/admin` lalu klik kembali tombol sinkronisasi. Sistem sudah dilengkapi proteksi pencegah duplikasi data. |

---

## 📞 Kontak & Hak Cipta Sekolah

- **Nama Sekolah**: SMK Negeri 3 Kendari
- **NPSN**: 40402636
- **Status Akreditasi**: A (Unggul) — BAN-S/M
- **Alamat**: Jl. Budi Utomo No. 1, Mataiwoi, Kec. Wua-Wua, Kota Kendari, Sulawesi Tenggara 93117
- **Email Resmi**: info@smkn3kendari.sch.id
- **Program Keahlian**: Perhotelan • Kuliner • TJKT • Tata Busana • Tata Kecantikan

---
*Dibuat dan dikembangkan dengan dedikasi penuh untuk kemajuan pendidikan vokasi digital SMKN 3 Kendari.*
# web-sekolah
