// ES6 Constructor
function Person(age, name){
    this.age = age;
    this.name = name;
}
 
Person.prototype.getName = function() {
    console.log(this.name);
}


// ES6 Class
Class Person {
    constructor(age, name) {
        this.age = age;
        this.name = name;   
    }
getName(){
    console.log(this.name);
}
}

let Person1 = new Person(25, "Rahim");

console.log(Person1);
console.log(Person1.getName());