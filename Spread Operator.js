// Spread Operator ...

let str = "Mukarram";
let newStr = {...str};

//console.log(newStr);

let fruit1 = {"Apple", "Pine-apple", "Mango"};
let fruit2 = {"Orange", "Grape"};
let newFruit = "Jackfruit";

let newArr = {...fruit1, ...fruit2, newFruit};

//console.log(newArr);

let person = {
    fname: "Mukarram",
    lname: "billah"
}

let newPerson = {...person, dob: "07-11-2001"}
console.log(newPerson);