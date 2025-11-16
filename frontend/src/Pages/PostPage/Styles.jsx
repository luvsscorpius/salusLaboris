import styled from 'styled-components'

export const main = styled.main`
    font-family: "Poppins", sans-serif;
`

export const postContainer = styled.div`
    display: flex;
    flex-direction: column;
    padding: 0px 0 10px 0;
    gap: 20px;
`

export const postBody = styled.div`
    padding: 0 30px;
    display: flex;
    flex-direction: column;
    gap: 10px;

    h1 {
        color: #4A7C59;
    }

    hr {
        background-color: #4A7C59;
        height: 8px;
        border-radius: 5px;
    }

    p {
        text-align: justify;
        color: #1d1d1d;
        opacity: 0.80;
    }
`

export const postFooter = styled.div`
    padding: 0 30px;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    gap: 20px;

    span {

        display: flex;
        flex-direction: column;
        gap: 10px;

        h3 {
            color: #4A7C59;
        }

        img {
            width: 100px;
        }

        p {
            text-align: justify;
        }
    }
`