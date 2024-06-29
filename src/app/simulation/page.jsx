"use client"
import Progress from '@/components/Simulation-components/Progress/Progress'
import Header from '@/components/Simulation-components/header/Header'
import "./simulation.css"

import React, { useContext } from 'react'
import PatientProfile from '@/components/Simulation-components/PatientProfile/PatientProfile'
import Introduction from '@/components/Simulation-components/Introduction/Introduction'
import { SimulationProgressContext} from '@/Contexts/SimulationProgressContext'
import Interview from '@/components/Simulation-components/Interview/Interview'
import Tests from '@/components/Simulation-components/Tests/Tests'
import DiagnosesSection from '@/components/Simulation-components/diagnoses/DiagnosesSection'




const Simulation = () => {

 const{
handleBack,
handleNext,
step,
setStep,
widthOfProgressLine,
setWidthOfProgressLine,
progresAndStepscontainer
}= useContext(SimulationProgressContext)



  return (
    <>

 <main className={`simulation-main`}>
  {/* introduction */}

<Header/>
<article className={step === 0 ? 'simulation-introduction' : "hide"}>
<PatientProfile/>
<div className='each-section-wrapper'>
<Introduction/>
</div>
</article>
 {/* interview */}
<article className={step === 1 ? 'simulation-interview' : "hide"}>
<Interview/>
</article>
<article className={step >= 2 ? 'simulation-introduction' : "hide"}>
<PatientProfile/>
<div className='each-section-wrapper'>
  <Tests/>
  <DiagnosesSection/>
</div>
</article>

<Progress/>
 </main>
    </>
   
  )
}

export default Simulation
