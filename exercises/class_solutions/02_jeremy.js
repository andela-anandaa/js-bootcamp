 var array = [1, 3, 4, 5];
function arraySum(X) {
   var sum = 0;
   for(var i = 0, len = X.length; i < len; i++) {
       sum = sum + X[i];
   }
   return sum;
}

function sumN(Y) {
   return (((Y.length + 1) * (Y.length + 2)) / 2);
}
var answer = sumN(array) - arraySum(array);
arraySum(array);
sumN(array);
console.log(answer + " is missing");
