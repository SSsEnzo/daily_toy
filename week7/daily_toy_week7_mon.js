function duplicateEncode(word){
  word = word.toLowerCase();
  var outcome =[];
  for (var i = 0; i < word.length; i++){
    var count = 0;
    for (var k = 0; k < word.length; k++){
      if (word[i] === word[k]){
        count++;
      }
    }
    if (count === 1){
      outcome.push("(");
    } else {
      outcome.push(")");
    }
  }
  return outcome.join("");
}

"din" => "((("
"recede" => "()()()"
"Success" => ")())())"
"(( @" => "))(("
