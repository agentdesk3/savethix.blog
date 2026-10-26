import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://blog.savethisx.net"),
  title: {
    default: "SaveThisX Blog — Video Download Guides",
    template: "%s | SaveThisX Blog",
  },
  description:
    "Practical guides to downloading and saving videos on iPhone, Android, and desktop, with helpful troubleshooting advice.",
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        {children}
        <nav aria-label="SaveThisX policies and help" className="border-t border-slate-200 bg-white px-6 py-4 text-sm">
          <ul className="mx-auto flex max-w-6xl flex-wrap items-center justify-center gap-x-4 gap-y-1 text-blue-700">
            <li><a href="https://savethisx.net/" className="inline-flex min-h-11 items-center rounded px-2 hover:underline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600">SaveThisX Home</a></li>
            <li><a href="https://savethisx.net/privacy" className="inline-flex min-h-11 items-center rounded px-2 hover:underline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600">Privacy Policy</a></li>
            <li><a href="https://savethisx.net/terms" className="inline-flex min-h-11 items-center rounded px-2 hover:underline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600">Terms of Service</a></li>
            <li><a href="https://savethisx.net/faq" className="inline-flex min-h-11 items-center rounded px-2 hover:underline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600">FAQ &amp; Help</a></li>
          </ul>
        </nav>
      </body>
    </html>
  );
}
