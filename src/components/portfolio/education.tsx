import { GraduationCap } from "lucide-react";
import { education } from "@/data/portfolio";
import { SectionHeading } from "./section-heading";
import { Reveal } from "./motion-primitives";

export function Education() {
  return (
    <section id="education" className="section-shell">
      <SectionHeading eyebrow="Education" title="Academic foundation." />

      <div className="relative mt-14 grid gap-6 md:grid-cols-2">
        {education.map((e, i) => (
          <Reveal key={e.degree} delay={i * 0.12}>
            <article className="glass hover-lift relative h-full overflow-hidden rounded-3xl p-7">
              <span
                className="absolute top-0 left-0 h-full w-1"
                style={{ background: "var(--gradient-line)" }}
              />
              <GraduationCap className="size-6 text-violet" style={{ color: "var(--accent-violet)" }} />
              <p className="mt-5 font-mono text-xs tracking-widest text-muted-foreground">
                {e.period}
              </p>
              <h3 className="mt-2 text-xl leading-snug font-semibold">{e.degree}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{e.school}</p>
            </article>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
