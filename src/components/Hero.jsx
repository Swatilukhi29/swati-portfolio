import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { ArrowRight, Download, Mail, MapPin } from "lucide-react";
import { profile } from "../data/portfolioData";
import HeroHolographicIllustration from "./HeroHolographicIllustration";

// Rotating role (subtle vertical swap)
function RotatingRole() {
  const [i, setI] = useState(0);
  useEffect(() => {
    const t = setInterval(() => setI((v) => (v + 1) % profile.roles.length), 2600);
    return () => clearInterval(t);
  }, []);
  return (
    <span className="relative inline-block align-bottom">
      <motion.span
        key={i}
        initial={{ y: 14, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.4 }}
        className="text-gradient font-semibold"
      >
        {profile.roles[i]}
      </motion.span>
    </span>
  );
}

export default function Hero() {
  const scrollTo = (id) =>
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });

  const container = {
    hidden: {},
    show: { transition: { staggerChildren: 0.1, delayChildren: 0.1 } },
  };
  const item = {
    hidden: { y: 18, opacity: 0 },
    show: { y: 0, opacity: 1, transition: { duration: 0.55, ease: "easeOut" } },
  };

  return (
    <section
      id="hero"
      className="relative flex min-h-[calc(100vh-6rem)] items-center overflow-hidden pt-20 pb-12 sm:pt-24 sm:pb-14"
    >
      <div className="container-x relative z-10">
        <div className="grid items-center gap-10 lg:grid-cols-[1.05fr_1fr] lg:gap-16">
          {/* Left: copy */}
          <motion.div variants={container} initial="hidden" animate="show">
            <motion.div
              variants={item}
              className="mb-6 inline-flex items-center gap-2 rounded-full border border-line bg-surface px-4 py-1.5 text-sm font-medium text-ink2 shadow-soft dark:border-line-d dark:bg-surface-d dark:text-ink2-d"
            >
              <span className="h-2.5 w-2.5 animate-pulse rounded-full bg-teal" />
              <MapPin size={14} /> {profile.location} · Open to opportunities
            </motion.div>

            <motion.h1
              variants={item}
              className="font-display text-4xl font-bold leading-[1.05] tracking-tight text-ink dark:text-ink-d sm:text-5xl lg:text-6xl xl:text-7xl"
            >
              {profile.name}
            </motion.h1>

            <motion.p
              variants={item}
              className="mt-4 font-display text-xl text-ink2 dark:text-ink2-d sm:text-2xl lg:text-3xl"
            >
              <RotatingRole />
            </motion.p>

            <motion.p
              variants={item}
              className="mt-6 max-w-2xl text-base leading-relaxed text-ink2 dark:text-ink2-d lg:text-lg"
            >
              {profile.headline}
            </motion.p>

            <motion.div variants={item} className="mt-10 flex flex-wrap gap-4">
              <button
                onClick={() => scrollTo("projects")}
                className="group inline-flex items-center gap-2 rounded-xl bg-brand px-6 py-3.5 text-base font-semibold text-white shadow-glow transition hover:brightness-105"
              >
                View Projects
                <ArrowRight size={18} className="transition group-hover:translate-x-0.5" />
              </button>
              {/* Resume button kept in hero (removed only from navbar) */}
              <a
                href={import.meta.env.BASE_URL + profile.resumePath}
                download
                className="inline-flex items-center gap-2 rounded-xl border border-line bg-surface px-6 py-3.5 text-base font-semibold text-ink shadow-soft transition hover:border-brand/40 hover:shadow-lift dark:border-line-d dark:bg-surface-d dark:text-ink-d"
              >
                <Download size={18} /> Resume
              </a>
              <button
                onClick={() => scrollTo("contact")}
                className="inline-flex items-center gap-2 rounded-xl border border-line bg-surface px-6 py-3.5 text-base font-semibold text-ink shadow-soft transition hover:border-brand2/40 hover:shadow-lift dark:border-line-d dark:bg-surface-d dark:text-ink-d"
              >
                <Mail size={18} /> Contact
              </button>
            </motion.div>
          </motion.div>

          {/* Right: holographic data intelligence visual */}
          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="hidden lg:block w-[40vw]"
          >
            <HeroHolographicIllustration />
          </motion.div>
        </div>
      </div>

      {/* Scroll cue */}
      <motion.button
        onClick={() => scrollTo("about")}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.1 }}
        className="absolute bottom-6 left-1/2 z-10 hidden -translate-x-1/2 text-muted dark:text-muted-d sm:block"
        aria-label="Scroll down"
      >
        <span className="flex animate-float flex-col items-center gap-1 text-[10px] font-medium tracking-widest">
          SCROLL
          <ArrowRight size={15} className="rotate-90" />
        </span>
      </motion.button>
    </section>
  );
}
