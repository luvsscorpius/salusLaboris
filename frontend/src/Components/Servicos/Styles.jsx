import styled from 'styled-components'

export const main = styled.main`
    background-color: #233D4D;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 50px 0 50px 0;
    gap: 50px;
`

export const TitleContainer = styled.div`
    text-align: center;
    font-family: "Poppins", sans-serif;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    h3 {
        font-size: 22px;
        color: #4A7C59;
        font-weight: 800;
        padding: 10px;
    }

    h2 {
        font-size: 32px;
        font-weight: 800;
        color: #fff;
        opacity: 0.85;
        padding: 0px 10px 0px 10px;
    }

    p {
        padding: 0px 10px 0px 10px;
        font-size: 18px;
        font-weight: 600;
        color: #fff;
        opacity: 0.70;
        width: 90%;
    }

    .fases {
        font-size: 28px;
        height: 100%;
    }

    @media (min-width: 768px) {
        .fases {
            font-size: 26px;
        }

        p {
            width: 50%;
        }
    }

    @media (min-width: 1024px) {
        h3 {
            height: 35px;
        }

        .fases {
            font-size: 24px;
        }
    }
`

export const cardContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 10px 0 0 0;
    gap: 20px;
    width: 90%;

    @media (min-width: 768px) {
        flex-wrap: wrap;
        flex-direction: row;
    }

    @media (min-width: 1024px) {
        width: 70%;
        gap: 10px;
        padding: 0;
    }
`

export const card = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    font-family: "Poppins", sans-serif;
    color: #eee;
    opacity: 0.9;
    gap: 3px;
    position: relative;
    padding: 20px 0px 10px 0;
    border-radius: 5px;
    box-shadow: rgba(0, 0, 0, 0.5) 0px 10px 10px 0px;
    transition: transform 0.3s ease-in-out;

    .icon {
        width: 100px;
        z-index: 10;
    }

    .background {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        object-fit: cover;
        z-index: 0;
        border-radius: 5px;
        opacity: 0.3;
    }

    h3 {
        font-size: 24px;
        z-index: 10;
        font-weight: 800;
        width: 100%;
        text-align: center;
        padding: 0px 20px 0px 20px;
    }

    p {
        width: 100%;
        z-index: 10;
        padding: 20px;
        text-align: justify;
        font-weight: 500;
        font-size: 20px;
    }

    &:hover {
        cursor: pointer;
        transform: scale(0.98)
    }

    @media (min-width: 768px) {
        width: 45%;
        height: 365px;

        h3 {
            font-size: 22px;
        }

        p {
            font-size: 18px;
            height: 30%;
        }
    }

    @media (min-width: 1024px) {
        width: 325px;
        height: 365px;

        h3 {
            font-size: 22px;
        }

        p {
            font-size: 18px;
            height: 30%;
        }
    }
`

export const cardFasesContainer = styled.div`
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 10px;
    width: 90%;
    padding: 20px 0 20px 0px;

    @media (min-width: 1024px) {
        width: 70%;
        padding: 20px 5px 20px 5px;
    }
`

export const cardsContainer = styled.div`
    z-index: 10;
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 10px;  

    @media (min-width: 1024px) {
        flex-direction: row;
        padding: 0px 20px 0px 20px;
    }
`

export const cardFases = styled.div`
    width: 100%;
    z-index: 10;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    position: relative;
    gap: 30px;
    box-shadow: rgba(0, 0, 0, 0.5) 0px 10px 10px 0px;
    padding: 20px 0 20px 0px;
    border-radius: 5px;

    .background {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        object-fit: cover;
        width: 100%;
        z-index: 0;
        border-radius: 5px;
        opacity: 0.4;
    }

    @media (min-width: 768px) {
        width: 90%;
    }

    @media (min-width: 1024px) {
        width: 100%;
    }

`

export const headerFasesContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100%;
    z-index: 10;
    gap: 10px;
    font-family: "Poppins", sans-serif;

    .icon {
        z-index: 10;
        width: 120px;
        height: 120px;
    }

    h2 {
        width: 100%;
        text-align: center;
        color: #fff;
        opacity: 0.80;
        padding: 0px 10px 0px 10px;
    }

    @media (min-width: 768px) {
    
        h2 {
            font-size: 22px;
        }
    }
`

export const fasesCard = styled.div` 
    z-index: 10;
    width: 90%;
    height: 100%;
    border-radius: 10px;
    background-color: #233D4D;
    color: #fff;
    font-family: "Poppins", sans-serif;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 10px;
    padding: 10px 0 10px 0px;
    box-shadow: rgba(0, 0, 0, 0.5) 0px 10px 10px 0px;

    h3 {
        font-size: 22px;
        padding: 0px 10px 0 10px;
        font-weight: 600;
        text-align: center;
        opacity: 0.85;
    }

    p {
        font-size: 18px;
        padding: 0px 20px 0 20px;
        font-weight: 500;
        text-align: center;
        opacity: 0.75;
    }

    img {
        width: 55px;
        height: 55px;
    }

    @media (min-width: 768px) {
        h3 {
            font-size: 20px;
        }

        p {
            font-size: 16px;
            padding: 0px 50px 0 50px;
        }
    }

    @media (min-width: 1024px) {
        width: 300px;
        height: 230px;

        p {
            font-size: 16px;
            padding: 0px 20px 0 20px;
        }
    }
`