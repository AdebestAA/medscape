"use client"
import React, { useState } from 'react'

const Visits = () => {
const visitData =  [
  {
  id:1,
  date:"Today",
  rr:"20",
  kg:"49",
  bmi:"23",
  text:"Gastroenterology visit: Lisa T., an established 61-year-old patient with a 3-year history of cirrhosis and portal hypertension, presents for routine follow-up of cirrhosis. She does not have any complaints or concerns. Physical examination is unremarkable. Laboratory values demonstrate stable disease. Platelet count is mildly reduced. INR and PT are normal. Liver ultrasound shows no alarming signs for hepatocellular carcinom Treatment with spironolactone and propranolol was continued. Lisa was advised to follow up every 3-4 months for laboratory studies and a liver ultrasound every 6 months",

  },
  {
  id:2,
  date:"Apr 21, 2024",
  rr:"38",
  kg:"88",
  bmi:"10",
  text:"Gastroenterology visit: Lisa T., an established 61-year-old patient with a 3-year history of cirrhosis and portal hypertension, presents for routine follow-up of cirrhosis. She does not have any complaints or concerns. Physical examination is unremarkable. Laboratory values demonstrate stable disease. Platelet count is mildly reduced. INR and PT are normal. Liver ultrasound shows no alarming signs for hepatocellular carcinom Treatment with spironolactone and propranolol was continued. Lisa was advised to follow up every 3-4 months for laboratory studies and a liver ultrasound every 6 months",

  },
  {
  id:3,
  date:"dec 21, 1999",
  rr:"35",
  kg:"54",
  bmi:"23",
  text:"Gastroenterology visit: Lisa T., an established 61-year-old patient with a 3-year history of cirrhosis and portal hypertension, presents for routine follow-up of cirrhosis. She does not have any complaints or concerns. Physical examination is unremarkable. Laboratory values demonstrate stable disease. Platelet count is mildly reduced. INR and PT are normal. Liver ultrasound shows no alarming signs for hepatocellular carcinom Treatment with spironolactone and propranolol was continued. Lisa was advised to follow up every 3-4 months for laboratory studies and a liver ultrasound every 6 months",

  }
]

const [showParagraph,setShowParagrah] = useState([])

const handleShowParagraph = (id)=>{
let copyShowPrg = [...showParagraph]
// console.log(copyShowPrg);
let findIndex = copyShowPrg.findIndex(num => num === id )
console.log(findIndex);
if (findIndex < 0) {
  copyShowPrg = [...copyShowPrg,id]
  setShowParagrah(copyShowPrg)
console.log(copyShowPrg);
}
else{
  const filterOut = copyShowPrg.filter(number => number !== id)
  console.log(filterOut);
setShowParagrah(filterOut)
}

}

  return (
    <div>

        <article className='article'>
          {/* heading */}
        <div className='article-desc-container'>
        <h2 className='article-desc'>Past Visits</h2>
        </div>
        {/* table */}
<div className='visit-table'>
  {/* heading of visit data info */}
<header className='header-visit'>
  <div className='header-div-paragraph'>
    	<p className='header-paragraph'>Date</p>
  </div>
  <div className='header-visit-data'>
    <span className='data-info'>RR</span>
    <span className='data-info'>KG</span>
    <span className='data-info'>	BMI</span>
  </div>
</header>
 {/* heading of visit data */}
<section>
  {visitData.map((item,index)=>{

    return (
      <article key={index} className='article-visit-data-container'>
        <section className='basic-info'>
 <div className='visit-date-and-btn'>
    	<p className='visit-date'>{item.date}</p>
      <button onClick={()=> handleShowParagraph(item.id)} className='visit-btn'> {showParagraph.some(num => num === item.id )  ? "view less" : "view more"}</button>
  </div>
  <div className='visit-data'>
    <span className='visit-data-info'>{item.rr}</span>
    <span className='visit-data-info'>{item.kg}</span>
    <span className='visit-data-info'>{item.bmi}</span>
  </div>
        </section>
        <section className='more-info'>
  {showParagraph.some(num => num === item.id )  ? <p>{item.text}</p> : ""}
        </section>
      </article>
    )
  })}

</section>

</div>
      </article>
    </div>
  )
}

export default Visits
