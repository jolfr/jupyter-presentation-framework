const visit = require("unist-util-visit")
const toString = require("mdast-util-to-string")


module.exports = ({ markdownAST }, options) => {
  const { formatNumber=false } = options;
  visit(markdownAST, "code", (node) => {
    let code = toString(node)
    const syntax = /^\d+\.*\d*$/ig
    const number = code.match(syntax);
    if (number !== null && formatNumber) {
      let splitNum = code.split(/(\d+)(\.*)(\d*)/)
      let integer = splitNum[1]
      let decimal = splitNum[3]
      let digits = integer.split(/(\d)/)
      var numString = ''
      if (decimal !== '') {
        numString = '.' + decimal
      }
      if (digits.length > 3) {
        var end = digits.length
        var start = 0
        while (end > start) {
          if (digits[end] !== undefined) {
            numString = digits[end] + numString
            if ((numString.length + 1) % 4 === 0 && end !== 1) {
              numString = ',' + numString
            }
          }
          end--
        }
      } else {
        numString = integer + numString
      }

      code = '<pre><code><h3>'+ numString + '</h3></code></pre>'
      node.type = "html"
      node.children = undefined
      node.value = code
    }
  })
  return markdownAST
}