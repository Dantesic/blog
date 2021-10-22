import styled from 'styled-components'

export const Wrapper = styled.section`
    background-color: #F3F3F3;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 5em 0;

    h2 {
        color: rgb(0, 26, 53);
        align-self: center;
        font-size: 2.2em;
    }

    @media (max-width: 768px) {
        padding: 4em 0;

        h2 {
            font-size: 2em;
        }
    }
`

export const Sponsors = styled.section`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 80%;
    column-gap: 7em;
    margin: 5em 0;
    margin-top: 2.5em;

    > * {
        width: 17em;
    }

    @media (max-width: 900px) {
        column-gap: 2em;
    }

    @media (max-width: 768px) {
        width: 95%;
        column-gap: 1em;
        margin: 3.5em 0;
        margin-top: 2.5em;
    }

    @media (max-width: 420px) {
        flex-direction: column;
        row-gap: 3.5em;
        font-size: 0.9em;
    }
`

export const Social = styled.section`
    background-color: #001A35;
    width: 100vw;
    max-width: 100%;
    overflow: hidden;
    display: flex;
    justify-content: center;
    align-items: center;
    column-gap: 1em;
    padding: 2em 0;

    h2 {
        color: #FFFFFF;
        grid-area: title;
        font-size: 1.5em;
        text-align: center;
    }

    @media (max-width: 768px) {
        display: grid;
        row-gap: 1.75em;
        grid-template-areas:
        "title title"
        "linkedin youtube";

        h2 {
            padding: 0 1em;
        }
    }
`

export const Linkedin = styled.div`
    grid-area: linkedin;
    background-color: #55C0E0;
    width: 2.8em;
    height: 2.8em;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 1.2em;
    transition: 500ms;

    :hover {
        transform: scale(1.1);
    }

    * {
        justify-self: center;
        color: #001A35;
    }

    @media (max-width: 768px) {
        justify-self: flex-end;
    }
`

export const Youtube = styled.div`
    grid-area: youtube;
    background-color: #55C0E0;
    width: 2.8em;
    height: 2.8em;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 1.2em;
    transition: 500ms;

    :hover {
        transform: scale(1.1);
    }

    * {
        justify-self: center;
        color: #001A35;
    }
`

export const Contact = styled.section`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    h2 {
        margin: 2em 0;
        margin-bottom: 1em;
        text-align: center;
    }

    @media (max-width: 768px) {
        h2 {
            padding: 0 1em;
            margin-top: 2.5em;
            margin-bottom: 1em;
        }
    }
`
export const Button = styled.button`
    color: #55C0E0 !important;
    background: #FFFFFF !important;
    border: none !important;
    border: 2px solid #55C0E0 !important;
    font-style: normal;
    font-weight: 500;
    margin-top: 1.2em;
    border-radius: 0.8rem !important;
    padding: 0.7rem 1rem !important;
    width: fit-content !important;
    display: block !important;

    a {
        color: #55C0E0;
    }

    :hover {
        background-color: #55C0E0 !important;
        cursor: pointer;

        a {
            color: #FFFFFF !important;
        }  
    }

    /* Mobile design */
    @media (max-width: 910px) {
        font-weight: 700;
        padding: 0.4em 1.3em !important;
    }
`