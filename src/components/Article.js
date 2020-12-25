import React from 'react'
import pic01 from '../images/pic01.jpg'
import PropTypes from 'prop-types'
import Collapsible from './Collapsible'
import StickyWrapper from './StickyWrapper'

const Article = props => {
  return (
    <article
      id={props.section.section}
      className={`${props.article === props.section.section ? 'active' : ''} ${
        props.articleTimeout ? 'timeout' : ''
      }`}
      style={{ display: 'none' }}
    >
      <h1 className="major">{props.section.section}</h1>
      <div
        style={{ paddingTop: 20 }}
        dangerouslySetInnerHTML={{ __html: props.section.header }}
      />
      <div>
        {props.section.notebooks.map(function({ notebook }, index) {
          return (
            <Collapsible
              title={notebook.title}
              isNotebookVisible={props.isNotebookVisible}
              notebook={props.notebook}
              onOpenNotebook={props.onOpenNotebook}
              onCloseNotebook={props.onCloseNotebook}
            >
              <div
                style={{ paddingTop: 20 }}
                dangerouslySetInnerHTML={{ __html: notebook.html }}
              />
            </Collapsible>
          )
        })}
      </div>
      <div
        className="close"
        onClick={() => {
          props.onCloseArticle()
        }}
      />
    </article>
  )
}

export default Article

Article.propTypes = {
  article: PropTypes.string.isRequired,
  articleTimeout: PropTypes.bool.isRequired,
  onCloseArticle: PropTypes.func.isRequired,
  isNotebookVisible: PropTypes.bool.isRequired,
  notebook: PropTypes.string.isRequired,
  onOpenNotebook: PropTypes.func.isRequired,
  onCloseNotebook: PropTypes.func.isRequired,
}
