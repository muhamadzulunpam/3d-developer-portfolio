export type SkillGroup = "backend" | "frontend" | "database";

export type Skill = {
  name: string;
  group: SkillGroup;
  /** Penjelasan singkat apa teknologi ini kerjakan di proyek Anda. */
  use: string;
  /**
   * level: 0-100 jika Anda ingin menampilkan bar keahlian.
   * null = tidak ditampilkan sama sekali (dipakai sekarang, karena
   * penilaian diri belum Anda berikan dan saya tidak mengarang angka).
   */
  level: number | null;
};

export const skillGroups: Record<SkillGroup, { label: string; hint: string }> = {
  backend: { label: "Backend", hint: "Logika server, API, dan basis data" },
  frontend: { label: "Frontend", hint: "Antarmuka dan interaksi pengguna" },
  database: { label: "Basis Data", hint: "Skema, relasi, dan query" },
};

export const skills: Skill[] = [
  {
    name: "PHP",
    group: "backend",
    use: "Bahasa server untuk aplikasi web dan endpoint CRUD.",
    level: null,
  },
  {
    name: "Laravel",
    group: "backend",
    use: "Framework utama: routing, ORM Eloquent, autentikasi.",
    level: null,
  },
  {
    name: "CodeIgniter",
    group: "backend",
    use: "Framework ringan untuk aplikasi dengan kebutuhan sederhana.",
    level: null,
  },
  {
    name: "MySQL",
    group: "database",
    use: "Penyimpanan data, relasi tabel, dan optimasi query.",
    level: null,
  },
  {
    name: "JavaScript",
    group: "frontend",
    use: "Interaksi DOM, fetch API, dan logika di sisi klien.",
    level: null,
  },
  {
    name: "TypeScript",
    group: "frontend",
    use: "Type safety agar kode aplikasi lebih mudah dirawat.",
    level: null,
  },
  {
    name: "React.js",
    group: "frontend",
    use: "Komponen reusable, state, dan halaman interaktif.",
    level: null,
  },
  {
    name: "Vue.js",
    group: "frontend",
    use: "Reaktif template untuk antarmuka yang ringkas.",
    level: null,
  },
];

export const groupOrder: SkillGroup[] = ["backend", "frontend", "database"];
