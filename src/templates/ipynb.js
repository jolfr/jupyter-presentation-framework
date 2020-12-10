import React from 'react'

export default function({ html }) {
  return(
    <div
      className="blog-post-content"
      dangerouslySetInnerHTML={{ __html: html }}
    />
  )
}


