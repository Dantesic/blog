import styled from 'styled-components'

export const Wrapper = styled.section`
    margin: 5em 0;

    h2 {
        font-size: 2.2em;
        color: #001A35;
        text-align: center;
        margin-bottom: 1em;
    }

    @media (max-width: 768px) {
        margin: 3.5em 0;

        h2 {
            font-size: 1.5rem;
            padding: 0 1em;
        }

    }
`