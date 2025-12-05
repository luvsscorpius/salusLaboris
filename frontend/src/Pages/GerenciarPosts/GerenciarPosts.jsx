import React, { useContext, useState } from 'react'
import { Menu } from '../../Components/Menu/Menu'
import * as G from './Styles'
import * as B from '../Blog/Styles'
import { CiCirclePlus } from "react-icons/ci";
import { FaRegEdit } from "react-icons/fa";
import { MdDeleteOutline } from "react-icons/md";
import ReactPaginate from 'react-paginate'
import { SalusContext } from '../../Context/Context';

export const GerenciarPosts = () => {

  const {posts, deletePost, editPost, navigate, setCategoryId} = useContext(SalusContext)

  const [currentPage, setCurrentPage] = useState(0)
  const itemsPage = 10

  const handlePageClick = ({ selected }) => {
    setCurrentPage(selected)
  }

  const offSet = currentPage * itemsPage
  const currentPageData = posts.slice(offSet, offSet + itemsPage)

  const enviarCategoria = (categoryId) => {
    editPost(categoryId)
    sessionStorage.setItem("categoryId", categoryId)
    setCategoryId(categoryId)
    navigate('/adm/editarpost')
  }

  return (
    <G.main>
      <Menu />

      <G.gerenciarPostsBody>
        <B.blogHeader className='header'>
          <div>
            <h2>Gerenciar posts</h2>
            <button onClick={() => window.open("/adm/criarpost", "_self")}><CiCirclePlus size={45} /></button>
          </div>

          <hr />
        </B.blogHeader>


        <table>
          <thead>
            <tr>
              <th>Título</th>
              <th>Categoria</th>
              <th>Data</th>
              <th>Autor</th>
              <th>Ações</th>
            </tr>
          </thead>

          <tbody>
            {posts.length > 0 && currentPageData.map((post, index) => (
              <tr key={index}>
                <td>{post.title.length > 200
                  ? post.title.substring(0, 200) + "..."
                  : post.title}</td>
                <td>{post.category.length > 200
                  ? post.category.substring(0, 200) + "..."
                  : post.category}</td>
                <td className='data'>{post.date.length > 15 ? post.date.substring(0, 15) + "..." : post.date}</td>
                <td className='autor'>{post.author.length > 20 ? post.author.substring(0,20) + "..." : post.author}</td>
                <td className='icon'>
                  <FaRegEdit size={25} onClick={(e) => enviarCategoria(post.id)} />
                  <MdDeleteOutline size={25} onClick={(e) => deletePost(post.id)} />
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
