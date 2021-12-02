import styled from 'styled-components'

export const Wrapper = styled.section`
    background-color: #FFFFFF;
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    align-items: center;
    margin-top: 8em;

    h1 {
        color: #001A35;
        font-size: 2.2em;
        font-weight: 300;
        padding: 0 11em;
        margin-bottom: 3.2em;
        text-align: center;
    }

    @media (max-width: 1400px) {
        h1 {
            padding: 0 8em;
        }
    }

    @media (max-width: 1100px) {
        h1 {
            padding: 0 5em;
        }
    }

    @media (max-width: 870px) {
        h1 {
            font-size: 1.5em;
            padding: 0 3em;
        }
    }

    @media (max-width: 680px) {
        h1 {
            padding: 0 2em;
        }
    }

    @media (max-width: 600px) {
        h1 {
            padding: 0 1em;
        }
    }

    @media (max-width: 550px) {
        height: 100%;
        padding: 0 1em;
        margin-top: 0;

        h1 {
            padding: 0 1.2em;
            margin-top: 3.5em;
        }
    }
`
export const NewsletterWrapper = styled.section`
    background-color: #001A35;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 4em 5em;
    padding-bottom: 3em;
    border-radius: 2em;
    width: 80vw;

    h2 {
        font-weight: 700;
        font-size: 2.2em;
        margin-bottom: 0.5em;
    }

    p {
        font-size: 1.25rem;
        margin-bottom: 1.5em;
        text-align: center;
    }

    @media (max-width: 768px) {
        padding: 2em 1.5em;
        padding-bottom: 1em;
        border-radius: 1em;

        h2 {
            font-size: 1.5em;
            padding: 0.5em 0;
        }

        p {
            font-size: 1.1rem;
        }
    }

    @media (max-width: 550px) {
        width: 100%;
        
        h2 {
            margin-bottom: 0.75em;
        }

        p {
            margin-bottom: 1.9em;
        }
    }
`
export const Form = styled.form`
    display: flex;
    flex-direction: column;

    input {
        background: #FFFFFF;
        border: 3px solid #55C0E0;
        box-sizing: border-box;
        border-radius: 0.8em;
        padding: 0.5em 1em;
        display: flex;
        width: 16em;

        :focus {
            outline: 1px solid #55C0E0;
        }
    }

    input::placeholder {
        font-style: normal;
        font-weight: normal;
        font-size: 0.9em;
    }
`

export const Button = styled.button`
    color: #FFFFFF !important;
    background: #55C0E0 !important;
    border-radius: 0.8rem !important;
    padding: 0.7rem 1rem !important;
    margin: 0 auto;
    margin-top: 1.75em;
    width: fit-content !important;
    border: none;
    justify-self: center;

    :hover {
        color: #55C0E0 !important;
        background-color: #FFFFFF !important;
        cursor: pointer;
    }
`