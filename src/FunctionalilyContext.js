"use client"
import { createContext,useState,useContext } from "react"



const FunctionalityContext = createContext()

const FunctionalityProvider = ({children})=>{
const [showSearchBar,setShowSearchBar] = useState(false)
const [showPatientProfile,setShowPatientProfile] = useState(false)
const [showPatientQuestion,setShowPatientQuestion] = useState(false)

const openSearchBar = ()=>{
    setShowSearchBar(true)
}
const closeSearchBar = ()=>{
    setShowSearchBar(false)
}
    return (
<FunctionalityContext.Provider value={{
showSearchBar,
openSearchBar,
closeSearchBar,
showPatientProfile,
setShowPatientProfile,
showPatientQuestion,
setShowPatientQuestion
}}>
    {children}
</FunctionalityContext.Provider>
    )
}

const useSearchBar = ()=>{

    return useContext(FunctionalityContext)
}

export {useSearchBar,FunctionalityProvider,FunctionalityContext}
