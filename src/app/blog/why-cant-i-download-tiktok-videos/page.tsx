import type { Metadata } from "next";
import Link from "next/link";
import Article from "@/content/blog/why-cant-i-download-tiktok-videos.mdx";

export const metadata: Metadata = {
  title: "Why Can't I Download TikTok Videos?",
  description:
    "Find out why TikTok downloads fail and learn practical fixes for broken links, unavailable videos, connection issues, and incomplete downloads.",
  alternates: {
    canonical:
      "https://blog.savethisx.net/blog/why-cant-i-download-tiktok-videos/",
  },
  openGraph: {
    type: "article",
    title: "Why Can't I Download TikTok Videos?",
    description:
      "Troubleshoot TikTok download problems, from unavailable videos and broken links to connection and browser issues.",
    url: "https://blog.savethisx.net/blog/why-cant-i-download-tiktok-videos/",
  },
};

export default function TikTokDownloadTroubleshootingGuide() {
  return (
    <main className="min-h-screen bg-white px-6 py-12 text-slate-900 sm:py-16">
      <article className="mx-auto max-w-3xl">
        <Link
          href="/"
          className="text-sm font-semibold text-blue-700 hover:text-blue-800"
        >
          ← VideoSave Guides
        </Link>

        <header className="mt-10 border-b border-slate-200 pb-8">
          <p className="text-sm font-semibold uppercase tracking-wider text-blue-700">
            TikTok Troubleshooting
          </p>
          <h1 className="mt-3 text-4xl font-bold tracking-tight sm:text-5xl">
            Why Can&apos;t I Download TikTok Videos?
          </h1>
          <p className="mt-5 text-lg leading-8 text-slate-600">
            Discover common download problems and practical steps to help
            identify and fix them.
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
