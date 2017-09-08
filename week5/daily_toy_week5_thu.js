function assertArraysEqual(actual, expected, testName) {
  if (actual.length !== expected.length){
    return "FAILED " + "[" + testName + "]" + " Expected \"" + expected + "\", but got \"" + actual + "\"";
  }
  for (var i = 0; i < actual.length; i++){
    if (actual[i] !== expected[i]){
      return "FAILED " + "[" + testName + "]" + " Expected \"" + expected + "\", but got \"" + actual + "\"";
    } else {
      return "passed";
    }
  }
    // return "FAILED " + "[" + testName + "]" + " Expected \"" + expected + "\", but got \"" + actual + "\"";
}





// var expected = [1, 1, 2, 3, 5, 8, 13];
// var actual = generateFirstNFibonaccis(7);
// assertArraysEqual(actual, expected, 'generates first 7 Fibonacci numbers'); // FAILED [generates first 7 Fibonacci numbers] Expected "1, 1, 2, 3, 5, 8, 13", but got "2, 3, 5, 8, 13, 21, 34"




var expected = ['b', 'r', 'o', 'k', 'e', 'n'];
var actual = 'broken'.split('');
console.log(assertArraysEqual(actual, expected, 'splits string into array of characters')); // passed
