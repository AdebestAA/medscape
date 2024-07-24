"use client"
import React from 'react'
import { MdOutlineKeyboardArrowRight } from "react-icons/md";
const PatientInterview = () => {

  return (
    <div className='patient-interview-section hide-small-screen'>
 <article>
  <h3 className='patient-header'>PATIENT INTERVIEW</h3>
  <p className='patient-paragraph'>Select a question to hear the patient&apos;s response.</p>


<aside className='video-btn'>
  <button>When did your symptom start</button>
<span> <MdOutlineKeyboardArrowRight/> </span>
</aside>
<aside className='video-btn'>
  <button>have you header any problem urinating?</button>
  <span> <MdOutlineKeyboardArrowRight/> </span>
</aside>
 </article>
    </div>
  )
}

export default PatientInterview
