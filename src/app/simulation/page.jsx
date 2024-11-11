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
import OrdersSection from '@/components/Simulation-components/Orders/Orders'
import OrderPopUp from '@/components/Simulation-components/Orders/OrderPopUp'
import SimulationPopUp from '@/components/PopUps/SimulationPopUp/SimulationPopUp'
import { OrdersContext } from '@/components/Simulation-components/Orders/OrdersProvider'
import DecisionReview from '@/components/Simulation-components/DecisionReview/DecisionReview'
import CaseReview from '@/components/Simulation-components/CaseReview/CaseReview'
import { FunctionalityContext } from '@/FunctionalilyContext'
import SlideInNav from '@/components/Simulation-components/SlideInNav/SlideInNav'





const Simulation = () => {
const {showSideNav,setShowSideNav} = useContext(FunctionalityContext)
 const{
handleBack,
handleNext,
step,
setStep,
widthOfProgressLine,
setWidthOfProgressLine,
progresAndStepscontainer
}= useContext(SimulationProgressContext)


const{showOrdersPopUp}= useContext(OrdersContext)


  return (
    <>

 <main className={`simulation-main`}>
  {/* popup */}
{showOrdersPopUp && <OrderPopUp/>}
  {/* introduction */}
{showSideNav && < SlideInNav />}
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
  <OrdersSection/>
  <DecisionReview/>
  <CaseReview/>
</div>
</article>

<Progress/>
 </main>
    </>
   
  )
}

export default Simulation
