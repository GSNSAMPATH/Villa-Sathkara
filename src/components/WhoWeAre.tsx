"use client";
import Image from "next/image";
import { Home, Flower, Sparkles } from "lucide-react"; // icons
import { LuFlower2 } from 'react-icons/lu';
import { RiHomeHeartLine } from 'react-icons/ri';
import { LuSparkles } from 'react-icons/lu'; 
import { useState, useRef } from "react";

export default function WhoWeAre() {
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
    <section className="sm:px-6 md:px-8 lg:px-30  py-12 bg-white">
      {/* Top row */}
      <div className="grid md:grid-cols-2 gap-8 items-center mb-12 justify-between">
        {/* Left image */}
        <Image
          src="https://res.cloudinary.com/diatamf9x/image/upload/v1758968767/_DSC4351_kiqlkx.webp" // replace with your image
          alt="Who We Are"
          width={400}
          height={400}
          className="rounded-2xl object-cover w-full h-full order-2 md:order-1"
        />
        {/* Title */}
        <div className="space-y-4 order-1 md:order-2">
        <h2 className="font-[Poppins] font-semibold text-[16px] md:text-[36px] leading-[100%] tracking-[0%] text-center md:text-left md:text-4xl  font-bold text-blue-900">
          Who We Are
        </h2>
        <p className="font-[Poppins] font-normal text-[12px] md:text-[20px]  tracking-[0%] letter-spacing: 0px text-center md:text-justify text-gray-600 md:mt-8">
          Villa Sathkara is more than just a place to stay — it’s a private villa in Tangalle designed for travelers who value style, comfort, and authentic experiences. Here you can unwind in luxury, reconnect with loved ones, and discover the very best of Southern Sri Lanka in one unforgettable escape. 
        </p>
        <p className="font-[Poppins] font-normal text-[12px] md:text-[20px]  tracking-[0%] letter-spacing: 0px text-center md:text-justify text-gray-600 md:mt-8">
          Located in Bodhi Mawatha, Unakuruwa, Tangalle, Villa Sathkara combines modern amenities with traditional Sri Lankan hospitality. With caring staff, personalized service, and opportunities to explore beaches, culture, and wildlife, our villa is the perfect base for both adventure and relaxation. Whether you’re planning a family holiday, a couple’s retreat, or a group getaway, Villa Sathkara is your gateway to Sri Lanka’s south coast.
        </p>
        </div>
      </div>

      {/* Features row */}
     <div>
  {/* Desktop & Tablet Grid */}
  <div className="hidden md:grid md:grid-cols-3 gap-6">
    {features.map((item, index) => (
      <div
        key={index}
        className="mouse-pointer border-[1px] border-[#D8D8D8] bg-gray-50 p-6 rounded-2xl shadow-sm hover:shadow-md transition"
      >
        <div className="mb-4">{item.icon}</div>
        <h3 className="text-lg font-semibold mb-2">{item.title}</h3>
        <p className="text-gray-600 text-sm leading-relaxed">{item.desc}</p>
      </div>
    ))}
  </div>

   {/* ---------- Mobile carousel (replaces Flowbite mobile markup) ---------- */}
      <div className="md:hidden relative">
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
              <div key={i} className="min-w-full p-">
                <div className="border-[1px] border-[#D8D8D8] bg-gray-50  p-3 mx-auto rounded-2xl shadow-sm h-full flex flex-col">
                  <div className="mb-4">{item.icon}</div>
                  <h3 className="text-lg font-semibold mb-2">{item.title}</h3>
                  <p className="text-gray-600 text-sm leading-relaxed mt-auto">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Line indicators (centered) */}
        <div className="absolute mt-4  left-1/2 transform -translate-x-1/2 flex gap-2">
          {features.map((_, i) => (
            <button
              key={i}
              onClick={() => setIndex(i)}
              aria-label={`Go to slide ${i + 1}`}
              className={`h-1 w-8 rounded-full transition-all ${i === index ? "bg-[#1B3A57]" : "bg-gray-300"}`}
            />
          ))}
        </div>
      </div>
    </div>

    </section>
  );
}
