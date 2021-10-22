import styled from 'styled-components'

export const Wrapper = styled.section`
    background-color: #F3F3F3;
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 6em 2em;
    gap: 5em;

    p {
        color: #001A35;
        font-size: 1.3em;
        text-align: center;
    }

    @media (max-width: 768px) {
        font-size: 0.9em;
        padding: 4.5em 2em;
        gap: 3em;
    }

    @media (max-width: 420px) {
        padding: 6em 1em;
    }
`