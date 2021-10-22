import React from 'react'
import { Wrapper, Text, TitleWrapper, Author } from './styles'

const YoutubeWrapper = ({ video }) => {

    return (
        <Wrapper>
            <div>
            <iframe
                    src={`https://www.youtube.com/embed/${video.id.videoId}`}
                    title={video.snippet.title}
                    allowFullScreen>
            </iframe>
            </div>
            <Text>
                <a href={`https://www.youtube.com/watch?v=${video.id.videoId}`} target="_blank" rel="noopener noreferrer">
                    <TitleWrapper>
                        <h3>{video.snippet.title}</h3>
                    </TitleWrapper>
                </a>
                <Author>Autor: <strong>Dorian Antešić</strong></Author>
                <p>{video.snippet.description}</p>
            </Text>
        </Wrapper>
    )
}

export default YoutubeWrapper
