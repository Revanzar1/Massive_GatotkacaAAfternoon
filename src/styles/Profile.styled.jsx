import styled from "styled-components";

export const ProfileContainer = styled.div`
    display: flex;
    flex-direction: column;
    padding: 2rem;
    background-color: #fff;
    width: 820px;
    border-radius: 1rem;

    .details span {
        color: #253763;
        font-weight: 600;
    }

    .isi-details {
        color: #253763;
        font-weight: 300;
    }
`

export const ProfileCardImg = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    gap: 1rem;
    width: 310px;
    height: 303px;
    background-color: #fff;
    border-radius: 1rem;

    img {
        height: 150px;
    }
`

export const ProfileLinks = styled.div`
    display: flex;
    gap: 1rem;
    margin-bottom: 1rem;
    border-bottom: 1px solid #E1E1E1;

    a {
        color: #000;
        padding: 10px;
    }

    .active {
            border-bottom: 2px solid #1E73BE;
            color: #1E73BE;
        }
`