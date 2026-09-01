import type { Translation } from "../../types/translation";
import Reveal from "./Reveal";
import { motion } from "framer-motion";
import { Layers, Code2, Globe } from "lucide-react";

type AboutProps = {
  t: Translation;
};

const differentialIcons = [Layers, Code2, Globe];

export default function About({ t }: AboutProps) {
  const differentials = t.about.differentials.map((label, i) => ({
    label,
    icon: differentialIcons[i],
  }));

  const tags = ["TypeScript", "React", "NodeJS", "TailwindCSS", "C#", "Java", "MongoDB", "MySQL", "Kanban", "VS Code", "Figma"];

  return (
    <section id="about" style={{ padding: "120px 5%", position: "relative" }}>
      <div style={{ maxWidth: 1100, margin: "0 auto", position: "relative", zIndex: 1 }}>
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
          </p>

          <h2
            className="text-center md:text-left mx-auto md:mx-0"
            style={{
              fontSize: "clamp(1.8rem, 4vw, 3rem)",
              fontWeight: 700,
              color: "#f1f5f9",
              lineHeight: 1.2,
              marginBottom: 60,
              maxWidth: 600,
            }}
          >
            {t.about.heading}
          </h2>
        </Reveal>

        <div
          className="about-grid"
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gap: 60,
            alignItems: "start",
          }}
        >
          <div className="text-center md:text-left flex flex-col items-center md:items-start">
            {[t.about.p1, t.about.p2, t.about.p3, t.about.p4].map((p, index) => (
              <Reveal key={index} delay={index * 0.1}>
                <p
                  style={{
                    color: "#94a3b8",
                    lineHeight: 1.8,
                    fontSize: 15,
                    marginBottom: 20,
                  }}
                >
                  {p}
                </p>
              </Reveal>
            ))}
          </div>

          <div style={{ minWidth: 0 }}>
            <div className="space-y-3 mb-10 flex flex-col gap-3">
              {differentials.map(({ icon: Icon, label }, i) => (
                <motion.div
                  key={label}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.3 + i * 0.1 }}
                  className="flex flex-col md:flex-row items-center justify-center md:justify-start text-center md:text-left gap-3 px-4 py-3 rounded-lg transition-colors border border-white/10 bg-white/5 hover:border-purple-500/30"
                >
                  <Icon size={16} className="text-purple-400 shrink-0" color="#c084fc" />
                  <span style={{ color: "rgba(255, 255, 255, 0.7)", fontSize: "14px" }}>{label}</span>
                </motion.div>
              ))}
            </div>

            <div className="flex gap-2 mx-auto md:mx-0" style={{ display: "flex", gap: "8px", overflow: "hidden", width: "100%", maxWidth: "100%", position: "relative", WebkitMaskImage: "linear-gradient(to right, transparent, black 10px, black calc(100% - 10px), transparent)" }}>
              <div className="about-marquee" style={{ display: "flex", gap: "8px", flexShrink: 0, paddingRight: "8px" }}>
                {tags.map((tag) => (
                  <span
                    key={tag}
                    style={{
                      padding: "4px 12px",
                      fontSize: "12px",
                      fontFamily: "monospace",
                      color: "#d8b4fe",
                      background: "rgba(88, 28, 135, 0.2)",
                      border: "1px solid rgba(168, 85, 247, 0.2)",
                      borderRadius: "9999px",
                      whiteSpace: "nowrap",
                    }}
                  >
                    {tag}
                  </span>
                ))}
              </div>
              <div aria-hidden="true" className="about-marquee" style={{ display: "flex", gap: "8px", flexShrink: 0, paddingRight: "8px" }}>
                {tags.map((tag) => (
                  <span
                    key={tag + "_dup"}
                    style={{
                      padding: "4px 12px",
                      fontSize: "12px",
                      fontFamily: "monospace",
                      color: "#d8b4fe",
                      background: "rgba(88, 28, 135, 0.2)",
                      border: "1px solid rgba(168, 85, 247, 0.2)",
                      borderRadius: "9999px",
                      whiteSpace: "nowrap",
                    }}
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        .about-marquee {
          animation: scrollAbout 20s linear infinite;
        }

        .about-marquee:hover {
          animation-play-state: paused;
        }

        @keyframes scrollAbout {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-100%);
          }
        }

        @media (max-width: 768px) {
          .about-grid {
            grid-template-columns: 1fr !important;
            gap: 40px !important;
          }
        }
      `}</style>
    </section>
  );
}