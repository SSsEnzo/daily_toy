function snail(array) {
  var outcome = [];
  var top = 0;
  var right = array[0].length - 1;
  var bottom = array.length - 1;
  var left = 0;
  var array_length = 0;
  for (var i = 0; i < array.length; i++){
    array_length = array_length + array[i].length;
  }
  while(outcome.length < array_length){
    for (var j = left; j < right + 1; j++){
      outcome.push(array[top][j]);
    }
    top++;
    for (var j = top; j < bottom + 1; j++){
      outcome.push(array[j][right]);
    }
    right--;
    for (var j = right; j > left - 1; j--){
      outcome.push(array[bottom][j]);
    }
    bottom--;
    for (var j = bottom; j > top -1; j--){
      outcome.push(array[j][left]);
    }
    left++;
  }
  return outcome;
}

array1 = [[1,2,3],[4,5,6],[7,8,9]];

array2 = [[1,2,3],
         [8,9,4],
         [7,6,5]];

console.log(snail(array2));


// problem -- not sure... 100 random test didn't go through.





// array = [[1,2,3],
//          [4,5,6],
//          [7,8,9]]
// snail(array) #=> [1,2,3,6,9,8,7,4,5]
//
// array = [[1,2,3],
//          [8,9,4],
//          [7,6,5]]
// snail(array) #=> [1,2,3,4,5,6,7,8,9]
