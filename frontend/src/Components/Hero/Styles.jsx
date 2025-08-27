import styled from "styled-components";

export const hero = styled.div`
    background-color: #233D4D;
    position: relative; 
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    padding: 20px;

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

    button {
        width: 90%;
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
`

export const bar = styled.div`
    background-color: #4A7C59;
    width: 90%;
    height: 10px;
    z-index: 10;
    border-radius: 10px;
    margin: 20px;
`

export const titleContainer = styled.div`
    z-index: 10;
    padding: 0 23px 0 23px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 20px;

    h1 {
        color: #fff;
        font-family: "Poppins", sans-serif;
        font-weight: 700;
        font-size: 32px;
        line-height: 1.3;

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
`