import type { Metadata } from "next";
import Link from "next/link";
import Article from "@/content/blog/how-to-download-instagram-reels.mdx";

export const metadata: Metadata = {
  title: "How to Download Instagram Reels",
  description:
    "Learn how to download supported Instagram Reels, find saved videos on your device, and troubleshoot common download issues.",
  alternates: {
    canonical:
      "https://blog.savethisx.net/blog/how-to-download-instagram-reels/",
  },
  openGraph: {
    type: "article",
    title: "How to Download Instagram Reels",
    description:
      "A practical guide to downloading supported Instagram Reels and fixing common problems.",
    url: "https://blog.savethisx.net/blog/how-to-download-instagram-reels/",
  },
};

export default function InstagramReelsGuide() {
  return (
    <main className="min-h-screen bg-white px-6 py-12 text-slate-900 sm:py-16">
      <article className="mx-auto max-w-3xl">
        <Link
          href="/"
          className="text-sm font-semibold text-blue-700 hover:text-blue-800"
        >
          ← SaveThisX Blog
        </Link>

        <header className="mt-10 border-b border-slate-200 pb-8">
          <p className="text-sm font-semibold uppercase tracking-wider text-blue-700">
            Instagram Guides
          </p>
          <h1 className="mt-3 text-4xl font-bold tracking-tight sm:text-5xl">
            How to Download Instagram Reels
          </h1>
          <p className="mt-5 text-lg leading-8 text-slate-600">
            Learn about available download options, where videos are saved,
            and how to fix common Reel download problems.
          </p>
        </header>

        <div className="prose prose-slate mt-10 max-w-none prose-headings:tracking-tight prose-a:text-blue-700 prose-a:no-underline hover:prose-a:underline">
          <Article />
        </div>

        <footer className="mt-12 border-t border-slate-200 pt-6 text-sm text-slate-500">
          Respect creators&apos; rights. Only download or reuse content when you
          have permission.
        </footer>
      </article>
    </main>
  );
}
