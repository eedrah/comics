var h = require('virtual-dom/h')

var panel = require('./panel')
var commentary = require('./commentary')

module.exports = function (props) {
  let number = props.toString()
  while (number.length < 4) {
    number = '0' + number
  }
  return h('div', [
    panel(number),
    commentary(number)
  ])
}
