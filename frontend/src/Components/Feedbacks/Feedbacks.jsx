import React from 'react'
import * as F from './Styles'
import exxerLogo from '../../assets/logos/exxerLogo.webp'

export const Feedbacks = () => {
    const feedbacks = [
        {id: 0, empresa: "Logo empresa Exxer", logo: exxerLogo, feedback: "Com a parceria da Salus Laboris conseguimos reduzir significativamente os índices de afastamento por questões ocupacionais. O suporte da equipe foi fundamental para a implementação de programas de saúde preventiva.", nome: "Carlos Mendes", cargo: "Diretor de Operações"}
    ]

  return (
    <F.main>
        <F.titleContainer>
            <h2>FEEDBACKS QUE NOS MOTIVAM</h2>
            <h3>O QUE NOSSOS CLIENTES DIZEM</h3>
        </F.titleContainer>

        <F.textContainer>
            <p>Nosso maior reconhecimento vem de quem já experimentou nossos serviços. Veja alguns feedbacks de clientes e parceiros que confiaram na <span>Salus Laboris</span>.</p>
        </F.textContainer>

        <F.cardsContainer>
            {feedbacks.map((feedback, index) => (
                <F.card>
                    <F.cardHeader>
                        <img src={feedback.logo} alt={feedback.empresa} key={index} />
                    </F.cardHeader>

                    <F.cardBody>
                        <p>Com a parceria da Salus Laboris conseguimos reduzir significativamente os índices de afastamento por questões ocupacionais. O suporte da equipe foi fundamental para a implementação de programas de saúde preventiva.</p>
                    </F.cardBody>

                    <F.cardFooter>
                        <h3>Carlos Mendes</h3>
                        <h2>Diretor de Operações</h2>
                    </F.cardFooter>
                </F.card>
            ))}
        </F.cardsContainer>
    </F.main>
  )
}
