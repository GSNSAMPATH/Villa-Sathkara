import Cuntact from "@/components/cuntact";
import ExploreTangalle from "@/components/ExploreTangalle";
import Features from "@/components/Features";
import Hero from "@/components/Hero";
import RoomsAmenities from "@/components/RoomsAmenities";
import Testimonials from "@/components/Testimonials";
import WhoWeAre from "@/components/WhoWeAre";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Villa Sathkara | Luxury Beachfront Villa in Tangalle, Sri Lanka",
  description:
    "Stay at Villa Sathkara – a 4-bedroom private villa in Tangalle with a pool, hot tub, and tropical garden views. Perfect for families, couples, and groups visiting Southern Sri Lanka.",
  keywords: [
    "Villa Sathkara",
    "Luxury Villa Tangalle",
    "Beachfront Villa Sri Lanka",
    "Private Villa with Pool Tangalle",
    "Unakuruwa Beach Villa",
  ],
  openGraph: {
    title: "Villa Sathkara | Luxury Beachfront Villa in Tangalle, Sri Lanka",
    description:
      "Book Villa Sathkara, a private 4-bedroom villa with pool and beach access in Tangalle. Experience refined comfort and authentic Sri Lankan hospitality.",
    url: "https://www.villasathkara.com/",
    siteName: "Villa Sathkara",
    images: [
      {
        url: "https://res.cloudinary.com/diatamf9x/image/upload/v1758968767/_DSC4351_kiqlkx.webp",
        width: 1200,
        height: 630,
        alt: "Villa Sathkara Beachfront Villa in Tangalle",
      },
    ],
    locale: "en_US",
    type: "website",
  },
};


export default function Home() {
  return (
    <section className="flex justify-center px-4 sm:px-6 md:px-8 min-h-screen w-full">
      <div className="bg-white w-full flex flex-col  items-center ">
       <Hero/>
       <Features />
       <WhoWeAre />
       <RoomsAmenities />
       <ExploreTangalle/>
       <Testimonials/>
       <Cuntact/>
      </div>

      

    </section>
  );
}
