import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Lightbulb, Layout, Cpu, RefreshCw } from "lucide-react";
import type { Translation } from "../../types/translation";

const cardIcons = [Lightbulb, Layout, Cpu, RefreshCw];

type ProcessProps = { t: Translation };

export default function Process({ t }: ProcessProps) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  const cards = t.mindset.cards.map((card, i) => ({ ...card, icon: cardIcons[i] }));

  return (
    <section id="process" ref={ref} style={{ padding: "120px 5%", position: "relative" }}>
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="text-purple-400 text-xs font-mono tracking-[0.3em] uppercase mb-3">{t.mindset.label}</p>
          <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-white to-white/70 bg-clip-text text-transparent">
            {t.mindset.heading}
          </h2>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {cards.map(({ icon: Icon, title, desc }, i) => (
            <motion.div
              key={title}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: i * 0.1, duration: 0.6 }}
              className="p-6 rounded-2xl bg-white/3 border border-white/8 hover:border-purple-500/40 transition-all duration-300 hover:shadow-[0_0_25px_rgba(139,92,246,0.08)] group"
            >
              <div className="w-9 h-9 rounded-lg bg-purple-600/10 border border-purple-500/20 flex items-center justify-center mb-5 group-hover:bg-purple-600/20 transition-colors">
                <Icon size={16} className="text-purple-400" />
              </div>
              <h3 className="font-semibold text-white text-sm mb-3">{title}</h3>
              <p className="text-white/45 text-sm leading-relaxed">{desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
