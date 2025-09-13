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

     .pagination {
        display: inline-flex;
        justify-content: center;
        align-items: center;
        gap: 0px;
        list-style-type: none;
        font-size: 20px;
        background-color: #eee;
        border: none;
        border-radius: 5px;

        li a {
            border: 2px solid #4A7C59;
            padding: 5px 10px 5px 10px;
            color: #4A7C59;
            text-decoration: none;
            display: block;
            transition: 0.2s;
            margin-left: -3px;
            font-weight: 800;

            &:hover {
                cursor: pointer;
                background-color: #4A7C59;
                color: #fff;
                transition: ease-in-out 0.6s;
            }
        }

        li.active a {
            background-color: #4A7C59;
            color: #fff;
        }
    }
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
    display: flex;
    flex-direction: column;
    gap: 50px;
    align-items: center;
    justify-content: center;

    @media (min-width: 768px) {
        flex-direction: row;
        flex-wrap: wrap;
        gap: 20px;
        padding: 0;
    }
`

export const card = styled.div`
    height: 100%;

    @media (min-width: 768px) {
        width: 48%;
    }

    @media (min-width: 1024px) {
        width: 345px;
    }
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
        left: 15px;
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
    padding: 10px 0px 5px 5px;

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

export const cardInfo = styled.div`
    padding: 15px 15px 30px 15px;
    background-color: #fff;
    display: flex;
    flex-direction: column;
    gap: 15px;
    border-radius: 0 0 10px 10px;

    h3 {
        font-size: 22px;
        font-weight: 700;
    }

    p {
        font-size: 18px;
        font-weight: 100;
        text-align: justify;
    }

    button {
        width: 120px;
        height: 30px;
        font-size: 18px;
        font-weight: 800;
        background-color: #4A7C59;
        border: none;
        color: #fff;
        border-radius: 2px;

        &:hover {
            cursor: pointer;
            opacity: 0.94;
            transition: ease-in-out 0.7s;
        }
    }
`