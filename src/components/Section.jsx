import { motion } from "framer-motion";

// Consistent section shell: eyebrow + title + scroll-reveal.
// Tighter vertical rhythm for a denser, recruiter-friendly layout.
export default function Section({ id, eyebrow, title, subtitle, children }) {
  return (
    <section id={id} className="relative py-16 sm:py-20 lg:py-24 min-h-screen flex items-center justify-center">
      <div className="container-x">
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.5 }}
          className="mb-12 max-w-3xl"
        >
          {eyebrow && (
            <div className="mb-3 flex items-center gap-2.5 text-sm font-semibold uppercase tracking-[0.16em] text-brand">
              <span className="h-px w-8 bg-brand/50" />
              {eyebrow}
            </div>
          )}
          <h2 className="font-display text-4xl font-bold tracking-tight text-ink sm:text-5xl dark:text-ink-d">
            {title}
          </h2>
          {subtitle && <p className="mt-4 text-lg text-ink2 dark:text-ink2-d">{subtitle}</p>}
        </motion.div>
        {children}
      </div>
    </section>
  );
}
