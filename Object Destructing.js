// Object Destructing

let person = {
    firstName: "Mukarram",
    LastName: "Billah",
    dob: "07/11/2001"
}

// let fname = person.firstName,
// lname = person.lastName,
// dob = person.dob;
//let { firstName : fname, LastName, dob } = person;
//console.log(fname, lastName, dob);

function display({ firstName, lastName, dob}) {
    console.log(firstName, lastName, dob);
}

display(person);