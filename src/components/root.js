var h = require('virtual-dom/h')
var sheetify = require('sheetify')

var comic = require('./comic')
var loader = require('./loader')

var className = sheetify('./root.css')

module.exports = function () {
  return h('div', {className}, [
    comic(1),
    loader()
  ])
}
