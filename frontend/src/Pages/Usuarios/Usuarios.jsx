import React, { useContext, useState } from 'react'
import { Menu } from '../../Components/Menu/Menu'
import * as B from '../Blog/Styles'
import { CiCirclePlus } from "react-icons/ci";
import * as G from '../GerenciarPosts/Styles'
import { SalusContext } from '../../Context/Context';
import { FaRegEdit } from "react-icons/fa";
import { MdDeleteOutline } from "react-icons/md";
import ReactPaginate from 'react-paginate'

export const Usuarios = () => {

  const {users, deleteUser, editUser, navigate, setUserId} = useContext(SalusContext)

  const [currentPage, setCurrentPage] = useState(0)
  const itemsPage = 5

  const handlePageClick = ({ selected }) => {
      setCurrentPage(selected)
  }

  const offSet = currentPage * itemsPage
  const currentPageData = users.slice(offSet, offSet + itemsPage)

  const enviarUsuario = (id) => {
    setUserId(id)
    editUser(id)
    navigate('/adm/editarusuario')
  }

  return (
    <G.main>
      <Menu />

      <G.gerenciarPostsBody>
        <B.blogHeader className='header'>
          <div>
            <h2>Gerenciar Usuários</h2>
            <button onClick={() => window.open("/adm/criarusuario", "_self")}><CiCirclePlus size={45} /></button>
          </div>

          <hr />
        </B.blogHeader>

        <table>
          <thead>
            <tr>
              <th>Nome</th>
              <th>Email</th>
              <th>Descrição</th>
              <th>Ações</th>
            </tr>
          </thead>

          <tbody>
            {users && users.length > 0 && currentPageData.map((user, index) => (
              <tr key={index}>
                <td>{user.name.length > 200
                  ? user.name.substring(0, 200) + "..."
                  : user.name}</td>
                <td className='data'>{user.email.length > 45 ? user.email.substring(0, 45) + "..." : user.email}</td>
                <td className='autor'>{user.desc.length > 50 ? user.desc.substring(0, 50) + "..." : user.desc}</td>
                <td className='icon'>
                  <FaRegEdit size={25} onClick={(e) => enviarUsuario(user.id)}  />
                  <MdDeleteOutline size={25} onClick={(e) => deleteUser(user.id)}/>
                </td>
              </tr>
            ))}

          </tbody>
        </table>

        <ReactPaginate
          pageCount={Math.ceil(users.length / itemsPage)}
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
