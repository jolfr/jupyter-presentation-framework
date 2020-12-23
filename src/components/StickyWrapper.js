import PropTypes from 'prop-types'
import React, { Component, useRef } from 'react'
import Sticky from './Sticky'

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
            <Sticky className={`sticky-inner${(this.state.isSticky && this.props.isActive) ? ' sticky' : ''}`}>
              {this.props.Sticky}
            </Sticky>
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
  Sticky: PropTypes.instanceOf(Component).isRequired,
  isActive: PropTypes.bool.isRequired
}