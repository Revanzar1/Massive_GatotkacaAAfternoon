import styled from "styled-components";

export const DashboardContainer = styled.div`
    margin-top: 2rem;
`
export const CardContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    width: 1225px;
    background-color: white;
    padding: 2rem;
    gap: 1rem;
    border-radius: 1rem;
    flex-shrink: 0;
    box-shadow: 0px 10px 15px -3px rgba(0,0,0,0.1);

    .card-board {
        padding: 1rem 3rem 0.8rem 3rem;
        display: flex;
        justify-content: space-between;
    }

    .scroll {
        margin: 4.2rem -2em 0 -2rem;
        position: relative;
        z-index: 2;
        cursor: pointer;

        .sc-left, .sc-right {
            width: 50px;
            height: 50px;
            flex-shrink: 0;

            border-radius: 100%;
            display: flex;

            font-size: 50px;
            color: #253763;
            background-color: white;

            &:hover {
                border-color: #253763;
                background-color: #253763;
                color: #FFF;
                transition: 0.2s ease-in-out;
            }
        }
    }

    .card-board-img-1, .card-board-img-2, .card-board-img-3 {
        flex-shrink: 0;
        background-color: rgba(209, 207, 207, 0);
        width: fit-content;

        margin: auto;
        position: flex;
        border-radius: 0.5rem;
        vertical-align: middle;

        img {
            width: 350px;
            height: 176px;
            object-fit: contain;
            position: relative;
        }
    }
`

export const JadwalContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    width: 810px;
    background-color: #fff;
    padding: 2rem;
    gap: 1rem;
    border-radius: 1rem;
    box-shadow: 0px 10px 15px -3px rgba(0,0,0,0.1);

    .jadwal {
        width: fit-content;
        background: white;
        
        width: 750px;
        height: 250px;
        display: flex;

        flex-direction: column;
        justify-content: center;

        h1 {
            margin: 0 0 2rem 2rem;
            color: #253763;
        }

        .jadwal-details {
            align-self: flex-start;
            display: flex;
            position: left;
            gap: 4rem;
            margin: 0rem 2rem 0 2rem;
            justify-content: space-between;
            
            .mata-kuliah, .jam, .lokasi {
                display: flex;
                margin-top: 0.2rem;
                line-height: 1.5rem;
            }

            div {
                display: flex;
                flex-direction: column;
                gap: 1rem;
                font-size: 1rem;

                
                span {
                    align-self: flex-start;
                    position: flex;
                    color: #253763;
                    font-weight: bold;

                    .btn-on {
                        padding: 2.5px 1rem;
                        width: 5.5rem;

                        background-color: #253763;
                        color: #FFF;

                        border-radius: 5px;
                        border: 2px solid #253763;

                        cursor: pointer;
                        font-size: 14px;
                        font-weight: bold;
                        transition: 0.2s ease-in-out;
                        
                        &:hover{
                            border-color: #253763;
                            background-color: #FFF;
                            color: #253763;
                            transition: 0.2s ease-in-out;
                        }
                    }

                    .btn-off {
                        padding: 2.5px 1rem;
                        width: 5.5rem;

                        background-color: #FFF;
                        color: #253763;

                        border-radius: 5px;
                        border: 2px solid #253763;

                        cursor: pointer;
                        font-size: 14px;
                        font-weight: bold;
                        transition: 0.2s ease-in-out;
                        
                        &:hover{
                            border-color: #253763;
                            background-color: #253763;
                            color: #FFF;
                            transition: 0.2s ease-in-out;
                        }
                    }

                    .elses {
                        vertical-align: middle;
                        cursor: pointer;
                        fill: #253763;
                        width: 19px;
                        height: 25px;
                        flex-shrink: 0;

                        &:hover{
                            fill: #b9b9b9;
                            transition: 0.2s ease-in-out;
                        }
                    }
                }
            }
        }
    }
`