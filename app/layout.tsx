import type { Metadata, Viewport } from "next";
import "./globals.css";

const SITE_URL = "https://claragromaches.com";
const TITLE = "Clara Gromaches";
const DESCRIPTION =
  "Architect, designing systems and pilots for housing and land commons.";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: TITLE,
    template: "%s · Clara Gromaches",
  },
  description: DESCRIPTION,
  applicationName: TITLE,
  authors: [{ name: "Clara Gromaches", url: SITE_URL }],
  creator: "Clara Gromaches",
  publisher: "Clara Gromaches",
  alternates: { canonical: "/" },
  openGraph: {
    title: TITLE,
    description: DESCRIPTION,
    url: SITE_URL,
    siteName: TITLE,
    type: "website",
    locale: "en_GB",
    images: [
      { url: "/apple-touch-icon.png", width: 180, height: 180, alt: TITLE },
    ],
  },
  twitter: {
    card: "summary",
    title: TITLE,
    description: DESCRIPTION,
    creator: "@claragromaches",
    images: ["/apple-touch-icon.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, "max-image-preview": "large" },
  },
  icons: {
    icon: [
      { url: "/favicon.svg", type: "image/svg+xml" },
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
      { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
    ],
    apple: "/apple-touch-icon.png",
  },
  manifest: "/site.webmanifest",
  formatDetection: { telephone: false, email: false, address: false },
};

export const viewport: Viewport = {
  themeColor: "#f4efe4",
  colorScheme: "light",
  width: "device-width",
  initialScale: 1,
};

const personJsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Clara Gromaches",
  jobTitle: "Architect",
  description: DESCRIPTION,
  url: SITE_URL,
  image: `${SITE_URL}/apple-touch-icon.png`,
  worksFor: {
    "@type": "Organization",
    name: "Komma",
    url: "https://komma.systems",
  },
  sameAs: [
    "https://twitter.com/claragromaches",
    "https://www.linkedin.com/in/cgromaches/",
    "https://www.instagram.com/claragromaches/",
  ],
  knowsAbout: [
    "Housing commons",
    "Land commons",
    "Regenerative architecture",
    "Bio-architecture",
    "Co-operative housing",
    "Web3",
    "Blockchain",
    "AI",
    "Stewardship",
    "Place-based policy",
  ],
  homeLocation: { "@type": "Place", name: "Catalonia" },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin=""
        />
        <link
          href="https://fonts.googleapis.com/css2?family=JetBrains+Mono:wght@400;500&family=Source+Serif+4:ital,opsz,wght@0,8..60,300;0,8..60,400;0,8..60,500;1,8..60,300;1,8..60,400&display=swap"
          rel="stylesheet"
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(personJsonLd) }}
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
