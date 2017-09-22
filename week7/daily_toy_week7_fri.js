function uniqueInOrder(iterable) {
  var outcome = [];
  if (iterable.length === 0){
    return outcome;
  } else {
    outcome.push(iterable[0]);
    var i = 0;
    while(i < iterable.length - 1){
      if(iterable[i] !== iterable[i+1]){
        outcome.push(iterable[i+1]);
      }
      i++;
    }
    return outcome;
  }
}
console.log(uniqueInOrder([]));


// uniqueInOrder('AAAABBBCCDAABBB') == ['A', 'B', 'C', 'D', 'A', 'B']
// uniqueInOrder('ABBCcAD')         == ['A', 'B', 'C', 'c', 'A', 'D']
// uniqueInOrder([1,2,2,3,3])       == [1,2,3]
