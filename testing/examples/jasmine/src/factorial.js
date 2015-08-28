function factorial(x) {
  if (typeof x === 'number' &&
          x >= 0) {
            if (x === 0) {
              return 1;
            }
            else {
              return x * factorial(x - 1);
            }
  }
  else {
    return false;
  }
}
