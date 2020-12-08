import PropTypes from 'prop-types'
import React from 'react'
import { graphql } from 'gatsby'
import Collapsible from './Collapsible'

/**
 * Receives mapped object from Section.js
 * and sets up proper structure with collapsible.
 * Reads in all data from graphql and renders
 * notebook
 */

class Notebook extends React.Component {
  constructor(props) {
    super(props);

  }

  render() {
    // const { markdownRemark } = this.props.data // data.markdownRemark holds your post data
    // const { frontmatter, html } = markdownRemark
    const html = '<p>This is the notebook display</p>'
    const frontmatter = {
      title: 'title',
      date: 'date'
    }
    return (
      <Collapsible title={frontmatter.title}>
        <div className="blog-post-container">
          <div className="blog-post">
            <div
              className="blog-post-content"
              dangerouslySetInnerHTML={{ __html: html }}
            />
          </div>
        </div>
      </Collapsible>
    )
  }
}

export default Notebook

// Notebook.propTypes = {
//   data: {
//     markdownRemark: {
//       html: PropTypes.any.isRequired,
//       frontmatter: {
//         date: PropTypes.any.isRequired,
//         slug: PropTypes.any.isRequired,
//         title: PropTypes.any.isRequired,
//       }
//     }
//   }
// }
//
// export const pageQuery = graphql`
//   query($slug: String!) {
//     markdownRemark(frontmatter: { slug: { eq: $slug } }) {
//       html
//       frontmatter {
//         date(formatString: "MMMM DD, YYYY")
//         slug
//         title
//       }
//     }
//   }
// `