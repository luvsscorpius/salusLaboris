import React, { useContext, useState } from 'react'
import { Menu } from '../../Components/Menu/Menu';
import * as B from '../Blog/Styles'
import * as A from './Styles'
import { IoIosSave } from "react-icons/io";
import { CiCirclePlus } from "react-icons/ci";
import { SalusContext } from '../../Context/Context';
import { Link } from 'react-router-dom';

export const EditarCategoria = () => {

    const { editCategory, categorias, categoryId } = useContext(SalusContext)

    const findCategory = categorias.find(
        (categoria) => categoria.id === Number(categoryId)
    )

    const [updateCategoria, setUpdateCategoria] = useState({
        id: categoryId,
        title: findCategory.title,
        author: sessionStorage.getItem("loggedUser"),
        date: new Date().toLocaleDateString("pt-BR")
    })

    return (
        <A.main>
            <Menu />

            <A.novoPostContainer>

                <B.blogHeader className='header'>
                    <div>
                        <h2>Editar Categoria</h2>
                        <Link to="/adm/adicionarcategoria"><CiCirclePlus size={45} /></Link>
                        </div>

                    <hr />
                </B.blogHeader>

                <A.novoPostBody>
                    <span>
                        <label htmlFor="titulo">Título</label>
                        <input type="text" name='titulo' value={updateCategoria.title} onChange={(e) => setUpdateCategoria({...updateCategoria, title: e.target.value})}/>
                    </span>

                    <div>

                        <button onClick={() => editCategory(updateCategoria)}> <IoIosSave size={22} /> Editar Categoria</button>
                    </div>
                </A.novoPostBody>

            </A.novoPostContainer>
        </A.main>
    )
}
