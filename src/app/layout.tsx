import type { Metadata } from "next";
import { Geist, Geist_Mono, Poppins } from "next/font/google";
import Navbar from "@/components/Navbar";
import "./globals.css";
import Footer from "@/components/Footer";
import "@fortawesome/fontawesome-free/css/all.min.css";
import WhatsAppButton from "@/components/WhatsAppButton";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

export const metadata: Metadata = {
  title: {
    default: "Villa Sathkara | Luxury Beachfront Villa in Tangalle, Sri Lanka",
    template: "%s | Villa Sathkara",
  },
  description:
    "Book Villa Sathkara – a private 4-bedroom beachfront villa in Tangalle, Sri Lanka with pool, hot tub, and tropical garden views. Perfect for families and couples.",
  keywords: [
    "Villa Sathkara",
    "Luxury Villa Tangalle",
    "Private Villa Sri Lanka",
    "Beachfront Villa Tangalle",
    "Unakuruwa Villa",
    "4 Bedroom Villa Sri Lanka",
  ],
  authors: [{ name: "Villa Sathkara Team" }],
  icons: {
    icon: [{ url: "/favicon.ico", type: "image/x-icon" },
    { url: "/favicon.png", type: "image/png" },
    ],
    shortcut: "/favicon.png",
    apple: "/favicon.png",
  },
  openGraph: {
    title: "Villa Sathkara | Luxury Beachfront Villa in Tangalle, Sri Lanka",
    description:
      "Stay at Villa Sathkara, a 4-bedroom private villa with pool and beach access in Tangalle. Experience comfort, privacy, and authentic Sri Lankan hospitality.",
    url: "https://www.villasathkara.com",
    siteName: "Villa Sathkara",
    images: [
      {
        url: "https://www.villasathkara.com/logo2.png",
        width: 1200,
        height: 630,
        alt: "Villa Sathkara Pool View in Tangalle",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Villa Sathkara | Luxury Beachfront Villa in Tangalle",
    description:
      "Private 4-bedroom villa with pool & garden in Tangalle, Sri Lanka.",
    images: [
      "https://res.cloudinary.com/diatamf9x/image/upload/v1758968767/_DSC4351_kiqlkx.webp",
    ],
  },
  alternates: {
    canonical: "https://www.villasathkara.com",
  },
  metadataBase: new URL("https://www.villasathkara.com"),
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        {/* ✅ Structured Data for Google */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              name: "Villa Sathkara",
              url: "https://www.villasathkara.com",
              logo: "https://www.villasathkara.com/logo.png",
              image: "https://www.villasathkara.com/logo.png",
              sameAs: [
                "https://www.facebook.com/villasathkara",
                "https://www.instagram.com/villasathkara"
              ],
              contactPoint: {
                "@type": "ContactPoint",
                telephone: "+42 060 352 5235",
                contactType: "customer service",
                areaServed: "LK",
                availableLanguage: ["English", "Sinhala"]
              },
            }),
          }}
        />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${poppins.variable} antialiased`}
      >
        <Navbar />
        <WhatsAppButton />
        {children}
        <Footer />
      </body>
    </html>
  );
}
