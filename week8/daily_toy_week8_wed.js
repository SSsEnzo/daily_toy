function to1D(x, y, size) {
  var array_2D = [];
  var obj = {};
  var n = 0;
  for (var height = 0; height < size[1]; height++){
    for (var width = 0; width < size[0]; width++){
      obj[n] = [width, height];
      if (x >= size[0] || y >= size[1]){
        return NaN;
      } else if (width === x && height === y) {
        return n;
      }
      n++;
    }
    array_2D.push(obj);
    obj = {};
  }
}

function to2D(n, size) {
  var array_2D = [];
  var obj = {};
  var count = 0;
  for (var height = 0; height < size[1]; height++){
    for (var width = 0; width < size[0]; width++){
      obj[count] = [width, height];
      if (n > size[0]*size[1]-1){
        return NaN;
      } else if (count === n) {
        return [width, height];
      }
      count++;
    }
    array_2D.push(obj);
    obj = {};
  }
}


console.log(to1D(4, 4, [5,5]));

// to1D(x, y, size):
//   --returns index in 1D space
// to2D(n, size):
//   --returns x and y in 2D space
// 1D array: [0, 1, 2, 3, 4, 5, 6, 7, 8]
// 2D array: [[0 -> [0,0], 1 -> [1,0], 2 -> [2,0]],
//            [3 -> [0,1], 4 -> [1,1], 5 -> [2,1]],
//            [6 -> [0,2], 7 -> [1,2], 8 -> [2,2]]]
//
// to_1D(0, 0, [3,3]) returns 0
// to_1D(1, 1, [3,3]) returns 4
// to_1D(2, 2, [3,3]) returns 8
// to_2D(5, [3,3]) returns [2,1]
// to_2D(3, [3,3]) returns [0,1]
