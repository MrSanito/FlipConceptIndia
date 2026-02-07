import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "./Components/Navbar";
import Footer from "./Components/Footer";
import ThemeToggle from "./Hooks/ThemeToggle";
import ThemeTogglerProvider from "./Context/ThemeTogglerProvider";
import { SpeedInsights } from "@vercel/speed-insights/next";
import Script from "next/script";
import { Analytics } from "@vercel/analytics/next"


const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Flip Concept India - Professional Waterproofing Solutions | Heavy-Duty Industrial Protection",
  description: "Leading waterproofing company in India offering heavy-duty, engineering-grade industrial protection. Expert waterproofing services for roofs, basements, terraces, and commercial buildings. 15+ years experience, 500+ projects completed.",
  keywords: [
    "waterproofing services India",
    "industrial waterproofing",
    "roof waterproofing",
    "basement waterproofing",
    "terrace waterproofing",
    "commercial waterproofing",
    "waterproofing contractors",
    "building waterproofing solutions",
    "heavy-duty waterproofing",
    "engineering-grade protection",
    "Flip Concept India",
    "waterproofing company",
    "leak repair services",
    "damp proofing solutions",
    "epoxy flooring",
    "industrial coatings",
    "polyurea waterproofing"
  ],
  authors: [{ name: "Flip Concept India", url: "https://flipconceptindia.com" }],
  creator: "Flip Concept India",
  publisher: "Flip Concept India",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL('https://flipconceptindia.com'),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: "Flip Concept India - Professional Waterproofing Solutions",
    description: "Heavy-duty, engineering-grade industrial waterproofing protection. 15+ years experience, 500+ projects completed. Expert craftsmanship for lasting durability.",
    url: 'https://flipconceptindia.com',
    siteName: 'Flip Concept India',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Flip Concept India - Professional Waterproofing Services',
      },
    ],
    locale: 'en_IN',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Flip Concept India - Professional Waterproofing Solutions',
    description: 'Heavy-duty, engineering-grade industrial waterproofing protection. Expert services for lasting durability.',
    images: ['/og-image.jpg'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: 'Iae0Y0ZkJF05ZX9s-c8yw38897snq6o8VT1JHiCfP2A',
  },
  icons: {
    icon: [
      { url: '/favicon.svg', type: 'image/svg+xml' },
    ],
    shortcut: ['/favicon.svg'],
    apple: [
      { url: '/favicon.svg' },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <Script
          id="google-analytics"
          strategy="afterInteractive"
          src={`https://www.googletagmanager.com/gtag/js?id=G-HGT2CQKDRP`}
        />
        <Script
          id="gtag-init"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'G-HGT2CQKDRP');
            `,
          }}
        />
        
        {/* Microsoft Clarity */}
        <Script
          id="microsoft-clarity"
          strategy="lazyOnload"
          dangerouslySetInnerHTML={{
            __html: `
              (function(c,l,a,r,i,t,y){
                c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};
                t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;
                y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);
              })(window, document, "clarity", "script", "vd2takb8vb");
            `,
          }}
        />
      </head>

      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <ThemeTogglerProvider>
          <Navbar/>
          <ThemeToggle>
            <main className="min-h-screen">
               {children}
            </main>
            <Footer />
          </ThemeToggle>
        </ThemeTogglerProvider>
        <SpeedInsights />
        <Analytics />
      </body>
    </html>
  );
}
