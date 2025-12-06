import React, { useContext, useState } from 'react'
import * as A from '../AdicionarPost/Styles'
import * as B from '../Blog/Styles'
import { Menu } from '../../Components/Menu/Menu'
import { IoIosSave } from "react-icons/io";
import { SalusContext } from '../../Context/Context';

export const AdicionarUsuario = () => {

    const {createUser} = useContext(SalusContext)

    const [user, setUser] = useState([
        {
            name: "",
            email: "",
            password: "",
            desc: ""
        }
    ])

    return (
        <A.main>
            <Menu />

            <A.novoPostContainer>
                <B.blogHeader className='header'>
                    <div>
                        <h2>Novo usuário</h2>
                    </div>

                    <hr />
                </B.blogHeader>

                <A.novoPostBody>
                    <span>
                        <label htmlFor="nome">Nome</label>
                        <input type="text" name='nome' value={user.name} onChange={(e) => setUser({ ...user, name: e.target.value })} required />
                    </span>

                    <span>
                        <label htmlFor="email">Email</label>
                        <input type="email" name='email' value={user.email} onChange={(e) => setUser({ ...user, email: e.target.value })} required />
                    </span>

                    <span>
                        <label htmlFor="password">Senha</label>
                        <input type="text" name='password' value={user.password} onChange={(e) => setUser({ ...user, password: e.target.value })} required />
                    </span>

                    <span>
                        <label htmlFor="desc">Descrição</label>
                        <textarea type="text" name='desc' value={user.desc} onChange={(e) => setUser({ ...user, desc: e.target.value })} required />
                    </span>

                    <div>
                        <button onClick={() => createUser(user)}> <IoIosSave size={22} /> Adicionar usuário</button>
                    </div>
                </A.novoPostBody>
            </A.novoPostContainer>
        </A.main>
    )
}
