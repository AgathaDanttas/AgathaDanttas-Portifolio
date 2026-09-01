import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { BookOpen } from "lucide-react";
import type { Translation } from "../../types/translation";

const topicEmojis = ["☕", "🏗️", "🔗", "📐", "📊"];

type StudyingProps = { t: Translation };

export default function StudyingSection({ t }: StudyingProps) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  const topics = t.studying.topics.map((label, i) => ({ label, emoji: topicEmojis[i] }));

  return (
    <section ref={ref} style={{ padding: "120px 5%", position: "relative" }}>
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="flex flex-col sm:flex-row items-start sm:items-center gap-8"
        >
          <div className="shrink-0">
            <div className="flex items-center gap-2 mb-2">
              <BookOpen size={16} className="text-purple-400" />
              <p className="text-purple-400 text-xs font-mono tracking-[0.3em] uppercase">{t.studying.label}</p>
            </div>
            <h2 className="text-2xl md:text-3xl font-bold text-white whitespace-nowrap">
              {t.studying.heading}
            </h2>
          </div>

          <div className="flex flex-wrap gap-3">
            {topics.map(({ emoji, label }, i) => (
              <motion.div
                key={label}
                initial={{ opacity: 0, x: 20 }}
                animate={inView ? { opacity: 1, x: 0 } : {}}
                transition={{ delay: 0.2 + i * 0.08 }}
                className="flex items-center gap-2 px-4 py-2 rounded-full bg-purple-900/20 border border-purple-500/25 hover:border-purple-500/50 hover:bg-purple-900/30 transition-all cursor-default"
              >
                <span>{emoji}</span>
                <span className="text-sm text-white/70">{label}</span>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
