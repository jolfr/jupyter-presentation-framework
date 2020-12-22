const visit = require("unist-util-visit")
const toString = require("mdast-util-to-string")

module.exports = ({ markdownAST }, options) => {
  const {useDefaultStyles = true, className = ""} = options;
  visit(markdownAST, "code", (node) => {
    let code = toString(node)
    let searchGrid = code.replace(/(\r\n|\n|\r)/gm, '') // remove newlines
    const syntax = /root\s*\|-/ig // matches schema format
    const matches = searchGrid.match(syntax);

    if (matches) {

      var char = '\n';
      var i = 0;
      var j = 0;
      var lineCount = 0; //NOTE: this is count of +---+ lines, not all lines
      var list = '\t<tr><th><i>Column Name</i></th><th><i>Data Type</i></th><th><i>Nullable?</i></th></tr>\n';

      while ((j = (code + char).indexOf(char, i))!== // (code+char) is a workaround to capture footer
      -1) { // while their are still newlines
        var line = code.substring(i, j); // substring to newline
        if (line.match(/root/ig)) { // matches root of schema
        } else {
          line = line.replace(/\s*/, "") // strip out whitespace
          line = line.replace(/\|-+/,"") // strip out dashes
          var lineSplit = line.split(/^\s*(\w+.*):\s*(\w+)\s*\(n.+=\s(\w+)\)$/)
          var name = lineSplit[1]
          var data_type = lineSplit[2]
          var nullable = lineSplit[3]
          var row = '<tr><td>'
            + name + '</td><td>'
            + data_type + '</td><td>'
            + nullable + '</td></tr>'
          row = '\t' + row + '\n'
          list = list + row
        }
        i = j + 1;
      }

      code = '<pre><code><table>\n' + list + '</table></code></pre>\n'
      node.type = "html"
      node.children = undefined
      node.value = code
    }
  })
  return markdownAST
}