import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Projects from "./components/Projects";
import BlogPreview from "./components/BlogPreview";

function App() {
  return (
    <div className="min-h-screen bg-white text-black">
      <Navbar />
      <Hero />

      <main>
        <Projects />
        <BlogPreview />
      </main>

      <footer id="contact" className="border-t border-black/5 py-10">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-sm text-black/60">© {new Date().getFullYear()} Your Name. All rights reserved.</p>
            <p className="text-sm text-black/60">Available for freelance and full‑time roles.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
