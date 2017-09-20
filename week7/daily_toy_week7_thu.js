function findNb(m) {
  var volume = 0;
  var n = 0;
  while(volume < m){
    n++;
    volume = volume + Math.pow(n, 3);
  }
  if (volume === m){
    return n;
  } else {
    return -1;
  }
}

console.log(findNb(91716553919377));

// findNb(1071225) --> 45
// findNb(91716553919377) --> -1
