import Link from "next/link";

const articles = [
  {
    title: "How to Download TikTok Videos on iPhone",
    description:
      "Learn how to download a TikTok video on your iPhone, find saved files, and troubleshoot common download issues.",
    href: "/blog/how-to-download-tiktok-videos-iphone/",
    category: "TikTok Guides",
    readTime: "5 min read",
  },
  {
    title: "How to Download TikTok Videos Without Watermark",
    description:
      "Learn how to save accessible TikTok videos and understand the available download options and limitations.",
    href: "/blog/how-to-download-tiktok-videos-without-watermark/",
    category: "TikTok Guides",
    readTime: "5 min read",
  },
  {
    title: "How to Download Instagram Reels",
    description:
      "Follow practical steps for saving accessible Instagram Reels and troubleshoot common download problems.",
    href: "/blog/how-to-download-instagram-reels/",
    category: "Instagram Guides",
    readTime: "5 min read",
  },
  {
    title: "Why Can't I Download TikTok Videos?",
    description:
      "Troubleshoot unavailable videos, invalid links, connection issues, and incomplete downloads.",
    href: "/blog/why-cant-i-download-tiktok-videos/",
    category: "TikTok Troubleshooting",
    readTime: "6 min read",
  },
  {
    title: "How to Download Instagram Videos on PC",
    description:
      "Learn how to download supported Instagram videos on your computer and troubleshoot common issues.",
    href: "/blog/how-to-download-instagram-videos-pc/",
    category: "Instagram Guides",
    readTime: "6 min read",
  },
  {
    title: "How to Save Instagram Videos to Gallery",
    description:
      "Learn where Instagram downloads go on iPhone and Android and how to save supported videos to your device.",
    href: "/blog/how-to-save-instagram-videos-to-gallery/",
    category: "Instagram Guides",
    readTime: "6 min read",
  },
];

export default function Home() {
  return (
    <main className="min-h-screen bg-white text-slate-900">
      <header className="border-b border-slate-200">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-5">
          <Link href="/" className="text-xl font-bold tracking-tight">
            VideoSave <span className="text-blue-600">Guides</span>
          </Link>
          <span className="text-sm text-slate-500">Practical video guides</span>
        </div>
      </header>

      <section className="border-b border-slate-200 bg-slate-50">
        <div className="mx-auto max-w-6xl px-6 py-20 sm:py-28">
          <p className="mb-4 text-sm font-semibold uppercase tracking-wider text-blue-700">
            The VideoSave Blog
          </p>
          <h1 className="max-w-3xl text-4xl font-bold tracking-tight sm:text-6xl">
            Simple guides for saving videos.
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-600">
            Clear, practical tutorials for downloading and saving videos on
            your phone or computer, with troubleshooting tips when things
            do not work as expected.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-14 sm:py-20">
        <div className="mb-8">
          <p className="text-sm font-semibold text-blue-700">ALL GUIDES</p>
          <h2 className="mt-2 text-2xl font-bold tracking-tight sm:text-3xl">
            Browse our latest articles
          </h2>
        </div>

        <div className="grid gap-6 md:grid-cols-2">
          {articles.map((article) => (
            <article
              key={article.href}
              className="flex flex-col rounded-2xl border border-slate-200 p-6 transition-colors hover:border-blue-200 sm:p-8"
            >
              <div className="flex flex-wrap items-center gap-3 text-sm text-slate-500">
                <span>{article.category}</span>
                <span aria-hidden="true">·</span>
                <span>{article.readTime}</span>
              </div>

              <h3 className="mt-4 text-xl font-bold tracking-tight sm:text-2xl">
                <Link
                  href={article.href}
                  className="hover:text-blue-700 focus-visible:outline-2 focus-visible:outline-blue-600"
                >
                  {article.title}
                </Link>
              </h3>

              <p className="mt-4 flex-1 leading-7 text-slate-600">
                {article.description}
              </p>

              <Link
                href={article.href}
                className="mt-6 inline-flex font-semibold text-blue-700 hover:text-blue-800"
              >
                Read the guide <span className="ml-2" aria-hidden="true">→</span>
              </Link>
            </article>
          ))}
        </div>
      </section>

      <footer className="border-t border-slate-200">
        <div className="mx-auto max-w-6xl px-6 py-8 text-sm text-slate-500">
          VideoSave Guides — helpful information for downloading videos.
        </div>
      </footer>
    </main>
  );
}
