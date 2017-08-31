function select(arr, obj) {
  var array1 = {};
  for (var i = 0; i < arr.length; i++){
    for (var key in obj){
      // if (key == arr[i]){
      //   array1[key] = obj[key];
      // }
      if (obj.hasOwnProperty(arr[i])) {
        array1[arr[i]] = obj[arr[i]];
      }
    }
  }
  return array1;
  return array1;
}


var arr = ['a', 'c', 'e'];
var obj = {
  a: 1,
  b: 2,
  c: 3,
  d: 4
};
var output = select(arr, obj);
console.log(output); // --> { a: 1, c: 3 }
