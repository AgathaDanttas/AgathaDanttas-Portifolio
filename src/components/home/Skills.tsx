import type { Translation } from "../../types/translation";
import Reveal from "./Reveal";

type SkillsProps = {
  t: Translation;
};

export default function Skills({ t }: SkillsProps) {
  const skillIcons: Record<string, string> = {
    React: "⚛️",
    "Next.js": "▲",
    TypeScript: "TS",
    "Tailwind CSS": "🎨",
    "Framer Motion": "✦",
    Angular: "🅰️",
    "Node.js": "🟢",
    "C#": "🎯",
    Java: "☕",
    Python: "🐍",
    GraphQL: "◈",
    "REST APIs": "🔌",
    PostgreSQL: "🐘",
    MongoDB: "🍃",
    Git: "⎇",
    Docker: "🐳",
    AWS: "☁️",
    Vercel: "△",
    Figma: "🖌️",
    "CI/CD": "⚙️",
  };

  const catColors = ["#7c3aed", "#5b21b6", "#4c1d95"];

  return (
    <section id="skills" style={{ padding: "120px 0", position: "relative", overflow: "hidden" }}>
      <div style={{ maxWidth: 1100, margin: "0 auto", padding: "0 5%", position: "relative", zIndex: 1 }}>
        <Reveal>
          <div className="text-center md:text-left flex flex-col items-center md:items-start">
            <h2
              style={{
                fontSize: "clamp(1.8rem, 4vw, 3rem)",
                fontWeight: 700,
                color: "#f1f5f9",
                marginBottom: 12,
              }}
            >
              {t.skills.heading}
            </h2>

            <p style={{ color: "#64748b", fontFamily: "monospace", marginBottom: 60 }}>
              {t.skills.sub}
            </p>
          </div>
        </Reveal>
      </div>



      <div style={{ maxWidth: 1100, margin: "0 auto", padding: "0 5%", position: "relative", zIndex: 1 }}>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
            gap: 24,
          }}
        >
          {t.skills.categories.map((category, categoryIndex) => (
            <Reveal key={categoryIndex} delay={categoryIndex * 0.1}>
              <div
                style={{
                  background: categoryIndex === 2
                    ? "linear-gradient(145deg, rgba(15,10,25,0.9) 0%, rgba(124,58,237,0.1) 100%)"
                    : "rgba(15,10,25,0.7)",
                  border: `1px solid ${catColors[categoryIndex]}${categoryIndex === 2 ? '50' : '33'}`,
                  borderRadius: 16,
                  padding: categoryIndex === 2 ? 26 : 20,
                  backdropFilter: "blur(10px)",
                  height: categoryIndex === 2 ? "95%" : "fit-content",
                  minHeight: categoryIndex === 2 ? 220 : "auto",
                }}
              >
                <div className="flex items-center justify-center md:justify-start gap-[10px] mb-6">
                  <div
                    style={{
                      width: 6,
                      height: 6,
                      borderRadius: "50%",
                      background: catColors[categoryIndex],
                      boxShadow: `0 0 10px ${catColors[categoryIndex]}`,
                    }}
                  />

                  <h3
                    style={{
                      color: "#e2e8f0",
                      fontFamily: "monospace",
                      fontSize: 14,
                      fontWeight: 600,
                      letterSpacing: "0.1em",
                      margin: 0,
                    }}
                  >
                    {category.cat}
                  </h3>
                </div>

                <div className="flex flex-wrap justify-center md:justify-start gap-[10px]">
                  {category.items.map((skill, skillIndex) => (
                    <div
                      key={skillIndex}
                      className="skill-badge"
                      style={{
                        display: "flex",
                        alignItems: "center",
                        gap: 6,
                        background: "rgba(124,58,237,0.07)",
                        border: "1px solid rgba(124,58,237,0.15)",
                        borderRadius: 10,
                        padding: "6px 12px",
                        fontSize: 12,
                        color: "#94a3b8",
                        fontFamily: "monospace",
                        cursor: "default",
                        transition: "all 0.25s ease",
                      }}
                    >
                      <span style={{ fontSize: 14 }}>{skillIcons[skill] || "◆"}</span>
                      {skill}
                    </div>
                  ))}
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>

      <style>{`
        .skill-badge:hover {
          background: rgba(124,58,237,0.18) !important;
          border-color: rgba(124,58,237,0.4) !important;
          color: #c4b5fd !important;
          transform: translateY(-2px);
        }
      `}</style>
    </section>
  );
}