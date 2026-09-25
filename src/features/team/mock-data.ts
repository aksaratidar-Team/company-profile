import type { TeamMember } from "@/features/team/types";

const portrait = (id: string) =>
  `https://images.unsplash.com/photo-${id}?w=600&h=600&fit=crop&crop=faces&q=80`;

// Development-only fallback while the CMS has no team members.
// Roles follow the CMS format "CODE (Title)".
export const mockTeamMembers: TeamMember[] = [
  {
    id: 1,
    name: "Raka Pratama",
    role: "CEO (Chief Executive Officer)",
    photo: portrait("1500648767791-00dcc994a43e"),
    bio: "Memimpin arah bisnis dan kemitraan strategis Aksara Tidar, memastikan setiap produk memberi dampak nyata bagi klien.",
    social_links: [{ platform: "linkedin", url: "https://linkedin.com/" }],
    skills: ["Strategi Bisnis", "Kemitraan", "Product Vision"],
    email: "raka@aksaratidar.id",
  },
  {
    id: 2,
    name: "Bima Santoso",
    role: "CTO (Chief Technology Officer)",
    photo: portrait("1507003211169-0a1dd7228f2d"),
    bio: "Menentukan arah teknologi dan standar rekayasa perangkat lunak di seluruh produk Aksara Tidar, sekaligus membina tim engineering agar terus berkembang.",
    social_links: [{ platform: "github", url: "https://github.com/" }],
    skills: ["Arsitektur Sistem", "Cloud", "Engineering Standard"],
    email: "bima@aksaratidar.id",
  },
  {
    id: 3,
    name: "Dimas Saputra",
    role: "CSO (Chief System Officer)",
    photo: portrait("1472099645785-5658abf4ff4e"),
    bio: "Menjaga keandalan infrastruktur dan keamanan sistem agar layanan klien berjalan stabil setiap saat.",
    social_links: [],
    skills: ["DevOps", "Keamanan Sistem", "Monitoring"],
    email: "dimas@aksaratidar.id",
  },
  {
    id: 4,
    name: "Nadia Putri",
    role: "CBO (Chief Business Officer)",
    photo: portrait("1494790108377-be9c29b29330"),
    bio: "Mengembangkan pasar dan hubungan klien, menerjemahkan kebutuhan bisnis menjadi peluang kolaborasi.",
    social_links: [{ platform: "instagram", url: "https://instagram.com/" }],
    skills: ["Business Development", "Negosiasi", "Riset Pasar"],
    email: "nadia@aksaratidar.id",
  },
  {
    id: 5,
    name: "Salsa Maharani",
    role: "CPO (Chief Product Officer)",
    photo: portrait("1438761681033-6461ffad8d80"),
    bio: "Merancang pengalaman produk dari riset pengguna hingga peluncuran, memastikan setiap fitur relevan dan mudah digunakan.",
    social_links: [],
    skills: ["Product Design", "UX Research", "Roadmap"],
    email: "salsa@aksaratidar.id",
  },
];
