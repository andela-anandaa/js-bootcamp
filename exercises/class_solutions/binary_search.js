function binarySearch(A, s) {
  var m,
      u = A.length - 1,
      l = 0,
      loop_count = 0; // to check performance

  while (u >= l) {
    loop_count++;
    m = Math.floor((u + l) / 2);
    if (A[m] == s) {
      console.log("loops: ", loop_count);
      return m;
    }
    else {
      if (A[m] > s) {
        u = m - 1;
      } else {
        l = m + 1;
      }
    }
  }
  return -1;
}


function binarySearchX(A, s) {
  var m,
      u = A.length - 1,
      l = 0,
      loop_count = 0; // to check performance

  while (u >= l) {
    loop_count++;
    m = Math.floor((u + l) / 2);
    if (A[m] == s) {
      console.log("loops: ", loop_count);
      return m;
    }
    else if (A[l] == s) {
      console.log("loops: ", loop_count);
      return l;
    }
    else if (A[u] == s) {
      console.log("loops: ", loop_count);
      return u;
    }
    else {
      if (A[m] > s) {
        u = m - 1;
      } else {
        l = m + 1;
      }
    }
  }
  return -1;
}

var a = [20, 30, 50, 70, 100, 200];
console.log(binarySearch(a, 70));
console.log(binarySearchX(a, 70));
