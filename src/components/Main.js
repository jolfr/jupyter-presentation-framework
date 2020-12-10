import PropTypes from 'prop-types'
import React from 'react'
import pic01 from '../images/pic01.jpg'
import pic02 from '../images/pic02.jpg'
import pic03 from '../images/pic03.jpg'
import Collapsible from './Collapsible'
import Article from './Article'

const Main = props => {
  return (
    <div
      ref={props.setWrapperRef}
      id="main"
      style={props.timeout ? { display: 'flex' } : { display: 'none' }}
    >
      {Object.keys(props.navList).map(function(key,index) {
        return(
          <Article
            article={props.article}
            articleTimeout={props.articleTimeout}
            section={props.navList[key]}
            onCloseArticle={props.onCloseArticle}
          />
        )
      })}
    </div>
  )
}

Main.propTypes = {
  route: PropTypes.object,
  article: PropTypes.string,
  articleTimeout: PropTypes.bool,
  onCloseArticle: PropTypes.func,
  timeout: PropTypes.bool,
  setWrapperRef: PropTypes.func.isRequired,
  navList: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.object),
    PropTypes.object.isRequired
  ]).isRequired,
}

export default Main
