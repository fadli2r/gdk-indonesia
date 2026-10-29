# Impor homepage ke Hostinger

## Penyebab pesan package.json tidak ditemukan

Saat diperiksa, branch `main` repository hanya memuat `README.md`. Source halaman dan aset belum masuk, jadi meneruskan impor sebagai website statis juga belum akan menghasilkan homepage yang lengkap.

Perbaikan memulihkan source, aset dan package manifest pada root serta mengganti runtime build khusus Sites/Cloudflare dengan Next.js standar untuk Node.js. Source asli yang diarsipkan tidak ditimpa.

## Langkah di panel

1. Kembali ke pemilihan repository lalu refresh / pilih ulang `fadli2r/gdk-indonesia`.
2. Pilih branch `main`, root `/` (bukan `app` atau `public`).
3. Pilih framework **Next.js**, Node.js **24.x**, package manager **npm**.
4. Build command **`npm run build`**, output directory **`.next`**. Jika diminta install command gunakan `npm ci`; bila development dependencies dihilangkan oleh konfigurasi panel, gunakan `npm ci --include=dev`.
5. Jika ada pengaturan start command, gunakan **`npm start`**. Jangan gunakan Wrangler atau `next start` dari source lama.
6. Jalankan deploy dan periksa log: instalasi selesai, build selesai, aplikasi aktif. Buka preview Hostinger dan cek bahwa isi homepage GDK tampil, bukan halaman placeholder.

Jika pesan package.json masih muncul, pastikan panel telah membaca commit terbaru dan akses GitHub Hostinger diberikan ke repository yang benar. Hindari impor `gdk-team` untuk homepage.

## Domain

Target homepage pada metadata adalah `https://generasidigitalkreatif.id`. Jika domain yang benar berbeda, ubah kedua nilai URL di `app/layout.tsx` sebelum deploy final. Hubungkan domain melalui petunjuk hPanel. DNS dikelola di Domainesia: gunakan tujuan A/CNAME yang ditampilkan Hostinger, jangan menebak alamat.

Pertahankan record email MX/SPF/DKIM/DMARC dan subdomain `team` saat menghubungkan homepage. Pekerjaan perbaikan repository ini tidak mengubah DNS, email, atau konfigurasi Hostinger.

## Konten sebelum peluncuran

Versi lama masih menampilkan beberapa lini berstatus pengembangan, kontak demo, dan galeri konsep. Tinjau `app/site-data.ts` dan teks status di `app/page.tsx` sesuai bisnis yang benar-benar berjalan. Form draft tidak mengirim pesan. Jangan menganggap kontak demo sebagai kanal pelanggan yang aktif.

## Referensi

- https://www.hostinger.com/support/how-to-deploy-a-nodejs-website-in-hostinger/
- https://www.hostinger.com/support/how-to-fix-next-js-16-turbopack-build-errors-on-hostinger/
- https://nextjs.org/docs/app/getting-started/deploying
