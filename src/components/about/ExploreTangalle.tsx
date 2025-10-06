"use client";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { FaMapMarkerAlt } from "react-icons/fa";

const exploreSpots = [
  {
    img: "https://res.cloudinary.com/diatamf9x/image/upload/v1758998027/e3a066a252e8bff3f8319044556d6472b2d9ebc7_ltxqh3.png",
    title: "Unakuruwa Beach (3.6 miles)",
    desc: "Just a few minutes’ walk from the villa; a peaceful beach ideal for sunbathing, swimming, or just relaxing by the sea.",
  },
  {
    img: "https://res.cloudinary.com/diatamf9x/image/upload/v1759247258/wewurukannala-600_orig_btdun3.jpg",
    title: "Temple Vauruakannala ",
  },
  {
    img: "https://res.cloudinary.com/diatamf9x/image/upload/v1758998020/70c0e00c4d6a72c5385adfd34a596552f808ebbd_fhd1hc.png",
    title: "Hummana beach",
  },
{
    img: "https://res.cloudinary.com/diatamf9x/image/upload/v1759247222/Agro--864x540_r08ggc.jpg",
    title: "Batatha park",
  },
];

export default function ExploreTangalle() {

        const router = useRouter();

        const [index, setIndex] = useState(0);
    
        const prev = () => setIndex((i) => (i - 1 + exploreSpots.length) % exploreSpots.length);
        const next = () => setIndex((i) => (i + 1) % exploreSpots.length);

  return (
    <section className="relative w-full overflow-hidden py-1 md:py-12 mt-20 rounded-2xl">
      {/* Background Image */}
      <div className="relative w-full h-[300px] md:h-[600px] rounded-2xl md:rounded-2xl">
        <Image
          src="https://res.cloudinary.com/diatamf9x/image/upload/v1758998018/58549a7d8cdf8ed31ddb79bbd46026e27db4a099_q1ydjn.jpg"
          alt="Tangalle"
          loading="lazy"
          fill
          className="object-cover rounded-xl md:rounded-3xl"
        />
        {/* Dark overlay for text readability */}
        <div className="absolute inset-0 bg-black/40 rounded-2xl md:rounded-3xl" />

        {/* Line indicators (centered) */}
        <div className="absolute md:hidden mt-4  left-1/2 transform -translate-x-1/2 flex gap-2">
          {exploreSpots.map((_, i) => (
            <button
              key={i}
              onClick={() => setIndex(i)}
              aria-label={`Go to slide ${i + 1}`}
              className={`h-1 w-8 rounded-full transition-all ${i === index ? "bg-[#1B3A57]" : "bg-gray-300"}`}
            />
          ))}
        </div>

        {/* Content overlay */}
        <div className="absolute inset-0 flex flex-col justify-between p-10 md:p-16 text-white">
          {/* Top text */}
          <div className="hidden md:flex flex-col max-w-xl">
            <h2 className="font-[Poppins] md:text-[24px] text-[12px]  mb-4">Explore Thangalle</h2>
            <p className="font-[Poppins] sm:w-4/6 lg:w-full sm:text-[16px] md:text-[20px] text-[10px] text-white/90 mb-6">
              Tangalle is more than just a beach town — it’s a blend of golden
              shores, hidden tropical bays, fresh seafood, and authentic Sri
              Lankan culture. From surfing and whale watching to temple visits
              and safaris, every day brings a new adventure.
            </p>
            <button
              onClick={() => router.push("/amenities")} 
            className="hidden md:flex w-fit px-6 py-3 bg-white text-black font-medium rounded-full flex items-center gap-2 hover:bg-gray-200 transition">
              Explore Now 
            </button>
          </div>

          {/* Bottom highlight card */}
          <div className="flex mt-29 sm:mt-10 lg:mt-12 items-start md:gap-3 bg-transparent  md:backdrop-blur-sm p-1 md:p-4 md:rounded-2xl w-full ">
            <FaMapMarkerAlt className="text-white text-[12px] md:text-xl md:mt-1 mt-[3] mr-1" />
            <div>
              <h4 className="font-[Poppins] md:text-[20px] text-[12px] font-semibold">{exploreSpots[0].title}</h4>
              <p className="font-[Poppins] sm:w-1/2 lg:w-4/8 xl:w-5/6 2xl:w-full md:text-[16px] text-[8px] text-white/80 mt-1">{exploreSpots[0].desc}</p>
            </div>
          </div>
        </div>

        {/* Right stacked cards */}
        <div   className="absolute flex flex-row items-end md:flex-col space-x-3 md:space-x-0 md:space-y-2 bottom-4 sm:bottom-6 md:top-1/2 md:right-10 left-1/2 md:left-auto -translate-x-1/2 md:translate-x-0  md:-translate-y-1/2 sm:h-[100%] md:py-14">
          {exploreSpots.slice(1).map((spot, i) => ( 
            <><div
                  key={i}
                  className="relative md:w-60 md:h-32 w-20 h-14 rounded-l md:rounded-2xl overflow-hidden shadow-lg border border-white/20"
              >
                  <Image
                      src={spot.img}
                      alt={spot.title}
                      fill
                      loading="lazy"
                      className="object-cover " />

              </div>
              <div className="hidden md:flex relative bottom-3 left-2 flex items-center gap-2 text-white text-sm font-medium  px-3 py-1 rounded-full ">
                <FaMapMarkerAlt /> {spot.title}
            </div></>
          ))}
        </div>
      </div>
    </section>
  );
}
