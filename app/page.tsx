const projects = [
  {
    title: "Portfolio Website",
    description: "A clean, minimal portfolio built with Next.js and Tailwind CSS. Responsive, fast, and easy to extend.",
    tech: ["Next.js", "React", "Tailwind CSS"],
  },
  {
    title: "Landing Page Redesign",
    description: "Modernized a product landing page with improved typography, accessibility, and mobile-first layout.",
    tech: ["React", "TypeScript", "Tailwind CSS"],
  },
  {
    title: "Performance Audit",
    description: "Optimized a web app for faster load times, better Lighthouse scores, and smoother interactions.",
    tech: ["Web Vitals", "Next.js", "CSS"],
  },
];

export default function Home() {
  return (
    <main className="min-h-screen bg-slate-950 text-slate-100">
      <header className="border-b border-slate-800 px-6 py-4 sm:px-10">
        <div className="mx-auto flex max-w-5xl items-center justify-between gap-6">
          <h1 className="text-xl font-semibold text-cyan-400">Dhananjay Singh</h1>
          <nav className="flex flex-wrap items-center gap-4 text-sm text-slate-300">
            <a href="#about" className="transition-colors hover:text-cyan-400">About</a>
            <a href="#projects" className="transition-colors hover:text-cyan-400">Projects</a>
            <a href="#contact" className="transition-colors hover:text-cyan-400">Contact</a>
          </nav>
        </div>
      </header>

      <div className="px-6 py-10 sm:px-10">
        <div className="mx-auto flex max-w-5xl flex-col gap-16">
          <section className="space-y-6">
            <p className="text-sm uppercase tracking-[0.3em] text-cyan-400">Hi, I’m Dhananjay Singh</p>
            <h1 className="max-w-3xl text-4xl font-semibold leading-tight sm:text-5xl">
              I craft clean, fast web experiences for modern brands.
            </h1>
            <p className="max-w-2xl text-slate-300 sm:text-lg">
              I build minimal, accessible websites with a strong focus on performance and clarity. This portfolio highlights the work, tools, and direction I bring to every project.
            </p>
            <div className="flex flex-wrap gap-4">
              <a
                href="#contact"
                className="inline-flex items-center justify-center rounded-full bg-cyan-400 px-6 py-3 text-sm font-semibold text-slate-950 transition hover:bg-cyan-300"
              >
                Let’s connect
              </a>
              <a
                href="#projects"
                className="inline-flex items-center justify-center rounded-full border border-slate-700 px-6 py-3 text-sm font-semibold text-slate-200 transition hover:border-cyan-400 hover:text-cyan-400"
              >
                View projects
              </a>
            </div>
          </section>

          <section id="about" className="rounded-3xl border border-slate-800 bg-slate-900/80 p-8 shadow-lg shadow-slate-900/20">
            <div className="flex flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">
              <div>
                <h2 className="text-2xl font-semibold text-white">About</h2>
                <p className="mt-3 max-w-2xl text-slate-300">
                  I’m a web developer who values thoughtful interaction, polished UI, and strong performance. I enjoy turning concepts into responsive interfaces that feel effortless on every device.
                </p>
              </div>
              <span className="rounded-full border border-cyan-400 px-4 py-2 text-sm text-cyan-300">Available for collaboration</span>
            </div>
          </section>

          <section className="grid gap-6 lg:grid-cols-[1.1fr_0.9fr]">
            <article className="rounded-3xl border border-slate-800 bg-slate-900/80 p-6">
              <h3 className="mb-4 text-lg font-semibold text-white">Skills</h3>
              <ul className="grid gap-2 text-slate-300 sm:grid-cols-2">
                <li>React</li>
                <li>Next.js</li>
                <li>Tailwind CSS</li>
                <li>TypeScript</li>
                <li>Responsive design</li>
                <li>Performance optimization</li>
              </ul>
            </article>

            <article id="projects" className="rounded-3xl border border-slate-800 bg-slate-900/80 p-6">
              <h3 className="mb-4 text-lg font-semibold text-white">Projects</h3>
              <div className="space-y-4">
                {projects.map((project) => (
                  <div key={project.title} className="rounded-3xl border border-slate-700 bg-slate-950/50 p-5">
                    <h4 className="text-cyan-400 font-medium">{project.title}</h4>
                    <p className="mt-2 text-slate-300 text-sm">{project.description}</p>
                    <div className="mt-3 flex flex-wrap gap-2">
                      {project.tech.map((item) => (
                        <span key={item} className="text-xs bg-slate-800 px-2 py-1 rounded text-slate-300">
                          {item}
                        </span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </article>
          </section>

          <section id="contact" className="rounded-3xl border border-slate-800 bg-slate-900/80 p-8">
            <div className="flex flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">
              <div>
                <h2 className="text-2xl font-semibold text-white">Contact</h2>
                <p className="mt-3 max-w-2xl text-slate-300">
                  Interested in working together? Send a message to discuss ideas, projects, or freelance opportunities.
                </p>
              </div>
              <a
                href="mailto:hello@dhananjaysingh.dev"
                className="inline-flex items-center justify-center rounded-full bg-cyan-400 px-6 py-3 text-sm font-semibold text-slate-950 transition hover:bg-cyan-300"
              >
                Email me
              </a>
            </div>
          </section>
        </div>
      </div>
    </main>
  );
}
