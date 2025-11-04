import { ArrowRight } from "lucide-react";

const posts = [
  {
    title: "Animating with Intent: Micro-interactions that Matter",
    excerpt:
      "A practical guide to adding motion that improves usability without getting in the way.",
    date: "Oct 3, 2025",
    tags: ["UX", "Animation", "Framer"],
  },
  {
    title: "Scaling a React Design System",
    excerpt:
      "Lessons learned while building a reusable component library with strong DX.",
    date: "Sep 20, 2025",
    tags: ["Design Systems", "React", "DX"],
  },
  {
    title: "Performance First: Ship Faster UIs",
    excerpt:
      "Profiling strategies and optimization techniques that actually move the needle.",
    date: "Aug 30, 2025",
    tags: ["Performance", "Vite", "Best Practices"],
  },
];

export default function BlogPreview() {
  return (
    <section id="blog" className="py-16 md:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex items-end justify-between gap-4">
          <div>
            <h2 className="text-2xl md:text-3xl font-semibold tracking-tight">From the Blog</h2>
            <p className="mt-2 text-black/70">Thoughts on frontend, motion, and product design.</p>
          </div>
          <a
            href="#"
            className="hidden md:inline-flex items-center gap-2 rounded-lg border border-black/10 bg-white px-3.5 py-2 text-sm font-medium hover:bg-black/5 transition"
          >
            View all
          </a>
        </div>

        <div className="mt-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {posts.map((post) => (
            <article
              key={post.title}
              className="group rounded-2xl border border-black/10 bg-white p-5 shadow-sm hover:shadow-md transition"
            >
              <div className="flex items-center justify-between">
                <span className="text-xs font-medium text-black/60">{post.date}</span>
                <div className="flex gap-1.5">
                  {post.tags.map((t) => (
                    <span key={t} className="rounded-full bg-black/5 px-2 py-0.5 text-[10px] text-black/70">
                      {t}
                    </span>
                  ))}
                </div>
              </div>
              <h3 className="mt-3 text-lg font-semibold tracking-tight">{post.title}</h3>
              <p className="mt-1 text-sm text-black/70">{post.excerpt}</p>
              <a
                href="#"
                className="mt-4 inline-flex items-center gap-1 text-sm font-medium text-indigo-600 hover:text-indigo-700"
              >
                Read post <ArrowRight className="h-4 w-4" />
              </a>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
