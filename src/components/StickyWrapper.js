import PropTypes from 'prop-types'
import React, { Component } from 'react'
import StickyCollapsibleButton from './StickyCollapsibleButton'

class StickyWrapper extends Component {
  constructor(props) {
    super(props)
    this.ref = React.createRef()
    this.state = {
      isSticky: false
    }
  }

  componentDidMount() {
    window.addEventListener("scroll", this.handleScroll)
  }

  componentWillUnmount() {
    window.removeEventListener("scroll", () => this.handleScroll)
  }

  handleScroll = () => {
    this.setState({isSticky: this.ref.current.getBoundingClientRect().top <= 40})
  }



  render() {
    return(
      <>
        <div id='sticky'>
          <div
            className={`sticky-wrapper${(this.state.isSticky && this.props.isActive) ? ' sticky' : ''}`}
            ref={this.ref}
          >
            <div className={`sticky-inner${(this.state.isSticky && this.props.isActive) ? ' sticky' : ''}`}>
              <StickyCollapsibleButton
                isActive={(this.state.isSticky && this.props.isActive)}
                handleClick={this.props.handleToggleSection}
                label={this.props.label}
              />
            </div>
          </div>
          {
            this.props.children
          }
        </div>
      </>
    )
  }
}

export default StickyWrapper

StickyWrapper.propTypes = {
  isActive: PropTypes.bool.isRequired,
  stickyContainerActive: PropTypes.func.isRequired,
  stickyContainerInactive: PropTypes.func.isRequired
}