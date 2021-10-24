import styled from 'styled-components'

export const Wrapper = styled.section`
    margin: 5em 0;
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 6em;
    color: rgb(0, 26, 53);

    @media (max-width: 1150px) {
        gap: 4em;
    }

    /* Mobile design */
    @media (max-width: 1000px) {
        flex-direction: column;
        margin: 2em 0;
        gap: 1.6em;
    }
`

export const Text = styled.section`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start;
    align-self: flex-start;

    h3 {
        margin-top: 1em;
        font-size: 2.2em;
        margin-bottom: 2em;
        color: #001A35;
    }

    h4 {
        color: rgb(0, 26, 53);
        margin-bottom: 2em;
        font-size: 1.25rem;
    }

    p {
        font-size: 1.25rem;
    }

    @media (max-width: 1000px) {
        align-self: center;
        text-align: center;

        > * {
            align-self: center;
        }
    }

    @media (max-width: 800px) {

        h3 {
            margin-top: 1em;
            font-size: 1.8em;
            margin-bottom: 1.5em;
        }

        p {
            font-size: 1.1rem;
        }
    }
`
export const LastParagraph = styled.p`
    margin-top: 1.5em;

    a {
        color: #55C0E0;
    }

    a:hover {
        cursor: pointer;
        text-decoration: underline;
    }

    @media (max-width: 1000px) {
        margin-bottom: 1.5em;
    }
`
export const Form = styled.form`
    background-color: rgba(85, 192, 224, 0.2);
    border-radius: 0.8em;
    padding: 3em;
    display: flex;
    flex-direction: column;

    h4 {
        color: rgb(0, 26, 53);
        margin-bottom: 2em;
        text-align: center;
        font-size: 1.25rem;
    }

    input, textarea {
        border: 3px solid #55C0E0;
        box-sizing: border-box;
        border-radius: 0.8em;
        padding: 0.7rem 1rem !important;
        display: flex;
        width: 100%;
        margin-bottom: 1em;

        :focus {
            outline: 1px solid #55C0E0;
        }
    }

    input::placeholder, textarea::placeholder {
        font-style: normal;
        font-weight: normal;
        font-size: 0.9em;
    }

    @media (max-width: 800px) {
        padding: 2.5em 2em;

        h4 {
            font-size: 1.1rem;
        }
    }

    @media (max-width: 420px) {
        input, textarea {
            width: 100%;
        }

        input:first-child {
            margin-bottom: 1.2em;
        }
    }

    @media (max-width: 380px) {
        padding: 3em 1em;
    }
`

export const Button = styled.button`
    color: #FFFFFF !important;
    background: #55C0E0 !important;
    font-style: normal;
    margin: 0 auto;
    margin-top: 1.5em;
    border-radius: 0.8rem !important;
    padding: 0.7rem 1rem !important;
    width: fit-content !important;
    margin-bottom: 0 !important;
    border: none;


    :hover {
        color: #55C0E0 !important;
        background-color: #FFFFFF !important;
        cursor: pointer;
        box-shadow: 0 0 0 2px #55C0E0 inset;
    }

    @media (max-width: 768px) {
        font-size: 0.9em;
    }

    @media (max-width: 420px) {
        font-size: 0.9em !important;
        padding: 0.5em 2.2em !important;
    }
`