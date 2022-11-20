//create fetch for weather API
// var userInput= querySelector(".city-search");
var requestUrl = "https://api.openweathermap.org/data/2.5/forecast?q=Philadelphia&appid=b01c800a881fa88d5931029a8b88525c"

var responseText = document.getElementById('response-text');

function getApi(requestUrl) {
  fetch(requestUrl)
    .then(function (response) {
      console.log(response);
      if (response.status === 200) {
      }
      return response.json();
  });
}

getApi(requestUrl);

// element.addEventListener("click", myFunction);

// function myFunction() {
//   document.getElementById("demo").innerHTML = "Hello World";

//   document.getElementById(".search").addEventListener("click", userInput);
// }


// fetch('api.openweathermap.org/data/2.5/forecast?q={Philadelphia}&appid=b01c800a881fa88d5931029a8b88525c')
//   .then((response) => response.json())
//   .then((data) => console.log(data));

// 5 day call api.openweathermap.org/data/2.5/forecast?lat={lat}&lon={lon}&appid={b01c800a881fa88d5931029a8b88525c}

//call API for current weather

//call API for five day forecast
//create a function for local storage


// api.openweathermap.org/data/2.5/forecast?lat={lat}&lon={lon}&appid={b01c800a881fa88d5931029a8b88525c}