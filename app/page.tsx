import ContactForm from "./components/ContactForm";

const services = [
  {
    title: "Product UI",
    description: "Designing polished interfaces that feel intuitive on desktop and mobile.",
  },
  {
    title: "Performance",
    description: "Improving load times, accessibility, and Core Web Vitals for modern sites.",
  },
  {
    title: "Landing Pages",
    description: "Building conversion-focused landing pages with strong visual hierarchy.",
  },
];

const skills = [
  {
    category: "Front-end",
    items: ["Next.js", "React", "TypeScript", "Tailwind CSS", "HTML", "CSS"],
  },
  {
    category: "Design",
    items: ["Responsive layouts", "Accessibility", "UI systems", "Motion", "Typography"],
  },
  {
    category: "Performance",
    items: ["Lighthouse optimization", "Web Vitals", "SSR/SSG", "Caching", "Progressive enhancement"],
  },
];

const highlights = [
  {
    title: "Fast-loading builds",
    description: "Optimized for real users with performance-first architecture and lightweight interactions.",
  },
  {
    title: "Accessible interfaces",
    description: "Semantic markup, keyboard support, and contrast-aware design for everyone.",
  },
  {
    title: "Design-driven code",
    description: "Reusable components and consistent patterns that scale well over time.",
  },
];

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
  {
    title: "Component Library",
    description: "Created reusable UI components for consistent, maintainable design systems.",
    tech: ["React", "Storybook", "Tailwind CSS"],
  },
];

const caseStudies = [
  {
    title: "Subscription Platform",
    description: "Revamped onboarding flows, improved conversion clarity, and reduced drop-off in trial signup.",
    outcome: "+28% conversions",
  },
  {
    title: "E-commerce Relaunch",
    description: "Delivered a faster storefront experience with improved product filtering and checkout accessibility.",
    outcome: "+18% engagement",
  },
  {
    title: "Brand Refresh",
    description: "Built a cohesive digital identity with reusable UI patterns and refreshed visual language.",
    outcome: "Stronger brand consistency",
  },
];

const experience = [
  {
    role: "Frontend Developer",
    company: "Acme Studios",
    period: "2024 – Present",
    detail: "Delivered accessible web experiences and modernized a suite of client-facing applications.",
  },
  {
    role: "UI Developer",
    company: "Bright Labs",
    period: "2022 – 2024",
    detail: "Built responsive landing pages and design systems for early-stage SaaS brands.",
  },
];

const testimonials = [
  {
    quote: "Dhananjay delivered a fast, polished experience and made the whole process effortless.",
    author: "Anjali Patel, Product Lead",
  },
  {
    quote: "The site looks great on every device, and performance improved dramatically.",
    author: "Rohan Verma, Growth Manager",
  },
];

export default function Home() {
  return (
    <main className="min-h-screen bg-slate-950 text-slate-100">
      <header className="border-b border-slate-800 px-6 py-4 sm:px-10">
        <div className="mx-auto flex max-w-5xl items-center justify-between gap-6">
          <h1 className="text-xl font-semibold text-cyan-400">Dhananjay Singh</h1>
          <nav aria-label="Primary navigation" className="flex flex-wrap items-center gap-4 text-sm text-slate-300">
            <a href="#about" className="transition-colors hover:text-cyan-400">About</a>
            <a href="#skills" className="transition-colors hover:text-cyan-400">Skills</a>
            <a href="#projects" className="transition-colors hover:text-cyan-400">Projects</a>
            <a href="#experience" className="transition-colors hover:text-cyan-400">Experience</a>
            <a href="#testimonials" className="transition-colors hover:text-cyan-400">Testimonials</a>
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

          <section className="grid gap-4 sm:grid-cols-3">
            {services.map((service) => (
              <article key={service.title} className="rounded-3xl border border-slate-800 bg-slate-900/80 p-6 text-slate-300 shadow-lg shadow-slate-950/20">
                <h2 className="mb-3 text-lg font-semibold text-white">{service.title}</h2>
                <p className="text-sm leading-6">{service.description}</p>
              </article>
            ))}
          </section>

          <section id="about" className="rounded-3xl border border-slate-800 bg-slate-900/80 p-8 shadow-lg shadow-slate-900/20">
            <div className="flex flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">
              <div>
                <h2 className="text-2xl font-semibold text-white">About</h2>
                <p className="mt-3 max-w-2xl text-slate-300">
                  I’m a web developer who values thoughtful interaction, polished UI, and strong performance. I enjoy turning concepts into responsive interfaces that feel effortless on every device.
                </p>
                <ul className="mt-6 grid gap-3 text-sm text-slate-300 sm:grid-cols-2">
                  <li>Accessible, inclusive experiences</li>
                  <li>Performance-first front-end architecture</li>
                  <li>Modular design systems and components</li>
                  <li>Rapid prototyping with clean code</li>
                </ul>
              </div>
              <span className="rounded-full border border-cyan-400 px-4 py-2 text-sm text-cyan-300">Available for collaboration</span>
            </div>
          </section>

          <section className="grid gap-4 sm:grid-cols-3">
            {highlights.map((item) => (
              <article key={item.title} className="rounded-3xl border border-slate-800 bg-slate-900/80 p-6 text-slate-300 shadow-lg shadow-slate-950/20">
                <h3 className="mb-3 text-lg font-semibold text-white">{item.title}</h3>
                <p className="text-sm leading-6">{item.description}</p>
              </article>
            ))}
          </section>

          <section id="skills" className="rounded-3xl border border-slate-800 bg-slate-900/80 p-8">
            <div className="space-y-6">
              <div>
                <h2 className="text-2xl font-semibold text-white">Skills</h2>
                <p className="mt-3 max-w-2xl text-slate-300">
                  I blend fast front-end development with a polished design approach, delivering solutions that work beautifully and load quickly.
                </p>
              </div>
              <div className="grid gap-4 sm:grid-cols-3">
                {skills.map((skill) => (
                  <div key={skill.category} className="rounded-3xl border border-slate-700 bg-slate-950/50 p-6">
                    <h3 className="text-lg font-semibold text-white">{skill.category}</h3>
                    <div className="mt-4 flex flex-wrap gap-2">
                      {skill.items.map((item) => (
                        <span key={item} className="rounded-full bg-slate-800 px-3 py-1 text-xs text-slate-300">
                          {item}
                        </span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>

          <section id="experience" className="rounded-3xl border border-slate-800 bg-slate-900/80 p-8">
            <div className="space-y-6">
              <div>
                <h2 className="text-2xl font-semibold text-white">Experience</h2>
                <p className="mt-3 max-w-2xl text-slate-300">
                  Proven experience delivering production-ready interfaces, performance improvements, and accessible design systems.
                </p>
              </div>
              <div className="grid gap-4 sm:grid-cols-2">
                {experience.map((item) => (
                  <article key={item.role} className="rounded-3xl border border-slate-700 bg-slate-950/50 p-6">
                    <div className="flex items-center justify-between gap-4 text-slate-300">
                      <div>
                        <p className="text-sm uppercase tracking-[0.24em] text-cyan-400">{item.company}</p>
                        <h3 className="mt-2 text-lg font-semibold text-white">{item.role}</h3>
                      </div>
                      <p className="text-sm text-slate-500">{item.period}</p>
                    </div>
                    <p className="mt-4 text-slate-300">{item.detail}</p>
                  </article>
                ))}
              </div>
            </div>
          </section>

          <section className="grid gap-6 xl:grid-cols-[1.4fr_0.6fr]">
            <article id="projects" className="rounded-3xl border border-slate-800 bg-slate-900/80 p-6">
              <h3 className="mb-4 text-lg font-semibold text-white">Projects</h3>
              <div className="space-y-4">
                {projects.map((project) => (
                  <div key={project.title} className="rounded-3xl border border-slate-700 bg-slate-950/50 p-5">
                    <div className="flex items-center justify-between gap-4">
                      <h4 className="text-cyan-400 font-medium">{project.title}</h4>
                      <span className="rounded-full bg-slate-800 px-3 py-1 text-xs uppercase tracking-[0.2em] text-slate-400">Featured</span>
                    </div>
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

            <article className="rounded-3xl border border-slate-800 bg-slate-900/80 p-6">
              <h3 className="mb-4 text-lg font-semibold text-white">Case Studies</h3>
              <div className="space-y-4">
                {caseStudies.map((item) => (
                  <div key={item.title} className="rounded-3xl border border-slate-700 bg-slate-950/50 p-5 text-slate-300">
                    <div className="flex items-center justify-between gap-4">
                      <h4 className="text-cyan-400 font-medium">{item.title}</h4>
                      <span className="rounded-full bg-slate-800 px-3 py-1 text-xs uppercase tracking-[0.2em] text-slate-400">
                        {item.outcome}
                      </span>
                    </div>
                    <p className="mt-2 text-slate-300 text-sm">{item.description}</p>
                  </div>
                ))}
              </div>
            </article>
          </section>

          <section id="testimonials" className="rounded-3xl border border-slate-800 bg-slate-900/80 p-8">
            <div className="space-y-6">
              <div>
                <h2 className="text-2xl font-semibold text-white">Testimonials</h2>
                <p className="mt-3 max-w-2xl text-slate-300">
                  What clients say about working together and the results delivered.
                </p>
              </div>
              <div className="grid gap-4 sm:grid-cols-2">
                {testimonials.map((item) => (
                  <article key={item.author} className="rounded-3xl border border-slate-700 bg-slate-950/50 p-6 text-slate-300">
                    <p className="text-slate-100 text-sm leading-7">“{item.quote}”</p>
                    <p className="mt-4 text-sm font-semibold text-cyan-300">{item.author}</p>
                  </article>
                ))}
              </div>
            </div>
          </section>

          <section id="contact" className="rounded-3xl border border-slate-800 bg-slate-900/80 p-8">
            <div className="space-y-6">
              <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
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
              <ContactForm />
            </div>
          </section>
        </div>
      </div>

      <footer className="border-t border-slate-800 px-6 py-6 sm:px-10">
        <div className="mx-auto flex max-w-5xl flex-col gap-4 text-sm text-slate-500 sm:flex-row sm:items-center sm:justify-between">
          <p>© {new Date().getFullYear()} Dhananjay Singh. Built with Next.js and Tailwind CSS.</p>
          <div className="flex flex-wrap gap-4">
            <a href="#projects" className="transition hover:text-cyan-400">Projects</a>
            <a href="#experience" className="transition hover:text-cyan-400">Experience</a>
            <a href="#testimonials" className="transition hover:text-cyan-400">Testimonials</a>
            <a href="#about" className="transition hover:text-cyan-400">About</a>
            <a href="mailto:hello@dhananjaysingh.dev" className="transition hover:text-cyan-400">Email</a>
          </div>
        </div>
      </footer>
    </main>
  );
}
