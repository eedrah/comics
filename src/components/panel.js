var h = require('virtual-dom/h')
var sheetify = require('sheetify')

var className = sheetify('./panel.css')

module.exports = function (props) {
  return h('div', {className},
    h('img', {
      src: `http://www.darthsanddroids.net/comics/darths${props}.jpg`
    })
  )
}
