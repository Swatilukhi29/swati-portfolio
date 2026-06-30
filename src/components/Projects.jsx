import { useMemo, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Github, ArrowUpRight, Star } from "lucide-react";
import Section from "./Section";
import ProjectModal from "./ProjectModal";
import ProjectVisual from "./ProjectVisual";
import { projects, projectFilters } from "../data/portfolioData";

export default function Projects() {
  const [filter, setFilter] = useState("all");
  const [active, setActive] = useState(null);

  // Only visible projects ever enter the list - hidden ones never render.
  const visibleProjects = useMemo(() => projects.filter((p) => p.visible), []);

  const availableFilters = useMemo(() => {
    const used = new Set(visibleProjects.map((p) => p.category));
    return projectFilters.filter((f) => f.key === "all" || used.has(f.key));
  }, [visibleProjects]);

  const shown = useMemo(
    () =>
      filter === "all"
        ? visibleProjects
        : visibleProjects.filter((p) => p.category === filter),
    [filter, visibleProjects]
  );

  if (visibleProjects.length === 0) return null;

  return (
    <Section
      id="projects"
      eyebrow="04 · Projects"
      title="Selected work"
      subtitle="Filter by domain, then open any project for the full breakdown."
    >
      {/* Filter tabs */}
      <div className="mb-8 flex flex-wrap gap-2">
        {availableFilters.map((f) => {
          const on = filter === f.key;
          return (
            <button
              key={f.key}
              onClick={() => setFilter(f.key)}
              className={`relative rounded-full px-4 py-2 text-sm font-medium transition ${
                on ? "text-white" : "border border-line bg-surface text-ink2 hover:text-ink"
              } dark:text-ink-d dark:text-ink2-d dark:border-line-d dark:bg-surface-d`}
            >
              {on && (
                <motion.span
                  layoutId="filter-pill"
                  className="absolute inset-0 -z-10 rounded-full bg-brand shadow-glow"
                  transition={{ type: "spring", stiffness: 400, damping: 32 }}
                />
              )}
              {f.label}
            </button>
          );
        })}
      </div>

      {/* Grid */}
      <motion.div layout className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        <AnimatePresence mode="popLayout">
          {shown.map((project) => (
            <motion.article
              key={project.title}
              layout
              initial={{ opacity: 0, scale: 0.96 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.96 }}
              transition={{ duration: 0.32 }}
              className="card hover-lift group flex flex-col overflow-hidden rounded-2xl p-4"
            >
              {/* 3D/isometric visual */}
              <div className="relative">
                <ProjectVisual type={project.visual} />
                {project.featured && (
                  <span className="absolute right-2 top-2 inline-flex items-center gap-1 rounded-full bg-surface/90 px-2 py-1 text-[10px] font-semibold uppercase tracking-wide text-brand shadow-soft dark:bg-surface-d">
                    <Star size={10} /> Featured
                  </span>
                )}
              </div>

              <div className="mt-4 flex flex-1 flex-col">
                <div className="mb-1 text-xs font-semibold uppercase tracking-wide text-muted dark:text-muted-d">
                  {projectFilters.find((f) => f.key === project.category)?.label}
                </div>
                <h3 className="font-display text-xl font-semibold leading-snug text-ink dark:text-ink-d">
                  {project.title}
                </h3>
                <p className="mt-2 flex-1 text-base leading-relaxed text-ink2 dark:text-ink2-d">
                  {project.shortDescription}
                </p>

                {/* Tech tags */}
                <div className="mt-3 flex flex-wrap gap-1.5">
                  {project.technologies.slice(0, 4).map((t) => (
                    <span
                      key={t}
                      className="rounded-md border border-line bg-canvas px-2 py-0.5 text-xs font-medium text-ink2 dark:text-ink2-d dark:border-line-d dark:bg-surface-d"
                    >
                      {t}
                    </span>
                  ))}
                  {project.technologies.length > 4 && (
                    <span className="rounded-md px-1.5 py-0.5 text-[10px] font-medium text-muted dark:text-muted-d">
                      +{project.technologies.length - 4}
                    </span>
                  )}
                </div>

                {/* Actions */}
                <div className="mt-4 flex items-center gap-2">
                  <button
                    onClick={() => setActive(project)}
                    className="inline-flex flex-1 items-center justify-center gap-1.5 rounded-lg bg-brand/10 px-3 py-2.5 text-base font-semibold text-brand transition hover:bg-brand/15"
                  >
                    View Details <ArrowUpRight size={15} />
                  </button>
                  {project.githubLink && (
                    <a
                      href={project.githubLink}
                      target="_blank"
                      rel="noreferrer"
                      aria-label="GitHub repository"
                      className="grid h-9 w-9 flex-none place-items-center rounded-lg border border-line text-ink2 transition hover:border-brand/40 hover:text-ink dark:text-ink-d dark:text-ink2-d dark:border-line-d"
                    >
                      <Github size={16} />
                    </a>
                  )}
                </div>
              </div>
            </motion.article>
          ))}
        </AnimatePresence>
      </motion.div>

      <ProjectModal project={active} onClose={() => setActive(null)} />
    </Section>
  );
}
