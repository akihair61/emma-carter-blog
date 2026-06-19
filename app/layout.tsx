import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Emma Carter — Beauty & Travel in Southeast Asia",
  description: "A London girl living in Bangkok, writing honestly about beauty, hair, and finding the good stuff in Southeast Asia.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="min-h-screen" style={{ backgroundColor: "#fdfcf9" }}>
        <header className="border-b border-stone-200 py-5 px-6">
          <div className="max-w-2xl mx-auto flex items-center justify-between">
            <a href="/" className="text-xl font-bold tracking-tight text-stone-800" style={{ fontFamily: "Georgia, serif" }}>
              Emma Carter
            </a>
            <nav className="flex gap-6 text-sm text-stone-500">
              <a href="/" className="hover:text-stone-800 transition-colors">Home</a>
              <a href="/blog" className="hover:text-stone-800 transition-colors">Blog</a>
              <a href="/about" className="hover:text-stone-800 transition-colors">About</a>
            </nav>
          </div>
        </header>
        <main className="max-w-2xl mx-auto px-6 py-12">
          {children}
        </main>
        <footer className="border-t border-stone-200 py-8 px-6 mt-16">
          <div className="max-w-2xl mx-auto text-center text-sm text-stone-400">
            © {new Date().getFullYear()} Emma Carter · Bangkok, Thailand
          </div>
        </footer>
      </body>
    </html>
  );
}
