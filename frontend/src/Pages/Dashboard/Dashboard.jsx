import React, { useContext } from 'react'
import * as G from '../GerenciarPosts/Styles'
import * as B from '../Blog/Styles'
import * as D from './Styles'
import { Menu } from '../../Components/Menu/Menu'
import { SalusContext } from '../../Context/Context'
import { MdOutlinePostAdd } from "react-icons/md";
import { FaUsers } from "react-icons/fa";
import { FaFilter } from "react-icons/fa6";

export const Dashboard = () => {

    const { posts, users, categorias } = useContext(SalusContext)

    return (
        <G.main>
            <Menu />

            <G.gerenciarPostsBody>
                <B.blogHeader className='header'>
                    <div>
                        <h2>Dashboard</h2>
                    </div>

                    <hr />
                </B.blogHeader>

                <D.dashBoardContainer>
                    <D.metricsContainer>

                        <D.card>
                            <D.cardHeader>
                                <MdOutlinePostAdd size={25} />
                                <p>Posts publicados</p>
                            </D.cardHeader>

                            <D.cardBody>
                                <p>{posts.length}</p>
                            </D.cardBody>
                        </D.card>

                        <D.card>
                            <D.cardHeader>
                                <FaUsers size={25} />
                                <p>Administradores</p>
                            </D.cardHeader>

                            <D.cardBody>
                                <p>{users.length}</p>
                            </D.cardBody>
                        </D.card>

                        <D.card>
                            <D.cardHeader>
                                <FaFilter size={20} />
                                <p>Categorias</p>
                            </D.cardHeader>

                            <D.cardBody>
                                <p>{categorias.length}</p>
                            </D.cardBody>
                        </D.card>

                    </D.metricsContainer>
                </D.dashBoardContainer>
            </G.gerenciarPostsBody>
        </G.main>
    )
}
