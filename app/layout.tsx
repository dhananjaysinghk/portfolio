import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Dhananjay Singh | Portfolio",
  description: "Portfolio website for Dhananjay Singh",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
