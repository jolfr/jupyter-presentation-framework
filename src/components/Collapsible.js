import PropTypes from 'prop-types'
import React from 'react'
import { Collapse } from 'react-collapse'
import StickyWrapper from './StickyWrapper'

class Collapsible extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      isOpen: false,
    }
  }

  handleToggleSection() {
    this.setState({ isOpen: !this.state.isOpen })
  }

  render() {
    return (
      <>
        <StickyWrapper
          isActive={this.props.isNotebookVisible}
          handleToggleNotebook={this.props.isNotebookVisible ?
            () => this.props.onCloseNotebook() :
            () => this.props.onOpenNotebook(this.props.title)
          }
          label={this.props.title}
          handleCloseNotebook={this.props.handleCloseNotebook}
        >
          <Collapse isOpened={this.props.isNotebookVisible}>
            {this.props.children}
          </Collapse>
        </StickyWrapper>
      </>
    )
  }
}

Collapsible.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.element),
    PropTypes.element.isRequired,
  ]),
  title: PropTypes.string.isRequired,
  isNotebookVisible: PropTypes.bool.isRequired,
  notebook: PropTypes.string.isRequired,
  onOpenNotebook: PropTypes.func.isRequired,
  onCloseNotebook: PropTypes.func.isRequired
}

export default Collapsible
