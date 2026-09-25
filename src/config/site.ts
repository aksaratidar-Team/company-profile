export type NavLink = {
  label: string;
  href: string;
};

export const sectionIds = {
  hero: "beranda",
  about: "tentang",
  activities: "aktivitas",
  projects: "proyek",
  team: "tim",
  testimonials: "testimoni",
  contact: "kontak",
} as const;

export const siteConfig = {
  // Fallbacks only: real values come from the CMS site settings.
  fallbackName: "Aksara Tidar",
  fallbackDescription: "Studio teknologi yang membangun produk digital untuk bisnis dan institusi.",
  navLinks: [
    { label: "Tentang", href: `#${sectionIds.about}` },
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
      { label: "Aktivitas", href: `#${sectionIds.activities}` },
      { label: "Proyek", href: `#${sectionIds.projects}` },
      { label: "Tim", href: `#${sectionIds.team}` },
      { label: "Testimoni", href: `#${sectionIds.testimonials}` },
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
};
