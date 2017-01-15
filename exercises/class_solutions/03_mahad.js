/*var num_to_word = function (num) {
   num = num.toString();
   var length = num.length;
   var ans ='';
   for (var i = 0; i < length; i++) {
       ans += nums(num.charAt(i));
   }
   return ans;
};

function nums(a) {
   switch(a) {
       case '0':
           return "zero ";
       case '1':
           return "one ";
       case '2':
           return "two ";
       case '3':
           return "three ";
       case '4':
           return "four ";
       case '5':
           return "five ";
       case '6':
           return "six ";
       case '7':
           return "seven ";
       case '8':
           return "eight ";
       case '9':
           return "nine ";
   }
}

//function calling
console.log(num_to_word(123));
*/


function num_to_words(num) {
   var wordEq = {
      '0': 'zero',
      '1': 'one',
      '2': 'two',
      '3': 'three',
      '4': 'four',
      '5': 'five',
      '6': 'six',
      '7': 'seven',
      '8': 'eight',
      '9': 'nine'
   }
   return num.toString().split('').map(n=>(wordEq[n])).join(' ')
}

console.log(num_to_words(744123));
console.log(num_to_words(12309231));
console.log(num_to_words(91238192));
