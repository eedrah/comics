var h = require('virtual-dom/h')
var diff = require('virtual-dom/diff')
var patch = require('virtual-dom/patch')
var createElement = require('virtual-dom/create-element')

var root = require('./components/root')

var tree = root('Hello world!')
var rootNode = createElement(tree)
document.body.appendChild(rootNode)
