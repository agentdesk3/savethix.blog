import type { Metadata } from "next";
import { ArticleStructuredData } from "@/components/ArticleStructuredData";
import { ArticleBreadcrumbs } from "@/components/ArticleBreadcrumbs";
import Article from "@/content/blog/how-to-download-instagram-stories.mdx";

const articleUrl =
  "https://blog.savethisx.net/blog/how-to-download-instagram-stories";

const articleTitle =
  "How to Download Instagram Stories: A Step-by-Step Guide";

const articleDescription =
  "Learn how to download supported public Instagram Stories, save videos on your device, and understand common access and download limitations.";

export const metadata: Metadata = {
  title: articleTitle,
  description: articleDescription,
  alternates: {
    canonical: articleUrl,
  },
  openGraph: {
    type: "article",
    title: articleTitle,
    description: articleDescription,
    url: articleUrl,
  },
  twitter: {
    card: "summary_large_image",
    title: articleTitle,
    description: articleDescription,
  },
};

export default function InstagramStoriesGuide() {
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
            Instagram Guides
          </p>
          <h1 className="mt-3 text-4xl font-bold tracking-tight sm:text-5xl">
            How to Download Instagram Stories: A Step-by-Step Guide
          </h1>
          <p className="mt-5 text-lg leading-8 text-slate-600">
            Learn how to download supported public Instagram Stories and find
            saved videos on your phone or computer.
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
