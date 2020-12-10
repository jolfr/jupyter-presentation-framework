const visit = require("unist-util-visit")
const toString = require("mdast-util-to-string")

module.exports = ({ markdownAST }, options) => {
  const {useDefaultStyles = true, className = ""} = options;
  visit(markdownAST, "code", (node) => {
    let code = toString(node)
    const syntax = /\+-.*-+/ig
    const matches = code.match(syntax);


    if (matches !== null) {
      let style = null
      if (useDefaultStyles) {
        style = `
          display:inline-block;
          padding:5px;
          background-color:yellow;
          color:black;
          border-radius: 5px;
        `
      }
      const putTextInSpan = text =>
        `<span
          ${useDefaultStyles && style ? ` style='${style}'` : ""}
          ${className !== "" ? `class='${className}'` : ""}
        >${text}</span>`

      matches.map(match => {
        code = code.replace(match, putTextInSpan(match))
      })

      code = '<p>' + code + '</p>'
      node.type = "html"
      node.children = undefined
      node.value = code
    }
  })
return markdownAST
}