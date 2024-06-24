import styled from "styled-components";

export const MataKuliahContainer = styled.div`
    display: flex;
    flex-direction: column;
    padding: 1rem;
    margin-top: 1rem;
    background: #fff;
    border-radius: 1rem;

    section {
        display: flex;
        justify-content: space-between;
        padding-bottom: 10px;
    }

    table {
        width: 1130px;
        border-collapse: collapse;
        margin: 1rem 0rem 2rem 2rem;
        border-left: none;
        border-right: none;

        tr {

            th{
                padding: 1.5rem
            }

            .nomor {
                text-align: center;
            }
            
            .nama, .nim, .status {
                text-align: left;
                padding: 1rem 3rem 1rem 1rem;
            }

            .nama {
                padding-right: 15rem;
            }

            .status {
                padding-left: 5rem;
            }

            th, td {
                border-top: 2px solid #E1E1E1;
                border-bottom: 2px solid #E1E1E1;
                border-left: none;
                border-right: none;
            }

            th:first-child, td:first-child {
                border-left: none;
            }

            th:last-child, td:last-child {
                border-right: none;
            }
        }
    }
`

export const StudentCount = styled.div`
    color: #253763;
    font-size: 1.05rem;
    margin-top: 1rem; /* Adjust the margin as needed to place it correctly below the button */
    padding-left: 2rem;
`

export const ButtonSubmit = styled.button`
    width: 100px;
    height: 50px;
    border: none;
    background-color: #253763;
    transition: 0.3s;
    font-size: 1.1rem;
    color: white;
    cursor: pointer;
    border-radius: 5px;

    &.del {
        background-color: red;

        &:hover {
            background-color: darkred;
        }
    }

    &.new {
        &:hover {
            background-color: #02675d;
        }
    }
`
export const ButtonContainer = styled.div`
    display: flex;
    justify-content: space-between;
    margin: 0rem 2rem;
`

export const ProfileContainer = styled.div`
    display: flex;
    flex-direction: column;
    padding: 2rem;
    background-color: #fff;
    width: 820px;
    border-radius: 1rem;

    .details span {
        width: 200px;
        color: #253763;
        font-weight: 600;
        font-size: 28px;
    }

    .isi-details {
        input {
            height: 2rem;
            width: 800px;
            background-color: #F3F3F3;
            border-radius: 5px;
            border: none;
            outline: none;
        }
    }
`
