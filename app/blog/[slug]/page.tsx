import { posts, getPostBySlug } from "@/lib/posts";
import { notFound } from "next/navigation";
import Link from "next/link";
import type { Metadata } from "next";

export async function generateStaticParams() {
  return posts.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (!post) return {};
  return { title: `${post.title} — Emma Carter`, description: post.excerpt };
}

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
  "moving-to-bangkok-guide": "https://images.unsplash.com/photo-1508009603885-50cf7c579365?w=1200&q=80",
  "best-neighborhoods-bangkok-expats": "https://images.unsplash.com/photo-1563492065599-3520f775eeed?w=1200&q=80",
  "skincare-bangkok-humidity": "https://images.unsplash.com/photo-1556228578-8c89e6adf883?w=1200&q=80",
  "thai-wellness-bangkok": "https://images.unsplash.com/photo-1540555700478-4be289fbecef?w=1200&q=80",
};

const defaultImg = "https://images.unsplash.com/photo-1560066984-138dadb4c035?w=1200&q=80";

export default async function PostPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (!post) notFound();

  const relatedPosts = posts.filter(p => p.slug !== post.slug).slice(0, 3);

  return (
    <article>
      {/* Hero image */}
      <div className="relative h-[60vh] min-h-[400px] overflow-hidden">
        <img
          src={coverImages[post.slug] || defaultImg}
          alt={post.title}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0" style={{ background: "linear-gradient(to top, rgba(0,0,0,0.7) 0%, transparent 60%)" }} />
      </div>

      {/* Title area */}
      <div className="max-w-3xl mx-auto px-6 -mt-24 relative z-10">
        <div className="bg-white p-10 shadow-sm">
          <div className="flex flex-wrap gap-2 mb-4">
            {post.tags.slice(0, 3).map(tag => (
              <span key={tag} className="text-xs uppercase tracking-widest text-stone-400">{tag} ·</span>
            ))}
          </div>
          <h1 className="font-serif text-3xl md:text-4xl font-bold text-stone-900 leading-tight mb-6">
            {post.title}
          </h1>
          <div className="flex items-center gap-4 pt-4 border-t border-stone-100">
            <img src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=80&q=80" alt="Emma Carter" className="w-12 h-12 rounded-full object-cover" />
            <div>
              <p className="text-sm font-medium text-stone-800">Emma Carter</p>
              <p className="text-xs text-stone-400 font-light">{formatDate(post.date)} · {post.readTime}</p>
            </div>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-3xl mx-auto px-6 mt-10">
        <div className="bg-white px-10 py-8 shadow-sm">
          <div className="prose" dangerouslySetInnerHTML={{ __html: post.content }} />

          {/* Tags */}
          <div className="mt-10 pt-8 border-t border-stone-100 flex flex-wrap gap-2">
            {post.tags.map(tag => (
              <span key={tag} className="text-xs bg-stone-100 text-stone-500 px-3 py-1.5 uppercase tracking-wide">
                {tag}
              </span>
            ))}
          </div>
        </div>

        {/* Back link */}
        <div className="mt-8 mb-4">
          <Link href="/blog" className="text-xs uppercase tracking-widest text-stone-400 hover:text-stone-800 transition-colors">
            ← All posts
          </Link>
        </div>
      </div>

      {/* Related posts */}
      <section className="max-w-6xl mx-auto px-6 py-16 mt-8 border-t border-stone-200">
        <h2 className="font-serif text-2xl font-bold text-stone-900 mb-10">More Posts</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {relatedPosts.map(p => (
            <article key={p.slug} className="group">
              <Link href={`/blog/${p.slug}`}>
                <div className="overflow-hidden mb-4" style={{ aspectRatio: "3/2" }}>
                  <img
                    src={coverImages[p.slug] || defaultImg}
                    alt={p.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <h3 className="font-serif text-base font-bold text-stone-900 group-hover:text-stone-500 transition-colors leading-snug">
                  {p.title}
                </h3>
              </Link>
            </article>
          ))}
        </div>
      </section>
    </article>
  );
}
