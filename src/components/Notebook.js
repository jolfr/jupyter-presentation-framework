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
    const html = '<p>\n' +
      '            Adipiscing magna sed dolor elit. Praesent eleifend dignissim arcu,\n' +
      '            at eleifend sapien imperdiet ac. Aliquam erat volutpat. Praesent\n' +
      '            urna nisi, fringila lorem et vehicula lacinia quam. Integer\n' +
      '            sollicitudin mauris nec lorem luctus ultrices.\n' +
      '          </p>\n' +
      '          <p>\n' +
      '            Nullam et orci eu lorem consequat tincidunt vivamus et sagittis\n' +
      '            libero. Mauris aliquet magna magna sed nunc rhoncus pharetra.\n' +
      '            Pellentesque condimentum sem. In efficitur ligula tate urna.\n' +
      '            Maecenas laoreet massa vel lacinia pellentesque lorem ipsum dolor.\n' +
      '            Nullam et orci eu lorem consequat tincidunt. Vivamus et sagittis\n' +
      '            libero. Mauris aliquet magna magna sed nunc rhoncus amet feugiat\n' +
      '            tempus.\n' +
      '          </p>'
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