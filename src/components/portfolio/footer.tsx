import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import { ArrowUp } from "lucide-react";
import { FiGithub, FiInstagram, FiLinkedin, FiMail } from "react-icons/fi";
import { profile } from "@/data/portfolio";

export function Footer() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const onScroll = () => setShow(window.scrollY > 700);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <footer className="relative border-t border-border">
      <div className="section-shell flex flex-col items-center gap-6 py-12 text-center sm:flex-row sm:justify-between sm:text-left">
        <div>
          <p className="font-display text-sm font-semibold">{profile.name}</p>
          <p className="mt-1 text-xs text-muted-foreground">
            {profile.role} · {profile.location}
          </p>
        </div>

        <div className="flex items-center gap-3">
          {[
            { href: profile.github, Icon: FiGithub, label: "GitHub" },
            { href: profile.linkedin, Icon: FiLinkedin, label: "LinkedIn" },
            { href: `mailto:${profile.email}`, Icon: FiMail, label: "Email" },
          ].map(({ href, Icon, label }) => (
            <a
              key={label}
              href={href}
              target={href.startsWith("http") ? "_blank" : undefined}
              rel="noreferrer"
              aria-label={label}
              className="glass grid size-10 place-items-center rounded-full text-muted-foreground transition-all hover:-translate-y-1 hover:text-cyan"
            >
              <Icon className="size-4" />
            </a>
          ))}
        </div>

        <p className="font-mono text-[0.7rem] text-muted-foreground">
          © {new Date().getFullYear()} — designed & built by {profile.firstName}
        </p>
      </div>

      <AnimatePresence>
        {show && (
          <motion.button
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.8 }}
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            aria-label="Back to top"
            className="glass-strong fixed right-5 bottom-5 z-40 grid size-11 place-items-center rounded-full transition-colors hover:text-cyan"
          >
            <ArrowUp className="size-4" />
          </motion.button>
        )}
      </AnimatePresence>
    </footer>
  );
}
