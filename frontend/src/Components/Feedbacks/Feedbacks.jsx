import React from 'react'
import * as F from './Styles'
import exxerLogo from '../../assets/logos/exxerLogo.webp'
import enterplakLogo from '../../assets/logos/enterplakLogo.webp'
import petrobrasLogo from '../../assets/logos/petrobrasLogo.webp'

export const Feedbacks = () => {
    const feedbacks = [
        {id: 0, empresa: "Logo empresa Exxer", logo: exxerLogo, feedback: "Com a parceria da Salus Laboris conseguimos reduzir significativamente os índices de afastamento por questões ocupacionais. O suporte da equipe foi fundamental para a implementação de programas de saúde preventiva.", nome: "Carlos Mendes", cargo: "Diretor de Operações"},

        {id: 1, empresa: "Logo empresa EnterPlak", logo: enterplakLogo, feedback: "A atuação da Salus Laboris trouxe mais confiança para nossos colaboradores. Hoje temos um ambiente de trabalho mais saudável, produtivo e alinhado às normas de segurança.", nome: "Fernanda Oliveira", cargo: "Gerente de RH"},
        
        {id: 2, empresa: "Logo empresa Petrobras", logo: petrobrasLogo, feedback: "A Salus Laboris nos apoia na gestão de saúde ocupacional em grande escala, com soluções técnicas e acompanhamento próximo. Uma parceria estratégica para manter nossa força de trabalho segura e engajada.", nome: "João Ribeiro", cargo: "Coordenador de Saúde"},
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
                        <img src={feedback.logo} alt={feedback.empresa} key={index} type="image/webp" />
                    </F.cardHeader>

                    <F.cardBody>
                        <p>{feedback.feedback}</p>
                    </F.cardBody>

                    <F.cardFooter>
                        <h3>{feedback.nome}</h3>
                        <h2>{feedback.cargo}</h2>
                    </F.cardFooter>
                </F.card>
            ))}
        </F.cardsContainer>
    </F.main>
  )
}
