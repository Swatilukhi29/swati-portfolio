import { motion } from "framer-motion";
import { Mail, Linkedin, Github, MapPin, ArrowUpRight } from "lucide-react";
import Section from "./Section";
import { profile } from "../data/portfolioData";

export default function Contact() {
  const cards = [
    {
      icon: Mail,
      label: "Email",
      value: profile.email,
      href: `mailto:${profile.email}`,
    },
    {
      icon: Github,
      label: "GitHub",
      value: "github.com/Swatilukhi29",
      href: profile.github,
    },
    {
      icon: Linkedin,
      label: "LinkedIn",
      value: "in/swati-lukhi",
      href: profile.linkedin,
    },
    {
      icon: MapPin,
      label: "Location",
      value: profile.location,
      href: null,
    },
  ];

  return (
    <Section
      id="contact"
      eyebrow="06 · Contact"
      title="Let's connect"
      subtitle="Open to data analytics, AI, and full-stack opportunities."
    >
      <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
        {cards.map((c, i) => {
          const Inner = (
            <motion.div
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.45, delay: i * 0.07 }}
              className="card hover-lift group flex h-full flex-col rounded-2xl p-5"
            >
              <span className="grid h-11 w-11 place-items-center rounded-xl bg-brand/10 text-brand">
                <c.icon size={19} />
              </span>
              <div className="mt-4 text-sm font-semibold uppercase tracking-wide text-muted dark:text-muted-d">
                {c.label}
              </div>
              <div className="mt-1 flex items-center gap-1 break-all text-base font-medium text-ink dark:text-ink-d">
                {c.value}
                {c.href && (
                  <ArrowUpRight
                    size={14}
                    className="flex-none text-muted transition group-hover:text-brand dark:text-muted-d"
                  />
                )}
              </div>
            </motion.div>
          );
          return c.href ? (
            <a key={c.label} href={c.href} target="_blank" rel="noreferrer" className="block h-full">
              {Inner}
            </a>
          ) : (
            <div key={c.label} className="h-full">{Inner}</div>
          );
        })}
      </div>

      {/* CTA strip */}
      {/* <motion.div
        initial={{ opacity: 0, y: 18 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="mt-6 flex flex-col items-center justify-between gap-4 rounded-2xl bg-gradient-to-r from-brand to-brand2 p-6 text-center sm:flex-row sm:text-left"
      >
        <div>
          <div className="font-display text-lg font-semibold text-white">
            Looking for a data or AI analyst?
          </div>
          <div className="text-sm text-white/80">
            I'd love to hear about your team and what you're building.
          </div>
        </div>
        <a
          href={`mailto:${profile.email}`}
          className="inline-flex flex-none items-center gap-2 rounded-xl bg-white px-5 py-3 text-sm font-semibold text-brand shadow-soft transition hover:shadow-lift"
        >
          <Mail size={16} /> Email Me
        </a>
      </motion.div> */}
    </Section>
  );
}
