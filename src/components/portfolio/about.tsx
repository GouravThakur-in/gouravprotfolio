import { motion } from "motion/react";
import { BrainCircuit, Database, Rocket, Terminal } from "lucide-react";
import { profile, stats } from "@/data/portfolio";
import { SectionHeading } from "./section-heading";
import { Counter, Reveal, Stagger, staggerItem } from "./motion-primitives";

const pillars = [
  {
    Icon: BrainCircuit,
    title: "Modelling",
    body: "Regression, classification, NLP and transformer fine-tuning with careful evaluation.",
  },
  {
    Icon: Database,
    title: "Data",
    body: "Cleaning, EDA and feature engineering pipelines built with Pandas and NumPy.",
  },
  {
    Icon: Terminal,
    title: "Backends",
    body: "FastAPI services that serve models with typed schemas and predictable latency.",
  },
  {
    Icon: Rocket,
    title: "Delivery",
    body: "Modular, reproducible project architecture from ingestion to prediction pipeline.",
  },
];

export function About() {
  return (
    <section id="about" className="section-shell">
      <div className="grid gap-14 lg:grid-cols-[1fr_1.05fr] lg:gap-20">
        <div>
          <SectionHeading eyebrow="About" title="Turning raw data into working intelligence." />
          <Reveal delay={0.1}>
            <p className="mt-6 text-base leading-relaxed text-muted-foreground">
              {profile.summary}
            </p>
          </Reveal>

          <Stagger className="mt-10 grid grid-cols-2 gap-4 sm:grid-cols-4 lg:grid-cols-2">
            {stats.map((s) => (
              <motion.div
                key={s.label}
                variants={staggerItem}
                className="glass rounded-2xl p-4"
              >
                <div className="font-display text-2xl font-semibold text-aurora">
                  <Counter to={s.value} suffix={s.suffix} raw={s.raw} />
                </div>
                <p className="mt-1 text-xs leading-snug text-muted-foreground">{s.label}</p>
              </motion.div>
            ))}
          </Stagger>
        </div>

        <Stagger className="grid gap-4 sm:grid-cols-2" gap={0.1}>
          {pillars.map(({ Icon, title, body }) => (
            <motion.article
              key={title}
              variants={staggerItem}
              className="glass hover-lift group relative overflow-hidden rounded-3xl p-6"
            >
              <div
                className="absolute inset-x-0 -top-24 h-40 opacity-0 blur-3xl transition-opacity duration-500 group-hover:opacity-40"
                style={{ background: "var(--gradient-aurora)" }}
              />
              <Icon className="relative size-6 text-cyan" />
              <h3 className="relative mt-5 text-lg font-semibold">{title}</h3>
              <p className="relative mt-2 text-sm leading-relaxed text-muted-foreground">
                {body}
              </p>
            </motion.article>
          ))}
        </Stagger>
      </div>
    </section>
  );
}
