import { motion } from "motion/react";
import { skillGroups, technologies } from "@/data/portfolio";
import { SectionHeading } from "./section-heading";
import { Stagger, staggerItem } from "./motion-primitives";

export function Skills() {
  return (
    <section id="skills" className="relative section-shell">
      <div
        aria-hidden
        className="pointer-events-none absolute top-1/4 left-1/2 h-96 w-[40rem] -translate-x-1/2 rounded-full opacity-15 blur-[120px]"
        style={{ background: "var(--gradient-aurora)" }}
      />
      <SectionHeading
        eyebrow="Skills"
        title="A stack tuned for shipping ML."
        description="Grouped by how I actually use them — from language fundamentals to model evaluation."
      />

      <Stagger className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-3" gap={0.07}>
        {skillGroups.map((group) => (
          <motion.div
            key={group.title}
            variants={staggerItem}
            whileHover={{ y: -6 }}
            className="glass group relative overflow-hidden rounded-3xl p-6"
          >
            <span
              className="absolute inset-x-0 top-0 h-px opacity-60"
              style={{ background: "var(--gradient-aurora)" }}
            />
            <h3 className="font-display text-base font-semibold">{group.title}</h3>
            <div className="mt-4 flex flex-wrap gap-2">
              {group.items.map((item) => (
                <span
                  key={item}
                  className="rounded-full border border-border bg-secondary/60 px-3 py-1.5 font-mono text-xs text-muted-foreground transition-colors group-hover:text-foreground"
                >
                  {item}
                </span>
              ))}
            </div>
          </motion.div>
        ))}
      </Stagger>

      <div className="relative mt-16 overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_12%,black_88%,transparent)]">
        <p className="mb-5 font-mono text-xs tracking-[0.25em] text-muted-foreground uppercase">
          Featured technologies
        </p>
        <motion.div
          className="flex w-max gap-3"
          animate={{ x: ["0%", "-50%"] }}
          transition={{ duration: 28, repeat: Infinity, ease: "linear" }}
        >
          {[...technologies, ...technologies].map((t, i) => (
            <span
              key={`${t}-${i}`}
              className="glass rounded-2xl px-5 py-3 text-sm whitespace-nowrap text-muted-foreground"
            >
              {t}
            </span>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
