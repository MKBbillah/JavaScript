// Set
let myset = new Set([1,2,3,4]);

// Add
myset.add("Hello");
myset.add(2);

// Delete
myset.delete(4);

// Check
//console.log(myset.has(4));
// Size
//console.log(myset.size);

// Iterating Sets

//for (x of myset.keys())
//for (x of myset.values())

//for (x of myset.entries()){
  //  console.log(x);
//}

//let iter = myset.entries();
// consoloe.log(iter);
//console.log(iter.next());

//for ([x] of myset.entries()){
  //  console.log(x);
//}


let iter = [`myset.entries()`];

//console.log(iter);
myset.forEach(value => console.log(value));
