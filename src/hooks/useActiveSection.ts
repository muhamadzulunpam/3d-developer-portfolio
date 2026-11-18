import { useEffect, useState } from "react";

/**
 * Menandai section yang sedang berada di area baca, untuk highlight menu navbar.
 * Memakai IntersectionObserver (bukan scroll listener) agar tidak memicu re-render
 * tiap pixel saat pengguna scrolling.
 */
export function useActiveSection(ids: readonly string[], fallback = ""): string {
  const [active, setActive] = useState<string>(ids[0] ?? fallback);

  useEffect(() => {
    const targets = ids
      .map((id) => document.getElementById(id))
      .filter((node): node is HTMLElement => node !== null);

    if (targets.length === 0) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio);

        const first = visible[0];
        if (first) setActive(first.target.id);
      },
      // Pita baca tipis di sekitar tengah viewport.
      { rootMargin: "-45% 0px -45% 0px", threshold: [0, 0.2, 0.5, 1] },
    );

    targets.forEach((node) => observer.observe(node));
    return () => observer.disconnect();
  }, [ids]);

  return active;
}
