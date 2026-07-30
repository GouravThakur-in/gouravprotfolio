import { motion } from "motion/react";
import { Briefcase } from "lucide-react";
import { experience } from "@/data/portfolio";
import { SectionHeading } from "./section-heading";
import { Reveal } from "./motion-primitives";

export function Experience() {
  return (
    <section id="experience" className="relative section-shell">
      <SectionHeading
        eyebrow="Experience"
        title="Hands-on training, real pipelines."
        description="Two industry traineeships spanning the full data-science-to-deep-learning arc."
      />

      <div className="relative mt-14 pl-6 sm:pl-10">
        <motion.span
          initial={{ scaleY: 0 }}
          whileInView={{ scaleY: 1 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
          className="absolute top-0 left-0 h-full w-px origin-top sm:left-3"
          style={{ background: "var(--gradient-line)" }}
        />

        <div className="space-y-10">
          {experience.map((job, i) => (
            <Reveal key={job.company} delay={i * 0.1}>
              <div className="relative">
                <span
                  className="absolute top-7 -left-6 grid size-3 place-items-center rounded-full sm:-left-[1.84rem]"
                  style={{ background: job.current ? "var(--accent-lime)" : "var(--accent-cyan)" }}
                >
                  {job.current && (
                    <span
                      className="absolute size-3 animate-ping rounded-full opacity-60"
                      style={{ background: "var(--accent-lime)" }}
                    />
                  )}
                </span>

                <article className="glass hover-lift rounded-3xl p-6 sm:p-8">
                  <div className="flex flex-wrap items-center justify-between gap-3">
                    <div className="flex items-center gap-3">
                      <span className="glass grid size-10 place-items-center rounded-xl">
                        <Briefcase className="size-4 text-cyan" />
                      </span>
                      <div>
                        <h3 className="text-lg font-semibold">{job.company}</h3>
                        <p className="text-sm text-muted-foreground">{job.role}</p>
                      </div>
                    </div>
                    <span
                      className={`rounded-full px-3 py-1 font-mono text-xs ${
                        job.current
                          ? "bg-lime/15 text-lime"
                          : "border border-border text-muted-foreground"
                      }`}
                      style={job.current ? { color: "var(--accent-lime)" } : undefined}
                    >
                      {job.period}
                    </span>
                  </div>

                  <ul className="mt-6 grid gap-2 sm:grid-cols-2">
                    {job.points.map((p) => (
                      <li
                        key={p}
                        className="flex items-center gap-2.5 text-sm text-muted-foreground"
                      >
                        <span
                          className="size-1.5 shrink-0 rounded-full"
                          style={{ background: "var(--accent-violet)" }}
                        />
                        {p}
                      </li>
                    ))}
                  </ul>
                </article>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
