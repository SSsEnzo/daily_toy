function findLacedShoes(inventory) {
  var output = [];
  for (var i = 0; i < inventory.length; i++){
    var shoes_list = inventory[i]["shoes"];
    for (var j = 0; j < shoes_list.length; j++){
      if (shoes_list[j]["name"].indexOf("lace") >= 0){
        var object1 = {};
        var nameWords_array = shoes_list[j]["name"].split(" ");
        var targetWordIndex_number
        for (var k = 0; k < nameWords_array.length; k++){
          if (nameWords_array[k].indexOf("lace") >= 0){
            targetWordIndex_number = k;
          }
        }
        object1["nameWords"] = nameWords_array;
        object1["targetWordIndex"] = targetWordIndex_number;
        output.push(object1);
      }
    }
  }
  return output;
}

var inventory1 = [
  {
    name: 'Brunello Cucinelli',
    shoes: [
      {name: 'tasselled black low-top lace-up', price: 1000},
      {name: 'tasselled green low-top lace-up', price: 1100},
      {name: 'plain beige suede moccasin', price: 950},
      {name: 'plain olive suede moccasin', price: 1050}
    ]
  },
  {
    name: 'Gucci',
    shoes: [
      {name: 'red leather laced sneakers', price: 800},
      {name: 'black leather laced sneakers', price: 900}
    ]
  }
];


console.log(findLacedShoes(inventory1));


// The output format should be structured like this:
// [
//   {
//     "nameWords": [
//       "tasselled",
//       "black",
//       "low-top",
//       "lace-up"
//     ],
//     "targetWordIndex": 3
//   },
//   {
//     "nameWords": [
//       "tasselled",
//       "green",
//       "low-top",
//       "lace-up"
//     ],
//     "targetWordIndex": 3
//   },
//   {
//     "nameWords": [
//       "red",
//       "leather",
//       "laced",
//       "sneakers"
//     ],
//     "targetWordIndex": 2
//   },
//   {
//     "nameWords": [
//       "black",
//       "leather",
//       "laced",
//       "sneakers"
//     ],
//     "targetWordIndex": 2
//   }
// ]
