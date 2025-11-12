import React, { useContext, useEffect } from 'react'
import { SalusContext } from '../Context/Context'
import { Outlet } from 'react-router-dom'
import { toast } from 'react-toastify'

export const ProtectedRoute = () => {
    const { isUserLogged, setIsUserLogged, navigate } = useContext(SalusContext)

    console.log(isUserLogged)

    useEffect(() => {
        if (isUserLogged === "true") {
            navigate('/adm/blog')
        } else if (isUserLogged === null || isUserLogged === "" || isUserLogged === "false" || isUserLogged === false) {
            navigate("/login")
            toast.error("Usuário não logado, por favor entre antes de acessar essa rota")
        }
    }, [isUserLogged, navigate, setIsUserLogged])

    return <Outlet />
}