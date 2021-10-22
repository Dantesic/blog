import styled from 'styled-components'

export const NavigationDiv = styled.div`
    height: 9em;
    background-color: #001A35;

    @media (max-width: 1023px) {
        height: 0.5em;
    }
`

export const Wrapper = styled.section`
    margin-bottom: 5em;

    @media (max-width: 768px) {
        margin-bottom: 2.75em;
    }
`

export const ImgWrapper = styled.div`
    height: 42em;
    width: 100%;
    overflow: hidden;

    @media (max-width: 1100px) {
        height: auto;
    }
`

export const Introduction = styled.section`
    color: rgb(0, 26, 53);
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin-bottom: 7em;
    padding: 0 12em;
    
    h2 {
        color: rgb(0, 26, 53);
        text-align: center;
    }

    span {
        margin-bottom: 3em;
    }

    @media (max-width: 900px) {
        padding: 0 8em;
    }

    @media (max-width: 768px) {
        padding: 0 5em;
        margin-bottom: 4em;
    }

    @media (max-width: 600px) {
        padding: 0 3em;
        font-size: 0.9em;

        h2 {
            font-size: 1.4em;
        }

        span {
            margin-bottom: 3em;
        }
    }

    @media (max-width: 400px) {
        padding: 0 2em;
    }
`

export const ArrowSVG = styled.div`
    margin-top: 2em;
    width: 7em;

    :hover {
        cursor: pointer;
    }

    @media (max-width :600px) {
        width: 5em;
    }
`

export const Quote = styled.section`
    margin-top: 2em;
    margin-bottom: 2.5em;

    p {
        margin-top: 2.5em;
        text-align: center;
    }

    @media (max-width: 768px) {
        margin-top: 2.5em;
    }
`

export const FollowMeSection = styled.section`
    display: grid;
    position: relative;
    grid-template-areas:
    "follow-social follow-social"
    "follow-text follow-img";

    @media (max-width: 1200px) {
        grid-template-areas:
        "follow-social"
        "follow-text"
        "follow-img";
    }

`

export const Social = styled.section`
    background-color: #001A35;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    column-gap: 1em;
    padding: 2em 12em;
    grid-area: follow-social;

    @media (max-width: 1320px) {
        padding: 2em 8em;
    }

    @media (max-width: 1230px) {
        padding: 2em 5em;
    }

    @media (max-width: 1200px) {
        justify-content: center;
    }

    @media (max-width: 450px) {
        padding: 2em 0;
    }

    @media (max-width: 600px) {
        font-size: 0.8em;
    }

    @media (max-width: 350px) {
        font-size: 0.75em;
    }
`

export const Linkedin = styled.div`
    grid-area: linkedin;
    background-color: #55C0E0;
    width: 2.8em;
    height: 2.8em;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 1em;
    transition: 500ms;

    :hover {
        transform: scale(1.1);
    }

    * {
        justify-self: center;
        color: #001A35;
    }

    @media (max-width: 768px) {
        justify-self: flex-end;
    }
`

export const Youtube = styled.div`
    grid-area: youtube;
    background-color: #55C0E0;
    width: 2.8em;
    height: 2.8em;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 1em;
    transition: 500ms;

    :hover {
        transform: scale(1.1);
    }

    * {
        justify-self: center;
        color: #001A35;
    }

    @media (max-width: 450px) {
        
    }
`

export const FollowMeText = styled.section`
    grid-area: follow-text;
    color: rgb(0, 26, 53);
    justify-self: flex-start;
    align-self: center;
    width: 55%;
    padding: 5em 12em;

    p {
        margin-bottom: 1em;
    }

    a {
        color: #55C0E0;
    }

    a:hover {
        text-decoration: underline;
    }

    @media (max-width: 1320px) {
        padding: 5em 8em;
    }

    @media (max-width: 1230px) {
        padding: 5em 5em;
    }

    @media (max-width: 1200px) {
        justify-self: center;
        padding-top: 3em;
        width: 70%;
    }

    @media (max-width: 900px) {
        width: 80%;
    }

    @media (max-width: 800px) {
        padding: 5em 4em;
        padding-top: 3em;
    }

    @media (max-width: 650px) {
        padding: 5em 2em;
        padding-top: 3em;
        width: 90%;
    }
`

export const FollowMeImgWrapper = styled.div`
    grid-area: follow-img;
    position: absolute;
    top: -4em;
    right: 15em;
    width: 34em;

    @media (max-width: 1450px) {
        right: 10em;
    }

    @media (max-width: 1320px) {
        right: 7em;
    }

    @media (max-width: 1230px) {
        right: 4em;
    }

    @media (max-width: 1200px) {
        position: relative;
        justify-self: center;
        right: 0;
        width: 35em;
    }

    @media (max-width: 1230px) {
        width: 100%;
        padding: 0 2em;
    }
`

export const BusinessSection = styled.section`
    background-color: #F3F3F3;
    padding: 6em 12em;
    color: rgb(0, 26, 53);
    display: grid;
    column-gap: 7em;
    grid-template-areas:
    "title title title"
    "one two three";

    h2 {
        grid-area: title;
        color: #001A35;
        text-align: center;
        font-size: 2.2em;
        margin-bottom: 2.5em;
    }

    p {
        margin-bottom: 1.5em;
    }

    @media (max-width: 1400px) {
        padding: 7em 8em;
        column-gap: 5em;
    }

    @media (max-width: 1200px) {
        padding: 7em 5em;
        column-gap: 4em;
    }

    @media (max-width: 1050px) {
        h2 {
            margin-bottom: 3em;
        }

        grid-template-areas:
        "title"
        "one"
        "two"
        "three";
        text-align: center;
    }

    @media (max-width: 768px) {
        padding: 3.5em 3em;
        padding-bottom: 2em;

        h2 {
            font-size: 2em;
            margin-bottom: 2em;
        }
    }
`

export const Business1 = styled.section`
    grid-area: one;

    @media (max-width: 1050px) {
        width: 70%;
        justify-self: center;
    }

    @media (max-width: 768px) {
        width: 80%;
    }

    @media (max-width: 650px) {
        width: 100%;
        
    }
`

export const Business2 = styled.section`
    grid-area: two;

    @media (max-width: 1050px) {
        width: 70%;
        justify-self: center;
    }

    @media (max-width: 768px) {
        width: 80%;
    }

    @media (max-width: 650px) {
        width: 100%;
        
    }
`

export const Business3 = styled.section`
    grid-area: three;

    @media (max-width: 1050px) {
        width: 70%;
        justify-self: center;
    }

    @media (max-width: 768px) {
        width: 80%;
    }

    @media (max-width: 650px) {
        width: 100%;
        
    }
`

export const EducationSection = styled.section`
    h2 {
        color: #001A35;
        font-size: 2.2em;
        text-align: center;
        margin: 2.5em 0;
    }

    @media (max-width: 768px) {
        h2 {
            margin: 1.5em 0;
            font-size: 2em;
        }
    }
`

export const ExperienceSection = styled.section`
    h2 {
        color: #001A35;
        text-align: center;
        font-size: 2.2em;
        margin: 2.5em 0;
    }

    @media (max-width: 768px) {
        h2 {
            font-size: 2em;
            margin: 1.5em 0;
        }
    }
`

export const Grid = styled.section`
    padding: 0 12em;
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 2em;

    @media (max-width: 1500px) {
        padding: 0 10em;
    }

    @media (max-width: 1400px) {
        padding: 0 8em;
    }

    @media (max-width: 1300px) {
        padding: 0 6em;
    }

    @media (max-width: 1200px) {
        padding: 0 4em;
    }

    /* Mobile design */
    @media (max-width: 1100px) {
        grid-template-columns: 1fr;
        width: 50%;
        margin: 0 auto;
    }

    @media (max-width: 1000px) {
        width: 60%;
    }

    @media (max-width: 850px) {
        width: 75%;
    }

    @media (max-width: 650px) {
        width: 80%;
    }

    @media (max-width: 600px) {
        width: 90%;
    }

    @media (max-width: 520px) {
        padding: 0 2em;
    }

    @media (max-width: 420px) {
        padding: 0 1em;
    }

    @media (max-width: 360px) {
        padding: 0 0.5em;
        font-size: 0.9em;
    }
`