import { FunctionalityContext } from '@/FunctionalilyContext'
import Link from 'next/link'
import React, { useContext } from 'react'

const SlideInNav = () => {
  const {showSideNav,setShowSideNav} = useContext(FunctionalityContext) 
  return (
    <div className='fixed h-full w-full bg-white  '>
      <aside className='mt-16 px-8 relative bg-red-500'>

        <Link href={"/login"} className='my-8'>login</Link>
        <br />
        <Link href={"/register"} className='my-8'>register</Link>
        <span onClick={()=> setShowSideNav(false)} className='font-bold text-lg absolute right-[5%] top-[5%]'>X</span>
      </aside>
    </div>
  )
}

export default SlideInNav
