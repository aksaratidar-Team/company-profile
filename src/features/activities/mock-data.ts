import type { Activity } from "@/features/activities/types";

const unsplash = (id: string) => `https://images.unsplash.com/photo-${id}?w=1200&q=80`;

const img = {
  launch: unsplash("1540575467063-178a50c2df87"),
  stage: unsplash("1515187029135-18ee286d815b"),
  team: unsplash("1522071820081-009f0129c71c"),
  meeting: unsplash("1531482615713-2afd69097998"),
  office: unsplash("1551434678-e076c223a692"),
  laptops: unsplash("1519389950473-47ba0277781c"),
  code: unsplash("1555066931-4365d14bab8c"),
  desk: unsplash("1504384308090-c894fdcc538d"),
  analytics: unsplash("1460925895917-afdab827c52f"),
  macbook: unsplash("1498050108023-c5249f4df085"),
};

type MockInput = Pick<Activity, "id" | "title" | "date" | "date_formatted" | "description"> &
  Partial<Pick<Activity, "category" | "location" | "participants" | "highlights">> & {
    images: string[];
  };

function activity({ images, ...rest }: MockInput): Activity {
  const [cover = null, ...gallery] = images;
  return {
    category: null,
    location: null,
    participants: null,
    highlights: [],
    ...rest,
    cover_image: cover,
    gallery,
  };
}

// Development-only fallback while the CMS has no activities.
export const mockActivities: Activity[] = [
  activity({
    id: 1,
    title: "Peluncuran Produk SaaS Terbaru",
    date: "2025-08-12",
    date_formatted: "12 Agustus 2025",
    description:
      "<p>Aksara Tidar resmi meluncurkan platform SaaS manajemen operasional yang dirancang khusus untuk membantu UMKM naik kelas secara digital. Acara ini menghadirkan demo produk secara langsung, sesi tanya jawab bersama tim pengembang, serta program uji coba gratis bagi peserta yang hadir.</p>",
    category: "Peluncuran Produk",
    location: "Hotel Atria, Magelang",
    participants: "150 tamu undangan",
    highlights: [
      "Demo langsung seluruh modul inti platform",
      "Program uji coba gratis selama 3 bulan",
      "Diskusi panel bersama pelaku UMKM binaan",
    ],
    images: [img.launch, img.stage, img.meeting, img.analytics],
  }),
  activity({
    id: 2,
    title: "Workshop AI untuk UMKM",
    date: "2025-07-28",
    date_formatted: "28 Juli 2025",
    description:
      "<p>Pelatihan praktis memanfaatkan AI untuk konten pemasaran, layanan pelanggan, dan analisis penjualan sederhana.</p>",
    category: "Workshop",
    location: "Co-working Space Tidar, Magelang",
    participants: "60 pelaku UMKM",
    highlights: ["Praktik langsung membuat konten dengan AI", "Template prompt siap pakai"],
    images: [img.laptops, img.desk],
  }),
  activity({
    id: 3,
    title: "Team Building Aksara Tidar 2025",
    date: "2025-06-15",
    date_formatted: "15 Juni 2025",
    description:
      "<p>Dua hari kebersamaan seluruh tim untuk menyegarkan semangat, merefleksikan semester pertama, dan menyusun target berikutnya.</p>",
    category: "Internal",
    location: "Kopeng, Semarang",
    participants: "Seluruh tim",
    images: [img.team, img.office],
  }),
  activity({
    id: 4,
    title: "Seminar Transformasi Digital",
    date: "2025-05-03",
    date_formatted: "03 Mei 2025",
    description:
      "<p>Seminar bersama pemerintah daerah tentang strategi digitalisasi layanan publik yang efektif dan inklusif.</p>",
    category: "Seminar",
    location: "Gedung Wiworo Wiji Pinilih, Magelang",
    participants: "200 peserta",
    images: [img.stage, img.launch],
  }),
  activity({
    id: 5,
    title: "Aksara Tidar Internal Hackathon",
    date: "2025-04-20",
    date_formatted: "20 April 2025",
    description:
      "<p>48 jam merancang prototipe fitur baru, dari ide hingga demo, untuk mempercepat inovasi di setiap proyek klien.</p>",
    category: "Hackathon",
    location: "Kantor Aksara Tidar",
    participants: "8 tim",
    images: [img.code, img.macbook, img.desk],
  }),
  activity({
    id: 6,
    title: "Kunjungan Kampus & Career Talk",
    date: "2025-03-10",
    date_formatted: "10 Maret 2025",
    description:
      "<p>Berbagi pengalaman berkarier di industri software dan alur kerja tim engineering kepada mahasiswa informatika.</p>",
    category: "Edukasi",
    location: "Universitas Tidar",
    participants: "120 mahasiswa",
    images: [img.meeting],
  }),
  activity({
    id: 7,
    title: "Kelas Terbuka UI/UX untuk Pemula",
    date: "2025-02-15",
    date_formatted: "15 Februari 2025",
    description:
      "<p>Belajar dasar riset pengguna, wireframe, dan prototipe interaktif dalam satu hari penuh.</p>",
    category: "Kelas",
    images: [img.analytics, img.laptops],
  }),
  activity({
    id: 8,
    title: "Pelatihan Laravel untuk Guru SMK",
    date: "2025-01-18",
    date_formatted: "18 Januari 2025",
    description:
      "<p>Pelatihan membangun aplikasi presensi berbasis web bersama guru produktif RPL dari berbagai sekolah.</p>",
    category: "Pelatihan",
    location: "SMK Negeri 1 Magelang",
    participants: "40 guru",
    images: [img.office, img.code],
  }),
];
