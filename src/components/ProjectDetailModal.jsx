import { useEffect } from "react";
import { AnimatePresence, motion } from "framer-motion";
import TagPill from "./TagPill";
import ProjectMedia from "./ProjectMedia";

function ProjectDetailModal({ project, onClose }) {
  useEffect(() => {
    if (!project) {
      return undefined;
    }

    const originalOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    const onKeyDown = (event) => {
      if (event.key === "Escape") {
        onClose();
      }
    };

    window.addEventListener("keydown", onKeyDown);
    return () => {
      window.removeEventListener("keydown", onKeyDown);
      document.body.style.overflow = originalOverflow;
    };
  }, [project, onClose]);

  return (
    <AnimatePresence>
      {project ? (
        <motion.div
          className="fixed inset-0 z-50 flex items-center justify-center bg-slate-950/80 p-4 backdrop-blur-sm"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onMouseDown={(event) => {
            if (event.target === event.currentTarget) {
              onClose();
            }
          }}
        >
          <motion.div
            className="glass-panel relative max-h-[92vh] w-full max-w-6xl overflow-hidden rounded-3xl border border-cyan-300/30 shadow-glow"
            initial={{ y: 20, scale: 0.985, opacity: 0 }}
            animate={{ y: 0, scale: 1, opacity: 1 }}
            exit={{ y: 18, scale: 0.99, opacity: 0 }}
            transition={{ duration: 0.25, ease: "easeOut" }}
          >
            <button
              type="button"
              onClick={onClose}
              className="absolute right-5 top-5 z-10 rounded-full border border-cyan-300/45 bg-slate-900/90 px-3 py-1 text-xs uppercase tracking-[0.14em] text-cyan-100 transition hover:border-cyan-200"
            >
              Close
            </button>

            <div className="max-h-[92vh] overflow-y-auto p-6 sm:p-8">
              <div className="mb-5 border-b border-slate-700/70 pb-4">
                <p className="text-xs uppercase tracking-[0.2em] text-cyan-300">
                  Project Breakdown
                </p>
                <h3 className="mt-2 text-2xl font-semibold text-slate-100 sm:text-3xl">
                  {project.title}
                </h3>
              </div>

              <div className="grid gap-7 lg:grid-cols-[0.95fr_1.05fr]">
                <div className="space-y-5">
                  <p className="text-sm leading-relaxed text-slate-200 sm:text-base">
                    {project.description}
                  </p>
                  <p className="text-sm leading-relaxed text-slate-300 sm:text-base">
                    {project.breakdown}
                  </p>
                  <div className="flex flex-wrap gap-2 pt-2">
                    {project.tags.map((tag) => (
                      <TagPill key={`${project.title}-${tag}`} label={tag} />
                    ))}
                  </div>
                </div>

                <ProjectMedia project={project} />
              </div>
            </div>
          </motion.div>
        </motion.div>
      ) : null}
    </AnimatePresence>
  );
}

export default ProjectDetailModal;
