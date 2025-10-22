import styled from 'styled-components'

export const login = styled.div`
    font-family: "Poppins", sans-serif;
    padding: 50px 0;
`

export const loginContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`

export const loginHeader = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    gap: 10px;
    background-color: #eee;
    width: 90%;
    height: 90px;
    border-radius: 10px 10px 0 0;
    box-shadow: 0 4px 4px rgba(0, 0, 0, 0.3);  

    svg {
        color: #4A7C59;
    }

    p {
        font-size: 25px;
        font-weight: 800;
        color: #4A7C59;
    }
`

export const loginBody = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    background-color: #fff;
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);  
    width: 90%;
    padding: 15px 0;
`

export const loginFooter = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    gap: 10px;
    background-color: #eee;
    width: 90%;
    height: 90px;
    border-radius: 0px 0px 10px 10px;
    box-shadow: 0 4px 4px rgba(0, 0, 0, 0.3);  

    img {
        width: 100px;
    }
`

export const inputContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding: 10px 20px;
    gap: 2px;

    #entrar {
        margin-top: 20px;
        height: 68px;
        background-color: #4A7C59;
        border: 0;
        color: #fff;
        border-radius: 5px;
        font-size: 20px;
        font-weight: 800;

        &:hover {
            cursor: pointer;
        }
    }

    span {
        display: flex;
        align-items: center;

        input {
            height: 45px;
            width: 100%;
            border: 2px solid #eee;
        }

        button {
            border: 0;
            height: 45px;

            :hover {
                cursor: pointer;
            }
        }
    }

    svg {
        background-color: #eee;
        color: #ccc;
        width: 50px;
        padding: 5px;
        border-radius: 5px 0px 0px 5px;
    }
`