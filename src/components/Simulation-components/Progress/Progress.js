"use client"
import React, { useContext, useEffect, useRef, useState } from 'react'
import "./progress.css"
import { SimulationProgressContext } from '@/Contexts/SimulationProgressContext'

const Progress = () => {

  const {
handleBack,
handleNext,
step,
setStep,
widthOfProgressLine,
setWidthOfProgressLine,
progresAndStepscontainer
} 
= useContext(SimulationProgressContext)
  return (
    <div className='progress'>
      <section className='progress-and-btn-container'>
        <button 
          onClick={handleBack}
        className='back-progress'
        >back</button>
        <div className='progress-and-steps-container' ref={progresAndStepscontainer}>
     <header className='steps-container'>
        <span className='step-span'>introduction</span>
        <span className='step-span'>interview</span>
        <span className='step-span'>tests</span>
        <span className='step-span'>diagnoses</span>
        <span className='step-span' > orders</span>
        <span className='step-span' >decision review</span>
        <span className='step-span'>case review</span>
     </header>
     <div className='progress-line-container'>
        <div className='progress-line' style={{width:widthOfProgressLine + "px"}}>

        </div>
     </div>
        </div>
        <button
         onClick={handleNext}
         className='next-progress'
         >next</button>
      </section>


      <footer className='footer'>
        <aside className='start'>
            <p>Medscape©  2024</p>
<p>Content created and controlled by Medscape</p>
        </aside>
        <aside className='end'>
           
           <button>Restart Progress</button>
           <button>Need help?</button>
           <button>Privacy Policy</button>
        </aside>
      </footer>
    </div>
  )
}

export default Progress
