// Spread Operator ...

//let numbers = {23, 1, 0, -1};

//console.log(Math.max(...numbers));

let person = {"Mukarram", "billah"}

let test = (fname, lname) => {
    console.log('Hello $(fname) $(lname)')
}

test(person[0], person[1]);