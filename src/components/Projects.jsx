import { ExternalLink, Github } from "lucide-react";

const projects = [
  {
    title: "Motion Playground",
    description:
      "A collection of delightful micro-interactions built with Framer Motion and React.",
    tags: ["React", "Framer Motion", "Tailwind"],
    live: "#",
    repo: "#",
  },
  {
    title: "UI Components Kit",
    description:
      "A reusable set of accessible UI components following shadcn/ui patterns.",
    tags: ["TypeScript", "Radix", "Accessibility"],
    live: "#",
    repo: "#",
  },
  {
    title: "Dev Blog Engine",
    description:
      "Markdown-powered blog with MDX support, code highlighting, and custom shortcodes.",
    tags: ["MDX", "Vite", "Content"],
    live: "#",
    repo: "#",
  },
];

export default function Projects() {
  return (
    <section id="projects" className="py-16 md:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex items-end justify-between gap-4">
          <div>
            <h2 className="text-2xl md:text-3xl font-semibold tracking-tight">Featured Projects</h2>
            <p className="mt-2 text-black/70">A few things I’ve been building recently.</p>
          </div>
          <a
            href="#"
            className="hidden md:inline-flex items-center gap-2 rounded-lg border border-black/10 bg-white px-3.5 py-2 text-sm font-medium hover:bg-black/5 transition"
          >
            See all
          </a>
        </div>

        <div className="mt-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((p) => (
            <article
              key={p.title}
              className="group rounded-2xl border border-black/10 bg-white p-5 shadow-sm hover:shadow-md transition"
            >
              <div className="aspect-[16/10] w-full rounded-xl bg-gradient-to-br from-indigo-100 via-violet-100 to-fuchsia-100" />
              <h3 className="mt-4 text-lg font-semibold tracking-tight">{p.title}</h3>
              <p className="mt-1 text-sm text-black/70">{p.description}</p>
              <div className="mt-3 flex flex-wrap gap-1.5">
                {p.tags.map((t) => (
                  <span
                    key={t}
                    className="rounded-full border border-black/10 bg-white px-2.5 py-1 text-xs text-black/70"
                  >
                    {t}
                  </span>
                ))}
              </div>
              <div className="mt-4 flex items-center gap-2">
                <a
                  href={p.live}
                  className="inline-flex items-center gap-1.5 rounded-md bg-black text-white px-2.5 py-1.5 text-xs font-medium hover:shadow transition"
                >
                  <ExternalLink className="h-4 w-4" /> Live
                </a>
                <a
                  href={p.repo}
                  className="inline-flex items-center gap-1.5 rounded-md border border-black/10 bg-white px-2.5 py-1.5 text-xs font-medium hover:bg-black/5 transition"
                >
                  <Github className="h-4 w-4" /> Code
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
