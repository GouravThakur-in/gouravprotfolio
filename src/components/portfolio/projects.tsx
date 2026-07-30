import { motion } from "motion/react";
import { ArrowUpRight, Github } from "lucide-react";
import { projects } from "@/data/portfolio";
import { SectionHeading } from "./section-heading";
import { Reveal } from "./motion-primitives";

export function Projects() {
  return (
    <section id="projects" className="section-shell">
      <SectionHeading
        eyebrow="Projects"
        title="Systems, not notebooks."
        description="Every project below is built as a modular, end-to-end application — data in, decisions out."
      />

      <div className="mt-14 grid gap-6 lg:grid-cols-2">
        {projects.map((p, i) => (
          <Reveal key={p.title} delay={(i % 2) * 0.1}>
            <motion.article
              whileHover={{ y: -8 }}
              transition={{ type: "spring", stiffness: 260, damping: 24 }}
              className="glass group relative flex h-full flex-col overflow-hidden rounded-[1.75rem]"
            >
              <div className="relative h-44 overflow-hidden border-b border-border">
                <div
                  className="absolute inset-0 opacity-70 transition-transform duration-700 group-hover:scale-110"
                  style={{
                    background: `radial-gradient(120% 120% at 15% 10%, ${p.accent}, transparent 62%)`,
                  }}
                />
                <div className="grid-noise absolute inset-0 opacity-60" />
                <div className="absolute inset-0 flex items-end justify-between p-6">
                  <div>
                    <p className="font-mono text-xs tracking-widest text-foreground/70 uppercase">
                      {String(i + 1).padStart(2, "0")} — {p.tagline}
                    </p>
                    <h3 className="mt-1 text-2xl font-semibold">{p.title}</h3>
                  </div>
                  <ArrowUpRight className="size-6 -translate-x-2 translate-y-2 opacity-0 transition-all duration-500 group-hover:translate-x-0 group-hover:translate-y-0 group-hover:opacity-100" />
                </div>
              </div>

              <div className="flex flex-1 flex-col p-6">
                <p className="text-sm leading-relaxed text-muted-foreground">{p.description}</p>

                <ul className="mt-5 grid gap-1.5 sm:grid-cols-2">
                  {p.features.map((f) => (
                    <li key={f} className="flex items-center gap-2 text-xs text-muted-foreground">
                      <span
                        className="size-1 shrink-0 rounded-full"
                        style={{ background: p.accent }}
                      />
                      {f}
                    </li>
                  ))}
                </ul>

                <div className="mt-6 flex flex-wrap gap-2">
                  {p.tech.map((t) => (
                    <span
                      key={t}
                      className="rounded-full border border-border px-2.5 py-1 font-mono text-[0.68rem] text-muted-foreground"
                    >
                      {t}
                    </span>
                  ))}
                </div>

                <a
                  href={p.repo}
                  target="_blank"
                  rel="noreferrer"
                  className="mt-6 inline-flex w-fit items-center gap-2 rounded-full border border-border px-4 py-2 text-sm font-medium transition-colors hover:border-cyan hover:text-cyan"
                >
                  <Github className="size-4" /> View on GitHub
                </a>
              </div>
            </motion.article>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
