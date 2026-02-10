import React, { useContext, useState } from 'react'
import * as G from '../GerenciarPosts/Styles'
import * as B from '../Blog/Styles'
import { CiCirclePlus } from "react-icons/ci";
import { Menu } from '../../Components/Menu/Menu';
import { SalusContext } from '../../Context/Context';
import { FaRegEdit } from "react-icons/fa";
import { MdDeleteOutline } from "react-icons/md";
import ReactPaginate from 'react-paginate'
import { Link } from 'react-router-dom';

export const Categorias = () => {

    const { categorias, deleteCategory, editCategory, navigate, setCategoryId, users } = useContext(SalusContext)

    const [currentPage, setCurrentPage] = useState(0)
    const itemsPage = 8

    const handlePageClick = ({ selected }) => {
        setCurrentPage(selected)
    }

    const offSet = currentPage * itemsPage
    const currentPageData = categorias.slice(offSet, offSet + itemsPage)

    const enviarCategoria = (categoryId) => {
        editCategory(categoryId)
        sessionStorage.setItem("categoryId", categoryId)
        setCategoryId(categoryId)
        navigate('/adm/editarcategoria')
    }

    return (
        <G.main>
            <Menu />

            <G.gerenciarPostsBody>
                <B.blogHeader className='header'>
                    <div>
                        <h2>Categorias</h2>
                        <Link to="/adm/adicionarcategoria"><CiCirclePlus size={45} /></Link>
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
                        {categorias && categorias.length > 0 && currentPageData.map((categoria, index) => (
                            <tr key={index}>
                                <td>{categoria.title.length > 200
                                    ? categoria.title.substring(0, 200) + "..."
                                    : categoria.title}</td>
                                <td className='data'>{
                                    categoria.created_at.includes('T')
                                        ? categoria.created_at.split('T')[0]
                                        : categoria.created_at
                                }</td>
                                <td className='autor'>{users.map((user) => user.id === categoria.author_id ? user.name : "")}</td>
                                <td className='icon'>
                                    <FaRegEdit size={25} onClick={() => enviarCategoria(categoria.id)} />
                                    <MdDeleteOutline size={25} onClick={(e) => deleteCategory(categoria.id)} />
                                </td>
                            </tr>
                        ))}

                    </tbody>
                </table>

                <ReactPaginate
                    pageCount={Math.ceil(categorias.length / itemsPage)}
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
