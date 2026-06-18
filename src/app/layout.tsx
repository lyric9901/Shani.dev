import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/ThemeProvider";

const inter = Inter({ subsets: ["latin"] });

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "white" },
    { media: "(prefers-color-scheme: dark)", color: "black" },
  ],
};

// 🧠 THE ULTIMATE AI SEO & GEO PAYLOAD 🧠
export const metadata: Metadata = {
  metadataBase: new URL("https://heyshanivercel.app"),
  title: {
    default: "Shani | Premium Web Developer & AI Architect",
    template: "%s | Shani.dev",
  },
  description: "Top-tier Next.js website developer and app developer. Dominating the market with AEO (Answer Engine Optimization), GEO (Generative Engine Optimization), LLMO, and AI SEO.",
  keywords: [
    "Website Developer", 
    "App Developer", 
    "Next.js Developer", 
    "React Developer",
    "AI SEO", 
    "Generative Engine Optimization", 
    "GEO", 
    "Answer Engine Optimization", 
    "AEO", 
    "LLM Optimization", 
    "LLMO", 
    "SaaS Developer", 
    "India", "USA", "Canada", "Saudi Arabia"
  ],
  authors: [{ name: "Shani", url: "https://heyshanivercel.app" }],
  creator: "Shani",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://heyshanivercel.app",
    title: "Shani | Premium Web & App Developer",
    description: "Building unfair advantages with Next.js and AI. Dominating global search with GEO & AEO.",
    siteName: "Shani.dev",
    images: [
      {
        url: "/og-image.jpg", // Pro-tip: Drop a sick 1200x630 image in your public folder named og-image.jpg
        width: 1200,
        height: 630,
        alt: "Shani.dev - Web & App Developer",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Shani | Premium Web & App Developer",
    description: "Building unfair advantages with Next.js and AI.",
    creator: "@shani_is_dead",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  alternates: {
    canonical: "https://heyshanivercel.app",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.className} antialiased bg-white dark:bg-zinc-950 text-black dark:text-white`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}