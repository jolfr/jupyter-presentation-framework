import PropTypes from 'prop-types'
import React from 'react'
import { graphql, useStaticQuery } from 'gatsby'
import Collapsible from './Collapsible'
import * as NotebookTemplate from './../templates/ipynb'

/**
 * Receives mapped object from Section.js
 * and sets up proper structure with collapsible.
 * Reads in all data from graphql and renders
 * notebooks
 */

const Notebooks = ({ data: {
    allMarkdownRemark: { edges },
} }) => {

    const Notebooks = edges.map(edge => {
        return(
          <Collapsible title={frontmatter.title}>
            <NotebookTemplate/>
          </Collapsible>
        )
      }

    )
    return (<div>{Notebooks}</div>


    )
  }

export default Notebooks

Notebooks.propTypes = {

}

