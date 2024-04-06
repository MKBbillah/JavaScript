// Fetch API
// Fetch API Uses Javascript Promises

document.getElementById("get_data").
addEventListener('click', getData);

function getData(){
      fetch('https://api.icndb.com/jokes/random')
      .then(function(res){
        console.log(res.json);
      })
      .then(function(data){
        console.log(data);
      })
      .catch(function(err){
        console.log(err);
      })
    //console.log("Clicked");
}
