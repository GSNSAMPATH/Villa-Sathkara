"use client";
import Image from "next/image";
import { title } from "process";
import { FaMapMarkerAlt } from "react-icons/fa";

const exploreSpots = [
  {
    img: "https://res.cloudinary.com/diatamf9x/image/upload/v1758998018/58549a7d8cdf8ed31ddb79bbd46026e27db4a099_q1ydjn.jpg",
    title: "Unakuruwa Beach (Few minutes)",
    desc: "Just a few minutes' walk from the villa; a peaceful beach ideal for sunbathing, swimming, or just relaxing by the sea.",
  },
  {
    img: "https://res.cloudinary.com/diatamf9x/image/upload/v1758998020/70c0e00c4d6a72c5385adfd34a596552f808ebbd_fhd1hc.png",
    title: "Hummana Blow Hole (4.5 Miles)",
    desc: " a spectacular natural phenomenon,especially dramatic during high tide.",

  },
  {
    img: "https://res.cloudinary.com/diatamf9x/image/upload/v1758998027/e3a066a252e8bff3f8319044556d6472b2d9ebc7_ltxqh3.png",
    title: "Tangalle Lagoon (3.2 Miles)",
    desc: "The great for lagoon tours, bird watching, and scenic boat rides.",
  },
  {
    img: "https://res.cloudinary.com/diatamf9x/image/upload/v1758998030/2deec1db3a90c33e49bf49646927b5747287747a_cfhz3d.png",
    title: "Veherahena Temple (17 Miles)",
    desc: " experience Sri Lankan culture, religious architecture, meditation.",
  },
  {
    img: "https://res.cloudinary.com/diatamf9x/image/upload/v1758998023/d6e0956be44732233490db31c3acda63e5c970f9_1_jnvzkh.jpg",
    title: "Other Beaches & Local Villages",
    desc: "Explore nearby coastal spots, hidden coves, small fishing villages, fresh seafood, markets."
  },
  {
    img: "https://res.cloudinary.com/diatamf9x/image/upload/v1759037857/bd3def798bcc8833cfcd856220dd8b9e67bf6706_mfc8i8.jpg",
    title: "Lotus Tower",
  }
];

export default function ExploreTangalle() {
  return (
    <section className="h-250 md:h-380 py-10 md:py-30 px-0 lg:px-30">
      {/* Heading */}
      <div className="mb-10 text-center md:text-left">
        <h2 className="font-[Poppins] font-semibold md:text-[36px] text-[16px] text-3xl md:text-4xl font-bold text-gray-900">
          Explore Tangalle
        </h2>
        <p className="text-gray-600 mt-4 font-[Poppins] font-normal text-[10px] md:text-[20px]">
          Tangalle is more than just a beach town — it’s a blend of golden
          shores, hidden tropical bays, fresh seafood, and authentic Sri Lankan
          culture. From surfing and whale watching to temple visits and safaris,
          every day brings a new adventure.
        </p>
      </div>

      {/* Grid Layout */}
      <div className="hidden md:grid grid-cols-1 md:grid-cols-3 gap-5">
        {/* Row 1 */}
        <div className="md:col-span-2 relative rounded-2xl overflow-hidden bg-white h-[250px] md:h-[300px] group">
        <Image
            src={exploreSpots[0].img}
            alt="spot"
            width={800}
            height={500}
            className="h-[250px] md:h-[300px] w-full object-cover"
        />

        {/* Overlay - hidden until hover */}
        <div
            className="absolute bottom-0 left-0 right-0 p-6 
                    bg-gradient-to-t from-black/70 to-transparent
                    opacity-0 hover:opacity-100 
                    transition-opacity duration-300"
        >
            <div className="flex items-center gap-2 text-white">
            <FaMapMarkerAlt />
            <h4 className="text-lg font-semibold">
                {exploreSpots[0].title}
            </h4>
            </div>
            <p className="text-sm text-gray-200 mt-2">
            {exploreSpots[0].desc}
            </p>
        </div>
        </div>

        <div className="md:col-span-1 relative rounded-2xl overflow-hidden bg-white group">
  <Image
    src={exploreSpots[1].img}
    alt="spot"
    width={400}
    height={700}
    className="h-[700px] md:h-[675px] w-full object-cover"
  />
  
  {/* Overlay with gradient */}
  <div
    className="absolute bottom-0 left-0 right-0 p-6 
               bg-gradient-to-t from-black/70 to-transparent
                    opacity-0 hover:opacity-100 
                    transition-opacity duration-300 z-10"
  >
    {/* Title + Location */}
    <div className="flex items-center gap-2 text-white">
      <FaMapMarkerAlt className="text-white" />
      <h4 className="text-lg font-semibold">{exploreSpots[1].title}</h4>
    </div>
    
    {/* Description */}
    <p className="text-sm text-gray-200 mt-2">
      {exploreSpots[1].desc}
    </p>
  </div>
</div>


        {/* Row 2 */}
        <div className="rounded-2xl bottom-93 relative overflow-hidden bg-white ">
          <Image
            src={exploreSpots[2].img}
            alt="spot"
            width={400}
            height={300}
            className="h-[250px] md:h-[350px] w-full object-cover"
          />
            <div
    className="absolute bottom-0 left-0 right-0 p-6 
               bg-gradient-to-t from-black/70 to-transparent
                    opacity-0 hover:opacity-100 
                    transition-opacity duration-300 z-10"
  >
    {/* Title + Location */}
    <div className="flex items-center gap-2 text-white">
      <FaMapMarkerAlt className="text-white" />
      <h4 className="text-lg font-semibold">{exploreSpots[2].title}</h4>
    </div>
    
    {/* Description */}
    <p className="text-sm text-gray-200 mt-2">
      {exploreSpots[2].desc}
    </p>
  </div>
        </div>
        <div className="rounded-2xl bottom-93 relative overflow-hidden">
          <Image
            src={exploreSpots[3].img}
            alt="spot"
            width={400}
            height={300}
            className="h-[250px] md:h-[350px] w-full object-cover"
          />
            <div
    className="absolute bottom-0 left-0 right-0 p-6 
               bg-gradient-to-t from-black/70 to-transparent
                    opacity-0 hover:opacity-100 
                    transition-opacity duration-300 z-10"
  >
    {/* Title + Location */}
    <div className="flex items-center gap-2 text-white">
      <FaMapMarkerAlt className="text-white" />
      <h4 className="text-lg font-semibold">{exploreSpots[3].title}</h4>
    </div>
    
    {/* Description */}
    <p className="text-sm text-gray-200 mt-2">
      {exploreSpots[3].desc}
    </p>
  </div>
        </div>
        <div /> {/* empty to keep grid alignment */}

        {/* Row 3 */}
        <div className="md:col-span-3 relative bottom-93 rounded-2xl overflow-hidden">
          <Image
            src={exploreSpots[4].img}
            alt="spot"
            width={1200}
            height={400}
            className="h-[300px] md:h-[350px] w-full object-cover"
          />
            <div
    className="absolute bottom-0 left-0 right-0 p-6 
               bg-gradient-to-t from-black/70 to-transparent
                    opacity-0 hover:opacity-100 
                    transition-opacity duration-300 z-10"
  >
    {/* Title + Location */}
    <div className="flex items-center gap-2 text-white">
      <FaMapMarkerAlt className="text-white" />
      <h4 className="text-lg font-semibold">{exploreSpots[4].title}</h4>
    </div>
    
    {/* Description */}
    <p className="text-sm text-gray-200 mt-2">
      {exploreSpots[4].desc}
    </p>
  </div>
        </div>
      </div>

        <div className="mt-6 space-y-3 block md:hidden bg-white ">
        {/* Row 1 */}
        <div className="grid grid-cols-2 gap-3">
          <div className="relative rounded-lg overflow-hidden">
            <Image
              src= {exploreSpots[0].img}
              alt="Tangalle"
              width={400}
              height={300}
              className="object-cover w-full h-[150px]"
            />
            <p className="absolute bottom-2 left-2 text-white text-xs flex items-center gap-1">
              <span>📍</span>{exploreSpots[0].title}
            </p>
          </div>
          <div className="relative rounded-lg overflow-hidden">
            <Image
              src= {exploreSpots[1].img}
              alt="Tangalle"
              width={400}
              height={300}
              className="object-cover w-full h-[150px]"
            />
            <p className="absolute bottom-2 left-2 text-white text-xs flex items-center gap-1">
              <span>📍</span> {exploreSpots[1].title}
            </p>
          </div>
        </div>

        {/* Row 2 (wide image) */}
        <div className="relative rounded-lg overflow-hidden">
          <Image
            src={exploreSpots[2].img}
            alt="Tangalle"
            width={600}
            height={300}
            className="object-cover w-full h-[150px]"
          />
          <p className="absolute bottom-2 left-2 text-white text-xs flex items-center gap-1">
            <span>📍</span> {exploreSpots[2].title}
          </p>
        </div>

        {/* Row 3 */}
        <div className="grid grid-cols-2 gap-3">
          <div className="relative rounded-lg overflow-hidden gap-3 flex flex-col">
            <div className="relative rounded-lg overflow-hidden">
              <Image
                src={exploreSpots[3].img}
                alt="Tangalle"
                width={400}
                height={300}
                className="object-cover w-full h-[150px] rounded-lg"
              />
              <p className="absolute bottom-2 left-2 text-white text-xs flex items-center gap-1">
                <span>📍</span> {exploreSpots[3].title}
              </p>
            </div>
            <div className="relative rounded-lg overflow-hidden">
              <Image
                src={exploreSpots[4].img}
                alt="Tangalle"
                width={400}
                height={300}
                className="object-cover w-full h-[150px] rounded-lg"
              />
              <p className="absolute bottom-2 left-2 text-white text-xs flex items-center gap-1">
                <span>📍</span> {exploreSpots[4].title}
              </p>
            </div>
          </div>
          <div className="relative rounded-lg overflow-hidden">
            <Image
              src={exploreSpots[5].img}
              alt="Tangalle"
              width={400}
              height={300}
              className="object-cover w-full h-[312px]"
            />
            <p className="absolute bottom-2 left-2 text-white text-xs flex items-center gap-1">
              <span>📍</span> {exploreSpots[5].title}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
