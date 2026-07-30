import { useRef, type CSSProperties, type ReactNode } from "react";
import { motion, useMotionValue, useSpring } from "motion/react";

type Props = {
  as?: "a" | "button";
  children: ReactNode;
  className?: string;
  style?: CSSProperties;
  href?: string;
  download?: boolean;
  type?: "button" | "submit";
  disabled?: boolean;
  onClick?: () => void;
};

/** Button/link that subtly pulls toward the cursor. */
export function MagneticButton({ as = "button", children, className, style, ...rest }: Props) {
  const ref = useRef<HTMLElement>(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const sx = useSpring(x, { stiffness: 240, damping: 18 });
  const sy = useSpring(y, { stiffness: 240, damping: 18 });

  const onMove = (e: React.MouseEvent) => {
    const el = ref.current;
    if (!el) return;
    const r = el.getBoundingClientRect();
    x.set((e.clientX - (r.left + r.width / 2)) * 0.28);
    y.set((e.clientY - (r.top + r.height / 2)) * 0.28);
  };
  const reset = () => {
    x.set(0);
    y.set(0);
  };

  const Comp = as === "a" ? motion.a : motion.button;

  return (
    <Comp
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      ref={ref as any}
      onMouseMove={onMove}
      onMouseLeave={reset}
      style={{ ...style, x: sx, y: sy }}
      whileTap={{ scale: 0.96 }}
      className={`inline-flex items-center justify-center transition-shadow hover:shadow-[0_18px_40px_-18px_var(--accent-cyan)] ${className ?? ""}`}
      {...rest}
    >
      {children}
    </Comp>
  );
}
