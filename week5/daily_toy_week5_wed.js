function assertEqual(actual, expected, testName) {
  if (actual === expected){
    return "passed";
  } else {
    return "FAILED " + "[" + testName + "]" + " Expected \"" + expected + "\", but got \"" + actual + "\"";
  }
}
  // Expected "4", but got "5"

function multiplyByTwo(n) {
  return n * 2;
}


var output = multiplyByTwo(2); // returns 4
console.log(assertEqual(output, 4, 'it doubles 2 to 4')); // passed
