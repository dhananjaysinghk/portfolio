export default function Home() {
  return (
    <main className="min-h-screen bg-slate-950 text-slate-100 px-6 py-10 sm:px-10">
      <div className="mx-auto max-w-4xl space-y-16">
        <section className="space-y-6">
          <p className="text-sm uppercase tracking-[0.3em] text-cyan-400">Hello, I'm Dhananjay Singh</p>
          <h1 className="text-4xl font-semibold sm:text-5xl">I build clean, minimal digital experiences.</h1>
          <p className="max-w-2xl text-slate-300 sm:text-lg">
            This portfolio is a simple starting point. I keep the design minimal so every day one improvement is easy and meaningful.
          </p>
        </section>

        <section className="rounded-3xl border border-slate-800 bg-slate-900/80 p-8 shadow-lg shadow-slate-900/20">
          <h2 className="mb-4 text-xl font-semibold text-white">About</h2>
          <p className="text-slate-300">
            I am a focused problem solver with a passion for web interfaces, performance and simple design. I use React and Tailwind to build fast portfolio sites that show my work clearly.
          </p>
        </section>

        <section className="grid gap-6 sm:grid-cols-2">
          <article className="rounded-3xl border border-slate-800 bg-slate-900/80 p-6">
            <h3 className="mb-3 text-lg font-semibold text-white">Skills</h3>
            <ul className="space-y-2 text-slate-300">
              <li>React</li>
              <li>Next.js</li>
              <li>Tailwind CSS</li>
              <li>JavaScript / TypeScript</li>
            </ul>
          </article>

          <article className="rounded-3xl border border-slate-800 bg-slate-900/80 p-6">
            <h3 className="mb-3 text-lg font-semibold text-white">Projects</h3>
            <p className="text-slate-300">
              Start with one project card and add a new project each time you improve. Keep entries short and focused on what you built.
            </p>
          </article>
        </section>

        <section className="rounded-3xl border border-slate-800 bg-slate-900/80 p-8">
          <h2 className="mb-4 text-xl font-semibold text-white">Contact</h2>
          <p className="text-slate-300">Send a message to connect, collaborate, or share new ideas.</p>
        </section>
      </div>
    </main>
  );
}
