
import Image from 'next/image'

const galleryImages = [
  { img: "https://res.cloudinary.com/diatamf9x/image/upload/v1758968767/_DSC4351_kiqlkx.webp", className: "md:col-span-2 md:row-span-2 h-[400px] md:h-[500px]" },
  { img: "https://res.cloudinary.com/diatamf9x/image/upload/v1758968767/_DSC4351_kiqlkx.webp", className: "h-[250px] w-[250px]" },
  { img: "https://res.cloudinary.com/diatamf9x/image/upload/v1758968767/_DSC4351_kiqlkx.webp", className: "h-[250px]" },
  { img: "https://res.cloudinary.com/diatamf9x/image/upload/v1758968767/_DSC4351_kiqlkx.webp", className: "h-[250px]" },
  { img: "https://res.cloudinary.com/diatamf9x/image/upload/v1758968767/_DSC4351_kiqlkx.webp", className: "h-[250px]" },
  { img: "https://res.cloudinary.com/diatamf9x/image/upload/v1758968767/_DSC4351_kiqlkx.webp", className: "md:col-span-2 h-[400px]" },
  { img: "https://res.cloudinary.com/diatamf9x/image/upload/v1758968767/_DSC4351_kiqlkx.webp", className: "h-[250px]" },
  { img: "https://res.cloudinary.com/diatamf9x/image/upload/v1758968767/_DSC4351_kiqlkx.webp", className: "h-[250px]" },
  { img: "https://res.cloudinary.com/diatamf9x/image/upload/v1758968767/_DSC4351_kiqlkx.webp", className: "h-[250px]" },
  { img: "https://res.cloudinary.com/diatamf9x/image/upload/v1758968767/_DSC4351_kiqlkx.webp", className: "md:col-span-2 h-[400px]" },
];

export default function Gallery() {
    return (
        <section className="flex justify-center px-4 sm:px-6 md:px-8 min-h-screen w-full">
                    <div className="bg-white w-full flex flex-col  items-center">
                        <section className="relative w-full h-[40vh] sm:h-[60vh] lg:h-[80vh] rounded-2xl overflow-hidden">
                        <Image
                            src="https://res.cloudinary.com/diatamf9x/image/upload/v1758968767/_DSC4351_kiqlkx.webp"
                            alt="Villa Sathkara"
                            width={600}   // base width for Next.js optimization
                            height={500}  // scale height proportionally
                            className="inset-0 w-full h-full object-cover" // responsive scaling
                        />
                        <div className="absolute top-0 left-0 w-full h-full bg-black opacity-50 text-center md:px-24">
                            <h1 className="relative font-[poppins] font-semibold text-[16px] sm:text-[20px] md:text-[24px] top-1/3 md:top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white text-center mb-8 md:mb-16">Gallery</h1>
                            <p className="relative font-[poppins] font-semibold text-[10px] sm:text-[20px] md:text-[24px] top-1/3 md:top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2  text-white text-center md:px-24 px-4">Tangalle is more than just a beach town — it’s a blend of golden shores, hidden tropical bays, fresh seafood, and authentic Sri Lankan culture. From surfing and whale watching to temple visits and safaris, every day brings a new adventure.</p>
                        </div>

                        </section>
                       
                                <section className="bg-white text-white mt-5 md:mt-20 py-4 md:py-16 px-1 lg:px-20 text-center">
                                  {/* Heading */}
                                  <div className="mb-12 bg-white">
                                    <div className="relative w-full flex justify-center mt-10">
                                    <Image
                                        src="https://res.cloudinary.com/diatamf9x/image/upload/v1758885559/Group_33681_imccts.png"
                                        alt="Villa Sathkara"
                                        width={600}   // base width for Next.js optimization
                                        height={500}  // scale height proportionally
                                        className="w-[90%] max-w-[50px] md:max-w-[150px] h-auto" // responsive scaling
                                    />
                                    </div>
                                        <div className="text-center mt-4">
                                        <h2 className="font-[Poppins] font-semibold text-[16px] md:text-[36px] text-center font-bold mt-4 text-[var(--button-background)]">Gallery</h2>
                                        <p className="font-[Poppins]  font-normal text-[12px] md:text-[20px] mt-6 text-[#000000]">Tangalle is more than just a beach town — it’s a blend of golden shores, hidden tropical bays, fresh seafood, and authentic Sri Lankan culture. From surfing and whale watching to temple visits and safaris, every day brings a new adventure.</p>
                                        </div>
                                    </div>
                                </section>

                        

                         <section className="py-1 px-0 lg:px-20 bg-white w-full flex justify-center h-650">

                            {/* Masonry Grid */}
                            <div className="grid grid-cols-1">
                                {/* Grid Layout */}
                                <div className=" md:grid grid-cols-3 md:grid-cols-3 gap-5 w-full">
                                    {/* Row 1 */}
                                    <div className="md:col-span-2 relative rounded-2xl overflow-hidden bg-white h-[250px] md:h-[300px] group">
                                        <Image
                                            src={galleryImages[0].img ?? ""}
                                            alt="spot"
                                            width={800}
                                            height={500}
                                            className="h-[100px] md:h-[300px] w-full object-cover"
                                        />

                                    </div>
                                
                                    <div className=" rounded-2xl overflow-hidden">
                                        <Image
                                            src={galleryImages[1].img ?? ""}
                                            alt="spot"
                                            width={400}
                                            height={700}
                                            className="h-[300px] md:h-[675px] w-full object-cover"
                                        />
                                    </div>
                                
                                    {/* Row 2 */}
                                     <div className="rounded-2xl bottom-93 relative overflow-hidden bg-white ">
                                              <Image
                                                src={galleryImages[2].img}
                                                alt="spot"
                                                width={400}
                                                height={300}
                                                className="h-[250px] md:h-[350px] w-full object-cover"
                                              />
                                            </div>
                                            <div className="rounded-2xl bottom-93 relative overflow-hidden">
                                              <Image
                                                src={galleryImages[3].img}
                                                alt="spot"
                                                width={400}
                                                height={300}
                                                className="h-[250px] md:h-[350px] w-full object-cover"
                                              />
                                            </div>
                                            <div />

                                        {/* Row 3 */}
                                            <div className="md:col-span-3 relative bottom-93 rounded-2xl overflow-hidden">
                                            <Image
                                                src={galleryImages[4].img}
                                                alt="spot"
                                                width={1200}
                                                height={400}
                                                className="h-[300px] md:h-[350px] w-full object-cover"
                                            />
                                            </div>

                                        {/* Row 4 */}
                                        <div className="relative flex justify-center w-full col-span-3  gap-5 w-full bg-gray-100 ">
                                            <div className="rounded-2xl bottom-93 relative overflow-hidden bg-white ">
                                              <Image
                                                src={galleryImages[2].img}
                                                alt="spot"
                                                width={800}
                                                height={300}
                                                className="h-[250px] md:h-[350px]  object-cover"
                                              />
                                            </div>
                                            <div className="rounded-2xl bottom-93 relative overflow-hidden">
                                              <Image
                                                src={galleryImages[3].img}
                                                alt="spot"
                                                width={800}
                                                height={300}
                                                className="h-[250px] md:h-[350px] object-cover"
                                              />
                                            </div>
                                        </div>


                                    <div className="relative bottom-93 rounded-2xl flex flex-row justify-center w-full col-span-3  gap-5 overflow-hidden">
                                    <div className=" rounded-2xl overflow-hidden  bg-white h-[700px] md:h-[675px] group">
                                        <Image
                                            src={galleryImages[1].img ?? ""}
                                            alt="spot"
                                            width={800}
                                            height={700}
                                            className="h-[700px] md:h-[675px] object-cover"
                                        />
                                    </div>

                                    <div className="relative flex flex-col rounded-2xl overflow-hidden gap-5 group w-full">
                                        <Image
                                            src={galleryImages[0].img ?? ""}
                                            alt="spot"
                                            width={800}
                                            height={500}
                                            className="h-[250px] md:h-[327px] w-full object-cover"
                                        />

                                

                                        <Image
                                            src={galleryImages[0].img ?? ""}
                                            alt="spot"
                                            width={800}
                                            height={500}
                                            className="h-[250px] md:h-[327px] w-full object-cover"
                                        />
                                    </div>



                                    </div>

                                                                              <div className="md:col-span-3 relative bottom-93 rounded-2xl overflow-hidden">
                                            <Image
                                                src={galleryImages[4].img}
                                                alt="spot"
                                                width={1200}
                                                height={400}
                                                className="h-[300px] md:h-[350px] w-full object-cover"
                                            />
                                        </div>  
                                        
                                </div>
                            </div>
                        </section>
                    </div>
        
                </section>
    )
}