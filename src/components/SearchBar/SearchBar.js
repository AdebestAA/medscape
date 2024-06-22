"use client"
import { FunctionalityProvider, useSearchBar } from '@/FunctionalilyContext';
import React from 'react'
import { IoSearchSharp } from "react-icons/io5";
import { IoCloseOutline } from "react-icons/io5";
const SearchBar = () => {
    const {closeSearchBar,showSearchBar} = useSearchBar()
  return (
   <section className='z-10 opacity-50 top-0 fixed w-screen h-screen bg-[white] pt-2'>
<p className=' text-end' >
    <button onClick={closeSearchBar} className='text-[45px] font-bold text-[gray]'><IoCloseOutline className='font-bold'/></button>
    </p>
    <div className='mt-6 flex items-center justify-center '>
    <input type="text"
   className='bg-inputFormColor px-2 h-8 placeholder:font-medium placeholder:text-[#00] border-[1px] border-[gray] rounded-sm'
    placeholder='SEARCH'
     />
      <button onClick={closeSearchBar} className="border-2 border-[#d0cdcd]  w-8 h-8 bg-inputFormColor ">
        <IoSearchSharp className="text-createAccountBtnColor  text-[22px] mx-auto" />
        </button>
     </div>
   </section>
   
  )
}

export default SearchBar
