"use client";
import Image from "next/image";
import { FaMapMarkerAlt } from "react-icons/fa";

const exploreSpots = [
  {
    img: "https://res.cloudinary.com/diatamf9x/image/upload/v1758998018/58549a7d8cdf8ed31ddb79bbd46026e27db4a099_q1ydjn.jpg",
    title: "Unakuruwa Beach (3.6 miles)",
    desc: "Just a few minutes' walk from the villa; a peaceful beach ideal for sunbathing, swimming, or just relaxing by the sea.",
  },
  {
    img: "https://res.cloudinary.com/diatamf9x/image/upload/v1758998020/70c0e00c4d6a72c5385adfd34a596552f808ebbd_fhd1hc.png",
  },
  {
    img: "https://res.cloudinary.com/diatamf9x/image/upload/v1758998027/e3a066a252e8bff3f8319044556d6472b2d9ebc7_ltxqh3.png",
  },
  {
    img: "https://res.cloudinary.com/diatamf9x/image/upload/v1758998030/2deec1db3a90c33e49bf49646927b5747287747a_cfhz3d.png",
  },
  {
    img: "https://res.cloudinary.com/diatamf9x/image/upload/v1758998023/d6e0956be44732233490db31c3acda63e5c970f9_1_jnvzkh.jpg",
  },
  {
    img: "https://res.cloudinary.com/diatamf9x/image/upload/v1759037857/bd3def798bcc8833cfcd856220dd8b9e67bf6706_mfc8i8.jpg",
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
                    opacity-0 group-hover:opacity-100 
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

        <div className=" rounded-2xl overflow-hidden">
        <Image
            src={exploreSpots[1].img}
            alt="spot"
            width={400}
            height={700}
            className="h-[700px] md:h-[675px] w-full object-cover"
        />
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
        </div>
        <div className="rounded-2xl bottom-93 relative overflow-hidden">
          <Image
            src={exploreSpots[3].img}
            alt="spot"
            width={400}
            height={300}
            className="h-[250px] md:h-[350px] w-full object-cover"
          />
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
              <span>📍</span> Hikkaduwa, Srilanka
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
              <span>📍</span> Hikkaduwa, Srilanka
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
            <span>📍</span> Hikkaduwa, Srilanka
          </p>
        </div>

        {/* Row 3 */}
        <div className="grid grid-cols-2 gap-3">
          <div className="relative rounded-lg overflow-hidden">
            <Image
              src={exploreSpots[3].img}
              alt="Tangalle"
              width={400}
              height={300}
              className="object-cover w-full h-[150px] rounded-lg"
            />
            <p className="absolute bottom-2 left-2 text-white text-xs flex items-center gap-1">
              <span>📍</span> Hikkaduwa, Srilanka
            </p>
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
              <span>📍</span> Hikkaduwa, Srilanka
            </p>
          </div>
        </div>

        {/* Row 4 (wide image) */}
        <div className="relative bottom-41 w-[170px] rounded-lg overflow-hidden">
          <Image
            src={exploreSpots[4].img}
            alt="Tangalle"
            width={600}
            height={300}
            className="object-cover w-auto h-[150px] rounded-lg"
          />
          <p className="absolute bottom-2 left-2 text-white text-xs flex items-center gap-1">
            <span>📍</span> Hikkaduwa, Srilanka
          </p>
        </div>
      
    

      </div>
    </section>
  );
}
