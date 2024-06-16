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
    <main className='bg-register-bg w-full h-full pt-[1.8rem]'>
    <article className='flex  px-32 gap-8'>
<section className='w-[62%]'>
<div className='relative w-[130px] h-[25px] mx-auto mb-[1.7rem]'>
    <Image src={"/medscape.png"} fill alt='medscape-logo' className='object-cover'/>
</div>
{/* form section */}

<div className='w-[100%] shadow-global-class bg-white rounded-md mx-auto px-24 py-4'>
{/* languages button */}

   
    {/*  register/login  tab*/}
    <div className='flex justify-center space-x-4 my-6'>
        <button 
        onClick={()=> router.push("/register")}
         className={pathName === "/register" ? 'font-bold border-b-2 border-borderColor text-[14px]' : "text-[14px]"}>Create Account</button>
        <button  
        className={pathName === "/login" ? 'font-bold border-b-2 border-borderColor text-[14px]' : "text-[14px]"}>Log In</button>
</div>
{/* sign up header */}
<h5 className='font-semibold text-center text-xl'>Log In To Your Account</h5>
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


<button type='submit' className='bg-createAccountBtnColor text-white font-bold self-center px-24 py-2 rounded-full mb-6 mt-12'>Log In</button>
<div className='flex justify-center text-[14px] font-bold '>
<Link href={"#"} className='text-createAccountBtnColor'>Send me an automatic login link</Link>
</div>

{/* or section */}
<div className='my-[1.5rem] flex items-center justify-between'>
    <hr  className='w-[40%] h-[1px] bg-[#767674]'/>
    <span className='text-[0.8rem] font-[200] text-[#767674]'>or</span>
    <hr  className='w-[40%] h-[1px] bg-[#767674]'/>
</div>

{/* continue with... */}
<aside>
    <p className='text-center'>Continue with</p>
    <div className='flex items-center justify-center space-x-4 mt-[1rem] mb-[1.7rem]'>
<button className='flex items-center justify-center w-[130px] h-[40px] border-[1px] rounded-[2px]'>
<span  className='mr-[4px]'><FaApple /></span>Apple
</button>
<button className='flex items-center justify-center w-[130px] h-[40px] border-[1px] rounded-[2px]'>
 <span className='mr-[4px]'>{googleIcon()}</span>Google
</button>
    </div>
</aside>
</form>
</div>
</section>
{/* benefit section */}
<section className='w-[38%] flex flex-col word-spacing-class items-center '>
<div className='w-[70%] space-y-4 mt-[7rem]'>

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
<section className='pl-[8rem] mt-[0.5rem]'>
    <div className='flex w-[52%] justify-between'>
<p className='text-[14px] flex items-center'>< CiLock className='text-[1rem]'/> Your Information is safe and secure</p>
<Link href={"#"} className='text-createAccountBtnColor font-semibold text-[0.9rem]'>Contact Support </Link>
    </div>
</section>
<div className='text-[gray] text-center text-[8px] font-medium my-[4rem]'>
    ADVERTISEMENT
</div>

<footer className='mt-[4rem] flex  flex-col footer-class'>
    {/* footer links */}
    <section className='w-[25%] text-sm text-[0.8rem] mx-auto flex justify-center space-x-[5px] py-4' >
    <Link href={"#"} className='px-2 text-black' >About</Link>
    <Link href={"#"} className='relative px-2 apply-vertical-line-class  text-black'>Privacy Policy</Link>
    <Link href={"#"}  className='relative px-2 apply-vertical-line-class  text-black' >Terms of Use</Link>
    <Link href={"#"}  className='relative px-2 apply-vertical-line-class  text-black'>Cookies</Link>
    </section> 
<p className='w-[50%] text-[1rem] mx-auto text-center'>All material on this website is protected by copyright, Copyright © 1994-2024 by WebMD LLC. This website also contains material copyrighted by 3rd parties.</p>
</footer>




    </main>
  )
}

export default Login
