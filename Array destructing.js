//Array destructing

let fruits = ["Apple", "Mango", "Grape", "Orage"];
/*
let fruit1 = fruits[0];
let fruit2 = fruits[1];
let fruit3 = fruits[2];
*/
let[fruit1, ,fruit3] = fruits;

console.log(fruit1, fruit2, fruit3);