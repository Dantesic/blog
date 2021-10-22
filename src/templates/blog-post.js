import React from "react"
import { Article, Infobar, Date, Author } from '../styles/blogPost'

import DesktopNav from '../components/Layout/DesktopNav/DesktopNav'
import MobileNav from '../components/Layout/MobileNav/MobileNav'
import Footer from '../components/Layout/Footer/Footer'

import { graphql } from "gatsby"

const BlogPostTemplate = ({ data }) => {
  const post = data.markdownRemark

  return (
    <>
      <DesktopNav />
      <MobileNav />
      <Article>
        <header>
          <h1>{post.frontmatter.title}</h1>
          <Infobar>
            <Author>{post.frontmatter.author}</Author>
            <Date>{post.frontmatter.date}</Date>
          </Infobar>
        </header>
        <section dangerouslySetInnerHTML={{ __html: post.html }} />
      </Article>
      <Footer />
    </>
  )
}

export default BlogPostTemplate

export const pageQuery = graphql`
  query BlogPostBySlug($slug: String!) {
    site {
      siteMetadata {
        title
      }
    }
    markdownRemark(fields: { slug: { eq: $slug } }) {
      fields {
        slug
      }
      id
      excerpt(pruneLength: 160)
      html
      frontmatter {
        title
        date(formatString: "DD MMMM, YYYY", locale: "hr")
        author
        description
      }
    }
  }
`