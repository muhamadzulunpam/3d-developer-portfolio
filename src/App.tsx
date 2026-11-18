import { useEffect } from "react";
import { MotionConfig } from "framer-motion";
import { BackgroundFX } from "@/components/layout/BackgroundFX";
import { Footer } from "@/components/layout/Footer";
import { Navbar } from "@/components/layout/Navbar";
import { JsonLd } from "@/components/seo/JsonLd";
import { About } from "@/components/sections/About";
import { Contact } from "@/components/sections/Contact";
import { ExperienceEducation } from "@/components/sections/ExperienceEducation";
import { Hero } from "@/components/sections/Hero";
import { Projects } from "@/components/sections/Projects";
import { Skills } from "@/components/sections/Skills";
import { useMotionReduced } from "@/hooks/useMotionReduced";

export default function App() {
  const hematAnimasi = useMotionReduced();

  // Kelas scroll-smooth ada di <html> dan hanya dinonaktifkan media query di CSS.
  // Saat mode hemat dipaksa lewat ?rm=1, media query tidak ikut aktif, jadi kelasnya
  // dilepas di sini supaya perilaku gulir sama seperti preferensi OS.
  useEffect(() => {
    const root = document.documentElement;
    if (hematAnimasi) root.classList.remove("scroll-smooth");
    else root.classList.add("scroll-smooth");
  }, [hematAnimasi]);

  return (
    <MotionConfig reducedMotion={hematAnimasi ? "always" : "user"}>
      <div className="relative min-h-screen overflow-x-clip">
        <BackgroundFX />

        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[60] focus:rounded-full focus:bg-aurora focus:px-4 focus:py-2 focus:text-sm focus:font-medium focus:text-night-950"
        >
          Lewati ke konten
        </a>

        <Navbar />

        <JsonLd />

        <main id="main-content" tabIndex={-1} className="outline-none">
          <Hero />
          <About />
          <Skills />
          <Projects />
          <ExperienceEducation />
          <Contact />
        </main>

        <Footer />
      </div>
    </MotionConfig>
  );
}
