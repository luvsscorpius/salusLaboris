import React, { useContext, useState } from 'react'
import { Menu } from '../../Components/Menu/Menu';
import * as B from '../Blog/Styles'
import * as A from './Styles'
import { IoIosSave } from "react-icons/io";
import { SalusContext } from '../../Context/Context';

export const AdicionarPost = () => {

    const { categorias, createPost } = useContext(SalusContext)

    const [novoPost, setNovoPost] = useState({
        title: "",
        category: "",
        desc: ""
    })

    console.log(novoPost.category)

    return (
        <A.main>
            <Menu />

            <A.novoPostContainer>

                <B.blogHeader className='header'>
                    <div>
                        <h2>Novo Post</h2>
                    </div>

                    <hr />
                </B.blogHeader>

                <A.novoPostBody>
                    <span>
                        <label htmlFor="titulo">Título</label>
                        <input type="text" name='titulo' value={novoPost.title} onChange={(e) => setNovoPost({ ...novoPost, title: e.target.value })} />
                    </span>
                    <span>
                        <label htmlFor="categoria">Categoria</label>
                        <select
                            name="categoria"
                            value={novoPost.category}
                            onChange={(e) => setNovoPost({ ...novoPost, category: e.target.value })}
                        >
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
                        <textarea name="conteudo" id="conteudo" value={novoPost.desc} onChange={(e) => setNovoPost({ ...novoPost, desc: e.target.value })}></textarea>
                    </span>

                    <div>

                        <button onClick={() => createPost(novoPost)}> <IoIosSave size={22} /> Adicionar post</button>
                    </div>
                </A.novoPostBody>

            </A.novoPostContainer>
        </A.main>
    )
}
