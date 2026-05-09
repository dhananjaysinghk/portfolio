import Link from 'next/link';

export default function NotFound() {
  return (
    <main className="min-h-screen bg-slate-950 text-slate-100 flex items-center justify-center px-6">
      <div className="text-center space-y-6">
        <h1 className="text-6xl font-bold text-cyan-400">404</h1>
        <h2 className="text-2xl font-semibold">Page Not Found</h2>
        <p className="text-slate-300 max-w-md">
          The page you're looking for doesn't exist. Let's get you back to the portfolio.
        </p>
        <Link
          href="/"
          className="inline-block bg-cyan-400 text-slate-950 px-6 py-3 rounded-lg font-medium hover:bg-cyan-300 transition-colors"
        >
          Go Home
        </Link>
      </div>
    </main>
  );
}