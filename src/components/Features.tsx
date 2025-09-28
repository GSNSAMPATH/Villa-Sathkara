"use client";
import { FaBed, FaSwimmer, FaWifi, FaUtensils } from "react-icons/fa";
import { MdKitchen } from "react-icons/md";
import Image from "next/image";

const features = [
  {
    icon: <FaBed className="mx-auto  sm:text-3xl text-[#1B3A57] sm:mb-4" />,
    title: "Four En-Suite Bedrooms",
    description: "each designed with comfort and elegance in mind",
  },
  {
    icon: <MdKitchen className="mx-auto sm:text-3xl text-[#1B3A57] sm:mb-4" />,
    title: "Modern Kitchen & A/C",
    description:
      "A fully equipped modern kitchen, flat-screen TV and a washing machine.",
  },
  {
    icon: <FaSwimmer className="mx-auto sm:text-3xl text-[#1B3A57] sm:mb-4" />,
    title: "Private Pool & Hot Tub",
    description: "For relaxing evenings under the sky.",
  },
  {
    icon: <FaWifi className="mx-auto sm:text-3xl text-[#1B3A57] sm:mb-4" />,
    title: "Free WiFi & Parking",
    description: "Free WiFi, Private parking and Beautiful garden and sea views.",
  },
  {
    icon: <FaUtensils className="mx-auto sm:text-3xl text-[#1B3A57] sm:mb-4" />,
    title: "On-site Dining & BBQ",
    description:
      "À la carte dining with family-friendly restaurant & BBQ facilities.",
  },
];

export default function Features() {
  return (
    <section className="py-6 md:py-25 text-center bg-white  sm:px-6 md:px-8 lg:px-30">
      {/* Logo + Title */}
      <div className="mb-12 space-y-4">
    <div className="relative w-full flex justify-center mt-10">
      <Image
        src="https://res.cloudinary.com/diatamf9x/image/upload/v1758885559/Group_33681_imccts.png"
        alt="Villa Sathkara"
        width={600}   // base width for Next.js optimization
        height={500}  // scale height proportionally
        className="w-[90%] max-w-[50px] md:max-w-[150px] h-auto" // responsive scaling
      />
    </div>
        <h2 className="font-[Poppins] font-semibold text-[16px] md:text-[36px] leading-[100%] tracking-[0%] text-center align-middle text-lg sm:text-2xl font-semibold text-[var(--button-background)]">
          Welcome to Villa Sathkara
        </h2>
        <p className="font-[Poppins] font-normal text-[12px] md:text-[20px]  tracking-[0%] letter-spacing: 0px text-center align-middle text-sm sm:text-lg max-w-[993px] mx-auto font-medium text-[#000000]">
          Welcome to Villa Sathkara, a private four-bedroom villa in Tangalle just steps from Unakuruwa Beach. Blending refined comfort, privacy, and island charm, our villa is the perfect escape for families, friends, or couples seeking relaxation by the sea.
        </p>
      </div>

      {/* First row → 3 cards */}
      <div className="grid grid-cols-3 sm:grid-cols-3 md:mt-20 lg:grid-cols-3 gap-2 md:gap-6 md:max-w-full md:mx-auto mb-6">
        {features.slice(0, 3).map((feature, index) => (
          <div
            key={index}
            className="mouse-pointer border-[1px] border-[#D8D8D8] rounded-md md:rounded-2xl md:p-6 p-2 flex flex-col items-center justify-between min-h-[20px] md:min-h-[220px]"
          >
            {feature.icon}
            <h3 className="font-[poppins] font-medium text-[10px] align-middle md:text-[20px]">{feature.title}</h3>
            <p className="text-gray-500 font-poppins font-normal text-[8px] md:text-[16px]">{feature.description}</p>
          </div>
        ))}
      </div>
      {/* Second row → 2 cards */}
      <div className="grid grid-cols-2  sm:grid-cols-2 lg:grid-cols-2 md:gap-6 gap-2 md:max-w-4/6 max-w-2/3 mx-auto">
        {features.slice(3).map((feature, index) => (
          <div
            key={index}
            className="mouse-pointer border-[1px] border-[#D8D8D8] rounded-md md:rounded-2xl md:p-6 p-2 flex flex-col items-center justify-between min-h-[20px] md:min-h-[220px]"
          >
            {feature.icon}
            <h3 className="font-[poppins] font-medium text-[10px] align-middle md:text-[20px]">{feature.title}</h3>
            <p className="text-gray-500 font-poppins font-normal text-[8px] md:text-[16px]">{feature.description}</p>
          </div>
        ))}
      </div>

      {/* Button */}
      <div className="mt-20 ">
        <button className="bg-[#1B3A57] text-white px-6 py-1.5 md:py-3 w-full md:md:w-[300px] rounded-full hover:bg-[#153049]">
          Check Availability →
        </button>
      </div>
    </section>
  );
}
