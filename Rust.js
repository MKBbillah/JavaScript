// Rest Operator ...

let fruits = ['apple', 'grape', 'mango', 'jackfruit'];
let [first, second] = fruits

//console.log(first);
//console.log(second);

let person = {
    fname: "Mukarram",
    lname: "Billah",
    dob: "07-11-2001",
}
let {fname, lname}=  person
     
//console.log(fname);
//console.log(lname);

let moreNum = [78,1,2,5,6];

let test = (name, ...Numbers) => { //into parameter Rust
    console.log(name);
    console.log(Numbers);
}

test("Mukarram", ...moreNum); //into function Spread