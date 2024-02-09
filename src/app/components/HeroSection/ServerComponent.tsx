import Image from "next/image";

export const heroHeading =(
    <div>
      
    <h1 className="font-heading mb-6 dark:text-tertiary-light">
         Welcome to our Hotel!
          </h1>
    <p className="text -[#4a4a4a] dark:text-[white] mb-12 max-w-lg">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
    </p>
    <button className="btn-primary">
         Book a room!</button>
    </div>
);

export const imgHeroSection = (
    <>
        <div className="md:grid hidden gap-8 grid-cols-1">
        <div className="rounded-2xl overflow-hidden h-48">
            <Image 
            src="/images/hero-deluxe.jpg" 
            alt="hero-delux"
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

    </>
)