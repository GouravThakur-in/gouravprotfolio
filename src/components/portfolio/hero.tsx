import { useEffect, useState } from "react";
import { motion } from "motion/react";
import { ArrowDown, Download, Mail } from "lucide-react";
import { FiGithub, FiInstagram, FiLinkedin, FiMail } from "react-icons/fi";
import portrait from "@/assets/gourav-editorial-portrait.png.asset.json";
import { profile } from "@/data/portfolio";
import { MagneticButton } from "./magnetic-button";

function Typewriter({ words }: { words: string[] }) {
  const [index, setIndex] = useState(0);
  const [text, setText] = useState("");
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const word = words[index % words.length];
    const done = !deleting && text === word;
    const cleared = deleting && text === "";
    const delay = done ? 1600 : cleared ? 220 : deleting ? 38 : 78;

    const timer = setTimeout(() => {
      if (done) return setDeleting(true);
      if (cleared) {
        setDeleting(false);
        setIndex((current) => current + 1);
        return;
      }
      setText(deleting ? word.slice(0, text.length - 1) : word.slice(0, text.length + 1));
    }, delay);
    return () => clearTimeout(timer);
  }, [text, deleting, index, words]);

  return (
    <span
      className="inline-flex h-6 max-w-full items-center overflow-hidden font-mono text-xs text-hero-muted sm:text-sm"
      aria-live="polite"
    >
      {text}
      <span className="ml-1 inline-block h-4 w-px animate-caret bg-hero-muted" />
    </span>
  );
}

const socials = [
  { href: profile.github, Icon: FiGithub, label: "GitHub", instagram: false },
  { href: profile.linkedin, Icon: FiLinkedin, label: "LinkedIn", instagram: false },
  { href: `mailto:${profile.email}`, Icon: FiMail, label: "Email", instagram: false },
  { href: profile.instagram, Icon: FiInstagram, label: "Instagram", instagram: true },
];

export function Hero() {
  return (
    <section
      id="hero"
      className="relative isolate flex min-h-[54rem] items-start justify-center overflow-hidden bg-hero-background text-hero-foreground"
    >
      <div aria-hidden="true" className="pointer-events-none absolute inset-0 overflow-hidden">
        <img
          src={portrait.url}
          alt=""
          fetchPriority="high"
          className="absolute inset-x-0 top-24 mx-auto h-[35rem] w-full max-w-[48rem] object-contain object-top opacity-90 [mask-image:radial-gradient(ellipse_at_center,black_50%,transparent_100%)] sm:top-20 sm:h-[47rem] sm:max-w-[54rem]"
        />
        <div className="absolute inset-x-0 bottom-0 h-[58%] bg-gradient-to-b from-transparent via-hero-background/75 to-hero-background" />
        <div className="absolute inset-x-0 top-0 h-48 bg-gradient-to-b from-hero-background/60 to-transparent" />
      </div>

      <div className="pointer-events-none absolute inset-x-0 top-28 z-10 mx-auto flex w-full max-w-7xl items-center justify-between px-6 sm:top-32 sm:px-10 lg:px-16">
        <span className="font-mono text-[9px] uppercase text-hero-muted sm:text-[10px]">
          Independent mind / AI &amp; machine learning
        </span>
        <span className="font-mono text-[9px] uppercase text-hero-muted sm:text-[10px]">
          {profile.location}
        </span>
      </div>

      <div className="relative z-10 flex w-full flex-col items-center px-5 pb-24 pt-[24rem] text-center sm:px-8 sm:pt-[28rem]">
        <motion.p
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.65, delay: 0.08 }}
          className="font-mono text-[10px] uppercase text-hero-muted sm:text-xs"
        >
          {profile.greeting}
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.85, delay: 0.16 }}
          className="relative z-10 mt-1 whitespace-nowrap font-editorial text-[3.75rem] leading-[0.88] font-semibold text-hero-foreground drop-shadow-[0_2px_18px_var(--hero-background)] sm:text-7xl md:text-8xl xl:text-9xl"
        >
          {profile.name}
        </motion.h1>

        <motion.div
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.65, delay: 0.27 }}
          className="mt-5 flex flex-col items-center gap-1"
        >
          <p className="text-sm font-medium text-hero-foreground sm:text-base">
            {profile.role}
          </p>
          <Typewriter words={profile.roles} />
        </motion.div>

        <motion.p
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.65, delay: 0.34 }}
          className="mt-4 max-w-2xl text-sm leading-relaxed text-hero-muted sm:text-base"
        >
          I design and build end-to-end ML and AI applications — from data pipelines and model
          training to deep learning inference and FastAPI deployment.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.65, delay: 0.42 }}
          className="mt-7 flex w-full max-w-3xl flex-col items-stretch justify-center gap-3 sm:flex-row sm:flex-wrap sm:items-center"
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
          transition={{ duration: 0.65, delay: 0.54 }}
          className="mt-8 flex flex-wrap items-center justify-center gap-3"
        >
          {socials.map(({ href, Icon, label, instagram }) => (
            <a
              key={label}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={label}
              className={`glass grid size-10 place-items-center rounded-full text-muted-foreground transition-all hover:-translate-y-1 ${
                instagram ? "hover-instagram" : "hover:text-cyan"
              }`}
            >
              <Icon className="size-4" />
            </a>
          ))}
          <span className="ml-1 hidden font-mono text-[10px] uppercase text-hero-muted sm:inline">
            {profile.location}
          </span>
        </motion.div>
      </div>

      <motion.a
        href="#about"
        aria-label="Scroll to about"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ opacity: { delay: 1 } }}
        className="absolute bottom-6 left-1/2 z-10 -translate-x-1/2 text-hero-muted"
      >
        <ArrowDown className="size-5" />
      </motion.a>
    </section>
  );
}