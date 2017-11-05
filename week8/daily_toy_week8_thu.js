function atomicNumber(num){
  var outcome = [];
  var n = 1;
  while (num > 0){
    var electrons = 2 * (Math.pow(n, 2));
    console.log(electrons);
    if (num > electrons){
      num = num - electrons;
      outcome.push(electrons);
    } else if (num <= electrons){
      outcome.push(num);
      num = 0;
    }
    n++;
  }
  return outcome;
}

console.log(atomicNumber(47));


// You are a mad scientist and you decided to play with electron distribution among atom's shells.
// You know that basic idea of electron distribution is that electrons should fill shell
// untill it's holding the maximum number of electrons.
//
// Rules:
// Maximum number of electrons in a shield is distributed with a rule of 2n^2 (n being position of a shield).
// For example, maximum number of electrons in 3rd shield is 2*3^2 = 18.
// Electrons should fill the lowest level shell first.
// If the electrons have completely filled the lowest level shell,
// the other unoccupied electrons will fill the higher level shell and so on.
//
// Ex.:   atomicNumber(1); should return [1]
//        atomicNumber(10); should return [2, 8]
//        atomicNumber(11); should return [2, 8, 1]
//        atomicNumber(47); should return [2, 8, 18, 19]
