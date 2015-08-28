function missingNum(a, b) {
  var sum1 = 0, sum2 = 0;

  if (a.length > b.length) {
    var temp = a;
    a = b;
    b = temp;
  }

  for (var i = 0, len = a.length; i < len; i += 1) {
    sum1 += a[i];
    sum2 += b[i];
  }

  sum2 += b[b.length - 1];

  return sum2 - sum1;
}

var a, b;
a = [-10, -5, -7, -9, -2];
b = [-10, -5, -9, -7, -2, 3];

console.log(missingNum(a, b));
