// promises
// Successful -> resolve
// Failed -> reject

let pron = new Promise((resolve, reject) => {
    let a; 
    setttimeout(()=>{
     a = 1 + 1;    
    },4000);

    if (a == 2) {
        //resolve(value?: any): void
        resolve('Success');
    } else {
        reject('Failed');
    }
})

console.log("I am after Promise");
// .than .catch

pron.than((message) => {
    console.log("I am from than " + message);
}).catch((message) =>  {
    console.log("I am from catch" + message);
})

// Example : Image file