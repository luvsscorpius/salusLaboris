import React, { useState } from 'react'
import * as B from './Styles'
import blogSeg from '../../assets/blogSeg.png'
import { FaRegCalendarAlt } from "react-icons/fa";
import { FaRegUser } from "react-icons/fa";
import ReactPaginate from 'react-paginate'

export const Blog = () => {

  const posts = [
    {id: 0, category: "Segurança do trabalho", date: "12/09/2025", author: "Wander Delgado", title: "EPIs essenciais para proteger sua equipe", desc: "Você sabe quais são os equipamentos de proteção individual mais importantes para a sua empresa? Neste conteúdo, explicamos quais são os EPIs indispensáveis para cada tipo de atividade, como utilizá-los corretamente e qual a periodicidade de substituição e manutenção...."},
    {id: 1, category: "Segurança do trabalho", date: "12/09/2025", author: "Wander Delgado", title: "EPIs essenciais para proteger sua equipe", desc: "Você sabe quais são os equipamentos de proteção individual mais importantes para a sua empresa? Neste conteúdo, explicamos quais são os EPIs indispensáveis para cada tipo de atividade, como utilizá-los corretamente e qual a periodicidade de substituição e manutenção...."},
    {id: 1, category: "Segurança do trabalho", date: "12/09/2025", author: "Wander Delgado", title: "EPIs essenciais para proteger sua equipe", desc: "Você sabe quais são os equipamentos de proteção individual mais importantes para a sua empresa? Neste conteúdo, explicamos quais são os EPIs indispensáveis para cada tipo de atividade, como utilizá-los corretamente e qual a periodicidade de substituição e manutenção...."},
    {id: 1, category: "Segurança do trabalho", date: "12/09/2025", author: "Wander Delgado", title: "EPIs essenciais para proteger sua equipe", desc: "Você sabe quais são os equipamentos de proteção individual mais importantes para a sua empresa? Neste conteúdo, explicamos quais são os EPIs indispensáveis para cada tipo de atividade, como utilizá-los corretamente e qual a periodicidade de substituição e manutenção...."},
    {id: 1, category: "Segurança do trabalho", date: "12/09/2025", author: "Wander Delgado", title: "EPIs essenciais para proteger sua equipe", desc: "Você sabe quais são os equipamentos de proteção individual mais importantes para a sua empresa? Neste conteúdo, explicamos quais são os EPIs indispensáveis para cada tipo de atividade, como utilizá-los corretamente e qual a periodicidade de substituição e manutenção...."},
  ]

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
