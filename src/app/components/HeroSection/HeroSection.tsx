"use client";
import Image from "next/image";
import CountUpNumber from "../CountUpNumber/CountUpNumber";


const HeroSection = () => {
  return (
   <section className="flex px-4 items-center gap-12 container mx-auto">
<div className="py-10 h-full">
{/*Heading */}
<h1 className="font-heading mb-6 dark:text-tertiary-light">
     Welcome to our Hotel!
      </h1>
<p className="text -[#4a4a4a] dark:text-[white] mb-12 max-w-lg">
    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
</p>
<button className="btn-primary">
     Book a room!</button>

     {/*Room types */}
<div className="flex justify-between mt-12">
    <div className="flex gap-3 flex-col items-center justify-center">
<p className="text-xs lg:text-xl text-center"> Standart room</p>
<CountUpNumber endValue={60} duration={1000}/>
    </div>
    <div className="flex gap-3 flex-col items-center justify-center">
<p className="text-xs lg:text-xl text-center"> Delux room</p>
<CountUpNumber endValue={20} duration={800}/>
    </div>
    <div className="flex gap-3 flex-col items-center justify-center">
<p className="text-xs lg:text-xl text-center"> Suite room</p>
<CountUpNumber endValue={10} duration={600}/>
    </div>
    </div>
</div>

{/* Images*/}
<div className="md:grid hidden gap-8 grid-cols-1">
    <div className="rounded-2xl overflow-hidden h-48">
        <Image 
        src="/images/hero-deluxe.jpg" 
        alt="hero-deluxe"
        width={300}
        height={300}
        className="img scale-animation"
        />
    </div>
<div className="grid grid-cols-2 gap-8 h-48">
    <div className="rounded-2xl overflow-hidden">
        <Image 
        src="/images/hero-standart.jpg" 
        alt="hero-standart"
        width={300}
        height={300}
        className="img scale-animation"
        />
    </div>
    <div className="rounded-2xl overflow-hidden">
        <Image 
        src="/images/hero-suite.jpg" 
        alt="hero-suite"
        width={300}
        height={300}
        className="img scale-animation"
        />
    </div>

</div>
</div>
   </section>
  );
};

export default HeroSection
