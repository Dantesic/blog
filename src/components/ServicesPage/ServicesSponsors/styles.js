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
        padding: 0em 1em;

        h2 {
            font-size: 1.5em;
            margin-bottom: 1.5em;
        }
    }
`
export const Sponsors = styled.section`
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 6em;

    @media (max-width: 1300px) {
        gap: 4em;
    }

    @media (max-width: 500px) {
        gap: 2em;
    }
`

export const IconWrapper = styled.div`
    width: 20em;

    @media (max-width: 1300px) {
        width: 15em;
    }

    @media (max-width: 768px) {
        width: 10em;
    }

    @media (max-width: 500px) {
        width: 8em;
    }
`