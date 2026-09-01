import { useEffect, useState } from "react";
import { translations } from "../data/translations";
import type { Language } from "../types/language";
import { getInitialLang, persistLang } from "../lib/lang";
import Navbar from "../components/home/NavBar";
import Hero from "../components/home/Hero";
import About from "../components/home/About";
import Projects from "../components/home/Projects";
import Skills from "../components/home/Skills";
import Contact from "../components/home/Contact";
import SplashScreen from "../components/home/SplashScreen";
import ParticleCanvas from "../components/home/ParticleCanvas";
import CustomCursor from "../components/home/CustomCursor";
import Experience from "../components/home/Experience";
import Process from "../components/home/Process";
import StudyingSection from "../components/home/Studying";


export default function Home() {
  const [splashDone, setSplashDone] = useState(false);
  const [lang, setLang] = useState<Language>(getInitialLang);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handler);

    return () => window.removeEventListener("scroll", handler);
  }, []);

  useEffect(() => {
    persistLang(lang);
  }, [lang]);

  const t = translations[lang];

  return (
    <>
      <CustomCursor />
      {!splashDone && <SplashScreen onDone={() => setSplashDone(true)} />}

      <div style={{ opacity: splashDone ? 1 : 0, transition: "opacity 0.6s ease", minHeight: "100vh" }}>
        <ParticleCanvas />
        <Navbar t={t} lang={lang} setLang={setLang} scrolled={scrolled} />

        <main style={{ position: "relative", zIndex: 1 }}>
          <Hero t={t} />
          <About t={t} />
          <Projects t={t} />
          <Process t={t} />
          <Experience t={t} />
          <StudyingSection t={t} />
          <Skills t={t} />
          <Contact t={t} />
        </main>
      </div>
    </>
  );
}