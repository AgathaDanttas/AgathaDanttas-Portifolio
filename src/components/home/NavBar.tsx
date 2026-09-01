import React, { useState } from "react";
import type { Translation } from "../../types/translation";
import type { Language } from "../../types/language";

type NavbarProps = {
  t: Translation;
  lang: Language;
  setLang: React.Dispatch<React.SetStateAction<Language>>;
  scrolled: boolean;
};

export default function Navbar({ t, lang, setLang, scrolled }: NavbarProps) {
  const [menuOpen, setMenuOpen] = useState(false);
  const [langOpen, setLangOpen] = useState(false);

  const langs: { code: Language; label: string; flag: string }[] = [
    { code: "pt", label: "Português", flag: "🇧🇷" },
    { code: "en", label: "English", flag: "🇺🇸" },
    { code: "fr", label: "Français", flag: "🇫🇷" },
    { code: "es", label: "Español", flag: "🇪🇸" },
  ];

  const navLinks = [
    { id: "about", label: t.nav.about },
    { id: "projects", label: t.nav.projects },
    { id: "skills", label: t.nav.skills },
    { id: "contact", label: t.nav.contact },
  ];

  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    setMenuOpen(false);
    setLangOpen(false);
  };

  return (
    <nav
      className={`fixed left-0 right-0 top-0 z-[100] px-[5%] transition-all duration-300 ${scrolled
          ? "border-b border-violet-500/15 bg-black/90 backdrop-blur-xl"
          : "bg-transparent"
        }`}
    >
      <div className="mx-auto flex h-[70px] max-w-[1200px] items-center justify-between">
        <div
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          className="flex cursor-pointer items-center gap-2.5"
        >
          <div className="flex h-[38px] w-[38px] items-center justify-center rounded-lg border border-violet-500/40 bg-gradient-to-br from-violet-500/20 to-black shadow-[0_0_12px_rgba(124,58,237,0.25)]">
            <span className="bg-gradient-to-br from-violet-300 to-violet-600 bg-clip-text font-mono text-sm font-bold text-transparent">
              AD
            </span>
          </div>

          <span className="font-mono text-sm font-semibold tracking-[0.05em] text-slate-200">
            Agatha Dantas
          </span>
        </div>

        <div className="hidden items-center gap-8 md:flex">
          {navLinks.map((link) => (
            <button
              key={link.id}
              onClick={() => scrollTo(link.id)}
              className="group relative bg-transparent px-0 py-1 font-mono text-[13px] tracking-[0.05em] text-slate-400 transition-colors duration-300 hover:text-violet-300"
            >
              {link.label}
              <span className="absolute bottom-0 left-0 h-[2px] w-0 bg-violet-500 transition-all duration-300 group-hover:w-full" />
            </button>
          ))}

          <div className="relative">
            <button
              onClick={() => setLangOpen((prev) => !prev)}
              className="flex items-center gap-1.5 rounded-lg border border-violet-500/30 bg-violet-500/10 px-2.5 py-1.5 text-[13px] text-violet-300 transition hover:border-violet-400/50 hover:bg-violet-500/15"
            >
              <span>🌐</span>
              <span>{langs.find((item) => item.code === lang)?.flag}</span>
            </button>

            {langOpen && (
              <div className="absolute right-0 top-[calc(100%+8px)] min-w-[150px] overflow-hidden rounded-xl border border-violet-500/30 bg-black/95 shadow-[0_8px_32px_rgba(124,58,237,0.2)] backdrop-blur-xl">
                {langs.map((item) => (
                  <button
                    key={item.code}
                    onClick={() => {
                      setLang(item.code);
                      setLangOpen(false);
                    }}
                    className={`flex w-full items-center gap-2.5 px-4 py-2.5 text-left font-mono text-[13px] transition ${lang === item.code
                        ? "bg-violet-500/15 text-violet-300"
                        : "text-slate-400 hover:bg-violet-500/10 hover:text-violet-200"
                      }`}
                  >
                    <span>{item.flag}</span>
                    <span>{item.label}</span>
                  </button>
                ))}
              </div>
            )}
          </div>
        </div>

        <div className="flex items-center gap-3 md:hidden">
          <button
            onClick={() => setLangOpen((prev) => !prev)}
            className="rounded-lg border border-violet-500/30 bg-violet-500/10 px-2.5 py-1.5 text-[13px] text-violet-300 transition hover:border-violet-400/50 hover:bg-violet-500/15"
          >
            🌐
          </button>

          <button
            onClick={() => setMenuOpen((prev) => !prev)}
            className="rounded-lg border border-violet-500/30 px-2.5 py-1.5 text-lg text-violet-300 transition hover:border-violet-400/50 hover:bg-violet-500/10"
          >
            {menuOpen ? "✕" : "☰"}
          </button>
        </div>
      </div>

      {menuOpen && (
        <div className="border-t border-violet-500/20 bg-black/95 px-[5%] pb-5 pt-2 backdrop-blur-xl md:hidden">
          {navLinks.map((link) => (
            <button
              key={link.id}
              onClick={() => scrollTo(link.id)}
              className="block w-full border-b border-violet-500/10 py-3.5 text-left font-mono text-[15px] text-slate-400 transition hover:text-violet-300"
            >
              {link.label}
            </button>
          ))}
        </div>
      )}

      {langOpen && (
        <div className="fixed right-[5%] top-[70px] z-[200] min-w-[150px] overflow-hidden rounded-xl border border-violet-500/30 bg-black/95 shadow-[0_8px_32px_rgba(124,58,237,0.2)] backdrop-blur-xl md:hidden">
          {langs.map((item) => (
            <button
              key={item.code}
              onClick={() => {
                setLang(item.code);
                setLangOpen(false);
              }}
              className={`flex w-full items-center gap-2.5 px-4 py-3 text-left font-mono text-sm transition ${lang === item.code
                  ? "bg-violet-500/15 text-violet-300"
                  : "text-slate-400 hover:bg-violet-500/10 hover:text-violet-200"
                }`}
            >
              <span>{item.flag}</span>
              <span>{item.label}</span>
            </button>
          ))}
        </div>
      )}
    </nav>
  );
}