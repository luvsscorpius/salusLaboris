import React, { useState } from 'react'
import * as B from './Styles'
import { CiCirclePlus } from "react-icons/ci";
import { FaRegCalendarAlt } from "react-icons/fa";
import { FaRegUser } from "react-icons/fa";
import ReactPaginate from 'react-paginate'
import logo from '../../assets/logo.webp'
import { RxDashboard } from "react-icons/rx";
import { MdPostAdd } from "react-icons/md";
import { FaUsers } from "react-icons/fa";
import { FaFilter } from "react-icons/fa6";

export const Blog = () => {

    const posts = [
        { id: 0, category: "Segurança do trabalho", date: "12/09/2025", author: "Wander Delgado", title: "EPIs essenciais para proteger sua equipe", desc: "Você sabe quais são os equipamentos de proteção individual mais importantes para a sua empresa? Neste conteúdo, explicamos quais são os EPIs indispensáveis para cada tipo de atividade, como utilizá-los corretamente e qual a periodicidade de substituição e manutenção...." },
        { id: 1, category: "Segurança do trabalho", date: "12/09/2025", author: "Wander Delgado", title: "EPIs essenciais para proteger sua equipe", desc: "Você sabe quais são os equipamentos de proteção individual mais importantes para a sua empresa? Neste conteúdo, explicamos quais são os EPIs indispensáveis para cada tipo de atividade, como utilizá-los corretamente e qual a periodicidade de substituição e manutenção...." },
        { id: 1, category: "Segurança do trabalho", date: "12/09/2025", author: "Wander Delgado", title: "EPIs essenciais para proteger sua equipe", desc: "Você sabe quais são os equipamentos de proteção individual mais importantes para a sua empresa? Neste conteúdo, explicamos quais são os EPIs indispensáveis para cada tipo de atividade, como utilizá-los corretamente e qual a periodicidade de substituição e manutenção...." },
        { id: 1, category: "Segurança do trabalho", date: "12/09/2025", author: "Wander Delgado", title: "EPIs essenciais para proteger sua equipe", desc: "Você sabe quais são os equipamentos de proteção individual mais importantes para a sua empresa? Neste conteúdo, explicamos quais são os EPIs indispensáveis para cada tipo de atividade, como utilizá-los corretamente e qual a periodicidade de substituição e manutenção...." },
        { id: 1, category: "Segurança do trabalho", date: "12/09/2025", author: "Wander Delgado", title: "EPIs essenciais para proteger sua equipe", desc: "Você sabe quais são os equipamentos de proteção individual mais importantes para a sua empresa? Neste conteúdo, explicamos quais são os EPIs indispensáveis para cada tipo de atividade, como utilizá-los corretamente e qual a periodicidade de substituição e manutenção...." },
    ]

    const [currentPage, setCurrentPage] = useState(0)
    const itemsPage = 3

    const handlePageClick = ({ selected }) => {
        setCurrentPage(selected)
    }

    const offSet = currentPage * itemsPage
    const currentPageData = posts.slice(offSet, offSet + itemsPage)

    return (
        <B.blog>

            <B.menu>
                <B.logoContainer>
                    <img src={logo} alt="Imagem da logo da empresa no menu" />
                    <hr />
                </B.logoContainer>

                <B.linksContainer>
                    <div>
                        <h3>PRINCIPAL</h3>

                        <ul>
                            <span>
                                <RxDashboard size={25} />
                                <li>Dashboard</li>
                            </span>
                        </ul>
                    </div>

                    <div>
                        <h3>GERENCIAMENTO</h3>

                        <ul>
                            <span className='active'>
                                <MdPostAdd size={26}/>
                                <li>Posts</li>
                            </span>
                            <span>
                                <FaUsers size={25}/>
                                <li>Usuários</li>
                            </span>
                            <span>
                                <FaFilter size={24}/>
                                <li>Categorias</li>
                            </span>
                        </ul>
                    </div>
                </B.linksContainer>
            </B.menu>

            <B.blogContainer>
                <B.blogHeader>
                    <div>
                        <h2>Posts recentes</h2>
                        <button><CiCirclePlus size={45} /></button>
                    </div>

                    <hr />
                </B.blogHeader>

                <B.blogBody>
                    <B.cardsContainer>
                        {posts.length > 0 && currentPageData.map((post, index) => (
                            <B.card>
                                <B.postInfo>
                                    <span>
                                        <FaRegCalendarAlt />
                                        <p>18/01/2025</p>
                                    </span>

                                    <span>
                                        <FaRegUser />
                                        <p>Wander Delgado</p>
                                    </span>
                                </B.postInfo>

                                <B.cardInfo>
                                    <h3>NR-35: Segurança em trabalhos em altura</h3>

                                    <p>Trabalhar em altura é uma das atividades mais críticas dentro das empresas. Neste artigo, você vai entender os principais requisitos da NR-35, o checklist de EPIs obrigatórios e os procedimentos fundamentais para reduzir riscos e garantir a segurança de todos os profissionais envolvidos....</p>

                                    <button>Ler mais</button>
                                </B.cardInfo>
                            </B.card>
                        ))}
                    </B.cardsContainer>

                    <ReactPaginate
                        pageCount={Math.ceil(posts.length / itemsPage)}
                        pageRangeDisplayed={3} // Número de páginas a serem exibidas
                        marginPagesDisplayed={1} // Número de páginas a serem exibidas nas extremidades
                        onPageChange={handlePageClick}
                        containerClassName={'pagination'}
                        activeClassName={'active'}
                        nextLinkClassName={"next"}
                        nextLabel=">"
                        previousLabel="<"
                        previousLinkClassName={"previous"}
                        pageClassName={"page"} />
                </B.blogBody>
            </B.blogContainer>
        </B.blog>
    )
}
