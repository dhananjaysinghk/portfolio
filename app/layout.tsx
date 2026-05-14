import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Dhananjay Singh | Portfolio",
  description: "Portfolio website for Dhananjay Singh",
  themeColor: "#0891b2",
  openGraph: {
    title: "Dhananjay Singh | Portfolio",
    description: "A clean, minimal portfolio for a modern web developer.",
    type: "website",
    locale: "en_US",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="min-h-screen bg-slate-950 text-slate-100">{children}</body>
    </html>
  );
}
