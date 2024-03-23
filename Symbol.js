// Symbols
let a = Symbol()
//let b = Symbol()
let person = {
    name: "Mukarram",
    age: 21,
    [a]: "Hello World!"
}

console.log(person);
console.log(object.getOwnPropertyNames(person));
console.log(object.getOwnPropertySymbols(Person));
console.log(object.keys(person));
console.log(JSON.stringify(person));

for (x in person){
    console.log(x);
}

let sym1 = Symbol();
let sym2 = Symbol();

console.log(sym1 == sym2);

console.log(sym1);

//console.log(a == b)