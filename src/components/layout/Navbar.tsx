import { useEffect, useRef, useState } from "react";
import { AnimatePresence, motion, useMotionValueEvent, useScroll } from "framer-motion";
import { ButtonLink } from "@/components/ui/Button";
import { SocialLinks } from "@/components/ui/SocialLinks";
import { ArrowRightIcon, CloseIcon, MenuIcon } from "@/components/ui/icons";
import { navItems, sectionIds } from "@/data/navigation";
import { profile } from "@/data/profile";
import { useActiveSection } from "@/hooks/useActiveSection";
import { cn } from "@/lib/cn";

function Logo({ compact = false }: { compact?: boolean }) {
  return (
    <a href="#home" className="group flex items-center gap-3" aria-label={`${profile.name} — ke awal halaman`}>
      <span className="relative grid h-10 w-10 place-items-center rounded-xl bg-aurora font-mono text-sm font-semibold text-night-950 shadow-glow-azure transition-transform duration-500 ease-elegant group-hover:scale-[1.06]">
        {profile.initials}
      </span>
      {!compact && (
        <span className="hidden leading-tight sm:block">
          <span className="block text-sm font-semibold text-white">{profile.name}</span>
          <span className="block font-mono text-[10px] uppercase tracking-[0.28em] text-mute">{profile.role}</span>
        </span>
      )}
    </a>
  );
}

export function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const tombol = useRef<HTMLButtonElement>(null);
  const linkFokus = useRef<HTMLAnchorElement>(null);
  const active = useActiveSection(sectionIds, "home");
  const { scrollY, scrollYProgress } = useScroll();

  useMotionValueEvent(scrollY, "change", (value) => setScrolled(value > 24));

  // Panel mobile: pindahkan fokus ke dalam panel, kembalikan ke tombol saat tertutup.
  useEffect(() => {
    if (!open) return;

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") setOpen(false);
    };

    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", onKeyDown);

    // Panel baru ada setelah commit ini, jadi fokus dijadwalkan pada tick berikutnya.
    const jadwalFokus = window.setTimeout(() => linkFokus.current?.focus(), 0);

    return () => {
      window.clearTimeout(jadwalFokus);
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKeyDown);
      tombol.current?.focus();
    };
  }, [open]);

  return (
    <header className="fixed inset-x-0 top-0 z-50">
      <div
        className={cn(
          "transition-[background-color,border-color,box-shadow,backdrop-filter] duration-500 ease-elegant",
          scrolled ? "glass-strong border-b border-white/[0.07] shadow-glass" : "border-b border-transparent",
        )}
      >
        <nav className="section-shell flex h-16 items-center justify-between sm:h-20" aria-label="Navigasi utama">
          <Logo />

          <ul className="hidden items-center gap-1 lg:flex">
            {navItems.map((item) => {
              const isActive = active === item.id;
              return (
                <li key={item.id} className="relative">
                  <a
                    href={`#${item.id}`}
                    className={cn(
                      "relative rounded-full px-4 py-2 text-sm transition-colors duration-300",
                      isActive ? "text-white" : "text-mute hover:text-white",
                    )}
                    aria-current={isActive ? "true" : undefined}
                  >
                    <span className="relative z-10">{item.label}</span>
                    {isActive && (
                      <motion.span
                        layoutId="nav-active-bg"
                        className="absolute inset-0 rounded-full border border-white/[0.08] bg-white/[0.06]"
                        transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
                      />
                    )}
                  </a>
                </li>
              );
            })}
          </ul>

          <div className="flex items-center gap-3">
            <div className="hidden md:flex lg:hidden">
              <SocialLinks />
            </div>

            <ButtonLink
              href="#contact"
              variant="primary"
              size="sm"
              className="hidden lg:inline-flex"
              iconRight={<ArrowRightIcon className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5" />}
            >
              Kontak
            </ButtonLink>

            <button
              ref={tombol}
              type="button"
              onClick={() => setOpen((value) => !value)}
              className="glass grid h-10 w-10 place-items-center rounded-xl text-white lg:hidden"
              aria-expanded={open}
              aria-controls="mobile-menu"
              aria-label={open ? "Tutup menu" : "Buka menu"}
            >
              {open ? <CloseIcon className="h-5 w-5" /> : <MenuIcon className="h-5 w-5" />}
            </button>
          </div>
        </nav>

        <motion.span
          style={{ scaleX: scrollYProgress }}
          className="block h-px origin-left bg-aurora"
          aria-hidden="true"
        />
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            id="mobile-menu"
            key="mobile-menu"
            initial={{ opacity: 0, y: -12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
            className="glass-strong mx-4 mt-3 rounded-2xl p-4 shadow-card lg:hidden"
            aria-label="Menu navigasi mobile"
          >
            <ul className="grid gap-1">
              {navItems.map((item, index) => (
                <li key={item.id}>
                  <a
                    href={`#${item.id}`}
                    ref={index === 0 ? linkFokus : undefined}
                    onClick={() => setOpen(false)}
                    className={cn(
                      "flex items-center justify-between rounded-xl px-4 py-3 text-sm transition-colors duration-300",
                      active === item.id ? "bg-white/[0.06] text-white" : "text-mute hover:bg-white/[0.04] hover:text-white",
                    )}
                  >
                    <span>{item.label}</span>
                    <span className="font-mono text-[10px] tracking-[0.2em] text-mute/70">{item.index}</span>
                  </a>
                </li>
              ))}
            </ul>

            <div className="mt-4 flex items-center gap-3 border-t border-white/[0.07] pt-4">
              <SocialLinks onNavigate={() => setOpen(false)} />
              <ButtonLink href="#contact" size="sm" className="ml-auto" onClick={() => setOpen(false)}>
                Hubungi Saya
              </ButtonLink>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
