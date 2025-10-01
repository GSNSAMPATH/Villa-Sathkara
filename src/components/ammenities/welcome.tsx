import Image from "next/image";

export default function Welcome() {
    return (
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
            <div className="text-justify mt-4">
            <h2 className="font-[Poppins] font-semibold text-[16px] md:text-[36px] text-center font-bold mt-4 text-[var(--button-background)]">Villa Sathkara Amenitiesity</h2>
            <p className="font-[Poppins]  font-normal text-[12px] md:text-[20px] mt-6 text-[#000000]">Our villa is designed to provide everything you need for a relaxing and carefree holiday. From spacious air-conditioned bedrooms and fully equipped kitchens to a private swimming pool and open terraces, every detail is thoughtfully prepared to make you feel at home. Stay connected with free WiFi, enjoy the convenience of a washing machine, and start your mornings with a delicious breakfast on request — all while being just steps away from the beach. </p>
            </div>
        </div>
    </section>

    );
}