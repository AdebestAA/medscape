import React, { useContext, useEffect, useState } from 'react'
import "./OrderPopUp.css"
import { OrdersContext } from './OrdersProvider'

const OrderPopUp = () => {
    const{handleSubmit,setPreferred,preferred,currenMedication,showOrdersPopUp,setShowOrdersPopUp,showStatus,preferredToShow,setPreferredToShow}= useContext(OrdersContext)
const [currentItemToDisplay,setCurrentItemtoDisplay] = useState({}) 

    useEffect(()=>{
const findPreferredToShow = currenMedication.find(item => item.id === preferredToShow)

console.log(findPreferredToShow);
setCurrentItemtoDisplay(findPreferredToShow)



    },[preferredToShow])

  return (
<main className='popup-container'>
   <div className='show-info'>
<article className='article-orders-popup'>
    <header>
        <h1>not playing</h1>
    </header>

    <section className='subheading-container'>
        <p className='subheading'>
        {currentItemToDisplay.name}
        </p>
        <span>[continue]</span>
        </section>

        <aside className='paragraphs'>
            {currentItemToDisplay.message}
        </aside>
</article>
   <button className='close-btn' onClick={()=> setShowOrdersPopUp(false)}>close</button>
   </div>

</main>
  )
}

export default OrderPopUp
