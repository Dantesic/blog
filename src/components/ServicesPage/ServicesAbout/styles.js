import styled from 'styled-components'

export const Wrapper = styled.section`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 5em 0;

    h2 {
        color: #001A35;
        font-size: 2.2em;
        text-align: center;
    }

    p {
        font-size: 1.25rem;
        color: #001A35;
        margin-top: 1em;
        text-align: center;
    }

    @media (max-width: 768px) {
        h2 {
            font-size: 1.8em;
        }

        p {
            font-size: 1.1rem;
        }

        padding: 5em 2em;
    }

    @media (max-width: 370px) {
        padding: 5em 1em;
    }
`