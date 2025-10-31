import React, {createContext, useState} from "react";

export const SalusContext = createContext()

const SalusProvider = ({children}) => {

    const contextValue = {}
    return (
        <SalusContext.Provider value={contextValue}  >
            {children}
        </SalusContext.Provider>
    )
}

export default SalusProvider