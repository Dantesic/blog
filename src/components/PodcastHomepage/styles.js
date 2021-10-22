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
    margin-bottom: 7em;

    @media (max-width: 1500px) {
        margin-bottom: 5em;
    }

    @media (max-width: 1420px) {
        margin-bottom: 3em;
    }

    @media (max-width: 1350px) {
        margin-bottom: 1.5em;
    }

    @media (max-width: 1300px) {
        padding-left: 5em;
    }

    @media (max-width: 1150px) {
        padding-left: 3em;
        font-size: 0.9em;
    }

    /* Mobile design */
    @media (max-width: 910px) {
        padding-left: 9em;
        padding-right: 2.6em;
        flex-basis: 50%;
        padding: 0 3em;
        padding-top: 4em;
        font-size: 0.75em;
        margin-bottom: 3em;
  }
`
export const FormShortcut = styled.section`
    color: #FFFFFF;
    display: flex;
    flex-direction: column;
    justify-content: center;
    margin-bottom: 4em;

    @media (max-width: 1500px) {
        margin-bottom: 3em;
    }

    @media (max-width: 1350px) {
        margin-bottom: 2.5em;
    }

    /* Mobile design */
    @media (max-width: 910px) {
        align-items: center;
        margin-bottom: 3em;

        p {
            font-size: 1.1em;
        }
    }
`

export const H1 = styled.h1`
    font-weight: bold;
    font-size: 2.8em;
    margin-bottom: 0.5em;

    @media (max-width: 1454px) {
        font-size: 2.5em;
    }

    /* Mobile design */
    @media (max-width: 910px) {
        text-align: center;
        font-size: 2.5em;
    }

    @media ${device.mobileL} {
        font-size: 2.7em;
    }
`

export const Text = styled.p`
    font-weight: 300;
    font-size: 1.1em;
    margin-bottom: 1.5em;
    width: 80%;

    @media (max-width: 1000px) {
        padding-right: 1em;
    }

    /* Mobile design */
    @media (max-width: 910px) {
        text-align: center;
        padding-right: 0;
        margin: 0 auto;
        margin-bottom: 1.5em;
    }

    /* Mobile design */
    @media (max-width: 910px) {
        width: 100%;
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

        /* Mobile design */
        @media (max-width: 910px) {
            padding: 0.5em 0.7em;
            font-size: 1.5em;
            width: 12em;
        }

        @media ${device.mobileL} {
            padding: 0.5em 0.7em;
            font-size: 1.5em;
            width: 12em;
        }
    }

    input:first-child {
        margin-bottom: 1em;
    }

    input::placeholder {
        font-style: normal;
        font-weight: normal;
        font-size: 0.85em;
    }
`

export const Button = styled.input`
    color: #FFFFFF !important;
    background: #55C0E0 !important;
    font-style: normal;
    font-weight: 500;
    margin-top: 2em;
    border-radius: 0.8rem !important;
    padding: 0.7rem 1rem !important;
    width: fit-content !important;
    display: block !important;

    :hover {
        color: #55C0E0 !important;
        background-color: #FFFFFF !important;
        cursor: pointer;
        box-shadow: 0 0 0 1px #55C0E0 inset;
    }

    /* Mobile design */
    @media (max-width: 910px) {
        font-weight: 700;
        padding: 0.3em 1.3em !important;
    }

    @media ${device.mobileL} {
        /* font-weight: 700;
        padding: 0.3em 1.3em !important; */
    }
`

export const FormButton = styled.button`
    color: #55C0E0 !important;
    background: transparent !important;
    border: 2px solid #55C0E0 !important;
    font-style: normal;
    font-weight: 500;
    margin-top: 1.2em;
    border-radius: 0.8rem !important;
    padding: 0.7rem 1rem !important;
    width: fit-content !important;
    display: block !important;

    :hover {
        color: #FFFFFF !important;
        background-color: #55C0E0 !important;
        cursor: pointer;
        box-shadow: 0 0 0 1px #55C0E0 inset;
    }

    /* Mobile design */
    @media (max-width: 910px) {
        font-size: 1.5em;
        font-weight: 700;
        padding: 0.3em 1.3em !important;
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