import React from 'react'
import { Wrapper, ImgWrapper, Introduction, ArrowSVG, Quote, FollowMeSection, Social, Linkedin, Youtube, FollowMeText, FollowMeImgWrapper, BusinessSection, Business1, Business2, Business3, EducationSection, ExperienceSection, Grid } from './styles'

import EducationField from './EducationField/EducationField'
import ExperienceField from './ExperienceField/ExperienceField'

import { graphql, useStaticQuery } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"
import { getImage } from "gatsby-plugin-image"

import { Element as ScrollElement } from "react-scroll"
import { Link as ScrollLink } from "react-scroll"

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import "../../utils/fontawesome"

const AboutPage = () => {
    const data = useStaticQuery(graphql`
        query {
            uniri: file(relativePath: {eq: "uniri.png"}) {
                childImageSharp {
                        gatsbyImageData
                }
            }
            coimbra: file(relativePath: {eq: "coimbra-university.png"}) {
                childImageSharp {
                    gatsbyImageData
                }
            }
            charles: file(relativePath: {eq: "charles-university.png"}) {
                childImageSharp {
                    gatsbyImageData
                }
            }
        }
    `)

    const uniriImg = getImage(data.uniri)
    const coimbraImg = getImage(data.coimbra)
    const charlesImg = getImage(data.charles)

    return (
        <Wrapper>
            <ImgWrapper>
                <StaticImage
                    src="../../assets/images/dorian-hrvatska-pamet-hrvatskoj.jpeg"
                    alt="Dorian Antesic award ceremony"
                    loading="eager"
                    placeholder="blurred"
                    layout="constrained"
                />
            </ImgWrapper>
            <Introduction>
                <ScrollLink to="follow-me-section" spy={true} smooth={true}>
                    <ArrowSVG>
                        <StaticImage
                            src="../../assets/images/arrow-down.png"
                            alt="arrow pointing up"
                            loading="eager"
                            placeholder="blurred"
                            layout="constrained"
                        />
                    </ArrowSVG>
                </ScrollLink>
                <Quote>
                    <h2>”I am the master of my fate, I am the captain of my soul.”</h2>
                    <p>Invictus by William Ernest Henley</p>
                </Quote>
                <span>The verse I lead my life by.</span>
                <h2>
                    I find business as art and entrepreneurs as those restless hungry soul individuals who want to create greatness.
                </h2>
            </Introduction>
            <ScrollElement name="follow-me-section">
                <FollowMeSection >
                    <Social>
                        <h2>Follow me on</h2>
                        <Linkedin>
                            <a
                                href="https://www.linkedin.com/in/dorianantesic/"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                <FontAwesomeIcon size={'2x'} icon={["fab", "linkedin-in"]} />
                            </a>
                        </Linkedin>
                        <Youtube>
                                <a
                                    href="https://www.youtube.com/channel/UCptUiwBhO4MfBPiVolHEgkw"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    <FontAwesomeIcon size={'2x'} icon={["fab", "youtube"]} />
                                </a>
                        </Youtube>
                    </Social>
                    <FollowMeText>
                        <p>Dorian Antešić holds a BSc in Finance and Accounting and MSc in Finance and Banking.</p>
                        <p>I am in my early 20s so I don’t have much to write about myself. Maybe it will be better that I explain to you my philosophy of business so that you can see what drives me.</p>
                    </FollowMeText>

                    <FollowMeImgWrapper>
                        <StaticImage
                            src="../../assets/images/chad-dorian.JPG"
                            alt="Dorian Antesic award ceremony"
                            loading="eager"
                            placeholder="blurred"
                            layout="constrained"
                        />
                    </FollowMeImgWrapper>
                </FollowMeSection>
            </ScrollElement>
            <BusinessSection>
                <h2>What is “business” to me?</h2>
                <Business1>
                    <p><strong>Business is serving humanity.</strong> It is careful observation of the needs and wants of others and providing the solution to them.</p>
                    <p>We are helping people by doing business. By solving their problems or giving them what they need, we are making their lives easier and happier.</p>
                </Business1>
                <Business2>
                    <p>By doing business both parties are enjoying the benefits of one another. When done on the terms of free will everyone is building something better.</p>
                    <p>I am serving humanity by doing business. Solving their problems and providing for their needs. It’s a wonderful life!</p>
                </Business2>
                <Business3>
                    <p>I have experience in team leadership working in an international youth organisation and on personal projects. Investing in stocks and bitcoin is nothing new to me. Besides finance, I enjoy reading literature and poetry. It helps me be more imaginative. I wrote a satirical drama in high school and played it with a theatre group 7 times across the country.</p>
                    <p>Be free to contact me.</p>
                </Business3>
            </BusinessSection>
            <EducationSection>
                <h2>Education</h2>
                <Grid>
                    <EducationField
                        image={uniriImg}
                        imageAlt={'uniri logo'}
                        title={'UNIVERSITY OF RIJEKA,'}
                        subtitle={'Faculty of Economics and Business, Rijeka, Croatia'}
                        duration={'October 2016 - September 2021'}
                        items={[`Master of Economics, Finance and Banking program (2019. - 2021.)
                            Thesis: “Family Wealth and Bitcoin: Sound Money as the Basis for the Creation of Generational Wealth”`, `Bachelor of Economics, Finance and Accounting program (2016 - 2019)
                            Thesis: “Student investment funds”`]}
                    />
                    <EducationField
                        image={coimbraImg}
                        imageAlt={'coimbra university logo'}
                        title={'UNIVERSITY OF COIMBRA,'}
                        subtitle={'Faculty of Economics and Faculty of Letters, Coimbra, Portugal'}
                        duration={'February 2021 - July 2021'}
                        items={[`I studied for one semester (2021.) as an exchange student at the Faculty of Economics and the Faculty of Letters at the University of Coimbra, Portugal. 
                        `, `During my time in Coimbra, I wrote my Master’s thesis and took lectures in the Portuguese language.`]}
                    />
                    <EducationField
                        image={charlesImg}
                        imageAlt={'charles university logo'}
                        title={`CHARLES UNIVERSITY,`}
                        subtitle={`Institute of Economic Studies, Prague, Czech Republic`}
                        duration={'February 2019 - June 2019'}
                        items={[`I studied for one semester (2019.) as an exchange student at the Institute of Economic Studies of Charles University in Prague, Czech Republic.`, `Courses I took were: Financial Modelling in MS Excel and VBA, Private Equity, Strategic Management and Portfolio Analysis and Risk Management.`, `I got a recommendation letter from the professor and businessman Petr Balcar`]}
                    />
                </Grid>
            </EducationSection>
            <ExperienceSection>
                <h2>Experience</h2>
                <Grid>
                    <ExperienceField
                        title={`Host and Owner`}
                        location={`online`}
                        firm={`Pričajmo o Novcu`}
                        duration={`September 2020 - Present`}
                        items={[`Podcast and blog`, `Creating educational and informative articles and videos about finance & economics`, `Interviewing professionals from the business and academia world about finance & economics-related topics`]}
                    />
                    <ExperienceField
                        title={`Business Intern`}
                        location={`Rijeka, Croatia`}
                        firm={`Capital Partners JSC`}
                        duration={`November 2020 - January 2021`}
                        items={[`My main role was to research asset-backed tokenization with the implementation in the Real Estate market and the transformation of the company from standard crowdfunding to blockchain crowdfunding.`, `Researching Real Estate market and investing`, `Researching and implementing asset-backed tokenization on real estate`, `Working on the firm's whitepaper Conduct meetings with potential business partners`]}
                    />
                    <ExperienceField
                        title={`Student Teaching Assistant for Fiscal Policy course`}
                        location={`University of Rijeka, Rijeka, Croatia `}
                        firm={`Faculty of business and economics`}
                        duration={`October 2019 - July 2019`}
                        items={[`Helping professor Saša Drezgić, PhD with day-to-day activities `]}
                    />
                    <ExperienceField
                        title={`Business Development Manager`}
                        location={`Zagreb, Croatia`}
                        firm={`AIESEC in Croatia`}
                        duration={`August 2018 - January 2019`}
                        items={[`Market research and strategic planning`, `Making partnership proposals`, `Presenting partnership proposals to potential partners`]}
                    />
                    <ExperienceField
                        title={`Business Development Manager`}
                        location={`Rijeka, Croatia`}
                        firm={`AIESEC in Rijeka`}
                        duration={`August 2018 - January 2019`}
                        items={[`Team Leadership`, `"Sell ​​me this pen" - marketing conference`, `Leader of the conference organization`, `Designing, developing and implementing`, `Planning and managing organizational and project budgets`, `Managing the legalities of the organization`, `Partnerships with public and private companies and institutions`]}
                    />
                    <ExperienceField
                        title={`Organisation Committee President`}
                        location={`Rijeka, Croatia`}
                        firm={`AIESEC in Rijeka`}
                        duration={`February 2018 - November 2018`}
                        items={[`"Sell me this pen - marketing conference"`, `President of the Organising Committee`, `Strategic planning, writing grants, implementations`, `Budgeting, marketing, sales`, `Partnership development`]}
                    />
                </Grid>
            </ExperienceSection>
        </Wrapper>
    )
}

export default AboutPage
