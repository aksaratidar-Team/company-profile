import type { Testimonial } from "@/features/testimonials/types";

const portrait = (id: string) =>
  `https://images.unsplash.com/photo-${id}?w=200&h=200&fit=crop&crop=faces&q=80`;

// Development-only fallback while the CMS has no testimonials.
export const mockTestimonials: Testimonial[] = [
  {
    id: 1,
    client_name: "Hendra Wijaya",
    client_company: "Kepala Sekolah, SMK Tidar Nusantara",
    client_photo: portrait("1472099645785-5658abf4ff4e"),
    content:
      "Rapor digital yang dibangun Aksara Tidar memangkas waktu rekap nilai dari seminggu menjadi satu hari. Timnya responsif dan paham kebutuhan sekolah.",
    rating: 5,
  },
  {
    id: 2,
    client_name: "Dewi Lestari",
    client_company: "Pemilik, Kopi Lereng Merapi",
    client_photo: portrait("1534528741775-53994a69daeb"),
    content:
      "Aplikasi kasirnya sederhana tapi lengkap. Stok tiga cabang kini bisa saya pantau dari ponsel, laporan harian pun otomatis.",
    rating: 5,
  },
  {
    id: 3,
    client_name: "Agus Setiawan",
    client_company: "Sekretaris Desa Banyurojo",
    client_photo: portrait("1519085360753-af0119f7cbe7"),
    content:
      "Warga tidak perlu lagi bolak-balik ke kantor desa untuk mengurus surat. Pendampingan setelah peluncuran juga sangat membantu operator kami.",
    rating: 4,
  },
  {
    id: 4,
    client_name: "Maya Anggraini",
    client_company: "Product Manager, Klinik Sehat",
    client_photo: portrait("1573496359142-b8d87734a5a2"),
    content:
      "Proses kerjanya transparan: sprint jelas, demo rutin, dan setiap masukan kami ditindaklanjuti dengan cepat.",
    rating: 5,
  },
];
