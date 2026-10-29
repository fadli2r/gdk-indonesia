export type Venture = {
  id: string; index: number; name: string; shortName: string; category: string;
  color: string; status: string; active: boolean; summary: string; description: string;
  services: string[]; note: string; website?: string; websiteLabel?: string;
};

export const ventures: Venture[] = [
  { id: "studio", index: 0, name: "Famous Studio", shortName: "Famous Studio", category: "Foto, video & photobooth", color: "#dbb9ff", status: "Layanan aktif", active: true,
    summary: "Abadikan cerita, dari studio hingga hari istimewa.",
    description: "Foto studio di lokasi tetap kami, atau dokumentasi yang datang ke lokasi Anda. Famous Studio melayani kebutuhan personal, prewedding, dan pernikahan dengan layanan foto serta video.",
    services: ["Sesi foto di studio", "Photobooth untuk acara", "Foto prewedding", "Fotografi & videografi wedding", "Layanan dokumentasi ke lokasi"],
    note: "Booking melalui WhatsApp. Paket menyesuaikan kebutuhan dan jadwal; ketersediaan photobooth dikonfirmasi sebelum pemesanan." },
  { id: "tapulas", index: 1, name: "Tapulas", shortName: "Tapulas", category: "NFC & QR untuk merchant", color: "#bde6a0", status: "Layanan aktif", active: true,
    summary: "Permudah pelanggan membuka halaman ulasan bisnis Anda.",
    description: "Produk NFC dan QR yang mengarahkan pelanggan ke halaman Google Review bisnis Anda. Pelanggan cukup tap dengan ponsel yang mendukung NFC, atau scan QR untuk membuka tautan ulasan.",
    services: ["Produk NFC & QR untuk lokasi usaha", "Penghubungan ke profil Google Business", "Bantuan aktivasi oleh tim Tapulas", "Pembelian melalui sales, WhatsApp & marketplace"],
    note: "Pembelian sekali bayar sesuai produk. Pelanggan tetap menentukan apakah akan memberi ulasan; Tapulas tidak menjamin jumlah ulasan atau peringkat bisnis.", website: "https://tapulas.id", websiteLabel: "Kunjungi Tapulas" },
  { id: "dreams", index: 2, name: "Dreamslink", shortName: "Dreamslink", category: "Undangan & penerimaan tamu", color: "#f5c0d7", status: "Layanan aktif", active: true,
    summary: "Dari undangan pertama sampai tamu tiba di acara.",
    description: "Undangan digital dan pengelolaan tamu untuk pasangan maupun wedding organizer. Kelola undangan sendiri atau gunakan bantuan tim, lalu lengkapi acara dengan layanan check-in.",
    services: ["Undangan digital & RSVP", "Buku tamu digital", "Scan QR & check-in tamu", "Opsi petugas dan perangkat di lokasi", "Pengerjaan mandiri atau dibantu tim"],
    note: "Pembayaran melalui QRIS. Undangan tanpa batas masa aktif; beberapa fitur dan layanan acara memiliki biaya tambahan sesuai pilihan paket.", website: "https://dreamslink.id", websiteLabel: "Kunjungi Dreamslink" },
  { id: "hotel", index: 3, name: "Smart TV", shortName: "Smart TV", category: "Teknologi untuk hospitality", color: "#b5dad5", status: "Layanan aktif", active: true,
    summary: "Layar yang menjadi bagian dari pengalaman menginap.",
    description: "Solusi Smart TV berbasis proyek, mencakup perangkat sesuai kebutuhan, sistem, dan pemasangan oleh tim GDK. Kesesuaian TV yang sudah tersedia diperiksa terlebih dahulu.",
    services: ["Konsultasi kebutuhan & survei lokasi", "Paket perangkat dan sistem", "Instalasi & konfigurasi", "Pemeriksaan kompatibilitas TV existing", "Maintenance setelah pemasangan"],
    note: "Penawaran mengikuti ruang lingkup proyek. Periode maintenance awal tercantum dalam kesepakatan; dukungan setelah periode tersebut dikenakan biaya." },
  { id: "origin", index: 4, name: "Originfamous", shortName: "Originfamous", category: "Konsultan & digital agency", color: "#ffec1c", status: "Konsultasi proyek", active: false,
    summary: "Strategi dan eksekusi digital untuk langkah berikutnya.",
    description: "Lini konsultasi dan digital agency GDK untuk membangun kehadiran online, memperjelas identitas brand, dan mengelola pemasaran digital sesuai kebutuhan bisnis.",
    services: ["Pembuatan website", "Social media management", "Search engine optimization (SEO)", "Branding & identitas bisnis", "Pengelolaan iklan digital", "Distribusi kampanye melalui kreator / buzzer"],
    note: "Ruang lingkup, jadwal, dan biaya disusun melalui konsultasi. Hasil pemasaran mengikuti kondisi bisnis, materi, anggaran, dan pelaksanaan kampanye." },
  { id: "organizer", index: 5, name: "Social & Wedding+", shortName: "Social & Wedding+", category: "Ekosistem acara · SW+", color: "#edc099", status: "Konsultasi acara", active: false,
    summary: "Rencanakan momen dengan layanan yang saling terhubung.",
    description: "Social & Wedding+ (SW+) menjadi payung ekosistem acara GDK: Famous Studio, Dreamslink, dan MenataMomen. SW+ juga dapat menangani kebutuhan EO/WO menggunakan vendor internal maupun eksternal.",
    services: ["Perencanaan social event & wedding", "Koordinasi pelaksanaan acara", "Pemilihan & koordinasi vendor", "Pilihan paket sesuai kebutuhan", "Kolaborasi undangan, tamu & dokumentasi"],
    note: "Paket, vendor, ketersediaan tim, dan detail pelaksanaan dikonfirmasi dalam penawaran acara. Penggunaan layanan antarbrand dapat disesuaikan." },
  { id: "menata", index: 6, name: "MenataMomen", shortName: "MenataMomen", category: "Wedding planning platform", color: "#a4d5f5", status: "Dalam pengembangan", active: false,
    summary: "Ruang untuk menyusun rencana hari istimewa.",
    description: "Platform perencanaan pernikahan dalam ekosistem Social & Wedding+, dirancang untuk pasangan dan wedding organizer. MenataMomen masih dalam pengembangan.",
    services: ["Rencana anggaran pernikahan", "Daftar tamu & rencana tempat duduk", "Timeline & checklist persiapan", "Data vendor dan koordinasi pasangan / WO"],
    note: "Fitur di atas merupakan arah pengembangan. Belum ditampilkan sebagai layanan yang siap dipesan." },
];

export const scenarios = [
  { id: "wedding", label: "Pernikahan & acara", title: "Satu momen.\nBanyak detail terhubung.", description: "Mulai dari konsultasi acara bersama SW+, undangan dan check-in Dreamslink, hingga foto, video, serta photobooth Famous Studio. Pilih layanan sesuai kebutuhan acara Anda.", links: [["organizer", "Perencanaan & koordinasi"], ["dreams", "Undangan & penerimaan tamu"], ["studio", "Dokumentasi & photobooth"]] },
  { id: "merchant", label: "Bisnis & merchant", title: "Bantu pelanggan\nmenemukan bisnis Anda.", description: "Bangun kehadiran digital melalui konsultasi Originfamous dan permudah akses ke halaman ulasan bisnis dengan Tapulas. Setiap layanan memiliki penawaran dan lingkup tersendiri.", links: [["tapulas", "NFC & QR ke halaman ulasan"], ["origin", "Website, branding & pemasaran"]] },
  { id: "hospitality", label: "Hotel & properti", title: "Pengalaman menginap\nyang lebih terhubung.", description: "Diskusikan kebutuhan sistem Smart TV dan kesiapan perangkat di properti Anda. Kebutuhan website serta pemasaran digital dapat dibahas bersama Originfamous.", links: [["hotel", "Sistem, instalasi & maintenance"], ["origin", "Kehadiran & pemasaran digital"]] },
];

export const faqs = [
  { question: "Apakah saya bisa memesan satu layanan saja?", answer: "Bisa. Anda dapat memilih satu brand atau membahas beberapa kebutuhan sekaligus. Paket dan layanan tambahan ditentukan dalam penawaran, bukan otomatis termasuk." },
  { question: "Bagaimana cara booking Famous Studio?", answer: "Sampaikan jenis sesi atau acara, tanggal, lokasi, dan kebutuhan dokumentasi melalui WhatsApp. Tim akan mengonfirmasi ketersediaan dan penawaran. Foto studio dibayar di akhir sesi; layanan lainnya menggunakan DP 50% setelah kesepakatan, dengan pelunasan menjelang acara selesai." },
  { question: "Apakah harga paket selalu sama?", answer: "Harga mengikuti pilihan layanan, lokasi, durasi, dan kebutuhan tambahan. Gunakan penawaran yang telah disepakati sebagai acuan pembayaran. Detail revisi, penyerahan hasil, dan perubahan jadwal disepakati sebelum pemesanan." },
  { question: "Bagaimana pembelian dan aktivasi Tapulas?", answer: "Tapulas dibeli sekali sesuai produk. Untuk pembelian langsung, sales membantu aktivasi. Pesanan Shopee diaktivasi admin sebelum dikirim, dengan konfirmasi melalui email pelanggan. Penjualan dan layanan ditangani tim Tapulas." },
  { question: "Apakah Dreamslink bisa digunakan tanpa bantuan tim?", answer: "Bisa. Tersedia pilihan mengelola undangan sendiri maupun dibantu tim. Layanan check-in dengan petugas dan perangkat merupakan pilihan layanan acara yang perlu dikonfirmasi dalam paket." },
  { question: "Apakah Smart TV harus menggunakan perangkat baru?", answer: "Tidak selalu. TV yang sudah ada dapat digunakan jika kompatibel. Tim GDK memeriksa kebutuhan dan dukungan perangkat sebelum menentukan paket proyek, termasuk periode maintenance awal dan biaya dukungan selanjutnya." },
  { question: "Apakah SW+ bisa menggunakan vendor pilihan saya?", answer: "SW+ dapat bekerja dengan vendor internal maupun eksternal. Pembagian tanggung jawab, lingkup koordinasi, dan harga paket dibicarakan saat perencanaan acara." },
];

const phone = (process.env.NEXT_PUBLIC_GDK_WHATSAPP || "").replace(/[\s()+-]/g, "");
const email = (process.env.NEXT_PUBLIC_GDK_EMAIL || "").trim();
export const contacts = {
  whatsapp: /^62\d{8,13}$/.test(phone) ? phone : "",
  email: /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email) ? email : "",
  address: (process.env.NEXT_PUBLIC_GDK_ADDRESS || "").trim(),
};
export const interests = [...ventures.filter(v => v.id !== "menata").map(v => v.name), "Kolaborasi dengan GDK"];
