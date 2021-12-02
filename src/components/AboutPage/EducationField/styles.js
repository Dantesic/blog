 import styled from 'styled-components'

export const Wrapper = styled.section`
    background-color: #F3F3F3;
    padding: 2em;
    color: #001A35;
    border-left: 4px solid #55C0E0;
    border-bottom: 4px solid #55C0E0;
`

export const ImgWrapper = styled.div`
    height: 10em;

    @media (max-width: 768px) {
        height: 8em;
        display: flex;

        div {
            height: 6em;
            margin: 0 auto;
        }
    }

    @media (max-width: 500px) {
        height: 7em;

        div {
            height: 5em;
        }
    }
`

export const Header = styled.section`
    display: flex;
    flex-direction: column;

    h6 {
        color: #001A35;
        font-size: 1.25rem;
    }

    span {
        margin-top: 0.5em;
        font-size: 1em;
    }

    @media (max-width: 768px) {
        h6 {
            font-size: 1.1rem;
        }

        span {
            font-size: 1.1rem;
        }
    }
`

export const Content = styled.ul`
    margin-top: 1em;
`