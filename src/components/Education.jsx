import { motion } from "framer-motion";
import { GraduationCap, MapPin, Award } from "lucide-react";
import Section from "./Section";
import { education } from "../data/portfolioData";

export default function Education() {
  const items = education.filter((e) => e.visible);
  if (items.length === 0) return null;

  return (
    <Section id="education" eyebrow="05 · Education" title="Academic background">
      <div className="grid gap-5 sm:grid-cols-2">
        {items.map((ed, i) => (
          <motion.div
            key={ed.degree}
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.45, delay: i * 0.08 }}
            className="card hover-lift group relative overflow-hidden rounded-2xl p-6"
          >
            <div className="pointer-events-none absolute -right-8 -top-8 h-28 w-28 rounded-full bg-brand/5 blur-2xl" />

            <span className="grid h-11 w-11 place-items-center rounded-xl bg-brand/10 text-brand">
              <GraduationCap size={20} />
            </span>

            <div className="mt-4 text-xs font-semibold text-brand">
              {ed.start} - {ed.end}
            </div>
            <h3 className="mt-1 font-display text-xl font-semibold leading-snug text-ink dark:text-ink-d">
              {ed.degree}
            </h3>
            <div className="mt-1 text-base font-medium text-ink2 dark:text-ink2-d">{ed.school}</div>

            <div className="mt-3 flex flex-wrap items-center gap-4 text-xs text-muted dark:text-muted-d">
              <span className="inline-flex items-center gap-1">
                <MapPin size={12} /> {ed.location}
              </span>
              <span className="inline-flex items-center gap-1 font-medium text-teal">
                <Award size={12} /> GPA {ed.gpa}
              </span>
            </div>
          </motion.div>
        ))}
      </div>
    </Section>
  );
}
