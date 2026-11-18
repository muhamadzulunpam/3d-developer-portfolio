import { useState, type ChangeEvent, type FormEvent, type ReactNode } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { buttonClass } from "@/components/ui/Button";
import { Chip } from "@/components/ui/Chip";
import { GlassCard } from "@/components/ui/GlassCard";
import { Reveal } from "@/components/ui/Reveal";
import { Section } from "@/components/ui/Section";
import { SocialLinks } from "@/components/ui/SocialLinks";
import { AlertIcon, ArrowRightIcon, CheckIcon, PinIcon } from "@/components/ui/icons";
import { profile } from "@/data/profile";
import { isPlaceholderUrl } from "@/lib/placeholder";
import { cn } from "@/lib/cn";

const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;

type Values = { name: string; email: string; subject: string; message: string };
type Errors = Partial<Record<keyof Values, string>>;
type Status = "idle" | "error" | "sent" | "placeholder";

const EMPTY: Values = { name: "", email: "", subject: "", message: "" };

function validate(values: Values): Errors {
  const errors: Errors = {};
  if (values.name.trim().length < 2) errors.name = "Isi nama minimal 2 karakter.";
  if (!EMAIL_PATTERN.test(values.email.trim())) errors.email = "Format email belum benar, contoh: nama@email.com";
  if (values.message.trim().length < 10) errors.message = "Tulis pesan minimal 10 karakter.";
  return errors;
}

const inputClass = (invalid: boolean) =>
  cn(
    "w-full rounded-xl border bg-white/[0.04] px-4 py-3 text-sm text-ink placeholder:text-mute/50",
    "transition-[border-color,box-shadow,background-color] duration-300 ease-elegant outline-none",
    invalid
      ? "border-red-400/60 focus:border-red-400"
      : "border-white/10 focus:border-azure-400/70 focus:bg-white/[0.06] focus:shadow-glow-azure",
  );

function Field({
  id,
  label,
  error,
  children,
}: {
  id: string;
  label: string;
  error?: string;
  children: ReactNode;
}) {
  return (
    <div>
      <label htmlFor={id} className="mb-1.5 block font-mono text-[10px] uppercase tracking-[0.22em] text-mute">
        {label}
      </label>
      {children}
      <AnimatePresence>
        {error && (
          <motion.p
            id={`${id}-error`}
            initial={{ opacity: 0, y: -4 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -4 }}
            className="mt-1.5 flex items-center gap-1.5 text-[11px] text-red-300"
            role="status"
          >
            <AlertIcon className="h-3.5 w-3.5" />
            {error}
          </motion.p>
        )}
      </AnimatePresence>
    </div>
  );
}

export function Contact() {
  const [values, setValues] = useState<Values>(EMPTY);
  const [errors, setErrors] = useState<Errors>({});
  const [status, setStatus] = useState<Status>("idle");

  const emailReady = !isPlaceholderUrl(profile.contact.email);
  const locationIsPlaceholder = /belum diisi/i.test(profile.contact.location);

  function update<K extends keyof Values>(key: K) {
    return (event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
      setValues((prev) => ({ ...prev, [key]: event.target.value }));
      setErrors((prev) => ({ ...prev, [key]: undefined }));
      setStatus("idle");
    };
  }

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const nextErrors = validate(values);
    setErrors(nextErrors);

    if (Object.values(nextErrors).some(Boolean)) {
      setStatus("error");
      return;
    }

    if (!emailReady) {
      setStatus("placeholder");
      return;
    }

    const subject = values.subject.trim() || `Pesan portofolio dari ${values.name.trim()}`;
    const body = `${values.message.trim()}\n\n— ${values.name.trim()}\n${values.email.trim()}`;

    // Tanpa backend: pesan disusun ke aplikasi email pengunjung lewat mailto.
    window.location.href = `mailto:${profile.contact.email}?subject=${encodeURIComponent(
      subject,
    )}&body=${encodeURIComponent(body)}`;

    setStatus("sent");
  }

  return (
    <Section
      id="contact"
      index="06"
      eyebrow="Kontak"
      title={
        <>
          Mari diskusikan <span className="text-gradient">proyek Anda</span>
        </>
      }
      description="Form memakai mailto, jadi pesan langsung terbuka di aplikasi email Anda tanpa perlu server."
    >
      <div className="grid gap-8 lg:grid-cols-[1.05fr_0.95fr]">
        <Reveal>
          <GlassCard className="p-5 sm:p-7">
            <form onSubmit={handleSubmit} noValidate className="space-y-5">
              <div className="grid gap-5 sm:grid-cols-2">
                <Field id="name" label="Nama" error={errors.name}>
                  <input
                    id="name"
                    name="name"
                    type="text"
                    autoComplete="name"
                    placeholder="Nama Anda"
                    value={values.name}
                    onChange={update("name")}
                    className={inputClass(Boolean(errors.name))}
                    aria-invalid={Boolean(errors.name)}
                    aria-describedby={errors.name ? "name-error" : undefined}
                  />
                </Field>

                <Field id="email" label="Email" error={errors.email}>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    autoComplete="email"
                    placeholder="nama@email.com"
                    value={values.email}
                    onChange={update("email")}
                    className={inputClass(Boolean(errors.email))}
                    aria-invalid={Boolean(errors.email)}
                    aria-describedby={errors.email ? "email-error" : undefined}
                  />
                </Field>
              </div>

              <Field id="subject" label="Subjek (opsional)">
                <input
                  id="subject"
                  name="subject"
                  type="text"
                  placeholder="Contoh: kerja sama proyek web"
                  value={values.subject}
                  onChange={update("subject")}
                  className={inputClass(false)}
                />
              </Field>

              <Field id="message" label="Pesan" error={errors.message}>
                <textarea
                  id="message"
                  name="message"
                  rows={6}
                  placeholder="Ceritakan kebutuhan aplikasinya…"
                  value={values.message}
                  onChange={update("message")}
                  className={cn(inputClass(Boolean(errors.message)), "resize-y")}
                  aria-invalid={Boolean(errors.message)}
                  aria-describedby={errors.message ? "message-error" : undefined}
                />
              </Field>

              <div className="flex flex-wrap items-center gap-4 pt-1">
                <button type="submit" className={buttonClass("primary", "lg")}>
                  Kirim Pesan
                  <ArrowRightIcon className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                </button>

                <AnimatePresence mode="wait">
                  {status !== "idle" && (
                    <motion.p
                      key={status}
                      initial={{ opacity: 0, x: -6 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: 6 }}
                      transition={{ duration: 0.25 }}
                      role="status"
                      aria-live="polite"
                      className={cn(
                        "flex items-center gap-2 text-xs",
                        status === "error" && "text-red-300",
                        status === "sent" && "text-cyanish",
                        status === "placeholder" && "text-violet-400",
                      )}
                    >
                      {status === "sent" ? <CheckIcon className="h-4 w-4" /> : <AlertIcon className="h-4 w-4" />}
                      {status === "sent" && "Pesan sudah tersusun di aplikasi email Anda."}
                      {status === "error" && "Periksa kembali isian yang ditandai."}
                      {status === "placeholder" && "Email kontak belum diisi, jadi pesan belum bisa dikirim."}
                    </motion.p>
                  )}
                </AnimatePresence>
              </div>
            </form>
          </GlassCard>
        </Reveal>

        <div className="space-y-4">
          <Reveal delay={0.08}>
            <div>
              <p className="font-mono text-[11px] uppercase tracking-[0.28em] text-cyanish">Tautan & Kontak</p>
              <SocialLinks variant="rows" className="mt-4" />
            </div>
          </Reveal>

          <Reveal delay={0.2}>
            <div className="glass flex items-center gap-3 rounded-2xl px-5 py-4">
              <PinIcon className="h-5 w-5 text-violet-400" />
              <div className="flex flex-wrap items-center gap-2">
                <span className={cn("text-sm", locationIsPlaceholder ? "text-mute" : "text-ink")}>
                  {profile.contact.location}
                </span>
                {locationIsPlaceholder && <Chip tone="placeholder">isi di src/data/profile.ts</Chip>}
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </Section>
  );
}
