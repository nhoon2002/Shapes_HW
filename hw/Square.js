'use strict';

var Shape = require('./Shape.js');

function Square(side) {
   this.side = side;
}


Square.prototype = new Shape();

Square.prototype.constructor = Square;

module.exports = Square;
