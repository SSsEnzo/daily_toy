function joinArrayOfArrays(arr) {
  array1 = [];
  for (var i = 0; i < arr.length; i++){
    array1 = array1.concat(arr[i]);
  }
  return array1;
}

var output = joinArrayOfArrays([[1, 4], [true, false], ['x', 'y']]);
console.log(output); // --> [1, 4, true, false, 'x', 'y']
