"use client";

import ExploreTangalle from "@/components/about/ExploreTangalle";
import HomeByTheSea from "@/components/about/HomeByTheSea";
import WhoWeAre from "@/components/about/whoweare";
import Cuntact from "@/components/cuntact";
import Image from "next/image";
import { useEffect, useState } from "react";


export default function About() {
  // Example images
  const images = [
    "https://res.cloudinary.com/diatamf9x/image/upload/v1758968767/_DSC4351_kiqlkx.webp",
    "https://res.cloudinary.com/diatamf9x/image/upload/v1759111542/251c7a09f8965b8a18d4ec50f869f0929cc16752_ths8ni.jpg",
    "https://res.cloudinary.com/diatamf9x/image/upload/v1759479431/_DSC4346-Edit_uck73l.webp",
    "https://res.cloudinary.com/diatamf9x/image/upload/v1759634870/_DSC3530_jeafzr.webp",
    "https://res.cloudinary.com/diatamf9x/image/upload/v1759480117/DJI_20250831090508_0379_D-HDR-2_rqwl0k.jpg",
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  // Auto change every 4 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % images.length);
    }, 8000);

    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <section className="flex justify-center px-4 sm:px-6 md:px-8 min-h-screen w-full">
      <div className="bg-white w-full flex flex-col items-center">
        
        {/* Auto-changing Hero Image */}
        <section className="relative w-full h-[45vh] sm:h-[65vh] lg:h-[85vh] rounded-2xl overflow-hidden">
          <Image
            src={images[currentIndex]}
            alt="Villa Sathkara"
            width={1920}
            height={1080}
            quality={70}
            priority 
            className="inset-0 h-[40vh] sm:h-[60vh] lg:h-[80vh] object-cover transition-all duration-1000 rounded-2xl"
          />

          {/* Line indicators (centered, only mobile) */}
          <div className="absolute bottom-[0] left-1/2 transform -translate-x-1/2 flex gap-2 max-w-[100px] md:max-w-[400px]">
            {images.map((_, i) => (
              <button
                key={i}
                onClick={() => setCurrentIndex(i)}
                aria-label={`Go to slide ${i + 1}`}
                className={`h-1 w-6 md:w-10 rounded-full transition-all ${
                  i === currentIndex ? "bg-[#1B3A57]" : "bg-gray-300"
                }`}
              />
            ))}
          </div>
        </section>

        <WhoWeAre />
        <HomeByTheSea />

        {/* Hospitality Section */}
        <section className="relative mt-10 w-full h-[30vh] sm:h-[60vh] lg:h-[60vh] overflow-hidden bg-gray-200 px-2 md:px-20 py-7 md:py-20 flex items-center content-center rounded-2xl">
          <div className="h-full w-1/2 md:max-w-2xl">
            <Image
              src="https://res.cloudinary.com/diatamf9x/image/upload/v1759224564/653d73049ffe2faaa2a0aa7346a72cb8998b7d63_m5xupb.jpg"
              alt="Villa Sathkara"
              width={600}
              height={500}
              loading="lazy"
              className="h-full object-cover rounded-2xl"
            />
          </div>
          <div className="relative w-full h-full px-auto justify-center flex-col flex">
            <h1 className="ml-2 text-center md:text-left md:ml-10 font-[Poppins] md:text-[36px] text-[18px]">
              Hospitality with a Local Touch
            </h1>
            <p className="ml-2 text-center md:text-left md:ml-10 font-[Poppins] text-[10px] md:text-[20px] font-normal ">
              Our friendly, English-speaking manager Dulash is always available
              to assist you. Whether it’s organizing an airport transfer,
              arranging a safari, or recommending the best local restaurants,
              we’re here to make your holiday stress-free and memorable.
            </p>
          </div>
        </section>

        <ExploreTangalle />
        <Cuntact />
      </div>
    </section>
  );
}
