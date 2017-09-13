function iqTest(numbers){
  var array = numbers.split(" ");
  var count_odd = 0;
  var count_even = 0;
  var count = 0;
  var outcome;
  for (var i = 0; i < array.length; i++){
    if (array[i] % 2 === 0){
      count_even++;
    } else {
      count_odd++;
    }
  }
  if (count_even === 1){
    for (var i = 0; i < array.length; i++){
      count++;
      if (array[i] % 2 === 0){
        diff = array[i];
        break;
      }
    }
  } else if (count_odd === 1){
    for (var i = 0; i < array.length; i++){
      count++;
      if (array[i] % 2 !== 0){
        diff = array[i];
        break;
      }
    }
  }
  return outcom = count;
}

console.log(iqTest("2 4 7 8 10"));//=> 3 // Third number is odd, while the rest of the numbers are even

console.log(iqTest("1 2 1 1")); //=> 2 // Second number is even, while the rest of the numbers are odd
