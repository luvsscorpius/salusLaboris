import React, { useState } from 'react'
import { Menu } from '../../Components/Menu/Menu'
import * as G from './Styles'
import * as B from '../Blog/Styles'
import { CiCirclePlus } from "react-icons/ci";
import { FaRegEdit } from "react-icons/fa";
import { MdDeleteOutline } from "react-icons/md";
import ReactPaginate from 'react-paginate'

export const GerenciarPosts = () => {

  const posts = [
    { id: 0, category: "Segurança do trabalho", date: "12/09/2025", author: "Wander Delgado", title: "EPIs essenciais para proteger sua equipe", desc: "Você sabe quais são os equipamentos de proteção individual mais importantes para a sua empresa? Neste conteúdo, explicamos quais são os EPIs indispensáveis para cada tipo de atividade, como utilizá-los corretamente e qual a periodicidade de substituição e manutenção...." },
    { id: 1, category: "Segurança do trabalho", date: "12/09/2025", author: "Karin", title: "EPIs essenciais para proteger sua equipe", desc: "Você sabe quais são os equipamentos de proteção individual mais importantes para a sua empresa? Neste conteúdo, explicamos quais são os EPIs indispensáveis para cada tipo de atividade, como utilizá-los corretamente e qual a periodicidade de substituição e manutenção...." },
    { id: 1, category: "Segurança do trabalho", date: "12/09/2025", author: "Wander Delgado", title: "EPIs essenciais para proteger sua equipe", desc: "Você sabe quais são os equipamentos de proteção individual mais importantes para a sua empresa? Neste conteúdo, explicamos quais são os EPIs indispensáveis para cada tipo de atividade, como utilizá-los corretamente e qual a periodicidade de substituição e manutenção...." },
    { id: 1, category: "Segurança do trabalho", date: "12/09/2025", author: "Wander Delgado", title: "EPIs essenciais para proteger sua equipe", desc: "Você sabe quais são os equipamentos de proteção individual mais importantes para a sua empresa? Neste conteúdo, explicamos quais são os EPIs indispensáveis para cada tipo de atividade, como utilizá-los corretamente e qual a periodicidade de substituição e manutenção...." },
    { id: 1, category: "Segurança do trabalho", date: "12/09/2025", author: "Wander Delgado", title: "EPIs essenciais para proteger sua equipe", desc: "Você sabe quais são os equipamentos de proteção individual mais importantes para a sua empresa? Neste conteúdo, explicamos quais são os EPIs indispensáveis para cada tipo de atividade, como utilizá-los corretamente e qual a periodicidade de substituição e manutenção...." },
  ]

  const [currentPage, setCurrentPage] = useState(0)
  const itemsPage = 10

  const handlePageClick = ({ selected }) => {
    setCurrentPage(selected)
  }

  const offSet = currentPage * itemsPage
  const currentPageData = posts.slice(offSet, offSet + itemsPage)

  return (
    <G.main>
      <Menu />

      <G.gerenciarPostsBody>
        <B.blogHeader className='header'>
          <div>
            <h2>Gerenciar posts</h2>
            <button><CiCirclePlus size={45} /></button>
          </div>

          <hr />
        </B.blogHeader>


        <table>
          <thead>
            <tr>
              <th>Título</th>
              <th>Data</th>
              <th>Autor</th>
              <th>Ações</th>
            </tr>
          </thead>

          <tbody>
            {posts.length > 0 && currentPageData.map((post, index) => (
              <tr>
                <td>{post.title.length > 20
                  ? post.title.substring(0, 15) + "..."
                  : post.title}</td>
                <td>{post.date.length > 5 ? post.date.substring(0, 5) + "..." : post.date}</td>
                <td>{post.author.length > 5 ? post.author.substring(0, 5) + "..." : post.author}</td>
                <td className='icon'>
                  <FaRegEdit size={25} />
                  <MdDeleteOutline size={25} />
                </td>
              </tr>
            ))}

          </tbody>
        </table>

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
      </G.gerenciarPostsBody>
    </G.main>
  )
}
