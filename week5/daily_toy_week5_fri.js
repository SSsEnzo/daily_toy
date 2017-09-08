function renderInventory(inventory) {
  // your code here
  // hint: before you just dive into coding...
  // it's a good idea to sketch out a skeleton like you've been seeing earlier in this module...
  var designers = [];
  var expected = {designers};
  for(var i = 0; i < inventory.length; i++){
    var total = 0;
    var average;
    var obj = {};
    for(var j = 0; j < inventory[i].shoes.length; j++){
      total = total + inventory[i].shoes[j].price;
    }
    average = total/(inventory[i].shoes.length);
    obj["name"] = inventory[i].name;
    obj["averagePrice"] = average;
    designers.push(obj);
  }
  return expected;
}


var inventory = [
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

console.log(renderInventory(inventory));
//
//
// var expected = {
//   'designers': [
//     {
//       'name': 'Brunello Cucinelli',
//       'averagePrice': 1025
//     },
//     {
//       'name': 'Gucci',
//       'averagePrice': 850
//     }
//   ]
// };
