import Spline from "@splinetool/react-spline";

export default function Hero() {
  return (
    <section id="home" className="relative overflow-hidden">
      <div className="relative h-[78vh] md:h-[84vh]">
        <div className="absolute inset-0">
          <Spline
            scene="https://prod.spline.design/VJLoxp84lCdVfdZu/scene.splinecode"
            style={{ width: "100%", height: "100%" }}
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-b from-white/30 via-white/40 to-white pointer-events-none" />
        <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 h-full flex items-center">
          <div className="max-w-2xl">
            <p className="inline-flex items-center rounded-full border border-black/10 bg-white/60 px-3 py-1 text-xs font-medium text-black/70 shadow-sm backdrop-blur">
              Frontend Developer · React · TypeScript · UI/UX
            </p>
            <h1 className="mt-4 text-4xl md:text-6xl font-semibold tracking-tight leading-[1.1]">
              Building playful, performant interfaces for the modern web
            </h1>
            <p className="mt-4 text-base md:text-lg text-black/70">
              I craft interactive experiences with a focus on accessibility, animations, and clean component architecture.
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              <a href="#projects" className="inline-flex items-center justify-center rounded-lg bg-black text-white px-4 py-2.5 text-sm font-medium shadow hover:shadow-md transition">
                View Projects
              </a>
              <a href="#blog" className="inline-flex items-center justify-center rounded-lg border border-black/10 bg-white px-4 py-2.5 text-sm font-medium hover:bg-black/5 transition">
                Read the Blog
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
