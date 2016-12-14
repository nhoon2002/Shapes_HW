'use strict';

// A standard constructor function.


//Implement a Shape class
function Shape() {
   this.type = "shape";
   // this.get_type = function() {
   //    return this.type;
   // };
}

Shape.prototype.get_type = function () {
   return this.constructor;
};

module.exports = Shape;
