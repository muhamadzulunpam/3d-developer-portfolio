/**
 * Penanda URL sementara.
 * Selama data masih memakai nilai contoh, tombol/link ditampilkan non-aktif
 * supaya pengunjung tidak diarahkan ke domain yang tidak ada.
 */
const PLACEHOLDER_PATTERN = /(username-anda|nama-anda|demo-anda|example\.com|email\.com)/i;

export function isPlaceholderUrl(value: string | null | undefined): boolean {
  if (!value) return true;
  const trimmed = value.trim();
  if (trimmed === "" || trimmed === "#" || trimmed === "-") return true;
  return PLACEHOLDER_PATTERN.test(trimmed);
}
