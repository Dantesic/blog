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
        margin-top: 2.5em;
        margin-bottom: 1em;
        text-align: center;
        font-weight: normal;
    }

    span {
        color: #001A35;
        font-weight: bold;
    }

    p {
        margin-bottom: 2em;
        font-size: 1.25rem;
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
            font-size: 1.5em;
            padding: 0.5em 3em;
            margin-bottom: 1.2em;
        }

        p {
            font-size: 1.1rem;
            width: 60%;
        }
    }

    @media (max-width: 600px) {
        h2 {
            padding: 0.5em 2em;
        }

        p {
            width: 80%;
        }
    }

    @media (max-width: 500px) {
        h2 {
            padding: 0.5em 1em;
        }

        p {
            width: 80%;
        }
    }

    @media (max-width: 400px) {
        padding-left: 0.5em;
        padding-right: 0.5em;

        h2 {
            padding: 0.5em 0.2em;
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
        font-size: 1.25rem;
    }

    input {
        border: 3px solid #55C0E0;
        box-sizing: border-box;
        border-radius: 0.8em;
        padding: 0.7rem 1rem !important;
        display: flex;
        width: 70%;
        margin: 1em auto;
        margin-bottom: 1em;
        font-size: 1rem;

        :focus {
            outline: 1px solid #55C0E0;
        }
    }

    input::placeholder {
        font-style: normal;
        font-weight: normal;
        font-size: 0.9em;
    }

    @media (max-width: 800px) {
        padding-top: 1em;

        input {
            width: 16em;
        }
        
        label {
            font-size: 1.1rem;
        }
    }

    @media (max-width: 420px) {
        input:first-child {
            margin-bottom: 1.2em;
        }
    }
`

export const Button = styled.button`
    color: #FFFFFF !important;
    background: #55C0E0 !important;
    margin: 0 auto;
    margin-top: 0.75em !important;
    border-radius: 0.8rem !important;
    padding: 0.7rem 1rem !important;
    width: fit-content !important;
    border: none;


    :hover {
        color: #55C0E0 !important;
        background-color: #FFFFFF !important;
        cursor: pointer;
        box-shadow: 0 0 0 2px #55C0E0 inset;
    }
`