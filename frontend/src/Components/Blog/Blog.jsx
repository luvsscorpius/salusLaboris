import React, { useContext, useState } from 'react'
import * as B from './Styles'
import blogSeg from '../../assets/blogSeg.png'
import { FaRegCalendarAlt } from "react-icons/fa";
import { FaRegUser } from "react-icons/fa";
import ReactPaginate from 'react-paginate'
import { SalusContext } from '../../Context/Context';

export const Blog = () => {
  const { posts, setPosts, navigate, users, categorias } = useContext(SalusContext)

  const [currentPage, setCurrentPage] = useState(0)
  const itemsPage = 3

  const handlePageClick = ({ selected }) => {
    setCurrentPage(selected)
  }

  const offSet = currentPage * itemsPage
  const currentPageData = posts.slice(offSet, offSet + itemsPage)

  // funcao para ir para a pagina e depois contar view
  const visitPostNCount = (id) => {

    // encontramos o post de acordo com o id
    const findPost = posts.find((post) =>
      post.id === id
    )

    // se tiver encontrado o post
    if (findPost) {
      // atualizamos a propriedade views do objeto
      const updatedPost = {
        ...findPost,
        views: (findPost.views || 0) + 1
      }

      setPosts(posts.map(post =>
        post.id === id ? updatedPost : post
      ))
    }

    navigate(`/post/${id}`)
  }

  return (
    <B.main id="blog">

      <B.titleContainer>
        <h2>BLOG DA SALUS LABORIS</h2>
        <h3>EXPANDA SEU CONHECIMENTO SOBRE SEGURANÇA DO TRABALHO</h3>
      </B.titleContainer>

      <B.cardsContainer>
        {posts && posts.length > 0 && currentPageData.map((post, index) => (
          <B.card key={index}>
            <B.cardHeader>
              <img src={blogSeg} alt="Imagem de fundo do post do blog" />
              <span>
                <p>{(() => {
                  const title = categorias.find(cat => cat.id === post.category_id)?.title
                  return title
                    ? title.length > 200
                      ? title.substring(0, 200) + "..."
                      : title
                    : ""
                })()}</p>
              </span>
            </B.cardHeader>

            <B.postInfo>
              <span>
                <FaRegCalendarAlt />
                <p>{post.created_at.includes('T')
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
              <div
                className="postContent"
                dangerouslySetInnerHTML={{
                  __html: post.description.length > 120
                    ? post.description.substring(0, 150) + "..."
                    : post.description
                }}
              />
              <button onClick={() => visitPostNCount(post.id)}>Ler mais</button>
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
    </B.main>
  )
}
