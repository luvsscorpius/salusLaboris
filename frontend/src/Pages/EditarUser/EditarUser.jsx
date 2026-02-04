import React, { useContext, useState } from 'react'
import { Menu } from '../../Components/Menu/Menu';
import * as B from '../Blog/Styles'
import * as A from '../EditarCategoria/Styles'
import { IoIosSave } from "react-icons/io";
import { CiCirclePlus } from "react-icons/ci";
import { SalusContext } from '../../Context/Context';
import { Link } from 'react-router-dom';

export const EditarUser = () => {

    const { editUser, users, setUserId, userId } = useContext(SalusContext)

    const findUser = users.find(
        (users) => users.id === Number(userId)
    )

    const [newUser, setNewUser] = useState(
        {
            id: findUser.id,
            name: findUser?.name,
            email: findUser?.email,
            description: findUser?.description
        }
    )

    return (
        <A.main>
            <Menu />

            <A.novoPostContainer>

                <B.blogHeader className='header'>
                    <div>
                        <h2>Editar usuário</h2>
                        <Link to="/adm/criarusuario"><CiCirclePlus size={45} /></Link>
                        </div>

                    <hr />
                </B.blogHeader>

                <A.novoPostBody>
                    <span>
                        <label htmlFor="nome">Nome</label>
                        <input type="text" name='nome' value={newUser.name} onChange={(e) => setNewUser({ ...newUser, name: e.target.value })} required/>
                    </span>

                    <span>
                        <label htmlFor="email">Email</label>
                        <input type="email" name='email' value={newUser.email} onChange={(e) => setNewUser({ ...newUser, email: e.target.value })} required />
                    </span>

                    <span>
                        <label htmlFor="desc">Descrição</label>
                        <textarea type="text" name='desc' value={newUser.description} onChange={(e) => setNewUser({ ...newUser, description: e.target.value })} required />
                    </span>

                    <div>

                        <button onClick={() => editUser(newUser)}> <IoIosSave size={22} /> Editar usuário</button>
                    </div>
                </A.novoPostBody>

            </A.novoPostContainer>
        </A.main>
    )
}
