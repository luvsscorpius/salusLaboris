import React, { useContext, useState } from 'react'
import * as B from './Styles'
import { CiCirclePlus } from "react-icons/ci";
import { FaRegCalendarAlt } from "react-icons/fa";
import { FaRegUser } from "react-icons/fa";
import ReactPaginate from 'react-paginate'
import { Menu } from '../../Components/Menu/Menu';
import { SalusContext } from '../../Context/Context';
import { Link } from 'react-router-dom';

export const Blog = () => {

    const { posts, navigate, users } = useContext(SalusContext)

    const [currentPage, setCurrentPage] = useState(0)
    const itemsPage = 2

    const handlePageClick = ({ selected }) => {
        setCurrentPage(selected)
    }

    console.log(posts)

    const offSet = currentPage * itemsPage
    const currentPageData = posts.slice(offSet, offSet + itemsPage)

    return (
        <B.blog>

            <Menu />

            <B.blogContainer>

                <B.blogHeader>
                    <div>
                        <h2>Posts recentes</h2>
                        <Link to="/adm/criarpost"><CiCirclePlus size={45} /></Link>
                    </div>

                    <hr />
                </B.blogHeader>

                <B.blogBody>
                    <B.cardsContainer>
                        {posts && posts.length > 0 && currentPageData.map((post, index) => (
                            <B.card key={index}>
                                <B.postInfo>
                                    <span>
                                        <FaRegCalendarAlt />
                                        <p>{
                                            post.created_at.includes('T')
                                                ? post.created_at.split('T')[0]
                                                : post.created_at
                                        }</p>
                                    </span>

                                    <span>
                                        <FaRegUser />
                                        <p>{users.map((user) => user.id === post.author_id ? user.name : "")}</p>
                                    </span>
                                </B.postInfo>

                                <B.cardInfo>
                                    <h3>{post.title}</h3>

                                    <div>
                                        <div
                                            className="postContent"
                                            dangerouslySetInnerHTML={{
                                                __html:
                                                    post.description
                                            }}
                                        />
                                    </div>

                                    <button onClick={() => navigate(`/post/${post.id}`)}>Ler mais</button>
                                </B.cardInfo>
                            </B.card>
                        ))}
                    </B.cardsContainer>

                    <ReactPaginate
                        pageCount={Math.ceil(posts.length / itemsPage)}
                        pageRangeDisplayed={2} // Número de páginas a serem exibidas
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
