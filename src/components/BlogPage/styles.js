import styled from 'styled-components'

export const NavigationDiv = styled.div`
    height: 9em;
    background-color: #001A35;

    @media (max-width: 1023px) {
        height: 0.5em;
    }
`

export const Wrapper = styled.section`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin: 5em 9.5em;
    margin-bottom: 4em;

    h2 {
        font-size: 2.2em;
        color: #001A35;
        margin-bottom: 2em;
        font-weight: 600;
    }

    p {
        text-align: center;
        color: rgb(0, 26, 53);
        font-size: 1.25rem;
        width: 50%;
        margin: 0 auto;
        margin-bottom: 1.5em;
    }

    /* Styling button without affecting child iframe div */
    div {
        margin-top: 4em;
        padding: 0.7rem 2rem;
    }

    @media (max-width: 1400px) {
        margin: 7em 5em;
    }

    @media (max-width: 1200px) {
        margin: 7em 3em;
    }

    @media (max-width: 1100px) {
        p {
            width: 65%;
        }
    }

    @media (max-width: 900px) {
        margin: 5em 8em;
        margin-bottom: 3em;

        p {
            width: 100%;
            margin-bottom: 3em;
        }

        div {
            font-size: 0.9em;
            padding: 0.9em 2.5em;
            margin-top: 3em;

        }
    }

    @media (max-width: 768px) {
        margin: 4em 5em;

        h2 {
            font-size: 1.5em;
            margin-bottom: 1.5em;
        }

        p {
            margin-bottom: 2em;
            font-size: 1.1rem;
        }
    }

    @media (max-width: 600px) {
        margin: 4em 2em;
    }

    @media (max-width: 500px) {
        margin: 4em 1em;
    }
`
export const Preview = styled.section`
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    column-gap: 2.5em;
    row-gap: 5em;
    margin-top: 4em;

    @media (max-width: 900px) {
        display: flex;
        flex-direction: column;
        row-gap: 3em;
        margin-top: 2.5em;
    }
`