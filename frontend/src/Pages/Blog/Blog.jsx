import React, { useContext, useState } from 'react'
import * as B from './Styles'
import { CiCirclePlus } from "react-icons/ci";
import { FaRegCalendarAlt } from "react-icons/fa";
import { FaRegUser } from "react-icons/fa";
import ReactPaginate from 'react-paginate'
import { Menu } from '../../Components/Menu/Menu';
import { SalusContext } from '../../Context/Context';

export const Blog = () => {

    const {posts} = useContext(SalusContext)

    const [currentPage, setCurrentPage] = useState(0)
    const itemsPage = 3

    const handlePageClick = ({ selected }) => {
        setCurrentPage(selected)
    }

    const offSet = currentPage * itemsPage
    const currentPageData = posts.slice(offSet, offSet + itemsPage)

    return (
        <B.blog>
            
            <Menu/>

            <B.blogContainer>

                <B.blogHeader>
                    <div>
                        <h2>Posts recentes</h2>
                        <button onClick={() => window.open("/adm/criarpost", "_self")}><CiCirclePlus size={45} /></button>
                    </div>

                    <hr />
                </B.blogHeader>

                <B.blogBody>
                    <B.cardsContainer>
                        {posts.length > 0 && currentPageData.map((post, index) => (
                            <B.card key={index}>
                                <B.postInfo>
                                    <span>
                                        <FaRegCalendarAlt />
                                        <p>{post.date}</p>
                                    </span>

                                    <span>
                                        <FaRegUser />
                                        <p>{post.author}</p>
                                    </span>
                                </B.postInfo>

                                <B.cardInfo>
                                    <h3>{post.title}</h3>

                                    <p>{post.desc}</p>

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
