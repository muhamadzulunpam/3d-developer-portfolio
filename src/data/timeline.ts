/**
 * Linimasa "Experience & Education".
 * Sengaja hanya berisi pendidikan (S1 Teknik Informatika) dan project yang
 * Anda sebutkan. Tidak ada riwayat kerja/pencapaian yang dikarang.
 * Untuk menambah magang/kerja, tambahkan entri baru dengan kind "job".
 */

export type TimelineKind = "education" | "project" | "job";

export type TimelineEntry = {
  id: string;
  kind: TimelineKind;
  title: string;
  /** Institusi / klien / nama tim. */
  place: string;
  /** Format bebas, contoh: "2019 — 2023". */
  period: string;
  description: string;
  focus: string[];
};

export const timeline: TimelineEntry[] = [
  {
    id: "s1-ti",
    kind: "education",
    title: "S1 Teknik Informatika",
    // TODO: isi dengan nama universitas/asal kampus Anda.
    place: "Nama universitas belum diisi",
    // TODO: isi dengan tahun masuk dan tahun lulus.
    period: "Tahun belum diisi",
    description:
      "Latar belakang pendidikan yang menjadi dasar saya membangun aplikasi web: pemrograman, basis data, dan perancangan sistem.",
    focus: ["Pemrograman", "Basis Data", "Perancangan Sistem"],
  },
  {
    id: "tp-ppdb",
    kind: "project",
    title: "PPDB TK",
    place: "Project portofolio",
    // TODO: isi dengan tahun/periode pengerjaan.
    period: "Periode belum diisi",
    description:
      "Membangun alur pendaftaran peserta didik baru untuk tingkat TK, dari input data calon siswa sampai tersimpan sebagai data sekolah.",
    focus: ["Formulir pendaftaran", "Data calon siswa", "Admin sekolah"],
  },
  {
    id: "tp-pos",
    kind: "project",
    title: "Mamnungs (Point of Sale)",
    place: "Project portofolio",
    period: "Periode belum diisi",
    description:
      "Membangun aplikasi kasir untuk mencatat transaksi penjualan, item yang dibeli, dan total pembayaran.",
    focus: ["Transaksi penjualan", "Katalog item", "Struk/total"],
  },
  {
    id: "tp-inventory",
    kind: "project",
    title: "Inventory Barang",
    place: "Project portofolio",
    period: "Periode belum diisi",
    description:
      "Membangun aplikasi persediaan barang untuk memantau stok masuk, stok keluar, dan posisi stok terkini.",
    focus: ["Stok masuk/keluar", "Posisi persediaan", "Laporan stok"],
  },
  {
    id: "tp-helpdesk",
    kind: "project",
    title: "Helpdesk Management System",
    place: "Project portofolio",
    period: "Periode belum diisi",
    description:
      "Membangun sistem yang mengubah laporan atau permintaan pengguna menjadi tiket dan memantau status penanganannya.",
    focus: ["Pengajuan tiket", "Status penanganan", "Rekap tiket"],
  },
];
