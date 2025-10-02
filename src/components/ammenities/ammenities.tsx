"use client";
import { useState } from "react";
import Image from "next/image";
import { FaBed } from "react-icons/fa";

export default function VillaFeatures() {
  // Array for features
  const features = [
    {
      icon: <FaBed className="sm:text-3xl text-[#1B3A57] mr-4" />,
      title: "Four En-Suite Bedrooms",
      describtion: "Designed with both comfort and elegance in mind, each room provides a welcoming retreat where relaxation meets refined simplicity.",
      items: [
        "each designed with comfort and elegance in mind",
        "each designed with comfort and elegance in mind",
        "each designed with comfort and elegance in mind",
      ],
      images: [
        "https://res.cloudinary.com/diatamf9x/image/upload/v1759247222/Agro--864x540_r08ggc.jpg",
        "https://res.cloudinary.com/diatamf9x/image/upload/v1759247222/Agro--864x540_r08ggc.jpg",
        "https://res.cloudinary.com/diatamf9x/image/upload/v1759247222/Agro--864x540_r08ggc.jpg",
        "https://res.cloudinary.com/diatamf9x/image/upload/v1759247222/Agro--864x540_r08ggc.jpg",
        "https://res.cloudinary.com/diatamf9x/image/upload/v1759247222/Agro--864x540_r08ggc.jpg",
      ],
    },
    {
      icon: <FaBed className="sm:text-3xl text-[#1B3A57] mr-4" />,
      title: "Modern Kitchen & A/C",
      describtion: "A fully equipped modern kitchen, flat-screen TV and a washing machine.",
      items: ["Fully equipped modern kitchen", "Air conditioning available"],
      images: [
        "https://res.cloudinary.com/diatamf9x/image/upload/v1759247222/Agro--864x540_r08ggc.jpg", 
        "https://res.cloudinary.com/diatamf9x/image/upload/v1759247222/Agro--864x540_r08ggc.jpg",
      ],
    },
    {
      icon: <FaBed className="sm:text-3xl text-[#1B3A57] mr-4" />,
      title: "Private Pool & Hot Tub",
      describtion: "For relaxing evenings under the sky.",
      items: ["Relax in the private pool", "Luxury hot tub included"],
      images: ["https://res.cloudinary.com/diatamf9x/image/upload/v1759247222/Agro--864x540_r08ggc.jpg", "https://res.cloudinary.com/diatamf9x/image/upload/v1759247222/Agro--864x540_r08ggc.jpg"],
    },
    {
      icon: <FaBed className="sm:text-3xl text-[#1B3A57] mr-4" />,
      title: "Free WiFi & Parking",
      describtion: "High-speed internet and ample free parking space.",
      items: ["High-speed internet", "Ample free parking space"],
      images: ["https://res.cloudinary.com/diatamf9x/image/upload/v1759247222/Agro--864x540_r08ggc.jpg", "https://res.cloudinary.com/diatamf9x/image/upload/v1759247222/Agro--864x540_r08ggc.jpg"],
    },
    {
      icon: <FaBed className="sm:text-3xl text-[#1B3A57] mr-4" />,
      title: "On-site Dining & BBQ",
      describtion: "Outdoor dining space with BBQ grill included.",
      items: ["Outdoor dining space", "BBQ grill included"],
      images: ["https://res.cloudinary.com/diatamf9x/image/upload/v1759247222/Agro--864x540_r08ggc.jpg", "https://res.cloudinary.com/diatamf9x/image/upload/v1759247222/Agro--864x540_r08ggc.jpg"],
    },
  ];

  const [activeFeature, setActiveFeature] = useState<number | null>(0); // First open by default
  const [activeImage, setActiveImage] = useState(0);

  const handleAccordion = (i: number) => {
    if (activeFeature === i) {
      setActiveFeature(null); // close if already open
    } else {
      setActiveFeature(i);
      setActiveImage(0);
    }
  };

  return (
    <div className="flex flex-col md:flex-row gap-8 p-0 lg:px-20 bg-white w-full text-white">
      {/* Left Side - Accordion List */}
      <div className="w-full md:w-1/2 space-y-6 p-4 md:p-0">
      <div className="w-full">
        {features.map((f, i) => (
          <div key={i}>
            <button
              onClick={() => handleAccordion(i)}
              className={`flex justify-between items-center text-black w-full text-lg font-semibold py-2 
          ${activeFeature === i ? "" : "border-b border-gray-300 py-6"}`}
            >
            <div className="flex items-center gap-2">
              {f.icon}
              {f.title}
            </div>
              <span className="text-[10px] text-gray-400 border border-gray-400 rounded-full py-1 px-2">{activeFeature === i ? "▲" : "▼"}</span>
            </button>

            {/* Description */}
            {activeFeature === i && (
              <p className="text-gray-300 mt-3">{f.describtion}</p>
            )}

            {activeFeature === i && (
              <div className="ml-4 mt-3 space-y-2">
                {f.items.map((item, idx) => (
                    
                  <p key={idx} className="flex items-center gap-2 text-gray-300">
                    ✅ {item}
                  </p>
                ))}
              </div>
            )}
          </div>
        ))}
      </div>
      </div>

      {/* Right Side - Image Slider */}
      <div className="w-full md:w-1/2 bg-[#F0F0F0] md:py-10 rounded-3xl md:p-8 space-y-4 flex flex-col items-center">
        {activeFeature !== null && (
          <>
            <div className="relative w-full">
              <Image
                src={features[activeFeature].images[activeImage]}
                alt="Villa"
                width={600}
                height={300}
                className="rounded-2xl object-cover"
              />

              {/* Navigation */}
              <button
                onClick={() =>
                  setActiveImage(
                    (prev) =>
                      (prev - 1 + features[activeFeature].images.length) %
                      features[activeFeature].images.length
                  )
                }
                className="absolute left-2 bottom-[-80px]  -translate-y-1/2 bg-black/50 text-white p-2 rounded-full"
              >
                ◀
              </button>
              <button
                onClick={() =>
                  setActiveImage(
                    (prev) =>
                      (prev + 1) % features[activeFeature].images.length
                  )
                }
                className="absolute right-2 bottom-[-80px]  -translate-y-1/2 bg-black/50 text-white p-2 rounded-full"
              >
                ▶
              </button>
            </div>

                        {/* Image Counter */}
            <p className="text-center mt-2 text-gray-600">
              {String(activeImage + 1).padStart(2, "0")}/
              {String(features[activeFeature].images.length).padStart(2, "0")}
            </p>

            {/* Thumbnails */}
            <div className="flex gap-2 mt-3 justify-center">
            {features[activeFeature].images.slice(0, 3).map((img, idx) => (
                <div key={idx} className="flex-1 max-w-[200px]">
                <Image
                    src={img}
                    alt="thumb"
                    width={0} // let Next.js auto-scale
                    height={0}
                    sizes="100vw"
                    onClick={() => setActiveImage(idx)}
                    className={`w-full h-auto sm:h-[50px] md:h-[100px] xl:h-[150px] cursor-pointer rounded-2xl border ${
                    idx === activeImage ? "border-blue-400" : "border-gray-300"
                    }`}
                />
                </div>
            ))}
            </div>

          </>
        )}
      </div>
    </div>
  );
}
