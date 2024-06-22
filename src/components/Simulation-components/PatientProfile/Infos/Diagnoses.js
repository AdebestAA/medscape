import React from 'react'

const Diagnoses = () => {
  return (
    <div>

      {/* header */}
        <div className='article-desc-container'>
        <h2 className='article-desc'>Diagnoses</h2>
        </div>  
    <div className='condition-header-container-diag'>
      <h4 className='condition-header-diag'>CONDITION HISTORY</h4>
    </div>


    <article className='data-container-diag'>
      <header className='header-container-diag'>
        <span className='header-span-diag'>NAME</span>
        <span className='header-span-diag'>START DATE</span>
        <span className='header-span-diag'>END DATE</span>
      </header>

<div className='info-container-diag'>
<section className='info-wrapper-diag'>
  <span className='data-span-diag'>Chronic Liver Disease - Cirrhosis</span>
  <span className='data-span-diag'>Jul 07, 2021</span>
  <span className='data-span-diag'>Ongoing</span>
</section>
<section className='info-wrapper-diag'>
  <span className='data-span-diag'>Chronic Liver Disease - Cirrhosis</span>
  <span className='data-span-diag'>Jul 07, 2021</span>
  <span className='data-span-diag'>Ongoing</span>
</section>
<section className='info-wrapper-diag'>
  <span className='data-span-diag'>Chronic Liver Disease - Cirrhosis</span>
  <span className='data-span-diag'>Jul 07, 2021</span>
  <span className='data-span-diag'>Ongoing</span>
</section>
<section className='info-wrapper-diag'>
  <span className='data-span-diag'>Chronic Liver Disease - Cirrhosis</span>
  <span className='data-span-diag'>Jul 07, 2021</span>
  <span className='data-span-diag'>Ongoing</span>
</section>

</div>
    </article>
    </div>
  )
}

export default Diagnoses
