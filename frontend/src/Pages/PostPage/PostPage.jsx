import React, { useContext } from 'react'
import * as P from './Styles'
import { SalusContext } from '../../Context/Context'
import WanderDelgado from '../../assets/WanderDelgado.webp'

export const PostPage = () => {

  const { posts } = useContext(SalusContext)

  console.log(posts)

  return (
    <P.main>
      <P.postContainer>
        <P.postBody>
          <h1>{posts[0].title}</h1>
          <hr />

          <p>{posts[0].desc}</p>
        </P.postBody>

        <P.postFooter>
          <span>
            <img src={WanderDelgado} alt="" />
          </span>

          <span>
            <h3>Escrito por Wander Delgado</h3>
            <p>Wander Delgado é o Diretor Financeiro, responsável pela gestão estratégica dos recursos da empresa. Com visão analítica e foco em resultados, ele conduz o planejamento financeiro, otimiza processos e garante uma administração eficiente e transparente.</p>
          </span>
        </P.postFooter>
      </P.postContainer>
    </P.main>
  )
}
