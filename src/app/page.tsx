import Cuntact from "@/components/cuntact";
import ExploreTangalle from "@/components/ExploreTangalle";
import Features from "@/components/Features";
import Hero from "@/components/Hero";
import RoomsAmenities from "@/components/RoomsAmenities";
import Testimonials from "@/components/Testimonials";
import WhoWeAre from "@/components/WhoWeAre";
import Image from "next/image";

export default function Home() {
  return (
    <section className="flex justify-center px-4 sm:px-6 md:px-8 min-h-screen w-full">
      <div className="bg-white w-full flex flex-col  items-center ">
       <Hero/>
       <Features />
       <WhoWeAre />
       <RoomsAmenities />
       <ExploreTangalle/>
       <Testimonials/>
       <Cuntact/>
      </div>

      

    </section>
  );
}
