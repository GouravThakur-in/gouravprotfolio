import { motion } from "motion/react";
import { ArrowUpRight, Github, ExternalLink } from "lucide-react";
import { projects, type Project } from "@/data/portfolio";
import { SectionHeading } from "./section-heading";
import { Reveal } from "./motion-primitives";
import airbnbImage from "@/assets/project-airbnb.jpg";
import skinImage from "@/assets/project-skin-disease.jpg";

const images: Record<string, string> = {
  "Airbnb Price Prediction": airbnbImage,
  "Skin Disease Classification": skinImage,
};

export function Projects() {
  return (
    <section id="projects" className="section-shell">
      <SectionHeading
        eyebrow="Projects"
        title="Systems, not notebooks."
        description="End-to-end machine learning applications — data in, decisions out."
      />

      <div className="mt-14 space-y-14">
        {projects.map((project, index) => (
          <ProjectCard key={project.title} project={project} index={index} />
        ))}
      </div>
    </section>
  );
}

function ProjectCard({ project, index }: { project: Project; index: number }) {
  const image = images[project.title];

  return (
    <Reveal>
      <motion.article
        whileHover={{ y: -6 }}
        transition={{ type: "spring", stiffness: 260, damping: 24 }}
        className="glass group relative overflow-hidden rounded-[2rem]"
      >
        <div className="relative h-56 overflow-hidden border-b border-border sm:h-72 lg:h-80">
          {image && (
            <img
              src={image}
              alt={`${project.title} — ${project.category} project visualisation`}
              loading="lazy"
              width={1600}
              height={900}
              className="size-full object-cover opacity-70 transition-transform duration-[1200ms] group-hover:scale-110"
            />
          )}
          <div
            className="pointer-events-none absolute inset-0 opacity-70"
            style={{
              background: `radial-gradient(120% 120% at 12% 8%, ${project.accent}, transparent 60%)`,
            }}
          />
          <div className="grid-noise pointer-events-none absolute inset-0 opacity-50" />
          <div className="absolute inset-0 flex items-end justify-between gap-4 p-6 sm:p-8">
            <div className="min-w-0">
              <p className="font-mono text-xs tracking-widest text-foreground/70 uppercase">
                {String(index + 1).padStart(2, "0")} — {project.tagline}
              </p>
              <h3 className="mt-1 text-2xl font-semibold sm:text-4xl">{project.title}</h3>
              <p className="mt-2 font-mono text-[0.68rem] tracking-widest text-muted-foreground uppercase">
                {project.category}
              </p>
            </div>
            <ArrowUpRight className="size-7 shrink-0 -translate-x-2 translate-y-2 opacity-0 transition-all duration-500 group-hover:translate-x-0 group-hover:translate-y-0 group-hover:opacity-100" />
          </div>
        </div>

        <div className="grid gap-10 p-6 sm:p-8 lg:grid-cols-[minmax(0,1.1fr)_minmax(0,0.9fr)]">
          <div className="min-w-0">
            <p className="text-sm leading-relaxed text-muted-foreground">
              {project.longDescription}
            </p>

            <h4 className="mt-8 font-mono text-xs tracking-widest text-muted-foreground uppercase">
              Key features
            </h4>
            <ul className="mt-4 grid gap-2 sm:grid-cols-2">
              {project.features.map((f) => (
                <li key={f} className="flex items-start gap-2 text-xs text-muted-foreground">
                  <span
                    className="mt-1.5 size-1 shrink-0 rounded-full"
                    style={{ background: project.accent }}
                  />
                  {f}
                </li>
              ))}
            </ul>

            <h4 className="mt-8 font-mono text-xs tracking-widest text-muted-foreground uppercase">
              Model evaluation
            </h4>
            <div className="mt-4 grid grid-cols-2 gap-3 sm:grid-cols-4">
              {project.metrics.map((m) => (
                <div key={m.label} className="glass rounded-2xl px-4 py-3">
                  <p className="text-xl font-semibold text-aurora">{m.value}</p>
                  <p className="mt-1 text-[0.68rem] text-muted-foreground">{m.label}</p>
                </div>
              ))}
            </div>

            <div className="mt-8 flex flex-wrap gap-2">
              {project.tech.map((t) => (
                <span
                  key={t}
                  className="rounded-full border border-border px-2.5 py-1 font-mono text-[0.68rem] text-muted-foreground transition-colors hover:border-cyan hover:text-cyan"
                >
                  {t}
                </span>
              ))}
            </div>

            <div className="mt-8 flex flex-wrap gap-3">
              <a
                href={project.repo}
                target="_blank"
                rel="noreferrer"
                className="inline-flex w-fit items-center gap-2 rounded-full border border-border px-5 py-2.5 text-sm font-medium transition-colors hover:border-cyan hover:text-cyan"
              >
                <Github className="size-4" /> View on GitHub
              </a>
              {project.kaggle && (
                <a
                  href={project.kaggle}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex w-fit items-center gap-2 rounded-full border border-border px-5 py-2.5 text-sm font-medium transition-colors hover:border-cyan hover:text-cyan"
                >
                  <ExternalLink className="size-4" /> Kaggle Notebook
                </a>
              )}
            </div>
          </div>

          <div className="min-w-0">
            <h4 className="font-mono text-xs tracking-widest text-muted-foreground uppercase">
              ML pipeline workflow
            </h4>
            <ol className="relative mt-5 space-y-5 border-l border-border pl-6">
              {project.pipeline.map((s, i) => (
                <li key={s.step} className="relative">
                  <span
                    className="absolute -left-[1.9rem] top-1 grid size-4 place-items-center rounded-full text-[0.55rem] font-semibold text-background"
                    style={{ background: project.accent }}
                  >
                    {i + 1}
                  </span>
                  <p className="text-sm font-medium">{s.step}</p>
                  <p className="mt-1 text-xs leading-relaxed text-muted-foreground">{s.detail}</p>
                </li>
              ))}
            </ol>
          </div>
        </div>
      </motion.article>
    </Reveal>
  );
}
