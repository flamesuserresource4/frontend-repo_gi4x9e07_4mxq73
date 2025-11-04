import { Github, Linkedin, Mail } from "lucide-react";

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 backdrop-blur supports-[backdrop-filter]:bg-white/60 bg-white/50 border-b border-black/5">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        <a href="#home" className="flex items-center gap-2">
          <div className="h-8 w-8 rounded-lg bg-gradient-to-br from-indigo-500 via-violet-500 to-fuchsia-500" />
          <span className="font-semibold tracking-tight">Your Name</span>
        </a>
        <nav className="hidden md:flex items-center gap-6 text-sm">
          <a href="#projects" className="text-black/70 hover:text-black transition">Projects</a>
          <a href="#blog" className="text-black/70 hover:text-black transition">Blog</a>
          <a href="#contact" className="text-black/70 hover:text-black transition">Contact</a>
        </nav>
        <div className="flex items-center gap-3">
          <a aria-label="GitHub" href="https://github.com" target="_blank" rel="noreferrer" className="p-2 rounded-md hover:bg-black/5">
            <Github className="h-5 w-5" />
          </a>
          <a aria-label="LinkedIn" href="https://linkedin.com" target="_blank" rel="noreferrer" className="p-2 rounded-md hover:bg-black/5">
            <Linkedin className="h-5 w-5" />
          </a>
          <a aria-label="Email" href="mailto:hello@example.com" className="p-2 rounded-md hover:bg-black/5">
            <Mail className="h-5 w-5" />
          </a>
        </div>
      </div>
    </header>
  );
}
