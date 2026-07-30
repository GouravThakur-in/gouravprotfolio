import { Reveal } from "./motion-primitives";

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = "left",
}: {
  eyebrow: string;
  title: string;
  description?: string;
  align?: "left" | "center";
}) {
  return (
    <Reveal className={align === "center" ? "text-center" : ""}>
      <div
        className={`flex items-center gap-3 ${align === "center" ? "justify-center" : ""}`}
      >
        <span className="h-px w-8" style={{ background: "var(--accent-cyan)" }} />
        <span className="font-mono text-xs tracking-[0.25em] text-cyan uppercase">
          {eyebrow}
        </span>
      </div>
      <h2 className="mt-4 text-[clamp(2rem,4.5vw,3.25rem)] leading-[1.05] font-semibold">
        {title}
      </h2>
      {description && (
        <p
          className={`mt-4 max-w-2xl text-base leading-relaxed text-muted-foreground ${
            align === "center" ? "mx-auto" : ""
          }`}
        >
          {description}
        </p>
      )}
    </Reveal>
  );
}
