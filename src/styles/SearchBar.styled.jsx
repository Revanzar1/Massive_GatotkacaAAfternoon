import styled from "styled-components";

export const SearchBarContainer = styled.div`
    position: relative;

    input {
        height: 50px;
        width: 300px;
        padding-right: 32px;
        padding-left: 1rem;
        border: none;
        border-radius: 5px;
        background-color: #efefef;
        font-size: 1.1rem;
        outline: none;

        &:focus {
            border: 2px solid #009688;
        }
    }

    svg {
        position: absolute;
        height: 50px;  
        width: 22px;
        right: 10px;
        color: #a4a3a3;
        cursor: pointer;
    }
`