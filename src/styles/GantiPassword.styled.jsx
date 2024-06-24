import styled from "styled-components"

export const ResetPwContainer = styled.div`
    display: flex;
    flex-direction: column;
    gap: 1rem;
    border-left: 1px solid #ABAAAB;
    width: 800px;
    padding-left: 200px;

    input {
        height: 3rem;
        /* width: 500px; */
        border-radius: 5px;
        border: 1px solid #E2E1E5;
        padding: 0 1rem;
    }

    #reset-btn {
        background-color: #253763;
        font-weight: 600;
        color: #fff;
        font-size: 1.1rem;
        cursor: pointer;
    }
`