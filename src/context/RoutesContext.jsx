import React, { createContext, useState } from 'react'
export const RouteContext = createContext('')

export const RouteContextProvider = ({children})=>{
 const[route,setRoute] = useState('')
 return <RouteContext.Provider value={{route,setRoute}}>
{children}
 </RouteContext.Provider>
}