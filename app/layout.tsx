import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Emma Carter — Beauty & Travel in Southeast Asia",
  description: "A London girl living in Bangkok, writing honestly about beauty, hair, and finding the good stuff in Southeast Asia.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        {/* Google Analytics */}
        <script async src="https://www.googletagmanager.com/gtag/js?id=G-EE57MSR3MR"></script>
        <script dangerouslySetInnerHTML={{ __html: `
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', 'G-EE57MSR3MR');
        `}} />
      </head>
      <body style={{ backgroundColor: "#faf9f7" }}>
        {/* Header */}
        <header style={{ borderBottom: "1px solid #e8e4df" }} className="bg-white sticky top-0 z-50">
          <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
            <a href="/emma-carter-blog/" className="font-serif text-2xl font-bold tracking-tight text-stone-900">
              Emma Carter
            </a>
            <nav className="flex gap-8 text-sm font-light tracking-wider uppercase text-stone-500">
              <a href="/emma-carter-blog/" className="hover:text-stone-900 transition-colors">Home</a>
              <a href="/emma-carter-blog/blog" className="hover:text-stone-900 transition-colors">Blog</a>
              <a href="/emma-carter-blog/about" className="hover:text-stone-900 transition-colors">About</a>
            </nav>
          </div>
        </header>

        <main>{children}</main>

        {/* Footer */}
        <footer style={{ borderTop: "1px solid #e8e4df", backgroundColor: "#111" }} className="mt-24 py-12 px-6">
          <div className="max-w-6xl mx-auto text-center">
            <p className="font-serif text-2xl text-white mb-3">Emma Carter</p>
            <p className="text-stone-400 text-sm font-light">Beauty · Travel · Bangkok</p>
            <p className="text-stone-600 text-xs mt-6">© {new Date().getFullYear()} Emma Carter</p>
          </div>
        </footer>
      </body>
    </html>
  );
}
