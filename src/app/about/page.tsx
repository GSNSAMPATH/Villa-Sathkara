import type { Metadata } from "next";
import About from "./about"; // Import client component

export const metadata: Metadata = {
  title: "About | Villa Sathkara",
  description:
    "Discover the story behind Villa Sathkara, a luxury villa in Unakuruwa, Tangalle. Blending comfort, nature, and authentic Sri Lankan hospitality for your perfect getaway.",
  openGraph: {
    title: "About Villa Sathkara | Private Villa in Tangalle, Sri Lanka",
    description:
      "Learn about Villa Sathkara’s vision of comfort and authenticity. Experience true Sri Lankan hospitality in Tangalle’s most serene beachfront setting.",
    url: "https://www.villasathkara.com/about",
    siteName: "Villa Sathkara",
    images: [
      {
        url: "https://res.cloudinary.com/diatamf9x/image/upload/v1758968767/_DSC4351_kiqlkx.webp",
        width: 1200,
        height: 630,
        alt: "About Villa Sathkara Tangalle",
      },
    ],
  },
};

export default function AboutPage() {
  return <About />; 
}
