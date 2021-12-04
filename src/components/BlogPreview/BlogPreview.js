import React from 'react'
import { Wrapper, Subtitle, Preview } from './styles'
import { Button } from '../../styles/global'

import { graphql, useStaticQuery } from "gatsby"
import { Link } from "gatsby"

import BlogPostPreview from '../BlogPostPreview/BlogPostPreview'

const BlogPreview = ({ title, subtitle, link, empty }) => {
    const data = useStaticQuery(graphql`
    query {
      allMarkdownRemark(
        sort: { fields: [frontmatter___date], order: DESC }
        limit: 3
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

    return (
        <Wrapper>
            <h2>{title}</h2>
            <Subtitle>{subtitle}</Subtitle>
            {!empty ?
              (<Preview>
                {data.allMarkdownRemark.edges.map(({ node }) => (
                  <BlogPostPreview key={node.id} post={node} />
                ))}
              </Preview>)
              : <span>Blog in English coming soon!</span>
            }
              <Button>
                <Link to={link}>Read More</Link>
            </Button>
        </Wrapper>
    )
}

export default BlogPreview
