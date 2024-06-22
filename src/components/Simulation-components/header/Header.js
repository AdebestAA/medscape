import Image from 'next/image'
import React from 'react'
import { FaTwitter } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import "./header.css"

const Header = () => {
  return (
 <nav className='nav-header'>
<p className='header-paragraph'>Medscape Patient Case Simulations</p>
<div className='image-div-header relative'>
  <Image src={"/medscape.png"} fill alt='medscape' />
</div>

<aside className='aside-header'>
    <p>SHARE</p>
    <button><FaTwitter/></button>
    <button><FaLinkedinIn/></button>
</aside>
 </nav>
  )
}

export default Header
