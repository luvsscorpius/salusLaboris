import React, { createContext, useEffect, useState } from "react";
import { useNavigate } from 'react-router-dom';
import { toast } from "react-toastify";

export const SalusContext = createContext()

const SalusProvider = ({ children }) => {

    const posts = [
        { id: 0, category: "Segurança do trabalho", date: "12/09/2025", author: "Wander Delgado", title: "EPIs essenciais para proteger sua equipe", desc: "Você sabe quais são os equipamentos de proteção individual mais importantes para a sua empresa? Neste conteúdo, explicamos quais são os EPIs indispensáveis para cada tipo de atividade, como utilizá-los corretamente e qual a periodicidade de substituição e manutenção...." },
        { id: 1, category: "Segurança do trabalho", date: "12/09/2025", author: "Wander Delgado", title: "EPIs essenciais para proteger sua equipe", desc: "Você sabe quais são os equipamentos de proteção individual mais importantes para a sua empresa? Neste conteúdo, explicamos quais são os EPIs indispensáveis para cada tipo de atividade, como utilizá-los corretamente e qual a periodicidade de substituição e manutenção...." },
        { id: 1, category: "Segurança do trabalho", date: "12/09/2025", author: "Wander Delgado", title: "EPIs essenciais para proteger sua equipe", desc: "Você sabe quais são os equipamentos de proteção individual mais importantes para a sua empresa? Neste conteúdo, explicamos quais são os EPIs indispensáveis para cada tipo de atividade, como utilizá-los corretamente e qual a periodicidade de substituição e manutenção...." },
        { id: 1, category: "Segurança do trabalho", date: "12/09/2025", author: "Wander Delgado", title: "EPIs essenciais para proteger sua equipe", desc: "Você sabe quais são os equipamentos de proteção individual mais importantes para a sua empresa? Neste conteúdo, explicamos quais são os EPIs indispensáveis para cada tipo de atividade, como utilizá-los corretamente e qual a periodicidade de substituição e manutenção...." },
        { id: 1, category: "Segurança do trabalho", date: "12/09/2025", author: "Wander Delgado", title: "EPIs essenciais para proteger sua equipe", desc: "Você sabe quais são os equipamentos de proteção individual mais importantes para a sua empresa? Neste conteúdo, explicamos quais são os EPIs indispensáveis para cada tipo de atividade, como utilizá-los corretamente e qual a periodicidade de substituição e manutenção...." },
    ]

    const [categorias, setCategorias] = useState(() => {
        const stored = sessionStorage.getItem("categorias");
        return stored ? JSON.parse(stored) : []; // se não tiver nada, começa vazio
    });

    useEffect(() => {
        sessionStorage.setItem("categorias", JSON.stringify(categorias));
    }, [categorias]);

    const [users, setUsers] = useState([
        { email: "and@gmail.com", password: "123" },
        { email: "wander@gmail.com", password: "123" }
    ])

    const navigate = useNavigate()

    const [isUserLogged, setIsUserLogged] = useState(() => {
        const storedValue = sessionStorage.getItem("isUserLogged");
        return storedValue === "true" // converte pra boolean
    })

    const logout = () => {
        setIsUserLogged(false)
        sessionStorage.setItem("isUserLogged", false)
        toast.error("Usuário deslogado com sucesso")
    }

    // função para enviar e-mail
    const changePassword = (email) => {
        const userFound = users.find(
            (user) => user.email === email
        )

        if (userFound) {
            toast.success("Usuário encontrado, enviaremos um link de verificação para o seu e-mail")
            navigate("/login")
        } else {
            toast.error("Usuário não encontrado, informe um e-mail cadastrado no sistema ou entre em contato com o desenvolvedor")
        }
    }

    // função para criar categorias 
    const createCategory = (titulo) => {
        console.log(titulo)

        const novaCategoria = { id: categorias.length + 1, title: titulo, author: sessionStorage.getItem("loggedUser"), date: new Date().toLocaleDateString("pt-BR") }

        setCategorias((prev) => [...prev, novaCategoria,])

        sessionStorage.setItem("categorias", JSON.stringify(categorias))

        toast.success("Categoria adicionada com sucesso")
        navigate("/adm/categorias")
    }

    const contextValue = { posts, users, isUserLogged, setIsUserLogged, navigate, logout, changePassword, categorias, setCategorias, createCategory }
    return (
        <SalusContext.Provider value={contextValue}  >
            {children}
        </SalusContext.Provider>
    )
}

export default SalusProvider