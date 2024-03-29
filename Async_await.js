//console.log(fetch('http://api.icndb.com/jokes/random/5000'))
fetch('http://api.icndb.com/jokes/random/5000')
.then(response => console.log(response.json()))
.then(data => console.log(data))

// async await

async function getJokes(){
     let response = await fetch('http://api.icndb.com/jokes/random/5000')
      //return response;
      let data = await response.json();
      return data;
     //return "All the Jokes";
}
getJokes().then(jokes => console.log(jokes));
console.log(getJokes());
getJokes()
     .then(res=>{
        console.log(res);
     })