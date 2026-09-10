import { motion } from "motion/react";

type Line = { indent: number; parts: { t: string; c?: string }[] };

const K = "text-violet";
const P = "text-muted-foreground";
const S = "text-lime";
const N = "text-cyan";

const lines: Line[] = [
  { indent: 0, parts: [{ t: "const ", c: K }, { t: "engineer", c: N }, { t: " = {", c: P }] },
  { indent: 1, parts: [{ t: "name: " }, { t: '"Gourav Thakur"', c: S }, { t: "," }] },
  { indent: 1, parts: [{ t: "role: " }, { t: '"AI/ML Engineer"', c: S }, { t: "," }] },
  { indent: 0, parts: [{ t: "" }] },
  { indent: 1, parts: [{ t: "stack: [", c: P }] },
  { indent: 2, parts: [{ t: '"Python"', c: S }, { t: ", " }, { t: '"Scikit-Learn"', c: S }, { t: "," }] },
  { indent: 2, parts: [{ t: '"TensorFlow"', c: S }, { t: ", " }, { t: '"FastAPI"', c: S }] },
  { indent: 1, parts: [{ t: "],", c: P }] },
  { indent: 0, parts: [{ t: "" }] },
  { indent: 1, parts: [{ t: "projects: [", c: P }] },
  { indent: 2, parts: [{ t: '"EmotiQ"', c: S }, { t: "," }] },
  { indent: 2, parts: [{ t: '"Skin Disease Classification"', c: S }, { t: "," }] },
  { indent: 2, parts: [{ t: '"Airbnb Price Prediction"', c: S }] },
  { indent: 1, parts: [{ t: "],", c: P }] },
  { indent: 0, parts: [{ t: "" }] },
  { indent: 1, parts: [{ t: "available: " }, { t: "true", c: N }, { t: "," }] },
  { indent: 1, parts: [{ t: "// let's build something great ✦", c: P }] },
  { indent: 0, parts: [{ t: "};", c: P }] },
];

/** Premium, lightweight "code editor" visual for the hero. */
export function CodeCard() {
  return (
    <div className="relative w-full max-w-full">
      <div
        aria-hidden="true"
        className="absolute -inset-6 -z-10 rounded-[2rem] opacity-45 blur-3xl"
        style={{ background: "var(--gradient-aurora)" }}
      />
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
        whileHover={{ y: -6 }}
        className="glass-strong overflow-hidden rounded-2xl shadow-[var(--shadow-card)]"
      >
        <div className="flex items-center gap-2 border-b border-border/70 px-4 py-3">
          <span className="size-2.5 rounded-full bg-destructive/80" />
          <span className="size-2.5 rounded-full bg-amber/80" />
          <span className="size-2.5 rounded-full bg-lime/80" />
          <span className="ml-2 truncate font-mono text-[0.68rem] text-muted-foreground">
            engineer.ts
          </span>
        </div>

        <pre className="overflow-x-auto px-4 py-5 font-mono text-[0.66rem] leading-relaxed sm:px-6 sm:py-6 sm:text-[0.78rem]">
          <code>
            {lines.map((line, i) => (
              <div key={i} className="whitespace-pre">
                <span className="mr-3 inline-block w-4 select-none text-right text-muted-foreground/40">
                  {i + 1}
                </span>
                <span>{"  ".repeat(line.indent)}</span>
                {line.parts.map((p, j) => (
                  <span key={j} className={p.c ?? "text-foreground/85"}>
                    {p.t}
                  </span>
                ))}
                {i === lines.length - 1 && (
                  <span className="animate-caret ml-1 inline-block h-[1em] w-[2px] translate-y-[0.15em] bg-cyan align-middle" />
                )}
              </div>
            ))}
          </code>
        </pre>

        <div className="flex flex-wrap gap-2 border-t border-border/70 px-4 py-3 sm:px-6">
          {["Machine Learning", "Deep Learning", "FastAPI"].map((label) => (
            <span
              key={label}
              className="rounded-full border border-border px-2.5 py-1 font-mono text-[0.6rem] tracking-[0.14em] text-muted-foreground uppercase"
            >
              {label}
            </span>
          ))}
        </div>
      </motion.div>
    </div>
  );
}
