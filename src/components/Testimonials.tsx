"use client";

import { useState, TouchEvent } from "react";
import { FaQuoteLeft } from "react-icons/fa";

const testimonials = [
  {
    text: "Our stay at the villa was absolutely wonderful. The property is beautifully maintained, spacious, and full of charm. The pool was perfect for relaxing afternoons, and the nearby beach made every day feel like paradise. We couldn’t have asked for a better holiday.",
    author: "Garbrielle William",
  },
  {
    text: "We had an unforgettable time at the villa. The rooms were cozy, the view was breathtaking, and the staff went above and beyond to make our stay special. Truly a home away from home.",
    author: "David Johnson",
  },
  {
    text: "A perfect family getaway! The kids loved the pool and we loved the tranquility. Everything was so well organized and we felt completely relaxed throughout our stay.",
    author: "Sophia Brown",
  },
];

export default function Testimonials() {
  const [index, setIndex] = useState(0);
  const [startX, setStartX] = useState(0);

  const onTouchStart = (e: TouchEvent<HTMLDivElement>) => {
    setStartX(e.touches[0].clientX);
  };

  const onTouchMove = (e: TouchEvent<HTMLDivElement>) => {
    const diff = startX - e.touches[0].clientX;
    if (diff > 50 && index < testimonials.length - 1) {
      setIndex(index + 1);
      setStartX(e.touches[0].clientX);
    }
    if (diff < -50 && index > 0) {
      setIndex(index - 1);
      setStartX(e.touches[0].clientX);
    }
  };

  return (
    <section className="md:py-12 py-6 mt-[-170] px-6 max-w-screen lg:px-30 bg-gray-50 ">
      {/* Heading */}
      <div className="text-center mt-4 mb-8">
        <h2 className="font-[Poppins] font-semibold md:text-[36px] text-[16px] leading-[100%] tracking-[0%] text-gray-900">
          What Our Guests Say
        </h2>
      </div>

      {/* Desktop grid */}
      <div className="hidden md:grid grid-cols-1 md:grid-cols-3 gap-8 mx-auto">
        {testimonials.map((item, index) => (
          <div
            key={index}
            className="bg-white rounded-lg shadow-sm p-8 flex flex-col gap-4 hover:shadow-md transition"
          >
            <FaQuoteLeft className="text-3xl text-[#0D3559]" />
            <p className="text-gray-700 leading-relaxed">{item.text}</p>
            <p className="font-semibold text-[#0D3559]">{item.author}</p>
          </div>
        ))}
      </div>

      {/* Mobile carousel */}
      <div className="md:hidden relative ">
        <div
          className="overflow-hidden rounded-2xl"
          onTouchStart={onTouchStart}
          onTouchMove={onTouchMove}
        >
          {/* Track */}
          <div
            className="flex transition-transform duration-500 bg-gray-50"
            style={{ transform: `translateX(-${index * 100}%)` }}
          >
            {testimonials.map((item, i) => (
              <div key={i} className="min-w-full px-1 bg-white">
                <div className="bg-white rounded-lg shadow-sm p-8 flex flex-col gap-4 h-full ">
                  <FaQuoteLeft className="text-[16px] text-[#0D3559]" />
                  <p className="text-gray-700 font-[Poppins] md:text-[16px] text-[12px] leading-relaxed">{item.text}</p>
                  <p className="font-semibold font-[Poppins] md:text-[16px] text-[12px] text-[#0D3559]">{item.author}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Indicators */}
        <div className="flex justify-center mt-5 gap-2">
          {testimonials.map((_, i) => (
            <button
              key={i}
              onClick={() => setIndex(i)}
              aria-label={`Go to slide ${i + 1}`}
              className={`h-1 w-8 rounded-full transition-all ${
                i === index ? "bg-[#0D3559]" : "bg-gray-300"
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
