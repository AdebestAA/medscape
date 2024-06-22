import React from 'react'

const Demographics = () => {
  return (
    <div className='demographics-container'>
      <div className='details'>
        <section className='each-detail'>
          <span>Age:</span>
          <span>87 years</span>
        </section>
        <section className='each-detail'>
          <span>Gender:</span>
          <span>Female</span>
        </section>
        <section className='each-detail border-style'>
          <span>Weight</span>
          <span> 67.5 kg</span>
        </section>
        <section className='each-detail  border-style'>
          <span>Height</span>
          <span>165 cm</span>
        </section>
        <section className='each-detail'>
          <span>BMI</span>
          <span>24.8</span>
        </section>
        <section className='each-detail'>
          <span>Allergies:</span>
          <span>none</span>
        </section>

      </div>


      <article className='article'>
        <div className='article-desc-container'>
        <h2 className='article-desc'>Case Description</h2>
        </div>
<div className='article-paragraphs'>
  <p>Lisa T. is a 61-year-old White woman with a 3-year history of liver cirrhosis and portal hypertension who presents today to the ED with a 2-day history of abdominal swelling and discomfort, malaise, lower-extremity edema, and oliguria. Her symptoms have worsened over the past 48 hours.</p>
<br />
<p>Eight years ago, she was diagnosed with liver disease due to HCV infection discovered on routine screening. She received a 12-week course of antiretroviral treatment at the time of HCV diagnosis and achieved virologic cure. Regular monitoring demonstrated stable liver disease until follow-up assessment 3 years ago, which demonstrated disease progression consistent with cirrhosis and portal hypertension. Treatment with spironolactone and propranolol was initiated at that time.</p>
<br />
<p>Her most recent follow-up appointment was 2 months ago, when testing revealed stable liver disease and serum creatinine levels at the high end of normal.
</p>
</div>
      </article>
    </div>
  )
}

export default Demographics
