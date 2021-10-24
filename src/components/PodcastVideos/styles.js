import styled from 'styled-components'

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
        margin-bottom: 1em;
        font-weight: 600;
    }

    /* Styling button without affecting child iframe div */
    div {
        margin-top: 4em;
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

         div {
             font-size: 0.9em;
             padding: 0.9em 2.5em;
         }
    }

    @media (max-width: 768px) {
        margin: 5em 5em;

        h2 {
            font-size: 1.8em;
        }
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
    column-gap: 2.5em;
    row-gap: 5em;
    margin-top: 3em;

    @media (max-width: 900px) {
        display: flex;
        flex-direction: column;
        row-gap: 3em;
        margin-top: 2.5em;
    }
`