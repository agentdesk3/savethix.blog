import type { Metadata } from "next";
import { ArticleStructuredData } from "@/components/ArticleStructuredData";
import { ArticleBreadcrumbs } from "@/components/ArticleBreadcrumbs";
import Article from "@/content/blog/instagram-video-download-not-working.mdx";

const articleTitle = "Instagram Video Download Not Working? 8 Fixes";
const articleDescription =
  "Instagram video download not working? Check private accounts, removed posts, broken links, and connection issues with these practical fixes.";
const articleUrl =
  "https://blog.savethisx.net/blog/instagram-video-download-not-working";

export const metadata: Metadata = {
  title: articleTitle,
  description:
    articleDescription,
  alternates: {
    canonical:
      articleUrl,
  },
  openGraph: {
    type: "article",
    title: articleTitle,
    description:
      "Troubleshoot Instagram download problems, from private accounts and removed posts to broken links and connection issues.",
    url: articleUrl,
  },
};

export default function InstagramDownloadTroubleshootingGuide() {
  return (
    <main className="min-h-screen bg-white px-6 py-12 text-slate-900 sm:py-16">
      <article className="mx-auto max-w-3xl">
        <ArticleStructuredData
          title={articleTitle}
          description={articleDescription}
          url={articleUrl}
        />
        <ArticleBreadcrumbs title={articleTitle} url={articleUrl} />

        <header className="mt-10 border-b border-slate-200 pb-8">
          <p className="text-sm font-semibold uppercase tracking-wider text-blue-700">
            Instagram Troubleshooting
          </p>
          <h1 className="mt-3 text-4xl font-bold tracking-tight sm:text-5xl">
            Instagram Video Download Not Working? 8 Fixes
          </h1>
          <p className="mt-5 text-lg leading-8 text-slate-600">
            Practical checks to find out why an Instagram video or Reel will
            not download, and what to try next.
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
