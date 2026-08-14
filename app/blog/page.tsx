import { posts } from "@/lib/posts";
import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Blog — Emma Carter",
  description: "Beauty and travel writing from Bangkok.",
  alternates: { canonical: "/blog" },
  openGraph: {
    type: "website",
    url: "/blog",
    siteName: "Emma Carter",
    locale: "en_GB",
    title: "Blog — Emma Carter",
    description: "Beauty and travel writing from Bangkok.",
  },
};

function formatDate(dateStr: string) {
  return new Date(dateStr).toLocaleDateString("en-GB", {
    day: "numeric", month: "long", year: "numeric",
  });
}

const coverImages: Record<string, string> = {
  "best-japanese-hair-salon-bangkok": "/emma-carter-blog/images/salon-reception.jpg",
  "tokio-inkarami-treatment-bangkok": "/emma-carter-blog/images/salon-chairs.jpg",
  "japanese-head-spa-bangkok": "/emma-carter-blog/images/salon-headspa.jpg",
  "aki-interview-hair-tips-bangkok": "/emma-carter-blog/images/aki-portrait.jpg",
  "moving-to-bangkok-guide": "https://images.unsplash.com/photo-1508009603885-50cf7c579365?w=800&q=80",
  "best-neighborhoods-bangkok-expats": "https://images.unsplash.com/photo-1563492065599-3520f775eeed?w=800&q=80",
  "skincare-bangkok-humidity": "https://images.unsplash.com/photo-1556228578-8c89e6adf883?w=800&q=80",
  "thai-wellness-bangkok": "https://images.unsplash.com/photo-1540555700478-4be289fbecef?w=800&q=80",
};

const defaultImg = "/emma-carter-blog/images/salon-reception.jpg";

export default function BlogPage() {
  return (
    <div>
      {/* Header */}
      <div className="py-20 px-6 text-center border-b border-stone-200" style={{ backgroundColor: "#fff" }}>
        <p className="text-xs uppercase tracking-widest text-stone-400 mb-3">Emma Carter</p>
        <h1 className="font-serif text-5xl font-bold text-stone-900">All Posts</h1>
        <p className="text-stone-400 text-sm font-light mt-3">{posts.length} articles</p>
      </div>

      {/* Grid */}
      <div className="max-w-6xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {posts.map((post) => (
            <article key={post.slug} className="group">
              <Link href={`/blog/${post.slug}`}>
                <div className="overflow-hidden mb-4" style={{ aspectRatio: "3/2" }}>
                  <img
                    src={coverImages[post.slug] || defaultImg}
                    alt={post.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="flex gap-2 mb-2 flex-wrap">
                  {post.tags.slice(0, 2).map((tag) => (
                    <span key={tag} className="text-xs text-stone-400 uppercase tracking-wide">{tag}</span>
                  ))}
                </div>
                <h2 className="font-serif text-lg font-bold text-stone-900 group-hover:text-stone-500 transition-colors leading-snug mb-2">
                  {post.title}
                </h2>
                <p className="text-stone-400 text-xs">{formatDate(post.date)} · {post.readTime}</p>
              </Link>
            </article>
          ))}
        </div>
      </div>
    </div>
  );
}
