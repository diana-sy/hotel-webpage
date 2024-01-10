import Link from "next/link";
import {BsFillSendFill} from "react-icons/bs";

 const Footer = () => {
  return (
    <footer className="mt-16 ">
        <div className="container mx-auto px-4">
            <Link href={"/"} className="font-black text-tertiary-dark"> 
          Hotel
             </Link>
           <h4 className="font-semibold text-[40px] py-6">Contact</h4>  
           <div className="flex flex-wrap gap-16 items-center justify-between">
          <p> Yliopistokatu 13 A</p>
          <div className="flex items-center py-4">
<BsFillSendFill/>
<p className="ml-2"> niceday</p>
          </div>
           </div>
            </div> 

    </footer>
  )
}
export default Footer;
