import { posts } from "@/lib/posts";
import Link from "next/link";

export default function Home() {
  const recent = posts.slice(0, 3);

  return (
    <div>
      {/* Hero */}
      <div className="mb-14 pb-10 border-b border-stone-200">
        <p className="text-xs uppercase tracking-widest text-stone-400 mb-3">Beauty · Travel · Bangkok</p>
        <h1 className="text-4xl font-bold text-stone-900 mb-5 leading-tight" style={{ fontFamily: "Georgia, serif" }}>
          Hi, I&apos;m Emma.
        </h1>
        <p className="text-lg text-stone-600 leading-relaxed max-w-xl">
          I moved from London to Bangkok four years ago and never left. I write about beauty, wellness, and the places that actually impress me — which is a short list. If I say something is good, it is.
        </p>
      </div>

      {/* Recent Posts */}
      <section>
        <h2 className="text-xs uppercase tracking-widest text-stone-400 mb-8">Latest Posts</h2>
        <div className="space-y-10">
          {recent.map((post) => (
            <article key={post.slug} className="group">
              <div className="flex items-center gap-3 mb-2">
                <time className="text-xs text-stone-400">{formatDate(post.date)}</time>
                <span className="text-stone-200">·</span>
                <span className="text-xs text-stone-400">{post.readTime}</span>
              </div>
              <h3 className="text-xl font-bold text-stone-800 mb-2 group-hover:text-stone-600 transition-colors leading-snug" style={{ fontFamily: "Georgia, serif" }}>
                <Link href={`/blog/${post.slug}`}>{post.title}</Link>
              </h3>
              <p className="text-stone-500 text-sm leading-relaxed mb-3">{post.excerpt}</p>
              <Link href={`/blog/${post.slug}`} className="text-xs text-stone-400 hover:text-stone-700 transition-colors">
                Read more →
              </Link>
            </article>
          ))}
        </div>
        <div className="mt-12">
          <Link href="/blog" className="text-sm text-stone-500 border border-stone-300 px-5 py-2.5 hover:border-stone-500 transition-colors">
            All posts →
          </Link>
        </div>
      </section>
    </div>
  );
}

function formatDate(dateStr: string) {
  return new Date(dateStr).toLocaleDateString("en-GB", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });
}
