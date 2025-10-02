
import VillaFeatures from '@/components/ammenities/ammenities';
import Welcome from '@/components/ammenities/welcome';
import Image from 'next/image'
import Contact from '@/components/cuntact';
export default function Amenities() {
    return (
        <section className="flex justify-center px-4 sm:px-6 md:px-8 min-h-screen w-full">
                    <div className="bg-white w-full flex flex-col  items-center ">
                        <section className="relative w-full h-[40vh] sm:h-[60vh] lg:h-[80vh] rounded-2xl overflow-hidden">
                        <Image
                            src="https://res.cloudinary.com/diatamf9x/image/upload/v1759111542/251c7a09f8965b8a18d4ec50f869f0929cc16752_ths8ni.jpg"
                            alt="Villa Sathkara"
                            width={600}   // base width for Next.js optimization
                            height={500}  // scale height proportionally
                            className="inset-0 w-full h-full object-cover" // responsive scaling
                        />
                        <div className="absolute top-0 left-0 w-full h-full bg-black opacity-50 text-center md:px-24">
                            <h1 className="relative font-[poppins] font-semibold text-[16px] sm:text-[20px] md:text-[24px] top-1/3 md:top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white text-center mb-4 md:mb-16">Amenities</h1>
                            <p className="relative font-[poppins] font-semibold text-[10px] sm:text-[20px] md:text-[24px] top-1/3 md:top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2  text-white text-center md:px-24 px-4">Our villa is equipped with all the essentials—and more—so you can unwind, recharge, and experience true holiday bliss. From comfortable, well-appointed rooms to modern facilities and serene spaces, every detail is designed to make your stay as effortless and enjoyable as possible.</p>
                        </div>

                        </section>
                        <Welcome />
                        <VillaFeatures/>
                        <Contact/>
                    </div>
        
                </section>
    );
}