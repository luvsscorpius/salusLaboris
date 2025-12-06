import React, { useContext } from 'react'
import * as P from './Styles'
import { SalusContext } from '../../Context/Context'
import WanderDelgado from '../../assets/WanderDelgado.webp'
import KarinStela from '../../assets/KarinStela.webp'
import { useParams } from 'react-router-dom'

export const PostPage = () => {

  const { posts, users } = useContext(SalusContext)

  const { id } = useParams()

  const foundPost = posts.find(
    (post) => post.id === Number(id)
  )

  const findUser = users.find(
    (user) => user.name === foundPost.author
  )

  return (
    <P.main>
      <P.postContainer>
        <P.postBody>
          <h1>{foundPost.title}</h1>
          <hr />

          {/* AQUI: conteúdo rico do TipTap */}
          <div
            className="postContent"
            dangerouslySetInnerHTML={{ __html: foundPost.desc }}
          />
        </P.postBody>

        <P.postFooter>
          {foundPost.author === "Karin Stela" ?
            <span>
              <img src={KarinStela} alt="Imagem da presidente da empresa" />
            </span> :
            <span>
              <img src={WanderDelgado} alt="Imagem do diretor financeiro da empresa" />
            </span>
          }

          <span>
            <h3>Escrito por {foundPost.author}</h3>
            <p>{findUser.desc}</p>
          </span>
        </P.postFooter>
      </P.postContainer>
    </P.main>
  )
}
