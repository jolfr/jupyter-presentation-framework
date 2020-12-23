import PropTypes from 'prop-types'
import React from 'react'
import {Collapse} from 'react-collapse';
import StickyWrapper from './StickyWrapper'

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
        <StickyWrapper
          isActive={this.state.isOpen}
          handleToggleSection={() => this.handleToggleSection()}
          label={this.props.title}
        >
          <Collapse isOpened={this.state.isOpen}>
            { this.props.children }
          </Collapse>
        </StickyWrapper>
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