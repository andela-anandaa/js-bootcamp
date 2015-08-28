function solution(B) {
    for (i = 1; i <= (B.length + 1); i++) {
        var x = 0;
        for (j = 0; j < (B.length); j++) {
           if (i == B[j]){
              // console.log (i +" is there")
               break;
           } else {
               x = x + 1;
           }
           if (x == B.length) {
               return i;
           }
        }
    }
}

var a = [1, 2, 3, 5, 6, 7];

console.log(solution(a));
