import styled from "styled-components";

export const LoginContainer = styled.div`
    display: flex;
    flex-direction: column;
    background-color: #009688;
    border-radius: 5px;
    text-align: center;

    .hero-login {
        display: flex;
        flex-direction: column;
        color: #fff;
        padding: 3.5rem;
        gap: 2.5rem;

        .title {
            margin-right: 3rem;
            margin-left: 2.5rem;
            color: #FFF;
            font-weight: 700;
            display: flex;
            justify-content: center;
            align-items: center;

            &:hover {
                color: #B0A4A4;
            }
        }
    }

    div {
        form {
            display: flex;
            flex-direction: column;
            gap: 1rem;
            background-color: #E0E0E0;
            
            padding: 2rem 3rem;

            .forgot-pw {
                margin-right: 12.5rem;
                color: #009688;
                font-size: 13px;
                font-weight: 700;

                &:hover {
                    text-decoration-line: underline;
                    color: #B0A4A4;
                }
            }

            input {
                
                display: flex;
                border: none;
                border-radius: 5px;

                height: 2rem;
                width: 20rem;
                padding: 0 1rem;
                
                &:focus {
                    outline: none;
                    border: 1px solid #009688;
                }
            }

            .btn {
                height: 2rem;
                background-color: #009688;
                border: 2px solid #009688;
                padding-top: 0.4rem;
                display: flex;
                justify-content: center;
                color: #fff;
                border-radius: 5px;
                font-weight: 700;
                letter-spacing: 2.5px;

                &:hover {
                    border: 2px solid #009688;
                    background-color: white;
                    color: #009688;
                }
            }
            
            .show-password-icon {
                position: absolute;
                right: 15px;
                top: 57%;
                transform: translateY(-50%);
                cursor: pointer;
                color: #777; /* Initial color */
                &:hover {
                    color: #333; /* Hover color */
                }
            }
        }
    }
`