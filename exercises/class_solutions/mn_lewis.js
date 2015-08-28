function missingNo(A, B) {
   A.sort(function(x, y) {
       return x > y;
   });

   B.sort(function(x, y) {
       return x > y;
   });

   if (A.length < B.length){
       var temp = B;
       B = A;
       A = temp;
   }

   for (var i=0; i < B.length; i++) {
       if (B[i] != A[i]) {
           return A[i];
       }
   }
};
