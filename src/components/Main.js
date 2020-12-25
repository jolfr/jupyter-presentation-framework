import PropTypes from 'prop-types'
import React from 'react'
import Article from './Article'

const Main = props => {
  return (
    <div
      ref={props.setWrapperRef}
      id="main"
      style={props.timeout ? { display: 'flex' } : { display: 'none' }}
    >
      {Object.keys(props.navList).map(function(key, index) {
        return (
          <Article
            article={props.article}
            articleTimeout={props.articleTimeout}
            section={props.navList[key]}
            onCloseArticle={props.onCloseArticle}
            isNotebookVisible={props.isNotebookVisible}
            notebook={props.notebook}
            onOpenNotebook={props.onOpenNotebook}
            onCloseNotebook={props.onCloseNotebook}
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
  isNotebookVisible: PropTypes.bool,
  notebook: PropTypes.string,
  onOpenNotebook: PropTypes.func,
  onCloseNotebook: PropTypes.func,
  timeout: PropTypes.bool,
  setWrapperRef: PropTypes.func.isRequired,
  navList: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.object),
    PropTypes.object.isRequired,
  ]).isRequired,
}

export default Main
