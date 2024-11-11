"use client"
import Image from 'next/image'
import React, { useContext } from 'react'
import { FaTwitter } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import "./header.css"
import { FunctionalityContext } from '@/FunctionalilyContext';
import { SimulationProgressContext } from '@/Contexts/SimulationProgressContext';
import { FaBars } from "react-icons/fa6";
import { useRouter } from 'next/navigation';

const Header = () => {
  const {setShowPatientProfile,showPatientProfile,showSideNav,setShowSideNav} = useContext(FunctionalityContext)
  const router = useRouter()

  const {step,setStep} = useContext(SimulationProgressContext)
  return (
 <nav className='nav-header'>
  <div className='show-side-bar-container'><button className='show-side-bar' onClick={()=> setShowSideNav(true)} >< FaBars/></button></div>
  <div className='image-and-header'>
<p className='header-paragraph'>Medscape Patient Case Simulations</p>
<div className='image-div-header relative'>
  <Image src={"/medscape.png"} fill alt='medscape' />
  </div>
</div>

<aside className='aside-header'>
    <p className='share'>SHARE</p>
    {/* SOCIAL BTN */}
    {/* <button className='social-btn'><FaTwitter/></button>
    <button className='social-btn'><FaLinkedinIn/></button> */}

        {/* LOGIN AND SIGN BTN */}
    <button className='social-btn' style={{paddingInline:"5px",background:"transparent"}} onClick={()=> router.push("/login")} >LOGIN</button>
    <button className='social-btn' style={{paddingInline:"5px",background:"transparent"}} onClick={()=> router.push("/register")}>SIGN UP</button>
  {step !== 1 ? <button className='chart-btn'  onClick={()=>{
      setShowPatientProfile(true)
    }}>CHART</button> : ""}
</aside>
 </nav>
  )
}

export default Header
