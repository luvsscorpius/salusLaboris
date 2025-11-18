import styled from "styled-components";

export const main = styled.main`
    font-family: "Poppins", sans-serif;
    display: flex;
    flex-direction: column;
    justify-content: start;
    align-items: center;
    height: auto;

    .header {
        width: 90%;
        padding: 20px 0;
    }

    @media (min-width: 1024px) {
        flex-direction: row;
        align-items: start;
        height: 100%;
    }
`

export const novoPostContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: start;
    gap: 0px;
    padding: 0 0 20px 0;
    height: auto;
    width: 100%;

    @media (min-width: 1024px) {
        width: 100%;

        .header {
            width: 98%;
        }
    }
`

export const novoPostBody = styled.div`
    width: 90%;
    background-color: #fff;
    box-shadow: 0 5px 20px rgba(0, 0, 0, 0.2);  
    width: 89%;
    height: auto;
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
            resize: none;
            color: #1d1d1d;
            font-weight: 600;
            opacity: 0.85;
        }

        textarea {
            height: 300px;
            max-height: 350px;
        }
    }

    .toolbar {
        display: flex;
        justify-content: start;
        gap: 8px;
        padding: 10px;
        background: #fff;
        border: 1px solid #dcdcdc;
        border-radius: 6px;
        margin-bottom: 10px;
        box-shadow: 0 1px 3px rgba(0,0,0,0.1);
    }

    .toolbar button {
        background: #4A7C59;
        border: 1px solid #ccc;
        padding: 8px 10px;
        border-radius: 4px;
        cursor: pointer;
        font-size: 16px;
        display: flex;
        align-items: center;
        justify-content: center;
        width: 50px;

        transition: all 0.2s ease;
    }

    .toolbar button:hover {
        background: #eaeaea;
        border-color: #bcbcbc;
    }

    .toolbar button.is-active {
        background: #d0e4ff;
        border-color: #5b9bff;
    }

    .editorWrapper {
        border: 1px solid #ccc;
        border-radius: 6px;
        padding: 15px;
        background: white;
        max-height: 250px;
        min-height: 100px; 
        overflow-y: auto;
        font-size: 16px;
        line-height: 1.6;
        display: flex;
        align-items: start;

        /* TipTap reset */
        .ProseMirror {
            min-height: 250px;
            outline: none;
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

    @media (min-width: 1024px) {
        width: 98%;
        height: 100%;

        div {

            display: flex;
            align-items: center;
            justify-content: center;

            button {
                width: 330px;
            }
        }
            
    }
`