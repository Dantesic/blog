import styled from 'styled-components'

export const Wrapper = styled.section`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin: 7em 9.5em;
    margin-top: 5.5em;
    margin-bottom: 4em;

    h2 {
        font-size: 2.2em;
        color: #001A35;
        margin-bottom: 0.5em;
        font-weight: 600;
    }

    span {
        color: rgb(0, 26, 53);
        font-size: 1.25rem;
    }

    /* Styling button without affecting child iframe div */
    div {
        margin-top: 4em;
    }

    @media (max-width: 1400px) {
        margin: 7em 5em;
        margin-top: 5.5em;
    }

    @media (max-width: 1200px) {
        margin: 7em 3em;
        margin-top: 5.5em;
    }

    @media (max-width: 900px) {
        margin: 5em 8em;
        margin-bottom: 3em;

        h2 {
            margin-bottom: 0.3em;
        }

        div {
            margin-top: 3em;

        }
    }

    @media (max-width: 768px) {
        margin-bottom: 0;

        h2 {
            font-size: 1.5em;
        }

        span {
            font-size: 1.1rem;
        }
    }

    @media (max-width: 750px) {
        margin: 4em 5em;
        margin-bottom: 0;
    }

    @media (max-width: 600px) {
        margin: 4em 2em;
        margin-bottom: 0;
    }

    @media (max-width: 500px) {
        margin: 4em 1em;
        margin-bottom: 0;
    }
`

export const Subtitle = styled.p`
        color: rgb(0, 26, 53);
        font-size: 1.25rem;
        margin-bottom: 2.7em;

        @media (max-width: 900px) {
            margin-bottom: 3.5em;
        }

        @media (max-width: 768px) {
            font-size: 1.1rem;
            margin-bottom: 3em;
        }
`

export const Preview = styled.section`
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-gap: 2.5em;

    @media (max-width: 900px) {
        display: flex;
        flex-direction: column;
    }
`