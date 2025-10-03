"use client";

import Image from "next/image";

export default function Hero() {
  return (
    <section className="relative w-full h-[40vh] sm:h-[60vh] lg:h-[80vh] rounded-2xl overflow-hidden">
      {/* Background Video (or replace with image if needed) */}
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute inset-0 w-full h-full object-cover"
      >

        <source src="https://res.cloudinary.com/diatamf9x/video/upload/f_mp4,q_auto:best/Villa_Sathkara_tmkzib.mp4" type="video/mp4" />
        
      
        <source src="https://res.cloudinary.com/diatamf9x/video/upload/v1758965642/Villa_Sathkara_tmkzib.webm" type="video/webm" />
        
        Your browser does not support the video tag.
      </video>

      {/* Overlay */}
      <div
        className="absolute bottom-0  w-full h-3/4 sm:h-1/2 rounded-[16px] opacity-100"
        style={{
            background: "linear-gradient(0.59deg, rgba(27, 58, 87, 0.92) 20.81%, rgba(27, 58, 87, 0) 99.49%)"
        }}
        ></div>


      {/* Content */}
      <div className="relative z-10 flex top-10 sm:top-[-80px] md:top-[-90px] sm:bottom-20 justify-center flex-col md:flex-row sm:pt-[340px] sm:place-items-end md:justify-between h-full px-4 sm:px-5 lg:px-30 text-white">
        {/* Left side text */}
        <div className="lg:w-1/2 w-full md:space-y-4 space-y-2 ">
          <h1 className="lg:text-4xl text-md sm:text-2xl font-bold leading-tight">
            Villa Sathkara  Your Luxury 4 Bedroom Beachfront <br /> Villa in Tangalle, Sri Lanka
          </h1>
          <p className="sm:text-lg text-sm text-gray-200">
            Refined comfort, complete privacy, and your beachfront <br /> villa escape in Tangalle.
          </p>
           <a
              href="/amenities"
              className="bg-white max-w-[180px] md:max-w-[200px] py-1  text-sm text-gray-900 md:px-12 text-center px-4 md:py-3 rounded-full font-medium hover:bg-gray-200 transition flex items-center gap-2"
            >
              Explore Now →
            </a>
        </div>

        {/* Right side small carousel preview */}
        <div className="hidden md:block mt-10 md:mt-0  p-4 rounded-xl w-[300px]">
          {/* Image preview */}
          <div className="relative w-full h-40 rounded-lg overflow-hidden">
          </div>
          {/* Navigation + Button */}
          <div className="flex flex-col items-center mt-4 space-y-3">
            {/* Prev / Next */}
            <div className="flex justify-between w-full text-sm text-gray-300">
            </div>
            {/*           
            <a
              href="/booking"
              className="bg-white text-gray-900 px-6 py-3 rounded-full font-medium hover:bg-gray-200 transition flex items-center gap-2"
            >
              Explore Now →
            </a> */}
          </div>
        </div>
      </div>
    </section>
  );
}
