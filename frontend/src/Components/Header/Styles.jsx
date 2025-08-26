import styled from 'styled-components'

export const header = styled.header`
    background-color: #EEEEEE;
    height: 100px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 20px;

    img {
        width: 100px;
    }

    svg {
        font-size: 40px;
        color: #4A7C59;
        transition: transform 0.8s ease;

        &:hover {
            cursor: pointer;
            opacity: 0.8;
            transform: scale(0.9);
        }
    }
`

export const navLinks = styled.nav`
    position: absolute;
    top: 60px;
    right: 20px;
    width: 35%;
    border-radius: 10px;
    background-color: #fff;
    box-shadow: rgba(0, 0, 0, 0.15) 1.95px 1.95px 2.6px;
    overflow: hidden;
  
    max-height: ${({ open }) => (open ? "500px" : "0")};
    opacity: ${({ open }) => (open ? "1" : "0.7")};
    transition: all 0.5s ease;

    ul {
        display: flex;
        flex-direction: column;
        gap: 15px;
        font-family: "Poppins", sans-serif;
        font-weight: 800;
        font-size: 15px;
        padding: 10px 0 10px 0;
        
        li {
            color: #4A7C59;
            list-style: none;
            transition: transform 0.8s ease;
            text-align: center;

            &:hover {
                cursor: pointer;
                opacity: 0.8;
                transform: scale(0.93);
            }
        }
    }
`