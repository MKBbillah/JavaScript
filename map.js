// Map
let myMap = new Map(
    [
        ['first key', 10],
        ['second key', 'Mukarram']
    ]
);

// Add
myMap.set('third key', 'Hello World!');

console.log(myMap.get('first key'));
console.log(myMap.has('first key'));
console.log(myMap.size);

// Iterate

//for (let x of myMap){
  //  console.log(x);
//}

//for (let [x,y] of myMap){
  //  console.log(x, y);
//}

for (let [x,y] of myMap){
    console.log(x, y);
}
