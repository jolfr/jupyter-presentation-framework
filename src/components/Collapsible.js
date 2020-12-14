import PropTypes from 'prop-types'
import React from 'react'
import {Collapse} from 'react-collapse';

class Collapsible extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isOpen: false
    }
  }

  handleToggleSection() {
    this.setState({isOpen: !this.state.isOpen})
  }

  render() {
    return(
      <>
        <button onClick={() => this.handleToggleSection()} style={{width: '100%'}}>
          <h3>
            {this.props.title}
          </h3>
        </button>
        <Collapse isOpened={this.state.isOpen}>
          { this.props.children }
        </Collapse>
      </>
    )
  }
}

Collapsible.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.element),
    PropTypes.element.isRequired
  ]),
  title: PropTypes.string.isRequired,
}

export default Collapsible;