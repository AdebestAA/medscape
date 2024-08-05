"use client"
import { useContext, useEffect, useState } from "react"
import "./diagnoses.css"
import { SimulationProgressContext } from "@/Contexts/SimulationProgressContext"

const DiagnosesSection = () => {
    const [containerClass,setContainerClass] = useState("diagnoses-container")
     const{step}= useContext(SimulationProgressContext)
    const diagnosesList = [
        {
            id:1,
            name:"Comprehensive Metabolic Panel",
            action:"ADD",
            guidance:""
        },
        {
            id:2,
            name:"Fluid Challenge Test",
            action:"ADD",
            guidance:""
        },
        {
            id:3,
            name:"Urinalysis",
            action:"ADD",
            guidance:""
        },

    ]

    const existingDiagnosesList = [
        {
            id:1,
            name:"Chronic Liver Disease - Cirrhosis",
            date:"Jul 13, 2021"
        },
        {
            id:2,
            name:"Portal Hypertension",
            date:"Jul 13, 2021"
        },
        {
            id:3,
            name:"Chronic Liver Disease - Fibrosis",
            date:"Feb 10, 2016"
        },
        {
            id:4,
            name:"Hepatitis C Viral Infection",
            date:"Jul 13, 2021"
        },
        {
            id:5,
            name:"Chronic Liver Disease - Cirrhosis",
            date:"Feb 10, 2016	"
        },
    ]

       useEffect(()=>{
      if (step ===  3) {
        setContainerClass("diagnoses-container show")
      }
      else{
        setContainerClass("diagnoses-container hide")
      }
    },[step])

  return (
    <div className={containerClass}>
        <header className='header-diagnoses'>
        <h1 className='header-heading'>DIAGNOSES</h1>
            <p className='header-paragraph'>Select appropriate tests for the patient.</p>
      </header>
      <article className='list-container-diagnoses'>
<header className='list-header-diagnoses'>
<span className='name-section'>
    NAME
</span>
<span>ACTION</span>
<span>GUIDANCE</span>
</header>

<section className='info-continer'>
    {diagnosesList.map((item,index)=>{


return (
<aside key={item.id} className="list-data-diagnoses">
    <span>
    {item.name}
</span>
<span>{item.action}</span>
<span>{item.guidance}</span>
</aside>

)
    })}
</section>
      </article>
<div className="checkbox-div">
     <input type="checkbox"  id="checkbox"/>
    <label htmlFor="checkbox">I will add a diagnoses list no added here</label>
</div>

{/* Existing Diagnoses Section */}

<div className="existing-container">
    <header className="existing-header-container">
        <h1 className="existing-header">
            Existing Diagnoses
        </h1>
    </header>

    <section className="existing-data-list-container">
        <aside className="existing-data-list-tag">
            <span>NAME</span>
            <span>DATE</span>
        </aside>

      {existingDiagnosesList.map((item,index)=>{

        return (
            <aside key={item.id} className="existing-data-list-info">
        <span>{item.name}</span>
        <span>{item.date}</span>
            </aside>
        )
      })}
    </section>
</div>

    </div>
  )
}

export default DiagnosesSection
