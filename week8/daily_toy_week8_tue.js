function find01(arr){
  var x = 0; //count for 0 surrounded by 1
  var y = 0; //count for 1 surrounded by 0
  for (var i = 1; i < arr.length - 1; i++){
    for (var j = 0; j < arr[i].length; j++){
      if (arr[i][j] === 0){
        if (arr[i-1][j] === 1 && arr[i+1][j] === 1 && arr[i][j-1] === 1 && arr[i][j+1] === 1){
          x++;
        }
      } else if (arr[i][j] === 1){
        if (arr[i-1][j] === 0 && arr[i+1][j] === 0 && arr[i][j-1] === 0 && arr[i][j+1] === 0){
          y++;
        }
      }
    }
  }
  return x + y;
}



array1 = [
[0,1,1,0,1,1,0,1,0],
[1,0,1,0,1,1,0,1,0],
[0,1,1,0,0,1,0,1,0],
[0,0,1,0,1,0,1,1,0],
[0,0,1,0,0,1,0,1,0],
[0,0,1,0,1,0,0,1,0],
[0,0,1,0,0,1,0,1,0]
];

console.log(find01(array1));

//
// There are three 1 surrounded by 0(the x in the array):
// [
// [0,1,1,0,1,1,0,1,0],
// [1,0,1,0,1,1,0,1,0],
// [0,1,1,0,0,1,0,1,0],
// [0,0,1,0,x,0,1,1,0],
// [0,0,1,0,0,x,0,1,0],
// [0,0,1,0,x,0,0,1,0],
// [0,0,1,0,0,1,0,1,0]
// ]
//
// There are two 0 surrounded by 1(the x in the array):
// [
// [0,1,1,0,1,1,0,1,0],
// [1,x,1,0,1,1,0,1,0],
// [0,1,1,0,0,1,0,1,0],
// [0,0,1,0,1,x,1,1,0],
// [0,0,1,0,0,1,0,1,0],
// [0,0,1,0,1,0,0,1,0],
// [0,0,1,0,0,1,0,1,0]
// ]
//
// So we need return a number 5 (three 1 + two 0)
