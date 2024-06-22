"use client"
const {  createContext, useState, useContext } = require("react")

const FunctionalityContext = createContext()

const FunctionalityProvider = ({children})=>{
const [showSearchBar,setShowSearchBar] = useState(false)


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
closeSearchBar
}}>
    {children}
</FunctionalityContext.Provider>
    )
}

const useSearchBar = ()=>{

    return useContext(FunctionalityContext)
}

export {useSearchBar,FunctionalityProvider,FunctionalityContext}
