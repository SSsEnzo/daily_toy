function average(numbers) {
  var outcome = 0;
  // for(var i = 0; i < numbers.length; i++){
  //   outcome + numbers[i];
  // }
  outcome = sum(numbers)/numbers.length;
  return outcome;
}


function sum(numbers) {
  var outcome = 0;
  for (var i = 0; i < numbers.length; i++){
    outcome = outcome + numbers[i];
  }
  return outcome;
}

array1 = [1, 2, 3, 4, 5]

console.log(average(array1));
