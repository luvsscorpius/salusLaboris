import React, { useContext, useState } from 'react'
import { Menu } from '../../Components/Menu/Menu'
import * as G from './Styles'
import * as B from '../Blog/Styles'
import { CiCirclePlus } from "react-icons/ci";
import { FaRegEdit } from "react-icons/fa";
import { MdDeleteOutline } from "react-icons/md";
import ReactPaginate from 'react-paginate'
import { SalusContext } from '../../Context/Context';
import { Link } from 'react-router-dom';

export const GerenciarPosts = () => {

  const { posts, deletePost, editPost, navigate, setCategoryId, users, categorias } = useContext(SalusContext)

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
            <Link to="/adm/criarpost"><CiCirclePlus size={45} /></Link>
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
                <td>{(() => {
                  const title = categorias.find(cat => cat.id === post.category_id)?.title
                  return title
                    ? title.length > 200
                      ? title.substring(0, 200) + "..."
                      : title
                    : ""
                })()}</td>
                <td className='data'>{
                  post.created_at.includes('T')
                    ? post.created_at.split('T')[0]
                    : post.created_at
                }</td>
                <td className='autor'>{users.map((user) => user.id === post.author_id ? user.name : "")}</td>
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
