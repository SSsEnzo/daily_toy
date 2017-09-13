function factors(integer, limit){
  var outcome = [];
  if (integer[integer.length-1] <= limit){
   outcome = [];
 } else {
   for (var i = 0; i < integer.length; i++){
     if (integer[i] <= limit){
       outcome.push(integer[i]);
     }
   }
  }
  return outcome;
}

array = [1, 2, 3, 4, 5];


console.log(factors(array, 6));
