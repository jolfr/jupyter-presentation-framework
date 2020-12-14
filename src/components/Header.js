import PropTypes from 'prop-types'
import React from 'react'

const Header = props => {

  return(
    <header id="header" style={props.timeout ? { display: 'none' } : {}}>
      <div className="logo">
        <span className="icon fa-diamond"/>
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
          {Object.keys(props.navList).map(function(key) {
            return(
              <li>
                <button
                  onClick={() => {
                    console.log(props.navList[key].section)
                    props.onOpenArticle(props.navList[key].section)
                  }}
                >
                  {props.navList[key].section}
                </button>
              </li>
            )
          })}
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
}

export default Header
