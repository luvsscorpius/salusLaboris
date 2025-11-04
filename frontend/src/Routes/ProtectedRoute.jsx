import React, { useContext, useEffect } from 'react'
import { SalusContext } from '../Context/Context'
import { Outlet } from 'react-router-dom'
import { toast } from 'react-toastify'

export const ProtectedRoute = () => {
    const { isUserLogged, setIsUserLogged, navigate } = useContext(SalusContext)

    console.log(isUserLogged)

    // se ainda não sabe o estado do login, evita renderizar qualquer coisa
    if (isUserLogged === null || isUserLogged === "") {
        setIsUserLogged(false)
        sessionStorage.setItem("isUserLogged", "false")
    }

    useEffect(() => {
        if (isUserLogged === "true") {
            navigate('/adm/blog')
        } else if (isUserLogged === null || isUserLogged === "" || isUserLogged === "false") {
            navigate("/login")
            toast.error("Usuário não logado, por favor entre antes de acessar essa rota")
        }
    }, [isUserLogged, navigate, setIsUserLogged])

    return <Outlet />
}
