import { profile } from "@/data/profile";
import { skills } from "@/data/skills";
import { isPlaceholderUrl } from "@/lib/placeholder";

/**
 * Structured data schema.org/Person untuk rich result pencarian.
 * Field yang masih placeholder tidak ikut dikirim, jadi mesin pencari
 * tidak pernah membaca identitas yang belum Anda isi.
 */
export function JsonLd() {
  const sameAs = profile.socials
    .filter((social) => social.icon !== "mail" && !isPlaceholderUrl(social.href))
    .map((social) => social.href);

  const person = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: profile.name,
    jobTitle: profile.role,
    description: profile.intro,
    ...(isPlaceholderUrl(profile.site.url) ? {} : { url: profile.site.url }),
    ...(isPlaceholderUrl(profile.contact.email) ? {} : { email: `mailto:${profile.contact.email}` }),
    ...(sameAs.length === 0 ? {} : { sameAs }),
    knowsAbout: skills.map((skill) => skill.name),
  };

  return (
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(person) }} />
  );
}
