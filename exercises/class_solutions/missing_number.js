/*function missingNum(a, b) {
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

console.log(missingNum(a, b));*/

function Equilibrium(a,b) {
  /*
  * @desc
  *   A modification of the algorithm above to fit different use cases for different types of arrays 
  * */
  var missingNums = [];
  var arr = a.map(n => {
    if (b.findIndex(m=>(m===n)) !== -1) {
      return n
    }
    missingNums = missingNums.concat(n)
  })
  b.forEach(n=>{
    if (a.findIndex(m=>(m==n)) === -1) {
      missingNums = missingNums.concat(n)
    }
  })
 
  return { similarity: arr.join(' '), differences: missingNums.join(' ') }
}

/*
* test cases for the algorithm
* */ 
var testCase={
  q:[1,2,3,5,6],
  w:[44,5,1,2,3,6],
  e:[4,1,23,42,5,6,10],
  d:[2,3,42,5,5,1],
  c:[3,6,1,2,3,42,5,6,10],
  v:[3,42,5,6,10]
};
let comparisonCase = ['d', 'c', 'v'];
['q', 'w', 'e'].forEach((n,i)=>{
  console.log('Comparison between ' + n + ' and ' + comparisonCase[i])
  console.dir(Equilibrium(testCase[n], testCase[comparisonCase[i]]))
})
