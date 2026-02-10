import React, { useContext, useState } from 'react'
import { useLocation, Link } from "react-router-dom"
import * as B from './Styles'
import logo from '../../assets/logo.webp'
import { RxDashboard } from "react-icons/rx";
import { MdPostAdd } from "react-icons/md";
import { FaUsers } from "react-icons/fa";
import { FaFilter } from "react-icons/fa6";
import { SalusContext } from '../../Context/Context';

export const Menu = () => {
    const [active, setActive] = useState("active")
    const location = useLocation()

    return (
        <B.menu>
            <B.logoContainer>
                <img src={logo} alt="Imagem da logo da empresa no menu" />
                <hr />
            </B.logoContainer>

            <B.linksContainer>
                <div>
                    <h3>PRINCIPAL</h3>

                    <ul>
                        <span className={location.pathname === "/adm/dashboard" ? active : ""}>
                            <RxDashboard size={25} />
                            <li>
                                <Link to="/adm/dashboard">Dashboard</Link>
                            </li>
                        </span>

                        <span className={location.pathname === "/adm/blog" ? active : ""}>
                            <MdPostAdd size={26} />
                            <li>
                                <Link to="/adm/blog">Posts Recentes</Link>
                            </li>
                        </span>
                    </ul>
                </div>

                <div>
                    <h3>GERENCIAMENTO</h3>

                    <ul>
                        <span
                            className={
                                location.pathname === "/adm/gerenciarposts" ||
                                location.pathname === "/adm/criarpost" ||
                                location.pathname === "/adm/editarpost"
                                    ? active
                                    : ""
                            }
                        >
                            <MdPostAdd size={26} />
                            <li>
                                <Link to="/adm/gerenciarposts">Posts</Link>
                            </li>
                        </span>

                        <span
                            className={
                                location.pathname === "/adm/usuarios" ||
                                location.pathname === "/adm/criarusuario" ||
                                location.pathname === "/adm/editarusuario"
                                    ? active
                                    : ""
                            }
                        >
                            <FaUsers size={25} />
                            <li>
                                <Link to="/adm/usuarios">Usuários</Link>
                            </li>
                        </span>

                        <span
                            className={
                                location.pathname === "/adm/categorias" ||
                                location.pathname === "/adm/adicionarcategoria" ||
                                location.pathname === "/adm/editarcategoria"
                                    ? active
                                    : ""
                            }
                        >
                            <FaFilter size={24} />
                            <li>
                                <Link to="/adm/categorias">Categorias</Link>
                            </li>
                        </span>
                    </ul>
                </div>
            </B.linksContainer>
        </B.menu>
    )
}
