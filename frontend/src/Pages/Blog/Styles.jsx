import styled from 'styled-components'

export const blog = styled.main`
    display: flex;
    flex-direction: row;
    font-family: "Poppins", sans-serif;

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

export const blogContainer = styled.div`
    width: 100%;
`

export const blogHeader = styled.div`
    display: flex;
    flex-direction: column;
    padding: 10px 20px;

    button {
        border: none;
        background-color: transparent;
    }

    hr {
        background: #4A7C59;
        height: 6px;
        border-radius: 5px;
    }

    div {
        display: flex;
        align-items: center;
        justify-content: space-between;
        height: 100%;

        svg, h2 {
            color: #4A7C59;
        }

        button:hover {
            cursor: pointer;
            opacity: 0.85;
            transition: 0.3s ease-in-out;
        }
    }

    @media (min-width: 1024px) {
        padding: 10px 60px;

    }
`

export const blogBody = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 10px 0;
`

export const cardsContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 30px;
    padding: 0px 0px 30px;
`

export const card = styled.div`
    width: 90%;
    background-color: #fff;
    box-shadow: 0 5px 20px rgba(0, 0, 0, 0.2);  
    border-radius: 5px;
    padding: 15px 0px;
`

export const postInfo = styled.div`
    display: flex;
    flex-direction: column;
    padding: 10px;
    color: #4A7C59;
    gap: 5px;

    span {
        display: flex;
        flex-direction: row;
        gap: 8px;
    }
`

export const cardInfo = styled.div`
    padding: 10px;
    display: flex;
    flex-direction: column;
    gap: 15px;

    p, h3 {
        text-align: justify;
        color: #1d1d1d;
        opacity: 0.90;
    }

    button {
        width: 90px;
        height: 25px;
        font-size: 16px;
        font-weight: 800;
        background-color: #4A7C59;
        border: none;
        color: #fff;
        border-radius: 2px;
        text-align: center;

        &:hover {
            cursor: pointer;
            opacity: 0.94;
            transition: ease-in-out 0.7s;
        }
    }
`
