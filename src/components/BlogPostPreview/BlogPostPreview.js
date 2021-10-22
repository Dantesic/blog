import React from 'react'
import { Wrapper, Text, TitleWrapper, Author } from './styles'

import { GatsbyImage, getImage } from "gatsby-plugin-image"
import { Link } from 'gatsby'

const BlogPostPreview = ({ post }) => {
    const image = getImage(post.frontmatter.thumbnail)
    const imageAlt = post.frontmatter.thumbnailAuthor

    return (
        <Wrapper>
            <Link to={post.fields.slug}>
                <GatsbyImage image={image} alt={imageAlt} />
            </Link>
            <Text>
                <Link to={post.fields.slug}>
                    <TitleWrapper>
                        <h3>{post.frontmatter.title}</h3>
                    </TitleWrapper>
                </Link>
                <Author>Autor: <strong>{post.frontmatter.author}</strong></Author>
                <p>{post.frontmatter.description}</p>
            </Text>
        </Wrapper>
    )
}

export default BlogPostPreview
