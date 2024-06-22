"use client"
import React, { useState } from 'react'

const Orders = () => {
const [showDivs,setShowDivs] = useState([])


  const ordersData = [
    {
      name:"propranolol",
      startDate:"Jul 07, 2021",
      endDate:"today",
      more:{
          dose:"400 mg/100 mg",
          route:"oral tablet",
          frequency:"daily"
        }
    },
    {
      name:"propranolol",
      startDate:"Jul 07, 2021",
      endDate:"today",
      more:{
          dose:"400 mg/100 mg",
          route:"oral tablet",
          frequency:"daily"
        }
    },
    {
      name:"propranolol",
      startDate:"Jul 07, 2021",
      endDate:"today",
      more:{
          dose:"400 mg/100 mg",
          route:"oral tablet",
          frequency:"daily"
        }
    },
  ]


  const handleShowDiv = (id)=>{
    let copyShowPrg = [...showDivs]
// console.log(copyShowPrg);
let findIndex = copyShowPrg.findIndex(num => num === id )
console.log(findIndex);
if (findIndex < 0) {
  copyShowPrg = [...copyShowPrg,id]
  setShowDivs(copyShowPrg)
console.log(copyShowPrg);
}
else{
  const filterOut = copyShowPrg.filter(number => number !== id)
  console.log(filterOut);
setShowDivs(filterOut)
}

  }
  return (
    <div>
    <div className='article-desc-container'>
    <h2 className='article-desc'>ORDERS</h2>
    </div>  
    <div className='condition-header-container-diag'>
    <h4 className='condition-header-diag'>MEDICATION HISTORY</h4>
    </div>


    <article>
        <header className='header-container-orders'>
        <span className='header-span-orders'>NAME</span>
        <span className='header-span-orders'>START DATE</span>
        <span className='header-span-orders'>END DATE</span>
      </header>

      <aside className='info-container-orders'>
 {ordersData.map((item,index)=>{


return (
   <article key={index} className='wrapper-data-paragraph'>
<section className='info-wrapper-orders'>
  <div className='data-orders'>
    <p>{item.name}</p>
    <button 
    onClick={()=> handleShowDiv(index)}
    >{showDivs.some(num => num === index )  ? "view less" : "view more"}</button>
  </div>
  <span className='data-orders'>{item.startDate}</span>
  <span className='data-orders'>{item.endDate}</span>
</section>
  {showDivs.some(num => num === index )  ? (
<div className='more-info-orders'>
  <div className='each-more-info-container'>
  <span>Dose:</span> <span>{item.more.dose}</span>
  </div>
  <div className='each-more-info-container'>
  <span>Route:</span> <span>{item.more.route}</span>
  </div>
  <div className='each-more-info-container'>
  <span>Freq:</span> <span>{item.more.frequency}</span>
  </div>
</div>

  ) : ""}

        </article>
)
 })}

      </aside>
    </article>
    </div>
  )
}

export default Orders
