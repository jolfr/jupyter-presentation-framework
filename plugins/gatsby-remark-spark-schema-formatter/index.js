const visit = require("unist-util-visit")
const toString = require("mdast-util-to-string")

module.exports = ({ markdownAST }, options) => {
  const {useDefaultStyles = true, className = ""} = options;
  visit(markdownAST, "code", (node) => {
    let code = toString(node)
    let searchGrid = code.replace(/(\r\n|\n|\r)/gm, '') // remove newlines
    const syntax = /root\s*\|-/ig // matches schema format
    const matches = searchGrid.match(syntax);

    if (false) {

      var char = '\n';
      var i = 0;
      var j = 0;
      var lineCount = 0; //NOTE: this is count of +---+ lines, not all lines

      while ((j = (code + char).indexOf(char, i))!== // (code+char) is a workaround to capture footer
      -1) { // while their are still newlines
        var line = code.substring(i, j); // substring to newline
        if (line.match(/root/ig)) { // matches +--+-+ lines that declare table lines
          lineCount++; // increment track of matches
        } else {
          line = line.replace(/\s*/, "") // strip out whitespace
          line = line.replace(/\|-+/,"") // strip out dashes
          line = '<li>' + line + '</li>'
        }
        i = j + 1;
      }

      code = '<pre><code><table>' +
        newHeader + newBody + '</table>' + '<h5>' + newFooter + '</h5>' +
        '</code></pre>'
      node.type = "html"
      node.children = undefined
      node.value = code
    }
  })
  return markdownAST
}