import React from 'react'
import * as F from './Styles'
import exxerLogo from '../../assets/logos/exxerLogo.webp'
import enterplakLogo from '../../assets/logos/enterplakLogo.webp'
import petrobrasLogo from '../../assets/logos/petrobrasLogo.webp'

export const Feedbacks = () => {
    const feedbacks = [
        {id: 0, empresa: "Logo empresa Exxer", logo: exxerLogo, feedback: "Wander e toda a sua equipe desempenham com maestria o trabalho a que se propõem. Demonstram atenção e comprometimento com as normas vigentes. Recomendo fortemente o trabalho realizado e ressalto sua competência e profissionalismo.", nome: "Ednéa Ribeiro", cargo: "Analista de Recursos Humanos I Gestão de Pessoas"},
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
