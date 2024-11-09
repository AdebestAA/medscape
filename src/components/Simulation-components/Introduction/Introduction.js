"use client"
import React, { useEffect, useState } from 'react'
import "./introduction.css"
import { GraphQLClient, gql } from 'graphql-request';

const examinationNotes = [
  {
    title:"GENERAL",
    info:"Alert and oriented; patient appears weak and in mild discomfort"
  },
  {
    title:"LUNG",
    info:"Clear to auscultation; normal breath sounds; no wheezing, crackles, or rales"
  },
  {
    title:"HEART",
    info:"RRR; normal S1/S2; no murmurs, rubs, or gallops"
  },
  {
    title:"ABDOOMEN",
    info:"Abdominal distension; shifting dullness; positive fluid wave; mild tenderness; hepatosplenomegaly; abdominal bruit"
  },
  {
    title:"EXTREMITES",
    info:"Palmar erythema on both hands; lower extremities with peripheral edema"
  },
]

// const hygraphEndpoint = "https://us-east-1-shared-usea1-02.cdn.hygraph.com/content/clzwerf0d01fu07uly9n6a4j1/master"
// const hygraphClient = new GraphQLClient(hygraphEndpoint)

// const getIntroductionData = async()=>{
//   const query = gql `
//   query MyQuery {
//   patients {
//     heading
//     subheading
//     image {
//       url
//     }
//   }
// }
//   `

//   const response = await hygraphClient.request(query)
//   return response
// }


const Introduction = () => {
const [data,setData] = useState(null)

// useEffect(()=>{

// getDataMyData()

// },[])
 const getDataMyData = async()=>{
   const getData =  await getIntroductionData()
   console.log(getData);
   setData(getData)
  }

  return (
    <div className='introducton-container'>
      {/* heading */}
      <div className='introduction-heading-wrapper'>
        <h1 className='introduction-heading'>{data?.patients[0]?.heading}</h1>
        {/* <h1 className='introduction-heading'>INTRODUCTION</h1> */}
      </div>
      {/* sub-heading */}
      <div className='introduction-subheading-wrapper'>
        <h1 className='introduction-subheading'>{data?.patients[0]?.subheading}</h1>
        {/* <h1 className='introduction-subheading'>History of Present Illness</h1> */}
      </div>

      {/* paragraphs */}
      <article className='paragraph-wrapper'>
        <p className=''>Lisa T. is a 61-year-old White woman with a 3-year history of liver cirrhosis and portal hypertension and presents to the ED with a 2-day history of worsening abdominal swelling and discomfort, malaise, lower-extremity edema, and oliguria.
        </p>
        <br />
        <p className='paragraph'>Eight years ago, she was diagnosed with chronic liver disease due to HCV infection following routine screening. She was treated with a 12-week course of sofosbuvir/velpatasvir and achieved virologic cure. Routine monitoring demonstrated stable liver disease until 3 years ago, when findings of disease progression consistent with cirrhosis and portal hypertension were detected. She was then started on treatment with spironolactone and propranolol and was enrolled in the liver transplantation registry.
        </p>
        <br />
        <p className='paragraph'>Two months ago, at a routine monitoring visit, laboratory and imaging studies demonstrated stable disease with serum creatinine levels at the upper limit of normal.
        <br />
        </p>
        <p className='paragraph'>Lisa presents today with a 2-day history of signs and symptoms suggestive of ascites and renal dysfunction of unknown etiology.
        </p>
      </article>

{/* second subheading */}
  <div className='introduction-subheading-wrapper'>
  <h1 className='introduction-subheading'>Family and Social History</h1>
  </div>

  <article>
    <p className='paragraph'>Lisa has no family history of hepatic or renal disorders. Both of her parents died from natural causes; she has no siblings.

She is married and has no children. She works as a court reporter.

She has never smoked, does not consume alcohol, and does not use recreational or illicit drugs.</p>
  </article>

{/* fourth sub heading */}
  <div className='introduction-subheading-wrapper'>
  <h1 className='introduction-subheading'>Physical Examination Notes</h1>
  </div>


{/* table */}


<section className='table-container'>
{examinationNotes.map((item,index)=>{

  return (
    <aside key={index} className='each'>
<span className='title'>{item.title}</span>
<p className='info'>{item.info}</p>
</aside>
  )
})}
</section>
    </div>
  )
}

export default Introduction
