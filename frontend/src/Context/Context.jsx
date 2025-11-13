import React, { createContext, useEffect, useState } from "react";
import { useNavigate } from 'react-router-dom';
import { toast } from "react-toastify";

export const SalusContext = createContext()

const SalusProvider = ({ children }) => {

    const [posts, setPosts] = useState(() => {
        const stored = sessionStorage.getItem("posts")
        return stored ? JSON.parse(stored) : []
    })

    const [categorias, setCategorias] = useState(() => {
        const stored = sessionStorage.getItem("categorias");
        return stored ? JSON.parse(stored) : []; // se não tiver nada, começa vazio
    });

    useEffect(() => {
        sessionStorage.setItem("categorias", JSON.stringify(categorias));
        sessionStorage.setItem("posts", JSON.stringify(posts));
    }, [categorias, posts]);

    const [users, setUsers] = useState([
        { name: "anderson", email: "and@gmail.com", password: "123" },
        { name: "wander", email: "wander@gmail.com", password: "123" }
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

    // funcao para deletar categorias
    const deleteCategory = (id) => {
        const novasCategorias = categorias.splice(1, id)
        console.log(novasCategorias)
        setCategorias(novasCategorias)
        sessionStorage.setItem("categorias", novasCategorias)
        toast.success("Categoria deletada com sucesso")
    }

     // função para criar categorias 
    const createPost = (post) => {
        console.log(post)

        const novoPost = { id: posts.length + 1, title: post.title, category: post.category, author: sessionStorage.getItem("loggedUser"), date: new Date().toLocaleDateString("pt-BR") }

        setPosts((prev) => [...prev, novoPost,])

        sessionStorage.setItem("posts", JSON.stringify(posts))

        toast.success("Post adicionado com sucesso")
        navigate("/adm/gerenciarposts")
    }

        // funcao para deletar categorias
    const deletePost = (id) => {
        const novosPosts = posts.splice(1, id)
        console.log(novosPosts)
        setPosts(novosPosts)
        sessionStorage.setItem("posts", novosPosts)
        toast.success("Post deletado com sucesso")
    }

    const contextValue = { posts, users, isUserLogged, setIsUserLogged, navigate, logout, changePassword, categorias, setCategorias, createCategory, deleteCategory, posts, createPost, deletePost }
    return (
        <SalusContext.Provider value={contextValue}  >
            {children}
        </SalusContext.Provider>
    )
}

export default SalusProvider