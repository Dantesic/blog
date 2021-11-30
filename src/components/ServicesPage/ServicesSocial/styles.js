import styled from 'styled-components'

export const Wrapper = styled.section`
    background-color: #001A35;
    width: 100vw;
    max-width: 100%;
    overflow: hidden;
    display: flex;
    justify-content: center;
    align-items: center;
    column-gap: 1.5em;
    padding: 2em 0;

    h2 {
        color: #FFFFFF;
        grid-area: title;
        font-size: 1.5em;
        text-align: center;
    }

    @media (max-width: 600px) {
        display: grid;
        grid-template-areas: 
        "title title title title"
        "linkedin youtube twitter instagram";
        column-gap: 0.5em;
        padding: 2em 1em;

        h2 {
            grid-area: title;
            text-align: center;
            margin-bottom: 1em;
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
    justify-self: center;
    font-size: 1em;
    transition: 500ms;

    :hover {
        transform: scale(1.1);
    }

    * {
        justify-self: center;
        color: #001A35;
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
    justify-self: center;
    font-size: 1em;
    transition: 500ms;

    :hover {
        transform: scale(1.1);
    }

    * {
        justify-self: center;
        color: #001A35;
    }
`
export const Twitter = styled.div`
    grid-area: twitter;
    background-color: #55C0E0;
    width: 2.8em;
    height: 2.8em;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    justify-self: center;
    font-size: 1em;
    transition: 500ms;

    :hover {
        transform: scale(1.1);
    }

    * {
        justify-self: center;
        color: #001A35;
    }
`

export const Instagram = styled.div`
    grid-area: instagram;
    background-color: #55C0E0;
    width: 2.8em;
    height: 2.8em;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    justify-self: center;
    font-size: 1em;
    transition: 500ms;

    :hover {
        transform: scale(1.1);
    }

    * {
        justify-self: center;
        color: #001A35;
    }
`