"use client"
import Image from 'next/image'
import Link from 'next/link'
import { useEffect, useState } from 'react'
import "./register.css"
import { IoMdCheckmarkCircleOutline } from "react-icons/io";
import { IoIosArrowDown } from "react-icons/io";
import { CiLock } from "react-icons/ci";
import { FaRegEye } from "react-icons/fa6";
import { FaRegEyeSlash } from "react-icons/fa6";
import { usePathname, useRouter } from 'next/navigation'

const Register = () => {
    const [clickedProfession,setClickedProfession] = useState("")
    const [showProfessionsList,setShowProfessionsList] = useState(false)
    const [showPassword,setShowPassword] = useState(false)
    const [choosenProfession,setchoosenProfession] = useState("please select...")
    const [agreedChecked,setAgreedChecked] = useState(false)

    const pathName = usePathname()
    const router = useRouter()
    console.log(pathName);
    const professions = ["Physician","Nurse / Advanced Practice Nurse","physician Assistant","Pharmacist","Medical Student","Health Business / Administration", "Media / Press","non-Professsional","Optometrist","Psychologist","Dentist / Oral Health Professional","Other Healthcare Provider"]

    const benefits = ["Latest medical news and expert perspectives","Essential drugs, diseases, and clinical tools","Free CME and professional online education","Share your expert medical opinions by participating in paid surveys"]

    const handleShowProfessions = (item)=>{
        //  setShowProfessionsList((prev)=> !prev)
        setClickedProfession(item)
    }
useEffect(()=>{
 setShowProfessionsList((prev)=> !prev)
},[choosenProfession])

    useEffect(()=>{
console.log(showProfessionsList);
    },[showProfessionsList])



    let options = professions.map((item,index)=>{

        return   <option key={index} value={item}>{item}</option>
    })
  return (
    <main className='bg-register-bg w-full h-full flex-col block xl:pt-[1.8rem] pt-[1.8rem] flex flex-col justify-between md:text-md xsm:text-sm'>
        <div>
    <article className='flex lg:flex-row md:flex-col sm:flex-col xsm:flex-col xxl:px-32 xl:px-16 lg:px-6 md:px-0 sm:px-0 xsm:px-0 xl:gap-8 lg:gap-4'>
<section className='lg:w-[62%] md:w-[90%] sm:w-[90%]  xsm:w-[90%] lg:mx-0 md:mx-auto sm:mx-auto xsm:mx-auto'>
<div
className='relative md:w-[130px] sm:w-[117px] xsm:w-[117px] md:h-[25px] 
sm:h-[20px] xsm:h-[20px] mx-auto mb-[1.7rem]'>
    <Image src={"/medscape.png"} fill alt='medscape-logo' className='object-cover'/>
</div>
{/* form section */}

<div className='w-[100%] shadow-global-class bg-white rounded-md mx-auto xl:px-8
lg:px-4 md:px-4 sm:px-2 xsm:px-2 py-4'>
{/* languages button */}

    <header className='space-x-4 flex items-center justify-center w-[80%] mx-auto'>
        <button className='md:text-[11px] text-[7px] font-bold'>ENGLISH</button>
        <button className='md:text-[11px] text-[7px] '>DEUTSCH</button>
        <button className='md:text-[11px] text-[7px] '>ESPAÑOL</button>
        <button className='md:text-[11px] text-[7px] '>FRANCAIS</button>
        <button className='md:text-[11px] text-[7px] '>PORTUGUÊS</button>
    </header>
    {/*  register/login  tab*/}
    <div className='flex justify-center space-x-4 my-6'>
        <button
        className={pathName === "/register" ? 'font-bold border-b-2 border-borderColor text-[14px]' : "text-[14px]"}>Create Account</button>
        <button
        onClick={()=> router.push("/login")}
        className={pathName === "/login" ? 'font-bold border-b-2 border-borderColor text-[14px]' : "text-[14px]"}>Log In</button>
</div>
{/* sign up header */}
<h5 className='font-semibold text-center xl:text-xl lg:text-lg'>Sign Up for a Free Account</h5>
{/* steps container */}
<article className='w-full h-8 flex px-[2rem] space-x-4 mt-[1.5rem]'>
    {/* first step div */}
<div className='w-1/2 bg-registerStepsColor h-[3px] rounded-lg relative stepper-global-class'></div>
    {/*  second step div */}
<div className='w-1/2 bg-registerStepsColor h-[3px] rounded-lg relative stepper-global-class'></div>
</article>

{/* form container itself */}

<form action="" className='flex flex-col md:mx-0 sm:mx-2 xsm:mx-2'>
<label htmlFor="email" className='font-semibold py-[5px] '>Email</label>
<input 
    id='email'
    type="email"
    placeholder='Enter a valid email'
    className='bg-inputFormColor px-[8px] py-[8px] rounded-sm'
 />
 <label htmlFor="password" className='font-semibold py-[5px]' >Password</label>
 <div className='w-full relative'>
 <input 
 id='password'
 placeholder='Create a password'
 className='bg-inputFormColor px-[8px] py-[8px] rounded-sm w-full'
 type={showPassword ? "text" : "password"} 
 />
 <span onClick={()=>setShowPassword(prev => !prev) } className='absolute top-[30%] right-[3%] cursor-pointer'>{showPassword ? <FaRegEyeSlash/> : < FaRegEye/> }</span>
 </div>
<label htmlFor="country-of-practice" className='font-semibold py-[5px]'>Country of Practice</label>
<input 
id='country-of-practice'
placeholder='Begin typing and select an option below'
  className='bg-inputFormColor px-[8px] py-[8px] rounded-sm'
type="text"
 />
<label htmlFor="profession" className='font-semibold py-[5px]'>Profession</label>

<div 
onClick={()=>{
   setShowProfessionsList((prev)=> !prev)
}}
className='bg-inputFormColor relative flex justify-between items-center  py-[8px]'>
    <span className='ml-4'>{clickedProfession ?  clickedProfession : "please select..."}</span> 
    <span className={showProfessionsList ? "rotate-animation mr-4" : "rotate-animation-opp mr-4"}><IoIosArrowDown /></span>
    {<ul className={showProfessionsList ? 'ul-list show' : "ul-list hide"}>
        {professions.map((item,index)=>{

            return (<li 
                key={index}
                onClick={()=> handleShowProfessions(item)}
              className='hover:bg-inputFormColor text-black font-semibold py-[9px] px-[3px] cursor-pointer '>{item}</li>)
        })}
    </ul>}
</div>

{/* using select */}
 {/* <select
 id='profession'
value={choosenProfession} 

  className='bg-inputFormColor px-[8px] py-[8px] rounded-sm'
onChange={(e)=>{
console.log(e.target.value);
setchoosenProfession(e.target.value)

 }} > */}
    {/* <option value="select" hidden>please select...</option>
     {options} */}
    {/* <option value="Physician">Physician</option>
    <option value="Nurse-Advanced">Nurse / Advanced Practice Nurse</option>
    <option value="Physician-Assistant">physician Assistant</option>
    <option value="Pharmacist">Pharmacist</option>
    <option value="Medical-Student">Medical Student</option>
    <option value="Health-Administration">Health Business / Administration</option> */}
 {/* </select> */}
 {/* agree or disagree */}
  <label htmlFor="primary-specialty" className='font-semibold py-[5px]' >Primary Specialty</label>
 <input 
 id='text'
 placeholder='Begin typing and select an option below...'
   className='bg-inputFormColor px-[8px] py-[8px] rounded-sm'
 type="password" />
<div className='space-x-4 xl:my-8 lg:my-4 md:my-2 sm:my-2 xsm:my-2 pl-2 flex items-center xl:text-[1rem] lg:text-[0.9rem] md:text-[0.9rem] sm:text-[0.7rem]
  xsm:text-[0.7rem]'>
<span 
onClick={()=> setAgreedChecked(prev => !prev)}
className='w-[20px] h-[20px] block border-[2px] hover:border-[3px] focus:border-[3px] border-gray-shade1 text-greenChecked font-extrabold text-2xl flex items-center justify-center cursor-pointer rounded-[2px] span-click '>{agreedChecked ? "✔" : ""}</span>
<p className='inline-block'>{"I agree to Medscape's"} <Link href={"#"} className='text-linkColor ' >Terms of Use</Link> and <Link href={"#"} className='text-linkColor ' >Privacy Policy</Link>  </p>
 </div>

<button type='submit' className='bg-createAccountBtnColor text-white md:font-bold sm:font-medium self-center md:px-12 sm:px-8 xsm:px-8 md:py-2 sm:py-[4px] 
xsm:py-[4px] rounded-full xl:my-4 lg:my-1 md:my-4  sm:my-4 xsm:my-2'> Create an Account</button>
</form>
</div>
</section>
{/* benefit section */}
<section className='lg:w-[38%] md:w-[90%] sm:w-[90%] xsm:w-[90%] lg:mx-0 md:mx-auto sm:mx-auto xsm:mx-auto flex flex-col word-spacing-class items-center '>
<div className='w-[100%] md:space-y-4 sm:space-x-2 xsm:space-x-2 mt-[7rem] xl:mt-[10rem] lg:mt-[10rem] 
md:mt-[1rem] sm:mt-[1rem] xsm:mt-[1rem] xl:font-bold lg:font-medium md:font-medium
 xsm:font-normal md:text-[14px] xsm:text-[11px]'>

<header className=' text-center xxl:w-full xl:w-[80%]'>
    Free Unlimited Access and Benefits
</header>
{benefits.map((item,index)=>{
    
    return <p key={index} className='flex'><span className='mt-[5px]'> < IoMdCheckmarkCircleOutline className='text-registerStepsColor mr-4 text-[1.3rem]'/></span> {item}</p>
    })}
</div>
</section>
    </article>
{/* support section */}
<section className='xxl:pl-[8rem] xl:pl-[6rem] lg:pl-[1.5rem] mt-[1.5rem]'>
    <div className='flex xxl:w-[52%] xl:w-[54%] lg:w-[60%] md:w-[90%] sm:w-[90%]
    xsm:w-[90%] lg:mx-0 md:mx-auto sm:mx-auto xsm:mx-auto justify-between'>
<p className='md:text-[14px] xsm:text-[11px] flex items-center'>< CiLock className='text-[1rem]'/> Your Information is safe and secure</p>
<Link href={"#"} className='text-createAccountBtnColor font-semibold md:text-[0.9rem]  xsm:text-[0.6rem]'>Contact Support </Link>
    </div>
</section>
 </div>

<footer className='mt-[4rem] flex  flex-col footer-class'>
    {/* footer links */}
    <section className='xxl:w-[25%]  xl:w-[40%] text-sm md:text-[0.8rem] 
    xsm:text-[0.6rem] mx-auto flex justify-center space-x-[5px] py-4' >
    <Link href={"#"} className='px-2 text-black' >About</Link>
    <Link href={"#"} className='relative px-2 apply-vertical-line-class  text-black'>Privacy Policy</Link>
    <Link href={"#"}  className='relative px-2 apply-vertical-line-class  text-black' >Terms of Use</Link>
    <Link href={"#"}  className='relative px-2 apply-vertical-line-class  text-black'>Cookies</Link>
    </section> 
<p className='xl:w-[50%] lg:w-[70%] md:w-[90%] sm:w-[90%] xsm:w-[90%] lg:text-[1rem] 
md:text-[0.9rem] sm:text-[0.8rem] xsm:text-[0.6rem] mx-auto text-center'>All material on this website is protected by copyright, Copyright © 1994-2024 by WebMD LLC. This website also contains material copyrighted by 3rd parties.</p>
</footer>
    </main>
  )
}

export default Register