function isEvenWithoutModulo(num) {
  if ((parseInt(num/2)*2) !== num){
    return false;
  } else{
    return true;
  }
}


var output = isEvenWithoutModulo(8);
console.log(output); // --> true
