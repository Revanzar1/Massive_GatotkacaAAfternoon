import styled from "styled-components";

export const HelpContainer = styled.div`
    display: flex;
    flex-direction: column;
    background-color: #fff;
    color: #253763;
    padding: 2rem;
    border-radius: 1rem;    

    h2 {
        text-align: center;
    }

    div {
        margin-top: 2rem;
        display: flex;
        flex-direction: column;
        gap: 1rem;
        font-size: 1.2rem;

        ul {
            display: flex;
            flex-direction: column;
            gap: 1rem;
            font-size: 1.2rem;
            }
    }
`

export const HelpContact = styled.div`
    display: flex;
    flex-direction: column;
    background-color: #fff;
    padding: 2rem;
    margin-top: 2rem;
    border-radius: 1rem;  
    color: #253763;  

    h2 {
        text-align: center;
    }

    div {

        display: flex;
        flex-direction: column;
        gap:1rem;

        span {
            display: flex;
            align-items: center;
            gap: 1rem;
            font-size: 1.2rem;
        }
    }
`