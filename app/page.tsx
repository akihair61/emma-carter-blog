import { posts } from "@/lib/posts";
import Link from "next/link";

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

const defaultImg = "https://images.unsplash.com/photo-1508009603885-50cf7c579365?w=800&q=80";

export default function Home() {
  // posts[0] = Moving to Bangkok (hero)
  // posts[1] = Ciel① big left
  // posts[2] = Bangkok neighborhoods (right top)
  // posts[3] = Ciel② (right bottom)
  // posts[4-7] = More Posts
  const hero = posts[0];
  const bigLeft = posts[1];
  const rightTop = posts[2];
  const rightBottom = posts[3];
  const more = posts.slice(4);

  return (
    <div>
      {/* Hero */}
      <section className="relative h-[65vh] min-h-[480px] flex items-end overflow-hidden">
        <img
          src={coverImages[hero.slug] || defaultImg}
          alt={hero.title}
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0" style={{ background: "linear-gradient(to top, rgba(0,0,0,0.80) 0%, rgba(0,0,0,0.2) 55%, transparent 100%)" }} />
        <div className="relative z-10 max-w-5xl mx-auto px-8 pb-14 text-white w-full">
          <div className="flex gap-2 mb-3">
            {hero.tags.slice(0, 2).map((tag) => (
              <span key={tag} className="text-xs uppercase tracking-widest text-stone-300 border border-stone-500 px-2 py-0.5">{tag}</span>
            ))}
          </div>
          <h1 className="font-serif text-3xl md:text-4xl font-bold leading-tight mb-4 max-w-2xl">
            <Link href={`/blog/${hero.slug}`} className="hover:opacity-80 transition-opacity">
              {hero.title}
            </Link>
          </h1>
          <p className="text-stone-300 text-sm font-light max-w-lg leading-relaxed mb-5">{hero.excerpt}</p>
          <div className="flex items-center gap-3">
            <img src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=80&q=80" alt="Emma Carter" className="w-8 h-8 rounded-full object-cover" />
            <p className="text-stone-300 text-xs">{formatDate(hero.date)} · {hero.readTime}</p>
          </div>
        </div>
      </section>

      {/* Intro strip */}
      <section className="border-b border-stone-200 py-8 px-6 bg-white">
        <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-center gap-5">
          <img src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=200&q=80" alt="Emma Carter" className="w-16 h-16 rounded-full object-cover flex-shrink-0" />
          <p className="text-stone-500 text-sm font-light leading-relaxed max-w-2xl">
            <span className="font-semibold text-stone-800">Emma Carter</span> — London-born, Bangkok-based beauty writer. I moved here four years ago and never left. I write honestly about the places and treatments that actually impress me.
          </p>
        </div>
      </section>

      {/* Asymmetric grid: big left + 2 right */}
      <section className="max-w-5xl mx-auto px-6 py-14">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

          {/* Left: big article */}
          <article className="group">
            <Link href={`/blog/${bigLeft.slug}`}>
              <div className="overflow-hidden mb-4" style={{ aspectRatio: "4/3" }}>
                <img
                  src={coverImages[bigLeft.slug] || defaultImg}
                  alt={bigLeft.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="flex gap-2 mb-2">
                {bigLeft.tags.slice(0, 2).map((tag) => (
                  <span key={tag} className="text-xs text-stone-400 uppercase tracking-wide">{tag}</span>
                ))}
              </div>
              <h2 className="font-serif text-xl font-bold text-stone-900 group-hover:text-stone-500 transition-colors leading-snug mb-2">
                {bigLeft.title}
              </h2>
              <p className="text-stone-500 text-sm font-light leading-relaxed line-clamp-2 mb-2">{bigLeft.excerpt}</p>
              <p className="text-xs text-stone-400">{formatDate(bigLeft.date)} · {bigLeft.readTime}</p>
            </Link>
          </article>

          {/* Right: 2 stacked articles */}
          <div className="flex flex-col gap-6">
            {[rightTop, rightBottom].map((post) => (
              <article key={post.slug} className="group flex gap-4">
                <Link href={`/blog/${post.slug}`} className="flex gap-4 w-full">
                  <div className="flex-shrink-0 w-28 h-28 overflow-hidden">
                    <img
                      src={coverImages[post.slug] || defaultImg}
                      alt={post.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                  <div className="flex-1">
                    <div className="flex gap-2 mb-1">
                      {post.tags.slice(0, 1).map((tag) => (
                        <span key={tag} className="text-xs text-stone-400 uppercase tracking-wide">{tag}</span>
                      ))}
                    </div>
                    <h3 className="font-serif text-base font-bold text-stone-900 group-hover:text-stone-500 transition-colors leading-snug mb-1">
                      {post.title}
                    </h3>
                    <p className="text-xs text-stone-400">{formatDate(post.date)}</p>
                  </div>
                </Link>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Dark divider */}
      <section className="py-12 px-6 text-center" style={{ backgroundColor: "#111" }}>
        <p className="text-xs uppercase tracking-widest text-stone-500 mb-2">Based in</p>
        <p className="font-serif text-3xl text-white font-bold">Bangkok, Thailand</p>
        <p className="text-stone-400 text-sm font-light mt-2">Honest beauty writing since 2022</p>
      </section>

      {/* More Posts: 2-col grid */}
      <section className="max-w-5xl mx-auto px-6 py-14">
        <h2 className="font-serif text-xl font-bold text-stone-900 mb-8 tracking-tight">More Posts</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-10 gap-y-8">
          {more.map((post) => (
            <article key={post.slug} className="group flex gap-4">
              <Link href={`/blog/${post.slug}`} className="flex gap-4 w-full">
                <div className="flex-shrink-0 w-24 h-24 overflow-hidden">
                  <img
                    src={coverImages[post.slug] || defaultImg}
                    alt={post.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="flex-1">
                  <p className="text-xs text-stone-400 uppercase tracking-wide mb-1">{post.tags[0]}</p>
                  <h3 className="font-serif text-base font-bold text-stone-900 group-hover:text-stone-500 transition-colors leading-snug mb-1">
                    {post.title}
                  </h3>
                  <p className="text-xs text-stone-400">{formatDate(post.date)}</p>
                </div>
              </Link>
            </article>
          ))}
        </div>

        <div className="text-center mt-12">
          <Link href="/blog" className="inline-block border border-stone-900 text-stone-900 px-8 py-3 text-sm uppercase tracking-widest hover:bg-stone-900 hover:text-white transition-colors">
            All Posts
          </Link>
        </div>
      </section>
    </div>
  );
}
