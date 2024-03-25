// Iterator
/*
let Iterable = "Hello world";
Iterable = [1,2,3,4,5,5,5];
// Symbol.iterator
//console.log(Iterable[Symbol.iterator]);
let iter = Iterable[Symbol.iterator]();

//console.log(iter);

//console.log(iter.next().value);

let names = ["Rahim", "Karim", "Rony"];

// Custom Iterator
function customIterator(arr){
    let i = 0;

   return {
    next: function(){
        return i < arr.length ? {value: arr[i++], done:
        false} : { value: undefined, done: true};
    }
   }

}

let members = customIterator(names);
console.log(members.next());
console.log(iter.next().value);
*/

// Genaretor
function* genfunction(){
    yield 1;
    yield "Rahim";
    yield 4;
    yield "Karim";
    yield "hello world";
}

let iter = genfunction();

console.log(iter);
console.log(iter.next());
console.log(iter.next().value);