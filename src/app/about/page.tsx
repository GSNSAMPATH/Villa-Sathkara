
import ExploreTangalle from "@/components/about/ExploreTangalle";
import HomeByTheSea from "@/components/about/HomeByTheSea";
import WhoWeAre from "@/components/about/whoweare";
import Cuntact from "@/components/cuntact";
import Image from "next/image";

export default function About() {
    return (
        <section className="flex justify-center px-4 sm:px-6 md:px-8 min-h-screen w-full">
            <div className="bg-white w-full flex flex-col  items-center ">
                <section className="relative w-full h-[40vh] sm:h-[60vh] lg:h-[80vh] rounded-2xl overflow-hidden">
                <Image
                    src="https://res.cloudinary.com/diatamf9x/image/upload/v1758968767/_DSC4351_kiqlkx.webp"
                    alt="Villa Sathkara"
                    width={600}   // base width for Next.js optimization
                    height={500}  // scale height proportionally
                    className="inset-0 w-full h-full object-cover" // responsive scaling
                />
                </section>
                <WhoWeAre/>
                <HomeByTheSea/>
               
                <section className="relative mt-10 w-full h-[30vh] sm:h-[60vh] lg:h-[60vh]  overflow-hidden bg-gray-200 px-0 md:px-20 py-7 md:py-20 flex items-center content-center ">
                    <div className="h-full w-1/2 md:max-w-2xl">
                        <Image
                            src="https://res.cloudinary.com/diatamf9x/image/upload/v1759224564/653d73049ffe2faaa2a0aa7346a72cb8998b7d63_m5xupb.jpg"    
                            alt="Villa Sathkara"
                            width={600}   // base width for Next.js optimization
                            height={500}  // scale height proportionally
                            className=" h-full object-cover rounded-2xl" // responsive scaling
                        />
                    </div>
                    <div className="relative  w-full h-full px-auto  justify-center flex-col flex">
                        <h1 className="ml-2 text-center md:text-left md:ml-10 font-[Poppins] md:text-[36px] text-[18px]">Hospitality with a Local Touch</h1>
                        <p className="ml-2 text-center md:text-left md:ml-10 font-[Poppins] text-[10px] md:text-[20px] ">Our friendly, English-speaking manager Dulash is always available to assist you. 
                            Whether it’s organizing an airport transfer, arranging a safari, or recommending the best local restaurants, 
                            we’re here to make your holiday stress-free and memorable.</p> 
                    </div>



                </section> 
                <ExploreTangalle/>
                <Cuntact/>
            </div>

        </section>
    );
}
