import styled from "styled-components";

export const HomeContainer = styled.div`
    position: absolute;
    height: 100vh;
    width: 100vw;
    z-index: 1000;
    display: flex;
    justify-content: center;
    align-items: center;
    opacity: 9;
`

export const HomeLogin = styled.div`
    display: flex;
    padding: 1rem;
    background-color: #eeeeee3c;
    border-radius: 10px;
`

export const HomeLoginContainer = styled.div`
    display: flex;
    background-color: #E0E0E0;
    padding: 1rem;
    border-radius: 10px;
    text-align: center;
    color: #fff;

    div {
        display: flex-end;
        padding: 2rem;
        border-radius: 10px;
        background-color: #009688;

        .judul {
            padding: 1rem 0 0 0;
            display: flex;
            flex-direction: grid;
            margin: auto;
            align-items: center;
            
            .logo {
                margin: -0.8rem -3rem 0 3rem;
            }

            .globe {
                margin-right: 3rem;
                background: none;
                font-size: 55px;
                color: white;
            }
        }

        .login {
            .desc{
                font-weight: 550;
            }

            a {
                background-color: #fff;
                border: 2px solid white;
                border-radius: 10px;

                height: 2.5rem;
                width: 8rem;
                display: flex;
                margin: -1rem 0 -1rem 5.2rem;

                justify-content: center;
                align-items: center;
                font-weight: 700;
                color: #009688;

                &:hover {
                    border: 2px solid white;
                    background-color: #009688;
                    color: white;
                }
            }
        }
    }
`