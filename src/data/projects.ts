/**
 * Data project portfolio.
 * - tech: [] berarti belum diisi. Sengaja kosong, karena stack per project
 *   belum Anda berikan (saya tidak menebak). Isi array-nya, chip langsung muncul.
 * - github/demo: placeholder, ganti dengan URL asli.
 * - cover: warna untuk visual gradient, bukan screenshot palsu.
 */

export type Project = {
  id: string;
  title: string;
  /** Label singkat untuk kategori, diturunkan dari nama project. */
  tag: string;
  summary: string;
  description: string;
  tech: string[];
  github: string;
  demo: string;
  cover: { from: string; via: string; to: string };
};

export const projects: Project[] = [
  {
    id: "ppdb-tk",
    title: "PPDB TK",
    tag: "Sistem Pendaftaran",
    summary: "Aplikasi Penerimaan Peserta Didik Baru tingkat Taman Kanak-kanak.",
    description:
      "Web app untuk menangani proses pendaftaran peserta didik baru, mulai dari pengisian data calon siswa sampai data tersimpan dan dapat dikelola pihak sekolah.",
    tech: [],
    github: "https://github.com/username-anda/ppdb-tk",
    demo: "https://demo-anda.example.com/ppdb-tk",
    cover: { from: "#3b6fff", via: "#6d3fd6", to: "#38e0ff" },
  },
  {
    id: "mamnungs-pos",
    title: "Mamnungs",
    tag: "Point of Sale",
    summary: "Aplikasi Point of Sale (POS) untuk transaksi penjualan.",
    description:
      "Sistem kasir untuk mencatat transaksi penjualan secara langsung, termasuk item yang dibeli dan total pembayaran.",
    tech: [],
    github: "https://github.com/username-anda/mamnungs-pos",
    demo: "https://demo-anda.example.com/mamnungs",
    cover: { from: "#8b5cf6", via: "#3b6fff", to: "#111a44" },
  },
  {
    id: "inventory-barang",
    title: "Inventory Barang",
    tag: "Pengelolaan Stok",
    summary: "Aplikasi pencatatan dan pengelolaan persediaan barang.",
    description:
      "Aplikasi untuk memantau stok barang: data masuk, data keluar, dan posisi persediaan saat ini dalam satu halaman.",
    tech: [],
    github: "https://github.com/username-anda/inventory-barang",
    demo: "https://demo-anda.example.com/inventory",
    cover: { from: "#38e0ff", via: "#2450d4", to: "#0a1030" },
  },
  {
    id: "helpdesk",
    title: "Helpdesk Management System",
    tag: "Manajemen Tiket",
    summary: "Sistem pengelolaan tiket bantuan dan permintaan pelayanan.",
    description:
      "Aplikasi untuk menerima laporan/permintaan pengguna, mengubahnya menjadi tiket, lalu memantau status penanganannya.",
    tech: [],
    github: "https://github.com/username-anda/helpdesk",
    demo: "https://demo-anda.example.com/helpdesk",
    cover: { from: "#6d3fd6", via: "#8b5cf6", to: "#05081c" },
  },
];
