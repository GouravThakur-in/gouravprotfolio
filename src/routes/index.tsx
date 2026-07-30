import { createFileRoute } from "@tanstack/react-router";
import { Navbar } from "@/components/portfolio/navbar";
import { Hero } from "@/components/portfolio/hero";
import { About } from "@/components/portfolio/about";
import { Experience } from "@/components/portfolio/experience";
import { Skills } from "@/components/portfolio/skills";
import { Projects } from "@/components/portfolio/projects";
import { GithubActivity } from "@/components/portfolio/github-activity";
import { Education } from "@/components/portfolio/education";
import { Contact } from "@/components/portfolio/contact";
import { Footer } from "@/components/portfolio/footer";
import { LoadingScreen } from "@/components/portfolio/loading-screen";
import { profile } from "@/data/portfolio";

const title = "Gourav Thakur — AI & Machine Learning Engineer";
const description =
  "Portfolio of Gourav Thakur, AI & Machine Learning Engineer building end-to-end ML pipelines, deep learning models and FastAPI backends with Python, TensorFlow and Scikit-Learn.";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "profile" },
      { name: "twitter:card", content: "summary_large_image" },
      {
        name: "keywords",
        content:
          "AI Engineer, Machine Learning Engineer, Python Developer, FastAPI, TensorFlow, Scikit-Learn, Gourav Thakur",
      },
    ],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Person",
          name: profile.name,
          jobTitle: profile.role,
          email: `mailto:${profile.email}`,
          telephone: profile.phone,
          url: profile.linkedin,
          sameAs: [profile.github, profile.linkedin],
          alumniOf: "Sardar Patel University, Mandi",
          knowsAbout: ["Machine Learning", "Deep Learning", "NLP", "Python", "FastAPI"],
        }),
      },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <>
      <LoadingScreen />
      <Navbar />
      <main>
        <Hero />
        <About />
        <Experience />
        <Skills />
        <Projects />
        <GithubActivity />
        <Education />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
