import React, { useState } from 'react'
import { useLocation } from "react-router-dom"
import * as B from './Styles'
import logo from '../../assets/logo.webp'
import { RxDashboard } from "react-icons/rx";
import { MdPostAdd } from "react-icons/md";
import { FaUsers } from "react-icons/fa";
import { FaFilter } from "react-icons/fa6";

export const Menu = () => {

    // lógica para mudar o active
    const [active, setActive] = useState("active")

    const location = useLocation()

    console.log(location)

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
                            <li>Dashboard</li>
                        </span>
                    </ul>
                </div>

                <div>
                    <h3>GERENCIAMENTO</h3>

                    <ul>
                        <span className={location.pathname === "/adm/blog" ? active : ""}>
                            <MdPostAdd size={26} />
                            <li>Posts</li>
                        </span>
                        <span className={location.pathname === "/adm/usuarios" ? active : ""}>
                            <FaUsers size={25} />
                            <li>Usuários</li>
                        </span>
                        <span className={location.pathname === "/adm/categorias" ? active : ""}>
                            <FaFilter size={24} />
                            <li>Categorias</li>
                        </span>
                    </ul>
                </div>
            </B.linksContainer>
        </B.menu>

    )
}
