var num_to_word = function (num) {
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
