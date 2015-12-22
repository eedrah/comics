var h = require('virtual-dom/h')
var sheetify = require('sheetify')

var className = sheetify('./commentary.css')

module.exports = function (props) {
  return h('iframe', {
    src: `http://www.darthsanddroids.net/episodes/${props}.html`,
    className: className
  })
}
