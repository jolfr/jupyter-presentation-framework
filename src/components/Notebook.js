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

const Notebook = (props) => {
  return null
  //
  // let edges = [0,1,2]
  // const Notebooks = edges.map(edge => {
  //     return(
  //       <Collapsible title={edge}>
  //         <NotebookTemplate/>
  //       </Collapsible>
  //     )
  //   }
  // )
  //
  // return(
  //   <div>
  //     {Notebooks}
  //   </div>
  // )
}

export default Notebook

Notebook.propTypes = {

}

