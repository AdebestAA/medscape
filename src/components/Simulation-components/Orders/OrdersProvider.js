"use client"
const { createContext, useState, useEffect } = require("react");



export const OrdersContext = createContext()

export const OrdersProvider = ({children})=>{

const [preferred,setPreferred] = useState({
    propranolol:"discontinue",
    spironolactone:"discontinue"
})
const [showOrdersPopUp,setShowOrdersPopUp] = useState(false) 
const [preferredToShow,setPreferredToShow] = useState("")
const [currenMedication,setCurrenMedication] = useState([
    {
        id:1,
        name:"propranolol",
        status:"discontinue",
        message:"AGA guidelines recommend holding nonselective beta-blockers once AKI is diagnosed because they can decrease blood pressure, which can exacerbate AKI by reducing renal blood flow, among other risks.1 Thus, treatment with propranolol should be discontinued."
    },
    {
        id:2,
        name:"spironolactone",
        status:"discontinue",
        message:"AGA guidelines recommend holding diuretics once AKI is diagnosed because they can exacerbate intravascular volume depletion, which can worsen AKI, among other risks.1 Thus, treatment with spironolactone should be discontinued for now."
    }
])



const handleSubmit = (e)=>{
e.preventDefault()
// for propranolol
if (preferred.propranolol === "continue") {
    const copyCurrentMed = [...currenMedication]
    const getPropranolol = copyCurrentMed.find(item => item.name === "propranolol")
const indexOfPropranolol = copyCurrentMed.findIndex(item => item.name === "propranolol")
// change status
getPropranolol.status = "continue"
// remove from the array
copyCurrentMed.splice(indexOfPropranolol,1)

// add back
copyCurrentMed.splice(indexOfPropranolol,0,getPropranolol)

setCurrenMedication([...copyCurrentMed])
}
else{
      const copyCurrentMed = [...currenMedication]
    const getPropranolol = copyCurrentMed.find(item => item.name === "propranolol")
const indexOfPropranolol = copyCurrentMed.findIndex(item => item.name === "propranolol")
// change status
getPropranolol.status = "discontinue"
// remove from the array
copyCurrentMed.splice(indexOfPropranolol,1)

// add back
copyCurrentMed.splice(indexOfPropranolol,0,getPropranolol)

setCurrenMedication([...copyCurrentMed])

}


// for spironolactone
if (preferred.spironolactone === "continue") {
    const copyCurrentMed = [...currenMedication]
    const getSpironolactone = copyCurrentMed.find(item => item.name === "spironolactone")
const indexOfSpironolactone = copyCurrentMed.findIndex(item => item.name === "spironolactone")

console.log("let me",getSpironolactone);
getSpironolactone.status = "continue"
// remove from the array
copyCurrentMed.splice(indexOfSpironolactone,1)

// add back
copyCurrentMed.splice(indexOfSpironolactone,0, getSpironolactone)

setCurrenMedication([...copyCurrentMed])
}
else{
   const copyCurrentMed = [...currenMedication]
    const getSpironolactone = copyCurrentMed.find(item => item.name === "spironolactone")
const indexOfSpironolactone = copyCurrentMed.findIndex(item => item.name === "spironolactone")

// remove from the array
getSpironolactone.status = "discontinue"
copyCurrentMed.splice(indexOfSpironolactone,1)

// add back
copyCurrentMed.splice(indexOfSpironolactone,0,getSpironolactone)

setCurrenMedication([...copyCurrentMed])

}


}




const showStatus = (id)=>{
setShowOrdersPopUp(true)
setPreferredToShow(id)
  
}
    return (
        <OrdersContext.Provider value={{
           handleSubmit,setPreferred,preferred,currenMedication,showOrdersPopUp,setShowOrdersPopUp,showStatus,
           preferredToShow,setPreferredToShow

        }}>
            {children}
        </OrdersContext.Provider>
    )
}