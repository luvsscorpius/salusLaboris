import React, { useContext, useEffect } from 'react'
import * as P from './Styles'
import { SalusContext } from '../../Context/Context'
import WanderDelgado from '../../assets/WanderDelgado.webp'
import KarinStela from '../../assets/KarinStela.webp'
import { useParams } from 'react-router-dom'

export const PostPage = () => {

  const { posts, users, addPostView, fetchUsers, fetchPosts, fetchCategories } = useContext(SalusContext)

  const { id } = useParams()

  const foundPost = posts.find(
    (post) => post.id === Number(id)
  )

    fetchUsers()
    fetchPosts()
    fetchCategories()

  const findUser = users.find(
    (user) => user.id === foundPost.author_id
  )

  useEffect(() => {
    const viewed = sessionStorage.getItem(`viewed-post-${id}`)

    if (!viewed) {
      addPostView(Number(id))
      sessionStorage.setItem(`viewed-post-${id}`, 'true')
    }
  }, [id])  

  return (
    <P.main>
      <P.postContainer>
        <P.postBody>
          <h1>{foundPost.title}</h1>
          <hr />

          {/* AQUI: conteúdo rico do TipTap */}
          <div
            className="postContent"
            dangerouslySetInnerHTML={{ __html: foundPost.description }}
          />
        </P.postBody>

        <P.postFooter>
          {foundPost.author_id === "Karin Stela" ?
            <span>
              <img src={KarinStela} alt="Imagem da presidente da empresa" />
            </span> :
            <span>
              <img src={WanderDelgado} alt="Imagem do diretor financeiro da empresa" />
            </span>
          }

          <span>
            <h3>Escrito por {findUser.name}</h3>
            <p>{findUser.description}</p>
            <p>{foundPost.created_at.split('T')[0]}</p>
          </span>
        </P.postFooter>
      </P.postContainer>
    </P.main>
  )
}
