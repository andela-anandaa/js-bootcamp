var a = [1, 2, 10, 20, 100];

var b = ["james", "Jane", "Mike", "John"];

a.sort(function (x, y) {
  return x < y;
});

b.sort(function(x) {
  x.toLowerCase();
  return x;
});

console.log(b);
