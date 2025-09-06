import styled from "styled-components";

export const hero = styled.div`
    background-color: #233D4D;
    position: relative; 
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    padding: 30px;

    span {
        z-index: 10;
    }

    img {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        object-fit: cover;
        opacity: 0.1;
        z-index: 0;
    }

    @media (min-width: 1024px) {
        align-items: center;
        height: 600px; 
        padding: 0;

        span {
            border: 1px solid red;
        }

        img {
            object-fit: cover;
            object-position: top;
            opacity: 0.2;
        }

        span {
            width: 62%;
        }
    }
`

export const bar = styled.div`
    background-color: #4A7C59;
    width: 100%;
    height: 10px;
    z-index: 10;
    border-radius: 10px;
    margin: 20px 0px 20px 0px;

    @media (min-width: 1024px) {
        width: 580px;
    }
`

export const titleContainer = styled.div`
    z-index: 10;
    padding: 0 0px 0 0px;
    display: flex;
    flex-direction: column;
    align-items: start;
    justify-content: center;
    gap: 20px;
    width: 100%;

    h1 {
        color: #fff;
        font-family: "Poppins", sans-serif;
        font-weight: 700;
        font-size: 33px;
        line-height: 1.3;
        width: 100%;
        
        span {
            background-color: #fff;
            color: #4A7C59;
        }
    }

    p {
        color: #eee;
        font-family: "Poppins", sans-serif;
        font-weight: 550;
        font-size: 15px;
        text-align: justify;
    }

    @media (min-width: 768px) {
        width: 100%;
        padding: 0 300px 0 0px;
    }

    @media (min-width: 1024px) {
        width: 580px;
        padding: 0 20px 0 0px;

        h1 {
            font-size: 38px;
            text-align: justify;
        }

        p {
            font-size: 18px;
        }
    }
`

export const buttonContainer = styled.div` 
    z-index: 10;
    width: 100%;
    margin-left: 20px 0x 0px 0px;

    button {
        width: 100%;
        height: 50px;
        background-color: #4A7C59;
        border: none;
        z-index: 10;
        color: #fff;
        font-family: "Poppins", sans-serif;
        font-weight: 600;
        font-size: 17px;
        border-radius: 10px;
        margin-top: 20px;

        &:hover {
            cursor: pointer;
            opacity: 0.8;
            transition: 0.9s ease-in-out;
        }
    }

    @media (min-width: 768px) {
        width: 90%;

        button {
            width: 335px;
            height: 55px;
            font-size: 20px;
            font-weight: 550;
        }
    }

    @media (min-width: 1024px) {

        button {
            width: 335px;
            height: 55px;
            font-size: 20px;
            font-weight: 550;
        }
    }
`