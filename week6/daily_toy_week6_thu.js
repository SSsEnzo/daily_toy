function spinWords(str){
  var array = str.split(" ");
  String.prototype.reverseChar = function(){
    return this.split("").reverse().join("");
  }
  for (var k = 0; k < array.length; k++){
    if (array[k].length > 4){
      array[k] = array[k].reverseChar();
    }
  }
  return array.join(" ");
}

// String.prototype.shuffle = function(){
//   var s = this.split("");
//   for (i = 0; i < s.length; i++){
//     var j = Math.floor(Math.random()*(i+3));
//     var tmp = s[i];
//     s[i] = s[j];
//     s[j] = tmp;
//   }
//   return s.join("");
// }

console.log(spinWords( "Hey fellow warriors" )); //=> returns "Hey wollef sroirraw"
spinWords( "This is a test") //=> returns "This is a test"
spinWords( "This is another test" )//=> returns "This is rehtona test"
