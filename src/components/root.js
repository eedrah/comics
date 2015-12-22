var h = require('virtual-dom/h')
var comic = require('./comic')

module.exports = function () {
  return h('div', comic(1))
}
