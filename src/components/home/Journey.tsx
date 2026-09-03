import { AnimatePresence, motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import { Briefcase, GraduationCap, Award, ExternalLink, Image as ImageIcon, ChevronDown } from "lucide-react";
import type { Translation } from "../../types/translation";
import { externalLinkProps } from "../../lib/links";

type JourneyProps = { t: Translation };

const SHOW_CERTIFICATIONS = false;

const certImages: (string | undefined)[] = [undefined, undefined, undefined];

function TimelineCard({
  title,
  subtitle,
  period,
  lines,
  index,
  inView,
  learnMore,
  showLess,
}: {
  title: string;
  subtitle: string;
  period: string;
  lines: string[];
  index: number;
  inView: boolean;
  learnMore: string;
  showLess: string;
}) {
  const [open, setOpen] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ delay: 0.15 + index * 0.1, duration: 0.5 }}
      className="relative pl-8"
    >
      <span className="absolute left-0 top-1.5 w-3 h-3 rounded-full bg-purple-500 shadow-[0_0_12px_rgba(139,92,246,0.8)]" />
      <span className="absolute left-[5px] top-6 bottom-[-28px] w-px bg-purple-500/20" />
      <div className="p-5 rounded-2xl bg-white/3 border border-white/8 hover:border-purple-500/40 transition-all duration-300">
        <div className="flex flex-wrap items-baseline justify-between gap-2 mb-1">
          <h4 className="font-semibold text-white text-sm">{title}</h4>
          <span className="text-[11px] font-mono text-purple-300">{period}</span>
        </div>
        <p className="text-purple-400/80 text-xs font-mono">{subtitle}</p>

        <AnimatePresence initial={false}>
          {open && (
            <motion.ul
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="space-y-1.5 overflow-hidden"
            >
              {lines.map((line, i) => (
                <li
                  key={i}
                  className={`flex items-start gap-2 text-[13px] text-white/55 leading-relaxed ${i === 0 ? "pt-3" : ""}`}
                >
                  <span className="w-1 h-1 rounded-full bg-purple-500/60 mt-2 shrink-0" />
                  {line}
                </li>
              ))}
            </motion.ul>
          )}
        </AnimatePresence>

        <button
          onClick={() => setOpen((prev) => !prev)}
          className="mt-3 inline-flex items-center gap-1.5 text-xs text-purple-300/80 hover:text-purple-300 transition-colors"
        >
          <ChevronDown
            size={13}
            className={`transition-transform duration-300 ${open ? "rotate-180" : ""}`}
          />
          {open ? showLess : learnMore}
        </button>
      </div>
    </motion.div>
  );
}

export default function Journey({ t }: JourneyProps) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="journey" ref={ref} style={{ padding: "120px 5%", position: "relative" }}>
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <p className="text-purple-400 text-xs font-mono tracking-[0.3em] uppercase mb-3">{t.journey.label}</p>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold bg-gradient-to-r from-white to-white/70 bg-clip-text text-transparent">
            {t.journey.heading}
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 md:gap-16">
          <div>
            <div className="flex items-center gap-2.5 mb-8">
              <div className="w-8 h-8 rounded-lg bg-purple-600/10 border border-purple-500/20 flex items-center justify-center">
                <Briefcase size={14} className="text-purple-400" />
              </div>
              <h3 className="text-white font-semibold text-base">{t.journey.workHeading}</h3>
            </div>
            <div className="flex flex-col gap-7">
              {t.journey.work.map((job, i) => (
                <TimelineCard
                  key={job.role + job.company}
                  title={job.role}
                  subtitle={job.company}
                  period={job.period}
                  lines={job.highlights}
                  index={i}
                  inView={inView}
                  learnMore={t.journey.learnMore}
                  showLess={t.journey.showLess}
                />
              ))}
            </div>
          </div>

          <div>
            <div className="flex items-center gap-2.5 mb-8">
              <div className="w-8 h-8 rounded-lg bg-purple-600/10 border border-purple-500/20 flex items-center justify-center">
                <GraduationCap size={14} className="text-purple-400" />
              </div>
              <h3 className="text-white font-semibold text-base">{t.journey.educationHeading}</h3>
            </div>
            <div className="flex flex-col gap-7">
              {t.journey.education.map((edu, i) => (
                <TimelineCard
                  key={edu.degree}
                  title={edu.degree}
                  subtitle={edu.school}
                  period={edu.period}
                  lines={[edu.desc]}
                  index={i}
                  inView={inView}
                  learnMore={t.journey.learnMore}
                  showLess={t.journey.showLess}
                />
              ))}
            </div>
          </div>
        </div>

        {SHOW_CERTIFICATIONS && (
        <div className="mt-20">
          <div className="flex items-center gap-2.5 mb-8">
            <div className="w-8 h-8 rounded-lg bg-purple-600/10 border border-purple-500/20 flex items-center justify-center">
              <Award size={14} className="text-purple-400" />
            </div>
            <h3 className="text-white font-semibold text-base">{t.journey.certificationsHeading}</h3>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {t.journey.certifications.map((cert, i) => (
              <motion.div
                key={cert.title}
                initial={{ opacity: 0, y: 30 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.2 + i * 0.1, duration: 0.5 }}
                className="rounded-2xl bg-white/3 border border-white/8 hover:border-purple-500/40 overflow-hidden transition-all duration-300 flex flex-col"
              >
                <div className="h-36 bg-purple-900/10 border-b border-white/5 flex items-center justify-center">
                  {certImages[i] ? (
                    <img src={certImages[i]} alt={cert.title} className="w-full h-full object-cover" />
                  ) : (
                    <div className="flex flex-col items-center gap-2 text-purple-400/40">
                      <ImageIcon size={28} />
                      <span className="text-[10px] font-mono tracking-widest uppercase">{cert.issuer}</span>
                    </div>
                  )}
                </div>

                <div className="p-5 flex flex-col flex-1">
                  <h4 className="font-semibold text-white text-sm mb-1">{cert.title}</h4>
                  <p className="text-purple-400/80 text-xs font-mono mb-4">
                    {cert.issuer} · {cert.year}
                  </p>
                  {cert.url && (
                    <a
                      href={cert.url}
                      {...externalLinkProps(cert.url)}
                      className="mt-auto inline-flex items-center gap-1.5 text-xs text-white/60 hover:text-purple-300 transition-colors"
                    >
                      <ExternalLink size={13} /> {t.journey.credentialLabel}
                    </a>
                  )}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
        )}
      </div>
    </section>
  );
}
