import PropTypes from 'prop-types'
import React from 'react'

/**
 * Implements structure for section of project (ex. data-cleaning)
 * Should render popup with all attached notebooks
 * This is the point that each notebook file is read in from
 * graphql and mapped to each notebook section
 * Each notebook should be hidden under a collapsible section
 * rendered with the notebook name in readable format. Can probably use
 * header injection here.
 * NOTE: Just do the notebooks for data acquisition now. Can set up proper
 * rendering with each section later.
 */
class Section extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <></>
    )
  }
}

Section.propTypes = {

}