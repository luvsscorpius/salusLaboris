import React, { useContext, useState } from 'react'
import { Menu } from '../../Components/Menu/Menu';
import * as B from '../Blog/Styles'
import * as A from './Styles'
import { IoIosSave } from "react-icons/io";
import { CiCirclePlus } from "react-icons/ci";
import { SalusContext } from '../../Context/Context';

export const EditarPost = () => {

    const { editPost, categorias, categoryId, posts } = useContext(SalusContext)

    const findPost = posts.find(
        (post) => post.id === Number(categoryId)
    )

    const [updatePost, setUpdatePost] = useState({
        id: categoryId,
        title: findPost.title,
        desc: findPost.desc,
        category: "",
        author: sessionStorage.getItem("loggedUser"),
        date: new Date().toLocaleDateString("pt-BR")
    })

    return (
        <A.main>
            <Menu />

            <A.novoPostContainer>

                <B.blogHeader className='header'>
                    <div>
                        <h2>Editar Post</h2>
                        <button onClick={() => window.open("/adm/criarpost", "_self")}><CiCirclePlus size={45} /></button>
                    </div>

                    <hr />
                </B.blogHeader>

                <A.novoPostBody>
                    <span>
                        <label htmlFor="titulo">Título</label>
                        <input type="text" name='titulo' value={updatePost.title} onChange={(e) => setUpdatePost({...updatePost, title: e.target.value})}/>
                    </span>
                    <span>
                        <label htmlFor="categoria">Categoria</label>
                        <select name="categoria" onChange={(e) => setUpdatePost({...updatePost, category: e.target.value})}>
                            <option value="">Selecione uma categoria</option>
                            {categorias.map((cat, index) => (
                                <option value={cat.title} key={index}>
                                    {cat.title}
                                </option>
                            ))}
                        </select>
                    </span>
                    <span>
                        <label htmlFor="conteudo">Conteúdo</label>
                        <textarea name="conteudo" id="conteudo" value={updatePost.desc} onChange={(e) => setUpdatePost({...updatePost, desc: e.target.value})}></textarea>
                    </span>

                    <div>

                        <button onClick={() => editPost(updatePost)}> <IoIosSave size={22} /> Editar post</button>
                    </div>
                </A.novoPostBody>

            </A.novoPostContainer>
        </A.main>
    )
}
