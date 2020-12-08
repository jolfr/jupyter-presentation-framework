import PropTypes from 'prop-types'
import React from 'react'
import { graphql } from 'gatsby'

/**
 * Receives mapped object from Section.js
 * and sets up proper structure with collapsible.
 * Reads in all data from graphql and uses notebook
 * template for rendering actual notebook.
 */

class Notebook extends React.Component {
  constructor(props) {
    super(props);

  }

  render() {
    const { markdownRemark } = this.props.data // data.markdownRemark holds your post data
    const { frontmatter, html } = markdownRemark
    return (
      <div className="blog-post-container">
        <div className="blog-post">
          <h1>{frontmatter.title}</h1>
          <h2>{frontmatter.date}</h2>
          <div
            className="blog-post-content"
            dangerouslySetInnerHTML={{ __html: html }}
          />
        </div>
      </div>
    )
  }
}

Notebook.propTypes = {
  data: {
    markdownRemark: {
      html: PropTypes.any.isRequired,
      frontmatter: {
        date: PropTypes.any.isRequired,
        slug: PropTypes.any.isRequired,
        title: PropTypes.any.isRequired,
      }
    }
  }
}

export const pageQuery = graphql`
  query($slug: String!) {
    markdownRemark(frontmatter: { slug: { eq: $slug } }) {
      html
      frontmatter {
        date(formatString: "MMMM DD, YYYY")
        slug
        title
      }
    }
  }
`