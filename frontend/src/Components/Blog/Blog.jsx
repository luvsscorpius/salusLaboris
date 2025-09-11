import React from 'react'
import * as B from './Styles'
import blogSeg from '../../assets/blogSeg.png'
import { FaRegCalendarAlt } from "react-icons/fa";
import { FaRegUser } from "react-icons/fa";

export const Blog = () => {
  return (
    <B.main>
        
        <B.titleContainer>
            <h2>BLOG DA SALUS LABORIS</h2>
            <h3>EXPANDA SEU CONHECIMENTO SOBRE SEGURANÇA DO TRABALHO</h3>
        </B.titleContainer>

        <B.cardsContainer>
            <B.card>
                <B.cardHeader>
                        <img src={blogSeg} alt="Imagem de fundo do post do blog" />
                        <span>
                        <p>Segurança do Trabalho</p>
                        </span>
                </B.cardHeader>

                <B.postInfo>
                  <span>
                    <FaRegCalendarAlt/>
                    <p>17/08/2025</p>
                  </span>
                  
                  <span>
                    <FaRegUser/>
                    <p>Wander Delgado</p>
                  </span>
                </B.postInfo>
            </B.card>
        </B.cardsContainer>
    </B.main>
  )
}
