import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import { ExternalLink, Github, FileText, Star, Lock } from "lucide-react";
import ProjectCaseModal from "./ProjectCaseModal";
import upaMockup from "../../assets/sim-upa-mockup.png";
import type { ProjectItem, ProjectKey, Translation } from "../../types/translation";
import { externalLinkProps } from "../../lib/links";

type ProjectsProps = { t: Translation };

const categoryColor: Record<string, string> = {
  "Design System": "bg-pink-500/10 text-pink-400 border-pink-500/20",
  SaaS: "bg-blue-500/10 text-blue-400 border-blue-500/20",
  HealthTech: "bg-emerald-500/10 text-emerald-400 border-emerald-500/20",
  "Landing Page": "bg-amber-500/10 text-amber-400 border-amber-500/20",
  ERP: "bg-violet-500/10 text-violet-400 border-violet-500/20",
};


type ProjectMeta = {
  stack: string[];
  image: string;
  live?: string;
  code?: string;
  category: string;
  wip?: boolean;
  inProduction?: boolean;
  done?: boolean;
};

const projectMeta: Record<ProjectKey, ProjectMeta> = {
  "refakt-erp": {
    stack: ["Next.js", "TypeScript", "Node.js", "Prisma", "PostgreSQL"],
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&q=80",
    category: "ERP",
    inProduction: true,
  },
  stox: {
    stack: ["React", "TypeScript", "Tailwind", "Framer Motion", "MongoDB"],
    image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=800&q=80",
    live: "https://gatita.dev.br/stox/",
    code: "https://github.com/AgathaDanttas/Stox.git",
    category: "SaaS",
    done: true,
  },
  "sim-upa": {
    stack: ["React", "Node.js", "PostgreSQL", "Google Maps API", "WebSockets"],
    image: upaMockup,
    live: "/sim-upa",
    code: "https://github.com/AgathaDanttas/SIM-UPA",
    category: "HealthTech",
    wip: true,
  },
};

export type Project = ProjectItem & ProjectMeta;

function ProjectCard({
  project,
  index,
  inView,
  onCaseClick,
  t,
  featured = false,
}: {
  project: Project;
  index: number;
  inView: boolean;
  onCaseClick: (p: Project) => void;
  t: Translation;
  featured?: boolean;
}) {
  return (
    <motion.div
      key={project.title}
      initial={{ opacity: 0, y: 30 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ delay: index * 0.1, duration: 0.5 }}
      className="group rounded-2xl bg-white/3 border border-white/8 hover:border-purple-500/40 overflow-hidden transition-all duration-300 hover:shadow-[0_0_30px_rgba(139,92,246,0.1)] flex flex-col"
    >
      <div className="relative h-44 overflow-hidden">
        <img
          src={project.image}
          alt={project.title}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#050508] via-transparent to-transparent" />
        {featured && (
          <div className="absolute top-3 right-3 flex items-center gap-1 px-2 py-1 rounded-full bg-black/60 backdrop-blur-sm border border-white/10 text-yellow-400 text-[10px] font-semibold">
            <Star size={10} className="fill-yellow-400" />
            {t.projects.featuredBadge}
          </div>
        )}
        <span
          className={`absolute top-3 left-3 px-2 py-1 text-[10px] font-mono font-bold rounded-full border ${categoryColor[project.category] ?? categoryColor["SaaS"]
            }`}
        >
          {project.category}
        </span>
      </div>

      <div className="p-6 flex flex-col flex-1">
        <h3 className="text-lg font-bold text-white mb-2">{project.title}</h3>
        <p className="text-white/50 text-sm leading-relaxed mb-3">{project.desc}</p>
        <p className="text-white/30 text-xs mb-4 italic">"{project.problem}"</p>

        <div className="flex flex-wrap gap-2 mb-5 mt-auto">
          {project.stack.map((tech) => (
            <span
              key={tech}
              className="px-2 py-1 text-xs font-mono text-purple-300 bg-purple-900/20 border border-purple-500/20 rounded"
            >
              {tech}
            </span>
          ))}
        </div>

        {(project.wip || project.inProduction || project.done) && (
          <div className="mb-4">
            {project.wip && (
              <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-amber-500/15 border border-amber-400/25 text-amber-300 text-[10px] font-semibold tracking-wide">
                <span className="w-1.5 h-1.5 rounded-full bg-amber-400 animate-pulse" />
                {t.projects.inProgress}
              </div>
            )}
            {project.inProduction && (
              <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-sky-500/15 border border-sky-400/25 text-sky-300 text-[10px] font-semibold tracking-wide">
                <span className="w-1.5 h-1.5 rounded-full bg-sky-400 animate-pulse" />
                {t.projects.inProduction}
              </div>
            )}
            {project.done && (
              <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-emerald-500/15 border border-emerald-400/25 text-emerald-300 text-[10px] font-semibold tracking-wide">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
                {t.projects.done}
              </div>
            )}
          </div>
        )}

        <div className="flex gap-4 pt-4 border-t border-white/5">
          {!project.live && !project.code && (
            <button
              onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}
              className="flex items-center gap-1.5 text-xs text-white/60 hover:text-purple-300 transition-colors"
            >
              <Lock size={13} /> {t.projects.onRequest}
            </button>
          )}
          {project.live && (
            <a
              href={project.live}
              {...externalLinkProps(project.live)}
              className="flex items-center gap-1.5 text-xs text-white/60 hover:text-purple-300 transition-colors"
            >
              <ExternalLink size={13} /> {t.projects.viewProject}
            </a>
          )}
          {project.code && (
            <a
              href={project.code}
              {...externalLinkProps(project.code)}
              className="flex items-center gap-1.5 text-xs text-white/60 hover:text-purple-300 transition-colors"
            >
              <Github size={13} /> {t.projects.viewCode}
            </a>
          )}
          <button
            onClick={() => onCaseClick(project)}
            className="flex items-center gap-1.5 text-xs text-white/60 hover:text-purple-300 transition-colors ml-auto"
          >
            <FileText size={13} /> {t.projects.caseButton}
          </button>
        </div>
      </div>
    </motion.div>
  );
}

export default function Projects({ t }: ProjectsProps) {
  const ref = useRef<HTMLElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const projects: Project[] = t.projects.items.map((item) => ({
    ...item,
    ...projectMeta[item.key],
  }));

  return (
    <section id="projects" ref={ref} className="py-28 px-6" style={{ position: "relative" }}>
      <div className="max-w-6xl mx-auto">

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-14"
        >
          <p className="text-purple-400 text-xs font-mono tracking-[0.3em] uppercase mb-3">
            {t.projects.label}
          </p>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold bg-gradient-to-r from-white to-white/70 bg-clip-text text-transparent">
            {t.projects.heading}
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6">
          {projects.map((project, i) => (
            <ProjectCard
              key={project.key}
              project={project}
              index={i}
              inView={inView}
              onCaseClick={setSelectedProject}
              t={t}
              featured
            />
          ))}
        </div>
      </div>

      <ProjectCaseModal
        project={selectedProject}
        t={t}
        onClose={() => setSelectedProject(null)}
      />
    </section>
  );
}
