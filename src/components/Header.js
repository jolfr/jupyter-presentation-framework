import PropTypes from 'prop-types'
import React from 'react'
import { graphql, StaticQuery, useStaticQuery } from 'gatsby'

const Header = props => {

  return(
    <header id="header" style={props.timeout ? { display: 'none' } : {}}>
      <div className="logo">
        <span className="icon fa-diamond"></span>
      </div>
      <div className="content">
        <div className="inner">
          <h1>Jupyter Presentation Framework</h1>
          <p>
            A web based framework to display jupyter notebooks.
            Render your notebooks using markdown files.
          </p>
        </div>
      </div>
      <nav>
        <ul>
          <li>
            <button
              onClick={() => {
                props.onOpenArticle('intro')
              }}
            >
              Data Acquisition
            </button>
          </li>
          <li>
            <button
              onClick={() => {
                props.onOpenArticle('intro')
              }}
            >
              Data Cleaning
            </button>
          </li>
          <li>
            <button
              onClick={() => {
                props.onOpenArticle('intro')
              }}
            >
              Exploratory Data Analysis
            </button>
          </li>
          <li>
            <button
              onClick={() => {
                props.onOpenArticle('work')
              }}
            >
              Feature Engineering
            </button>
          </li>
          <li>
            <button
              onClick={() => {
                props.onOpenArticle('about')
              }}
            >
              Modeling
            </button>
          </li>
          <li>
            <button
              onClick={() => {
                props.onOpenArticle('contact')
              }}
            >
              Evaluation
            </button>
          </li>
        </ul>
      </nav>
    </header>
  )
}

Header.propTypes = {
  onOpenArticle: PropTypes.func,
  timeout: PropTypes.bool,
  navList: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.string),
    PropTypes.string.isRequired
  ]).isRequired,
  notebooks: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node.isRequired
  ]).isRequired
}

export default Header
