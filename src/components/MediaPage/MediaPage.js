import React from 'react'
import { Wrapper, ImgWrapper, ContentLeft, ContentRight, Title } from './styles'

import MediaLink from './MediaLink/MediaLink'

import { StaticImage } from "gatsby-plugin-image"

const MediaPage = () => {
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
            <ContentLeft>
                <Title>
                    <h2>Written articles&nbsp;</h2>
                    <span>(besides the ones on this page)</span>
                </Title>
                <MediaLink label={'Liberal.hr'} link={'https://www.liberal.hr/mirovinski-sustav-mirovine-944'} text={'(Ne)održivost hrvatskog mirovinskog sustava (analyst of Croatian pension system)'} />
                <h2>Interviews and media appeareances</h2>
                <MediaLink label={'Total Croatia News'} link={'https://www.total-croatia-news.com/made-in-croatia/40906-young-croat'} text={'Croatian Economics Student Dorian Antesic Launching Finance Podcast (about my podcast)'} />
                <MediaLink label={'Poslovni dnevnik'} link={'https://www.poslovni.hr/hrvatska/kroz-specijalizirani-podcast-zeli-mlade-zainteresirati-za-ulaganje-i-osobne-financije-4284067'} text={' Kroz specijalizirani podcast želi mlade zainteresirati za ulaganje i osobne financije (about my podcast)'} />
                <MediaLink label={'Total Croatia News'} link={'https://www.total-croatia-news.com/lifestyle/51533-dorian-in-rab'} text={'Croatian Graduate Perspective: The View from Dorian in Rab (opportunities in Croatia)'} />
            </ContentLeft>
            <ContentRight>
                <MediaLink label={'Poslovni dnevnik'} link={'https://www.poslovni.hr/hrvatska/osmislio-investicijski-fond-kojim-bi-upravljali-studenti-i-tako-ucili-o-ulaganju-360755'} text={'Osmislio investicijski fond kojim bi upravljali studenti i tako učili o ulaganju (winner of student competition)'} />
                <MediaLink label={'Večernji list'} link={'https://www.vecernji.hr/vijesti/osmislio-investicijski-fond-kojim-bi-upravljali-studenti-i-tako-ucili-o-ulaganju-1367189'} text={'Osmislio investicijski fond kojim bi upravljali studenti i tako učili o ulaganju (winner of student competition)'} />
                <MediaLink label={'Total Croatia'} link={'https://www.total-croatia-news.com/made-in-croatia/40906-young-croat'} text={'News Young Croat Creates Investment Fund Managed by Students (winner of student competition)'} />
                <MediaLink label={'Poslovni dnevnik'} link={'https://www.poslovni.hr/hrvatska/studenti-dobili-nova-znanja-i-iskustvo-a-neke-od-ideja-su-i-zazivjele-4256486'} text={'Studenti dobili nova znanja i iskustvo, a neke od ideja su i zaživjele (winner of student competition)'} />
                <MediaLink label={'Fiuman.hr'} link={'https://www.fiuman.hr/rijecki-student-ekonomije-dorian-antesic-pobijedio-u-natjecanju-hrvatska-pamet-hrvatskoj-2019/'} text={'Riječki student ekonomije Dorian Antešić pobijedio u natjecanju ‘Hrvatska pamet Hrvatskoj 2019.’ (winner of student competition)'} />
                <MediaLink label={'Fiuman.hr'} link={'https://www.fiuman.hr/veliki-interes-studenata-za-konferenciju-o-marketingu-i-prodaji-sell-me-this-pen/'} text={'Veliki interes studenata za konferenciju o marketingu i prodaji ‘Sell me this pen’ (marketing conference)'} />
            </ContentRight>
        </Wrapper>
    )
}

export default MediaPage
