import React, { useContext, useState } from 'react'
import * as G from '../GerenciarPosts/Styles'
import * as B from '../Blog/Styles'
import { CiCirclePlus } from "react-icons/ci";
import { Menu } from '../../Components/Menu/Menu';
import { SalusContext } from '../../Context/Context';
import { FaRegEdit } from "react-icons/fa";
import { MdDeleteOutline } from "react-icons/md";
import ReactPaginate from 'react-paginate'

export const Categorias = () => {

    const { categorias } = useContext(SalusContext)

    const [currentPage, setCurrentPage] = useState(0)
    const itemsPage = 8

    const handlePageClick = ({ selected }) => {
        setCurrentPage(selected)
    }

    const offSet = currentPage * itemsPage
    const currentPageData = categorias.slice(offSet, offSet + itemsPage)

    console.log(currentPageData)

    return (
        <G.main>
            <Menu />

            <G.gerenciarPostsBody>
                <B.blogHeader className='header'>
                    <div>
                        <h2>Categorias</h2>
                        <button onClick={() => window.open("/adm/adicionarcategoria", "_self")}><CiCirclePlus size={45} /></button>
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
                                <td className='data'>{categoria.date.length > 15 ? categoria.date.substring(0, 15) + "..." : categoria.date}</td>
                                <td className='autor'>{categoria.author.length > 20 ? categoria.author.substring(0, 20) + "..." : categoria.author}</td>
                                <td className='icon'>
                                    <FaRegEdit size={25} onClick={() => window.open("/adm/editarpost", "_self")} />
                                    <MdDeleteOutline size={25} />
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
