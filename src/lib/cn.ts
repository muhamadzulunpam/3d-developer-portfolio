export type ClassValue = string | false | null | undefined;

/** Menggabungkan className secara kondisional agar komponen UI tetap mudah dipakai ulang. */
export function cn(...parts: ClassValue[]): string {
  return parts.filter((part): part is string => Boolean(part)).join(" ");
}
