import styled from 'styled-components'

export const Wrapper = styled.section`
    background-color: #EDEDED;
    padding: 5em 6rem;

    h2 {
        font-size: 2.2em;
        color: #001A35;
        text-align: center;
        margin-bottom: 2em;
    }

    @media (max-width: 1350px) {
        padding: 5em 3rem;
    }

    @media (max-width: 1200px) {
        padding: 5em 0;
    }

    @media (max-width: 1050px) {
        padding: 5em 2em;
        padding-bottom: 1em;
    }

    @media (max-width: 768px) {
        h2 {
            font-size: 1.8em;
        }
    }
`

export const BulletWrapper = styled.section`
    display: flex;
    justify-content: center;
    align-items: center;

    @media (max-width: 1050px) {
        flex-direction: column;
        height: 100%;
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
        min-height: 2.2em;
    }
    
    p {
        text-align: center;
        color: #1F374E;
        font-size: 1.25rem;
        padding: 0 3em;
        flex-grow: 1;
        line-height: 1.3em;
        min-height: 7.8em;
        margin-bottom: 2em;
    }

    @media (max-width: 1050px) {
        p {
            padding: 0 8em;
        }
    }

    @media (max-width: 800px) {
        p {
            padding: 0 5em;
            font-size: 1.1rem;
        }
    }

    @media (max-width: 600px) {
        p {
            padding: 0 2em;
        }
    }

    @media (max-width: 500px) {
        h3 {
            font-size: 1.7em;
        }

        p {
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