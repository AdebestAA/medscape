"use client"

import { createContext } from "react"




export const PopUpContext = createContext()


export const PopUpProvider = ({children})=>{


    return (
        <PopUpContext.Provider value={{}}>
            {children}
        </PopUpContext.Provider>
    )
}