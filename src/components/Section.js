import PropTypes from 'prop-types'
import React from 'react'
import Notebooks from './Notebook'

class Section extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      // this should be a mapped object
      <Notebooks />
    )
  }
}

export default Section

Section.propTypes = {}
