"use client"
import { createContext, useEffect, useRef, useState } from "react"
import React from "react"



export const SimulationProgressContext = React.createContext()


export const SimulationProgressProvider= ({children})=>{

const [widthOfProgressLine,setWidthOfProgressLine] = useState(0)
const [step,setStep] = useState(0)
const progresAndStepscontainer = useRef()

useEffect(()=>{
    
    if (!progresAndStepscontainer.current) {
        return
    }
    let progresAndStepscontainerEl = progresAndStepscontainer.current
    console.log(progresAndStepscontainerEl);
 const progresAndStepscontainerElLeft =progresAndStepscontainerEl.getBoundingClientRect().left

 console.log(progresAndStepscontainerElLeft);

  
let getSpans = document.querySelectorAll(".step-span")
let currentSpan = getSpans[step].getBoundingClientRect()
let currentSpanLeft = currentSpan.left
let currentSpanRight = currentSpan.right

let getCenterOfCurrentSpan = (currentSpanLeft + currentSpanRight)  / 2  
setWidthOfProgressLine(Math.ceil(getCenterOfCurrentSpan - progresAndStepscontainerElLeft))


},[step,widthOfProgressLine])
    const handleNext = ()=>{
        if (step === 6) {
            return
        }
setStep(prev => prev + 1)
}

const handleBack= ()=>{
         if (step === 0) {
            return
        }
    setStep(prev => prev - 1)
    }



    return (
        <SimulationProgressContext.Provider value={{
handleBack,
handleNext,
step,
setStep,
widthOfProgressLine,
setWidthOfProgressLine,
 progresAndStepscontainer
        }}>
            {children}
        </SimulationProgressContext.Provider>
    )
}