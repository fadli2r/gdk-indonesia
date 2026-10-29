# Deploy GDK Indonesia ke Hostinger

## Pengaturan aplikasi

1. Pilih repository `fadli2r/gdk-indonesia`, branch `main`, root `/`.
2. Framework **Next.js**, Node.js **24.x**, package manager **npm**.
3. Install `npm ci` (atau `npm ci --include=dev` jika panel menghilangkan development dependencies).
4. Build **`npm run build`**, output **`.next`**. Build menggunakan webpack untuk kompatibilitas Hostinger.
5. Start **`npm start`** jika panel meminta. Hostinger menyediakan `PORT`.
6. Deploy commit terbaru. Jika impor lama masih menampilkan package.json tidak ditemukan, pilih ulang repository dan branch.

Jangan upload folder `.next` sebagai HTML statis ke `public_html`. Source ini dijalankan sebagai aplikasi Node.js. Tidak membutuhkan database atau kredensial GDK Team.

## Kontak resmi — isi sebelum menerima pelanggan

Tambahkan variabel berikut pada environment aplikasi **sebelum build/deploy**. Nilainya masuk ke halaman publik. Jangan masukkan password, token, atau rahasia ke variabel `NEXT_PUBLIC_*`.

| Variabel | Nilai |
|---|---|
| `NEXT_PUBLIC_GDK_WHATSAPP` | Nomor WhatsApp bisnis resmi, kode negara `62` tanpa nol awal; hanya digit. Spasi, tanda kurung, `+`, dan `-` akan dinormalisasi. |
| `NEXT_PUBLIC_GDK_EMAIL` | Alamat email bisnis yang memang menerima pesan pelanggan. |
| `NEXT_PUBLIC_GDK_ADDRESS` | Alamat studio/kantor yang boleh ditampilkan publik. Opsional. |

Nomor dan email sengaja tidak diisi dengan contoh. Jika kosong/tidak valid, kanal tersebut tidak ditampilkan. Jika keduanya kosong, halaman menjelaskan kanal konsultasi sedang disiapkan dan hanya menawarkan salin/unduh brief serta tautan Tapulas dan Dreamslink. Website tidak mengklaim pesan berhasil dikirim.

Setelah mengubah variabel `NEXT_PUBLIC_*`, lakukan **build/deploy ulang**, bukan hanya restart. Next.js menyisipkan nilai ini pada waktu build. Environment produksi harus sama saat build dan runtime.

Alur pelanggan: pilih brand → isi nama, kebutuhan, waktu/lokasi opsional → Siapkan brief → tinjau/edit → Lanjut ke WhatsApp atau Buka email. Pengiriman final dilakukan pelanggan di aplikasi tersebut. Website tidak menyimpan isian, tidak mengirim otomatis, dan tidak terhubung ke database `gdk-team`.

## Pemeriksaan setelah deploy

- Homepage menampilkan empat layanan aktif: Famous Studio, Tapulas, Dreamslink, Smart TV.
- Kartu layanan membuka detail; memilih konsultasi mengisi pilihan layanan pada form.
- Tab solusi, FAQ, menu mobile, tombol animasi, salin dan unduh brief berfungsi.
- Jika kontak telah diisi, tombol WhatsApp/email mengarah ke kanal yang benar. Tinjau pesan tanpa perlu mengirim uji ke pelanggan.
- Periksa di ponsel; tidak ada scroll horizontal atau kontrol terpotong.
- Kunjungi website Tapulas dan Dreamslink untuk memastikan tujuan brand siap digunakan.
- Tautan Portal tim menuju `https://team.generasidigitalkreatif.id`; aktifkan deployment `gdk-team` secara terpisah.

## Domain dan email

Target homepage: `https://generasidigitalkreatif.id`. Gunakan record A/CNAME yang ditampilkan Hostinger. DNS domain ada di Domainesia. Pertahankan MX/SPF/DKIM/DMARC serta subdomain `team`. Perubahan repository ini tidak mengubah DNS atau melakukan deployment di hosting.

## Data bisnis

`app/site-data.ts` menyimpan layanan, status, FAQ, dan konfigurasi kontak. Famous Studio, Tapulas, Dreamslink, Smart TV adalah lini aktif. Originfamous dan SW+ ditampilkan untuk konsultasi proyek/acara; MenataMomen berstatus pengembangan. Konco AI, Digital Account Store, dan penyewaan iPhone ditempatkan sebagai inisiatif yang belum diumumkan siap dipesan.

Portofolio/testimoni klien tidak dibuat-buat. Tambahkan hanya materi asli yang diizinkan untuk publikasi. Harga tidak dipatok karena mengikuti penawaran. Ketentuan revisi, pembatalan, penyerahan hasil, dan durasi maintenance harus mengikuti kesepakatan masing-masing layanan.

## Referensi platform

- https://www.hostinger.com/support/how-to-deploy-a-nodejs-website-in-hostinger/
- https://www.hostinger.com/support/how-to-fix-next-js-16-turbopack-build-errors-on-hostinger/
- https://nextjs.org/docs/app/getting-started/deploying
