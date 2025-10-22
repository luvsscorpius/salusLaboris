import styled from 'styled-components'

export const main = styled.main`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 20px;
    padding: 50px 0 50px 0;
    height: 100%;

    img {
        width: 80%;
        height: 330px;
        object-fit: cover;
        object-position: right;
    }

    .cardInfoEquipe {
        width: 90%;
    }

    @media (min-width: 768px) {
        .cardInfoEquipe {
            width: 90%;
        }
    }

    @media (min-width: 1024px) {
        .cardInfoEquipe {
            width: 70%;
        }
    }
`

export const titleContainer = styled.div`
    background-color: #EEEEEE;
    width: 90%;
    text-align: center;
    border-radius: 2px;

    h1 {
        font-family: "Poppins", sans-serif;
        color: #4A7C59;
        font-size: 32px;
        font-weight: 800;
    }

    @media (min-width: 768px) {
        width: 90%;
    }

    @media (min-width: 1024px) {
        width: 70%;

        text-align: start;
        padding: 0px 0px 0px 10px;
    }
`

export const quemSomosContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    gap: 20px;
    width: 100%;

    .spanContainer {
        gap: 20px;
        display: flex;
        align-items: center;
        justify-content: center;
        flex-direction: column;
    }
    
    img {
        width: 80%;
        height: 330px;
        object-fit: cover;
    }

    @media (min-width: 768px) {
        flex-direction: row;  
        align-items: flex-start;
        width: 90%;    

        .quemSomosTitle {
            width: 100%;
        }

        img {
            width: 315px;
            height: 330px;
            object-fit: cover;
        }
    }

    @media (min-width: 1024px) {
        flex-direction: row;  
        align-items: flex-start;
        width: 70%;    

        .quemSomosTitle {
            width: 100%;
        }

        img {
            width: 315px;
            height: 330px;
            object-fit: cover;
        }
    }
`

export const cardInfo = styled.div`
    width: 90%;
    border-radius: 5px;
    background-color: #fff;
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
    padding: 10px;

    p {
        font-family: "Poppins", sans-serif;
        color: #1d1d1d;
        font-size: 22px;
        font-weight: 100;
        text-align: justify;
        opacity: 0.95;

        span {
            background-color: #EEEEEE;
            color: #4A7C59;
            font-weight: 800;
        }
    }

    @media (min-width: 768px) {
        width: 100%;
    }

    @media (min-width: 1024px) {
        width: 100%;
        line-height: 25px;

        p {
            font-size: 18px;
        }
    }
`

export const cardContainer = styled.div`
    width: 85%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 30px;

    @media (min-width: 768px) {
        width: 87%;
        flex-direction: row;
        flex-wrap: wrap;
    }

    @media (min-width: 768px) {
        width: 70%;
        flex-direction: row;
        flex-wrap: wrap;
        gap: 10px;
    }
`

export const card = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    font-family: "Poppins", sans-serif;
    padding: 10px;
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.30);
    border-radius: 5px;
    height: auto;
    transition: transform 0.3s ease-in-out;

    &:hover {
        cursor: pointer;
        transform: scale(0.98);
    }

    img {
        width: 100%;
        height: auto;
    }

    h3 {
        margin-top: 20px;
        color: #4A7C59;
        font-weight: 800;
        font-size: 18px;
        letter-spacing: 0.2px
    }

    h2 {
        color: #1d1d1d;
        opacity: 0.85;
        font-weight: 800;
        font-size: 24px;
        text-align: center;
    }

    @media (min-width: 768px) {
        width: 47%;
        
        img {
            height: 390px;
        }
    }

    @media (min-width: 768px) {
        width: 325px;
        
        img {
            height: 390px;
        }
    }
`