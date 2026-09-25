# Web Aksara Tidar — Landing Page Company Profile

Frontend publik website company profile **Aksara Tidar**. Aplikasi ini hanya **membaca** data dari CMS (Laravel + Filament) lewat REST API, lalu menampilkannya sebagai landing page satu halaman yang responsif.

- **Frontend (repo ini):** Next.js App Router, di-deploy ke Vercel.
- **Backend / CMS:** Laravel + Filament di repo terpisah (`../cms`), saat ini berjalan di `https://cms-aksaratidar-production.up.railway.app`.
- Repo ini **tidak** berisi logika bisnis, autentikasi admin, atau koneksi database.

---

## Daftar Isi

1. [Tech Stack](#tech-stack)
2. [Memulai](#memulai)
3. [Environment Variables](#environment-variables)
4. [Perintah](#perintah)
5. [Struktur Folder](#struktur-folder)
6. [Alur Data](#alur-data)
7. [Section Landing Page](#section-landing-page)
8. [Layout: Navbar & Footer](#layout-navbar--footer)
9. [Komponen Shared](#komponen-shared)
10. [Konfigurasi Konten Statis](#konfigurasi-konten-statis)
11. [Design System](#design-system)
12. [Gambar](#gambar)
13. [Konvensi Kode](#konvensi-kode)
14. [Deploy](#deploy)
15. [Keterbatasan & TODO](#keterbatasan--todo)

---

## Tech Stack

| Area | Pilihan | Versi |
|---|---|---|
| Framework | Next.js (App Router, Turbopack) | 16.3.6 |
| UI | React | 19.2.8 |
| Bahasa | TypeScript (strict) | 5.x |
| Styling | Tailwind CSS v4 (token lewat `@theme` di CSS, tanpa `tailwind.config.js`) | 4.x |
| Komponen UI | shadcn/ui (style `base-nova`, di atas `@base-ui/react`) | — |
| Carousel | `embla-carousel-react` (lewat shadcn Carousel) | 8.x |
| Validasi data | `zod` | 4.x |
| Ikon | `lucide-react` (+ ikon brand inline, lihat `social-icon.tsx`) | 1.x |
| Font | Plus Jakarta Sans via `next/font/google` | — |
| Package manager | npm | — |

> **Catatan Next.js 16:** beberapa API berbeda dari versi sebelumnya, misalnya `error.tsx` memakai prop `retry` (bukan `reset`). Sebelum memakai API caching, routing, atau metadata, baca dokumentasi yang ikut terpasang di `node_modules/next/dist/docs/`.

---

## Memulai

Prasyarat: Node.js 20+ (sudah diuji dengan Node 24) dan npm.

```bash
npm install
cp .env.example .env.local   # lalu sesuaikan nilainya
npm run dev
```

Buka `http://localhost:3000`.

Di mode development, section yang datanya masih kosong di CMS otomatis diisi **data mock** supaya tampilan bisa langsung dicek. Detailnya ada di [Alur Data](#alur-data).

---

## Environment Variables

| Variabel | Wajib | Scope | Keterangan |
|---|---|---|---|
| `API_BASE_URL` | Ya | Server saja | Base URL API Laravel **termasuk** prefix `/api`, contoh `https://cms-aksaratidar-production.up.railway.app/api`. Juga dipakai `next.config.ts` untuk mengizinkan gambar dari `/storage` host tersebut. |
| `NEXT_PUBLIC_SITE_URL` | Tidak | Publik | URL situs untuk `metadataBase` (canonical & Open Graph). Default `http://localhost:3000`. |

- Env hanya dibaca lewat `src/lib/env.ts` dan divalidasi dengan zod.
- **Jangan** beri prefix `NEXT_PUBLIC_` pada `API_BASE_URL`.
- Hanya `.env.example` yang di-commit (sudah dikecualikan di `.gitignore`). `.env.local` tidak ikut di-commit.

---

## Perintah

```bash
npm run dev      # server development (http://localhost:3000)
npm run build    # build production (butuh API bisa diakses saat build)
npm run start    # menjalankan hasil build
npm run lint     # ESLint (eslint-config-next)
npx tsc --noEmit # cek tipe
```

Menambah komponen shadcn:

```bash
npx shadcn@latest add <komponen>
```

> **Perhatian:** di proyek ini CLI shadcn kadang meminta izin menimpa `button.tsx`. Jawab **tidak (n)** agar kustomisasi yang ada tidak hilang.

---

## Struktur Folder

Struktur dibagi **per fitur**. `app/` hanya berisi routing, dan setiap entitas CMS punya folder sendiri di `features/`.

```
src/
├── app/
│   ├── layout.tsx            # Root layout: font, metadata dari CMS, navbar & footer
│   ├── page.tsx              # Landing page: ambil data, rakit section
│   └── globals.css           # Tailwind v4 + token warna (@theme) + variabel shadcn
│
├── config/
│   └── site.ts               # Konten statis: menu, teks Hero, Tentang, footer, fallback
│
├── features/                 # Satu folder per entitas CMS
│   ├── site-settings/        # Identitas perusahaan + section Hero & Tentang Kami
│   ├── activities/           # Section Aktivitas
│   ├── projects/             # Section Proyek
│   ├── team/                 # Section Anggota Tim
│   └── testimonials/         # Section Testimoni
│       # Isi tiap folder fitur:
│       #   types.ts          skema zod + tipe TypeScript (mengikuti Resource Laravel)
│       #   api/get-*.ts      fungsi fetch lewat lib/api/client.ts
│       #   mock-data.ts      data contoh, hanya dipakai di development
│       #   utils.ts          helper khusus fitur (opsional)
│       #   components/       komponen section
│
├── components/
│   ├── layout/               # site-header, mobile-nav, site-logo, site-footer, footer-contact
│   ├── shared/               # Komponen generik yang dipakai ≥ 2 fitur
│   └── ui/                   # Komponen shadcn (hindari edit manual)
│
└── lib/
    ├── api/
    │   ├── client.ts         # Satu-satunya pembungkus fetch ke backend
    │   ├── types.ts          # Skema envelope { data: ... }
    │   └── with-dev-fallback.ts
    ├── env.ts                # Validasi environment variable
    ├── social-links.ts       # Skema & label platform sosial media
    ├── strip-html.ts         # HTML RichEditor → teks polos
    └── utils.ts              # cn()
```

---

## Alur Data

### Endpoint yang dipakai

Semua endpoint bersifat publik dan hanya-baca (GET). Definisinya ada di `cms/routes/api.php`.

| Endpoint | Fungsi | Tag cache |
|---|---|---|
| `GET /site-settings` | `getSiteSettings()` | `site-settings` |
| `GET /activities` | `getActivities()` | `activities` |
| `GET /projects` | `getProjects()` | `projects` |
| `GET /teams` | `getTeamMembers()` | `team` |
| `GET /testimonials` | `getTestimonials()` | `testimonials` |

Semua respons berbentuk `{ "data": ... }` tanpa pagination. `site-settings` mengembalikan `{ "data": null }` selama belum diisi admin.

### Alur request

```
page.tsx / layout.tsx (Server Component)
  └─ features/<fitur>/api/get-*.ts
       └─ lib/api/client.ts → apiGet(path, { schema, tags })
            ├─ production: fetch(API_BASE_URL + path, { next: { revalidate: 60, tags } })
            ├─ development: fetch(API_BASE_URL + path, { cache: "no-store" })
            ├─ respons non-2xx → ApiError(status)
            └─ validasi zod → data bertipe, atau ApiError(502) jika bentuknya tidak sesuai
```

- **Caching (production):** setiap request di-cache di server Next.js dan diperbarui paling lambat **60 detik** sekali (ISR). Tag per entitas sudah disiapkan untuk revalidasi on-demand. Route webhook `/api/revalidate` **belum** dibuat (lihat [TODO](#keterbatasan--todo)).
- **Development tanpa cache:** di `next dev`, setiap request langsung ke API (`cache: "no-store"`), sehingga data yang baru diisi di CMS muncul cukup dengan me-reload halaman. Cache fetch di mode dev bisa terus menyajikan respons lama, dan itulah alasannya dimatikan.
- **Validasi:** skema zod di `features/*/types.ts` mengikuti `cms/app/Http/Resources/*Resource.php`. Kalau backend mengubah bentuk respons, error akan tertangkap di sini, bukan di komponen.

### Fallback data mock (`withDevFallback`)

`page.tsx` memanggil setiap koleksi lewat `withDevFallback(label, fetcher, mock)`:

| Kondisi | Development (`next dev`) | Production |
|---|---|---|
| API mengembalikan data | Data API | Data API |
| API kosong | Data mock | `[]` → section menampilkan *empty state* |
| API gagal / error | Data mock (error di-log) | `[]` → *empty state* (error di-log) |

`getSiteSettings()` bekerja dengan cara yang sama. Karena dipakai di root layout, fungsi ini **tidak pernah melempar error**. Di production hasilnya `null`, dan komponen memakai nilai fallback dari `config/site.ts`.

Hasilnya, satu endpoint yang bermasalah tidak membuat seluruh halaman error, dan **production tidak pernah menampilkan data palsu**.

---

## Section Landing Page

Urutan di `src/app/page.tsx`. Semua section memakai `<Section>` (setinggi layar penuh, `min-h-dvh`), kecuali Tim.

| # | Section | Anchor | Komponen utama | Sumber data |
|---|---|---|---|---|
| 1 | Hero | `#beranda` | `site-settings/components/hero-section.tsx` | `config/site.ts` |
| 2 | Tentang Kami | `#tentang` | `site-settings/components/about-section.tsx` | CMS `about_us_text` + config |
| 3 | Aktivitas | `#aktivitas` | `activities/components/activities-section.tsx` | CMS `/activities` |
| 4 | Proyek | `#proyek` | `projects/components/projects-section.tsx` | CMS `/projects` |
| 5 | Anggota Tim | `#tim` | `team/components/team-section.tsx` | CMS `/teams` |
| 6 | Testimoni | `#testimoni` | `testimonials/components/testimonials-section.tsx` | CMS `/testimonials` |
| — | Kontak (footer) | `#kontak` | `components/layout/site-footer.tsx` | CMS `/site-settings` |

### 1. Hero

- Latar `bg-gradient-hero` dengan pola titik (dot grid).
- Kiri: label, judul dengan bagian teks bergradien, subjudul, dua tombol ("Lihat Proyek Kami" → `#proyek`, "Tentang Kami" → `#tentang`), dan statistik (`hero-stats.tsx`).
- Kanan: `hero-visual.tsx`, berupa kartu kaca dengan ikon sparkles dan dua label mengambang. Ini **placeholder** untuk aset 3D.
- Semua teks diambil dari `siteConfig.hero`.

### 2. Tentang Kami

- Split 50/50: teks di kiri, foto (`public/images/about-team.jpg`) di kanan.
- Paragraf diambil dari `about_us_text` di CMS. Judul, Visi, Misi, dan foto diambil dari `siteConfig.about`.
- Tombol "Kenali Tim Kami" mengarah ke `#tim`.

### 3. Aktivitas

- **Aktivitas utama** (paling baru): `ImageGallery` (gambar besar + thumbnail) di kiri, `activity-details.tsx` di kanan (kategori, tanggal, judul, deskripsi, kartu Lokasi/Peserta, Sorotan Kegiatan).
- **Aktivitas Lainnya** (`other-activities.tsx`): carousel yang menampilkan 5 kartu per tampilan di desktop, 3 di tablet, dan ±1,5 di mobile. Tombol ‹ › **hanya muncul jika jumlahnya lebih dari 5**.
- Kartu yang diklik dijadikan aktivitas utama, dan halaman bergulir ke atas (`activities-showcase.tsx`, client component).
- Galeri = `cover_image` + `gallery` tanpa duplikat (`utils.ts → getActivityImages`).
- Data aktivitas dari CMS: `title`, `category`, `date` / `date_formatted`, `location`, `participants`, `description`, `highlights`, `cover_image`, `gallery`. Kategori, lokasi, peserta, dan sorotan bersifat opsional: bagian yang kosong disembunyikan. Skema zod juga menerima bentuk API lama (sebelum migration `2026_09_25_130000_add_category_location_participants_highlights_to_activities_table`).

### 4. Proyek

- **Kiri, Daftar Proyek** (`project-list.tsx`): list bernomor (01, 02, …) berisi judul serta "Klien · Tahun". Di desktop tersusun vertikal, bisa di-scroll, dan sticky. Di mobile berubah menjadi baris horizontal.
- **Kanan, detail** (`project-detail.tsx`): galeri dengan badge status (Completed = hijau, On Going = oranye), judul dengan tombol **"Kunjungi Proyek"** di sampingnya (hanya tampil jika `project_url` terisi, membuka tab baru), deskripsi, kartu Klien/Tahun, Sorotan Proyek, dan Tech Stack.
- Data proyek dari CMS: `title`, `client` (opsional), `year` (tahun pembuatan), `status`, `description`, `technologies`, `highlights`, `cover_image`, `gallery`, `project_url`. Skema zod juga menerima bentuk API lama (sebelum migration `2026_09_25_120000_update_projects_add_client_year_highlights`), jadi urutan deploy frontend dan backend tidak masalah.
- Di mobile, memilih proyek akan menggulir layar ke bagian detail.

### 5. Anggota Tim

- Kartu dengan foto persegi, badge singkatan jabatan, nama, dan jabatan lengkap. Hover memunculkan "Lihat Detail". Baris terakhir yang tidak penuh tetap rata tengah.
- Klik kartu membuka **Dialog**: foto, nama, pill jabatan, bio, Keahlian, link sosial media, dan tombol email.
- Jabatan di CMS disimpan dengan format `"CTO (Chief Technology Officer)"`. `parseRole()` di `team/utils.ts` memecahnya menjadi badge `CTO` dan judul lengkap. Format lain tetap ditampilkan apa adanya tanpa badge.
- Tanpa foto, `PersonAvatar` menampilkan inisial di atas gradien.
- Tinggi section mengikuti isi (`fullHeight={false}`).

### 6. Testimoni

- Latar `bg-gradient-testimonial`.
- **1 testimoni:** satu kartu di tengah, tanpa carousel.
- **≥ 2 testimoni:** carousel 1 kartu (mobile) / 2 kartu (desktop). Tombol geser disembunyikan di desktop jika hanya ada 2 testimoni, dan carousel berputar (*loop*) jika lebih dari 2.
- Kartu: rating bintang (1–5), kutipan (HTML dari CMS diubah menjadi teks polos), foto/inisial, nama, dan perusahaan.

---

## Layout: Navbar & Footer

Keduanya dirender di `src/app/layout.tsx` dan menerima data `SiteSettings`.

### Navbar (`components/layout/site-header.tsx`)

- `position: fixed` dengan efek kaca (`bg-white/70 backdrop-blur`). Navbar **melayang di atas halaman** dan tidak memengaruhi tinggi layout. Semua section memakai `scroll-mt-16` agar judulnya tidak tertutup saat dituju lewat anchor.
- Logo di kiri, menu di tengah (desktop), tombol "Hubungi Kami" (gradien, teks putih) di kanan.
- Mobile: tombol menu membuka `Sheet` dari kanan (`mobile-nav.tsx`).
- Logo (`site-logo.tsx`): memakai `company_logo` dari CMS jika ada. Jika tidak, tampil ikon sparkles di atas kotak gradien.

### Footer (`components/layout/site-footer.tsx`)

- Kolom 1: logo, tagline (`siteConfig.footer.tagline`), dan ikon sosial media.
- Kolom 2: navigasi (`siteConfig.footer.navLinks`).
- Kolom 3: kontak, yaitu alamat, email (`mailto:`), dan telepon (`tel:`). Tampil "Informasi kontak akan segera tersedia" jika semuanya kosong.
- Baris bawah: hak cipta (tahun otomatis) dan link legal (`siteConfig.footer.legalLinks`).
- Footer punya `id="kontak"`, yang dituju tombol "Hubungi Kami".

---

## Komponen Shared

`src/components/shared/`. Komponen dipindah ke sini hanya jika dipakai oleh ≥ 2 fitur.

| Komponen | Kegunaan |
|---|---|
| `Section` | Wrapper section: `id`, `aria-labelledby`, container `max-w-6xl`. Prop `fullHeight` (default `true` = `min-h-dvh`). |
| `SectionHeading` | Eyebrow + judul `h2` + deskripsi. `tone="light" \| "dark"`, `align="center" \| "left"`. |
| `ImageGallery` | *(client)* Gambar utama + thumbnail yang bisa dipilih. Prop `mainClassName` (rasio), `overlay` (misal badge), `ringOffsetClassName` (samakan dengan warna latar section). Beri `key` agar reset saat item berganti. |
| `CoverImage` | Gambar `next/image` dengan fallback ikon jika `src` kosong. Memakai `<span>` agar valid di dalam `<button>`. |
| `PersonAvatar` | Foto orang atau inisial di atas gradien. Juga berbasis `<span>`. |
| `InfoCard` | Kartu ikon + label + nilai. Dipakai di dalam `<dl>`. |
| `HighlightList` | Judul kecil + daftar dengan ikon centang. Tidak merender apa pun jika kosong. |
| `SocialLinks` | Daftar link sosial media. `variant="pill"` (label teks) atau `"icon"` (tombol bulat). |
| `SocialIcon` | Ikon brand (Instagram, LinkedIn, Facebook, GitHub, YouTube, X, WhatsApp). Platform lain memakai ikon globe. |
| `EmptyState` | Pesan saat data kosong. `tone="light" \| "dark"`. |

---

## Konfigurasi Konten Statis

Konten yang **tidak** dikelola CMS ada di `src/config/site.ts`:

| Kunci | Isi |
|---|---|
| `sectionIds` | ID anchor setiap section (`beranda`, `tentang`, `aktivitas`, `proyek`, `tim`, `testimoni`, `kontak`). |
| `fallbackName`, `fallbackDescription` | Dipakai saat `site-settings` di CMS kosong. |
| `navLinks` | Menu navbar. |
| `footer` | `tagline`, `navLinks`, dan `legalLinks` di footer. |
| `hero` | `eyebrow`, `headline` (`before` / `highlight` / `after`), `subheadline`, dan `stats`. |
| `about` | `eyebrow`, `title`, `image` (`src`, `alt`), dan `highlights` (Visi & Misi). |

Konten dari CMS (nama perusahaan, logo, kontak, sosial media, teks tentang, dan seluruh entitas) **jangan di-hardcode** di komponen.

---

## Design System

Token didefinisikan di `src/app/globals.css` dengan `@theme` (Tailwind v4).

| Token | Hex | Kegunaan |
|---|---|---|
| `tech-blue` | `#0EA5E9` | Elemen struktural, tautan |
| `tech-cyan` | `#06B6D4` | Aksen, ikon, ring aktif |
| `tech-orange` | `#F97316` | Elemen aksi |
| `tech-pink` | `#EC4899` | Gradien, dekoratif |
| `tech-dark` | `#0F172A` | Teks utama, latar footer |
| `tech-light` | `#F8FAFC` | Latar section konten |

| Utility gradien | Nilai | Dipakai untuk |
|---|---|---|
| `bg-gradient-hero` | `#0F172A → #06B6D4` | Hero, item proyek aktif |
| `bg-gradient-accent` | `#F97316 → #EC4899` | Tombol CTA utama |
| `bg-gradient-testimonial` | `#4F46E5 → #9333EA` | Section testimoni |

Aturan:

- Pakai token di atas (`bg-tech-blue`, `text-tech-dark`, dan seterusnya). Hindari warna hex arbitrer di komponen.
- Mobile-first: kelas dasar untuk mobile, lalu `sm:` / `md:` / `lg:`.
- Satu font: Plus Jakarta Sans (`--font-sans`).
- Animasi dekoratif memakai `motion-safe:`, dan scroll halus menghormati `prefers-reduced-motion`.
- `cn()` (`src/lib/utils.ts`) diambil dari paket `cn`, yang bisa menggabungkan class Tailwind yang bentrok (pengganti `clsx` + `tailwind-merge`).

---

## Gambar

- Semua gambar memakai `next/image` dengan `sizes` yang sesuai.
- Domain yang diizinkan diatur di `next.config.ts` (fungsi berbasis `phase`):
  - **Selalu:** `https://<host API_BASE_URL>/storage/**`, yaitu upload dari CMS, tanpa query string.
  - **Hanya `next dev`:** `https://images.unsplash.com/**`, dipakai oleh data mock.
- Gambar statis ada di `public/images/`, contohnya `about-team.jpg` untuk section Tentang Kami.

---

## Konvensi Kode

1. Satu komponen yang di-export per file. Nama file kebab-case, nama komponen PascalCase.
2. File komponen idealnya < 150 baris. Pecah menjadi sub-komponen jika lebih.
3. `app/` hanya untuk routing. Fetch data hanya lewat `features/*/api` → `lib/api/client.ts`.
4. Fitur tidak boleh meng-import internal fitur lain. Kode yang dipakai bersama diangkat ke `components/shared` atau `lib/`.
5. Tidak memakai barrel file (`index.ts`). Import langsung dengan alias `@/`.
6. Named export, kecuali file konvensi Next.js (`page`, `layout`, dan sejenisnya).
7. `"use client"` hanya pada komponen daun yang butuh state atau event. Saat ini: `mobile-nav`, `image-gallery`, `activities-showcase`, dan `projects-showcase`.
8. `any` dan `@ts-ignore` dilarang.
9. Field opsional wajib punya fallback UI (tidak menampilkan "null" atau elemen kosong).
10. Komentar kode dalam bahasa Inggris.

### Menambah section / entitas baru

1. `features/<fitur>/types.ts`: skema zod yang mengikuti Resource Laravel.
2. `features/<fitur>/api/get-<fitur>.ts`: panggil `apiGet()` dengan tag entitas.
3. `features/<fitur>/mock-data.ts`: data contoh untuk development.
4. `features/<fitur>/components/<fitur>-section.tsx`: bungkus dengan `<Section>` dan `<SectionHeading>`, serta sediakan empty state.
5. Tambahkan ke `Promise.all` di `src/app/page.tsx` lewat `withDevFallback`, lalu daftarkan anchor di `sectionIds` dan menu di `config/site.ts`.

---

## Deploy

Target: **Vercel**.

1. Set environment variable `API_BASE_URL` dan `NEXT_PUBLIC_SITE_URL` di project Vercel.
2. `next.config.ts` membaca `API_BASE_URL` saat build untuk mengizinkan gambar CMS, jadi variabel ini wajib ada **sebelum** build.
3. `npm run build` melakukan prerender landing page, sehingga API harus bisa diakses saat build. Jika tidak bisa, section akan kosong sampai revalidasi berikutnya (maksimal 60 detik setelah ada request).

---

## Keterbatasan & TODO

### Field yang belum tersedia di backend

UI sudah siap menampilkan field berikut, tapi `TeamMemberResource.php` di CMS belum mengirimkannya. Di skema zod, field ini ditandai `// TODO: konfirmasi dengan backend` dan bersifat opsional. Selama kosong, bagian terkait **disembunyikan**, sehingga saat ini hanya terlihat di data mock (development).

| Entitas | Field | Dipakai untuk |
|---|---|---|
| Team | `skills`, `email` | Keahlian dan tombol email di dialog |

Untuk mengaktifkannya: tambah kolom + form Filament + field di Resource pada repo `cms`. Frontend tidak perlu diubah.

> Field Project (`client`, `year`, `highlights`) dan Activity (`category`, `location`, `participants`, `highlights`) sudah ditambahkan di CMS. Kolom tersebut aktif setelah dua migration berikut dijalankan di database Railway:
> - `2026_09_25_120000_update_projects_add_client_year_highlights`
> - `2026_09_25_130000_add_category_location_participants_highlights_to_activities_table`

### Lainnya

- [ ] **Halaman legal belum ada.** `/kebijakan-privasi` dan `/syarat-ketentuan` di footer masih 404. Buat halamannya atau hapus dari `siteConfig.footer.legalLinks`.
- [ ] **Angka statistik Hero** (50+ proyek, 30+ klien, 6+ tahun) masih contoh. Konfirmasi dengan tim bisnis di `siteConfig.hero.stats`.
- [ ] **Visual 3D Hero** masih placeholder CSS (`hero-visual.tsx`).
- [ ] **Foto Tentang Kami** (`public/images/about-team.jpg`) adalah foto stok dari Unsplash. Ganti dengan foto tim asli.
- [ ] **Webhook revalidasi** `app/api/revalidate/route.ts` belum dibuat. Saat ini pembaruan data CMS muncul maksimal 60 detik setelah ada request.
- [ ] **`npm run lint` masih gagal** dengan 1 error `react-hooks/set-state-in-effect` di `src/components/ui/carousel.tsx`. Ini kode bawaan shadcn, bukan kode proyek.
- [ ] **Kontras tombol CTA:** teks putih di atas `bg-gradient-accent` sekitar 2.8:1, di bawah WCAG AA (4.5:1) untuk teks normal. Pertimbangkan `text-tech-dark` bila aksesibilitas menjadi prioritas.
- [ ] **Deskripsi RichEditor** (Aktivitas, Proyek, Testimoni) saat ini ditampilkan sebagai teks polos (`stripHtml`), sehingga format seperti list dan tebal hilang.
- [ ] **Komponen tidak terpakai:** `components/ui/card.tsx` dan `components/ui/dropdown-menu.tsx` bisa dihapus jika memang tidak direncanakan.
- [ ] **Data CMS belum lengkap:** `site-settings`, aktivitas, dan proyek belum diisi. Anggota tim dan testimoni sudah ada, tetapi anggota tim belum punya foto.
