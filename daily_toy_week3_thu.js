function addToFrontOfNew(arr, element) {
  var array1 = [];
    array1.push(element);
  for (var i=0; i < arr.length; i++ ) {
    array1.push(arr[i]);
  }
  return array1;
}



var input = [1, 2];
var output = addToFrontOfNew(input, 3);
console.log(output); // --> [3, 1, 2];
console.log(input); //--> [1, 2]
