import styled from "styled-components";

export const SettingsContainer = styled.div`
    display: flex;
    flex-direction: column;
    gap: 5px;
    width: fit-content;

    a {
            display: flex;
            justify-content: space-between;
            align-items: center;
            padding: 12px;
            background-color: white;
            border-radius: 5px;
            color: black;
            transition: .3s;
        }

        a span {
            display: flex;
            align-items: center;
            gap: 5px;
        }
`