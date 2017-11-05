function validParentheses(parens) {
  var count = 0;
  for (var i = 0; i < parens.length; i++){
    if (parens[i] === "("){
      count++;
    } else if (parens[i] === ")"){
      count--;
    }
    if (count < 0){
      return false;
    }
  }
  if (count === 0){
    return true;
  } else {
    return false;
  }
}

console.log(validParentheses( ")(()))" ));

// validParentheses( "()" ) => returns true
// validParentheses( ")(()))" ) => returns false
// validParentheses( "(" ) => returns false
// validParentheses( "(())((()())())" ) => returns true
