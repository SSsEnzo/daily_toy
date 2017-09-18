function factors(integer, limit){
  var outcome = [];
  if (integer < limit){
    return outcome;
  } else {
    for (var i = limit; i <= integer; i++){
      if (integer % i === 0){
        outcome.push(i);
      }
    }
    return outcome;
  }
}




console.log(factors(30, 6));
