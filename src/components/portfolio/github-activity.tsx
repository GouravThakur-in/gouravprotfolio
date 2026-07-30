import { motion } from "motion/react";
import { Github, Star, GitFork, ExternalLink } from "lucide-react";
import { useEffect, useState } from "react";
import { profile } from "@/data/portfolio";
import { SectionHeading } from "./section-heading";
import { Reveal } from "./motion-primitives";

type Repo = {
  id: number;
  name: string;
  description: string | null;
  html_url: string;
  language: string | null;
  stargazers_count: number;
  forks_count: number;
};

export function GithubActivity() {
  const [repos, setRepos] = useState<Repo[]>([]);
  const [failed, setFailed] = useState(false);

  useEffect(() => {
    let cancelled = false;
    fetch(
      `https://api.github.com/users/${profile.githubUser}/repos?sort=updated&per_page=6`,
    )
      .then((r) => (r.ok ? r.json() : Promise.reject(new Error("gh"))))
      .then((data: Repo[]) => !cancelled && setRepos(data.slice(0, 6)))
      .catch(() => !cancelled && setFailed(true));
    return () => {
      cancelled = true;
    };
  }, []);

  return (
    <section id="github" className="section-shell">
      <SectionHeading
        eyebrow="Open source"
        title="Coding activity, live from GitHub."
        description="Contribution graph, language mix and the repositories I've pushed most recently."
      />

      <Reveal delay={0.08}>
        <div className="mt-12 grid gap-4 lg:grid-cols-[1.35fr_1fr]">
          <div className="glass overflow-hidden rounded-3xl p-5">
            <p className="mb-4 font-mono text-xs tracking-widest text-muted-foreground uppercase">
              Contribution graph
            </p>
            <img
              src={`https://ghchart.rshah.org/5ad4e6/${profile.githubUser}`}
              alt={`GitHub contribution chart for ${profile.name}`}
              loading="lazy"
              className="w-full"
            />
          </div>
          <div className="glass overflow-hidden rounded-3xl p-5">
            <p className="mb-4 font-mono text-xs tracking-widest text-muted-foreground uppercase">
              Top languages
            </p>
            <img
              src={`https://github-readme-stats.vercel.app/api/top-langs/?username=${profile.githubUser}&layout=compact&hide_border=true&bg_color=00000000&title_color=5ad4e6&text_color=b9c2cc`}
              alt="Most used programming languages on GitHub"
              loading="lazy"
              className="w-full"
            />
          </div>
        </div>
      </Reveal>

      <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {repos.map((r, i) => (
          <motion.a
            key={r.id}
            href={r.html_url}
            target="_blank"
            rel="noreferrer"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: i * 0.06 }}
            whileHover={{ y: -6 }}
            className="glass group flex flex-col rounded-2xl p-5"
          >
            <div className="flex items-center justify-between">
              <Github className="size-4 text-cyan" />
              <ExternalLink className="size-3.5 text-muted-foreground opacity-0 transition-opacity group-hover:opacity-100" />
            </div>
            <h3 className="mt-4 truncate font-semibold">{r.name}</h3>
            <p className="mt-1.5 line-clamp-2 text-xs leading-relaxed text-muted-foreground">
              {r.description ?? "No description provided."}
            </p>
            <div className="mt-4 flex items-center gap-4 font-mono text-[0.68rem] text-muted-foreground">
              {r.language && <span>{r.language}</span>}
              <span className="inline-flex items-center gap-1">
                <Star className="size-3" /> {r.stargazers_count}
              </span>
              <span className="inline-flex items-center gap-1">
                <GitFork className="size-3" /> {r.forks_count}
              </span>
            </div>
          </motion.a>
        ))}
      </div>

      {failed && (
        <p className="mt-6 text-sm text-muted-foreground">
          Repository list is rate-limited right now —{" "}
          <a href={profile.github} target="_blank" rel="noreferrer" className="text-cyan underline">
            browse them on GitHub
          </a>
          .
        </p>
      )}
    </section>
  );
}
