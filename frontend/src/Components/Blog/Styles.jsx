import styled from 'styled-components'

export const main = styled.main` 
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    background-color: #233D4D;
    font-family: "Poppins", sans-serif;
    padding: 50px 0 50px 0;
    gap: 50px;
`

export const titleContainer = styled.div`
    width: 90%;

    h2 {
        text-align: center;
        color: #4A7C59;
        font-size: 34px;
        font-weight: 800;
    }

    h3 {
        text-align: center;
        color: #FFFFFF;
        font-size: 20px;
        font-weight: 800;
        opacity: 0.90;
    }
`

export const cardsContainer = styled.div` 
    width: 90%;
    padding: 0 10px 0 10px;
`

export const card = styled.div`
    height: 100%;
`

export const cardHeader = styled.div`
    position: relative;
    height: 200px;
    border-radius: 10px 10px 0px 0px;

    img {
        position: absolute;
        width: 100%;
        height: 100%;
        object-fit: cover;
        object-position: top;
        top: 0;
        left: 0;
        z-index: 1;
        border-radius: 10px 10px 0px 0px;
    }
        
    span {
        position: relative;
        display: inline-block;
        z-index: 2;
        background-color: #4A7C59;
        top: 10px;
        left: 10px;
        border-radius: 3px;
    }
    
    p {
        position: relative;
        padding: 10px;
        z-index: 10;
        font-weight: 800;
        text-align: center;
        color: #fff;
    }
`

export const postInfo = styled.div`
    background-color: #fff;
    padding: 10px 0px 10px 5px;

    span {
        display: flex;
        flex-direction: row;
        gap: 5px;
        padding: 10px 5px 0 10px;

        p {
            color: #4A7C59;
        }

        svg {
            color: #4A7C59;     
        }
    }
`