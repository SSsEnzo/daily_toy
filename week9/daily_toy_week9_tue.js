function pattern(n){
  if (typeof(n) === "number"){
    if (n > 9){
      var output = [];
      for (var i = 0; i < n; i++){
        output.push(n.toString().split("").pop());
      }
      console.log(output.join(""));
      return pattern(output.join(""));
    } else {
      var output = [];
      for (var i = 0; i < n; i++){
        output.push(n);
      }
      console.log(output.join(""));
      return pattern(output.join(""));
    }
  } else {
    var input = n.split("");
    for (var j = 1; j < input.length; j++){
      if(input[j] === input[j-1] && input[j] !== "0"){
        for (var k = j; k < input.length; k++){
          input[k] = input[j-1] - 1;
        }
        console.log(input.join(""));
        return pattern(input.join(""));
      } else if (input[j] === input[j-1] && input[j] === "0"){
        for (var k = j; k < input.length; k++){
          input[k] = "9";
        }
        console.log(input.join(""));
        return pattern(input.join(""));
      }
    }
  }
}

pattern(17);

// problem -- the answer is not set. it is just using console to show the answer.



// pattern(8):
// 88888888
// 87777777
// 87666666
// 87655555
// 87654444
// 87654333
// 87654322
// 87654321
//
// pattern(17):
// 77777777777777777
// 76666666666666666
// 76555555555555555
// 76544444444444444
// 76543333333333333
// 76543222222222222
// 76543211111111111
// 76543210000000000
// 76543210999999999
// 76543210988888888
// 76543210987777777
// 76543210987666666
// 76543210987655555
// 76543210987654444
// 76543210987654333
// 76543210987654322
// 76543210987654321
