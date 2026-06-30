import { motion } from "framer-motion";
import { Briefcase, MapPin, Calendar, Building2 } from "lucide-react";
import Section from "./Section";
import { experience } from "../data/portfolioData";

// Card body (shared by both sides of the alternating timeline)
function ExperienceCard({ job }) {
  return (
    <div className="glass hover-lift rounded-2xl p-5 sm:p-6">
      {/* Header: role + current badge */}
      <div className="flex flex-wrap items-start justify-between gap-3">
        <div className="flex items-start gap-3">
          <span className="grid h-11 w-11 flex-none place-items-center rounded-xl bg-brand/10 text-brand">
            <Briefcase size={19} />
          </span>
          <div>
            <h3 className="font-display text-xl font-semibold leading-tight text-ink dark:text-ink-d">
              {job.role}
            </h3>
            <div className="mt-1 flex items-center gap-1.5 text-base font-medium text-ink2 dark:text-ink2-d">
              <Building2 size={13} className="text-muted dark:text-muted-d" />
              {job.company}
            </div>
          </div>
        </div>

        {job.end === "Present" && (
          <span className="inline-flex items-center gap-1 rounded-full bg-teal/10 px-2.5 py-1 text-[11px] font-semibold text-teal">
            <span className="h-1.5 w-1.5 rounded-full bg-teal animate-pulse" />
            Current
          </span>
        )}
      </div>

      {/* Meta badges: dates + location + (optional) project */}
      <div className="mt-3 flex flex-wrap items-center gap-2">
        <span className="inline-flex items-center gap-1.5 rounded-lg border border-line bg-canvas px-3 py-1.5 text-sm font-medium text-ink2 dark:border-line-d dark:bg-surface-d dark:text-ink2-d">
          <Calendar size={12} className="text-brand" />
          {job.start} - {job.end}
        </span>
        <span className="inline-flex items-center gap-1.5 rounded-lg border border-line bg-canvas px-3 py-1.5 text-sm font-medium text-ink2 dark:border-line-d dark:bg-surface-d dark:text-ink2-d">
          <MapPin size={12} className="text-brand2" />
          {job.location}
        </span>
        {job.project && (
          <span className="inline-flex items-center rounded-lg border border-brand/20 bg-brand/5 px-2.5 py-1 text-xs font-medium text-brand">
            {job.project}
          </span>
        )}
      </div>

      {/* Bullets */}
      <ul className="mt-4 space-y-2.5">
        {job.bullets.map((b, bi) => (
          <li
            key={bi}
            className="flex gap-2.5 text-base leading-relaxed text-ink2 dark:text-ink2-d"
          >
            <span className="mt-[7px] h-1.5 w-1.5 flex-none rounded-full bg-gradient-to-br from-brand to-brand2" />
            {b}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default function Experience() {
  const items = experience.filter((e) => e.visible);
  if (items.length === 0) return null;

  return (
    <Section
      id="experience"
      eyebrow="02 · Experience"
      title="Where I've worked"
      subtitle="Roles across AI, data, and software."
    >
      <div className="relative mx-auto max-w-6xl">
        {/* Alternating vertical timeline spine */}
        <div className="absolute left-4 top-2 bottom-2 w-0.5 rounded bg-gradient-to-b from-brand via-brand2/50 to-transparent sm:left-1/2 sm:-translate-x-1/2" />

        <div className="space-y-10">
          {items.map((job, i) => {
            const left = i % 2 === 0;
            return (
              <motion.div
                key={`${job.company}-${job.start}`}
                initial={{ opacity: 0, y: 22 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.5 }}
                className={`relative pl-12 sm:w-1/2 sm:pl-0 ${
                  left ? "sm:pr-10" : "sm:ml-auto sm:pl-10"
                }`}
              >
                {/* Connector line from card to the central spine (desktop only) */}
                <span
                  className={`absolute top-8 hidden h-0.5 w-10 bg-gradient-to-r from-brand/50 to-brand/20 sm:block ${
                    left ? "right-0 bg-gradient-to-l" : "left-0"
                  }`}
                />
                {/* Timeline node, sitting on the spine */}
                <span
                  className={`absolute left-2.5 top-[26px] z-10 h-4 w-4 rounded-full bg-brand ring-4 ring-brand/20 dark:ring-brand/30 sm:left-auto ${
                    left ? "sm:-right-2" : "sm:-left-2"
                  }`}
                />
                <ExperienceCard job={job} />
              </motion.div>
            );
          })}
        </div>
      </div>
    </Section>
  );
}
