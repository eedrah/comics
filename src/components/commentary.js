var h = require('virtual-dom/h')
var sheetify = require('sheetify')

var className = sheetify('./commentary.css')

module.exports = function (props) {
  return h('div', {className},
    h('iframe', {
      src: `http://www.darthsanddroids.net/episodes/${props}.html`
    })
  )
}
