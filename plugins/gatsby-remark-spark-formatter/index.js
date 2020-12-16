const visit = require("unist-util-visit")
const toString = require("mdast-util-to-string")


module.exports = ({ markdownAST }, options) => {
  const { formatNumber=false } = options;
  visit(markdownAST, "code", (node) => {
    let code = toString(node)
    const syntax = /^\d+\.*\d*$/ig
    const number = code.match(syntax);
    if (number !== null && formatNumber) {
      code = '<pre><code><h1>'+ code + '</h1></code></pre>'
      node.type = "html"
      node.children = undefined
      node.value = code
    }
  })
  return markdownAST
}