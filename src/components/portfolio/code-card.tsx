import { motion } from "motion/react";

const K = "text-violet";
const S = "text-cyan";

/** Premium IDE-style card showing the engineer profile as code. */
export function CodeCard() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 18 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
      className="w-full max-w-full"
    >
      <div className="glass group relative w-full max-w-full rounded-2xl border border-border/70 shadow-[0_30px_80px_-40px_var(--accent-violet)] transition-all duration-500 hover:-translate-y-1 hover:shadow-[0_40px_90px_-38px_var(--accent-cyan)]">
        <div className="flex items-center gap-2 border-b border-border/60 px-4 py-3">
          <span className="size-2.5 rounded-full bg-red-400/70" />
          <span className="size-2.5 rounded-full bg-amber-400/70" />
          <span className="size-2.5 rounded-full bg-emerald-400/70" />
          <span className="ml-2 font-mono text-[0.65rem] tracking-wider text-muted-foreground sm:text-xs">
            engineer.ts
          </span>
        </div>

        <pre className="overflow-x-auto px-4 py-5 font-mono text-[0.7rem] leading-relaxed sm:px-6 sm:py-7 sm:text-[0.8rem]">
          <code className="text-muted-foreground">
            <span className={K}>const</span> <span className="text-foreground">engineer</span> = {"{"}
            {"\n"}  name: <span className={S}>"Gourav Thakur"</span>,
            {"\n"}  role: <span className={S}>"AI/ML Engineer"</span>,
            {"\n"}
            {"\n"}  stack: [
            {"\n"}    <span className={S}>"Python"</span>, <span className={S}>"Scikit-Learn"</span>,
            {"\n"}    <span className={S}>"TensorFlow"</span>, <span className={S}>"FastAPI"</span>
            {"\n"}  ],
            {"\n"}
            {"\n"}  projects: [
            {"\n"}    <span className={S}>"EmotionAI"</span>,
            {"\n"}    <span className={S}>"Skin Disease Classification"</span>,
            {"\n"}    <span className={S}>"Airbnb Price Prediction"</span>
            {"\n"}  ],
            {"\n"}
            {"\n"}  focus: <span className={S}>"End-to-end AI systems"</span>
            {"\n"}
            {"}"};
            <span className="animate-caret ml-1 inline-block h-[1em] w-[2px] translate-y-[0.15em] bg-cyan" />
          </code>
        </pre>

        <div className="flex flex-wrap gap-2 border-t border-border/60 px-4 py-3 sm:px-6">
          {["MACHINE LEARNING", "DEEP LEARNING", "FASTAPI"].map((t) => (
            <span
              key={t}
              className="rounded-full border border-border/70 px-2.5 py-1 font-mono text-[0.6rem] tracking-[0.16em] text-muted-foreground"
            >
              {t}
            </span>
          ))}
        </div>
      </div>
    </motion.div>
  );
}
