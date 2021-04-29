import React, { useState } from "react"

const Context = React.createContext({})

export function BuyContext ({children}){
  const [buyProducts, setBuyProducts] = useState([])

  return <Context.Provider value={{buyProducts, setBuyProducts}}>
    {children}
  </Context.Provider>
}

export default Context
