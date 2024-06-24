import styled from "styled-components";

export const SidebarContainer = styled.div`
    width: 358px;
    position: sticky;
    top: 0;
    height: 100vh;
    background-color: #009688;
`

export const SidebarWrap = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    height: 100%;
`

export const SideLink = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 5px;
    width: 100%;

    a {
        padding: 1rem 0;
        font-size: 1.1rem;
        width: 100%;
        color: #fff;
        padding-left: 20%;
        gap: 1rem;
        font-weight: 500;
        transition: .3s;

        &:hover {
            background-color: #fff;
            color: #009688;
        }
    }

    .active {
        background-color: #fff;
        color: #009688;
    }
`

export const SideLogo = styled.span`
    padding: 2rem 0;
`