import React, { useContext, useState } from 'react'
import * as B from './Styles'
import blogSeg from '../../assets/blogSeg.png'
import { FaRegCalendarAlt } from "react-icons/fa";
import { FaRegUser } from "react-icons/fa";
import ReactPaginate from 'react-paginate'
import { SalusContext } from '../../Context/Context';

export const Blog = () => {
  const {posts} = useContext(SalusContext)

  const [currentPage, setCurrentPage] = useState(0)
  const itemsPage = 3

  const handlePageClick = ({selected}) => {
    setCurrentPage(selected)
  }

  const offSet = currentPage * itemsPage
  const currentPageData = posts.slice(offSet, offSet + itemsPage)

  return (
    <B.main id="blog">
        
        <B.titleContainer>
            <h2>BLOG DA SALUS LABORIS</h2>
            <h3>EXPANDA SEU CONHECIMENTO SOBRE SEGURANÇA DO TRABALHO</h3>
        </B.titleContainer>

        <B.cardsContainer>
            {posts.length > 0 && currentPageData.map((post, index) => (
              <B.card key={index}>
                <B.cardHeader>
                        <img src={blogSeg} alt="Imagem de fundo do post do blog" />
                        <span>
                        <p>{post.category}</p>
                        </span>
                </B.cardHeader>

                <B.postInfo>
                  <span>
                    <FaRegCalendarAlt/>
                    <p>{post.date}</p>
                  </span>
                  
                  <span>
                    <FaRegUser/>
                    <p>{post.author}</p>
                  </span>
                </B.postInfo>

                <B.cardInfo>
                    <h3>{post.title}</h3>
                    <p>{post.desc.length > 120 
                      ? post.desc.substring(0, 150) + "..." 
                      : post.desc}</p>
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
                pageClassName={"page"}/>
    </B.main>
  )
}
