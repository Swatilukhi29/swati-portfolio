import { Github, Linkedin, Mail, ArrowUp } from "lucide-react";
import { profile } from "../data/portfolioData";

export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="border-t border-line py-10 dark:border-line-d">
      <div className="container-x flex flex-col items-center justify-between gap-6 sm:flex-row">
        <div className="text-center sm:text-left">
          <div className="font-display text-sm font-semibold text-ink dark:text-ink-d">{profile.name}</div>
          <div className="text-xs text-muted dark:text-muted-d">
            {profile.roles[0]} · {profile.location}
          </div>
        </div>

        <div className="flex items-center gap-3">
          <a
            href={`mailto:${profile.email}`}
            aria-label="Email"
            className="grid h-9 w-9 place-items-center rounded-lg border border-line text-ink2 transition hover:border-brand/40 hover:text-brand dark:text-ink2-d dark:border-line-d"
          >
            <Mail size={16} />
          </a>
          <a
            href={profile.linkedin}
            target="_blank"
            rel="noreferrer"
            aria-label="LinkedIn"
            className="grid h-9 w-9 place-items-center rounded-lg border border-line text-ink2 transition hover:border-brand/40 hover:text-brand dark:text-ink2-d dark:border-line-d"
          >
            <Linkedin size={16} />
          </a>
          <a
            href={profile.github}
            target="_blank"
            rel="noreferrer"
            aria-label="GitHub"
            className="grid h-9 w-9 place-items-center rounded-lg border border-line text-ink2 transition hover:border-brand/40 hover:text-brand dark:text-ink2-d dark:border-line-d"
          >
            <Github size={16} />
          </a>
          <button
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            aria-label="Back to top"
            className="grid h-9 w-9 place-items-center rounded-lg bg-brand/10 text-brand transition hover:bg-brand/15"
          >
            <ArrowUp size={16} />
          </button>
        </div>
      </div>

      <div className="container-x mt-6 text-center text-xs text-muted dark:text-muted-d">
        © {year} {profile.name}. Built with React, Vite, Tailwind and Framer Motion.
      </div>
    </footer>
  );
}
