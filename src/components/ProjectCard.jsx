import { motion } from "framer-motion";
import GlassCard from "./GlassCard";
import TagPill from "./TagPill";

function ProjectCard({ project, onOpen }) {
  return (
    <GlassCard className="group overflow-hidden transition duration-300 hover:-translate-y-1 hover:border-cyan-400/40">
      <div className="h-56 w-full bg-gradient-to-br from-cyan-500/20 via-slate-800 to-blue-500/20 p-4 sm:h-64">
        {project.thumbnail ? (
          <img
            src={project.thumbnail}
            alt={`${project.title} thumbnail`}
            className="h-full w-full rounded-xl border border-slate-600/70 bg-slate-900/60 object-contain"
          />
        ) : (
          <div className="flex h-full items-end rounded-xl border border-dashed border-slate-500/60 p-3 text-xs uppercase tracking-wider text-slate-300">
            {project.title}
          </div>
        )}
      </div>

      <motion.div
        className="h-[2px] w-full origin-left bg-gradient-to-r from-cyan-400/80 via-blue-400/70 to-transparent"
        initial={{ scaleX: 0.15, opacity: 0.5 }}
        whileHover={{ scaleX: 1, opacity: 1 }}
        transition={{ duration: 0.35, ease: "easeOut" }}
      />

      <div className="space-y-4 p-5">
        <h3 className="text-xl font-semibold text-slate-100">{project.title}</h3>
        <p className="text-sm leading-relaxed text-slate-300">{project.summary}</p>

        <div className="flex flex-wrap gap-2">
          {project.tags.map((tag) => (
            <TagPill key={tag} label={tag} />
          ))}
        </div>

        <button
          type="button"
          onClick={() => onOpen(project)}
          className="text-sm font-medium text-accent-400 transition hover:text-accent-300"
        >
          Expand Build Overview
        </button>
      </div>
    </GlassCard>
  );
}

export default ProjectCard;
