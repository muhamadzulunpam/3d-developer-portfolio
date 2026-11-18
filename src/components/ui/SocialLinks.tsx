import { ArrowUpRightIcon, GithubIcon, LinkedinIcon, MailIcon } from "@/components/ui/icons";
import { profile } from "@/data/profile";
import { isPlaceholderUrl } from "@/lib/placeholder";
import { cn } from "@/lib/cn";

const ICON = { github: GithubIcon, linkedin: LinkedinIcon, mail: MailIcon } as const;

type SocialLinksProps = {
  /** "icons" = bulat kecil untuk navbar/footer, "rows" = kartu lengkap untuk section kontak. */
  variant?: "icons" | "rows";
  className?: string;
  /** Dipakai untuk menutup menu mobile setelah tautan diklik. */
  onNavigate?: () => void;
};

/**
 * Satu sumber kebenaran untuk tautan sosial.
 * Bila URL masih placeholder, tautan dirender non-aktif supaya pengunjung
 * tidak diarahkan ke profil yang tidak ada.
 */
export function SocialLinks({ variant = "icons", className, onNavigate }: SocialLinksProps) {
  const isRows = variant === "rows";

  return (
    <ul className={cn(isRows ? "space-y-4" : "flex items-center gap-2", className)}>
      {profile.socials.map((social) => {
        const Icon = ICON[social.icon];
        const ready = !isPlaceholderUrl(social.href);
        const external = social.icon !== "mail";

        const anchor = (
          <a
            href={ready ? social.href : undefined}
            onClick={onNavigate}
            aria-disabled={!ready}
            aria-label={isRows ? undefined : social.label}
            title={ready ? social.value : `${social.label} masih placeholder — isi di src/data/profile.ts`}
            target={external && ready ? "_blank" : undefined}
            rel={external ? "noreferrer noopener" : undefined}
            className={cn(
              isRows
                ? "glass group flex items-center gap-4 rounded-2xl px-5 py-4 shadow-glass transition-[transform,border-color,box-shadow] duration-500 ease-elegant hover:-translate-y-1 hover:border-azure-400/35 hover:shadow-card"
                : "glass grid h-10 w-10 place-items-center rounded-xl text-mute transition-[color,transform,border-color] duration-300 ease-elegant hover:-translate-y-0.5 hover:border-azure-400/40 hover:text-white",
              !ready && "pointer-events-none opacity-50",
            )}
          >
            {isRows ? (
              <>
                <span className="grid h-11 w-11 shrink-0 place-items-center rounded-xl border border-white/[0.08] bg-white/[0.04] text-azure-400">
                  <Icon className="h-5 w-5" />
                </span>
                <span className="min-w-0">
                  <span className="block text-sm font-medium text-white">{social.label}</span>
                  <span className="block truncate text-xs text-mute">{social.value}</span>
                </span>
                <ArrowUpRightIcon className="ml-auto h-4 w-4 shrink-0 text-mute transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-white" />
              </>
            ) : (
              <Icon className="h-4 w-4" />
            )}
          </a>
        );

        return <li key={social.label}>{anchor}</li>;
      })}
    </ul>
  );
}
