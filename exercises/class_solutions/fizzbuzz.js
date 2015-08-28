function fizzBuzz(n) {
  for (var i = 0; i <= n; i += 1) {
    if (i % 15 === 0) {
      console.log(i + ": FizzBuzz");
    }
    else if (i % 5 === 0) {
      console.log(i + ": Buzz");
    }
    else if (i % 3 === 0) {
      console.log(i + ": Fizz");
    }
  }
}

fizzBuzz(20);
