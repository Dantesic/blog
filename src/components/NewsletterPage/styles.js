import styled from 'styled-components'

export const Wrapper = styled.section`
    background-color: #FFFFFF;
    color: #001A35;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding-bottom: 2em;
    line-height: 1.2;

    h2 {
        color: #001A35;
        font-size: 2.2em;
        margin-top: 1.5em;
        margin-bottom: 1em;
        text-align: center;
        font-weight: normal;
    }

    span {
        color: #001A35;
        font-weight: 700;
    }

    p {
        margin-bottom: 2em;
        width: 30%;
        text-align: center;
    }

    @media (max-width: 1300px) {
        p {
            width: 40%;
        }
    }

    @media (max-width: 1000px) {
        p {
            width: 50%;
        }
    }

    @media (max-width: 768px) {
        h2 {
            font-size: 2em;
            padding: 0 3em;
            margin-bottom: 1.2em;
        }

        p {
            width: 60%;
        }
    }

    @media (max-width: 600px) {
        h2 {
            padding: 0 2em;
        }

        p {
            width: 80%;
        }
    }

    @media (max-width: 500px) {
        h2 {
            padding: 0 1em;
        }

        p {
            width: 80%;
        }
    }

    @media (max-width: 400px) {
        h2 {
            padding: 0.2em;
        }

        p {
            width: 90%;
        }
    }
`

export const Form = styled.form`
    display: flex;
    flex-direction: column;

    label {
        display: flex;
        flex-direction: column;
        gap: 0.5em;
        text-align: center;
    }

    input {
        border: 3px solid #55C0E0;
        box-sizing: border-box;
        border-radius: 0.8em;
        padding: 0.5em 1em;
        display: flex;
        width: 70%;
        margin: 0 auto;
        margin-bottom: 1em;
    }

    input::placeholder {
        font-style: normal;
        font-weight: normal;
        font-size: 0.9em;
    }

    @media (max-width: 800px) {
        padding-top: 1em;
    }

    @media (max-width: 420px) {
        input {
            width: 15em;
        }

        input:first-child {
            margin-bottom: 1.2em;
        }
    }
`

export const Button = styled.input`
    color: #FFFFFF !important;
    background: #55C0E0 !important;
    font-style: normal;
    font-weight: 500;
    margin: 0 auto;
    margin-top: 1.5em !important;
    border-radius: 0.8rem !important;
    padding: 0.7rem 1rem !important;
    width: fit-content !important;


    :hover {
        color: #55C0E0 !important;
        background-color: #FFFFFF !important;
        cursor: pointer;
        box-shadow: 0 0 0 1px #55C0E0 inset;
    }
`