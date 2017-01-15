function fizzBuzz(n) {
  /*
  * @desc:
  *   Another simpler implementation using a logical OR for the common FizzBuzz algorithm problem
  * */   
  for (var i = 0; i <= n; i += 1) {
    var output = "";
    if (i % 3 === 0) {
      console.log(output += "Fizz");
    }
    if (i % 5 === 0) {
      console.log(output += "Buzz");
    }
    console.log(output || i)
  }
}

fizzBuzz(20);
