"use client";

import Link from "next/link";
import {VscAccount} from "react-icons/vsc";
import {MdDarkMode, MdOutlineLightMode} from "react-icons/md";
import { useContext } from "react";
import ThemeContext from "@/app/context/themeContext";

const Header = () => {

    const {darkTheme, setDarkTheme}= useContext(ThemeContext);

  return (
   <header className="py-10 px-4 container mx-auto text-xl flex flex-wrap items-center justify-between md:flex-nowrap">
    <div className="flex items-center w-full md:2/3">
<Link href={"/"} className="font-black text-tertiary-light">
    Hotel
</Link>
<ul className="flex items-center ml-5">
<li className="flex items-center">
<Link href={"/auth"}>
    <VscAccount className="cursor-pointer"/>
</Link>
</li>
<li className="ml-2">
    {darkTheme ? (<MdOutlineLightMode className="cursor-pointer"
    onClick={()=> {
     setDarkTheme(false); 
     localStorage.removeItem("hotel-theme");  
    }}/>) :
(<MdDarkMode className="cursor-pointer" onClick={()=> {
    setDarkTheme(true); 
    localStorage.setItem("hotel-theme", "true");
}}/>)
}
</li>
</ul>
    </div>

    <ul className="flex items-center justify-between w-full md:w-1/3 mt-4 ">

<li className="hover:-translate-y-2 duration-500 transition-all">
    <Link href={"/"}> Home </Link>
</li>
<li className="hover:-translate-y-2 duration-500 transition-all">
    <Link href={"/rooms"}> Rooms </Link>
</li>
<li className="hover:-translate-y-2 duration-500 transition-all">
    <Link href={"/"}> Contacts </Link>
</li>

    </ul>
    </header>
  )
}

export default Header