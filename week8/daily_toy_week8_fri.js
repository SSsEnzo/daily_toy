function isDivisibleBy6(s) {
  var input = [];
  var output = [];
  var k = 0;
  for (var i = 0; i < s.length; i++){
    if (s[i] === "*"){
      k = i;
    }
  }
  for (var j = 0; j < 10; j++){
    input.push(s.substr(0, k) + j + s.substr(k+1, s.length));
  }
  for (var j = 0; j < input.length; j++){
    if (input[j] % 6 == 0){
      output.push(input[j]);
    }
  }
  return output;
}

console.log(isDivisibleBy6("935676215667965700000*537792653688654600000"));


// problem -- repl.it the answer might be wrong?? even the number is not able to divide by 6, it says the answer should be the number.



// For s = "1*0", the output should be
// ["120", "150", "180"]
//
// For s = "*1", the output should be
// []
//
// For s = "1234567890123456789012345678*0", the output should be
// [
// "123456789012345678901234567800",
// "123456789012345678901234567830",
// "123456789012345678901234567860",
// "123456789012345678901234567890"]
