import styled from 'styled-components'

export const main = styled.main`
    font-family: "Poppins", sans-serif; 
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 60px;

    .firstTitle {
        padding: 50px 0px 0px 0px;
    }

    .secondTitle {
        gap: 40px;
        padding: 0px 0px 50px 0px;
    }
`

export const titleContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    h2 {
        font-size: 30px;
        color: #4A7C59;
        font-weight: 800;
        text-align: center;
        padding: 0px 10px 0px 10px;
    }

    h3 {
        font-size: 22px;
        color: #1d1d1d;
        font-weight: 700;
        text-align: center;
        opacity: 0.90;
        padding: 0px 10px 0px 10px;
        width: 90%;
    }

    h4 {
        font-size: 25px;
        text-align: center;
        color: #4A7C59;
        padding: 0 40px 0 40px;
    }

    button {
        border: none;
        height: 60px;
        width: 70%;
        background-color: #4A7C59;
        color: #fff;
        font-weight: 600;
        font-size: 18px;
        border-radius: 5px;
        transition: transform 0.3s ease-in-out;

        &:hover {
            cursor: pointer;
            transform: scale(0.98);
        }
    }

    @media (min-width: 768px) {

        h4 {
            width: 70%;
        }

        button {
            border: none;
            height: 60px;
            width: 50%;
        }
    }

    @media (min-width: 1024px) {

        h3 {
            width: 60%;
        }

        h4 {
            width: 100%;
        }

        button {
            border: none;
            height: 55px;
            width: 265px;
        }
    }
`

export const textContainer = styled.div`
    p {
        padding: 0px 40px 0px 40px;
        text-align: justify;
        font-size: 24px;
        font-weight: 100;
        color: #1d1d1d;
    }

    span {
        background-color: #eee;
        color: #4A7C59;
        font-weight: 800;
    }

    @media (min-width: 1024px) {
        width: 60%;
        
        p {
            font-size: 20px;
        }
    }
`

export const empresasContainer = styled.div`
    width: 100%;
    padding: 5px;
    display: flex;
    flex-direction: row;
    justify-content: start;
    align-items: center;
    gap: 25px;
    overflow-x: auto; 
    overflow-y: hidden; 
    scroll-behavior: smooth;

    &::-webkit-scrollbar {
        display: none;
    }

    img {
        width: 150px;
        scroll-snap-align: start;
        -webkit-user-drag: none; /* Chrome, Safari */
        -khtml-user-drag: none;  /* Konqueror */
        -moz-user-drag: none;     /* Firefox antigo */
        -o-user-drag: none;       /* Opera */
        user-drag: none;          /* padrão futuro */
  
        user-select: none;        /* impede seleção do texto/elemento */
        pointer-events: none;     /* impede interação (opcional) */
    }

    @media (min-width: 768px) {
        justify-content: start;
        width: 90%;

        &::-webkit-scrollbar {
            display: grid;
        }
    }

    @media (min-width: 1024px) {
        justify-content: start;
        width: 60%;

        &::-webkit-scrollbar {
            display: grid;
        }
    }
`