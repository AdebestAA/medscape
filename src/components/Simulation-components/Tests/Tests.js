import { useContext, useEffect, useState } from "react"
import "./tests.css"
import { SimulationProgressContext } from "@/Contexts/SimulationProgressContext"

const Tests = () => {
const [containerClass,setContainerClass] = useState("tests-container")
const [translate,setTranslate ] = useState(0)
     const{step}= useContext(SimulationProgressContext)


    const testList = [
        {
            id:1,
            name:"Comprehensive Metabolic Panel",
            action:"ORDER",
            guidance:""
        },
        {
            id:2,
            name:"Fluid Challenge Test",
            action:"ORDER",
            guidance:""
        },
        {
            id:3,
            name:"Urinalysis",
            action:"ORDER",
            guidance:""
        },
        {
            id:4,
            name:"Urine Culture",
            action:"ORDER",
            guidance:""
        },
        {
            id:5,
            name:"Urinary Sodium and Urea Excretion",
            action:"ORDER",
            guidance:""
        },
        {
            id:6,
            name:"INR/Prothrombin Time",
            action:"ORDER",
            guidance:""
        },
        {
            id:7,
            name:"Model for End-Stage Liver Disease (MELD) Score",
            action:"ORDER",
            guidance:""
        },
        {
            id:8,
            name:"Blood Cultures",
            action:"ORDER",
            guidance:""
        },
        {
            id:9,
            name:"Renal Tubular Injury Biomarkers",
            action:"ORDER",
            guidance:""
        },
        {
            id:10,
            name:"Renal/bladder Ultrasound",
            action:"ORDER",
            guidance:""
        },
        {
            id:11,
            name:"Chest X-Ray",
            action:"ORDER",
            guidance:""
        },
        {
            id:12,
            name:"Diagnostic paracentesis",
            action:"ORDER",
            guidance:""
        },
    ]

    useEffect(()=>{
      if (step ===  2) {
        setContainerClass("tests-container show")
      }
      else{
        setContainerClass("tests-container hide")
      }
    },[step])

  return (
    <div className={containerClass}>
      <header className='header-tests'>
        <h1 className='header-heading'>Tests</h1>
            <p className='header-paragraph'>Select appropriate tests for the patient.</p>
      </header>

      <article className='list-container'>
<header className='list-header'>
<span className='name-section'>
    NAME
</span>
<span>ACTION</span>
<span>GUIDANCE</span>
</header>

<section className='info-continer'>
    {testList.map((item,index)=>{


return (
<aside key={item.id} className="list-data">
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
    </div>
  )
}

export default Tests
