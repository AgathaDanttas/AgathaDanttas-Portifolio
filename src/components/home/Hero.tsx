import { useEffect, useState } from "react";
import type { Translation } from "../../types/translation";

type HeroProps = {
  t: Translation;
};

export default function Hero({ t }: HeroProps) {
  const [mounted, setMounted] = useState(false);
  const [displayedName, setDisplayedName] = useState("");
  const name = t.hero.name;

  useEffect(() => {
    const timer = window.setTimeout(() => setMounted(true), 100);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    if (mounted) {
      let currentLength = 0;
      const timeout = setTimeout(() => {
        const interval = setInterval(() => {
          currentLength++;
          setDisplayedName(name.slice(0, currentLength));
          if (currentLength >= name.length) clearInterval(interval);
        }, 80);
        return () => clearInterval(interval);
      }, 600);
      return () => clearTimeout(timeout);
    }
  }, [mounted, name]);

  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="hero"
      style={{
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        position: "relative",
        padding: "0 5%",
        overflow: "hidden",
      }}
    >
      <div style={{ maxWidth: 800, textAlign: "center", position: "relative", zIndex: 1 }}>
        <div
          style={{
            opacity: mounted ? 1 : 0,
            transform: mounted ? "none" : "translateY(20px)",
            transition: "opacity 0.8s ease 0.2s, transform 0.8s ease 0.2s",
            marginBottom: 24,
          }}
        >
          <span style={{ fontSize: 24 }}>💜</span>
        </div>

        <div
          style={{
            opacity: mounted ? 1 : 0,
            transform: mounted ? "none" : "translateY(20px)",
            transition: "opacity 0.8s ease 0.4s, transform 0.8s ease 0.4s",
          }}
        >
          <p
            style={{
              fontFamily: "monospace",
              color: "#7c3aed",
              fontSize: 14,
              letterSpacing: "0.2em",
              marginBottom: 12,
            }}
          >
            {t.hero.greeting}
          </p>
        </div>

        <div
          style={{
            opacity: mounted ? 1 : 0,
            transition: "opacity 0.8s ease 0.6s",
          }}
        >
          <h1
            style={{
              fontSize: "clamp(2.8rem, 8vw, 6rem)",
              fontWeight: 800,
              lineHeight: 1.05,
              background: "linear-gradient(135deg, #ffffff 0%, #a78bfa 50%, #7c3aed 100%)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              letterSpacing: "-0.02em",
              marginBottom: 20,
              fontFamily: "'Segoe UI', sans-serif",
              minHeight: "1.2em",
              display: "inline-block",
            }}
          >
            {displayedName}
            <span
              style={{
                borderRight: "4px solid #a78bfa",
                marginLeft: 4,
                animation: "blinkCaret 1s step-end infinite",
                opacity: displayedName === name ? 0 : 1,
                transition: "opacity 0.3s ease",
              }}
            ></span>
          </h1>
        </div>

        <div
          style={{
            opacity: mounted ? 1 : 0,
            transform: mounted ? "none" : "translateY(20px)",
            transition: "opacity 1.2s ease 1.8s, transform 1.2s ease 1.8s",
          }}
        >
          <p
            style={{
              fontSize: "clamp(1rem, 2.5vw, 1.4rem)",
              color: "#94a3b8",
              fontFamily: "monospace",
              letterSpacing: "0.05em",
              marginBottom: 48,
            }}
          >
            {t.hero.title}
          </p>
        </div>

        <div
          style={{
            display: "flex",
            gap: 16,
            justifyContent: "center",
            flexWrap: "wrap",
            opacity: mounted ? 1 : 0,
            transform: mounted ? "none" : "translateY(20px)",
            transition: "opacity 1.2s ease 2.2s, transform 1.2s ease 2.2s",
          }}
        >
          <button
            onClick={() => scrollTo("projects")}
            className="btn-primary"
            style={{
              background: "linear-gradient(135deg, #7c3aed, #5b21b6)",
              border: "none",
              color: "white",
              padding: "14px 32px",
              borderRadius: 50,
              fontSize: 14,
              fontFamily: "monospace",
              letterSpacing: "0.1em",
              cursor: "pointer",
              boxShadow: "0 4px 20px rgba(124,58,237,0.4)",
              transition: "all 0.3s ease",
            }}
          >
            {t.hero.cta}
          </button>

          <button
            onClick={() => scrollTo("contact")}
            className="btn-secondary"
            style={{
              background: "transparent",
              border: "1px solid rgba(124,58,237,0.4)",
              color: "#a78bfa",
              padding: "14px 32px",
              borderRadius: 50,
              fontSize: 14,
              fontFamily: "monospace",
              letterSpacing: "0.1em",
              cursor: "pointer",
              transition: "all 0.3s ease",
            }}
          >
            {t.hero.cta2}
          </button>

          <a
            href={t.hero.cvFile}
            download
            className="btn-secondary"
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: 8,
              background: "transparent",
              border: "1px solid rgba(124,58,237,0.4)",
              color: "#a78bfa",
              padding: "14px 32px",
              borderRadius: 50,
              fontSize: 14,
              fontFamily: "monospace",
              letterSpacing: "0.1em",
              cursor: "pointer",
              textDecoration: "none",
              transition: "all 0.3s ease",
            }}
          >
            <span>⤓</span> {t.hero.downloadCV}
          </a>
        </div>

        <div
          style={{
            position: "absolute",
            bottom: -80,
            left: "50%",
            transform: "translateX(-50%)",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            gap: 6,
            opacity: 0.5,
          }}
        >
          <div
            style={{
              width: 1,
              height: 50,
              background: "linear-gradient(to bottom, transparent, #7c3aed)",
              animation: "scrollAnim 2s ease infinite",
            }}
          />
        </div>
      </div>

      <style>{`
        @keyframes blinkCaret {
          0%, 100% { border-color: transparent; }
          50% { border-color: #a78bfa; }
        }

        @keyframes scrollAnim {
          0% { opacity: 0; transform: scaleY(0); transform-origin: top; }
          50% { opacity: 1; }
          100% { opacity: 0; transform: scaleY(1); transform-origin: top; }
        }

        .btn-primary:hover {
          transform: translateY(-2px) !important;
          box-shadow: 0 8px 30px rgba(124,58,237,0.6) !important;
        }

        .btn-secondary:hover {
          background: rgba(124,58,237,0.1) !important;
          border-color: rgba(124,58,237,0.6) !important;
          transform: translateY(-2px) !important;
        }
      `}</style>
    </section>
  );
}