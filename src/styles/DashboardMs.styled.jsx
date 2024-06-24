import styled from "styled-components";

export const DashboardContainer = styled.div`
    margin-top: 2rem;
`

export const NotifContainer = styled.div`
    background-color: #009688;
    display: flex;
    justify-content: space-between;
    height: 150px;
    border-radius: 1rem;
`

export const NotifText = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 5px;
    height: 100%;
    padding-left: 200px;

    span {
        font-weight: 500;
    }
`

export const NotifImg = styled.div`
    width: 220px;
    height: 100%;
    position: relative;

    img {
        height: 100%;
        width: 100%;
        object-fit: cover;
        position: absolute;
        bottom: -10px;
    }
`

export const MotivasiContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: 250px;
    width: 600px;
    background-color: #fff;
    border-radius: 1rem;
    box-shadow: 0px 10px 15px -3px rgba(0,0,0,0.1);
    position: relative;

    img {
        position: absolute;
        right: 5px;
        bottom: 5px;
    }
`

export const MotivasiText = styled.div`
    width: 400px;
    display: flex;
    flex-direction: column;
    gap: 1rem;
    
    span {
        line-height: 2rem;
    }

    .motivasi-text {
        font-style: italic;
    }
`

export const JadwalContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    width: 600px;
    background-color: #fff;
    padding: 2rem;
    gap: 1rem;
    border-radius: 1rem;
    box-shadow: 0px 10px 15px -3px rgba(0,0,0,0.1);

    div {
        p {
            line-height: 2rem;
            font-size: 1.1rem;
        }
    }
`