import React from 'react'
import Layout from '../components/layout'

import Header from '../components/Header'
import Main from '../components/Main'
import Footer from '../components/Footer'
import { graphql } from 'gatsby'

class IndexPage extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      isArticleVisible: false,
      timeout: false,
      articleTimeout: false,
      article: '',
      isNotebookVisible: false,
      notebook: '',
      loading: 'is-loading',
    }
    this.handleOpenArticle = this.handleOpenArticle.bind(this)
    this.handleCloseArticle = this.handleCloseArticle.bind(this)
    this.handleOpenNotebook = this.handleOpenNotebook.bind(this)
    this.handleCloseNotebook = this.handleCloseNotebook.bind(this)
    this.setWrapperRef = this.setWrapperRef.bind(this)
    this.handleClickOutside = this.handleClickOutside.bind(this)
  }

  componentDidMount() {
    this.timeoutId = setTimeout(() => {
      this.setState({ loading: '' })
    }, 100)
    document.addEventListener('mousedown', this.handleClickOutside)
  }

  componentWillUnmount() {
    if (this.timeoutId) {
      clearTimeout(this.timeoutId)
    }
    document.removeEventListener('mousedown', this.handleClickOutside)
  }

  setWrapperRef(node) {
    this.wrapperRef = node
  }

  handleOpenArticle(article) {
    this.setState({
      isArticleVisible: !this.state.isArticleVisible,
      article,
    })

    setTimeout(() => {
      this.setState({
        timeout: !this.state.timeout,
      })
    }, 325)

    setTimeout(() => {
      this.setState({
        articleTimeout: !this.state.articleTimeout,
      })
    }, 350)
  }

  handleOpenNotebook(notebook) {
    this.setState({
      isNotebookVisible: !this.state.isNotebookVisible,
      notebook,
    })
  }

  handleCloseArticle() {
    this.setState({
      articleTimeout: !this.state.articleTimeout,
    })

    setTimeout(() => {
      this.setState({
        timeout: !this.state.timeout,
      })
    }, 325)

    setTimeout(() => {
      this.setState({
        isArticleVisible: !this.state.isArticleVisible,
        article: '',
      })
    }, 350)
  }

  handleCloseNotebook() {
    this.setState({
      isNotebookVisible: !this.state.isNotebookVisible,
      notebook: '',
    })
  }

  handleClickOutside(event) {
    if (this.wrapperRef && !this.wrapperRef.contains(event.target)) {
      if (this.state.isArticleVisible) {
        this.handleCloseArticle()
      }
    }
  }

  getSections(edges) {
    let sections = []
    edges.map(edge => {
      let section = edge.node.frontmatter.section
      let title = edge.node.frontmatter.title

      const number = /\d+\.*\d*/gi
      const underscore = /_+/gi
      const dash = /-+/gi
      section = section
        .replace(number, '')
        .replace(underscore, ' ')
        .replace(dash, '')
      const notebook = {
        title: title,
        html: edge.node.html,
      }
      if (!sections.hasOwnProperty(section)) {
        var header = ''
        var struct = ''
        if (notebook.title === 'readme') {
          header = notebook.html
          struct = {
            section: section,
            secid: notebook.secid,
            header: header,
            notebooks: [],
          }
        } else {
          struct = {
            section: section,
            secid: notebook.secid,
            header: header,
            notebooks: [
              {
                nbid: notebook.nbid,
                notebook: notebook
              },
            ],
          }
        }
        sections[section] = struct
      } else {
        if (notebook.title === 'readme') {
          sections[section].header = notebook.html
        } else {
          if (sections[section].notebooks === []) {
            sections[section].notebooks =
              [{
                nbid: notebook.nbid,
                notebook: notebook
              }]
          } else {
            sections[section].notebooks = sections[section].notebooks.concat([
              {
                nbid: notebook.nbid,
                notebook: notebook
              },
            ])
          }
        }
      }
    })
    return sections
  }

  render() {
    const sections = this.getSections(
      this.props.data && this.props.data.allMarkdownRemark.edges
    )
    return (
      <Layout location={this.props.location}>
        <div
          className={`body ${this.state.loading} ${
            this.state.isArticleVisible ? 'is-article-visible' : ''
          }`}
        >
          <div id="wrapper">
            <Header
              onOpenArticle={this.handleOpenArticle}
              timeout={this.state.timeout}
              navList={sections}
            />
            <Main
              isArticleVisible={this.state.isArticleVisible}
              timeout={this.state.timeout}
              articleTimeout={this.state.articleTimeout}
              article={this.state.article}
              onCloseArticle={this.handleCloseArticle}
              isNotebookVisible={this.state.isNotebookVisible}
              notebook={this.state.notebook}
              onOpenNotebook={this.handleOpenNotebook}
              onCloseNotebook={this.handleCloseNotebook}
              setWrapperRef={this.setWrapperRef}
              navList={sections}
            />
            <Footer timeout={this.state.timeout} />
          </div>
          <div id="bg"/>
        </div>
      </Layout>
    )
  }
}

export default IndexPage

export const pageQuery = graphql`
  query {
    allMarkdownRemark {
      edges {
        node {
          html
          frontmatter {
            section
            title
            secid
            nbid
          }
        }
      }
    }
  }
`
