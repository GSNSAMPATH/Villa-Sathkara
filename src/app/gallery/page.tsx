import Image from 'next/image'
import type { Metadata } from "next";
import { client, urlFor } from '@/lib/sanityClient'

async function getGalleryImages() {
  const query = `*[_type == "galleryImage"] | order(order asc) {
    title,
    image
  }`
  return await client.fetch(query)
}


export const metadata: Metadata = {
  title: "Gallery | Villa Sathkara Tangalle",
  description:
    "View photos of Villa Sathkara – luxury interiors, private pool, tropical gardens, and beautiful Tangalle beachfront scenes in Sri Lanka.",
  openGraph: {
    title: "Villa Sathkara Gallery | Luxury Villa in Tangalle, Sri Lanka",
    description:
      "Browse the Villa Sathkara photo gallery featuring our villa, pool, garden, and Unakuruwa Beach views in Tangalle.",
    url: "https://www.villasathkara.com/gallery",
    siteName: "Villa Sathkara",
    images: [
      {
        url: "https://res.cloudinary.com/diatamf9x/image/upload/v1758968767/_DSC4351_kiqlkx.webp",
        width: 1200,
        height: 630,
        alt: "Villa Sathkara Gallery Tangalle",
      },
    ],
  },
};




export default async function Gallery() {

    const galleryImages = await getGalleryImages()

    return (
        <section className="flex justify-center px-4 sm:px-6 md:px-8 min-h-screen w-full">
                    <div className="bg-white w-full flex flex-col  items-center">
                        <section className="relative w-full h-[40vh] sm:h-[60vh] lg:h-[80vh] rounded-2xl overflow-hidden">
                        <Image
                            src="https://res.cloudinary.com/diatamf9x/image/upload/v1759480023/DJI_20250831212427_0505_D_qhqhma.jpg"
                            alt="Villa Sathkara"
                            width={600}   // base width for Next.js optimization
                            height={500}  // scale height proportionally
                            priority
                            className="inset-0 w-full h-full object-cover" // responsive scaling
                        />
                        <div className="absolute top-0 left-0 w-full h-full bg-black opacity-50 text-center sm:px-4 md:px-24 ">
                            <h1 className="relative font-[poppins] font-semibold text-[16px] sm:text-[24px] md:text-[30px] top-1/3 md:top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white text-center mb-8 md:mb-16">Gallery</h1>
                            <p className="relative font-[poppins] font-semibold text-[10px] sm:text-[16px] md:text-[20px] top-1/3 md:top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2  text-white text-center md:px-2 lg:px-24 px-4">Tangalle is more than just a beach town. it’s a blend of golden shores, hidden tropical bays, fresh seafood, and authentic Sri Lankan culture. From surfing and whale watching to temple visits and safaris, every day brings a new adventure.</p>
                        </div>

                        </section>
                       
                                <section className="bg-white text-white mt-5 md:mt-20 py-4 md:py-16 px-1 lg:px-20 text-center">
                                  {/* Heading */}
                                  <div className="mb-12 bg-white">
                                    <div className="relative w-full flex justify-center mt-10">
                                    <Image
                                        src="https://res.cloudinary.com/diatamf9x/image/upload/v1759466793/Layer_1_rd0euk.png"
                                        alt="Villa Sathkara"
                                        width={600}   // base width for Next.js optimization
                                        height={500}  // scale height proportionally
                                        loading="lazy"
                                        className="w-[90%] max-w-[150px] md:max-w-[350px] h-auto" // responsive scaling
                                    />
                                    </div>
                                        <div className="text-center mt-4 md:mt-10">
                                        <h2 className="font-[Poppins] font-semibold text-[16px] md:text-[36px] text-center font-bold mt-4 text-[var(--button-background)]">Gallery</h2>
                                        <p className="font-[Poppins]  font-normal text-[12px] md:text-[20px] mt-6 text-[#000000]">Tangalle is more than just a beach town. it’s a blend of golden shores, hidden tropical bays, fresh seafood, and authentic Sri Lankan culture. From surfing and whale watching to temple visits and safaris, every day brings a new adventure.</p>
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
                                            src={urlFor(galleryImages[0].image).url() ?? ""}
                                            alt="spot"
                                            width={800}
                                            height={500}
                                            loading='lazy'
                                            className="h-[250px] md:h-[300px] w-full object-cover"
                                        />

                                    </div>
                                
                                    <div className=" rounded-2xl overflow-hidden">
                                        <Image
                                            src={urlFor(galleryImages[1].image).url() ?? ""}
                                            alt="spot"
                                            width={400}
                                            height={700}
                                            loading='lazy'
                                            className="h-[700px] md:h-[675px] w-full object-cover"
                                        />
                                    </div>
                                
                                    {/* Row 2 */}
                                     <div className="rounded-2xl bottom-93 relative overflow-hidden bg-white ">
                                              <Image
                                                src={urlFor(galleryImages[2].image).url() ?? ""}
                                                alt="spot"
                                                width={400}
                                                height={300}
                                                loading='lazy'
                                                className="h-[250px] md:h-[350px] w-full object-cover"
                                              />
                                            </div>
                                            <div className="rounded-2xl bottom-93 relative overflow-hidden">
                                              <Image
                                                src={urlFor(galleryImages[3].image).url() ?? ""}
                                                alt="spot"
                                                width={400}
                                                height={300}
                                                loading='lazy'
                                                className="h-[250px] md:h-[350px] w-full object-cover"
                                              />
                                            </div>
                                            <div />

                                        {/* Row 3 */}
                                            <div className="md:col-span-3 relative bottom-93 rounded-2xl overflow-hidden">
                                            <Image
                                                src={urlFor(galleryImages[4].image).url() ?? ""}
                                                alt="spot"
                                                width={1200}
                                                height={400}
                                                loading='lazy'
                                                className="h-[300px] md:h-[350px] w-full object-cover"
                                            />
                                            </div>

                                        {/* Row 4 */}
                                        <div className="relative flex justify-center w-full col-span-3  gap-5 w-full bg-gray-100 ">
                                            <div className="rounded-2xl bottom-93 relative overflow-hidden bg-white ">
                                              <Image
                                                src={urlFor(galleryImages[5].image).url() ?? ""}
                                                alt="spot"
                                                width={800}
                                                height={300}
                                                loading='lazy'
                                                className="h-[250px] md:h-[350px]  object-cover"
                                              />
                                            </div>
                                            <div className="rounded-2xl bottom-93 relative overflow-hidden">
                                              <Image
                                                src={urlFor(galleryImages[6].image).url() ?? ""}
                                                alt="spot"
                                                width={800}
                                                height={300}
                                                loading='lazy'
                                                className="h-[250px] md:h-[350px] object-cover"
                                              />
                                            </div>
                                        </div>


                                    <div className="relative bottom-93 rounded-2xl flex flex-row justify-center w-full col-span-3  gap-5 overflow-hidden">
                                    <div className=" rounded-2xl overflow-hidden  bg-white h-[700px] md:h-[675px] group">
                                        <Image
                                            src={urlFor(galleryImages[7].image).url() ?? ""}
                                            alt="spot"
                                            width={800}
                                            height={700}
                                            loading='lazy'
                                            className="h-[700px] md:h-[675px] object-cover"
                                        />
                                    </div>

                                    <div className="relative flex flex-col rounded-2xl overflow-hidden gap-5 group w-full">
                                        <Image
                                            src={urlFor(galleryImages[8].image).url() ?? ""}
                                            alt="spot"
                                            width={800}
                                            height={500}
                                            loading='lazy'
                                            className="h-[250px] md:h-[327px] w-full object-cover"
                                        />

                                

                                        <Image
                                            src={urlFor(galleryImages[9].image).url() ?? ""}
                                            alt="spot"
                                            width={800}
                                            height={500}
                                            loading='lazy'
                                            className="h-[250px] md:h-[327px] w-full object-cover"
                                        />
                                    </div>



                                    </div>

                                                                              <div className="md:col-span-3 relative bottom-93 rounded-2xl overflow-hidden">
                                            <Image
                                                src={urlFor(galleryImages[10].image).url() ?? ""}
                                                alt="spot"
                                                width={1200}
                                                height={400}
                                                loading='lazy'
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
                                          src={urlFor(galleryImages[0].image).url() ?? ""}
                                          alt="Tangalle"
                                          width={400}
                                          height={300}
                                          loading='lazy'
                                          className="object-cover w-full h-[150px]"
                                        />

                                      </div>
                                      <div className="relative rounded-lg overflow-hidden">
                                        <Image
                                          src= {urlFor(galleryImages[1].image).url() ?? ""}
                                          alt="Tangalle"
                                          width={400}
                                          height={300}
                                          loading='lazy'
                                          className="object-cover w-full h-[150px]"
                                        />

                                      </div>
                                    </div>
                            
                                    {/* Row 2 (wide image) */}
                                    <div className="relative rounded-lg overflow-hidden">
                                      <Image
                                        src={urlFor(galleryImages[2].image).url() ?? ""}
                                        alt="Tangalle"
                                        width={600}
                                        height={300}
                                        loading='lazy'
                                        className="object-cover w-full h-[150px]"
                                      />

                                    </div>
                            
                                    {/* Row 3 */}
                                    <div className="grid grid-cols-2 gap-3">
                                      <div className="relative rounded-lg overflow-hidden gap-3 flex flex-col">
                                        <div className="relative rounded-lg overflow-hidden">
                                          <Image
                                            src={urlFor(galleryImages[3].image).url() ?? ""}
                                            alt="Tangalle"
                                            width={400}
                                            height={300}
                                            loading='lazy'
                                            className="object-cover w-full h-[150px] rounded-lg"
                                          />

                                        </div>
                                        <div className="relative rounded-lg overflow-hidden">
                                          <Image
                                            src={urlFor(galleryImages[4].image).url() ?? ""}
                                            alt="Tangalle"
                                            width={400}
                                            height={300}
                                            loading='lazy'
                                            className="object-cover w-full h-[150px] rounded-lg"
                                          />

                                        </div>
                                      </div>
                                      <div className="relative rounded-lg overflow-hidden">
                                        <Image
                                          src={urlFor(galleryImages[5].image).url() ?? ""}
                                          alt="Tangalle"
                                          width={400}
                                          height={300}
                                          loading='lazy'
                                          className="object-cover w-full h-[312px]"
                                        />

                                      </div>
                                    </div>

                                     <div className="grid grid-cols-2 gap-3">
                                      <div className="relative rounded-lg overflow-hidden">
                                        <Image
                                          src= {urlFor(galleryImages[6].image).url() ?? ""}
                                          alt="Tangalle"
                                          width={400}
                                          height={300}
                                          loading='lazy'
                                          className="object-cover w-full h-[150px]"
                                        />

                                      </div>
                                      <div className="relative rounded-lg overflow-hidden">
                                        <Image
                                          src= {urlFor(galleryImages[7].image).url() ?? ""}
                                          alt="Tangalle"
                                          width={400}
                                          height={300}
                                          loading='lazy'
                                          className="object-cover w-full h-[150px]"
                                        />

                                      </div>
                                    </div>
                            
                                    {/* Row 2 (wide image) */}
                                    <div className="relative rounded-lg overflow-hidden">
                                      <Image
                                        src={urlFor(galleryImages[8].image).url() ?? ""}
                                        alt="Tangalle"
                                        width={600}
                                        height={300}
                                        loading='lazy'
                                        className="object-cover w-full h-[150px]"
                                      />

                                    </div>
                            
                                    {/* Row 3 */}
                                    <div className="grid grid-cols-2 gap-3">
                                      <div className="relative rounded-lg overflow-hidden gap-3 flex flex-col">
                                        <div className="relative rounded-lg overflow-hidden">
                                          <Image
                                            src={urlFor(galleryImages[9].image).url() ?? ""}
                                            alt="Tangalle"
                                            width={400}
                                            height={300}
                                            loading='lazy'
                                            className="object-cover w-full h-[150px] rounded-lg"
                                          />

                                        </div>
                                        <div className="relative rounded-lg overflow-hidden">
                                          <Image
                                            src={urlFor(galleryImages[10].image).url() ?? ""}
                                            alt="Tangalle"
                                            width={400}
                                            height={300}
                                            loading='lazy'
                                            className="object-cover w-full h-[150px] rounded-lg"
                                          />

                                        </div>
                                      </div>
                                      <div className="relative rounded-lg overflow-hidden">
                                        <Image
                                          src={urlFor(galleryImages[11].image).url() ?? ""}
                                          alt="Tangalle"
                                          width={400}
                                          height={300}
                                          loading='lazy'
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