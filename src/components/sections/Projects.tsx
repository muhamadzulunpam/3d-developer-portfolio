import { Reveal } from "@/components/ui/Reveal";
import { buttonClass } from "@/components/ui/Button";
import { Chip } from "@/components/ui/Chip";
import { Section } from "@/components/ui/Section";
import { ArrowRightIcon, ExternalLinkIcon, GithubIcon } from "@/components/ui/icons";
import { projects, type Project } from "@/data/projects";
import { isPlaceholderUrl } from "@/lib/placeholder";
import { cn } from "@/lib/cn";

/** Label pendek di cover: akronim dipertahankan, sisanya diambil inisial kata. */
function coverLabel(title: string): string {
  const words = title.split(/[\s()]+/).filter(Boolean);
  const first = words[0] ?? "";

  if (first.length >= 3 && first === first.toUpperCase()) return first.slice(0, 4);
  if (words.length === 1) return first.slice(0, 2).toUpperCase();

  return words
    .slice(0, 2)
    .map((word) => (word[0] ?? "").toUpperCase())
    .join("");
}

/**
 * Cover dibuat dari gradien + bentuk abstrak (bukan screenshot palsu),
 * karena gambar asli tiap project belum tersedia.
 */
function ProjectCover({ project }: { project: Project }) {
  return (
    <div
      role="img"
      aria-label={`Visual representatif project ${project.title}`}
      className="relative aspect-[16/10] w-full overflow-hidden"
      style={{
        backgroundImage: `linear-gradient(135deg, ${project.cover.from} 0%, ${project.cover.via} 48%, ${project.cover.to} 100%)`,
      }}
    >
      <div className="absolute inset-0 bg-grid-faint bg-grid opacity-25" />

      <div className="absolute -right-10 -top-12 h-44 w-44 rounded-full border border-white/20 opacity-40 transition-transform duration-[1200ms] ease-elegant group-hover:scale-125" />
      <div className="absolute -bottom-16 left-10 h-40 w-40 rounded-full border border-white/10 opacity-30 transition-transform duration-[1200ms] ease-elegant group-hover:-translate-y-3" />
      <div className="absolute inset-0 bg-gradient-to-t from-night-950/90 via-night-950/25 to-transparent" />

      <span className="absolute bottom-4 left-5 font-mono text-[10px] uppercase tracking-[0.24em] text-white/70">
        {project.tag}
      </span>
      <span className="absolute right-5 top-4 text-4xl font-semibold tracking-tight text-white/90 transition-transform duration-700 ease-elegant group-hover:-translate-y-1 sm:text-5xl">
        {coverLabel(project.title)}
      </span>
    </div>
  );
}

function ProjectCard({ project }: { project: Project }) {
  const githubReady = !isPlaceholderUrl(project.github);
  const demoReady = !isPlaceholderUrl(project.demo);

  return (
    <article className="glass ring-aurora group flex h-full flex-col overflow-hidden rounded-2xl shadow-glass transition-[transform,box-shadow,border-color] duration-500 ease-elegant hover:-translate-y-2 hover:border-azure-400/35 hover:shadow-card">
      <ProjectCover project={project} />

      <div className="flex flex-1 flex-col p-5 sm:p-6">
        <h3 className="text-lg font-semibold tracking-tight text-white sm:text-xl">{project.title}</h3>

        <p className="mt-2 text-sm leading-relaxed text-ink/90">{project.summary}</p>
        <p className="mt-2.5 text-xs leading-relaxed text-mute">{project.description}</p>

        <div className="mt-5 flex flex-wrap gap-2">
          {project.tech.length > 0 ? (
            project.tech.map((tech) => <Chip key={tech}>{tech}</Chip>)
          ) : (
            <Chip tone="placeholder">tech stack belum diisi</Chip>
          )}
        </div>

        <div className="mt-6 flex flex-wrap items-center gap-3 border-t border-white/[0.07] pt-5">
          <a
            href={githubReady ? project.github : undefined}
            aria-disabled={!githubReady}
            title={githubReady ? "Lihat kode sumber" : "URL GitHub masih placeholder — isi di src/data/projects.ts"}
            target={githubReady ? "_blank" : undefined}
            rel="noreferrer noopener"
            className={cn(buttonClass("outline", "sm"), !githubReady && "pointer-events-none opacity-45")}
          >
            <GithubIcon className="h-4 w-4" />
            GitHub
          </a>

          <a
            href={demoReady ? project.demo : undefined}
            aria-disabled={!demoReady}
            title={demoReady ? "Buka demo" : "URL live demo masih placeholder — isi di src/data/projects.ts"}
            target={demoReady ? "_blank" : undefined}
            rel="noreferrer noopener"
            className={cn(buttonClass("primary", "sm"), !demoReady && "pointer-events-none opacity-45")}
          >
            Live Demo
            {demoReady ? (
              <ExternalLinkIcon className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5" />
            ) : (
              <ArrowRightIcon className="h-4 w-4" />
            )}
          </a>
        </div>
      </div>
    </article>
  );
}

export function Projects() {
  return (
    <Section
      id="projects"
      index="04"
      eyebrow="Project"
      title={
        <>
          Aplikasi yang sudah saya <span className="text-gradient">bangun</span>
        </>
      }
      description="Empat sistem informasi dengan fokus berbeda: pendaftaran, transaksi, persediaan, dan penanganan tiket."
    >
      <div className="grid gap-6 sm:grid-cols-2">
        {projects.map((project, index) => (
          <Reveal key={project.id} delay={index * 0.07} className="h-full">
            <ProjectCard project={project} />
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
