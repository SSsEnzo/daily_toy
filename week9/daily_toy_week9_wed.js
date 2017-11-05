function dirReduc(arr){
  var input = arr.slice();
  var opposite_direction;
  for (var i = 0; i < arr.length; i++){
    if (input[i] === "NORTH"){
      opposite_direction = "SOUTH";
    } else if (input[i] === "SOUTH"){
      opposite_direction = "NORTH";
    } else if (input[i] === "EAST"){
      opposite_direction = "WEST";
    } else if (input[i] === "WEST"){
      opposite_direction = "EAST";
    }
    if(input[i+1] === opposite_direction){
      input.splice(i, 2);
      return dirReduc(input);
    }
  }
  return input;
}



console.log(dirReduc(["NORTH", "SOUTH", "SOUTH", "EAST", "WEST", "NORTH", "WEST"]));

// dirReduc(["NORTH", "SOUTH", "SOUTH", "EAST", "WEST", "NORTH", "WEST"]) => ["WEST"]
// dirReduc(["NORTH", "SOUTH", "SOUTH", "EAST", "WEST", "NORTH"]) => []
