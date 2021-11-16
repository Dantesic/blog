import styled from 'styled-components'

export const Wrapper = styled.footer`
    background: #001A35;
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-template-areas:
    "arrow arrow arrow"
    "nav nav nav"
    "logo form social";
    justify-content: space-between;
    align-items: center;
    row-gap: 2em;

    @media (max-width: 850px) {
        padding: 0em 8em;
        padding-bottom: 3em;
        grid-template-columns: none;
        height: 100%;
        grid-template-areas:
        "arrow arrow"
        "nav nav"
        "form form"
        "logo social";
    }

    @media (max-width: 730px) {
        padding: 0 5em;
        padding-bottom: 3em;
    }

    @media (max-width: 600px) {
        padding: 0 3em;
        padding-bottom: 3em;
    }

    @media (max-width: 500px) {
        padding: 0 2em;
        padding-bottom: 3em;
    }

    @media (max-width: 450px) {   
        padding: 0em 1.5em;
        padding-bottom: 3em;
    }

    @media (max-width: 380px) {
        padding: 0;
        padding-bottom: 3em;
        grid-template-columns: 1fr;
        grid-template-areas:
        "arrow"
        "nav"
        "form"
        "logo"
        "social";
    }
`
export const ArrowSVG = styled.div`
    grid-area: arrow;
    justify-self: center;
    align-self: flex-end;
    margin-top: 2em;
    width: 5em;

    @media (max-width: 600px) {
        width: 4em;
    }
`

export const Navbar = styled.nav`
    grid-area: nav;
    justify-self: center;
    display: flex;
    align-items: center;

    a {
        color: #FFFFFF;
        margin-left: 1em;
        padding: 0 0.6em;
        padding-bottom: 0.1em;
        border-bottom: 3px solid transparent;
    }

    a:hover {
        border-bottom: 3px solid #55C0E0;
    }

    a:last-child {
        margin-left: 0;
        font-size: 1rem;
        padding: 0;
        border: none;
    }

    @media (max-width: 850px) {
        display: grid;
        grid-template-areas:
        "home about blog"
        "portfolio media contact"
        "button button button";
        row-gap: 2em;

        a {
            margin-left: 0;
            padding: 0 0.6em;
        }

        a:first-child {
            grid-area: home;
            justify-self: flex-end;
        }

        a:nth-child(2) {
            grid-area: about;
        }

        a:nth-child(3) {
            grid-area: blog;
        }

        a:nth-child(4) {
            grid-area: portfolio;
        }

        a:nth-child(5) {
            grid-area: media;
        }

        a:nth-child(6) {
            grid-area: contact;
        }
  }
`
export const ButtonLink = styled.div`
    background: #55C0E0;
    border-radius: 0.8rem !important;
    padding: 0.7rem 1rem !important;
    margin-left: 1em;

    :hover {
        background-color: #FFFFFF;
        cursor: pointer;

        a {
            border-bottom: none;
            color: #55C0E0;
        }
    }

    @media (max-width: 850px) {
        grid-area: button;
        text-align: center;
        width: max-content;
        justify-self: center;
        font-size: 1.1em;
    }
`
export const AntesicSVG = styled.div`
    grid-area: logo;
    justify-self: center;
    align-self: flex-start;

    @media (max-width: 850px) {
        font-size: 0.7em;
    }

    @media (max-width: 380px) {
        margin-bottom: 0.5em;
    }
`

export const Form = styled.form`
    grid-area: form;
    justify-self: center;
    align-self: flex-start;
    display: flex;
    flex-direction: column;

    h4 {
        font-size: 1.6em;
        margin-bottom: 1.25em;
        text-align: center;
        font-weight: 500;
    }

    input {
        background: #FFFFFF;
        border: 3px solid #55C0E0;
        box-sizing: border-box;
        border-radius: 0.8em;
        padding: 0.7rem 1rem !important;
        display: flex;
        width: 16em;
        margin-bottom: 1em;

        :focus {
            outline: 1px solid #55C0E0;
        }
    }

    input::placeholder {
        font-style: normal;
        font-weight: normal;
        font-size: 0.9em;
    }

    @media (max-width: 850px) {
        h4 {
            font-size: 1.8em;
        }

        input {
            width: 18em;
            margin-bottom: 1.5em;
        }
    }

    @media (max-width: 380px) {
        margin-bottom: 0 !important;
    }
`

export const FormButton = styled.button`
    color: #FFFFFF !important;
    background: #55C0E0 !important;
    margin: 0 auto;
    margin-top: 1em;
    border-radius: 0.8rem !important;
    padding: 0.7rem 1rem !important;
    width: fit-content !important;
    border: none;
    margin-bottom: 1em;

    :hover {
        color: #55C0E0 !important;
        background-color: #FFFFFF !important;
        cursor: pointer;
    }

    @media (max-width: 380px) {
        margin-bottom: 0 !important;
    }
`

export const Social = styled.section`
    grid-area: social;
    justify-self: center;
    align-self: flex-start;
    color: #FFFFFF;
`

export const SocialMedia = styled.section`
    margin-bottom: 2em;
    display: grid;
    grid-template-areas:
    "title title"
    "linkedin youtube";
    
    h6 {
        grid-area: title;
        margin-bottom: 2em;
        font-size: 1em;
    }

    @media (max-width: 850px) {
        align-items: center;
        grid-template-areas:
        "title linkedin youtube";
        column-gap: 1em;

        h6 {
            margin-bottom: 0;
        }
    }
`

export const Linkedin = styled.div`
    grid-area: linkedin;
    background-color: #FFFFFF;
    width: 2.8em;
    height: 2.8em;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    transition: 500ms;

    * {
        justify-self: center;
        color: #001A35;
    }

    :hover {
        transform: scale(1.2);
    }

    @media (max-width: 850px) {
        font-size: 0.9em;
    }
`

export const Youtube = styled.div`
    grid-area: youtube;
    background-color: #FFFFFF;
    width: 2.8em;
    height: 2.8em;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-right: 2em;
    transition: 500ms;

    * {
        justify-self: center;
        color: #001A35;
    }

    :hover {
        transform: scale(1.2);
    }

    @media (max-width: 850px) {
        font-size: 0.9em;
    }
`

export const Email = styled.section`

    h6 {
        font-size: 1em;
        margin-bottom: 1.3em;
    }

    a {
        color: #FFFFFF;
    }

    a:hover {
        text-decoration: underline;
    }

    @media (max-width: 850px) {
        h6 {
            margin-bottom: 0.5em;
        }
    }
`