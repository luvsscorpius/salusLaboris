import React from 'react'
import * as A from '../AdicionarPost/Styles'
import * as B from '../Blog/Styles'
import { Menu } from '../../Components/Menu/Menu'
import { IoIosSave } from "react-icons/io";

export const AdicionarCategoria = () => {
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
                        <input type="text" name='titulo' />
                    </span>

                    <div>

                        <button> <IoIosSave size={22} /> Adicionar categoria</button>
                    </div>
                </A.novoPostBody>
            </A.novoPostContainer>
        </A.main>
    )
}
