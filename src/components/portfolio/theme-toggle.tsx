import { useEffect, useState } from "react";
import { Moon, Sun } from "lucide-react";

export type Theme = "dark" | "light";

const STORAGE_KEY = "portfolio-theme";

function applyTheme(theme: Theme) {
  const root = document.documentElement;
  root.classList.toggle("light", theme === "light");
  root.classList.toggle("dark", theme === "dark");
  root.style.colorScheme = theme;
}

export function ThemeToggle() {
  const [theme, setTheme] = useState<Theme>("dark");

  useEffect(() => {
    const stored = localStorage.getItem(STORAGE_KEY) as Theme | null;
    const initial: Theme =
      stored ?? (document.documentElement.classList.contains("light") ? "light" : "dark");
    setTheme(initial);
    applyTheme(initial);

    // Follow system theme changes only when the user has no saved preference.
    const mql = window.matchMedia("(prefers-color-scheme: light)");
    const onSystemChange = (e: MediaQueryListEvent) => {
      if (localStorage.getItem(STORAGE_KEY)) return;
      const next: Theme = e.matches ? "light" : "dark";
      setTheme(next);
      applyTheme(next);
    };
    mql.addEventListener("change", onSystemChange);
    return () => mql.removeEventListener("change", onSystemChange);
  }, []);

  const toggle = () => {
    const next: Theme = theme === "dark" ? "light" : "dark";
    setTheme(next);
    applyTheme(next);
    localStorage.setItem(STORAGE_KEY, next);
  };

  const isDark = theme === "dark";

  return (
    <button
      type="button"
      onClick={toggle}
      aria-label={isDark ? "Switch to light mode" : "Switch to dark mode"}
      title={isDark ? "Light mode" : "Dark mode"}
      className="relative grid size-9 place-items-center overflow-hidden rounded-full border border-border bg-secondary/60 text-foreground transition-colors duration-300 hover:bg-secondary"
    >
      <Sun
        className={`absolute size-4 transition-all duration-300 ${
          isDark ? "translate-y-4 rotate-90 opacity-0" : "translate-y-0 rotate-0 opacity-100"
        }`}
      />
      <Moon
        className={`absolute size-4 transition-all duration-300 ${
          isDark ? "translate-y-0 rotate-0 opacity-100" : "-translate-y-4 -rotate-90 opacity-0"
        }`}
      />
    </button>
  );
}

/** Inline script that applies the saved or system theme before paint (no flicker). */
export const themeInitScript = `(function(){try{var t=localStorage.getItem("${STORAGE_KEY}");if(t!=="light"&&t!=="dark"){t=window.matchMedia("(prefers-color-scheme: light)").matches?"light":"dark";}var r=document.documentElement;r.classList.toggle("light",t==="light");r.classList.toggle("dark",t==="dark");r.style.colorScheme=t;}catch(e){}})();`;
