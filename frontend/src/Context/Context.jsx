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
        { name: "Karin Stela", email: "karin@gmail.com", password: "123", desc: "Karin Stela é a Presidente da empresa, liderando com visão estratégica e foco no crescimento sustentável. Com forte capacidade de gestão e tomada de decisão, ela orienta as diretrizes corporativas, fortalece a cultura organizacional e impulsiona a inovação. Seu compromisso com excelência e transparência garante o alinhamento entre as equipes e o avanço contínuo da empresa." },
        { name: "Wander Delgado", email: "wander@gmail.com", password: "123", desc: "Wander Delgado é o Diretor Financeiro, responsável pela gestão estratégica dos recursos da empresa. Com visão analítica e foco em resultados, ele conduz o planejamento financeiro, otimiza processos e garante uma administração eficiente e transparente." }
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

    const createUser = (info) => {
        console.log(info)

        const novoUser = { name: info.name, email: info.email, password: info.password, desc: info.desc}

        setUsers((prev) => [...prev, novoUser,])

        toast.success("Usuário adicionado com sucesso")
        navigate("/adm/usuarios")
    }

    // funcao para deletar categorias
    const deleteCategory = (id) => {
        const novasCategorias = categorias.splice(1, id)
        console.log(novasCategorias)
        setCategorias(novasCategorias)
        sessionStorage.setItem("categorias", novasCategorias)
        toast.success("Categoria deletada com sucesso")
    }

    const [categoryId, setCategoryId] = useState()

    // função para editar post
    const editPost = (info) => {
        const id = sessionStorage.getItem("categoryId")
        sessionStorage.setItem("categoryId", id)
        setCategoryId(id)

        if (info.category === "") {
            toast.warning("Selecione uma categoria antes de editar um post")
        } else {
            const findPost = posts.find(
                (post) => post.id === Number(info.id)
            )

            if (findPost) {
                setPosts(posts.map(post =>
                    post.id === info.id ? info : post
                ))
                navigate("adm/gerenciarposts")
            }
        }
    }

    // função para editar categoria
    const editCategory = (info) => {
        const id = sessionStorage.getItem("categoryId")
        sessionStorage.setItem("categoryId", id)
        setCategoryId(id)

        const findCategory = categorias.find(
            (categoria) => categoria.id === Number(info.id)
        )

        if (findCategory) {
            setCategorias(categorias.map(post =>
                post.id === info.id ? info : post
            ))
            navigate("adm/categorias")
        }
    }

    // função para criar categorias 
    const createPost = (post) => {
        console.log(post)

        if (post.category === "") {
            toast.warning("Selecione uma categoria antes de criar um post")
        } else {
            const novoPost = { id: posts.length + 1, title: post.title, desc: post.desc, category: post.category, author: sessionStorage.getItem("loggedUser"), date: new Date().toLocaleDateString("pt-BR"), views: 0 }

            setPosts((prev) => [...prev, novoPost,])

            sessionStorage.setItem("posts", JSON.stringify(posts))

            toast.success("Post adicionado com sucesso")
            navigate("/adm/gerenciarposts")
        }
    }

    // funcao para deletar categorias
    const deletePost = (id) => {
        const novosPosts = posts.splice(1, id)
        console.log(novosPosts)
        setPosts(novosPosts)
        sessionStorage.setItem("posts", novosPosts)
        toast.success("Post deletado com sucesso")
    }

    // função para verificar se está logado

    const contextValue = { posts, users, isUserLogged, setIsUserLogged, navigate, logout, changePassword, categorias, setCategorias, createCategory, deleteCategory, createPost, deletePost, editPost, categoryId, setCategoryId, editCategory, setPosts, createUser }
    return (
        <SalusContext.Provider value={contextValue}  >
            {children}
        </SalusContext.Provider>
    )
}

export default SalusProvider