"use client";
import React, {FC} from "react";
import CountUpNumber from "../CountUpNumber/CountUpNumber";

type Props ={
    heroHeading: React.ReactNode;
    imgHeroSection: React.ReactNode;
}

const ClientComponent: FC<Props> = (props) => {

const {heroHeading, imgHeroSection} = props;

  return (
    
    <section className="flex px-4 items-center gap-12 container mx-auto">
    <div className="py-10 h-full">
      {/*Heading */}
     {heroHeading}

         {/*Room types */}
    <div className="flex justify-between mt-12">
        <div className="flex gap-3 flex-col items-center justify-center">
    <p className="text-xs lg:text-xl text-center"> Standart room</p>
    <CountUpNumber endValue={60} duration={2000}/>
        </div>
        <div className="flex gap-3 flex-col items-center justify-center">
    <p className="text-xs lg:text-xl text-center"> Delux room</p>
    <CountUpNumber endValue={20} duration={2000}/>
        </div>
        <div className="flex gap-3 flex-col items-center justify-center">
    <p className="text-xs lg:text-xl text-center"> Suite room</p>
    <CountUpNumber endValue={10} duration={2000}/>
        </div>
        </div>
    </div>
    
    {/* Images*/}

    {imgHeroSection}
       </section>
      );
}

export default ClientComponent
