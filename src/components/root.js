var h = require('virtual-dom/h')
var sheetify = require('sheetify')

var comic = require('./comic')

var className = sheetify('./root.css')

let comics = []
for (var i = 1; i <= 20; i++) {
  comics.push(comic(i))
}

module.exports = function () {
  return h('div', {className},
    comics
  )
}
