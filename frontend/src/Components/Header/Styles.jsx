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

        &:hover {
            cursor: pointer;
        }
    }
`