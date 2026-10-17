export const summaryText = "Frontend Developer with internship experience at PT Edutech Digital Solution, contributing to the development of Hospital Information Systems and Library Information Systems using React.js, Vue.js, JavaScript, Tailwind CSS, Laravel, PHP, and MySQL. Experienced in implementing responsive user interfaces, integrating frontend applications with backend APIs, developing application features, fixing bugs, and collaborating with cross-functional teams using Git-based workflows. A fresh graduate in Software and Game Development (PPLG) from SMK Muhammadiyah 1 Sukoharjo, eager to build modern, scalable, and user-focused web applications while continuously expanding technical expertise.";

export const projectsList = [
  {
    id: 1,
    slug: "dashboard-admin-jimpitanku",
    title: "Dashboard Admin Jimpitanku",
    shortTitle: "Admin Jimpitanku",
    projectType: "Web Application & Administrative Dashboard / Community Financial System",
    projectType_id: "Sistem Informasi Manajemen Jimpitan & Kas Warga (Admin Dashboard)",
    projectType_en: "Web Application & Administrative Dashboard / Community Financial System",
    category: "Web Application",
    year: "2025",
    role: "Fullstack Web Developer",
    client: "Paguyuban Warga & Pengurus RT/RW",
    summary: "Dashboard manajemen terpusat untuk pengurus lingkungan RT/RW dalam memverifikasi setoran ronda, mengelola pembukuan kas digital, mendata warga, dan mencetak laporan keuangan berkala secara transparan.",
    summary_id: "Dashboard manajemen terpusat untuk pengurus lingkungan RT/RW dalam memverifikasi setoran ronda, mengelola pembukuan kas digital, mendata warga, dan mencetak laporan keuangan berkala secara transparan.",
    summary_en: "A centralized administrative dashboard engineered for residential community administrators to verify night patrol collections, balance cash ledgers, manage resident directories, and generate auditable financial reports.",
    problem: "Pengelolaan iuran jimpitan dan kas paguyuban warga secara konvensional rawan terjadi selisih pencatatan, buku kas fisik rentan rusak atau hilang, verifikasi setoran ronda malam berlangsung lambat, dan pengurus kesulitan menyajikan laporan keuangan berkala yang transparan kepada warga.",
    problem_id: "Pengelolaan iuran jimpitan dan kas paguyuban warga secara konvensional rawan terjadi selisih pencatatan, buku kas fisik rentan rusak atau hilang, verifikasi setoran ronda malam berlangsung lambat, dan pengurus kesulitan menyajikan laporan keuangan berkala yang transparan kepada warga.",
    problem_en: "Conventional residential jimpitan collection (nightly spare coin contributions) suffered from frequent record discrepancies, manual paper ledgers prone to damage, slow patrol deposit verification, and zero real-time financial transparency for residents.",
    solution: "Membangun dashboard web modern dengan sistem buku kas otomatis (debit/kredit), alur verifikasi digital untuk setoran petugas ronda, generator QR code per rumah warga, visualisasi grafik pemasukan real-time, serta fitur unduh laporan rekapitulasi keuangan siap cetak.",
    solution_id: "Membangun dashboard web modern dengan sistem buku kas otomatis (debit/kredit), alur verifikasi digital untuk setoran petugas ronda, generator QR code per rumah warga, visualisasi grafik pemasukan real-time, serta fitur unduh laporan rekapitulasi keuangan siap cetak.",
    solution_en: "Architected a modern web dashboard with an automated cash ledger system, digital verification workflow for night-patrol officers, dynamic household QR code generator, real-time analytics charts, and instantaneous PDF/Excel financial report downloads.",
    tags: ["Laravel", "React.js", "Tailwind CSS", "MySQL", "REST API", "Chart.js", "QR Code Engine"],
    keyFeatures: [
      "Dashboard statistik agregat & grafik mingguan",
      "Verifikasi setoran ronda dengan status real-time",
      "Kelola data warga & generator QR stiker rumah",
      "Buku kas digital debit/kredit otomatis",
      "Ekspor laporan keuangan siap unduh"
    ],
    demoLink: "#",
    githubLink: "https://github.com/Dandyskie",
    image: "/Portfolio/Dashboard Admin Jimpitanku /dashboard-admin-jimpitanku.png",
    isMobileScreen: false,
    gallery: [
      {
        src: "/Portfolio/Dashboard Admin Jimpitanku /dashboard-admin-jimpitanku.png",
        title: "Dashboard Ikhtisar & Statistik Kas Utama",
        caption: "Ringkasan metrik saldo total, grafik penerimaan mingguan, dan status aktivitas ronda lingkungan."
      },
      {
        src: "/Portfolio/Dashboard Admin Jimpitanku /kelola-data-warga-view.png",
        title: "Manajemen & Pendataan Warga Lingkungan",
        caption: "Tabel data kependudukan lengkap dengan fitur pencarian, filter status rumah, dan navigasi data."
      },
      {
        src: "/Portfolio/Dashboard Admin Jimpitanku /verif-setoran-view.png",
        title: "Verifikasi & Validasi Setoran Petugas Ronda",
        caption: "Alur validasi satu sentuhan untuk memverifikasi uang fisik hasil ronda yang diserahkan ke bendahara."
      },
      {
        src: "/Portfolio/Dashboard Admin Jimpitanku /buku-kas-view.png",
        title: "Buku Kas Digital & Rekap Transaksi",
        caption: "Pencatatan mutasi kas masuk dan keluar secara otomatis lengkap dengan saldo berjalan."
      },
      {
        src: "/Portfolio/Dashboard Admin Jimpitanku /rekap-jimpitan-view.png",
        title: "Rekapitulasi Agregat Kas Jimpitan Berkala",
        caption: "Tabel rekapitulasi nominal iuran jimpitan per gang/wilayah dalam rentang waktu tertentu."
      },
      {
        src: "/Portfolio/Dashboard Admin Jimpitanku /laporan-unduh-view.png",
        title: "Generator Unduh Laporan Keuangan Warga",
        caption: "Fitur cetak dan unduh lembar pertanggungjawaban kas siap tempel di papan informasi lingkungan."
      },
      {
        src: "/Portfolio/Dashboard Admin Jimpitanku /kelola-qr.png",
        title: "Sistem Manajemen & Cetak QR Code Rumah Warga",
        caption: "Generator kode QR unik untuk stiker tiap rumah warga agar dapat dipindai oleh petugas ronda."
      },
      {
        src: "/Portfolio/Dashboard Admin Jimpitanku /loginpage-admin-jimpitanku.png",
        title: "Autentikasi & Portal Keamanan Administrator",
        caption: "Pintu masuk aman berenkripsi khusus pengurus paguyuban dengan otentikasi sesi terproteksi."
      }
    ]
  },
  {
    id: 2,
    slug: "portal-jimpitan-warga",
    title: "Portal Jimpitan Warga",
    shortTitle: "Portal Jimpitan",
    projectType: "Citizen Public Transparency Portal / Mobile Web App",
    projectType_id: "Portal Transparansi Kas & Pengumuman Warga Berbasis Mobile",
    projectType_en: "Citizen Public Transparency Portal / Mobile Web App",
    category: "Web Application",
    year: "2025",
    role: "Frontend & UI Developer",
    client: "Warga Komunitas Lingkungan",
    summary: "Portal publik ramah ponsel pintar bagi warga untuk memantau saldo kas lingkungan secara langsung, rincian pengeluaran sosial, riwayat setoran per gang, serta pengumuman lingkungan tanpa perlu login rumit.",
    summary_id: "Portal publik ramah ponsel pintar bagi warga untuk memantau saldo kas lingkungan secara langsung, rincian pengeluaran sosial, riwayat setoran per gang, serta pengumuman lingkungan tanpa perlu login rumit.",
    summary_en: "A public-facing, mobile-first transparency portal enabling neighborhood residents to view real-time community balances, monthly expenditure breakdowns, and official announcements without login barriers.",
    problem: "Warga masyarakat kerap tidak mengetahui perkembangan saldo kas jimpitan dan peruntukan dana sosial yang terkumpul, memicu keraguan terhadap transparansi pengelolaan serta menurunkan antusiasme iuran warga.",
    problem_id: "Warga masyarakat kerap tidak mengetahui perkembangan saldo kas jimpitan dan peruntukan dana sosial yang terkumpul, memicu keraguan terhadap transparansi pengelolaan serta menurunkan antusiasme iuran warga.",
    problem_en: "Residents often lacked insight into how nightly coin contributions were spent, causing skepticism regarding fund allocation and decreasing community participation in local environmental programs.",
    solution: "Merancang portal web mobile-first terbuka yang ringan dan cepat dibuka, menampilkan total kas terkini, kartu perbandingan arus kas masuk dan keluar, riwayat verifikasi iuran, serta papan buletin informasi warga secara transparan.",
    solution_id: "Merancang portal web mobile-first terbuka yang ringan dan cepat dibuka, menampilkan total kas terkini, kartu perbandingan arus kas masuk dan keluar, riwayat verifikasi iuran, serta papan buletin informasi warga secara transparan.",
    solution_en: "Created an open, mobile-optimized public web portal featuring live balance meters, monthly inflow/outflow comparison cards, verified deposit histories, and broadcast announcement feeds with instant loading speed.",
    tags: ["React.js", "Tailwind CSS", "REST API", "Lucide Icons", "Mobile-First UX"],
    keyFeatures: [
      "Tampilan saldo kas real-time & transparansi dana",
      "Grafik perbandingan penerimaan dan pengeluaran",
      "Riwayat setoran jimpitan per gang/wilayah",
      "Papan pengumuman kegiatan dan kerja bakti warga"
    ],
    demoLink: "#",
    githubLink: "https://github.com/Dandyskie",
    image: "/Portfolio/Portal Jimpitan Warga/portal-jimpitan-warga-main-view.jpeg",
    isMobileScreen: true,
    gallery: [
      {
        src: "/Portfolio/Portal Jimpitan Warga/portal-jimpitan-warga-main-view.jpeg",
        title: "Tampilan Utama Saldo & Statistik Kas Lingkungan",
        caption: "Tampilan responsif layar ponsel pintar menyajikan total saldo kas dan rekapitulasi iuran warga."
      },
      {
        src: "/Portfolio/Portal Jimpitan Warga/portal-jimpitan-warga.jpeg",
        title: "Detail Riwayat Transaksi & Pengumuman Warga",
        caption: "Halaman riwayat transaksi transparan dan papan pengumuman agenda kegiatan warga."
      }
    ]
  },
  {
    id: 3,
    slug: "sistem-input-jimpitan",
    title: "Sistem Input Jimpitan (Petugas Ronda)",
    shortTitle: "Input Ronda Jimpitan",
    projectType: "Field Collection Tool & Mobile Utility Web App",
    projectType_id: "Aplikasi Input Petugas Ronda Malam Berbasis Mobile",
    projectType_en: "Field Collection Tool & Mobile Utility Web App",
    category: "Web Application",
    year: "2025",
    role: "Frontend & Mobile Web Developer",
    client: "Petugas Ronda Malam RT/RW",
    summary: "Aplikasi web mobile-first berkecepatan tinggi bagi petugas ronda malam untuk memindai QR code rumah warga dan mencatat setoran jimpitan koin secara cepat dalam satu ketukan.",
    summary_id: "Aplikasi web mobile-first berkecepatan tinggi bagi petugas ronda malam untuk memindai QR code rumah warga dan mencatat setoran jimpitan koin secara cepat dalam satu ketukan.",
    summary_en: "A high-speed mobile web tool created for night-shift neighborhood patrol officers to scan resident QR tags and log coin contributions with one tap.",
    problem: "Petugas ronda malam mencatat nominal koin receh menggunakan kertas di tengah kegelapan dan cuaca malam hari. Kertas sering basah, tulisan sulit dibaca, dan data lambat diserahkan ke bendahara lingkungan.",
    problem_id: "Petugas ronda malam mencatat nominal koin receh menggunakan kertas di tengah kegelapan dan cuaca malam hari. Kertas sering basah, tulisan sulit dibaca, dan data lambat diserahkan ke bendahara lingkungan.",
    problem_en: "Night patrol officers recorded coin contributions on paper sheets while walking outdoors at night. Rain, darkness, and illegible handwriting frequently caused lost data, counting errors, and delayed handoffs to treasurers.",
    solution: "Membangun aplikasi web mobile-first dengan kontras tinggi, pemindai barcode/QR instan via kamera smartphone, tombol cepat nominal koin (Rp 500, Rp 1.000, Rp 2.000), serta sinkronisasi instan ke database kas utama.",
    solution_id: "Membangun aplikasi web mobile-first dengan kontras tinggi, pemindai barcode/QR instan via kamera smartphone, tombol cepat nominal koin (Rp 500, Rp 1.000, Rp 2.000), serta sinkronisasi instan ke database kas utama.",
    solution_en: "Built an ultra-responsive, mobile-first web app with a high-contrast dark theme, instant camera QR code scanning, single-tap preset denomination buttons, and offline-tolerant entry synchronization with the central database.",
    tags: ["React.js", "Tailwind CSS", "QR Code Scanner", "Mobile PWA", "REST API"],
    keyFeatures: [
      "Pemindai QR code stiker rumah warga via kamera",
      "Tombol input cepat satu sentuhan untuk nominal koin",
      "Autentikasi aman petugas jaga ronda malam",
      "Validasi data instan langsung tersinkron ke bendahara"
    ],
    demoLink: "#",
    githubLink: "https://github.com/Dandyskie",
    image: "/Portfolio/Sistem Input Jimpitan/sistem-petugas-ronda.jpeg",
    isMobileScreen: true,
    gallery: [
      {
        src: "/Portfolio/Sistem Input Jimpitan/sistem-petugas-ronda.jpeg",
        title: "Antarmuka Input Cepat Setoran & Pindai QR Petugas",
        caption: "Tampilan input cepat koin jimpitan dengan tombol preset nominal dan kamera scanner QR terintegrasi."
      },
      {
        src: "/Portfolio/Sistem Input Jimpitan/loginpage-sistem-petugas-ronda.jpeg",
        title: "Halaman Masuk Otentikasi Petugas Jaga Ronda",
        caption: "Layar login ringkas dan aman untuk petugas ronda malam sebelum memulai patroli keliling lingkungan."
      }
    ]
  },
  {
    id: 4,
    slug: "mutuharjo-library-system",
    title: "Mutuharjo Library Information System",
    shortTitle: "Library System",
    projectType: "Fullstack Educational Information System",
    projectType_id: "Sistem Informasi Manajemen Perpustakaan Sekolah Berbasis Web",
    projectType_en: "Fullstack Educational Information System",
    category: "Web Application",
    year: "2025",
    role: "Fullstack Developer Intern",
    client: "Perpustakaan SMK Muhammadiyah 1 Sukoharjo",
    summary: "Sistem informasi perpustakaan sekolah komprehensif untuk otomatisasi sirkulasi peminjaman, registrasi anggota, katalogisasi buku, penghitungan denda keterlambatan, dan pelacakan pengunjung.",
    summary_id: "Sistem informasi perpustakaan sekolah komprehensif untuk otomatisasi sirkulasi peminjaman, registrasi anggota, katalogisasi buku, penghitungan denda keterlambatan, dan pelacakan pengunjung.",
    summary_en: "A comprehensive school library platform automating book cataloging, member registration, borrowing circulation, overdue fine calculations, and visitor tracking.",
    problem: "Pencatatan sirkulasi buku perpustakaan secara manual menimbulkan antrean panjang peminjaman, ketidaksesuaian stok buku, denda keterlambatan yang luput tercatat, dan ketiadaan data statistik minat baca siswa.",
    problem_id: "Pencatatan sirkulasi buku perpustakaan secara manual menimbulkan antrean panjang peminjaman, ketidaksesuaian stok buku, denda keterlambatan yang luput tercatat, dan ketiadaan data statistik minat baca siswa.",
    problem_en: "Manual paper-based library management resulted in long queues during book checkouts, misplaced inventory, uncollected late fines, and lack of accurate reading metrics.",
    solution: "Mengembangkan sistem web terintegrasi menggunakan React.js dan Laravel dengan fitur pencarian katalog buku cerdas, pencatatan sirkulasi cepat, kalkulasi denda otomatis, dan pembuatan rekapitulasi data pengunjung.",
    solution_id: "Mengembangkan sistem web terintegrasi menggunakan React.js dan Laravel dengan fitur pencarian katalog buku cerdas, pencatatan sirkulasi cepat, kalkulasi denda otomatis, dan pembuatan rekapitulasi data pengunjung.",
    solution_en: "Engineered an end-to-end web system using React.js and Laravel, providing barcode-assisted checkouts, automatic overdue notifications, granular book search filters, and real-time circulation reports.",
    tags: ["Laravel", "React.js", "Tailwind CSS", "MySQL", "REST API", "PHP"],
    keyFeatures: [
      "Manajemen katalog buku & nomor klasifikasi terpadu",
      "Sirkulasi peminjaman dan pengembalian instan",
      "Kalkulator denda keterlambatan otomatis",
      "Kartu anggota digital & laporan statistik sirkulasi"
    ],
    demoLink: "#",
    githubLink: "https://github.com/Dandyskie",
    image: "/Portfolio/Library Information System/library-information-system.png",
    isMobileScreen: false,
    gallery: [
      {
        src: "/Portfolio/Library Information System/library-information-system.png",
        title: "Konsol Manajemen Sirkulasi & Koleksi Buku Perpustakaan",
        caption: "Antarmuka dashboard manajemen buku, peminjaman, pengembalian, serta pencarian koleksi terpadu."
      }
    ]
  },
  {
    id: 5,
    slug: "digitalcare-management-system",
    title: "DigitalCare Management Console",
    shortTitle: "DigitalCare System",
    projectType: "Enterprise Service Dashboard & Incident Management System",
    projectType_id: "Konsol Manajemen Layanan Digital & Sistem Informasi Terpadu",
    projectType_en: "Enterprise Service Dashboard & Incident Management System",
    category: "Web Application",
    year: "2024",
    role: "Frontend Developer Intern",
    client: "PT Edutech Digital Solution",
    summary: "Dashboard enterprise untuk memonitor ketersediaan layanan digital, melacak eskalasi tiket aduan pengguna, serta menganalisis performa kesehatan sistem operasional secara real-time.",
    summary_id: "Dashboard enterprise untuk memonitor ketersediaan layanan digital, melacak eskalasi tiket aduan pengguna, serta menganalisis performa kesehatan sistem operasional secara real-time.",
    summary_en: "An enterprise dashboard created to monitor service uptime, track customer support tickets, coordinate technical escalations, and deliver operational health analytics.",
    problem: "Tim operasional dan teknis menghadapi kendala komunikasi antar departemen yang terfragmentasi, menyebabkan keterlambatan penanganan insiden serta ketiadaan metrik pemantauan status layanan yang terpusat.",
    problem_id: "Tim operasional dan teknis menghadapi kendala komunikasi antar departemen yang terfragmentasi, menyebabkan keterlambatan penanganan insiden serta ketiadaan metrik pemantauan status layanan yang terpusat.",
    problem_en: "Customer service teams and technical staff struggled with fragmented communication channels, leading to delayed incident response times and lack of visibility into system resolution bottlenecks.",
    solution: "Merancang konsol administrasi berbasis Vue.js dan Quasar yang terhubung dengan backend Laravel, menghadirkan papan pelacakan tiket aduan terintegrasi, indikator tingkat urgensi, dan ringkasan metrik kesehatan layanan.",
    solution_id: "Merancang konsol administrasi berbasis Vue.js dan Quasar yang terhubung dengan backend Laravel, menghadirkan papan pelacakan tiket aduan terintegrasi, indikator tingkat urgensi, dan ringkasan metrik kesehatan layanan.",
    solution_en: "Built an interactive admin console with Vue.js, Quasar, and Laravel REST APIs, delivering unified ticket tracking boards, severity-level indicators, live alerts, and aggregated service uptime summaries.",
    tags: ["Vue.js", "Quasar Framework", "Laravel", "REST API", "Tailwind CSS", "MySQL"],
    keyFeatures: [
      "Pelacakan tiket insiden & alur eskalasi bertingkat",
      "Metrik operasional terpadu & pemantauan status server",
      "Penyaringan data cepat berdasarkan departemen & prioritas",
      "Laporan performa layanan periodik siap cetak"
    ],
    demoLink: "#",
    githubLink: "https://github.com/Dandyskie",
    image: "/Portfolio/Digital Care/digital-care-information-system.png",
    isMobileScreen: false,
    gallery: [
      {
        src: "/Portfolio/Digital Care/digital-care-information-system.png",
        title: "Dashboard Metrik Operasional & Pemantauan Layanan DigitalCare",
        caption: "Tampilan ringkasan metrik performa sistem, kartu status insiden, dan monitoring tiket pelanggan."
      }
    ]
  },
  {
    id: 6,
    slug: "abon-ps-mas",
    title: "Abon PS Mas Landing Page & E-Commerce Catalog",
    shortTitle: "Abon PS Mas",
    projectType: "Commercial Product Landing Page & Digital Order Catalog",
    projectType_id: "Landing Page Produk & Katalog Pemesanan Digital UMKM",
    projectType_en: "Commercial Product Landing Page & Digital Order Catalog",
    category: "Landing Page",
    year: "2025",
    role: "Frontend Web Developer",
    client: "UMKM Abon PS Mas",
    summary: "Landing page promosi dan etalase katalog produk digital untuk merek olahan abon sapi lokal, menampilkan varian rasa, harga paket, dan pemesanan instan via WhatsApp.",
    summary_id: "Landing page promosi dan etalase katalog produk digital untuk merek olahan abon sapi lokal, menampilkan varian rasa, harga paket, dan pemesanan instan via WhatsApp.",
    summary_en: "A vibrant promotional landing page and digital product catalog crafted for an authentic local culinary brand, featuring flavor showcases and seamless WhatsApp checkout.",
    problem: "Usaha UMKM abon lokal belum memiliki etalase online terpusat. Pelanggan harus menanyakan daftar varian rasa, berat kemasan, dan harga satu per satu via pesan singkat, yang membatasi konversi penjualan.",
    problem_id: "Usaha UMKM abon lokal belum memiliki etalase online terpusat. Pelanggan harus menanyakan daftar varian rasa, berat kemasan, dan harga satu per satu via pesan singkat, yang membatasi konversi penjualan.",
    problem_en: "The local MSME business lacked a central digital storefront. Customers had to ask about flavors, packaging weights, and prices individually over messaging apps, limiting order conversion.",
    solution: "Mengembangkan landing page interaktif dengan etalase katalog varian produk (manis, gurih, pedas), informasi kualitas bahan baku, ulasan pelanggan, serta tombol beli cepat yang terhubung ke WhatsApp otomatis.",
    solution_id: "Mengembangkan landing page interaktif dengan etalase katalog varian produk (manis, gurih, pedas), informasi kualitas bahan baku, ulasan pelanggan, serta tombol beli cepat yang terhubung ke WhatsApp otomatis.",
    solution_en: "Designed and deployed an enticing web storefront featuring interactive flavor selection cards, nutritional highlights, customer social proof, and direct-to-WhatsApp order triggers.",
    tags: ["React.js", "Tailwind CSS", "JavaScript", "Vite", "Responsive Design"],
    keyFeatures: [
      "Etalase katalog varian produk dengan visual menggugah",
      "Rincian harga kemasan & informasi komposisi higienis",
      "Integrasi pemesanan langsung ke WhatsApp otomatis",
      "Performa loading super cepat & mobile-first optimized"
    ],
    demoLink: "https://abon-ps-mas.vercel.app/",
    githubLink: "https://github.com/Dandyskie",
    image: "/Portfolio/Abon Ps Mas /abon-ps-mas.png",
    isMobileScreen: false,
    gallery: [
      {
        src: "/Portfolio/Abon Ps Mas /abon-ps-mas.png",
        title: "Tampilan Hero & Profil Keunggulan Produk Abon PS Mas",
        caption: "Desain visual halaman utama yang menonjolkan cita rasa khas dan keaslian bahan baku lokal."
      },
      {
        src: "/Portfolio/Abon Ps Mas /katalog-view.png",
        title: "Etalase Katalog Varian Rasa & Pemesanan Langsung",
        caption: "Tabel dan kartu varian kemasan produk dengan tombol order langsung ke layanan WhatsApp."
      }
    ]
  },
  {
    id: 7,
    slug: "maskoling-cafe-photobooth",
    title: "Maskoling Cafe & Maskoling Photobooth",
    shortTitle: "Maskoling Cafe",
    projectType: "Food & Beverage Digital Menu and Photobooth Showcase",
    projectType_id: "Website Profil Bisnis Kafe & Layanan Studio Photobooth Modern",
    projectType_en: "Food & Beverage Digital Menu and Photobooth Showcase",
    category: "Landing Page",
    year: "2024",
    role: "Frontend Web Developer",
    client: "Maskoling Cafe & Studio",
    summary: "Website menu digital ramah mobile dan showcase layanan photobooth modern untuk kafe hits, menampilkan daftar menu kopi, paket foto, dan lokasi berkunjung.",
    summary_id: "Website menu digital ramah mobile dan showcase layanan photobooth modern untuk kafe hits, menampilkan daftar menu kopi, paket foto, dan lokasi berkunjung.",
    summary_en: "A fast mobile-first web menu and studio showcase designed for a trendy urban coffee shop and instant photobooth business.",
    problem: "Pengunjung kafe kesulitan melihat daftar menu minuman dan pilihan paket photobooth pada lembaran fisik yang mudah rusak dan tidak terbarui saat jam ramai malam hari.",
    problem_id: "Pengunjung kafe kesulitan melihat daftar menu minuman dan pilihan paket photobooth pada lembaran fisik yang mudah rusak dan tidak terbarui saat jam ramai malam hari.",
    problem_en: "Customer patrons struggled to browse full drink menus and available photobooth frame packages on physical printouts that quickly got damaged or outdated during busy evening hours.",
    solution: "Membangun website mobile-first yang ringan dan cepat dibuka, menyajikan katalog menu minuman/makanan, rincian harga paket sesi photobooth, jam operasional, serta petunjuk arah navigasi peta.",
    solution_id: "Membangun website mobile-first yang ringan dan cepat dibuka, menyajikan katalog menu minuman/makanan, rincian harga paket sesi photobooth, jam operasional, serta petunjuk arah navigasi peta.",
    solution_en: "Created an ultra-lightweight, mobile-first website displaying clean digital menus, price categories, photobooth studio sample layouts, operating hours, and Google Maps directions.",
    tags: ["HTML5", "CSS3", "JavaScript", "Mobile-First Design", "Responsive Layout"],
    keyFeatures: [
      "Menu kopi dan makanan digital interaktif",
      "Katalog paket photobooth dan contoh hasil foto cetak",
      "Petunjuk rute navigasi Google Maps terintegrasi",
      "Akses super cepat tanpa beban kuota internet"
    ],
    demoLink: "https://maskolingcarcoffe.vercel.app/",
    githubLink: "https://github.com/Dandyskie",
    image: "/Portfolio/Maskoling Cafe & Maskoling Photobooth/maskoling-cafe.png",
    isMobileScreen: false,
    gallery: [
      {
        src: "/Portfolio/Maskoling Cafe & Maskoling Photobooth/maskoling-cafe.png",
        title: "Daftar Menu Kopi & Sajian Kuliner Kafe Maskoling",
        caption: "Tampilan digital menu kopi favorit dan cemilan santai dengan tipografi bersih dan mudah dibaca."
      },
      {
        src: "/Portfolio/Maskoling Cafe & Maskoling Photobooth/photobooth.png",
        title: "Paket Layanan & Galeri Studio Maskoling Photobooth",
        caption: "Showcase frame foto photobooth kekinian, tarif paket sesi, serta petunjuk reservasi studio."
      }
    ]
  },
  {
    id: 8,
    slug: "peta-adventure-portal",
    title: "Peta Adventure Portal & Outdoor Gear Catalog",
    shortTitle: "Peta Adventure",
    projectType: "Eco-Tourism Portal & Camping Equipment Rental Showcase",
    projectType_id: "Portal Eksplorasi Wisata Petualangan & Katalog Sewa Alat Outdoor",
    projectType_en: "Eco-Tourism Portal & Camping Equipment Rental Showcase",
    category: "Web Application",
    year: "2025",
    role: "Frontend Web Developer",
    client: "Komunitas Peta Adventure",
    summary: "Portal wisata petualangan alam yang menyediakan panduan jalur hiking terpadu dan katalog persewaan perlengkapan outdoor bagi pendaki dan penikmat alam.",
    summary_id: "Portal wisata petualangan alam yang menyediakan panduan jalur hiking terpadu dan katalog persewaan perlengkapan outdoor bagi pendaki dan penikmat alam.",
    summary_en: "An adventure tourism web portal offering trail destination recommendations alongside an outdoor equipment rental catalog for hikers and campers.",
    problem: "Para penggiat alam bebas harus mencari informasi di berbagai tempat terpisah untuk menemukan rute pendakian, mengecek tingkat kesulitan medan, dan mencari tempat sewa tenda terpercaya.",
    problem_id: "Para penggiat alam bebas harus mencari informasi di berbagai tempat terpisah untuk menemukan rute pendakian, mengecek tingkat kesulitan medan, dan mencari tempat sewa tenda terpercaya.",
    problem_en: "Outdoor enthusiasts had to browse multiple fragmented sources to research camping destinations, assess trail difficulty, and locate reliable camping gear rentals nearby.",
    solution: "Membangun platform terpadu yang memadukan profil destinasi pendakian, panduan medan, galeri foto keindahan alam, serta katalog persewaan tenda dan perlengkapan gunung siap sewa.",
    solution_id: "Membangun platform terpadu yang memadukan profil destinasi pendakian, panduan medan, galeri foto keindahan alam, serta katalog persewaan tenda dan perlengkapan gunung siap sewa.",
    solution_en: "Built an integrated adventure platform combining curated hiking trail profiles, difficulty badges, scenery galleries, and a gear rental catalog with instant booking inquiries.",
    tags: ["React.js", "Tailwind CSS", "JavaScript", "Vite", "Framer Motion"],
    keyFeatures: [
      "Peta rekomendasi destinasi alam dan rute hiking",
      "Katalog penyewaan perlengkapan kemping & tenda",
      "Filter kategori gear berdasarkan kebutuhan petualang",
      "Informasi keamanan rute dan tips pendakian"
    ],
    demoLink: "https://petaadventure.vercel.app/",
    githubLink: "https://github.com/Dandyskie",
    image: "/Portfolio/Peta Adventure/peta-adventure.png",
    isMobileScreen: false,
    gallery: [
      {
        src: "/Portfolio/Peta Adventure/peta-adventure.png",
        title: "Portal Utama Eksplorasi Destinasi & Peta Petualangan",
        caption: "Tampilan beranda eksplorasi spot wisata alam dengan kartu jalur dan indikator kesulitan medan."
      },
      {
        src: "/Portfolio/Peta Adventure/katalog-peta-adventure.png",
        title: "Katalog Persewaan Alat Outdoor & Perlengkapan Kemping",
        caption: "Katalog lengkap tenda dome, carrier, kompor camping, dan peralatan outdoor dengan harga sewa."
      }
    ]
  },
  {
    id: 9,
    slug: "batrisha-makeup-artist",
    title: "Batrisha Make Up Artist Portfolio & Booking",
    shortTitle: "Batrisha MUA",
    projectType: "Beauty Service Showcase & Luxury Portfolio Landing Page",
    projectType_id: "Portofolio Digital & Layanan Reservasi Make Up Artist (MUA)",
    projectType_en: "Beauty Service Showcase & Luxury Portfolio Landing Page",
    category: "Landing Page",
    year: "2025",
    role: "Frontend & UI/UX Developer",
    client: "Batrisha Beauty Studio",
    summary: "Landing page portofolio mewah dan berestetika tinggi untuk jasa Make Up Artist profesional, menampilkan galeri riasan wisuda, wedding, dan reservasi jadwal.",
    summary_id: "Landing page portofolio mewah dan berestetika tinggi untuk jasa Make Up Artist profesional, menampilkan galeri riasan wisuda, wedding, dan reservasi jadwal.",
    summary_en: "An elegant, high-conversion portfolio landing page built for a professional beauty makeup artist, showcasing wedding, graduation, and photoshoot portfolios.",
    problem: "MUA mengandalkan feed media sosial yang sering teracak untuk menampilkan hasil riasan, menimbulkan pertanyaan harga berulang dan ketiadaan wadah testimoni resmi yang terstruktur.",
    problem_id: "MUA mengandalkan feed media sosial yang sering teracak untuk menampilkan hasil riasan, menimbulkan pertanyaan harga berulang dan ketiadaan wadah testimoni resmi yang terstruktur.",
    problem_en: "The beauty artist relied solely on social media feeds to display work, resulting in repetitive price inquiries and no dedicated showcase for client reviews and high-resolution galleries.",
    solution: "Merancang landing page bernuansa anggun dengan galeri resolusi tinggi, tabel paket layanan terperinci, testimoni klien, serta tombol konsultasi langsung yang memudahkan calon pengantin.",
    solution_id: "Merancang landing page bernuansa anggun dengan galeri resolusi tinggi, tabel paket layanan terperinci, testimoni klien, serta tombol konsultasi langsung yang memudahkan calon pengantin.",
    solution_en: "Developed a luxury-styled landing page featuring high-resolution lookbooks, categorized service packages (Wedding, Engagement, Graduation), client testimonials, and WhatsApp booking triggers.",
    tags: ["React.js", "Tailwind CSS", "Framer Motion", "Vite", "Lucide Icons"],
    keyFeatures: [
      "Galeri portofolio riasan beresolusi tinggi",
      "Paket layanan transparan (Wedding, Wisuda, Event)",
      "Tata letak mewah dengan animasi transisi elegan",
      "Tombol konsultasi & booking jadwal via WhatsApp"
    ],
    demoLink: "https://batrisha-mua.vercel.app",
    githubLink: "https://github.com/Dandyskie",
    image: "/Portfolio/Batrisha MUA/BATRISA MUA - LP DESKTOP.png",
    isMobileScreen: false,
    gallery: [
      {
        src: "/Portfolio/Batrisha MUA/BATRISA MUA - LP DESKTOP.png",
        title: "Tampilan Desktop Elegan Portofolio Riasan Batrisha MUA",
        caption: "Komposisi visual editorial mewah dengan showcase hasil riasan wajah dan daftar paket kecantikan."
      }
    ]
  },
  {
    id: 10,
    slug: "skytive-studio",
    title: "Skytive Studio Creative Agency Website",
    shortTitle: "Skytive Studio",
    projectType: "Creative Digital Agency Profile & Services Showcase",
    projectType_id: "Company Profile & Portofolio Agensi Digital Kreatif",
    projectType_en: "Creative Digital Agency Profile & Services Showcase",
    category: "Landing Page",
    year: "2025",
    role: "Frontend Web Developer & UI Designer",
    client: "Skytive Creative Studio",
    summary: "Website representatif agensi kreatif kontemporer untuk menampilkan portofolio branding, perancangan UI/UX, dan pengembangan solusi web modern kepada calon klien bisnis.",
    summary_id: "Website representatif agensi kreatif kontemporer untuk menampilkan portofolio branding, perancangan UI/UX, dan pengembangan solusi web modern kepada calon klien bisnis.",
    summary_en: "A contemporary creative agency website designed to present digital services, creative branding case studies, and modern web solutions to prospective business partners.",
    problem: "Sebagai studio kreatif digital yang sedang berkembang, Skytive membutuhkan identitas web yang khas dan berstandar internasional agar dapat menarik kepercayaan klien korporat dan startup.",
    problem_id: "Sebagai studio kreatif digital yang sedang berkembang, Skytive membutuhkan identitas web yang khas dan berstandar internasional agar dapat menarik kepercayaan klien korporat dan startup.",
    problem_en: "As an emerging creative studio, Skytive needed a compelling digital identity that stood out from standard generic agency templates to win contracts with modern corporate clients.",
    solution: "Membangun website berkonsep editorial modern dengan tipografi berani, animasi mikro yang mulus, pilar layanan terstruktur (Branding, UI/UX, Web Dev), serta formulir kontak proyek yang profesional.",
    solution_id: "Membangun website berkonsep editorial modern dengan tipografi berani, animasi mikro yang mulus, pilar layanan terstruktur (Branding, UI/UX, Web Dev), serta formulir kontak proyek yang profesional.",
    solution_en: "Engineered an editorial-style agency profile featuring bold typography, sleek micro-interactions, distinct service pillars, client case studies, and an intuitive project inquiry pathway.",
    tags: ["React.js", "Tailwind CSS", "Framer Motion", "JavaScript", "Vite"],
    keyFeatures: [
      "Desain editorial berkelas dengan estetika visual mutakhir",
      "Pilar layanan kreatif (Branding, UI/UX, Pengembangan Web)",
      "Animasi interaksi responsif yang dinamis",
      "Struktur navigasi jelas untuk konversi calon klien"
    ],
    demoLink: "#",
    githubLink: "https://github.com/Dandyskie",
    image: "/Portfolio/Skytive Studio/skytive-studio.png",
    isMobileScreen: false,
    gallery: [
      {
        src: "/Portfolio/Skytive Studio/skytive-studio.png",
        title: "Tampilan Showcase Profil & Layanan Kreatif Skytive Studio",
        caption: "Komposisi desain modern mencerminkan kapabilitas agensi dalam mendesain produk digital berkualitas tinggi."
      }
    ]
  },
  {
    id: 11,
    slug: "skh-drone",
    title: "SKH Drone Community & Aerial Photography Showcase",
    shortTitle: "SKH Drone",
    projectType: "Tech Community & Drone Aerial Service Platform",
    projectType_id: "Website Showcase Komunitas Drone & Jasa Dokumentasi Udara",
    projectType_en: "Tech Community & Drone Aerial Service Platform",
    category: "Landing Page",
    year: "2025",
    role: "Frontend Web Developer",
    client: "Komunitas SKH Drone Sukoharjo",
    summary: "Website bernuansa teknologi futuristik untuk komunitas pilot drone dan penyedia jasa dokumentasi udara di Sukoharjo, menampilkan armada drone dan portofolio foto/video udara.",
    summary_id: "Website bernuansa teknologi futuristik untuk komunitas pilot drone dan penyedia jasa dokumentasi udara di Sukoharjo, menampilkan armada drone dan portofolio foto/video udara.",
    summary_en: "A tech-forward website built for a regional drone pilot community and aerial cinematography service, highlighting drone equipment specifications and breathtaking aerial media.",
    problem: "Penyelenggara acara dan klien komersial yang membutuhkan dokumentasi udara kesulitan menemukan penyedia jasa pilot drone lokal yang kredibel dengan spesifikasi armada yang jelas.",
    problem_id: "Penyelenggara acara dan klien komersial yang membutuhkan dokumentasi udara kesulitan menemukan penyedia jasa pilot drone lokal yang kredibel dengan spesifikasi armada yang jelas.",
    problem_en: "Event organizers and commercial clients in need of aerial documentation lacked a credible local directory to inspect pilot certifications, equipment fleet capabilities, and rates.",
    solution: "Mengembangkan web showcase dengan visual modern beresolusi tinggi, spesifikasi teknis armada drone (Cinematography, FPV, Mapping), testimoni klien, serta jalur konsultasi penyewaan jasa pilot.",
    solution_id: "Mengembangkan web showcase dengan visual modern beresolusi tinggi, spesifikasi teknis armada drone (Cinematography, FPV, Mapping), testimoni klien, serta jalur konsultasi penyewaan jasa pilot.",
    solution_en: "Crafted a futuristic showcase portal presenting aerial video highlights, detailed drone specifications (FPV, Cinema, Mapping), pilot certifications, and fast service booking inquiry channels.",
    tags: ["React.js", "Tailwind CSS", "Lucide Icons", "Framer Motion", "Vite"],
    keyFeatures: [
      "Showcase hasil foto dan video udara resolusi tinggi",
      "Spesifikasi teknis armada drone dan teknologi kamera",
      "Paket jasa dokumentasi event, pemetaan, dan sinematografi",
      "Desain futuristik dengan performa optimal di semua perangkat"
    ],
    demoLink: "#",
    githubLink: "https://github.com/Dandyskie",
    image: "/Portfolio/Skh Drone/skhdrone.png",
    isMobileScreen: false,
    gallery: [
      {
        src: "/Portfolio/Skh Drone/skhdrone.png",
        title: "Tampilan Utama Platform Showcase SKH Drone & Layanan Udara",
        caption: "Hero section modern yang memperkenalkan armada drone canggih dan hasil karya sinematografi udara."
      }
    ]
  },
  {
    id: 12,
    slug: "safe-payment-guard",
    title: "Safe Payment Guard (SPG) Security Landing Page",
    shortTitle: "Safe Payment Guard",
    projectType: "Fintech Security Landing Page & Solution Showcase",
    projectType_id: "Landing Page Edukasi Keamanan Transaksi Finansial Digital",
    projectType_en: "Fintech Security Landing Page & Solution Showcase",
    category: "Landing Page",
    year: "2024",
    role: "Frontend Web Developer",
    client: "Fintech Security Initiative",
    summary: "Landing page fintech modern untuk mengedukasi pengguna tentang protokol pembayaran digital yang aman, perlindungan anti-fraud, dan enkripsi transaksi terverifikasi.",
    summary_id: "Landing page fintech modern untuk mengedukasi pengguna tentang protokol pembayaran digital yang aman, perlindungan anti-fraud, dan enkripsi transaksi terverifikasi.",
    summary_en: "A modern fintech landing page built to educate consumers on secure transaction protocols, fraud prevention shields, and digital payment encryption standards.",
    problem: "Pengguna layanan keuangan kerap ragu mengadopsi dompet digital baru karena kekhawatiran terhadap penipuan online, pencurian data, dan minimnya penjelasan keamanan yang mudah dipahami.",
    problem_id: "Pengguna layanan keuangan kerap ragu mengadopsi dompet digital baru karena kekhawatiran terhadap penipuan online, pencurian data, dan minimnya penjelasan keamanan yang mudah dipahami.",
    problem_en: "Consumers frequently hesitated to adopt new digital wallet solutions due to fear of online fraud, phishing threats, and lack of visual assurance regarding bank-grade safety.",
    solution: "Merancang landing page berkonsep trustworthy dengan ilustrasi proteksi keamanan berlapis, kartu penjelasan fitur anti-fraud cerdas, simulasi alur transaksi aman, dan tata letak yang ramah pengguna.",
    solution_id: "Merancang landing page berkonsep trustworthy dengan ilustrasi proteksi keamanan berlapis, kartu penjelasan fitur anti-fraud cerdas, simulasi alur transaksi aman, dan tata letak yang ramah pengguna.",
    solution_en: "Designed a high-trust landing page featuring clear security badge tiers, interactive fraud-detection breakdowns, responsive feature grids, and accessible safety guidelines.",
    tags: ["HTML5", "CSS3", "JavaScript", "Bootstrap 5", "Responsive UI"],
    keyFeatures: [
      "Visualisasi sistem proteksi enkripsi transaksi multi-lapis",
      "Kartu edukasi pencegahan kejahatan siber & phishing",
      "Tata letak profesional yang membangun rasa aman pengguna",
      "Kompatibel di seluruh peramban web desktop dan mobile"
    ],
    demoLink: "#",
    githubLink: "https://github.com/Dandyskie",
    image: "/Portfolio/SPG/spg.png",
    isMobileScreen: false,
    gallery: [
      {
        src: "/Portfolio/SPG/spg.png",
        title: "Tampilan Landing Page Keamanan Finansial Safe Payment Guard",
        caption: "Struktur layout bersih dengan penekanan pada rasa aman, ikon proteksi, dan keandalan sistem transaksi."
      }
    ]
  },
  {
    id: 13,
    slug: "pplg2-class-website",
    title: "PPLG 2 Class Community Website",
    shortTitle: "PPLG 2 Class",
    projectType: "Educational Class Community & Student Portfolio Portal",
    projectType_id: "Website Komunitas Kelas & Showcase Karya Siswa PPLG 2",
    projectType_en: "Educational Class Community & Student Portfolio Portal",
    category: "Web Application",
    year: "2024",
    role: "Frontend Developer & Class Contributor",
    client: "SMK Muhammadiyah 1 Sukoharjo (PPLG 2)",
    summary: "Website komunitas kelas interaktif untuk siswa jurusan Pengembangan Perangkat Lunak dan Gim, memamerkan profil siswa, proyek coding, jadwal, dan galeri belajar.",
    summary_id: "Website komunitas kelas interaktif untuk siswa jurusan Pengembangan Perangkat Lunak dan Gim, memamerkan profil siswa, proyek coding, jadwal, dan galeri belajar.",
    summary_en: "An interactive class community website built for Software & Game Development students to showcase profiles, coding projects, and learning activities.",
    problem: "Siswa jurusan RPL/PPLG belum memiliki wadah digital bersama untuk menampilkan karya proyek coding, portofolio tiap anggota kelas, dan arsip jadwal pelajaran secara rapi.",
    problem_id: "Siswa jurusan RPL/PPLG belum memiliki wadah digital bersama untuk menampilkan karya proyek coding, portofolio tiap anggota kelas, dan arsip jadwal pelajaran secara rapi.",
    problem_en: "Students in the vocational software engineering program had no unified space to present their collective portfolios, share GitHub repositories, and document milestones.",
    solution: "Mengembangkan portal kelas modern dan interaktif dengan direktori siswa, tautan repositori GitHub proyek coding, galeri dokumentasi kegiatan, serta struktur kelas terpadu.",
    solution_id: "Mengembangkan portal kelas modern dan interaktif dengan direktori siswa, tautan repositori GitHub proyek coding, galeri dokumentasi kegiatan, serta struktur kelas terpadu.",
    solution_en: "Engineered an energetic, responsive class portal featuring student directory cards, project showcases, classroom documentation, and direct GitHub links.",
    tags: ["React.js", "Tailwind CSS", "Framer Motion", "Vercel", "JavaScript"],
    keyFeatures: [
      "Direktori profil seluruh siswa dan tautan portofolio GitHub",
      "Showcase proyek software dan gim karya siswa",
      "Galeri dokumentasi kebersamaan dan jadwal pelajaran",
      "Desain interaktif bergaya tech-punk yang dinamis"
    ],
    demoLink: "https://pplg2punk.vercel.app",
    githubLink: "https://github.com/Dandyskie",
    image: "/Portfolio/Pplg 2 Class/pplg2-class-website.png",
    isMobileScreen: false,
    gallery: [
      {
        src: "/Portfolio/Pplg 2 Class/pplg2-class-website.png",
        title: "Tampilan Utama Portal Kelas PPLG 2 SMK Muhammadiyah 1 Sukoharjo",
        caption: "Desain cyberpunk-punk energik yang menampilkan struktur kelas, dokumentasi, dan karya coding siswa."
      }
    ]
  }
];

export const getProjectBySlug = (slug) => {
  return projectsList.find((p) => p.slug === slug) || null;
};

export const getNextProject = (currentSlug) => {
  const index = projectsList.findIndex((p) => p.slug === currentSlug);
  if (index === -1) return projectsList[0];
  return projectsList[(index + 1) % projectsList.length];
};

export const getPrevProject = (currentSlug) => {
  const index = projectsList.findIndex((p) => p.slug === currentSlug);
  if (index === -1) return projectsList[projectsList.length - 1];
  return projectsList[(index - 1 + projectsList.length) % projectsList.length];
};

export const experienceList = [
  {
    role: "Frontend Developer Intern",
    company: "PT Edutech Digital Solution",
    period: "Jun 2025 - Apr 2026",
    description: "Contributed to the development of multiple web-based information systems in a collaborative development environment, working closely with backend developers and senior engineers to deliver responsive and user-friendly web applications. Assisted in building Hospital Information Systems and Library Information Systems.",
    skills: ["React.js", "Vue.js", "JavaScript", "Tailwind CSS", "Laravel", "PHP", "MySQL", "Git"]
  }
];

export const educationList = [
  {
    school: "SMK Muhammadiyah 1 Sukoharjo",
    period: "Jul 2023 - May 2026",
    field: "Software and Game Development (PPLG)",
    grade: "84.36 / 100",
    description: "Focused on programming, web development, and information systems with a practical hands-on curriculum."
  }
];

export const skillsCategories = {
  Frontend: ["JavaScript", "HTML5", "CSS3", "Typescript", "Tailwind CSS", "React Js", "Next Js", "Vue Js"],
  Backend: ["Python", "Node Js", "PHP", "Laravel", "Express Js", "REST API"],
  Tools: ["Git & GitHub", "Gitlab", "Postman", "Figma", "NPM", "Composer"],
  "Databases & ORM": ["MySQL", "PostgreSQL", "SQLite", "Prisma"]
};
