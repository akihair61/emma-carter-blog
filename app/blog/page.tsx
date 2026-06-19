import { posts } from "@/lib/posts";
import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Blog — Emma Carter",
  description: "Beauty and travel writing from Bangkok. Honest reviews, real experiences.",
};

function formatDate(dateStr: string) {
  return new Date(dateStr).toLocaleDateString("en-GB", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });
}

export default function BlogPage() {
  return (
    <div>
      <h1 className="text-3xl font-bold text-stone-800 mb-2" style={{ fontFamily: "Georgia, serif" }}>All Posts</h1>
      <p className="text-stone-400 text-sm mb-12">{posts.length} articles</p>

      <div className="space-y-10">
        {posts.map((post) => (
          <article key={post.slug} className="group border-b border-stone-100 pb-10">
            <div className="flex items-center gap-3 mb-2">
              <time className="text-xs text-stone-400">{formatDate(post.date)}</time>
              <span className="text-stone-200">·</span>
              <span className="text-xs text-stone-400">{post.readTime}</span>
            </div>
            <h2 className="text-xl font-bold text-stone-800 mb-2 group-hover:text-stone-600 transition-colors leading-snug" style={{ fontFamily: "Georgia, serif" }}>
              <Link href={`/blog/${post.slug}`}>{post.title}</Link>
            </h2>
            <p className="text-stone-500 text-sm leading-relaxed mb-3">{post.excerpt}</p>
            <div className="flex items-center gap-3">
              <Link href={`/blog/${post.slug}`} className="text-xs text-stone-400 hover:text-stone-700 transition-colors">
                Read more →
              </Link>
              <span className="text-stone-200">·</span>
              <div className="flex gap-2">
                {post.tags.slice(0, 2).map((tag) => (
                  <span key={tag} className="text-xs bg-stone-100 text-stone-400 px-2 py-0.5">
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </article>
        ))}
      </div>
    </div>
  );
}
