import React, { createContext, useEffect, useState } from "react";
import { useNavigate } from 'react-router-dom';
import { toast } from "react-toastify";
import axios from "axios";

export const SalusContext = createContext()

const SalusProvider = ({ children }) => {

    const [posts, setPosts] = useState(() => {
        const stored = sessionStorage.getItem("posts")
        return stored ? JSON.parse(stored) : []
    })

    const [categorias, setCategorias] = useState(() => {
        const stored = sessionStorage.getItem("categories");
        return stored ? JSON.parse(stored) : []; // se não tiver nada, começa vazio
    });

    useEffect(() => {
        sessionStorage.setItem("posts", JSON.stringify(posts));
    }, [posts]);

    const [users, setUsers] = useState([
        sessionStorage.getItem("users") || []
    ])

    useEffect(() => {
        const fetchUsers = async () => {
            const response = await axios.get("http://localhost:2000/users")
            sessionStorage.setItem("users", JSON.stringify(response.data))
            setUsers(response.data)
        }
        fetchUsers()
    }, [])

    useEffect(() => {
        const fetchCategories = async () => {
            const response = await axios.get("http://localhost:2000/getCategories")
            sessionStorage.setItem("categories", JSON.stringify(response.data))
            setCategorias(response.data)
        }
        fetchCategories()
    }, [])
    
    console.log(categorias.length)

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

    // //        try {
    //     const response = await axios.put("http://localhost:2000/resetPassword")
    // } catch (error) {
    //     console.error(error)
    // }

    // função para enviar e-mail
    const changePassword = async (email) => {
        const userFound = users.find(
            (user) => user.email === email
        )

        if (userFound) {

            try {
                const response = await axios.post("http://localhost:2000/forgotPassword", JSON.stringify(userFound), {
                    headers: { 'Content-Type': 'application/json' }
                })

                toast.success("Usuário encontrado, enviaremos um link de verificação para o seu e-mail")
                navigate("/login")

                return
            } catch (error) {
                toast.error(error)
            }
        } else {
            toast.error("Usuário não encontrado, informe um e-mail cadastrado no sistema ou entre em contato com o desenvolvedor")
        }
    }

    // função para criar categorias 
    const createCategory = async (titulo) => {
        console.log(titulo)

        try {

            const novaCategoria = { id: categorias.length + 1, title: titulo, author: sessionStorage.getItem("loggedUser"), authorId: sessionStorage.getItem("loggedUserId"), date: new Date().toISOString().split('T')[0] }

            const response = await axios.post("http://localhost:2000/addCategory", novaCategoria, {
                headers: { 'Content-Type': 'application/json' }
            })

            if (response.status === 200) {

                setCategorias((prev) => [...prev, novaCategoria,])

                sessionStorage.setItem("categorias", JSON.stringify(categorias))

                toast.success("Categoria adicionada com sucesso")
                navigate("/adm/categorias")
            } else if (response.status === 404) {
                toast.success("Falha ao inserir categoria ao banco de dados")
            }
        } catch (error) {
            console.error(error)
        }
    }

    const createUser = (info) => {
        console.log(info)

        const novoUser = { name: info.name, email: info.email, password: info.password, desc: info.desc }

        setUsers((prev) => [...prev, novoUser,])

        toast.success("Usuário adicionado com sucesso")
        navigate("/adm/usuarios")
    }

    // funcao para deletar categorias
    const deleteCategory = async (id) => {

        try {
            const response = await axios.delete("http://localhost:2000/deleteCategory", JSON.stringify(id), {
                headers: { 'Content-Type': 'application/json' }
            })

            const novasCategorias = categorias.splice(1, id)
            console.log(novasCategorias)
            setCategorias(novasCategorias)
            sessionStorage.setItem("categorias", novasCategorias)
            toast.success("Categoria deletada com sucesso")
        } catch (error) {
            console.error(error)
        }
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
    const editCategory = async (info) => {
        const id = sessionStorage.getItem("categoryId")
        sessionStorage.setItem("categoryId", id)
        setCategoryId(id)

        const findCategory = categorias.find(
            (categoria) => categoria.id === Number(info.id)
        )

        try {
            const response = await axios.post("http://localhost:2000/editCategory", JSON.stringify(info, findCategory), {
                headers: { 'Content-Type': 'application/json' }
            })

            if (findCategory) {
                setCategorias(categorias.map(post =>
                    post.id === info.id ? info : post
                ))
                navigate("adm/categorias")
            }
        } catch (error) {
            console.error(error)
        }
    }

    // função para criar categorias 
    const createPost = async (post) => {
        console.log(post)

        if (post.category === "") {
            toast.warning("Selecione uma categoria antes de criar um post")
        } else {
            const novoPost = { id: post.id, title: post.title, desc: post.desc, category: post.category, categoryId: "teste", author: sessionStorage.getItem("loggedUser"), date: new Date().toISOString().split('T')[0], views: 0 }

            try {
                const response = await axios.post("http://localhost:2000/addPost", JSON.stringify(novoPost), {
                    headers: { 'Content-Type': 'application/json' }
                })
            } catch (error) {
                console.error(error)
            }

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

    const [userId, setUserId] = useState()

    // função para editar usuario
    const editUser = async (info) => {

        const findUser = users.find(
            (user) => user.id === Number(info.id)
        )

        try {
            const response = await axios.put("http://localhost:2000/editUser", JSON.stringify(info, findUser), {
                headers: { 'Content-Type': 'application/json' }
            })

            if (findUser) {
                setUsers(users.map(user =>
                    user.id === info.id ? info : user
                ))
                navigate("adm/usuarios")
                toast.success("Usuário atualizado com sucesso")
            }
        } catch (error) {
            console.error(error)
        }
    }

    // funcao para deletar usuarios
    const deleteUser = async (id) => {
        const ID = Number(sessionStorage.getItem("loggedUserId"))
        if (ID === id) {
            toast.error("Usuário logado, saia e peça para um administrador para excluir sua conta.")
        } else {

            try {
                const response = await axios.delete("http://localhost:2000/deleteUser", JSON.stringify(id), {
                    headers: { 'Content-Type': 'application/json' }
                })

                const novosUsers = users.splice(1, id)
                console.log(novosUsers)
                setUsers(novosUsers)
                toast.success("Usuário deletado com sucesso")
            } catch (error) {
                console.error(error)
            }
        }
    }

    const contextValue = { posts, users, isUserLogged, setIsUserLogged, navigate, logout, changePassword, categorias, setCategorias, createCategory, deleteCategory, createPost, deletePost, editPost, categoryId, setCategoryId, editCategory, setPosts, createUser, deleteUser, editUser, userId, setUserId }
    return (
        <SalusContext.Provider value={contextValue}  >
            {children}
        </SalusContext.Provider>
    )
}

export default SalusProvider