import React from 'react'

export default function({ data }) {
  const { markdownRemark } = data
  const { frontmatter, html} = markdownRemark
  return(
    <div className="blog-post-container">
      <div className="blog-post">
        <h1>{frontmatter.section}</h1>
        <h2>{frontmatter.title}</h2>
        <div
          className="blog-post-content"
          dangerouslySetInnerHTML={{ __html: html }}
        />
      </div>
    </div>
  )
}

