interface ArticleStructuredDataProps {
  title: string;
  description: string;
  url: string;
}

export function ArticleStructuredData({
  title,
  description,
  url,
}: ArticleStructuredDataProps) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    "@id": `${url}#article`,
    url,
    mainEntityOfPage: url,
    headline: title,
    description,
    inLanguage: "en",
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(jsonLd).replace(/</g, "\\u003c"),
      }}
    />
  );
}
