"use client"
import React, { useContext, useEffect, useState } from 'react'
import "./DecisionReview.css"
import { SimulationProgressContext } from '@/Contexts/SimulationProgressContext'
import { LiaStarOfLifeSolid } from "react-icons/lia";



const DecisionReview = () => {
 const [containerClass,setContainerClass] = useState("diagnoses-container")
 const{step}= useContext(SimulationProgressContext)

useEffect(()=>{
if (step ===  5) {
setContainerClass("orders-container show")
}
else{
setContainerClass("orders-container hide")
}
},[step])

  return (
    <div className={containerClass}>
        {/* heading */}
      <header className='header-decision-review'>
        <h1 className='header-heading'>DECISON REVIEW</h1>
      </header>

{/* contents and subheading */}
      <section>
    <div className='decision-subheading-container'>
    <h4 className='decision-subheading-paragraph'>Decisions to Consider</h4>
        </div>

<div className='instruction-paragraph-container'>
    <p className='instruction-paragraph'>Click icons to review guidance and adjust selections as needed.</p>
</div>
{/* table of info */}
<article className='info-table-container'>
    {/* table header */}
    <header className='info-table-header'>
        <span className='info-table-name'>NAME</span>
        <div className='container-type-action-omission'>
            <div className='container-type-action'>
        <span className='info-table-type'>TYPE</span>
        <span className='info-table-action'>ACTION</span>
            </div>
        <span className='info-table-omission'>OMISSION <br /> GUIDANCE</span>
        </div>
    </header>

    {/* table info */}
    {/* each info */}
    <aside className='info-table-header add-border-bottom'>
        <span className='info-table-name'>Comprehensive Metabolic Panel</span>
        <div className='container-type-action-omission'>
            <div className='container-type-action'>
        <span className='info-table-type'>test</span>
        <span className='info-table-action'>
            <button className='info-order-btn'>
            ORDER
            </button>
            </span>
            </div>
        <span className='info-table-omission info-icon'><LiaStarOfLifeSolid/></span>
        </div>
    </aside>
    {/* each info */}
    <aside className='info-table-header add-border-bottom'>
        <span className='info-table-name'>Comprehensive Metabolic Panel</span>
        <div className='container-type-action-omission'>
            <div className='container-type-action'>
        <span className='info-table-type'>test</span>
        <span className='info-table-action'>
            <button className='info-order-btn'>
            ORDER
            </button>
            </span>
            </div>
        <span className='info-table-omission info-icon'><LiaStarOfLifeSolid/></span>
        </div>
    </aside>
    {/* each info */}
    <aside className='info-table-header add-border-bottom'>
        <span className='info-table-name'>Comprehensive Metabolic Panel</span>
        <div className='container-type-action-omission'>
            <div className='container-type-action'>
        <span className='info-table-type'>test</span>
        <span className='info-table-action'>
            <button className='info-order-btn'>
            ORDER
            </button>
            </span>
            </div>
        <span className='info-table-omission info-icon'><LiaStarOfLifeSolid/></span>
        </div>
    </aside>
    {/* each info */}
    <aside className='info-table-header add-border-bottom'>
        <span className='info-table-name'>Comprehensive Metabolic Panel</span>
        <div className='container-type-action-omission'>
            <div className='container-type-action'>
        <span className='info-table-type'>test</span>
        <span className='info-table-action'>
            <button className='info-order-btn'>
            ORDER
            </button>
            </span>
            </div>
        <span className='info-table-omission info-icon'><LiaStarOfLifeSolid/></span>
        </div>
    </aside>
    {/* each info */}
    <aside className='info-table-header add-border-bottom'>
        <span className='info-table-name'>Comprehensive Metabolic Panel</span>
        <div className='container-type-action-omission'>
            <div className='container-type-action'>
        <span className='info-table-type'>test</span>
        <span className='info-table-action'>
            <button className='info-order-btn'>
            ORDER
            </button>
            </span>
            </div>
        <span className='info-table-omission info-icon'><LiaStarOfLifeSolid/></span>
        </div>
    </aside>
    {/* each info */}
    <aside className='info-table-header add-border-bottom'>
        <span className='info-table-name'>Comprehensive Metabolic Panel</span>
        <div className='container-type-action-omission'>
            <div className='container-type-action'>
        <span className='info-table-type'>test</span>
        <span className='info-table-action'>
            <button className='info-order-btn'>
            ORDER
            </button>
            </span>
            </div>
        <span className='info-table-omission info-icon'><LiaStarOfLifeSolid/></span>
        </div>
    </aside>
    {/* each info */}
    <aside className='info-table-header add-border-bottom'>
        <span className='info-table-name'>Comprehensive Metabolic Panel</span>
        <div className='container-type-action-omission'>
            <div className='container-type-action'>
        <span className='info-table-type'>test</span>
        <span className='info-table-action'>
            <button className='info-order-btn'>
            ORDER
            </button>
            </span>
            </div>
        <span className='info-table-omission info-icon'><LiaStarOfLifeSolid/></span>
        </div>
    </aside>
</article>
        </section>







        {/* Decision Reviewed */}


<section>
        <div className='decision-subheading-container'>
    <h4 className='decision-subheading-paragraph'>Decisions Reviewed</h4>
        </div>

{/* Decision reviewded table */}
        <article className='dicision-reviewed-table'>
            {/* header */}
        <header className='decision-reviewed-table-header'>
        <span>NAME</span>
        <span>TYPE</span>
        <span>ACTION</span>
        <span>GUIDANCE</span>
        </header>
        {/* list info */}
        <aside className='decision-reviewed-table-header'>
        <span>propranolol</span>
        <span>Therapies</span>
        <span>
<button className='remove-reviewed-decision'>
    REMOVE
</button> </span>
        <span className='reviewed-decision-icon'><LiaStarOfLifeSolid/></span>
        </aside>

        </article>
</section>
    </div>
  )
}

export default DecisionReview
