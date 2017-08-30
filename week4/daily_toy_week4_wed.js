function countAllCharacters(str) {
  var array1 = {};
  for (var i = 0; i < str.length; i++){
    if (array1[str[i]] === undefined){
      array1[str[i]] = 1;
    } else{
      array1[str[i]]++;
    }
  }
  return array1;
}

var output = countAllCharacters('banana');
console.log(output); // --> {b: 1, a: 3, n: 2}
