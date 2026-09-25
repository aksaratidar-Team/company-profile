export type NavLink = {
  label: string;
  href: string;
};

export const sectionIds = {
  hero: "beranda",
  about: "tentang",
  services: "layanan",
  activities: "aktivitas",
  projects: "proyek",
  team: "tim",
  testimonials: "testimoni",
  faq: "faq",
  contact: "kontak",
} as const;

export const siteConfig = {
  // Fallbacks only: real values come from the CMS site settings.
  fallbackName: "Aksara Tidar",
  // Registered legal entity behind the brand (footer, About section, structured data).
  legalName: "PT Aksara Tidar Digital Inovasi",
  fallbackDescription: "Studio teknologi yang membangun produk digital untuk bisnis dan institusi.",
  // Search engine copy. Title becomes "<company name> | <titleSuffix>".
  seo: {
    titleSuffix: "Software House & Konsultan Teknologi di Magelang",
    description:
      "Aksara Tidar (PT Aksara Tidar Digital Inovasi) adalah software house di Magelang, Jawa Tengah, yang membantu bisnis dan instansi bertransformasi digital melalui pengembangan perangkat lunak, desain produk, dan konsultasi teknologi.",
    keywords: [
      "Aksara Tidar",
      "PT Aksara Tidar Digital Inovasi",
      "software house Magelang",
      "jasa pembuatan website Magelang",
      "jasa pembuatan aplikasi",
      "pengembangan perangkat lunak",
      "desain UI/UX",
      "konsultasi teknologi",
      "transformasi digital",
      "Jawa Tengah",
    ],
  },
  navLinks: [
    { label: "Tentang", href: `#${sectionIds.about}` },
    { label: "Layanan", href: `#${sectionIds.services}` },
    { label: "Aktivitas", href: `#${sectionIds.activities}` },
    { label: "Proyek", href: `#${sectionIds.projects}` },
    { label: "Tim", href: `#${sectionIds.team}` },
    { label: "Testimoni", href: `#${sectionIds.testimonials}` },
  ] satisfies NavLink[],
  footer: {
    tagline:
      "Mitra pengembangan perangkat lunak dan konsultasi teknologi yang membantu bisnis Anda tumbuh melalui solusi digital yang modern dan andal.",
    navLinks: [
      { label: "Beranda", href: `#${sectionIds.hero}` },
      { label: "Tentang", href: `#${sectionIds.about}` },
      { label: "Layanan", href: `#${sectionIds.services}` },
      { label: "Aktivitas", href: `#${sectionIds.activities}` },
      { label: "Proyek", href: `#${sectionIds.projects}` },
      { label: "Tim", href: `#${sectionIds.team}` },
      { label: "Testimoni", href: `#${sectionIds.testimonials}` },
      { label: "FAQ", href: `#${sectionIds.faq}` },
    ] satisfies NavLink[],
    // TODO: these pages do not exist yet; create them before going live.
    legalLinks: [
      { label: "Kebijakan Privasi", href: "/kebijakan-privasi" },
      { label: "Syarat & Ketentuan", href: "/syarat-ketentuan" },
    ] satisfies NavLink[],
  },
  // Static marketing copy (not managed by the CMS).
  hero: {
    eyebrow: "Digital Technology Partner",
    // Rendered as: before + <highlight> + after.
    headline: {
      before: "Mewujudkan Ide Menjadi",
      highlight: "Solusi Digital",
      after: "yang Berdampak",
    },
    subheadline:
      "Aksara Tidar membantu bisnis dan instansi bertransformasi digital melalui pengembangan perangkat lunak, desain produk, dan konsultasi teknologi yang modern, andal, dan berkelanjutan.",
    // TODO: confirm these figures with the business before going live.
    stats: [
      { value: "50+", label: "Proyek Selesai" },
      { value: "30+", label: "Klien Percaya" },
      { value: "6+", label: "Tahun Pengalaman" },
    ],
  },
  about: {
    eyebrow: "Tentang Kami",
    title: "Mitra Teknologi Tepercaya untuk Pertumbuhan Bisnis Anda",
    image: {
      src: "/images/about-team.jpg",
      alt: "Tim Aksara Tidar berdiskusi dan bekerja bersama di depan laptop",
    },
    highlights: [
      {
        title: "Visi Kami",
        text: "Menjadi mitra teknologi terdepan yang mendorong transformasi digital yang inklusif.",
      },
      {
        title: "Misi Kami",
        text: "Membangun produk digital berkualitas dengan proses kolaboratif dan transparan.",
      },
    ],
  },
  // Content for the "Layanan" section. Adjust to match the services actually offered.
  services: [
    {
      icon: "code",
      title: "Pengembangan Perangkat Lunak",
      description:
        "Website, sistem informasi, dan aplikasi yang dibangun sesuai proses bisnis Anda: cepat, aman, dan mudah dikembangkan.",
    },
    {
      icon: "design",
      title: "Desain Produk (UI/UX)",
      description:
        "Riset pengguna, wireframe, hingga prototipe interaktif agar produk digital Anda mudah dipahami dan nyaman digunakan.",
    },
    {
      icon: "consulting",
      title: "Konsultasi Teknologi",
      description:
        "Pendampingan memilih teknologi, merancang arsitektur sistem, dan menyusun langkah transformasi digital yang realistis.",
    },
  ],
  // Visible FAQ + FAQPage structured data. Keep answers factual.
  faq: [
    {
      question: "Apa itu Aksara Tidar?",
      answer:
        "Aksara Tidar adalah software house yang dikelola oleh PT Aksara Tidar Digital Inovasi dan berbasis di Kabupaten Magelang, Jawa Tengah. Kami membantu bisnis dan instansi bertransformasi digital melalui pengembangan perangkat lunak, desain produk, dan konsultasi teknologi.",
    },
    {
      question: "Layanan apa saja yang ditawarkan Aksara Tidar?",
      answer:
        "Kami menyediakan pengembangan perangkat lunak (website, sistem informasi, dan aplikasi), desain produk digital (UI/UX), serta konsultasi teknologi untuk membantu Anda merencanakan dan menjalankan transformasi digital.",
    },
    {
      question: "Di mana lokasi Aksara Tidar?",
      answer:
        "Aksara Tidar berlokasi di Kabupaten Magelang, Jawa Tengah. Alamat lengkap tersedia di bagian Kontak di bawah halaman ini. Kerja sama dengan klien di luar Magelang dapat dilakukan secara daring.",
    },
    {
      question: "Siapa saja yang bisa bekerja sama dengan Aksara Tidar?",
      answer:
        "Kami bekerja sama dengan bisnis dan instansi, mulai dari UMKM hingga organisasi yang lebih besar, yang ingin membangun atau meningkatkan produk digitalnya.",
    },
    {
      question: "Bagaimana cara memulai konsultasi?",
      answer:
        "Hubungi kami melalui email atau telepon yang tercantum di bagian Kontak. Ceritakan kebutuhan Anda, lalu tim kami akan menjadwalkan diskusi untuk memahami tujuan dan merekomendasikan solusi yang sesuai.",
    },
  ],
};
