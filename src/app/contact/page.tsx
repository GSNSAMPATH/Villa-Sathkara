import Contact from "@/app/contact/Contact";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact | Villa Sathkara Tangalle",
  description:
    "Contact Villa Sathkara for bookings and inquiries. Located in Bodhi Mawatha, Unakuruwa, Tangalle, Sri Lanka – near the beach and major attractions.",
  openGraph: {
    title: "Contact Villa Sathkara | Private Villa in Tangalle, Sri Lanka",
    description:
      "Get in touch with Villa Sathkara for your stay in Tangalle. Reach us by email, WhatsApp, or phone to plan your perfect Sri Lankan holiday.",
    url: "https://www.villasathkara.com/contact",
    siteName: "Villa Sathkara",
    images: [
      {
        url: "https://res.cloudinary.com/diatamf9x/image/upload/v1758968767/_DSC4351_kiqlkx.webp",
        width: 1200,
        height: 630,
        alt: "Contact Villa Sathkara Tangalle",
      },
    ],
  },
};


export default function ContactPage() {
  return <Contact/>; 
}