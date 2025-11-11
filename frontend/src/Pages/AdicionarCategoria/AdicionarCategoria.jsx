import React, { useContext, useState } from 'react'
import * as A from '../AdicionarPost/Styles'
import * as B from '../Blog/Styles'
import { Menu } from '../../Components/Menu/Menu'
import { IoIosSave } from "react-icons/io";
import { SalusContext } from '../../Context/Context';

export const AdicionarCategoria = () => {

    const {createCategory} = useContext(SalusContext)

    const [titulo, setTitulo] = useState("")

    return (
        <A.main>
            <Menu />

            <A.novoPostContainer>
                <B.blogHeader className='header'>
                    <div>
                        <h2>Novo categoria</h2>
                    </div>

                    <hr />
                </B.blogHeader>

                <A.novoPostBody>
                    <span>
                        <label htmlFor="titulo">Título</label>
                        <input type="text" name='titulo' value={titulo} onChange={(e) => setTitulo(e.target.value)} />
                    </span>

                    <div>
                        <button onClick={() => createCategory(titulo)}> <IoIosSave size={22} /> Adicionar categoria</button>
                    </div>
                </A.novoPostBody>
            </A.novoPostContainer>
        </A.main>
    )
}
