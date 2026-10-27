import Link from "next/link";

interface ArticleBreadcrumbsProps {
  title: string;
  url: string;
}

export function ArticleBreadcrumbs({ title, url }: ArticleBreadcrumbsProps) {
  const homeUrl = "https://blog.savethisx.net/";
  const homeTitle = "SaveThisX Blog";
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "@id": `${url}#breadcrumb`,
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: homeTitle,
        item: homeUrl,
      },
      {
        "@type": "ListItem",
        position: 2,
        name: title,
        item: url,
      },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(jsonLd).replace(/</g, "\\u003c"),
        }}
      />
      <nav aria-label="Breadcrumb" className="text-sm">
        <ol className="flex flex-wrap items-center gap-x-2 gap-y-1">
          <li>
            <Link
              href={homeUrl}
              className="font-semibold text-blue-700 hover:text-blue-800"
            >
              {homeTitle}
            </Link>
          </li>
          <li className="min-w-0">
            <span aria-hidden="true" className="mr-2">→</span>
            <span aria-current="page">{title}</span>
          </li>
        </ol>
      </nav>
    </>
  );
}
