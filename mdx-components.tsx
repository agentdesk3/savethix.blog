import type { MDXComponents } from "mdx/types";

const articleSlugs = new Set([
  "how-to-download-tiktok-videos-iphone",
  "how-to-download-tiktok-videos-without-watermark",
  "how-to-download-instagram-reels",
  "why-cant-i-download-tiktok-videos",
  "how-to-download-instagram-videos-pc",
  "how-to-save-instagram-videos-to-gallery",
  "how-to-download-instagram-stories",
  "instagram-video-download-not-working",
]);

export function useMDXComponents(
  components: MDXComponents
): MDXComponents {
  return {
    a: ({ href, ...props }) => (
      <a
        {...props}
        href={href?.replace(
          /^\/blog\/([^/?#]+)\/(?=[?#]|$)/,
          (match: string, slug: string) =>
            articleSlugs.has(slug) ? `/blog/${slug}` : match
        )}
      />
    ),
    ...components,
  };
}
