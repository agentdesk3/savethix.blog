import type { Metadata } from "next";
import Link from "next/link";
import Article from "@/content/blog/how-to-download-instagram-videos-pc.mdx";

export const metadata: Metadata = {
  title: "How to Download Instagram Videos on PC",
  description:
    "Learn how to download supported Instagram videos on your PC, find saved files, and troubleshoot common download problems.",
  alternates: {
    canonical:
      "https://blog.savethisx.net/blog/how-to-download-instagram-videos-pc/",
  },
  openGraph: {
    type: "article",
    title: "How to Download Instagram Videos on PC",
    description:
      "A practical guide to saving accessible Instagram videos on a computer and fixing common download issues.",
    url: "https://blog.savethisx.net/blog/how-to-download-instagram-videos-pc/",
  },
};

export default function InstagramVideosPcGuide() {
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
            How to Download Instagram Videos on PC
          </h1>
          <p className="mt-5 text-lg leading-8 text-slate-600">
            Learn how to download Instagram videos on your computer, where to
            find saved files, and how to troubleshoot common problems.
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
