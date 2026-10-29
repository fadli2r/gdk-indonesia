# GDK Indonesia — homepage

Website profil CV Generasi Digital Kreatif Indonesia untuk `generasidigitalkreatif.id`. Source homepage sebelumnya dipulihkan lengkap, termasuk logo, ilustrasi, komponen interaktif dan metadata. Runtime telah disesuaikan menjadi **Next.js pada Node.js**, sehingga dapat diimpor melalui GitHub ke Hostinger Cloud.

Repository ini berbeda dari `gdk-team`, yang digunakan untuk portal karyawan di `team.generasidigitalkreatif.id`.

## Hostinger

Pilih **Node.js Web App / Next.js**, kemudian repository `fadli2r/gdk-indonesia`, branch `main`.

| Pengaturan | Nilai |
|---|---|
| Root directory | `/` (root repository) |
| Framework | Next.js |
| Node.js | 24.x |
| Package manager | npm |
| Install command, jika diminta | `npm ci` |
| Build command | `npm run build` |
| Output directory | `.next` |
| Start command, jika diminta | `npm start` |

`package.json` dan `package-lock.json` berada di root. Build memakai webpack (`next build --webpack`) sesuai kompatibilitas Next.js 16.3.3+ pada Hostinger. Jangan pilih "lanjutkan sebagai website statis" untuk source ini. Server Node melayani hasil build; folder `.next` bukan folder HTML yang diunggah langsung ke `public_html`.

Tidak membutuhkan database, password bootstrap CEO, atau konfigurasi dari repository `gdk-team`. Hostinger menyediakan `PORT`; start script menghormatinya. Untuk build yang mengatur `NODE_ENV=production` sejak tahap instalasi, pastikan development dependencies ikut terpasang (`npm ci --include=dev`), karena TypeScript dan Tailwind diperlukan saat build.

Panduan: [docs/HOSTINGER.md](docs/HOSTINGER.md).

## Pengembangan

```sh
npm ci
npm run dev
```

Produksi:

```sh
npm run build
npm start
```

Validasi TypeScript: `npm run typecheck`. Pemeriksaan otomatis GitHub memeriksa build, typecheck dan respons halaman produksi beserta asetnya.

## Mengubah konten

| File | Isi |
|---|---|
| `app/site-data.ts` | Lini bisnis, skenario, galeri konsep, kontak |
| `app/page.tsx` | Halaman, modal, tab, carousel dan formulir draft |
| `app/globals.css` | Tampilan dan responsivitas |
| `app/layout.tsx` | Metadata domain, judul, Open Graph |
| `public/` | Logo dan aset gambar asli |

**Konten masih versi homepage sebelumnya:** semua lini berlabel In Development, kontak masih demo, dan galeri adalah konsep, bukan klaim proyek klien. Form kontak hanya menyiapkan draft pesan, tidak mengirim email atau WhatsApp. Pembaruan daftar lini bisnis, status aktif dan kontak nyata perlu dilakukan sebelum website dipakai untuk menerima pelanggan. Perbaikan ini memulihkan source dan kompatibilitas hosting; tidak mengubah penawaran bisnis tanpa data final.

Source tidak lagi memerlukan Vinext, Wrangler, Cloudflare Workers, kredensial Sites, atau pnpm. Jangan menyalin folder `.openai`, `.sites-runtime`, `node_modules`, `.next`, atau file `.env` dari environment pengembangan ke GitHub.
