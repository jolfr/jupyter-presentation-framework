const visit = require("unist-util-visit")
const toString = require("mdast-util-to-string")

module.exports = ({ markdownAST }, options) => {
  const {useDefaultStyles = true, className = ""} = options;
  visit(markdownAST, "code", (node) => {
    let code = toString(node)
    let searchGrid = code.replace(/(\r\n|\n|\r)/gm, '') // remove newlines
    const syntax = /\+-.*-\+/ig
    const matches = searchGrid.match(syntax);

    if (matches !== null) {
      var parseRow = (row, brackets) => {
        var newRow = ''
        var openBracket = brackets[0];
        var closeBracket = brackets[1];
        const syntax = /\|((?!\|).)*/ig
        const cols = row.match(syntax);
        cols.map(col => {
          col = col.replace(/\|/,"").replace(/\s*/,"")
          if(col !== ''){
            col = openBracket + col + closeBracket
            newRow = newRow + col
          }
        })
        return newRow
      }

      var char = '\n';
      var i = 0;
      var j = 0;
      var lineCount = 0; //NOTE: this is count of +---+ lines, not all lines
      var newHeader = ''
      var newBody = ''
      var newFooter = ''

      while ((j = (code + char).indexOf(char, i))!==
      -1) {
        var line = code.substring(i, j);
        if (line.match(/\+-.*-\+/ig)) {
          lineCount++;
        } else if (lineCount===1) {
          line = parseRow(line,['\t<th><div>','</div></th>\n'])
          line = '<tr>\n' + line + '</tr>\n'
          newHeader = newHeader + line
        } else if (lineCount===2) {
          line = parseRow(line,['\t<td>','</td>\n'])
          line = '<tr>\n' + line + '</tr>\n'
          newBody = newBody + line
        } else if (lineCount===3){
          newFooter = newFooter + line
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