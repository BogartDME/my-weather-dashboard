// var userInput= querySelector(".city-search");
//current day weather request url below
const APIKey = "b01c800a881fa88d5931029a8b88525c";

function currentDay() {
  // user is deciding the city to find the forecast
  const citySearch = document.getElementById("city-search");
  const city = document.getElementById("");
  //user city search is plugged into the cityURL
  const cityURL = `https://api.openweathermap.org/geo/1.0/direct?q=${citySearch.value}&appid=${APIKey}`;

  fetch(cityURL)
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {
      console.log(data);
      get5day(data[0].lat, data[0].lon);
      console.log("DATA", data);

      document.getElementById("current-city").innerHTML = data[0].name;
    });
  }
  
  //this function searches by lat and lon provided by currentDay function and also fills out the info for the five day forecast
  https: function get5day(lat, lon) {
    var requestUrl = `https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&units=imperial&appid=${APIKey}`;
    fetch(requestUrl)
    .then(function (response) {
      return response.json();
    })
    .then(function (response) {
      console.log(response);
      console.log("DATA", response.list);

      document.getElementById("current-icon").innerHTML =
      image = document.querySelector('#current-icon');
      image.src = "http://openweathermap.org/img/wn/" + response.list[0].weather[0].icon + "@2x.png";

      document.getElementById("current-temp").innerHTML =
        "Temp:  " + response.list[0].main.temp + "°";

      document.getElementById("current-wind").innerHTML =
        "Wind:  " + response.list[0].wind.speed + " mph";

      document.getElementById("current-humidity").innerHTML =
        "Humidity:  " + response.list[0].main.humidity;

      
      for (let i = 0; i < 6; i++) {
        const forecastDiv = document.querySelector("#forecast-container")
        const colDiv = document.createElement("div")
        colDiv.classList.add("col-sm-2");
        colDiv.classList.add("justify");
        const cardDiv = document.createElement("div")
        cardDiv.classList.add("card");
        cardDiv.classList.add("text-center");
        cardDiv.innerHTML=("Date:"); //get date working
        colDiv.append(cardDiv);
        const iconImg = document.createElement("img");
        const imgIcon = response.list[i].weather[0].icon;
        iconImg.src = "http://openweathermap.org/img/wn/" + imgIcon + "@2x.png";
        document.body.appendChild(iconImg);
        colDiv.append(iconImg)
        const tempDiv = document.createElement("div")
        tempDiv.classList.add('text-center')
        tempDiv.innerHTML=response.list[i].main.temp;
        colDiv.append(tempDiv)
        const windDiv = document.createElement("div")
        windDiv.classList.add('text-center')
        windDiv.innerHTML=response.list[i].wind.speed;
        colDiv.append(windDiv)
        const humidDiv = document.createElement("div")
        humidDiv.classList.add('text-center')
        humidDiv.innerHTML=response.list[i].main.humidity;
        colDiv.append(humidDiv)
        forecastDiv.append(colDiv)
      
        
      }
    });
}

//create a function for local storage
