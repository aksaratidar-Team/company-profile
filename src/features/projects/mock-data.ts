import type { Project } from "@/features/projects/types";

const unsplash = (id: string) => `https://images.unsplash.com/photo-${id}?w=1400&q=80`;

const img = {
  macbook: unsplash("1498050108023-c5249f4df085"),
  analytics: unsplash("1460925895917-afdab827c52f"),
  office: unsplash("1551434678-e076c223a692"),
  laptopCode: unsplash("1517694712202-14dd9538aa97"),
  code: unsplash("1555066931-4365d14bab8c"),
  codeDark: unsplash("1461749280684-dccba630e2f6"),
  desk: unsplash("1504384308090-c894fdcc538d"),
  laptops: unsplash("1519389950473-47ba0277781c"),
  meeting: unsplash("1531482615713-2afd69097998"),
  team: unsplash("1522071820081-009f0129c71c"),
};

type MockInput = Pick<Project, "id" | "title" | "status" | "description" | "technologies"> &
  Partial<Pick<Project, "client" | "highlights" | "project_url">> & {
    year: string;
    images: string[];
  };

function project({ images, ...rest }: MockInput): Project {
  const [cover = null, ...gallery] = images;
  return {
    client: null,
    highlights: [],
    project_url: null,
    ...rest,
    cover_image: cover,
    gallery,
  };
}

// Development-only fallback while the CMS has no projects.
export const mockProjects: Project[] = [
  project({
    id: 1,
    title: "SIMRS Pintar",
    project_url: "https://example.com/simrs-pintar",
    status: "Completed",
    client: "RSUD Tidar Magelang",
    year: "2024",
    description:
      "<p>Sistem informasi manajemen rumah sakit terintegrasi yang menyatukan pendaftaran pasien, rekam medis elektronik, farmasi, dan penagihan dalam satu platform. Sistem ini memangkas waktu antrean administrasi dan mempermudah pelaporan ke dinas kesehatan.</p>",
    highlights: [
      "Rekam medis elektronik terpusat",
      "Antrean online dan notifikasi pasien",
      "Laporan otomatis untuk manajemen rumah sakit",
    ],
    technologies: ["Laravel", "Vue.js", "PostgreSQL", "Redis"],
    images: [img.office, img.analytics, img.meeting, img.desk],
  }),
  project({
    id: 2,
    title: "Aksara Marketplace",
    project_url: "https://example.com/aksara-marketplace",
    status: "On Going",
    client: "Koperasi UMKM Jawa Tengah",
    year: "2025",
    description:
      "<p>Marketplace multi-toko untuk produk UMKM binaan koperasi, lengkap dengan pembayaran digital dan manajemen pengiriman.</p>",
    highlights: ["Dashboard penjual multi-toko", "Integrasi pembayaran & ongkir", "Program promo koperasi"],
    technologies: ["Next.js", "Laravel", "MySQL"],
    images: [img.laptops, img.macbook, img.team],
  }),
  project({
    id: 3,
    title: "Tidar POS System",
    status: "Completed",
    client: "Jaringan Retail Kerta Jaya",
    year: "2024",
    description:
      "<p>Aplikasi kasir dan manajemen stok multi-cabang dengan laporan penjualan harian yang bisa dipantau dari ponsel.</p>",
    highlights: ["Sinkronisasi stok antarcabang", "Mode offline saat koneksi terputus"],
    technologies: ["React", "Node.js", "SQLite"],
    images: [img.analytics, img.desk],
  }),
  project({
    id: 4,
    title: "Smart Village App",
    status: "Completed",
    client: "Pemerintah Kabupaten Magelang",
    year: "2023",
    description:
      "<p>Layanan administrasi desa digital: pengajuan surat, informasi desa, dan pengaduan warga dalam satu aplikasi.</p>",
    highlights: ["Pengajuan surat online", "Kanal pengaduan warga", "Dashboard kepala desa"],
    technologies: ["Flutter", "Laravel", "Firebase"],
    images: [img.meeting, img.team],
  }),
  project({
    id: 5,
    title: "E-Learning Platform Merdeka",
    status: "Completed",
    client: "Yayasan Pendidikan Merdeka",
    year: "2023",
    description:
      "<p>Platform pembelajaran daring dengan kelas virtual, bank soal, dan pelacakan progres belajar siswa.</p>",
    highlights: ["Kelas virtual & materi video", "Bank soal dengan penilaian otomatis"],
    technologies: ["Next.js", "Supabase", "Tailwind CSS"],
    images: [img.laptopCode, img.code],
  }),
  project({
    id: 6,
    title: "IoT Monitoring Dashboard",
    project_url: "https://example.com/iot-dashboard",
    status: "On Going",
    client: "PT Manufaktur Nusantara",
    year: "2025",
    description:
      "<p>Dasbor pemantauan perangkat IoT skala industri yang memvisualisasikan data sensor secara langsung dan mengirim notifikasi ketika terdeteksi anomali pada lini produksi.</p>",
    highlights: [
      "Visualisasi data sensor real-time",
      "Notifikasi anomali otomatis",
      "Riwayat data untuk analisis performa",
    ],
    technologies: ["Next.js", "Python", "InfluxDB"],
    images: [img.codeDark, img.analytics, img.desk, img.office],
  }),
  project({
    id: 7,
    title: "Klinik Sehat Mobile",
    status: "On Going",
    client: "Klinik Sehat Group",
    year: "2025",
    description: "<p>Aplikasi reservasi dokter dan riwayat kunjungan pasien untuk jaringan klinik.</p>",
    technologies: ["React Native", "Node.js"],
    images: [img.macbook, img.laptops],
  }),
  project({
    id: 8,
    title: "Portal Alumni Kampus",
    project_url: "https://example.com/portal-alumni",
    status: "Completed",
    client: "Universitas Tidar",
    year: "2022",
    description: "<p>Tracer study dan jejaring karier alumni yang terhubung dengan pusat karier kampus.</p>",
    technologies: ["Vue.js", "Laravel", "Redis"],
    images: [img.team, img.meeting],
  }),
];
