/**
 * Satu-satunya tempat untuk mengisi identitas & kontak.
 * Field bertanda "TODO" masih placeholder: ganti dengan data Anda yang sebenarnya.
 * Tidak ada pengalaman kerja, pencapaian, atau angka yang dikarang di file ini.
 */

export type SocialLink = {
  label: string;
  value: string;
  href: string;
  icon: "github" | "linkedin" | "mail";
};

export const profile = {
  name: "Muhamad Zul Sa'ban",
  initials: "MZ",
  role: "Web Developer",
  headline: "Building Modern & Interactive Web Applications",

  /** Teks pendek di bawah headline hero. */
  intro:
    "Saya membangun aplikasi web yang modern, interaktif, dan nyaman dipakai — dari antarmuka frontend sampai logika server dan basis data.",

  /** Paragraf About. Hanya berisi informasi yang sudah Anda berikan. */
  about: [
    "Saya lulusan S1 Teknik Informatika yang tertarik pada pengembangan aplikasi web, baik sisi frontend maupun backend. Ketertarikan itu membuat saya terbiasa bekerja di dua sisi: menyusun antarmuka yang rapi sekaligus merapikan alur data di belakangnya.",
    "Untuk frontend saya memakai JavaScript, TypeScript, React.js, dan Vue.js. Untuk backend saya memakai PHP dengan framework Laravel dan CodeIgniter, serta MySQL sebagai basis data. Proyek-proyek yang saya kerjakan bergerak di bidang sistem informasi pelayanan dan operasional.",
  ],

  /** Kartu fakta kecil di section About. */
  facts: [
    { label: "Pendidikan", value: "S1 Teknik Informatika" },
    { label: "Peran", value: "Web Developer" },
    {
      label: "Fokus",
      value: "Frontend & Backend aplikasi web",
    },
    {
      label: "Basis Data",
      value: "MySQL",
    },
  ],

  /**
   * Alamat website ini setelah online. Nilainya harus sama dengan
   * <link rel="canonical"> dan og:url di index.html.
   */
  site: {
    // TODO: ganti dengan domain asli, contoh "https://zulsaaban.dev".
    url: "https://domain-anda.example.com",
  },

  contact: {
    // TODO: ganti dengan email asli Anda.
    email: "nama-anda@email.com",
    // TODO: opsional, isi jika ingin ditampilkan.
    phone: "",
    // TODO: ganti dengan kota/lokasi asli Anda, contoh "Bandar Lampung".
    location: "Lokasi belum diisi",
  },

  socials: [
    {
      label: "GitHub",
      // TODO: ganti dengan username GitHub asli Anda.
      value: "github.com/username-anda",
      href: "https://github.com/username-anda",
      icon: "github",
    },
    {
      label: "LinkedIn",
      // TODO: ganti dengan URL profil LinkedIn asli Anda.
      value: "linkedin.com/in/username-anda",
      href: "https://www.linkedin.com/in/username-anda",
      icon: "linkedin",
    },
    {
      label: "Email",
      value: "nama-anda@email.com",
      href: "mailto:nama-anda@email.com",
      icon: "mail",
    },
  ] satisfies SocialLink[],
} as const;

export type Profile = typeof profile;
