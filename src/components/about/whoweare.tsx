"use client";
import Image from "next/image";
import { useRef, useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { RiHomeHeartLine } from "react-icons/ri";
import { LuFlower2, LuSparkles } from "react-icons/lu";
import React from "react";

const villaImages = [
  "https://res.cloudinary.com/diatamf9x/image/upload/v1759111542/251c7a09f8965b8a18d4ec50f869f0929cc16752_ths8ni.jpg",
  "https://res.cloudinary.com/diatamf9x/image/upload/v1758968767/_DSC4351_kiqlkx.webp",
  "https://res.cloudinary.com/diatamf9x/image/upload/v1759111542/251c7a09f8965b8a18d4ec50f869f0929cc16752_ths8ni.jpg",
  "https://res.cloudinary.com/diatamf9x/image/upload/v1758968767/_DSC4351_kiqlkx.webp",
];

  const features = [
    {
      icon: <RiHomeHeartLine className="w-8 h-8 text-blue-900" />,
      title: "Comfort & Privacy",
      desc: "Spacious bedrooms, private bathrooms, and thoughtfully designed common areas ensure both gathering together and retreating alone are possible.",
    },
    {
      icon: <LuFlower2 className="w-8 h-8 text-blue-900" />,
      title: "Natural Beauty",
      desc: "With garden and sea-views, steps from the beach, and peaceful surroundings, you’re close to nature. Tangalle’s sun, sea, sand and stars are all yours.",
    },
    {
      icon: <LuSparkles className="w-8 h-8 text-blue-900" />,
      title: "Memorable Experiences",
      desc: "From relaxing poolside to exploring hidden beaches and local attractions, we want your stay to be full of memorable moments.",
    },
  ];



export default function WhoWeAre() {
  const [current, setCurrent] = useState(0);
  const [isMobile, setIsMobile] = useState(false);

  // Detect mobile on mount and on resize
  React.useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  const prevSlide = () => {
    setCurrent((prev) => (prev === 0 ? villaImages.length - 1 : prev - 1));
  };

  const nextSlide = () => {
    setCurrent((prev) => (prev === villaImages.length - 1 ? 0 : prev + 1));
  };

  
    const [index, setIndex] = useState(0);
    const touchStartX = useRef<number | null>(null);
    const touchEndX = useRef<number | null>(null);
  
    const prev = () => setIndex((i) => (i - 1 + features.length) % features.length);
    const next = () => setIndex((i) => (i + 1) % features.length);
  
    function onTouchStart(e: React.TouchEvent) {
      touchStartX.current = e.touches[0].clientX;
    }
    function onTouchMove(e: React.TouchEvent) {
      touchEndX.current = e.touches[0].clientX;
    }
    function onTouchEnd() {
      if (touchStartX.current === null || touchEndX.current === null) return;
      const dx = touchStartX.current - touchEndX.current;
      const threshold = 50; // swipe sensitivity
      if (dx > threshold) next();
      else if (dx < -threshold) prev();
      touchStartX.current = touchEndX.current = null;
    }

  return (
    <section className="bg-white text-white py-4 md:py-16 px-6 lg:px-20 text-center">
      {/* Heading */}
      <div className="mb-12 bg-white">
        <div className="relative w-full flex justify-center mt-10">
        <Image
            src="https://res.cloudinary.com/diatamf9x/image/upload/v1758885559/Group_33681_imccts.png"
            alt="Villa Sathkara"
            width={600}   // base width for Next.js optimization
            height={500}  // scale height proportionally
            className="w-[90%] max-w-[50px] md:max-w-[150px] h-auto" // responsive scaling
        />
        </div>
            <div className="text-justify mt-4">
            <h2 className="font-[Poppins] font-semibold text-[16px] md:text-[36px] text-center font-bold mt-4 text-[var(--button-background)]">Who We Are ?</h2>
            <p className="font-[Poppins]  font-normal text-[12px] md:text-[20px] mt-6 text-[#000000]">Villa Sathkara was created for travelers who want more than just a place to stay. It’s a place to unwind in style, reconnect with loved ones, and experience the best of Southern Sri Lanka without compromise. </p>
            <p className="font-[Poppins] font-normal text-[12px] md:text-[20px] mt-2 text-[#000000]">Situated in Bodhi Mawatha, Unakuruwa, Tangalle, our villa embodies luxury and authenticity. We combine high-end amenities with local warmth — caring staff, thoughtful service, and opportunities to explore. Whether you’re here for adventure, relaxation, or a little of both, Villa Sathkara is your gateway.</p>
            </div>
        </div>

      {/* Info Cards */}
      <div className="grid grid-cols-1  sm:grid-cols-2 md:grid-cols-3 gap-4 md:gap-6 mb-12 hidden md:flex">
        {features.map((feature, index) => (
          <div
            key={index}
            className="p-6 bg-white flex flex-col text-left  justify-between border-t-[2px] border-[#D8D8D8] hover:scale-105  transition duration-300 ease-in-out cursor-pointer "
          >
            {feature.icon}
            <h3 className="font-[Poppins] font-semibold text-[16px] md:text-[20px] mt-4 text-[#000000] ">{feature.title}</h3>
            <p className="font-[Poppins] font-normal text-[12px] md:text-[16px] mt-2 text-[#000000]">{feature.desc}</p>
          </div>
        ))}
      </div>

       {/* ---------- Mobile carousel (replaces Flowbite mobile markup) ---------- */}
      <div className="md:hidden relative mb-12">
        {/* track wrapper (touch handlers) */}
        <div
          className="overflow-hidden rounded-2xl"
          onTouchStart={onTouchStart}
          onTouchMove={onTouchMove}
          onTouchEnd={onTouchEnd}
        >
          {/* track */}
          <div
            className="flex transition-transform duration-500"
            style={{ transform: `translateX(-${index * 100}%)` }}
          >
            {features.map((item, i) => (
              <div key={i} className="min-w-full text-center  p-">
                <div className="border-[1px] border-[#D8D8D8] bg-gray-50  p-3 mx-auto rounded-2xl shadow-sm h-full flex flex-col justify-center items-center">
                  <div className="mb-4 ">{item.icon}</div>
                  <h3 className="text-lg font-semibold mb-2">{item.title}</h3>
                  <p className="text-gray-600 text-sm leading-relaxed mt-auto">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Big Image */}
      <div className="relative w-full mt-10 md:mt-30 h-[25vh] md:h-[60vh] lg:h-[60vh] rounded-2xl overflow-hidden mb-10">
        <Image
          src={villaImages[current]}
          alt="Villa"
          fill
          className="object-cover"
        />
      </div>

{/* Carousel Controls + Thumbnails */}
<div className="flex items-center justify-center gap-4 md:gap-6">
  {/* Prev Button */}
  <button
    onClick={prevSlide}
    className="p-2 md:p-3 bg-white rounded-full text-black shadow hover:scale-105"
  >
    <ChevronLeft />
  </button>

 {/* Thumbnails */}
<div className="flex gap-2 md:gap-4">
  {(isMobile ? villaImages.slice(0, 3) : villaImages).map((img, index) => (
    <div
      key={index}
      onClick={() => setCurrent(index)}
      className={`relative w-20 h-14 md:w-32 md:h-20 rounded-lg overflow-hidden cursor-pointer border-2 ${
        current === index ? "border-blue-400" : "border-transparent"
      }`}
    >
      <Image
        src={img}
        alt={`Villa ${index}`}
        fill
        className="object-cover"
      />
    </div>
  ))}
</div>



  {/* Next Button */}
  <button
    onClick={nextSlide}
    className="p-2 md:p-3 bg-white rounded-full text-black shadow hover:scale-105"
  >
    <ChevronRight />
  </button>
</div>

      {/* Book Now */}
      <div className="mt-10">
        <button className="md:px-6 md:py-3 py-2 w-full md:w-[300px] rounded-full bg-[#1B3A57] hover:bg-blue-700 text-white font-medium">
          Book Now
        </button>
      </div>
    </section>
  );
}
