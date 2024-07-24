"use client"
import Image from 'next/image'
import React, { useContext } from 'react'
import { FaTwitter } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import "./header.css"
import { FunctionalityContext } from '@/FunctionalilyContext';
import { SimulationProgressContext } from '@/Contexts/SimulationProgressContext';

const Header = () => {
  const {setShowPatientProfile,showPatientProfile} = useContext(FunctionalityContext)
  const {step,setStep} = useContext(SimulationProgressContext)
  return (
 <nav className='nav-header'>
  <div className='show-side-bar-container'><button className='show-side-bar'>Click</button></div>
  <div className='image-and-header'>
<p className='header-paragraph'>Medscape Patient Case Simulations</p>
<div className='image-div-header relative'>
  <Image src={"/medscape.png"} fill alt='medscape' />
  </div>
</div>

<aside className='aside-header'>
    <p className='share'>SHARE</p>
    <button className='social-btn'><FaTwitter/></button>
    <button className='social-btn'><FaLinkedinIn/></button>
  {step !== 1 ? <button className='chart-btn'  onClick={()=>{
      setShowPatientProfile(true)
    }}>CHART</button> : ""}
</aside>
 </nav>
  )
}

export default Header
