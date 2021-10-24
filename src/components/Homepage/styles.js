import styled from 'styled-components'
import { device } from '../../styles/mediaQuery'

export const Wrapper = styled.section`
    width: 100%;
    height: 100%;
    background-color: #001A35;
    display: flex;
    align-items: flex-end;
    padding-top: 3em;

    /* Mobile design */
    @media (max-width: 910px) {
        width: 100%;
        background-color: #001A35;
        display: flex;
        align-items: flex-end;
        padding-top: 0;
        height: 100%;
        flex-direction: column;
  }
`

export const SubscribeSection = styled.section`
    padding-left: 9em;
    padding-right: 2.6em;
    flex-basis: 50%;
    margin-bottom: 8em;

    @media (max-width: 1500px) {
        margin-bottom: 6em;
    }

    @media (max-width: 1400px) {
        margin-bottom: 4em;
    }

    @media (max-width: 1300px) {
        padding-left: 5em;
        margin-bottom: 2em;
    }

    @media (max-width: 1150px) {
        padding-left: 3em;
    }

    /* Mobile design */
    @media (max-width: 910px) {
        flex-basis: 50%;
        padding: 0 2em;
        padding-top: 4em;
        margin-bottom: 3em;
  }

  @media (max-width: 400px) {
        padding: 0 1em;
        padding-top: 4em;
  }
`

export const H1 = styled.h1`
    font-weight: bold;
    font-size: 3.4em;
    margin-bottom: 0.5em;

    @media (max-width: 1454px) {
        font-size: 3em;
    }

    @media (max-width: 1330px) {
        font-size: 2.8em;
    }

    @media (max-width: 1220px) {
        font-size: 2.4em;
    }

    /* Mobile design */
    @media (max-width: 910px) {
        text-align: center;
        font-size: 1.8em;
    }
`

export const H1Span = styled.span`
    color: #55C0E0;
`

export const Text = styled.p`
    font-weight: 300;
    font-size: 1.25rem;
    margin-bottom: 1.2em;

    span {
        text-transform: uppercase;
        color: #FFFFFF;
        font-weight: 600;
    }

    @media (max-width: 1000px) {
        padding-right: 1em;
    }

    /* Mobile design */
    @media (max-width: 910px) {
        text-align: center;
        padding-right: 0;
    }

    @media (max-width: 768px) {
        font-size: 1.1rem;
    }
`

export const Form = styled.form`

    /* Mobile design */
    @media (max-width: 910px) {
        display: flex;
        flex-direction: column;
        align-items: center;
        padding-bottom: 0 !important;
    }

    input {
        background: #FFFFFF;
        border: 3px solid #55C0E0;
        box-sizing: border-box;
        border-radius: 0.8em;
        padding: 0.5em 1em;
        display: flex;
        width: 17em;

        :first-child {
            margin-bottom: 1em;
        }

        ::placeholder {
            font-style: normal;
            font-weight: normal;
            font-size: 0.9em;
        }

        :focus {
            outline: 1px solid #55C0E0;
        }
    }

    @media (max-width: 768px) {
        input {
            width: 14em;
        }
    }
`

export const Button = styled.button`
    color: #FFFFFF !important;
    background: #55C0E0 !important;
    margin-top: 2em;
    border-radius: 0.8rem !important;
    padding: 0.7rem 1rem !important;
    width: fit-content !important;
    border: none;

    :hover {
        color: #55C0E0 !important;
        background-color: #FFFFFF !important;
        cursor: pointer;
    }
`

export const ImageSection = styled.section`
    position: relative;
    width: 100%;
    height: 100%;
    flex-basis: 50%;
    overflow: hidden;
    align-self: flex-start;

    /* Mobile design */
    @media (max-width: 910px) {
        flex-basis: 50%;
        padding-left: 7em;
        padding-top: 1em;
    }

    @media ${device.mobileL} {
        padding-top: 0;
        padding-left: 3em;
    }
`