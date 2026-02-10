import React from 'react'
import * as P from './Styles'
import avenidaCasaEConstrucaoLogo from '../../assets/logos/avenidaCasaEConstrucaoLogo.webp'
import betelLogo from '../../assets/logos/betelLogo.webp'
import cacauDoCeuLogo from '../../assets/logos/cacauDoCeuLogo.webp'
import chiquinhoLogo from '../../assets/logos/chiquinhoLogo.webp'
import cimedLogo from '../../assets/logos/cimedLogo.webp'
import customLogo from '../../assets/logos/customLogo.webp'
import greenVineLogo from '../../assets/logos/greenVineLogo.webp'
import enterplakLogo from '../../assets/logos/enterplakLogo.webp'
import exxerLogo from '../../assets/logos/exxerLogo.webp'
import maglioniLogo from '../../assets/logos/maglioniLogo.webp'
import mideaLogo from '../../assets/logos/mideaLogo.webp'
import oggiSorvetesLogo from '../../assets/logos/oggiSorvetesLogo.webp'
import oppexLogo from '../../assets/logos/oppexLogo.webp'
import petrobrasLogo from '../../assets/logos/petrobrasLogo.webp'
import superiorTecnologiaLogo from '../../assets/logos/superiorTecnologiaLogo.webp'

export const Parceiros = () => {

    const logos = [
        { id: 1, alt: "Logo empresa: Avenida Casa & Construção", path: avenidaCasaEConstrucaoLogo },
        { id: 5, alt: "Logo empresa: Cimed", path: cimedLogo },
        { id: 2, alt: "Logo empresa: Betel", path: betelLogo },
        
        { id: 6, alt: "Logo empresa: Custom", path: customLogo },
        { id: 3, alt: "Logo empresa: Cacau do Ceu", path: cacauDoCeuLogo },
        { id: 4, alt: "Logo empresa: Chiquinho", path: chiquinhoLogo },
        { id: 7, alt: "Logo empresa: Green Vine", path: greenVineLogo },
        { id: 8, alt: "Logo empresa: EnterPlak", path: enterplakLogo },
        { id: 9, alt: "Logo empresa: Exxer", path: exxerLogo },
        { id: 10, alt: "Logo empresa: Maglioni", path: maglioniLogo },
        { id: 11, alt: "Logo empresa: Midea", path: mideaLogo },
        { id: 12, alt: "Logo empresa: Oggi Sorvetes", path: oggiSorvetesLogo },
        { id: 13, alt: "Logo empresa: Oppex", path: oppexLogo },
        { id: 14, alt: "Logo empresa: Petrobras", path: petrobrasLogo },
        { id: 15, alt: "Logo empresa: Superior Tecnologi", path: superiorTecnologiaLogo },
    ]

    return (
        <P.main>
            <P.titleContainer className='firstTitle'>
                <h2>NOSSOS PARCEIROS</h2>
                <h3>PARCEIROS NA MISSÃO DE CUIDAR DE PESSOAS</h3>
            </P.titleContainer>

            <P.textContainer>
                <p>
                    Desenvolvemos soluções personalizadas para o perfil de cada empresa e de seus colaboradores. Esse é o jeito <span>Salus Laboris</span> de promover saúde, segurança e bem-estar, fortalecendo pessoas e impulsionando negócios em todo o Brasil.
                </p>
            </P.textContainer>

            <P.empresasContainer>
                <div className="logos-track">
                    {[...logos, ...logos].map((logo, index) => (
                        <img src={logo.path} alt={logo.alt} key={index} type="image/webp"/>
                    ))}
                </div>
            </P.empresasContainer>

            <P.titleContainer className='secondTitle'>
                <h4>Quer transformar os resultados do seu negócio?</h4>

                <button onClick={() => window.open("https://wa.link/i82shq", "_blank", "rel='noreferrer'")}>
                    FALE COM UM CONSULTOR
                </button>
            </P.titleContainer>
        </P.main>
    )
}
