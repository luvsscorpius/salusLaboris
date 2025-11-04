import React, { useContext, useEffect } from 'react'
import { SalusContext } from '../Context/Context'

export const ProtectedRoute = () => {
    const {isUserLogged} = useContext(SalusContext)
    
    useEffect(() => {
        if (isUserLogged === "true") {
            window.open("/adm/blog", "_self")
        } else {
            window.open("/", "_self")
            alert("Você não está logado!")
        }
    }, [isUserLogged])
}
