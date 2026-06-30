import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Sun, Moon } from "lucide-react";
import { sections } from "../data/portfolioData";

const ALL_LINKS = [
  { id: "about", label: "About", flag: "about" },
  { id: "experience", label: "Experience", flag: "experience" },
  { id: "skills", label: "Skills", flag: "skills" },
  { id: "projects", label: "Projects", flag: "projects" },
  { id: "education", label: "Education", flag: "education" },
  { id: "contact", label: "Contact", flag: "contact" },
];

export default function Navbar({ theme, onToggleTheme }) {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  const links = ALL_LINKS.filter((l) => sections[l.flag]);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 16);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const go = (id) => {
    setOpen(false);
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <motion.header
      initial={{ y: -64, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled
          ? "glass border-b border-line/60 dark:border-line-d/60"
          : "border-b border-transparent"
      }`}
    >
      <nav className="container-x max-w-full flex h-20 items-center justify-between">
        {/* Logo */}
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          className="group flex items-center gap-2.5"
        >
          <span className="grid h-9 w-9 place-items-center rounded-xl bg-brand text-sm font-bold text-white shadow-glow">
            SL
          </span>
          <span className="font-display text-base font-semibold tracking-tight text-ink dark:text-ink-d">
            Swati Lukhi
          </span>
        </button>

        {/* Desktop links */}
        <div className="hidden items-center gap-0.5 md:flex">
          {links.map((l) => (
            <button
              key={l.id}
              onClick={() => go(l.id)}
              className="rounded-lg px-4 py-2 text-base font-medium text-ink2 transition hover:bg-brand/5 hover:text-ink dark:text-ink2-d dark:hover:bg-white/5 dark:hover:text-ink-d"
            >
              {l.label}
            </button>
          ))}
        </div>

        {/* Right: theme toggle + mobile menu (Resume button removed) */}
        <div className="flex items-center gap-2">
          <button
            onClick={onToggleTheme}
            aria-label="Toggle theme"
            className="grid h-9 w-9 place-items-center rounded-lg border border-line text-ink2 transition hover:border-brand/40 hover:text-ink dark:border-line-d dark:text-ink2-d dark:hover:text-ink-d"
          >
            {theme === "dark" ? <Sun size={17} /> : <Moon size={17} />}
          </button>

          <button
            onClick={() => setOpen((o) => !o)}
            aria-label="Toggle menu"
            className="grid h-9 w-9 place-items-center rounded-lg border border-line bg-surface text-ink dark:border-line-d dark:bg-surface-d dark:text-ink-d md:hidden"
          >
            {open ? <X size={18} /> : <Menu size={18} />}
          </button>
        </div>
      </nav>

      {/* Mobile menu */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="overflow-hidden border-t border-line glass dark:border-line-d md:hidden"
          >
            <div className="container-x flex flex-col gap-1 py-3">
              {links.map((l) => (
                <button
                  key={l.id}
                  onClick={() => go(l.id)}
                  className="rounded-lg px-3 py-2.5 text-left text-sm font-medium text-ink2 transition hover:bg-brand/5 hover:text-ink dark:text-ink2-d dark:hover:bg-white/5 dark:hover:text-ink-d"
                >
                  {l.label}
                </button>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
