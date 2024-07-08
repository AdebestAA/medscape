import React, { useContext, useEffect, useRef, useState } from 'react'
import "./orders.css"
import { SimulationProgressContext } from '@/Contexts/SimulationProgressContext'
import { ImCheckmark2 } from "react-icons/im";
import { LiaStarOfLifeSolid } from "react-icons/lia";
import OrderPopUp from './OrderPopUp';
import { OrdersContext, OrdersProvider } from './OrdersProvider';
const OrdersSection = () => {
const [containerClass,setContainerClass] = useState("orders-container")
const{step}= useContext(SimulationProgressContext)
const{handleSubmit,setPreferred,preferred,currenMedication,setCurrenMedication,showOrdersPopUp,setShowOrdersPopUp,showStatus,preferredToShow,setPreferredToShow}= useContext(OrdersContext)

useEffect(()=>{
if (step ===  4) {
setContainerClass("orders-container show")
}
else{
setContainerClass("orders-container hide")
}
},[step])
  return (
    <>
   
        
  <div className={containerClass}>
    {/* header */}
     <header className='header-orders'>
        <h1 className='header-heading'>ORDERS</h1>
      </header>


      {/* first section */}

      <section>
        <div className='con-dicon-subheading-container'>
        <h4 className='con-dicon-subheading'>Continue/Discontinue Current Medications</h4>
        </div>

<form action="" className='form' onSubmit={handleSubmit}>


    {currenMedication.map((item,index)=>{
        
        return (
            <aside key={index} className='aside'>
    <h1 className='heading'>{item.name}</h1> 

    {/* select-and-verify  */}
    <div className='select-container'>

{/* continue-select */}
<div className='continue-select select-btn-and-label'>
        <input type="radio"
         name={item.name}
         id='continue'
         value={"continue"}
         onChange={e => setPreferred({...preferred,[item.name]:e.target.value})}
         />
        <label>CONTINUE</label>
</div>
{/* discontinue-select */}
<div className='discontinue-select select-btn-and-label'>
        <input 
        type="radio"
        name={item.name}
        id='discontinue'
        value={"discontinue"}
         onChange={e => setPreferred({...preferred,[item.name]:e.target.value})}
        />
        <label>DISCONTINUE</label>
</div>
    </div>
<button  onClick={()=> showStatus(item.id)} className='verify'>
  {item.status === "continue" ? <ImCheckmark2/> : <LiaStarOfLifeSolid />}
</button>
  
</aside>

)
})}

<div className='apply-btn-outer-container'>
  <div className='apply-btn-inner-container'>
<button type='submit' className='apply-btn'>Apply Selection</button>
  </div>
</div>
{/* <aside className='aside'>
    <h1 className='heading'>propranolol</h1> 
    
    select-and-verify 
    <div className='select-container'>
    
    continue-select
    <div className='continue-select select-btn-and-label'>
    <input type="radio"
    name='preferred'
    id='continue'
    value={"continue"}
    onChange={e => setPreferred({...preferred,propranolol:e.target.value})}
    />
    <label htmlFor="continue">CONTINUE</label>
    </div>
    discontinue-select
    <div className='discontinue-select select-btn-and-label'>
    <input 
    type="radio"
    name='preferred'
id='discontinue'
value={"discontinue"}
onChange={e => setPreferred({...preferred,spironolactone:e.target.value})}
/>
<label htmlFor="discontinue">DISCONTINUE</label>
</div>

</div>

<button  className='verify'>
<LiaStarOfLifeSolid />
</button>

</aside> */}

</form>
      </section>


{/* another section */}
      <section className='third-section'>
      <div className='con-dicon-subheading-container'>
        <h4 className='con-dicon-subheading'>Add Medications</h4>
        </div>
<div className='add-med-paragraph-container'>
        <p className='add-med-paragraph'>Prescribe appropriate medication(s) for the patient.</p>
</div>


{/*Add medication table section */}
<header className='add-med-table-header'>
    <span className='add-med-name-section'>NAME</span>
    <span className='add-med-action-section'>ACTION</span>
    <span className='add-med-guidance-section'>GUIDANCE</span>
</header>
<form className='add-med-container'>
  <article className='each-med'>
  <span className='treatment-name'>Treatment for HRS-AKI</span>
  <section className='select-section' >
   
    <select id="drug" className='order-section-select' onChange={(e)=>{
      
      console.log(e.target.value);
    }} >
        <option defaultValue disabled>
          Select a Drug
        </option>
      <option value="midodrine plus octreotide plus albumin" id='drug' className='add-med-option'>midodrine plus octreotide plus albumin</option>
      <option value="furosemide" id='drug' className='add-med-option'>furosemide</option>
      <option value="noreophinephrine plus albumin" id='drug' className='add-med-option'>noreophinephrine plus albumin</option>
      <option value="terlipressin plus albumin" id='drug' className='add-med-option'>terlipressin plus albumin</option>
    </select>
  </section>
      </article>
     <div className='add-med-checkbox'>
      <input type="checkbox" id='order-med' className='add-med-checkbox-input'/>
      <label htmlFor="order-med">I would order a medication not mentioned here</label>
    </div>
</form>
      </section>


      {/* last section */}

      <section>
        <div className='con-dicon-subheading-container'>
        <h4 className='con-dicon-subheading'>Add Non-Medication Orders</h4>
        </div>
        <div className='add-med-paragraph-container'>
        <p className='add-med-paragraph'>Select appropriate additional orders for the patient.</p>
</div>

<article className='add-non-med-table-container'>
  <header className='add-non-med-table-header'>
    <span>NAME</span>
    <div className='action-category-guidance-header'>
    <span>CATEGORY</span>
    <span>ACTION</span>
    <span>GUIDANCE</span>
    </div>
  </header>
  <aside className='add-non-med-table-list-container'>
    <div className='add-non-med-table-each-list'>

    <span>Liver Transplantation</span>
    <div className='action-category-guidance-list'>
    <span>Procedure</span>
    <span>ADD</span>
    <span>GUIDANCE</span>
    </div>
    </div>
    <div className='add-non-med-table-each-list'>

    <span>Liver Transplantation</span>
    <div className='action-category-guidance-list'>
    <span>Procedure</span>
    <span>ADD</span>
    <span>GUIDANCE</span>
    </div>
    </div>
    <div className='add-non-med-table-each-list'>

    <span>Liver Transplantation</span>
    <div className='action-category-guidance-list'>
    <span>Procedure</span>
    <span>ADD</span>
    <span>GUIDANCE</span>
    </div>
    </div>
    <div className='add-non-med-table-each-list'>

    <span>Liver Transplantation</span>
    <div className='action-category-guidance-list'>
    <span>Procedure</span>
    <span>ADD</span>
    <span>GUIDANCE</span>
    </div>
    </div>

  </aside>
</article>
      </section>
    </div>

</>
  )
}

export default OrdersSection
