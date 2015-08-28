function Shape(x, y) {
  this.x = x;
  this.y = y;
}

var s = new Shape(10, 50);

var z = {};

// var y = z(20, 30);

console.log(s);

function Circle(r) {
  this.prototype = new Shape(r, r);
}

var a = new Circle(10);

console.log(a.y);
