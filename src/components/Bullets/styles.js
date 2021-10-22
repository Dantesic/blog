import styled from 'styled-components'
import { device } from '../../styles/mediaQuery'

export const Wrapper = styled.section`
    background-color: #EDEDED;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 1em 6rem;

    @media (max-width: 1350px) {
        padding: 0 3rem;
    }

    @media (max-width: 1200px) {
        padding: 0;
    }

    @media (max-width: 1050px) {
        flex-direction: column;
        height: 100%;
        padding: 5em 2em;
        padding-bottom: 1em;
    }

    @media (max-width: 768px) {
        font-size: 0.8em;
        padding-top: 3em;
    }

    @media (max-width: 600px) {
        /* font-size: 0.7em; */
    }
`

export const Bullet = styled.section`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    color: #55C0E0;
    flex-basis: 33%;
    padding-top: 1.3em;

    h3 {
        color: #001A35;
        font-size: 1.6em;
        font-weight: 600;
        margin-top: 1.2em;
        margin-bottom: 1em;
        text-align: center;
    }
    
    p {
        text-align: center;
        color: #1F374E;
        font-size: 1.4em;
        padding: 0 3em;
        flex-grow: 1;
        line-height: 1.3em;
        min-height: 5.2em;
    }

    @media (max-width: 1050px) {
        p {
            padding: 0 8em;
        }
    }

    @media (max-width: 800px) {
        p {
            padding: 0 5em;
        }
    }

    @media (max-width: 600px) {
        p {
            padding: 0 2em;
        }
    }

    @media ${device.mobileL} {
        h3 {
            font-size: 1.7em;
        }

        p {
            font-size: 1.1em;
            padding: 0;
            margin-bottom: 1em;
        }
    }
`
export const IconWrapper = styled.div`
    background-color: transparent;

    * {
        color: #001A35;
        width: 8em;
    }
`