import Features from "@/components/Features";
import Hero from "@/components/Hero";
import WhoWeAre from "@/components/WhoWeAre";
import Image from "next/image";

export default function Home() {
  return (
    <section className="flex justify-center px-4 sm:px-6 md:px-8 min-h-screen w-full">
      <div className="bg-blue-50 w-full flex flex-col  items-center ">
       <Hero/>
       <Features />
       <WhoWeAre />
      </div>
      

    </section>
  );
}
