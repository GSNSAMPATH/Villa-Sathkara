
import Image from 'next/image'

const galleryImages = [
  { img: "https://res.cloudinary.com/diatamf9x/image/upload/v1759479387/pool_xa6qcu.webp", className: "md:col-span-2 md:row-span-2 h-[400px] md:h-[500px]" },
  { img: "https://res.cloudinary.com/diatamf9x/image/upload/v1759480082/DJI_20250831212747_0527_D_q6o0qm.jpg", className: "h-[250px] w-[250px]" },
  { img: "https://res.cloudinary.com/diatamf9x/image/upload/v1759480059/_DSC3981_sypypm.jpg", className: "h-[250px]" },
  { img: "https://res.cloudinary.com/diatamf9x/image/upload/v1759479431/_DSC4346-Edit_uck73l.webp", className: "h-[250px]" },
  { img: "https://res.cloudinary.com/diatamf9x/image/upload/v1759476677/_DSC3770_a0wkm3.webp", className: "h-[250px]" },
  { img: "https://res.cloudinary.com/diatamf9x/image/upload/v1759482017/_DSC3901_ll2i3l.webp", className: "md:col-span-2 h-[400px]" },
  { img: "https://res.cloudinary.com/diatamf9x/image/upload/v1759479995/DJI_20250831193153_0478_D_qrhmug.webp", className: "h-[250px]" },
  { img: "https://res.cloudinary.com/diatamf9x/image/upload/v1759480003/DJI_20250831193336_0490_D_jetuc4.webp", className: "h-[250px]" },
  { img: "https://res.cloudinary.com/diatamf9x/image/upload/v1759479993/DJI_20250831091332_0449_D_cg3g97.webp", className: "h-[250px]" },
  { img: "https://res.cloudinary.com/diatamf9x/image/upload/v1759480023/DJI_20250831212427_0505_D_qhqhma.jpg", className: "md:col-span-2 h-[400px]" },
  { img: "https://res.cloudinary.com/diatamf9x/image/upload/v1759481594/DJI_20250831090508_0379_D-HDR-2_mrlvjh.webp", className: "" },
  { img: "https://res.cloudinary.com/diatamf9x/image/upload/v1759480106/_DSC3516_th1grg.jpg", className: "" },
];

export default function Gallery() {
    return (
        <section className="flex justify-center px-4 sm:px-6 md:px-8 min-h-screen w-full">
                    <div className="bg-white w-full flex flex-col  items-center">
                        <section className="relative w-full h-[40vh] sm:h-[60vh] lg:h-[80vh] rounded-2xl overflow-hidden">
                        <Image
                            src="https://res.cloudinary.com/diatamf9x/image/upload/v1759480023/DJI_20250831212427_0505_D_qhqhma.jpg"
                            alt="Villa Sathkara"
                            width={600}   // base width for Next.js optimization
                            height={500}  // scale height proportionally
                            className="inset-0 w-full h-full object-cover" // responsive scaling
                        />
                        <div className="absolute top-0 left-0 w-full h-full bg-black opacity-50 text-center px-4 md:px-24">
                            <h1 className="relative font-[poppins] font-semibold text-[16px] sm:text-[24px] md:text-[30px] top-1/3 md:top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white text-center mb-8 md:mb-16">Gallery</h1>
                            <p className="relative font-[poppins] font-semibold text-[10px] sm:text-[16px] md:text-[20px] top-1/3 md:top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2  text-white text-center md:px-24 px-4">Tangalle is more than just a beach town — it’s a blend of golden shores, hidden tropical bays, fresh seafood, and authentic Sri Lankan culture. From surfing and whale watching to temple visits and safaris, every day brings a new adventure.</p>
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

                        

                         <section className="py-1 md:px-4 lg:px-20 bg-white w-full flex justify-center md:h-650 mb-10 md:mb-0">

                            {/* Masonry Grid */}
                            <div className="hidden md:grid grid-cols-1">
                                {/* Grid Layout */}
                                <div className="hidden md:grid grid-cols-1 md:grid-cols-3 gap-5 w-full">
                                    {/* Row 1 */}
                                    <div className="md:col-span-2 relative rounded-2xl overflow-hidden bg-white h-[250px] md:h-[300px] group">
                                        <Image
                                            src={galleryImages[0].img ?? ""}
                                            alt="spot"
                                            width={800}
                                            height={500}
                                            className="h-[250px] md:h-[300px] w-full object-cover"
                                        />

                                    </div>
                                
                                    <div className=" rounded-2xl overflow-hidden">
                                        <Image
                                            src={galleryImages[1].img ?? ""}
                                            alt="spot"
                                            width={400}
                                            height={700}
                                            className="h-[700px] md:h-[675px] w-full object-cover"
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
                                                src={galleryImages[5].img}
                                                alt="spot"
                                                width={800}
                                                height={300}
                                                className="h-[250px] md:h-[350px]  object-cover"
                                              />
                                            </div>
                                            <div className="rounded-2xl bottom-93 relative overflow-hidden">
                                              <Image
                                                src={galleryImages[6].img}
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
                                            src={galleryImages[7].img ?? ""}
                                            alt="spot"
                                            width={800}
                                            height={700}
                                            className="h-[700px] md:h-[675px] object-cover"
                                        />
                                    </div>

                                    <div className="relative flex flex-col rounded-2xl overflow-hidden gap-5 group w-full">
                                        <Image
                                            src={galleryImages[8].img ?? ""}
                                            alt="spot"
                                            width={800}
                                            height={500}
                                            className="h-[250px] md:h-[327px] w-full object-cover"
                                        />

                                

                                        <Image
                                            src={galleryImages[11].img ?? ""}
                                            alt="spot"
                                            width={800}
                                            height={500}
                                            className="h-[250px] md:h-[327px] w-full object-cover"
                                        />
                                    </div>



                                    </div>

                                                                              <div className="md:col-span-3 relative bottom-93 rounded-2xl overflow-hidden">
                                            <Image
                                                src={galleryImages[10].img}
                                                alt="spot"
                                                width={1200}
                                                height={400}
                                                className="h-[300px] md:h-[350px] w-full object-cover"
                                            />
                                        </div>  
                                        
                                </div>
                            </div>

                                 <div className="mt-6 space-y-3 block md:hidden bg-white ">
                                    {/* Row 1 */}
                                    <div className="grid grid-cols-2 gap-3">
                                      <div className="relative rounded-lg overflow-hidden">
                                        <Image
                                          src= {galleryImages[0].img}
                                          alt="Tangalle"
                                          width={400}
                                          height={300}
                                          className="object-cover w-full h-[150px]"
                                        />

                                      </div>
                                      <div className="relative rounded-lg overflow-hidden">
                                        <Image
                                          src= {galleryImages[1].img}
                                          alt="Tangalle"
                                          width={400}
                                          height={300}
                                          className="object-cover w-full h-[150px]"
                                        />

                                      </div>
                                    </div>
                            
                                    {/* Row 2 (wide image) */}
                                    <div className="relative rounded-lg overflow-hidden">
                                      <Image
                                        src={galleryImages[2].img}
                                        alt="Tangalle"
                                        width={600}
                                        height={300}
                                        className="object-cover w-full h-[150px]"
                                      />

                                    </div>
                            
                                    {/* Row 3 */}
                                    <div className="grid grid-cols-2 gap-3">
                                      <div className="relative rounded-lg overflow-hidden gap-3 flex flex-col">
                                        <div className="relative rounded-lg overflow-hidden">
                                          <Image
                                            src={galleryImages[3].img}
                                            alt="Tangalle"
                                            width={400}
                                            height={300}
                                            className="object-cover w-full h-[150px] rounded-lg"
                                          />

                                        </div>
                                        <div className="relative rounded-lg overflow-hidden">
                                          <Image
                                            src={galleryImages[4].img}
                                            alt="Tangalle"
                                            width={400}
                                            height={300}
                                            className="object-cover w-full h-[150px] rounded-lg"
                                          />

                                        </div>
                                      </div>
                                      <div className="relative rounded-lg overflow-hidden">
                                        <Image
                                          src={galleryImages[5].img}
                                          alt="Tangalle"
                                          width={400}
                                          height={300}
                                          className="object-cover w-full h-[312px]"
                                        />

                                      </div>
                                    </div>

                                     <div className="grid grid-cols-2 gap-3">
                                      <div className="relative rounded-lg overflow-hidden">
                                        <Image
                                          src= {galleryImages[6].img}
                                          alt="Tangalle"
                                          width={400}
                                          height={300}
                                          className="object-cover w-full h-[150px]"
                                        />

                                      </div>
                                      <div className="relative rounded-lg overflow-hidden">
                                        <Image
                                          src= {galleryImages[7].img}
                                          alt="Tangalle"
                                          width={400}
                                          height={300}
                                          className="object-cover w-full h-[150px]"
                                        />

                                      </div>
                                    </div>
                            
                                    {/* Row 2 (wide image) */}
                                    <div className="relative rounded-lg overflow-hidden">
                                      <Image
                                        src={galleryImages[8].img}
                                        alt="Tangalle"
                                        width={600}
                                        height={300}
                                        className="object-cover w-full h-[150px]"
                                      />

                                    </div>
                            
                                    {/* Row 3 */}
                                    <div className="grid grid-cols-2 gap-3">
                                      <div className="relative rounded-lg overflow-hidden gap-3 flex flex-col">
                                        <div className="relative rounded-lg overflow-hidden">
                                          <Image
                                            src={galleryImages[9].img}
                                            alt="Tangalle"
                                            width={400}
                                            height={300}
                                            className="object-cover w-full h-[150px] rounded-lg"
                                          />

                                        </div>
                                        <div className="relative rounded-lg overflow-hidden">
                                          <Image
                                            src={galleryImages[0].img}
                                            alt="Tangalle"
                                            width={400}
                                            height={300}
                                            className="object-cover w-full h-[150px] rounded-lg"
                                          />

                                        </div>
                                      </div>
                                      <div className="relative rounded-lg overflow-hidden">
                                        <Image
                                          src={galleryImages[5].img}
                                          alt="Tangalle"
                                          width={400}
                                          height={300}
                                          className="object-cover w-full h-[312px]"
                                        />

                                      </div>
                                    </div>
                                  </div>
                        </section>
                    </div>
        
                </section>
    )
}