import styled from "styled-components";

export const NavbarContainer = styled.div`
    width: 100%;
    height: fit-content;
    padding: 1rem;
    background-color: #ffffff;
    position: sticky;
    top: 0;
    z-index: 100;
`

export const NavbarImg = styled.div`
    height: 50px;
    width: 50px;
    display: flex;
    justify-content: center;
    align-items: center;
    overflow: hidden;

    img {
        height: 100%;
        width: 100%;
    }
`

export const NavbarProfile = styled.div`
    display: flex;
    align-items: center;
    gap: 5px;
`