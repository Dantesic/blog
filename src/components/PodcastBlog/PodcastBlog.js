import React, { useState, useEffect } from 'react'
import { Wrapper, Preview } from './styles'
import { Button } from '../../styles/global'

import { graphql, useStaticQuery } from "gatsby"

import BlogPostPreview from '../BlogPostPreview/BlogPostPreview'

const PodcastBlog = () => {
    const data = useStaticQuery(graphql`
        query {
            allMarkdownRemark(
                sort: { fields: [frontmatter___date], order: DESC }
            ) {
            edges {
                node {
                    id
                    frontmatter {
                    title
                    date(formatString: "DD MMMM, YYYY", locale: "hr")
                    author
                    description
                    thumbnail {
                        childImageSharp {
                            gatsbyImageData
                        }
                    }
                    thumbnailAuthor
                    }
                        fields {
                        slug
                    }
                }
            }
        }
        }
    `)

    // Array of all news articles
    const allPosts = data.allMarkdownRemark.edges

    // State for the list
    const [list, setList] = useState([...allPosts.slice(0, 6)])

    // State to trigger load more
    const [loadMore, setLoadMore] = useState(false)

    // State of whether there is more to load
    const [hasMore, setHasMore] = useState(allPosts.length > 6)

    // Load more button click
    const handleLoadMore = () => {
        setLoadMore(true)
    }

    // Handle loading more articles
    useEffect(() => {
    if (loadMore && hasMore) {
        const currentLength = list.length
        const isMore = currentLength < allPosts.length
        const nextResults = isMore
        ? allPosts.slice(currentLength, currentLength + 6)
        : []
        setList([...list, ...nextResults])
        setLoadMore(false)
    }
    }, [loadMore, hasMore]) //eslint-disable-line

    //Check if there is more
    useEffect(() => {
        const isMore = list.length < allPosts.length
        setHasMore(isMore)
    }, [list]) //eslint-disable-line

    return (
        <>
            <Wrapper>
                <h2>Najnovije objave...</h2>
                <Preview>
                    {list.map(({ node }) => (
                        <BlogPostPreview key={node.id} post={node}/>
                    ))}
                </Preview>
                <Button onClick={handleLoadMore}>Vidi više</Button>
            </Wrapper>
        </>
    )
}

export default PodcastBlog