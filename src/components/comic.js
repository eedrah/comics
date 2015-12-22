var h = require('virtual-dom/h')

module.exports = function (props) {
  let number = props.toString()
  while (number.length < 4) {
    number = '0' + number
  }
  return h('img', {src: `http://www.darthsanddroids.net/comics/darths${number}.jpg`})
}
