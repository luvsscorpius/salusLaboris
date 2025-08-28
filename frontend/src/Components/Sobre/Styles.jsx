import styled from 'styled-components'

export const main = styled.main`
    border: 1px solid blue;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 20px;
    height: 100%;

    img {
        width: 80%;
        height: 330px;
        object-fit: cover;
        object-position: right;
    }
`

export const titleContainer = styled.div`
    background-color: #EEEEEE;
    width: 80%;
    text-align: center;
    border-radius: 2px;

    h1 {
        font-family: "Poppins", sans-serif;
        color: #4A7C59;
        font-size: 32px;
        font-weight: 800;
    }
`

export const cardContainer = styled.div`
    width: 80%;
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
        opacity: 0.97;

        span {
            background-color: #EEEEEE;
            color: #4A7C59;
            font-weight: 800;
        }
    }
`