var h = require('virtual-dom/h')

module.exports = function (props) {
  return h('img', {src: `http://www.darthsanddroids.net/comics/darths${props}.jpg`})
}
