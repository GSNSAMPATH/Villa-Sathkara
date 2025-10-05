"use client";
import { useRouter } from "next/navigation";
import { FaWhatsapp } from "react-icons/fa";


export default function Cuntact() {
      const router = useRouter();
    return (
        <section className="py-16 px-0 lg:px-30 bg-white w-full md:mt-20 mt-10">
            <div className="text-center mb-12">
                <h2 className="font-[Poppins] font-semibold text-[16px] md:text-[36px] font-semibold text-[#1B3A57]">Get in Touch with Villa Sathkara</h2>
                <p className="font-[Poppins] font-normal text-[10px] md:text-[20px] tracking-[0%] letter-spacing: 0px text-center align-middle text-sm sm:text-lg max-w-[993px] mx-auto font-medium text-[#000000]">Let us help you create a memorable Tangalle getaway — contact us today..</p>
            </div>
            <div className="flex items-center  flex-col justify-between w-full">
            <button
            onClick={() => window.open("https://wa.me/+420603525235?text=Hello!%20I%20want%20to%20know%20more%20about%20Villa%20Sathkara.", "_blank")}
            className="flex items-center justify-center gap-2 bg-[#1B3A57] md:px-6 md:py-3 py-2 w-full md:w-[300px] rounded-3xl hover:bg-[#1B3A52] text-white font-semibold transition-colors duration-200"
            >
            <FaWhatsapp className="text-lg" />
            Contact Us
            </button>


            </div>
        </section>
    )
}