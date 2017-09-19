function order(words){
  var outcome = [];
  var array = words.split(" ");
  for (var i = 1; i < array.length+1; i++){
    for (var j = 0; j < array.length; j++){
      for (var k = 0; k < array[j].length; k++){
        if (i == array[j][k]){
          outcome.push(array[j]);
        }
      }
    }
  }
  return outcome.join(" ");
}

// For an input: "is2 Thi1s T4est 3a" the function should return "Thi1s is2 3a T4est"

console.log(order("is2 Thi1s T4est 3a"));
