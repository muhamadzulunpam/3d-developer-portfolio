import { ArrowUpIcon } from "@/components/ui/icons";
import { SocialLinks } from "@/components/ui/SocialLinks";
import { navItems } from "@/data/navigation";
import { profile } from "@/data/profile";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="relative border-t border-white/[0.07] py-12 sm:py-14">
      <div className="section-shell">
        <div className="flex flex-col gap-10 md:flex-row md:items-start md:justify-between">
          <div className="max-w-sm">
            <p className="flex items-center gap-3">
              <span className="grid h-9 w-9 place-items-center rounded-xl bg-aurora font-mono text-xs font-semibold text-night-950">
                {profile.initials}
              </span>
              <span className="text-sm font-semibold text-white">{profile.name}</span>
            </p>
            <p className="mt-4 text-sm leading-relaxed text-mute">{profile.headline}</p>
          </div>

          <nav aria-label="Navigasi footer" className="grid grid-cols-2 gap-x-10 gap-y-1 sm:grid-cols-3">
            {navItems.map((item) => (
              <a
                key={item.id}
                href={`#${item.id}`}
                className="-mx-2 rounded-lg px-2 py-1.5 text-sm text-mute transition-colors duration-300 hover:text-white"
              >
                {item.label}
              </a>
            ))}
          </nav>

          <SocialLinks />
        </div>

        <div className="mt-10 flex flex-col gap-4 border-t border-white/[0.07] pt-6 sm:flex-row sm:items-center sm:justify-between">
          <p className="font-mono text-[11px] uppercase tracking-[0.18em] text-mute/80">
            © {year} {profile.name}
          </p>
          <p className="text-xs text-mute/70">React · TypeScript · Tailwind CSS · Framer Motion · Three.js</p>

          <a
            href="#home"
            className="glass inline-flex items-center gap-2 self-start rounded-full px-4 py-2 text-xs text-mute transition-colors duration-300 hover:text-white sm:self-auto"
          >
            <ArrowUpIcon className="h-4 w-4" />
            Kembali ke atas
          </a>
        </div>
      </div>
    </footer>
  );
}
