import React, { Component } from 'react'

class Sticky extends Component {
  constructor(props) {
    super(props)

  }

  render() {
    return(
      <div className={this.props.className}>
        {this.props.children}
      </div>
    )
  }
}

export default Sticky