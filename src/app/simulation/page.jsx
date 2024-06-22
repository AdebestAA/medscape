"use client"
import Progress from '@/components/Simulation-components/Progress/Progress'
import Header from '@/components/Simulation-components/header/Header'
import "./simulation.css"

import React, { useContext } from 'react'
import PatientProfile from '@/components/Simulation-components/PatientProfile/PatientProfile'
import Introduction from '@/components/Simulation-components/Introduction/Introduction'
import { SimulationProgressContext} from '@/Contexts/SimulationProgressContext'
import Interview from '@/components/Simulation-components/Interview/Interview'


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
<Introduction/>
</article>
 {/* interview */}
<article className={step === 1 ? 'simulation-interview' : "hide"}>
<Interview/>
</article>

<Progress/>
 </main>
    </>
   
  )
}

export default Simulation
