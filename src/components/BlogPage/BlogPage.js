import React, { useState, useEffect } from 'react'
import { Wrapper, Preview } from './styles'
import { Button } from '../../styles/global'

import { graphql, useStaticQuery } from "gatsby"

import BlogPostPreview from '../BlogPostPreview/BlogPostPreview'

const BlogPage = () => {
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

    console.log(allPosts)

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
        <Wrapper>
            <h2>. blog</h2>
            <p>
                If you are interested in finance, economics and philosophy topics, hopefully, you will like this page. Here I share my thoughts about certain things, ideas, tips and knowledge that I possess.
            </p>
            <p>
                I also don’t mind sharing other people’s articles so if you want something to be published on this page, please don’t hesitate to contact me. I would love to read it and publish it.
            </p>
            <Preview>
                {list.map(({ node }) => (
                    <BlogPostPreview key={node.id} post={node}/>
                ))}
            </Preview>
            <Button onClick={handleLoadMore}>Load More</Button>
        </Wrapper>
    )
}

export default BlogPage