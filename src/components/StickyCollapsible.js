import PropTypes from 'prop-types'
import React from 'react'
import {Collapse} from 'react-collapse';
import { StickyContainer, Sticky } from 'react-sticky';

class StickyCollapsible extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isOpen: false,
    }
  }

  handleToggleSection() {
    this.setState({isOpen: !this.state.isOpen})
  }

  render() {
    return(
      <StickyContainer>
        { this.props.children }
        <Sticky topOffset={500}>{
          ({
             style
           }) =>
            <button onClick={() => this.handleToggleSection()} style={{width: '100%'}}>
              <h3 style={style}>
                {this.props.title}
              </h3>
            </button>
        }</Sticky>
      </StickyContainer>
    )
  }
}

StickyCollapsible.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.element),
    PropTypes.element.isRequired
  ]),
  title: PropTypes.string.isRequired,
}

export default StickyCollapsible;