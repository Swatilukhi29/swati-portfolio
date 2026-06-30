import { motion } from "framer-motion";
import {
  BarChart3, PieChart, Database, Cloud, Code2, BrainCircuit,
} from "lucide-react";
import Section from "./Section";
import { skillCategories } from "../data/portfolioData";

const ICONS = { BarChart3, PieChart, Database, Cloud, Code2, BrainCircuit };

export default function Skills() {
  const categories = skillCategories
    .filter((c) => c.visible)
    .map((c) => ({ ...c, skills: c.skills.filter((s) => s.visible) }))
    .filter((c) => c.skills.length > 0);

  if (categories.length === 0) return null;

  return (
    <Section
      id="skills"
      eyebrow="03 · Skills"
      title="Technical toolkit"
      subtitle="Grouped by how I use them on the job."
    >
      <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {categories.map((cat, i) => {
          const Icon = ICONS[cat.icon] || Code2;
          return (
            <motion.div
              key={cat.name}
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.45, delay: (i % 3) * 0.07 }}
              className="card hover-lift group rounded-2xl p-6"
            >
              <div className="mb-4 flex items-center gap-3">
                <span className="grid h-10 w-10 place-items-center rounded-xl bg-brand/10 text-brand">
                  <Icon size={18} />
                </span>
                <h3 className="font-display text-xl font-semibold text-ink dark:text-ink-d">{cat.name}</h3>
              </div>

              <div className="flex flex-wrap gap-2">
                {cat.skills.map((s) => (
                  <span
                    key={s.name}
                    className="rounded-lg border border-line bg-canvas px-3 py-1.5 text-sm font-medium text-ink2 transition hover:border-brand/30 hover:text-ink dark:text-ink-d dark:text-ink2-d dark:border-line-d dark:bg-surface-d"
                  >
                    {s.name}
                  </span>
                ))}
              </div>
            </motion.div>
          );
        })}
      </div>
    </Section>
  );
}
