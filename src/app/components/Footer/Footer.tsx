import Link from "next/link";
import {BsFillSendFill, BsTelephoneOutbound} from "react-icons/bs";
import{BiMessageDetail} from "react-icons/bi";

 const Footer = () => {
  return (
    <footer className="mt-16 ">
        <div className="container mx-auto px-4">
            <Link href={"/"} className="font-black text-xl text-tertiary-light"> 
       Hotel
             </Link>

           <h4 className="font-semibold text-[40px] py-6">Contact</h4> 
           
           <div className="flex flex-wrap gap-16 items-center justify-between align-text-bottom">
           <div className="flex-1">
          <p> Yliopistokatu 13 A</p>
          <div className="flex items-center py-4">
<BsFillSendFill/>
<p className="ml-2"> niceday</p>
          </div>
          <div className="flex items-center">
<BsTelephoneOutbound/>
<p className="ml-2"> +358 55 780 11 21</p>
          </div>
          <div className="flex items-center pt-4">
<BiMessageDetail/>
<p className="ml-2"> nice.hotel@email.com</p>
          </div>
           </div>

           <div className="flex-1 md:text-right">
            <p className="pb-4"> About Us</p>
            <p className="pb-4"> Get in Touch</p>
            <p className="pb-4"> Our Privacy Commitment</p>
            <p className="pb-4"> Terms of Service</p>
            <p> Customer Assistence</p>
           </div>

            <div className="flex-1 md:text-right">
                <p className="pb-4"> Wellness </p>
                <p className="pb-4"> Fitness </p>
                <p className="pb-4"> Sports </p>
                <p className="pb-4"> Dining Experiance </p>
                <p> Events</p>
            </div>
            </div> 
            </div>

        <div className="bg-tertiary-light h-10 md:h-[70px] mt-16 w-full bottom-0 left-0"/>

    </footer>
  );
};
export default Footer

