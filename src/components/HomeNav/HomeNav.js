"use client"
import Image from "next/image";
import Link from "next/link";
import "./HomeNav.css"
import { IoSearchSharp } from "react-icons/io5";
import { useAmp } from "next/amp";
import { useState } from "react";
import { FunctionalityProvider, useSearchBar } from "@/FunctionalilyContext";
import SearchBar from "../SearchBar/SearchBar";
import { IoCloseOutline } from "react-icons/io5";


export default function HomeNav() {
  const [showMobileScreenNav,setShowMobileScreenNav] = useState(false)
  const {openSearchBar,showSearchBar} = useSearchBar()

  
  const handleShowMobileScreenNav = ()=>[
    setShowMobileScreenNav(prev => !prev)
  ]
  return (
  

 <nav className="flex justify-between items-center pr-2 pt-2">
    {showSearchBar &&<SearchBar/>}
<button 
onClick={handleShowMobileScreenNav}
className="relative w-12 h-10 flex flex-col items-center justify-center space-y-1">
  <span className={`btn-span-class ${showMobileScreenNav ? "animate-top" : "animate-top-initial"}`} ></span>
  <span className={`btn-span-class ${showMobileScreenNav ? "hide-center" : ""}`} ></span>
  <span className={`btn-span-class ${showMobileScreenNav ? "animate-bottom" : "animate-bottom-initial"}`} ></span>
</button>
<div className="relative w-[120px] h-[30px]">
<Image 
src={"/medscape.png"}
fill
priority 
sizes="(max-width:200px) 100vw"
alt="medscape" />
</div>

<button onClick={openSearchBar} className={`border-2 border-[#d0cdcd] w-8 h-8 ${showSearchBar ? "invisible" : ""} `} ><IoSearchSharp className="text-createAccountBtnColor text-[22px] mx-auto"  /></button>

 </nav>

  );
}


