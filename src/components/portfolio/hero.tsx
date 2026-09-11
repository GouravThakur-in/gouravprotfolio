import { useEffect, useState } from "react";
import { motion } from "motion/react";
import { ArrowDown, Download, Mail, Sparkles } from "lucide-react";
import { FiGithub, FiInstagram, FiLinkedin, FiMail } from "react-icons/fi";
import { profile } from "@/data/portfolio";
import { ParticleField, Blobs } from "./backdrop";
import { MagneticButton } from "./magnetic-button";
import { CodeCard } from "./code-card";

function Typewriter({ words }: { words: string[] }) {
  const [index, setIndex] = useState(0);
  const [text, setText] = useState("");
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const word = words[index % words.length];
    const done = !deleting && text === word;
    const cleared = deleting && text === "";
    const delay = done ? 1600 : cleared ? 220 : deleting ? 38 : 78;

    const t = setTimeout(() => {
      if (done) return setDeleting(true);
      if (cleared) {
        setDeleting(false);
        setIndex((i) => i + 1);
        return;
      }
      setText(deleting ? word.slice(0, text.length - 1) : word.slice(0, text.length + 1));
    }, delay);
    return () => clearTimeout(t);
  }, [text, deleting, index, words]);

  return (
    <span
      className="inline-flex max-w-full items-center overflow-hidden font-mono whitespace-nowrap text-cyan"
      aria-live="polite"
    >
      {text}
      <span className="animate-caret ml-0.5 inline-block h-[1em] w-[2px] translate-y-[0.12em] bg-cyan" />
    </span>
  );
}

export function Hero() {
  return (
    <section id="hero" className="relative flex min-h-screen items-center overflow-hidden">
      <div className="pointer-events-none absolute inset-0 opacity-40">
        <Blobs />
        <ParticleField />
      </div>
      <div className="grid-noise pointer-events-none absolute inset-0 opacity-60 [mask-image:radial-gradient(ellipse_at_center,black,transparent_75%)]" />

      <div className="section-shell relative grid w-full grid-cols-1 items-center gap-12 pt-32 pb-24 lg:grid-cols-[minmax(0,1.1fr)_minmax(0,0.95fr)] lg:gap-16">
        {/* Left — introduction */}
        <div className="flex flex-col items-start text-left">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            className="glass inline-flex items-center gap-2 rounded-full px-4 py-1.5 text-xs text-muted-foreground"
          >
            <Sparkles className="size-3.5 text-cyan" />
            Open to AI/ML internships & full-time roles
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.08 }}
            className="mt-8 font-mono text-xs tracking-[0.3em] text-muted-foreground uppercase sm:text-sm"
          >
            {profile.greeting}
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.14, ease: [0.22, 1, 0.36, 1] }}
            className="mt-3 text-[clamp(2.5rem,7vw,5.2rem)] leading-[0.95] font-semibold tracking-tight"
          >
            <span className="block">{profile.firstName}</span>
            <span className="text-aurora block">{profile.lastName}</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.24 }}
            className="mt-6 w-full max-w-full text-[clamp(1rem,4.4vw,1.125rem)] text-muted-foreground sm:text-xl"
          >
            <span className="block sm:inline">{profile.role}</span>
            <span className="hidden sm:inline"> — </span>
            <span className="flex h-[1.7em] w-full max-w-full items-center overflow-hidden sm:inline sm:h-auto sm:w-auto">
              <Typewriter words={profile.roles} />
            </span>
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="mt-3 text-base font-medium text-foreground/90 sm:text-lg"
          >
            Building intelligent, production-ready machine learning systems.
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.36 }}
            className="mt-4 max-w-xl text-sm leading-relaxed text-muted-foreground/80 sm:text-base"
          >
            I design and build end-to-end ML and AI applications — from data pipelines and model
            training to deep learning inference and FastAPI deployment.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.45 }}
            className="mt-10 flex w-full max-w-sm flex-col items-stretch gap-3 sm:max-w-none sm:flex-row sm:flex-wrap sm:items-center"
          >
            <MagneticButton
              as="a"
              href="#projects"
              className="w-full rounded-full px-6 py-3 text-sm font-semibold text-primary-foreground sm:w-auto"
              style={{ background: "var(--gradient-aurora)" }}
            >
              View My Work
            </MagneticButton>
            <MagneticButton
              as="a"
              href={profile.resumeUrl}
              download="Gourav_Thakur_Resume.pdf"
              className="glass inline-flex w-full items-center justify-center gap-2 rounded-full px-6 py-3 text-sm font-semibold sm:w-auto"
            >
              <Download className="size-4" /> Download Resume
            </MagneticButton>
            <MagneticButton
              as="a"
              href="#contact"
              className="inline-flex w-full items-center justify-center gap-2 rounded-full border border-border px-6 py-3 text-sm font-semibold text-muted-foreground transition-colors hover:text-foreground sm:w-auto"
            >
              <Mail className="size-4" /> Contact Me
            </MagneticButton>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.7, delay: 0.6 }}
            className="mt-10 flex flex-wrap items-center gap-4"
          >
            {[
              { href: profile.github, Icon: FiGithub, label: "GitHub", instagram: false },
              { href: profile.linkedin, Icon: FiLinkedin, label: "LinkedIn", instagram: false },
              { href: `mailto:${profile.email}`, Icon: FiMail, label: "Email", instagram: false },
              { href: profile.instagram, Icon: FiInstagram, label: "Instagram", instagram: true },
            ].map(({ href, Icon, label, instagram }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={label}
                className={`glass grid size-11 place-items-center rounded-full text-muted-foreground transition-all hover:-translate-y-1 ${
                  instagram ? "hover-instagram" : "hover:text-cyan"
                }`}
              >
                <Icon className="size-4.5" />
              </a>
            ))}

            <span className="hidden h-8 w-px bg-border sm:block" />
            <span className="font-mono text-xs text-muted-foreground">{profile.location}</span>
          </motion.div>
        </div>

        {/* Right — code editor visual */}
        <div className="w-full min-w-0">
          <CodeCard />
        </div>
      </div>

      <motion.a
        href="#about"
        aria-label="Scroll to about"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ opacity: { delay: 1 } }}
        className="absolute bottom-6 left-1/2 -translate-x-1/2 text-muted-foreground"
      >
        <ArrowDown className="size-5" />
      </motion.a>
    </section>
  );
}
