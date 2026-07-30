import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "motion/react";

export function LoadingScreen() {
  const [done, setDone] = useState(false);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    let p = 0;
    const id = setInterval(() => {
      p = Math.min(100, p + Math.random() * 18 + 6);
      setProgress(Math.round(p));
      if (p >= 100) {
        clearInterval(id);
        setTimeout(() => setDone(true), 320);
      }
    }, 110);
    return () => clearInterval(id);
  }, []);

  return (
    <AnimatePresence>
      {!done && (
        <motion.div
          exit={{ opacity: 0, filter: "blur(8px)" }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="fixed inset-0 z-[100] grid place-items-center bg-background"
        >
          <div className="w-56 text-center">
            <motion.p
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-aurora font-display text-2xl font-semibold"
            >
              Gourav Thakur
            </motion.p>
            <p className="mt-2 font-mono text-[0.7rem] tracking-[0.3em] text-muted-foreground uppercase">
              initialising
            </p>
            <div className="mt-6 h-px w-full overflow-hidden bg-border">
              <motion.div
                className="h-full"
                style={{ background: "var(--gradient-aurora)" }}
                animate={{ width: `${progress}%` }}
                transition={{ ease: "easeOut" }}
              />
            </div>
            <p className="mt-3 font-mono text-[0.7rem] text-muted-foreground">{progress}%</p>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
