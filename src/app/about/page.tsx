
import WhoWeAre from "@/components/about/whoweare";
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
    
            </div>

        </section>
    );
}