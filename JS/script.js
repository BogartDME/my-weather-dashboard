//create fetch for weather API
// var userInput= querySelector(".city-search");
//current day weather request url below 
const requestUrl = "https://api.openweathermap.org/data/2.5/forecast?lat={lat}&lon={lon}&appid={APIkey}";
const APIKey = "12341234123412341234123412341234";
// var responseText = document.getElementById('response-text');
const citySearch = document.getElementById("city-search");

function get5day(requestUrl) {
  fetch(requestUrl + APIKey)
    .then(function (response) {
      console.log(response);
      if (response.status === 200) {
      }
      return response.json();
  });
}

get5day(requestUrl);



// element.addEventListener("click", myFunction);

// function myFunction() {
//   document.getElementById("demo").innerHTML = "Hello World";

//   document.getElementById(".search").addEventListener("click", userInput);
// }

// 5 day call api.openweathermap.org/data/2.5/forecast?lat={lat}&lon={lon}&appid={b01c800a881fa88d5931029a8b88525c}

//call API for current weather

//call API for five day forecast

//create a function for local storage

