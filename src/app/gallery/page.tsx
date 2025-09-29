
// import Image from 'next/image'

// const galleryImages = [
//   { src: "https://res.cloudinary.com/diatamf9x/image/upload/v1758968767/_DSC4351_kiqlkx.webp", className: "md:col-span-2 md:row-span-2 h-[400px] md:h-[500px]" },
//   { src: "https://res.cloudinary.com/diatamf9x/image/upload/v1758968767/_DSC4351_kiqlkx.webp", className: "h-[250px] w-[250px]" },
//   { src: "https://res.cloudinary.com/diatamf9x/image/upload/v1758968767/_DSC4351_kiqlkx.webp", className: "h-[250px]" },
//   { src: "https://res.cloudinary.com/diatamf9x/image/upload/v1758968767/_DSC4351_kiqlkx.webp", className: "h-[250px]" },
//   { src: "https://res.cloudinary.com/diatamf9x/image/upload/v1758968767/_DSC4351_kiqlkx.webp", className: "h-[250px]" },
//   { src: "https://res.cloudinary.com/diatamf9x/image/upload/v1758968767/_DSC4351_kiqlkx.webp", className: "md:col-span-2 h-[400px]" },
//   { src: "https://res.cloudinary.com/diatamf9x/image/upload/v1758968767/_DSC4351_kiqlkx.webp", className: "h-[250px]" },
//   { src: "https://res.cloudinary.com/diatamf9x/image/upload/v1758968767/_DSC4351_kiqlkx.webp", className: "h-[250px]" },
//   { src: "https://res.cloudinary.com/diatamf9x/image/upload/v1758968767/_DSC4351_kiqlkx.webp", className: "h-[250px]" },
//   { src: "https://res.cloudinary.com/diatamf9x/image/upload/v1758968767/_DSC4351_kiqlkx.webp", className: "md:col-span-2 h-[400px]" },
// ];

// export default function Gallery() {
//     return (
//         <section className="flex justify-center px-4 sm:px-6 md:px-8 min-h-screen w-full">
//                     <div className="bg-white w-full flex flex-col  items-center ">
//                         <section className="relative w-full h-[40vh] sm:h-[60vh] lg:h-[80vh] rounded-2xl overflow-hidden">
//                         <Image
//                             src="https://res.cloudinary.com/diatamf9x/image/upload/v1758968767/_DSC4351_kiqlkx.webp"
//                             alt="Villa Sathkara"
//                             width={600}   // base width for Next.js optimization
//                             height={500}  // scale height proportionally
//                             className="inset-0 w-full h-full object-cover" // responsive scaling
//                         />
//                         <div className="absolute top-0 left-0 w-full h-full bg-black opacity-50 text-center px-24">
//                             <h1 className="relative top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-4xl font-bold text-white text-center mb-8">Gallery</h1>
//                             <p className="relative top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-xl font-bold text-white text-center px-24">Tangalle is more than just a beach town — it’s a blend of golden shores, hidden tropical bays, fresh seafood, and authentic Sri Lankan culture. From surfing and whale watching to temple visits and safaris, every day brings a new adventure.</p>
//                         </div>

//                         </section>
//                         <section>

//                         </section>

//                          <section className="py-16 px-4 lg:px-20">

//                             {/* Masonry Grid */}
//                             <div className="grid grid-cols-1 md:grid-cols-3 gap-4 auto-rows-[250px]">
//                                 {galleryImages.map((img, index) => (
//                                 <div
//                                     key={index}
//                                     className={`relative rounded-2xl overflow-hidden shadow-sm ${img.className}`}
//                                 >
//                                     <Image
//                                     src={img.src}
//                                     alt={`Villa photo ${index + 1}`}
//                                     fill
//                                     className="object-cover hover:scale-105 transition-transform duration-500"
//                                     />
//                                 </div>
//                                 ))}
//                             </div>
//                         </section>
//                     </div>
        
//                 </section>
//     )
// }