import styled from 'styled-components'

export const Wrapper = styled.section`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin: 7em 9.5em;
    margin-bottom: 4em;

    h2 {
        font-size: 2.2em;
        color: #001A35;
        margin-bottom: 0.9em;
        font-weight: 600;
    }

    p {
        color: rgb(0, 26, 53);
        font-size: 1.15em;
        margin-bottom: 2.7em;
    }

    span {
        color: rgb(0, 26, 53);
        font-size: 1.15em;
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

    @media (max-width: 900px) {
        margin: 5em 8em;
        margin-bottom: 3em;

        h2 {
            font-size: 1.5em;
            margin-bottom: 0.3em;
        }

        p {
            font-size: 1em;
            margin-bottom: 5em;
        }

         div {
             font-size: 0.95em;
             padding: 0.9em 2.5em;
             margin-top: 3em;

         }
    }

    @media (max-width: 768px) {
        h2 {
            font-size: 2em;
        }
    }

    @media (max-width: 750px) {
        margin: 5em 5em;
    }

    @media (max-width: 600px) {
        margin: 5em 2em;
    }

    @media (max-width: 500px) {
        margin: 5em 1em;
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