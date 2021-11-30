import styled from 'styled-components'
import { device } from '../../styles/mediaQuery'

export const Wrapper = styled.section`
    background-color: #EDEDED;
    width: 100%;
    height: 70vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    h1 {
        color: #001A35;
        font-size: 3em;
        font-weight: 800;
    }

    p {
        color: #001A35;
        font-size: 1.25rem;
        text-align: center;
        margin: 2em 16em;

        span {
            font-weight: 600;
        }
    }

    @media (max-width: 1300px) {
            p {
                margin: 2em 12em;
            }
        }

    @media (max-width: 1150px) {
            p {
                margin: 2em 8em;
            }
        }

    @media (max-width: 1150px) {
            p {
                margin: 2em 5em;
            }
        }

    @media ${device.tablet} {
        height: 100%;
        padding: 0 5em;
        text-align: center;

        h1 {
            margin-top: 2em;
            margin-bottom: 1em;
            font-size: 2.8em;
        }

        p {
            margin: 0;
        }
    }

    @media (max-width: 768px) {
        p {
            font-size: 1.1rem;
        }
    }

    @media (max-width: 600px) {
        h1 {
            font-size: 1.8em;
            margin-top: 1.5em;
        }
    }

    @media (max-width: 550px) {
        padding: 0 3em;
    }

    @media ${device.mobileL} {
        padding: 0 1.5em;
    }
`
export const Buttons = styled.section`
    display: flex;

    div:first-child {
        color: #55C0E0;
        background-color: #FFFFFF;
        box-shadow: 0 0 0 2px #55C0E0 inset;
        margin-right: 1em;

        :hover {
            background-color: #55C0E0;
            color: #FFFFFF;
            
            a {
                color: #FFFFFF;
            }
        }
    }

    a {
        color: #55C0E0;
    }

    div:last-child a {
        color: #FFFFFF !important;
    }

    div:last-child:hover {
        a {
            color: #55C0E0 !important;
        }
    }

    @media ${device.tablet} {
        flex-direction: column;
        margin-top: 4em;
        font-size: 1em;

        div {
            width: 10em;
            padding: 0.8em 0.5em;
        }

        div:first-child {
            margin-bottom: 1em;
            margin-right: 0;
        }

        div:last-child {
            margin-bottom: 5em;
        }
    }

    @media (max-width: 600px) {
        margin-top: 3em;

        div:last-child {
            margin-bottom: 4em;
        }
    }
`