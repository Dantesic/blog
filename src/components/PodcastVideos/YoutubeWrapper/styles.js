import styled from 'styled-components'

export const Wrapper = styled.section`
    background: rgba(85, 192, 224, 0.2);
    border-radius: 1.5em;
    display: flex;
    flex-direction: column;

    div {
        position: relative;
        padding: 0 !important;
        overflow: hidden;
        border-radius: 1.5em;
        margin: 0 !important;
        width: 100% !important;

        iframe {
            border: none;
            width: 100%;
            height: 15em !important;
            border-radius: 1.5em;
            margin-bottom: 0;
        }
    }
`

export const Text = styled.section`
    padding: 1em;
    display: flex;
    flex-direction: column;
    justify-content: center;

    h3 {
        color: #001A35;
        font-weight: bold;
        font-size: 1.5rem;
        line-height: 1.25em;
    }

    /* Conflict with some other p tag, therefore !important */
    p {
        width: 100% !important;
        text-align: start !important;
        color: rgb(0, 26, 53) !important;
        margin-bottom: 0.5em !important;
        /* limited to 4 lines of text */
        line-height: 1.45 !important;
        max-height: 5.8em !important;
        text-overflow: ellipsis !important;
        overflow: hidden !important;
        word-wrap: break-word !important;
    }

    @media (max-width: 1200px) {
        h3 {
            font-size: 1.4rem;
        }
    }

    @media (max-width: 900px) {
        padding: 1.5em;

        iframe {
            height: 10em !important;
        }

        h3 {
            font-size: 1.5rem;
        }

        p {
            font-size: 0.9em;
        }
    }

    @media (max-width: 600px) {
        iframe {
            height: 7em !important;
        }

        h3 {
            font-size: 1.4rem;
        }
    }
`

export const TitleWrapper = styled.span`
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 1.9em;
    min-height: 3.3em;

    :hover {
        h3 {
            color: #55C0E0;
        }
    }

    @media (max-width: 900px) {
        min-height: 0;
        justify-content: flex-start;
        margin-bottom: 0.5em;
    }
`

export const Author = styled.span`
    display: block;
    color: rgb(0, 26, 53);
    margin-top: 0.5em;
    margin-bottom: 1em;

    @media (max-width: 900px) {
        margin-top: 0.4em;
        margin-bottom: 0.4em;
    }
`