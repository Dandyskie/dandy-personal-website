import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

const resources = {
  en: {
    translation: {
      nav: {
        home: 'Home',
        about: 'About',
        experience: 'Experience',
        projects: 'Projects',
        gallery: 'Gallery',
        contact: 'Contact',
        letsTalk: "Let's Talk",
      },
      hero: {
        available: 'Available for new opportunities',
        greeting: "Hi, I'm",
        name: 'Dandy Rama Wiguna',
        bio: 'Software & Web Developer crafting intuitive, high-performance web experiences with clean code and thoughtful design.',
        cta: 'Get in Touch',
      },
      about: {
        title: 'About Me',
        p1: 'Software and Web Developer with hands-on experience as a Freelance Web Developer and Frontend Developer Intern at PT Edutech Digital Solution. I specialize in building responsive, modern digital solutions—ranging from high-converting landing pages and corporate company profiles to enterprise-grade web applications and information systems.',
        p2: 'Proficient in Next.js, React.js, Vue.js, JavaScript, TypeScript, Tailwind CSS, Laravel, PHP, and RESTful APIs. I handle end-to-end development lifecycles from requirements analysis to development, testing, debugging, and production delivery.',
        stats: {
          production: 'Production Projects',
          frameworks: 'Core Frameworks',
          delivery: 'Client Satisfaction',
        },
        locationLabel: 'Location',
        locationValue: 'Sukoharjo, Central Java, Indonesia',
        focusLabel: 'Focus',
        focusValue: 'Next.js, React, Vue, Laravel, Fullstack',
        statusLabel: 'Status',
        statusValue: 'Open to Work',
        downloadCv: 'Download Resume / CV',
      },
      experience: {
        title: 'Experience & Education',
        subtitle: 'My professional career milestones and technical training background.',
        items: [
          {
            role: 'Freelance Web Developer for MSMEs',
            company: 'Independent / Client Projects',
            period: 'Jun 2026 — Present',
            location: 'Surakarta, Central Java',
            description: 'Architecting and deploying tailored web applications and digital solutions. Driving full project lifecycles from requirements discovery, UI engineering, and API integration to QA testing, revisions, and production deployment for company profiles, product catalogs, and web apps.',
          },
          {
            role: 'Frontend Developer Intern',
            company: 'PT Edutech Digital Solution',
            period: 'Jun 2025 — Apr 2026',
            location: 'Surakarta, Indonesia',
            description: 'Engineered web-based Hospital Information Systems and Library Information Systems. Built responsive, component-driven user interfaces using React.js, Vue.js, and Tailwind CSS. Integrated Laravel REST APIs, resolved bugs, and collaborated via Git workflows.',
          },
          {
            role: 'Software & Game Development (PPLG)',
            company: 'SMK Muhammadiyah 1 Sukoharjo',
            period: 'Jul 2023 — May 2026',
            location: 'Sukoharjo, Indonesia',
            description: 'Graduated with a final grade of 84.36/100. Rigorous academic and practical foundation in programming fundamentals, web development, object-oriented software engineering, and database management systems (MySQL, PostgreSQL).',
          },
        ],
      },
      projects: {
        title: 'Selected Works',
        subtitle: 'A curated selection of web applications, systems, and client platforms.',
        readCase: 'Read case study',
        all: 'All',
        categoryWeb: 'Web Development',
        categoryApp: 'Web Application',
        liveDemo: 'Live Demo',
        sourceCode: 'Source Code',
      },
      gallery: {
        title: 'Moments & Activities',
        subtitle: 'A glimpse into my development journey, milestones, and tech community engagements.',
      },
      services: {
        title: 'Need a high-converting website or custom web app?',
        desc: 'From corporate company profiles to interactive web platforms—let’s build something exceptional that elevates your brand.',
        cta: 'View Services & Pricelist',
      },
      contact: {
        title: 'Get in touch',
        subtitle: "Have a project idea, job opportunity, or just want to say hello? I'd love to hear from you.",
        nameLabel: 'Name',
        namePlaceholder: 'Your name',
        emailLabel: 'Email',
        emailPlaceholder: 'your@email.com',
        messageLabel: 'Message',
        messagePlaceholder: 'Tell me about your project or opportunity...',
        sendBtn: 'Send message',
        sending: 'Sending...',
        successMsg: 'Thanks! Your message has been received.',
      },
      footer: {
        available: 'Available for new projects',
        headline1: "Let's make",
        headline2: 'something',
        headlineAccent: 'amazing',
        headline3: 'together.',
        copyEmail: 'Click to copy email address',
        copiedEmail: 'Email copied to clipboard!',
        tagline: 'Crafting digital experiences with precision and passion.',
        rights: 'All rights reserved.',
        menu: 'MENU',
        socials: 'SOCIALS',
      },
    },
  },
  id: {
    translation: {
      nav: {
        home: 'Beranda',
        about: 'Tentang',
        experience: 'Pengalaman',
        projects: 'Proyek',
        gallery: 'Galeri',
        contact: 'Kontak',
        letsTalk: 'Hubungi Saya',
      },
      hero: {
        available: 'Tersedia untuk peluang baru',
        greeting: 'Halo, Saya',
        name: 'Dandy Rama Wiguna',
        bio: 'Software & Web Developer yang membangun pengalaman web intuitif dan berkinerja tinggi dengan kode bersih serta desain matang.',
        cta: 'Mulai Diskusi',
      },
      about: {
        title: 'Tentang Saya',
        p1: 'Software dan Web Developer dengan pengalaman sebagai Freelance Web Developer serta Frontend Developer Intern di PT Edutech Digital Solution. Berpengalaman mengembangkan berbagai solusi digital seperti company profile, product catalog, landing page, aplikasi web, serta sistem informasi berbasis web.',
        p2: 'Memiliki kemampuan dalam Next.js, React.js, Vue.js, JavaScript, TypeScript, Tailwind CSS, Laravel, PHP, MySQL, REST API, Git, debugging, dan testing. Terbiasa menangani proses pengembangan mulai dari analisis kebutuhan, development, testing, hingga delivery serta berkomunikasi langsung dengan klien.',
        stats: {
          production: 'Proyek Produksi',
          frameworks: 'Framework Utama',
          delivery: 'Kepuasan Klien',
        },
        locationLabel: 'Lokasi',
        locationValue: 'Sukoharjo, Jawa Tengah, Indonesia',
        focusLabel: 'Fokus',
        focusValue: 'Next.js, React, Vue, Laravel, Fullstack',
        statusLabel: 'Status',
        statusValue: 'Terbuka untuk Peluang',
        downloadCv: 'Unduh Resume / CV',
      },
      experience: {
        title: 'Pengalaman & Pendidikan',
        subtitle: 'Perjalanan karier profesional dan latar belakang pelatihan teknis saya.',
        items: [
          {
            role: 'Freelance Web Developer UMKM',
            company: 'Klien UMKM & Personal',
            period: 'Jun 2026 — Sekarang',
            location: 'Surakarta, Jawa Tengah',
            description: 'Mengembangkan website dan solusi digital sesuai kebutuhan klien. Menangani proses analisis, development, testing, revisi, hingga delivery untuk company profile, product catalog, landing page, dan web application dengan standar web modern yang responsif.',
          },
          {
            role: 'Frontend Developer Intern',
            company: 'PT Edutech Digital Solution',
            period: 'Jun 2025 — Apr 2026',
            location: 'Surakarta, Indonesia',
            description: 'Mengembangkan Hospital Information System dan Library Information System berbasis web. Mengembangkan UI responsif menggunakan React.js, Vue.js, dan Tailwind CSS serta mengintegrasikan frontend dengan REST API Laravel.',
          },
          {
            role: 'Pengembangan Perangkat Lunak dan Gim (PPLG)',
            company: 'SMK Muhammadiyah 1 Sukoharjo',
            period: 'Jul 2023 — Mei 2026',
            location: 'Sukoharjo, Indonesia',
            description: 'Lulus dengan nilai akhir 84.36/100. Fokus mendalam pada dasar pemrograman, pengembangan web, arsitektur perangkat lunak berorientasi objek, serta sistem manajemen basis data relasional (MySQL, PostgreSQL).',
          },
        ],
      },
      projects: {
        title: 'Proyek Pilihan',
        subtitle: 'Kumpulan aplikasi web, sistem informasi, dan platform digital yang telah dikerjakan.',
        readCase: 'Lihat studi kasus',
        all: 'Semua',
        categoryWeb: 'Web Development',
        categoryApp: 'Aplikasi Web',
        liveDemo: 'Demo Langsung',
        sourceCode: 'Kode Sumber',
      },
      gallery: {
        title: 'Momen & Dokumentasi',
        subtitle: 'Dokumentasi perjalanan pengembangan, pencapaian, dan aktivitas komunitas teknologi.',
      },
      services: {
        title: 'Butuh website profesional atau sistem aplikasi kustom?',
        desc: 'Mulai dari company profile bisnis hingga platform web interaktif—mari bangun solusi terbaik yang mengangkat brand Anda.',
        cta: 'Lihat Layanan & Pricelist',
      },
      contact: {
        title: 'Hubungi Saya',
        subtitle: 'Punya ide proyek, tawaran pekerjaan, atau sekadar ingin bertegur sapa? Saya siap berdiskusi dengan Anda.',
        nameLabel: 'Nama',
        namePlaceholder: 'Nama Anda',
        emailLabel: 'Email',
        emailPlaceholder: 'emailanda@email.com',
        messageLabel: 'Pesan',
        messagePlaceholder: 'Ceritakan tentang proyek atau peluang yang Anda miliki...',
        sendBtn: 'Kirim pesan',
        sending: 'Mengirim...',
        successMsg: 'Terima kasih! Pesan Anda telah berhasil terkirim.',
      },
      footer: {
        available: 'Tersedia untuk proyek baru',
        headline1: 'Mari kita',
        headline2: 'ciptakan sesuatu yang',
        headlineAccent: 'luar biasa',
        headline3: 'bersama.',
        copyEmail: 'Klik untuk salin alamat email',
        copiedEmail: 'Email berhasil disalin!',
        tagline: 'Membangun pengalaman digital dengan presisi dan dedikasi.',
        rights: 'Hak cipta dilindungi undang-undang.',
        menu: 'MENU',
        socials: 'SOSIAL',
      },
    },
  },
};

const savedLang = typeof window !== 'undefined' ? localStorage.getItem('i18nextLng') || 'en' : 'en';

i18n
  .use(initReactI18next)
  .init({
    resources,
    lng: savedLang.startsWith('id') ? 'id' : 'en',
    fallbackLng: 'en',
    interpolation: {
      escapeValue: false,
    },
  });

i18n.on('languageChanged', (lng) => {
  if (typeof window !== 'undefined') {
    localStorage.setItem('i18nextLng', lng);
  }
});

export default i18n;
