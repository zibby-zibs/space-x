import React, { useState, useContext, useEffect } from 'react'
import data from "../data.json"

const AppContext = React.createContext()


const AppProvider = ({ children }) => {
    const [crewPeople, setCrewPeople] = useState(data);
    const [value, setValue] = useState(0);
    const [showmodal, setShowModal] = useState(false);
return (
    <AppContext.Provider
      value={{
        crewPeople,
        setCrewPeople,
        value,
        setValue,
        showmodal,
        setShowModal,
      }}
    >
      {children}
    </AppContext.Provider>
  )
}
// make sure use
export const useGlobalContext = () => {
  return useContext(AppContext)
}

export { AppContext, AppProvider }