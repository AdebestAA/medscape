"use client"
import Image from 'next/image'
import Link from 'next/link'
import { useEffect, useState } from 'react'
import { IoMdCheckmarkCircleOutline } from "react-icons/io";
import { FaRegEye } from "react-icons/fa6";
import { FaRegEyeSlash } from "react-icons/fa6";
import { CiLock } from "react-icons/ci";
import { FaApple } from "react-icons/fa";
import "../register/register.css"
import "./login.css"
import { usePathname, useRouter } from 'next/navigation';

const Login = () => {

    const router = useRouter()
    const pathName = usePathname()

    const googleIcon = ()=> {
        return   <svg className='google-icon-global-font' xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="100" height="100" viewBox="0 0 48 48">
<path fill="#FFC107" d="M43.611,20.083H42V20H24v8h11.303c-1.649,4.657-6.08,8-11.303,8c-6.627,0-12-5.373-12-12c0-6.627,5.373-12,12-12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657C34.046,6.053,29.268,4,24,4C12.955,4,4,12.955,4,24c0,11.045,8.955,20,20,20c11.045,0,20-8.955,20-20C44,22.659,43.862,21.35,43.611,20.083z"></path><path fill="#FF3D00" d="M6.306,14.691l6.571,4.819C14.655,15.108,18.961,12,24,12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657C34.046,6.053,29.268,4,24,4C16.318,4,9.656,8.337,6.306,14.691z"></path><path fill="#4CAF50" d="M24,44c5.166,0,9.86-1.977,13.409-5.192l-6.19-5.238C29.211,35.091,26.715,36,24,36c-5.202,0-9.619-3.317-11.283-7.946l-6.522,5.025C9.505,39.556,16.227,44,24,44z"></path><path fill="#1976D2" d="M43.611,20.083H42V20H24v8h11.303c-0.792,2.237-2.231,4.166-4.087,5.571c0.001-0.001,0.002-0.001,0.003-0.002l6.19,5.238C36.971,39.205,44,34,44,24C44,22.659,43.862,21.35,43.611,20.083z"></path>
</svg>
    }
 const [showPassword,setShowPassword] = useState(false)
 const benefits = ["Latest medical news and expert perspectives","Essential drugs, diseases, and clinical tools","Free CME and professional online education"]
  return (
    <main className='bg-register-bg w-full h-full xxl:pt-[1.8rem] xl:pt-[2rem] lg:pt-[2rem] md:pt-[2rem] sm:pt-[2rem] xsm:pt-[2rem]'>
    <article className='flex lg:flex-row flex-col xxl:px-32 lg:gap-8 md:gap-[2rem] xl:px-16 xl:gap-2 lg:px-12 md:px-2'>
<section className=' xxl:w-[62%] xl:w-[60%] lg:w-[60%] md:w-[90%] w-[90%] lg:mx-[0rem] mx-auto'>
<div className='relative w-[130px] h-[25px] mx-auto xxl:mb-[1.7rem] xl:mb-[1.3rem] mb-[1.5rem] '>
    <Image src={"/medscape.png"} fill alt='medscape-logo' className='object-cover'/>
</div>
{/* form section */}

<div className='w-[100%] shadow-global-class bg-white rounded-md mx-auto xxl:px-24 xl:px-12 lg:px-8 md:px-8 sm:px-[1.8rem] xsm:px-[1.5rem] py-4'>
{/* languages button */}

   
    {/*  register/login  tab*/}
    <div className='flex justify-center lg:justify-evenly md:justify-evenly sm:justify-evenly xsm:justify-evenly xxl:space-x-4 xl:space-x-3 my-6 '>
        <button 
        onClick={()=> router.push("/register")}
         className={pathName === "/register" ? 'font-bold border-b-2 border-borderColor text-[14px]' : "text-[14px]"}>Create Account</button>
        <button  
        className={pathName === "/login" ? 'font-bold border-b-2 border-borderColor text-[14px]' : "text-[14px]"}>Log In</button>
</div>
{/* sign up header */}
<h5 className='font-semibold text-center xl:text-xl lg:text-md '>Log In To Your Account</h5>
{/* form container itself */}

<form action="" className='flex flex-col'>
<label htmlFor="email" className='font-semibold mt-[5px] mb-[3px]'>Email</label>
<input 
    id='email'
    type="email"
    className='bg-inputFormColor px-[8px] py-[8px] rounded-sm  focus:outline-none focus:border-[blue] focus:border-[1px]'
 />
 <label htmlFor="password" className='font-semibold mt-[5px] mb-[3px]' >Password</label>
 <div className='w-full relative'>
 <input 
 id='password'
 className='bg-inputFormColor px-[8px] py-[8px] rounded-sm w-full focus:outline-none focus:border-[blue] focus:border-[1px]'
 type={showPassword ? "text" : "password"} 
 />
 <span onClick={()=>setShowPassword(prev => !prev) } className='absolute top-[30%] right-[3%] cursor-pointer'>{showPassword ? <FaRegEyeSlash/> : < FaRegEye/> }</span>
 </div>


<button type='submit' className='bg-createAccountBtnColor text-white xl:font-bold lg:font-semibold self-center xl:px-24 lg:px-[5rem] md:px-[4.5rem]  
xsm:px-[4.3rem] xl:py-2 lg:py-[0.3rem] rounded-full xl:mb-6 lg:mb-4 xl:mt-12 lg:mt-10 md:my-10 sm:my-6 xsm:my-6 '>Log In</button>
<div className='flex justify-center xl:text-[14px] lg:text-[12px]  md:text-[15px] font-bold sm:text-[13px] xsm:text-[10px]'>
<Link href={"#"} className='text-createAccountBtnColor'>Send me an automatic login link</Link>
</div>

{/* or section */}
<div className='md:my-[1.5rem] sm:my-[0.6rem] xsm:my-[0.5rem] flex items-center justify-between'>
    <hr  className='w-[40%] h-[1px] bg-[#767674]'/>
    <span className='text-[0.8rem] font-[200] text-[#767674]'>or</span>
    <hr  className='w-[40%] h-[1px] bg-[#767674]'/>
</div>

{/* continue with... */}
<aside>
    <p className='text-center'>Continue with</p>
    <div className='flex items-center justify-center space-x-4 mt-[1rem] md:mb-[1.7rem] md:mb-[0.9rem]'>
<button className='flex items-center justify-center  md:w-[130px] sm:w-[115px] 
xsm:w-[115px] md:h-[40px] sm:h-[35px] xsm:h-[35px] border-[1px] border-black rounded-[2px]'>
<span  className='mr-[4px]'><FaApple /></span>Apple
</button>
<button className='flex items-center justify-center md:w-[130px] sm:w-[115px] 
xsm:w-[115px] md:h-[40px] sm:h-[35px] xsm:h-[35px] border-[1px] rounded-[2px]'>
 <span className='mr-[4px]'>{googleIcon()}</span>Google
</button>
    </div>
</aside>
</form>
</div>
</section>
{/* benefit section */}
<section className='xxl:w-[38%] xl:w-[40%] lg:w-[40%] md:w-[90%] sm:w-[90%] xsm:w-[90%] lg:mx-[0rem] md:mx-auto sm:mx-auto xsm:mx-auto md:w-[40%] flex flex-col word-spacing-class lg:items-center mt-[1rem]'>
<div className='xxl:w-[70%] xl:w-[80%] space-y-4 lg:mt-[7rem] lg:mt-[2rem] sm:text-[1rem] xsm:text-[0.7rem]'>

<header className='font-bold text-center'>
    Free Unlimited Access and Benefits
</header>
{benefits.map((item,index)=>{
    
    return <p key={index} className='font-medium flex'><span className='mt-[5px]'> < IoMdCheckmarkCircleOutline className='text-registerStepsColor mr-4 text-[1.3rem]'/></span> {item}</p>
    })}
</div>
</section>
    </article>
{/* support section */}
<section className='xxl:pl-[8rem] xl:pl-[4.5rem] lg:pl-[4rem]  lg:mt-[0.5rem] md:mt-[2rem] '>
    <div className='flex xxl:w-[52%] xl:w-[55%] lg:w-[53%] md:w-[90%] 
    sm:w-[90%] xsm:w-[90%] lg:justify-between lg:mx-[0rem] md:mx-auto sm:mx-auto
    xsm:mx-auto md:justify-between sm:justify-between xsm:justify-between md:mt-[0rem] sm:mt-[1rem]  xsm:mt-[0.9rem]'>
<p className='sm:text-[14px] xsm:text-[10px] flex items-center'>< CiLock className='text-[1rem]'/> Your Information is safe and secure</p>
<Link href={"#"} className='text-createAccountBtnColor font-semibold xl:text-[0.9rem] lg:text-[0.8rem] md:text-[0.8rem] sm:text-[0.7rem] xsm:text-[0.5rem]'>Contact Support </Link>
    </div>
</section>
<div className='text-[gray] text-center text-[8px] font-medium my-[4rem]'>
    ADVERTISEMENT
</div>

<footer className='mt-[4rem] flex  flex-col footer-class'>
    {/* footer links */}
    <section className='xxl:w-[25%] xl:w-[40%] lg:w-[50%] text-sm sm:text-[0.8rem]
     xsm:text-[0.6rem] mx-auto flex justify-center space-x-[5px] py-4' >
    <Link href={"#"} className='px-2 text-black' >About</Link>
    <Link href={"#"} className='relative px-2 apply-vertical-line-class  text-black'>Privacy Policy</Link>
    <Link href={"#"}  className='relative px-2 apply-vertical-line-class  text-black' >Terms of Use</Link>
    <Link href={"#"}  className='relative px-2 apply-vertical-line-class  text-black'>Cookies</Link>
    </section> 
<p className='xxl:w-[50%] xl:w-[60%] lg:w-[70%] md:w-[90%] sm:w-[90%] xsm:w-[90%] lg:text-[1rem] md:text-[0.9rem] sm:text-[0.8rem] xsm:text-[0.7rem] mx-auto text-center'>All material on this website is protected by copyright, Copyright © 1994-2024 by WebMD LLC. This website also contains material copyrighted by 3rd parties.</p>
</footer>




    </main>
  )
}

export default Login
