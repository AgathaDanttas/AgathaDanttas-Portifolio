import type { Translation } from "../../types/translation";
import Reveal from "./Reveal";

type ContactProps = {
  t: Translation;
};

export default function Contact({ t }: ContactProps) {
  const socials = [
    { label: "GitHub", icon: "GH", href: "https://github.com/AgathaDanttas" },
    { label: "LinkedIn", icon: "in", href: "https://www.linkedin.com/in/agatha-danttas/" },
  ];

  return (
    <section id="contact" style={{ padding: "120px 5% 80px", position: "relative" }}>
      <div
        style={{
          maxWidth: 700,
          margin: "0 auto",
          textAlign: "center",
          position: "relative",
          zIndex: 1,
        }}
      >
        <Reveal>
          <p
            style={{
              fontFamily: "monospace",
              color: "#7c3aed",
              fontSize: 12,
              letterSpacing: "0.3em",
              marginBottom: 16,
              textTransform: "uppercase",
            }}
          >
            {t.contact.label}
          </p>

          <h2
            style={{
              fontSize: "clamp(2rem, 5vw, 3.5rem)",
              fontWeight: 700,
              color: "#f1f5f9",
              lineHeight: 1.2,
              marginBottom: 20,
            }}
          >
            {t.contact.heading}
          </h2>

          <p
            style={{
              color: "#64748b",
              fontSize: 16,
              lineHeight: 1.7,
              marginBottom: 48,
            }}
          >
            {t.contact.sub}
          </p>
        </Reveal>

        <Reveal delay={0.1}>
          <a
            href="mailto:workdantas@gmail.com"
            className="email-btn"
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: 10,
              background: "linear-gradient(135deg, #7c3aed, #5b21b6)",
              color: "white",
              padding: "16px 40px",
              borderRadius: 50,
              fontSize: 15,
              fontFamily: "monospace",
              letterSpacing: "0.1em",
              textDecoration: "none",
              boxShadow: "0 4px 20px rgba(124,58,237,0.4)",
              transition: "all 0.3s ease",
              marginBottom: 48,
            }}
          >
            <span>✉</span> {t.contact.email}
          </a>
        </Reveal>

        <Reveal delay={0.2}>
          <p
            style={{
              color: "#64748b",
              fontFamily: "monospace",
              fontSize: 12,
              letterSpacing: "0.15em",
              marginBottom: 24,
            }}
          >
            {t.contact.or}
          </p>

          <div style={{ display: "flex", gap: 16, justifyContent: "center", flexWrap: "wrap" }}>
            {socials.map((social, index) => (
              <a
                key={index}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className="social-btn"
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: 8,
                  background: "rgba(124,58,237,0.07)",
                  border: "1px solid rgba(124,58,237,0.2)",
                  borderRadius: 50,
                  padding: "10px 20px",
                  color: "#94a3b8",
                  fontSize: 13,
                  fontFamily: "monospace",
                  textDecoration: "none",
                  transition: "all 0.25s ease",
                }}
              >
                <span style={{ fontSize: 14 }}>{social.icon}</span>
                {social.label}
              </a>
            ))}
          </div>
        </Reveal>
      </div>

      <div
        style={{
          marginTop: 100,
          borderTop: "1px solid rgba(124,58,237,0.1)",
          paddingTop: 32,
          textAlign: "center",
        }}
      >
        <p
          style={{
            color: "#374151",
            fontFamily: "monospace",
            fontSize: 12,
            letterSpacing: "0.1em",
          }}
        >
          © {new Date().getFullYear()} <span style={{ color: "#7c3aed" }}>Agatha Dantas</span>.
          Crafted with ✦ and ☕
        </p>
      </div>

      <style>{`
        .email-btn:hover {
          transform: translateY(-3px) !important;
          box-shadow: 0 10px 40px rgba(124,58,237,0.6) !important;
        }

        .social-btn:hover {
          background: rgba(124,58,237,0.18) !important;
          border-color: rgba(124,58,237,0.4) !important;
          color: #c4b5fd !important;
          transform: translateY(-2px);
        }
      `}</style>
    </section>
  );
}