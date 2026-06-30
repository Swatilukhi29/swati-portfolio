import { motion, AnimatePresence } from "framer-motion";
import { useEffect } from "react";
import {
  X, Github, ExternalLink, Target, Workflow, Sparkles, TrendingUp, Layers,
} from "lucide-react";
import ProjectVisual from "./ProjectVisual";

function Block({ icon: Icon, label, children }) {
  return (
    <div>
      <div className="mb-2 flex items-center gap-2 text-xs font-semibold uppercase tracking-wide text-brand">
        <Icon size={14} /> {label}
      </div>
      {children}
    </div>
  );
}

export default function ProjectModal({ project, onClose }) {
  // Close on Escape
  useEffect(() => {
    if (!project) return;
    const onKey = (e) => e.key === "Escape" && onClose();
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [project, onClose]);

  return (
    <AnimatePresence>
      {project && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-[60] grid place-items-center bg-ink/40 p-4 backdrop-blur-sm dark:bg-black/60"
          onClick={onClose}
        >
          <motion.div
            initial={{ opacity: 0, y: 24, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 16, scale: 0.98 }}
            transition={{ duration: 0.28, ease: "easeOut" }}
            onClick={(e) => e.stopPropagation()}
            className="relative max-h-[88vh] w-full max-w-2xl overflow-y-auto rounded-2xl border border-line bg-surface p-6 shadow-lift sm:p-8 dark:border-line-d dark:bg-surface-d"
          >
            <button
              onClick={onClose}
              aria-label="Close"
              className="absolute right-4 top-4 grid h-9 w-9 place-items-center rounded-lg border border-line text-ink2 transition hover:border-brand/40 hover:text-ink dark:text-ink-d dark:text-ink2-d dark:border-line-d"
            >
              <X size={18} />
            </button>

            <div className="mb-1 text-xs font-semibold text-muted dark:text-muted-d">{project.dates}</div>
            <h3 className="pr-10 font-display text-2xl font-bold leading-snug tracking-tight text-ink dark:text-ink-d">
              {project.title}
            </h3>

            <div className="my-5">
              <ProjectVisual type={project.visual} />
            </div>

            <div className="space-y-6">
              <Block icon={Sparkles} label="Overview">
                <p className="text-sm leading-relaxed text-ink2 dark:text-ink2-d">
                  {project.fullDescription}
                </p>
              </Block>

              <Block icon={Target} label="Problem">
                <p className="text-sm leading-relaxed text-ink2 dark:text-ink2-d">{project.problem}</p>
              </Block>

              <Block icon={Workflow} label="Solution">
                <p className="text-sm leading-relaxed text-ink2 dark:text-ink2-d">
                  {project.methodology}
                </p>
              </Block>

              <Block icon={Layers} label="Tech Stack">
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((t) => (
                    <span
                      key={t}
                      className="rounded-lg border border-line bg-canvas px-2.5 py-1 text-xs font-medium text-ink2 dark:text-ink2-d dark:border-line-d dark:bg-surface-d"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </Block>

              {project.features?.length > 0 && (
                <Block icon={Sparkles} label="Key Features">
                  <ul className="grid gap-2 sm:grid-cols-2">
                    {project.features.map((f) => (
                      <li key={f} className="flex gap-2 text-sm text-ink2 dark:text-ink2-d">
                        <span className="mt-2 h-1 w-1 flex-none rounded-full bg-brand" />
                        {f}
                      </li>
                    ))}
                  </ul>
                </Block>
              )}

              {project.results?.length > 0 && (
                <Block icon={TrendingUp} label="Results">
                  <ul className="space-y-2">
                    {project.results.map((r) => (
                      <li key={r} className="flex gap-2 text-sm">
                        <TrendingUp size={14} className="mt-0.5 flex-none text-teal" />
                        <span className="text-ink2 dark:text-ink2-d">{r}</span>
                      </li>
                    ))}
                  </ul>
                </Block>
              )}

              {project.impact && (
                <div className="rounded-xl border border-brand/20 bg-brand/5 p-4">
                  <div className="mb-1 text-xs font-semibold uppercase tracking-wide text-brand">
                    Business Impact
                  </div>
                  <p className="text-sm leading-relaxed text-ink dark:text-ink-d">{project.impact}</p>
                </div>
              )}

              <div className="flex flex-wrap gap-3 pt-1">
                {project.githubLink && (
                  <a
                    href={project.githubLink}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-2 rounded-lg border border-line px-4 py-2 text-sm font-semibold text-ink transition hover:border-brand/40 dark:text-ink-d dark:border-line-d"
                  >
                    <Github size={16} /> View Code
                  </a>
                )}
                {project.demoLink && (
                  <a
                    href={project.demoLink}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-2 rounded-lg bg-brand px-4 py-2 text-sm font-semibold text-white shadow-glow transition hover:brightness-105"
                  >
                    <ExternalLink size={16} /> Live Demo
                  </a>
                )}
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
