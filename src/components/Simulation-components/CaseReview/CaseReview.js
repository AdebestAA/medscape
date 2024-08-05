"use client"
import React, { useContext, useEffect, useState } from 'react'
import "./CaseReview.css"
import { SimulationProgressContext } from '@/Contexts/SimulationProgressContext'






const CaseReview = () => {


     const [containerClass,setContainerClass] = useState("diagnoses-container")
 const{step}= useContext(SimulationProgressContext)

useEffect(()=>{
if (step ===  6) {
setContainerClass("orders-container show")
}
else{
setContainerClass("orders-container hide")
}
},[step])
  return (
    <div className={`${containerClass}`}>
       <header className='header-case-review'>
        <h1 className='header-heading'>CASE REVIEW</h1>
      </header>



      <section className='closing-remark-container'>
        <div className='closing-remark-btn-container'>
            <button className='closing-remark-btn'>Closing Remark</button>
            <div className='line'></div>
        </div>
        <article className='closing-remark-paragraphs-and-header'>
            <h1 className='closing-remark-header'>Closing remarks</h1>
            <p>Lisa T., a 61-year-old White woman with a 3-year history of liver cirrhosis, presents to the ED with abdominal swelling and discomfort, malaise, lower-extremity edema, and oliguria. Her symptoms began about 48 hours ago and rapidly worsened, prompting her to seek emergency care.</p>
            <br />
            <p>She was initially diagnosed with HCV infection and chronic liver disease 8 years ago during routine HCV screening. At that time, she was prescribed a 12-week course of antiretroviral treatment with sofosbuvir/velpatasvir and achieved virologic cure. Regular monitoring demonstrated stable liver disease until follow-up assessment 3 years ago, which showed disease progression consistent with cirrhosis and portal hypertension. Treatment was then started with spironolactone and propranolol. Most recent monitoring 2 months ago with testing revealed stable liver disease.</p>
            <br />
            <p>Today, Lisa presented with signs and symptoms suggestive of ascites (abdominal swelling) and renal dysfunction (oliguria). The patient’s baseline serum creatinine level was 1.2 mg/dL 2 months ago and 4.1 mg/dL today, indicating a diagnosis of AKI (serum creatinine increase of ≥ 0.3 mg/dL within 48 hours or at least 1.5 times from baseline within 7 days).1 Stable creatinine values within the previous 3 months can be used as baseline if a value within the previous 7 days is unavailable.1,2 Thus, today’s patient has AKI, classified as stage 3 given a serum creatinine level ≥ 4.0 mg/dL with an acute increase of at least 0.3 mg/dL.5.</p>
            <br />
            <p>AKI occurs in a substantial number of patients with advanced cirrhosis and can result from various causes.1,2,4 In these cases, evaluation should be directed toward determining the cause of AKI, assessing for precipitating factors (including infection), and uncovering potential hepatic and extrahepatic organ failure.1,2,13 Hepatorenal syndrome (HRS) with AKI is a diagnosis of exclusion.1,5</p>
            <br />
            <p>Workup did not show signs of structural renal injury or infection. Given the presence of cirrhosis with ascites and absence of signs of structural kidney injury, shock, or current or recent use of nephrotoxic drugs, the clinical presentation for today’s patient is consistent with HRS-AKI.1,5</p>
            <br />

            <h1 className='closing-remark-header'>MANAGEMENT CONSIDERATIONS</h1>

            <p>Treatment of HRS-AKI is complex and should involve a multidisciplinary team approach, if possible.2 Once the diagnosis of AKI is made, diuretics and nonselective beta-blockers should be held.1 Pharmacologic treatment of HRS-AKI involves the use of albumin for volume expansion along with a preferred vasoconstrictor.1,2 Options for vasoconstrictor therapy include terlipressin (FDA-approved for this indication and preferred by AGA and AASLD guidelines), norepinephrine, or the combination of octreotide plus midodrine.1,2,14 Treatment with albumin plus vasoconstrictor therapy is continued until a total of 14 days of therapy or until 24 hours after the return of serum creatinine level within ≤ 0.3 mg/dL of baseline for 2 consecutive days.1</p>
    <br />

            <p>Liver transplantation remains the most effective treatment for HRS-AKI because it reverses liver failure, the underlying factor leading to the development of HRS-AKI.1,2 However, given the presence of contraindications and the limited number of available donor organs, patients with HRS-AKI are often unable to proceed with liver transplantation.1,4</p>
    <br />

    <h1 className='closing-remark-header'>ADDITIONAL RESOURCES</h1>

        <p className='additional-resources-link'><a href="#">
        AGA Clinical Practice Update on the Evaluation and Management of Acute Kidney Injury in Patients With Cirrhosis: Expert Review
        </a></p>


        <p className='additional-resources-link'><a href="#">
        AASLD Guidelines on Ascites, Spontaneous Bacterial Peritonitis and Hepatorenal Syndrome, Management
        </a></p>
        </article>
      </section>
    </div>
  )
}

export default CaseReview
