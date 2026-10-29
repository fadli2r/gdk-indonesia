# GDK Indonesia

Homepage CV Generasi Digital Kreatif Indonesia untuk **generasidigitalkreatif.id**. Next.js pada Node.js, siap diimpor ke Hostinger Cloud dari repository ini. Portal karyawan terpisah di repository `gdk-team` untuk `team.generasidigitalkreatif.id`.

## Isi homepage

- Empat layanan aktif: **Famous Studio, Tapulas, Dreamslink, Smart TV**.
- Ekosistem bisnis/teknologi: Originfamous, Tapulas, Smart TV.
- Ekosistem acara **Social & Wedding+**: Famous Studio, Dreamslink, MenataMomen. SW+ juga melayani konsultasi EO/WO.
- MenataMomen diberi status pengembangan; inisiatif lama ditampilkan terpisah.
- Detail layanan, pilihan solusi lintas brand, cara memesan, FAQ.
- Form brief dengan pemilihan layanan, pratinjau pesan, salin/unduh, dan WhatsApp/email jika kontak resmi dikonfigurasi.
- Tampilan responsif hitam–kuning, navigasi keyboard, dialog, menu mobile, pengaturan animasi dan dukungan reduced motion.

Tidak ada harga, testimoni, klien, nomor telepon, atau alamat rekaan. Galeri konsep lama dihapus dari alur utama; portofolio asli dapat ditambahkan setelah tersedia izin publikasi.

## Deploy Hostinger

| Pengaturan | Nilai |
|---|---|
| Repository / branch | `fadli2r/gdk-indonesia` / `main` |
| Root | `/` |
| Framework / Node | Next.js / 24.x |
| Install | `npm ci` |
| Build | `npm run build` |
| Output | `.next` |
| Start jika diminta | `npm start` |

**Isi kontak resmi sebelum build:** `NEXT_PUBLIC_GDK_WHATSAPP`, `NEXT_PUBLIC_GDK_EMAIL`, dan opsional `NEXT_PUBLIC_GDK_ADDRESS`. Jika kontak kosong, website tetap berjalan tetapi hanya menyiapkan brief, tanpa kanal pengiriman langsung ke GDK. Build ulang setelah mengubah variabel publik.

Panduan lengkap: [docs/HOSTINGER.md](docs/HOSTINGER.md).

## Pengembangan

```sh
npm ci
npm run dev
```

```sh
npm run build
npm run typecheck
npm start
```

GitHub Actions menjalankan instalasi bersih, build produksi, TypeScript, dan smoke HTTP/aset. Build memakai `next build --webpack` untuk kompatibilitas Hostinger. `scripts/dev.mjs` menerima argumen host/port preview tanpa mengubah perintah produksi.

## Sumber konten

| File | Isi |
|---|---|
| `app/site-data.ts` | Brand, layanan, FAQ, skenario, kontak publik |
| `app/page.tsx` | Halaman dan interaksi |
| `app/globals.css` | Identitas visual dan responsivitas |
| `app/layout.tsx` | Metadata dan domain |
| `public/` | Aset asli GDK |

Form diproses lokal dalam browser, tidak menyimpan data server, dan tidak mengirim pesan otomatis. WhatsApp/email dibuka hanya setelah pelanggan memilih tindakan tersebut. Tidak ada autentikasi, pembayaran, atau database internal pada homepage.

Jangan commit `.env`, `.next`, `node_modules`, `.openai`, atau kredensial. Source tidak memerlukan Vinext, Wrangler, Cloudflare Workers, atau pnpm.
