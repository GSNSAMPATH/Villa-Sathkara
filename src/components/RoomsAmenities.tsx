"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { FaBed, FaSwimmer, FaWifi, FaUtensils, FaParking } from "react-icons/fa";
import { MdBathroom } from "react-icons/md";

const amenities = [
  {
    img: "https://res.cloudinary.com/diatamf9x/image/upload/v1758989607/d00359ebd713876ab83c235081cd78b4147afdad_urzolq.jpg",
    title: "Comfortable Beds",
    desc: "Restful sleep with quality linens & stylish design.",
    icon: <FaBed className="text-xl text-white" />,
  },
  {
    img: "https://res.cloudinary.com/diatamf9x/image/upload/v1758989861/7f296005e629d7c11a099b46a1c7ecf429d9b421_fhwx4r.jpg",
    title: "Private Bathrooms",
    desc: "Modern en-suites in every bedroom, with hot tub access.",
    icon: <MdBathroom className="text-xl text-white" />,
  },
  {
    img: "https://res.cloudinary.com/diatamf9x/image/upload/v1759473969/pgjxjypi3oliflxxk99m_b4bqct.webp",
    title: "Extra Beds",
    desc: "Extra sleeping arrangements for families and groups.",
    icon: <FaBed className="text-xl text-white" />,
  },
  {
    img: "https://res.cloudinary.com/diatamf9x/image/upload/v1759474841/_DSC3330_ldyg20.webp",
    title: "Modern Bathrooms",
    desc: "Elegant designs with hot water and modern fittings.",
    icon: <MdBathroom className="text-xl text-white" />,
  },
];

const specialAmenities = [
  {
    img: "https://res.cloudinary.com/diatamf9x/image/upload/v1758990066/3411e7633cc774b1ce0cba460fb8737462e18323_hvceix.jpg",
    title: "Living & Kitchen",
    desc: "Fully equipped kitchen, flat-screen TV, washing machine, dining & lounge areas—ideal for families & groups.",
    icon: <FaUtensils className="text-xl text-white" />,
  },
  {
    img: "https://res.cloudinary.com/diatamf9x/image/upload/v1759311485/_DSC3564_hdkpev.webp",
    title: "Living & Kitchen",
    desc: "Fully equipped kitchen, flat-screen TV, washing machine, dining & lounge areas—ideal for families & groups.",
    icon: <FaUtensils className="text-xl text-white" />,
  },
    {
    img: "https://res.cloudinary.com/diatamf9x/image/upload/v1759311825/_DSC3663_fmphv2.webp",
    title: "Living & Kitchen",
    desc: "Fully equipped kitchen, flat-screen TV, washing machine, dining & lounge areas—ideal for families & groups.",
    icon: <FaUtensils className="text-xl text-white" />,
  },
];

const features = [
  { label: "Free Parking", icon: <FaParking className="text-[10px] md:text-[20px]" /> },
  { label: "Private Pool & Hot Tub", icon: <FaSwimmer className="text-[10px] md:text-[20px]" /> },
  { label: "dining & BBQ", icon: <FaUtensils className="text-[10px] md:text-[20px]" /> },
  { label: "Free WiFi", icon: <FaWifi className="text-[10px] md:text-[20px]" /> },

];

export default function RoomsAmenities() {
  const [currentIndex, setCurrentIndex] = useState(0); // amenities carousel
  const [currentIndex1, setCurrentIndex1] = useState(0); // special amenities carousel
  const [itemsPerView, setItemsPerView] = useState(1);

  // Detect screen width for responsive carousel
  useEffect(() => {
    const updateItemsPerView = () => {
      setItemsPerView(window.innerWidth >= 768 ? 2 : 1);
    };
    updateItemsPerView();
    window.addEventListener("resize", updateItemsPerView);
    return () => window.removeEventListener("resize", updateItemsPerView);
  }, []);

  // Prev/Next for amenities
  const handlePrev = () => {
    setCurrentIndex((prev) =>
      prev === 0 ? Math.max(amenities.length - itemsPerView, 0) : prev - itemsPerView
    );
  };
  const handleNext = () => {
    setCurrentIndex((prev) =>
      prev + itemsPerView >= amenities.length ? 0 : prev + itemsPerView
    );
  };

  const totalSlides = Math.ceil(amenities.length / itemsPerView);
  const activeSlide = Math.floor(currentIndex / itemsPerView);

  // Auto-play for Special Amenities
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex1((prev) =>
        prev + 1 >= specialAmenities.length ? 0 : prev + 1
      );
    }, 6000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="bg-[#1B3A57] w-full mx-auto text-white py-6 md:py-16 px-4 lg:px-30 md:rounded-3xl rounded-xl relative">

      {/* Controls */}
      <div className="absolute sm:top-150  md:top-28 top-110 flex md:gap-4 z-10 items-center  px-4 justify-between md:justify-end w-full md:right-30 right-0 ">
        <button
          onClick={handlePrev}
          className="p-4 md:p-4  h-[30px] w-[30px] md:h-[60px] md:w-[60px]  bg-white/20 hover:bg-white/30 rounded-full border-2 border-white  items-center justify-center flex md:text-[30px] text-[20px]"
        >
          ←
        </button>
        <button
          onClick={handleNext}
          className="p-4 md:p-3 h-[30px] w-[30px] md:h-[60px] md:w-[60px] bg-white/20 hover:bg-white/30 rounded-full border-2 border-white flex items-center justify-center md:text-[30px] text-[20px]"
        >
          →
        </button>
      </div>

      {/* Heading */}
      <div className="md:text-left mb-10">
        <h2 className="font-[Poppins] font-semibold text-[16px]  md:text-[36px] tracking-[0%]">Villa Sathkara</h2>
        <h3 className="font-[Poppins] font-semibold text-[16px] md:text-[36px] tracking-[0%]">Rooms & Amenities</h3>
        <p className="text-gray-300 font-[Poppins] font-normal text-[12px] md:text-[20px] tracking-[0%] md:mt-10 mt-2 ">
          Designed with comfort, elegance, and modern convenience.
        </p>
      </div>

      {/* Amenities Carousel */}
      <div className="relative">
        <div className={`grid gap-6 ${itemsPerView === 2 ? "md:grid-cols-2" : "grid-cols-1"}`}>
          {amenities
            .slice(currentIndex, currentIndex + itemsPerView)
            .map((item, i) => (
              <div
                key={i}
                className="relative rounded-2xl overflow-hidden bg-transparent text-gray-800"
              >
                <Image
                  src={item.img}
                  alt={item.title}
                  width={600}
                  height={400}
                  className="w-full object-cover md:h-[350px] rounded-2xl"
                />
                <div className="p-4 items-center md:items-start flex flex-col md:flex-row md:gap-1  mt-2">
                  <div className="flex items-center text-sm md:text-lg gap-2 md:bg-white/20 hover:bg-white/30 md:p-2 md:border-2 md:mr-2 md:border-white md:rounded-full">
                    {item.icon}

                  </div>
                    <h4 className="text-lg text-center text-white font-[Poppins] font-semibold text-[12px] md:text-[20px] font-bold md:text-left">{item.title}
                    <p className="text-gray-200 font-[Poppins] font-normal text-[12px] mt-2 md:text-[16px] text-center md:text-left max-w-[200px] md:max-w-full">{item.desc}</p>
                </h4>
                </div>
              </div>
            ))}
        </div>

        {/* Line indicators */}
        <div className="flex justify-center mt-6 gap-2">
          {Array.from({ length: totalSlides }).map((_, i) => (
            <div
              key={i}
              className={`h-1 w-6 rounded-full transition-all duration-300 ${i === activeSlide ? "bg-white" : "bg-gray-400"}`}
            />
          ))}
        </div>

        {/* Special Amenities Carousel */}
        <div className="relative rounded-2xl overflow-hidden mt-12 shadow-lg">
          <Image
            src={specialAmenities[currentIndex1].img}
            alt={specialAmenities[currentIndex1].title}
            width={1200}
            height={500}
            className="w-full h-[150px] md:h-[350px] object-cover transition-opacity duration-500"
          />
          <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-4 md:p-6">
            <h4 className="text-center md:text-left font-[Poppins] font-semibold md:text-[24px] text-[12px] text-white ">{specialAmenities[currentIndex1].title}</h4>
            <p className="text-center md:text-left text-gray-200 font-[Poppins] font-normal text-[10px] mt-1 md:text-[20px]">{specialAmenities[currentIndex1].desc}</p>
          </div>
        </div>
      </div>

      {/* Features row */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:bg-[#274766] md:p-4 rounded-xl mt-10 px-4">
        {features.map((f, i) => (
          <div key={i} className="flex items-center gap-6 text-white text-[10px] md:text-[20px]">
            {f.icon}
            <span className="font-[Poppins] font-semibold text-[10px] md:text-[20px]">{f.label}</span>
          </div>
        ))}
      </div>

      {/* CTA */}
      <div className="flex justify-center mt-10">
        <button className="bg-white text-[#1B3A57] md:px-6 md:py-3 px-4 py-1 w-full md:md:w-[300px]  rounded-full font-semibold hover:bg-gray-200 transition">
          View Rooms & Rates 
        </button>
      </div>
    </section>
  );
}
