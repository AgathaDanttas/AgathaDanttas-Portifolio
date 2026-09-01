import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Folder, Puzzle, Tag, Smartphone, GitBranch, Eye } from "lucide-react";
import type { Translation } from "../../types/translation";

const itemIcons = [Folder, Puzzle, Tag, Smartphone, GitBranch, Eye];

type ExperienceProps = { t: Translation };

export default function Experience({ t }: ExperienceProps) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  const items = t.behindCode.items.map((label, i) => ({ label, icon: itemIcons[i] }));

  return (
    <section id="experience" ref={ref} style={{ padding: "120px 5%", position: "relative" }}>
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="text-purple-400 text-xs font-mono tracking-[0.3em] uppercase mb-3">{t.behindCode.label}</p>
          <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-white to-white/70 bg-clip-text text-transparent">
            {t.behindCode.heading}
          </h2>
        </motion.div>

        <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
          {items.map(({ icon: Icon, label }, i) => (
            <motion.div
              key={label}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={inView ? { opacity: 1, scale: 1 } : {}}
              transition={{ delay: i * 0.08, duration: 0.5 }}
              className="flex flex-col md:flex-row items-center justify-center md:justify-start text-center md:text-left gap-3 p-4 rounded-xl bg-white/3 border border-white/8 hover:border-purple-500/30 hover:bg-purple-900/10 transition-all duration-300 cursor-default"
            >
              <Icon size={16} className="text-purple-400 shrink-0" />
              <span className="text-sm text-white/65">{label}</span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
