import { useEffect, useRef } from "react";

/** Lightweight canvas particle field with connecting "synapse" lines. */
export function ParticleField() {
  const ref = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = ref.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    let raf = 0;
    let w = 0;
    let h = 0;
    const dpr = Math.min(window.devicePixelRatio || 1, 2);

    type P = { x: number; y: number; vx: number; vy: number; r: number };
    let points: P[] = [];

    const seed = () => {
      const count = Math.min(70, Math.round((w * h) / 22000));
      points = Array.from({ length: count }, () => ({
        x: Math.random() * w,
        y: Math.random() * h,
        vx: (Math.random() - 0.5) * 0.22,
        vy: (Math.random() - 0.5) * 0.22,
        r: Math.random() * 1.6 + 0.5,
      }));
    };

    const resize = () => {
      const parent = canvas.parentElement;
      w = parent?.clientWidth ?? window.innerWidth;
      h = parent?.clientHeight ?? window.innerHeight;
      canvas.width = w * dpr;
      canvas.height = h * dpr;
      canvas.style.width = `${w}px`;
      canvas.style.height = `${h}px`;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      seed();
    };

    const draw = () => {
      const light = document.documentElement.classList.contains("light");
      ctx.clearRect(0, 0, w, h);
      for (const p of points) {
        if (!reduce) {
          p.x += p.vx;
          p.y += p.vy;
        }
        if (p.x < 0 || p.x > w) p.vx *= -1;
        if (p.y < 0 || p.y > h) p.vy *= -1;
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
        ctx.fillStyle = light ? "rgba(40, 110, 140, 0.35)" : "rgba(150, 230, 245, 0.55)";
        ctx.fill();
      }
      for (let i = 0; i < points.length; i++) {
        for (let j = i + 1; j < points.length; j++) {
          const dx = points[i].x - points[j].x;
          const dy = points[i].y - points[j].y;
          const d2 = dx * dx + dy * dy;
          if (d2 < 18000) {
            ctx.beginPath();
            ctx.moveTo(points[i].x, points[i].y);
            ctx.lineTo(points[j].x, points[j].y);
            ctx.strokeStyle = light
              ? `rgba(40, 110, 140, ${0.14 * (1 - d2 / 18000)})`
              : `rgba(130, 200, 230, ${0.16 * (1 - d2 / 18000)})`;
            ctx.lineWidth = 0.7;
            ctx.stroke();
          }
        }
      }
      raf = requestAnimationFrame(draw);
    };

    resize();
    draw();
    window.addEventListener("resize", resize);
    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("resize", resize);
    };
  }, []);

  return (
    <canvas
      ref={ref}
      aria-hidden="true"
      className="pointer-events-none absolute inset-0 h-full w-full opacity-70"
    />
  );
}

export function Blobs() {
  return (
    <div aria-hidden="true" className="pointer-events-none absolute inset-0 overflow-hidden">
      <div
        className="animate-blob absolute -top-40 -left-32 h-[32rem] w-[32rem] rounded-full opacity-30 blur-[110px]"
        style={{ background: "radial-gradient(circle, var(--accent-cyan), transparent 65%)" }}
      />
      <div
        className="animate-blob absolute top-1/3 -right-40 h-[34rem] w-[34rem] rounded-full opacity-25 blur-[120px]"
        style={{
          background: "radial-gradient(circle, var(--accent-violet), transparent 65%)",
          animationDelay: "-6s",
        }}
      />
      <div
        className="animate-blob absolute -bottom-52 left-1/4 h-[30rem] w-[30rem] rounded-full opacity-20 blur-[130px]"
        style={{
          background: "radial-gradient(circle, var(--accent-lime), transparent 65%)",
          animationDelay: "-12s",
        }}
      />
    </div>
  );
}
