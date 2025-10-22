import styled from 'styled-components'

export const footer = styled.footer`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 50px 0 50px 0;
    font-family: "Poppins", sans-serif;
    background-color: #233D4D;
    gap: 50px;

    .footerContent {
        display: flex;
        flex-direction: column;
        gap: 50px;

        .div {
            height: 100%;
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            gap: 50px;
        }
    }

    .linksBox {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        gap: 50px;
        width: 100%;
        
        @media (min-width: 1024px) {
            flex-direction: row;
            justify-content: space-between;
            width: 100%;

            .acesso {
                align-items: end;
            }
        }
    }

    @media (min-width: 1024px) {
        .footerContent {
            display: flex;
            flex-direction: row;
            align-items: center;
            gap: 50px;
            width: 80%;
        }
    }
`

export const titleContainer = styled.div` 
    width: 90%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 10px;

    h3 {
        text-align: center;
        font-weight: 800;
        color: #fff;
        opacity: 0.85;
        font-size: 18px;
    }

    h2 {
        text-align: center;
        font-weight: 800;
        color: #4A7C59;
        opacity: 0.85;
        font-size: 30px;
    }

    @media (min-width: 768px) {
        width: 70%;

        h3 {
            font-size: 22px;
        }
    }

    @media (min-width: 1024px) {
        width: 70%;

        h2 {
            font-size: 34px;
        }

        h3 {
            padding: 0 200px;
            font-size: 22px;
        }
    }
`

export const atendimentoContainer = styled.div`
    width: 90%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 10px;
    color: #fff;
    opacity: 0.85;

    h4 {
        font-weight: 800;
        font-size: 18px;
    }

    p {
        text-align: center;
        font-weight: 400;
        font-size: 16px;
    }

    @media (min-width: 768px) {
        h4 {
            font-size: 20px;
        }

        p {
            font-size: 18px;
        }
    }

    @media (min-width: 768px) {
        width: 100%;
        align-items: start;

        p {
            text-align: start;
        }
    }
`

export const mailingContainer = styled.div` 
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;

    @media (min-width: 768px) {
        width: 100%;
    }
`

export const mailingCard = styled.div`
    width: 90%;
`

export const mainlingHeader = styled.div` 
    background-color: #4A7C59;
    padding: 10px 0;
    border-radius: 10px 10px 0 0;

    h3 {
        text-align: center;
        color: #fff;
        opacity: 0.85;
    }
`

export const mainlingBody = styled.div`
    padding: 10px 10px;
    color: #fff;
    opacity: 0.85;
    display: flex;
    flex-direction: column;
    gap: 15px;
    position: relative;
    z-index: 10;
    background-color: #233D4D;

    img {
        position: absolute;
        width: 100%;
        height: 100%;
        top: 0;
        right: 0;
        object-fit: cover;
        z-index: 2;
        opacity: 0.50;
    }

    .inputContainer {
        display: flex;
        flex-direction: column;
        z-index: 10;
    }

    p {
        text-align: justify;
        font-size: 18px;
        z-index: 10;
    }

    label {
        font-size: 18px;
        z-index: 10;
    }

    input {
        height: 48px;
        border-radius: 5px;
        z-index: 10;
        border: none;
        padding: 0 0px 0 10px;
        font-size: 18px;
    }

    button {
        font-size: 20px;
        height: 48px;
        background-color: #4A7C59;
        color: #fff;
        border: none;
        font-weight: 800;
        border-radius: 5px;
        z-index: 10;

        &:hover {
            cursor: pointer;
            opacity: 0.96;
            transition: 0.3s ease-in-out;
        }
    }
`

export const linksContainer = styled.div`
    width: 90%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: start;
    gap: 20px;
    color: #fff;
    opacity: 0.85;

    h4 {
        font-size: 18px;
        font-weight: 800;
    }

    ul {
        display: flex;
        flex-direction: column;
        gap: 5px;
        
        li {
            list-style: none;
            text-align: center;
            font-size: 16px;    
            
            a {
                text-decoration: none;
                color: #fff;
                opacity: 0.85;
            }

            &:hover {
                cursor: pointer;
                opacity: 0.85;
                transition: 0.3s ease-in-out;
            }
        }
    }

    @media (min-width: 1024px) {
        align-items: flex-start;

        h4 {
            width: 223px;
        }

        ul {
            li {
                text-align: start;
            }
        }
    }
`

export const developedContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    color: #fff;
    opacity: 0.85;
    gap: 5px;
    padding: 0 10px;

    p {
        text-align: center;
    }

    a {
        text-decoration: none;
        color: #fff;
        opacity: 0.85;
        text-align: center;

        &:hover {
            cursor: pointer;
            opacity: 0.70;
            transition: 0.3s ease-in-out;
        }
    }
`