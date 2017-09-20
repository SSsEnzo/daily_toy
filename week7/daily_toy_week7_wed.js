function isValidWalk(walk) {
  var x = 0;
  var y = 0;
  for (var i = 0; i < walk.length; i++){
    if (walk[i] === "n"){
      y++;
    } else if (walk[i] === "s"){
      y--;
    } else if (walk[i] === "e"){
      x++;
    } else if (walk[i] === "w"){
      x--;
    }
  }
  if (walk.length !== 10){
    return false;
  } else {
    if (x === 0 && y === 0){
      return true;
    } else{
      return false;
    }
  }
};
console.log(isValidWalk(['n','s','n','s','n','s','n','s','n','s']));

// ['n','s','n','s','n','s','n','s','n','s'] => true
// ['w','e','w','e','w','e','w','e','w','e','w','e'] => false
// ['w'] => false
// ['n','n','n','s','n','s','n','s','n','s'] => false
