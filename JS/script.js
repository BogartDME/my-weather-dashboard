//create fetch for weather API
// var userInput= querySelector(".city-search");
//current day weather request url below 
const APIKey = "b01c800a881fa88d5931029a8b88525c";
const latLon = 
const requestUrl = `https://api.openweathermap.org/data/2.5/forecast?lat=33.44&lon=-94.04&appid=${APIKey}`;

// var responseText = document.getElementById('response-text');
const citySearch = document.getElementById("city-search");

function latLon()



function get5day(requestUrl) {
  fetch(requestUrl)
    .then(function (response) {
      console.log(response);
      if (response.status === 200) {
      }
      return response.json();
  }).then(function (data){ 
    console.log(data)
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

