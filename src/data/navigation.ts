export type NavItem = {
  id: string;
  label: string;
  /** Nomor urut kecil yang tampil di navbar/desktop menu. */
  index: string;
};

export const navItems = [
  { id: "home", label: "Home", index: "01" },
  { id: "about", label: "Tentang", index: "02" },
  { id: "skills", label: "Keahlian", index: "03" },
  { id: "projects", label: "Project", index: "04" },
  { id: "journey", label: "Pengalaman", index: "05" },
  { id: "contact", label: "Kontak", index: "06" },
] satisfies NavItem[];

/** Dipakai IntersectionObserver & anchor link, jadi harus tetap berupa array module-level. */
export const sectionIds = navItems.map((item) => item.id);
