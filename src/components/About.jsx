import { motion } from "framer-motion";
import { Check } from "lucide-react";
import Section from "./Section";
import { about } from "../data/portfolioData";

export default function About() {
  if (!about.visible) return null;

  return (
    <Section id="about" eyebrow="01 · About" title="Turning data into decisions">
      <div className="grid gap-8 lg:grid-cols-5">
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.5 }}
          className="lg:col-span-3"
        >
          <p className="text-xl leading-relaxed text-ink dark:text-ink-d">{about.summary}</p>

          <ul className="mt-6 space-y-3">
            {about.highlights.map((h, i) => (
              <motion.li
                key={i}
                initial={{ opacity: 0, x: -10 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.07 }}
                className="flex gap-3 text-base text-ink2 dark:text-ink2-d"
              >
                <span className="mt-0.5 grid h-5 w-5 flex-none place-items-center rounded-md bg-brand/10 text-brand">
                  <Check size={13} />
                </span>
                <span className="leading-relaxed">{h}</span>
              </motion.li>
            ))}
          </ul>
        </motion.div>

        <div className="grid grid-cols-2 gap-4 self-start lg:col-span-2">
          {about.stats.map((s, i) => (
            <motion.div
              key={s.label}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.07 }}
              className="card hover-lift rounded-2xl p-5"
            >
              <div className="font-display text-3xl font-bold text-gradient sm:text-4xl">
                {s.value}
              </div>
              <div className="mt-1 text-sm font-medium uppercase tracking-wide text-muted dark:text-muted-d">
                {s.label}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </Section>
  );
}
