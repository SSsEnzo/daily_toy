function getIndexOf(char, str) {
  var count = 0;
  var placeHolder = str[0];
  for(var i = 0; i < str.length; i++){
    if(str[i] === char){
      count++;
    }
  }
    if(count === 0){
      return -1;
    }else{
     for(var j = 0; j < str.length; j++){
       if(str[j] === char){
       return j;
       }
    }
  }
};



var output = getIndexOf('a', 'I am a hacker');
console.log(output); // --> 2
