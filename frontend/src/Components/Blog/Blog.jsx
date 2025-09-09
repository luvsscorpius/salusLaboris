import React from 'react'
import * as B from './Styles'

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
                    <span>
                        <p>Segurança do Trabalho</p>
                    </span>
                </B.cardHeader>
            </B.card>
        </B.cardsContainer>
    </B.main>
  )
}
