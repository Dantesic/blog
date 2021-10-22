import styled from 'styled-components'

export const Wrapper = styled.section`
    display: grid;
    grid-template-areas:
    "background background"
    "left right";
    color: rgb(0, 26, 53);
    margin-bottom: 7em;
    column-gap: 5em;

    h2 {
        color: #001A35;
        margin-bottom: 1em;
    }

    @media (max-width: 1200px) {
        margin-bottom: 4em;
    }

    @media (max-width: 1100px) {
        column-gap: 0;
        grid-template-areas:
        "background"
        "left"
        "right";

        h2 {
            text-align: center;
            margin-bottom: 2em;
        }
    }

    @media (max-width: 768px) {
        margin-bottom: 2.5em;
    }
`

export const ImgWrapper = styled.div`
    height: 43em;
    width: 100%;
    grid-area: background;
    margin-bottom: 8.5em;
    overflow: hidden;

    @media (max-width: 1200px) {
        height: auto;
        margin-bottom: 5em;
    }

    @media (max-width: 550px) {
        margin-bottom: 3em;
    }
`

export const ContentLeft = styled.section`
    grid-area: left;
    margin-left: 9em;

    @media (max-width: 1300px) {
        margin-left: 5em;
    }

    @media (max-width: 1100px) {
        width: 60%;
        margin: 0 auto;
    }

    @media (max-width: 768px) {
        width: 80%;
        margin: 0 auto;

        h2 {
            margin-top: 1.5em;
            margin-bottom: 1.5em;
        }
    }

    @media (max-width: 550px) {
        width: 85%;
    }
`

export const ContentRight = styled.section`
    grid-area: right;
    margin-right: 9em;

    @media (max-width: 1300px) {
        margin-right: 5em;
    }

    @media (max-width: 1100px) {
        width: 60%;
        margin: 0 auto;
    }

    @media (max-width: 768px) {
        width: 80%;
        margin: 0 auto;
    }

    @media (max-width: 550px) {
        width: 85%;
    }
`

export const Title = styled.div`
    display: flex;
    align-items: center;

    span {
        margin-bottom: 1.3em;
    }

    @media (max-width: 1100px) {
        margin: 0 auto;
        justify-content: center;

        span {
            margin-bottom: 2.7em;
        }
    }

    @media (max-width: 768px) {
        h2 {
            margin-top: 0.5em;
        }

        span {
            margin-bottom: 1em;
        }
    }

    @media (max-width: 550px) {
        flex-direction: column;

        h2 {
            margin-bottom: 0.3em;
        }

        span {
            margin-bottom: 2em;
        }
    }
`

