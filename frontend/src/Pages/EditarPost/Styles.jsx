import styled from "styled-components";

export const main = styled.main`
    font-family: "Poppins", sans-serif;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 0 0px 20px 0;

    .header {
        width: 90%;
        padding: 20px 0;
    }

    @media (min-width: 1024px) {
        flex-direction: row;
    }
`

export const novoPostContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 0px;

    @media (min-width: 1024px) {
        width: 100%;
    }
`

export const novoPostBody = styled.div`
    width: 90%;
    background-color: #fff;
    box-shadow: 0 5px 20px rgba(0, 0, 0, 0.2);  
    width: 89%;
    border-radius: 5px;

    span {
        display: flex;
        flex-direction: column;
        width: 100%;
        padding: 10px 10px;

        label {
            color: #1d1d1d;
            font-weight: 600;
            opacity: 0.85;
        }

        input, textarea, select {
            width: 100%;
            height: 40px;
            border-radius: 5px;
            border: 1px solid #fff;
            box-shadow: 0 5px 20px rgba(0, 0, 0, 0.2);  
            outline: none;
            padding: 10px;
            resize: vertical;
            color: #1d1d1d;
            font-weight: 600;
            opacity: 0.85;
        }

        textarea {
            height: 200px;
        }
    }

    div {
        width: 100%;
        padding: 10px;

        button {
            width: 100%;
            height: 40px;
            background-color: #4A7C59;
            border: none;
            color: #fff;
            font-weight: 800;
            display: flex;
            align-items: center;
            justify-content: center;
            gap: 5px;
            border-radius: 5px;

            &:hover {
                cursor: pointer;
                opacity: 0.86;
                transition: 0.3s ease-in-out;
            }
        }
    }
`