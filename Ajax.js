// Asynchronous Programming
// AJAX - Asynchronous JavaScript And XML
// Get data without loading the page

document.getElementById('get_data').addEventListener('click',
loadData);

function loadData(){
  // Create XHR Object (Xml Https Request)
  let xhr = new XMLHttpRequest();
  
  // Open
  xhr.open('GET', 'data.txt', true);

  xhr.onload = function(){
    // HTTP statuses
    // 200: "OK"
    // 403: "Forbidden"
    // 404: "Not Found"
    if (this.status === 200){
      document.getElementById('output').innerHTML = '<h4?>${this.responseText}</h4?'
         console.log(this.status);
         console.log(this.responseText);
    }
  }
  xhr.send();
  console.log(xhr);

  //console.log("Button Clicked");
}



