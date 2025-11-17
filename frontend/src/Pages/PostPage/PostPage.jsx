import React, { useContext } from 'react'
import * as P from './Styles'
import { SalusContext } from '../../Context/Context'
import WanderDelgado from '../../assets/WanderDelgado.webp'
import { useParams } from 'react-router-dom'

export const PostPage = () => {

  const { posts, users } = useContext(SalusContext)

  const {id} = useParams()

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

          <p>{foundPost.desc}</p>
        </P.postBody>

        <P.postFooter>
          <span>
            <img src={WanderDelgado} alt="" />
          </span>

          <span>
            <h3>Escrito por {foundPost.author}</h3>
            <p>{findUser.desc}</p>
          </span>
        </P.postFooter>
      </P.postContainer>
    </P.main>
  )
}
