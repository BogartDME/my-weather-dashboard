// var userInput= querySelector(".city-search");
//current day weather request url below
const APIKey = "b01c800a881fa88d5931029a8b88525c";

function currentDay() 
{
  // user is deciding the city to find the forecast
  const citySearch = document.getElementById("city-search");
  const city = document.getElementById("");
  //user city search is plugged into the cityURL
  const cityURL = `https://api.openweathermap.org/geo/1.0/direct?q=${citySearch.value}&appid=${APIKey}`;

  fetch(cityURL)
    .then(function (response) 
    {
      return response.json();
    })
    .then(function (data) 
    {
      
      console.log(data);
      get5day(data[0].lat, data[0].lon)
      console.log("DATA", data);
      
      
      document.getElementById("current-city").innerHTML = data[0].name;

      
      // document.getElementById("current-date").innerHTML = data[0].;
      
      
    })
  }
  
  
  // document.getElementById("current-city").innerHTML =
  // "Temp:" + Number(data.list[i].Local_names.name);
  
  // document.getElementById("current-date").innerHTML =
  // "Temp:" + Number(response.list[i].main.temp);
  
  // document.getElementById("current-temp").innerHTML =
  // "Temp:" + Number(response.list[i].main.temp);
  
  // document.getElementById("current-wind").innerHTML =
  // "Wind:" + Number(response.list[i].wind.speed);
  
  // document.getElementById("current-humidity").innerHTML =
  // "Humidity:" + Number(response.list[i].main.humidity);
  
  
  
  https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&units=imperial&appid=${APIKey}
  
  //this function searches by lat and lon provided by currentDay function and also fills out the info for the five day forecast
  function get5day(lat, lon) 
  {
    var requestUrl = `https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&units=imperial&appid=${APIKey}`;
    fetch(requestUrl)
    .then(function (response) 
    {
      return response.json();
    })
    .then(function (response) 
    {
      console.log(response);
      console.log("DATA", response.list);
      document.getElementById("current-temp").innerHTML = "Temp:  " + response.list[0].main.temp + "°";
      
      document.getElementById("current-wind").innerHTML = "Wind:  " + response.list[0].wind.speed + " mph";
      
      document.getElementById("current-humidity").innerHTML = "Humidity:  " + response.list[0].main.humidity;
      // let mainImg = document.querySelector(".main-icon");
      //         // let mainIcon = forecast[0].weather[0].icon;
      //         mainImg.innerHTML = `<img src="http://openweathermap.org/img/wn/${mainIcon}@2x.png">`;
      //         console.log(mainIcon); 
      
      for (let i = 1; i < 6; i++) 
      {
        let iconImg = document.querySelector(".icon");
        let icon = response.weather[0].icon;
        console.log(response);
        iconImg.innerHTML = `<img src="http://openweathermap.org/img/wn/${icon}@2x.png">`;
              console.log(icon); 
              
              // document.querySelector(".icon").innerHTML;
              // response.list[i].weather[0].icon;
            }

            for (let i = 1; i < 6; i++) 
            {
              document.querySelector(".day-temp-" + i).innerHTML =
              "Temp:  " + Number(response.list[i].main.temp) + "°";
            }

            for (i = 1; i < 6; i++) 
            {
              document.querySelector(".day-wind-" + i).innerHTML =
              "Wind:  " + Number(response.list[i].wind.speed) + " mph";
            }
            for (i = 1; i < 6; i++) 
            {
              document.querySelector(".day-humidity-" + i).innerHTML =
              "Humidity:  " + Number(response.list[i].main.humidity);
            }
            
            
          });
        }
        
        
        // element.addEventListener("click", myFunction);
        
        // function myFunction() {
          //   document.getElementById("demo").innerHTML = "Hello World";

//   document.getElementById(".search").addEventListener("click", userInput);
// }

// 5 day call api.openweathermap.org/data/2.5/forecast?lat={lat}&lon={lon}&appid={b01c800a881fa88d5931029a8b88525c}

// call API for current weather

//call API for five day forecast

//create a function for local storage
