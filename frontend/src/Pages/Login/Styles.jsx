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

    .containers {
        width: 90%;
        display: flex;
        z-index: 0;

        .firstLogin {
            display: none;
        }
    }

    @media (min-width: 1024px) {

        .containers {
            
            width: 70%;

            .firstLogin {
                display: flex;
                align-items: center;
                justify-content: center;
                box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);  
                gap: 30px;

                img {
                    width: 180px;
                }

                p {
                    width: 50%;
                    text-align: center;
                    font-size: 20px;
                    font-weight: 800;
                    color: #4A7C59;
                }
            }
        }   
    }
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
    box-shadow: 0 1px 5px rgba(0, 0, 0, 0.1);  
    z-index: 1;

    svg {
        color: #4A7C59;
    }

    p {
        font-size: 25px;
        font-weight: 800;
        color: #4A7C59;
    }

    @media (min-width: 1024px) {
        width: 70%;

        p {
            font-size: 20px;
        }
    }
`

export const loginBody = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    background-color: #fff;
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);  
    width: 100%;
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
    box-shadow: 0 1px 5px rgba(0, 0, 0, 0.2);  
    z-index: 1;

    img {
        width: 100px;
    }

    @media (min-width: 1024px) {
        width: 70%;
    }
`

export const inputContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding: 10px 20px;
    gap: 2px;

    label {
        color: #1d1d1d;
        opacity: 0.75;
    }

    .buttonContainer {

        #entrar {
            width: 100%;
            margin-top: 20px;
            height: 60px;
            background-color: #4A7C59;
            border: 0;
            color: #fff;
            border-radius: 5px;
            font-size: 20px;
            font-weight: 800;

            &:hover {
                cursor: pointer;
                opacity: 0.90;
                transition: 0.5s ease-in-out;
            }
        }
    }

    a {
        width: 100%;
        font-style: none;
        color: #4A7C59;
        text-align: center;
        margin-top: 20px;

        &:hover {
            opacity: 0.7;
            transition: .3s ease-in-out;
        }
    }

    span {
        display: flex;
        align-items: center;

        input {
            height: 45px;
            width: 100%;
            border: 2px solid #eee;
            padding: 10px;
            font-size: 18px;

            &::placeholder {
                font-size: 18px;
            }

            &:focus {
                outline: none;
            }
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

    @media (min-width: 1024px) {

        .buttonContainer {
            display: flex;
            justify-content: center;

            #entrar {
                width: 50%;
            }
        }
    }
`