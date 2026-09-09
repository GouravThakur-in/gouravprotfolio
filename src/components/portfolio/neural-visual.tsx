import { useEffect, useRef, useState } from "react";

type Node = { x: number; y: number; vx: number; vy: number; r: number };

/**
 * Lightweight canvas neural-network / data-flow visual for the hero.
 * Scales node count with viewport width and falls back to a static render
 * when the visitor prefers reduced motion.
 */
export function NeuralVisual() {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const [reduced, setReduced] = useState(false);

  useEffect(() => {
    const mql = window.matchMedia("(prefers-reduced-motion: reduce)");
    setReduced(mql.matches);
    const onChange = (e: MediaQueryListEvent) => setReduced(e.matches);
    mql.addEventListener("change", onChange);
    return () => mql.removeEventListener("change", onChange);
  }, []);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let width = 0;
    let height = 0;
    let nodes: Node[] = [];
    let raf = 0;
    let pulse = 0;
    const dpr = Math.min(window.devicePixelRatio || 1, 2);

    const cssVar = (name: string, fallback: string) =>
      getComputedStyle(document.documentElement).getPropertyValue(name).trim() || fallback;

    const setup = () => {
      const rect = canvas.getBoundingClientRect();
      width = Math.max(rect.width, 1);
      height = Math.max(rect.height, 1);
      canvas.width = width * dpr;
      canvas.height = height * dpr;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);

      const count = width < 420 ? 16 : width < 700 ? 24 : 34;
      nodes = Array.from({ length: count }, () => ({
        x: Math.random() * width,
        y: Math.random() * height,
        vx: (Math.random() - 0.5) * 0.16,
        vy: (Math.random() - 0.5) * 0.16,
        r: Math.random() * 1.6 + 1,
      }));
    };

    const draw = () => {
      const cyan = cssVar("--accent-cyan", "#22d3ee");
      const violet = cssVar("--accent-violet", "#8b5cf6");
      const linkDist = width < 480 ? 96 : 132;

      ctx.clearRect(0, 0, width, height);
      pulse += 0.004;

      for (let i = 0; i < nodes.length; i++) {
        const a = nodes[i];
        if (!reduced) {
          a.x += a.vx;
          a.y += a.vy;
          if (a.x < 0 || a.x > width) a.vx *= -1;
          if (a.y < 0 || a.y > height) a.vy *= -1;
        }

        for (let j = i + 1; j < nodes.length; j++) {
          const b = nodes[j];
          const dx = a.x - b.x;
          const dy = a.y - b.y;
          const d = Math.hypot(dx, dy);
          if (d > linkDist) continue;
          const alpha = (1 - d / linkDist) * 0.3;
          const grad = ctx.createLinearGradient(a.x, a.y, b.x, b.y);
          grad.addColorStop(0, cyan);
          grad.addColorStop(1, violet);
          ctx.globalAlpha = alpha;
          ctx.strokeStyle = grad;
          ctx.lineWidth = 0.7;
          ctx.beginPath();
          ctx.moveTo(a.x, a.y);
          ctx.lineTo(b.x, b.y);
          ctx.stroke();

          if (!reduced && alpha > 0.16) {
            // flowing data packet along the edge
            const t = ((pulse * 60 + i * 13 + j * 7) % 100) / 100;
            ctx.globalAlpha = alpha * 2.2;
            ctx.fillStyle = cyan;
            ctx.beginPath();
            ctx.arc(a.x + (b.x - a.x) * t, a.y + (b.y - a.y) * t, 1.1, 0, Math.PI * 2);
            ctx.fill();
          }
        }
      }

      for (const n of nodes) {
        ctx.globalAlpha = 0.85;
        ctx.fillStyle = violet;
        ctx.shadowColor = cyan;
        ctx.shadowBlur = 8;
        ctx.beginPath();
        ctx.arc(n.x, n.y, n.r, 0, Math.PI * 2);
        ctx.fill();
        ctx.shadowBlur = 0;
      }
      ctx.globalAlpha = 1;

      if (!reduced) raf = requestAnimationFrame(draw);
    };

    setup();
    draw();

    const ro = new ResizeObserver(() => {
      setup();
      if (reduced) draw();
    });
    ro.observe(canvas);

    return () => {
      cancelAnimationFrame(raf);
      ro.disconnect();
    };
  }, [reduced]);

  return (
    <canvas
      ref={canvasRef}
      aria-hidden="true"
      className="size-full"
      style={{ display: "block" }}
    />
  );
}
