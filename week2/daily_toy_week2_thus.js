function getAllWords(str) {
  var stringArray = str.split(" ");
  if(str.length === 0){
    return [];
  }
  return stringArray;
}
console.log(getAllWords(""));
