import { posts, getPostBySlug } from "@/lib/posts";
import { notFound } from "next/navigation";
import Link from "next/link";
import type { Metadata } from "next";

export async function generateStaticParams() {
  return posts.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (!post) return {};
  return {
    title: `${post.title} — Emma Carter`,
    description: post.excerpt,
  };
}

function formatDate(dateStr: string) {
  return new Date(dateStr).toLocaleDateString("en-GB", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });
}

export default async function PostPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (!post) notFound();

  return (
    <article>
      {/* Back */}
      <Link href="/blog" className="text-xs text-stone-400 hover:text-stone-700 transition-colors mb-10 block">
        ← All posts
      </Link>

      {/* Header */}
      <div className="mb-10 pb-8 border-b border-stone-200">
        <div className="flex items-center gap-3 mb-4">
          <time className="text-xs text-stone-400">{formatDate(post.date)}</time>
          <span className="text-stone-200">·</span>
          <span className="text-xs text-stone-400">{post.readTime}</span>
        </div>
        <h1 className="text-3xl font-bold text-stone-900 leading-tight mb-6" style={{ fontFamily: "Georgia, serif" }}>
          {post.title}
        </h1>
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 rounded-full bg-stone-200 flex items-center justify-center text-stone-500 text-xs font-bold">
            EC
          </div>
          <div>
            <p className="text-sm font-medium text-stone-700">Emma Carter</p>
            <p className="text-xs text-stone-400">Bangkok-based beauty & travel writer</p>
          </div>
        </div>
      </div>

      {/* Content */}
      <div
        className="prose"
        dangerouslySetInnerHTML={{ __html: post.content }}
      />

      {/* Tags */}
      <div className="mt-12 pt-8 border-t border-stone-100">
        <div className="flex flex-wrap gap-2">
          {post.tags.map((tag) => (
            <span key={tag} className="text-xs bg-stone-100 text-stone-500 px-3 py-1">
              {tag}
            </span>
          ))}
        </div>
      </div>
    </article>
  );
}
