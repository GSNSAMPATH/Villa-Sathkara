"use client";
import { FaBed, FaWifi, FaUtensils, FaSwimmer } from "react-icons/fa";
import { MdKitchen } from "react-icons/md";

const features = [
  {
    icon: <FaBed className="text-[#0D3559] text-2xl" />,
    title: "Four En-Suite Bedrooms",
    desc: "Each designed with comfort and elegance in mind.",
  },
  {
    icon: <FaWifi className="text-[#0D3559] text-2xl" />,
    title: "Free WiFi & Parking",
    desc: "Free WiFi, private parking and beautiful garden and sea views.",
  },
  {
    icon: <MdKitchen className="text-[#0D3559] text-2xl" />,
    title: "Modern Kitchen & A/C",
    desc: "A fully equipped modern kitchen, flat-screen TV and a washing machine.",
  },
  {
    icon: <FaUtensils className="text-[#0D3559] text-2xl" />,
    title: "On-site Dining & BBQ",
    desc: "À la carte dining with family-friendly restaurant & BBQ facilities.",
  },
  {
    icon: <FaSwimmer className="text-[#0D3559] text-2xl" />,
    title: "Private Pool & Hot Tub",
    desc: "For relaxing evenings under the sky.",
  },
];

export default function HomeByTheSea() {
  return (
    <section className="py-16 px- lg:px-20  w-full"> 
      {/* Heading */}
      <div className="mb-12">
        <h2 className="font-[Poppins] font-semibold md:text-[36px] text-[16px] leading-[100%] tracking-[0%] text-[#1B3A57] text-center sm:text-left">
          A Home by the Sea
        </h2>
        <p className="font-[Poppins] font-normal text-[12px] md:text-[20px]  tracking-[0%] letter-spacing: 0px  text-gray-600 mt-12 mb-6 text-center sm:text-left">
          Our villa features four spacious double bedrooms,
          each with air conditioning and ceiling fans, two fully equipped kitchens,
          and a refreshing private swimming pool. With large terraces, free WiFi, and breakfast available on request,
          we’ve designed every detail to make your stay comfortable and carefree.
        </p>
      </div>

      {/* Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-20  align-center mx-auto max-w-5xl">
        {features.map((item, index) => (
          <div key={index} className="flex items-center md:items-start  flex-col md:flex-row gap-4 ">
            {/* Icon background */}
            <div className="flex items-center  justify-center md:justify-start md:w-14 md:h-14 md:p-4 p-2 rounded-xl bg-gray-100">
              {item.icon}
            </div>
            {/* Text */}
            <div className="text-center md:text-left">
              <h4 className="text-lg font-semibold text-[12px] md:text-[24px] text-gray-900 text-center md:text-left">
                {item.title}
              </h4>
              <p className="text-gray-600 mt-2 text-sm">{item.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
