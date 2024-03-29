// var userInput= querySelector(".city-search");
//current day weather request url below
const APIKey = "b01c800a881fa88d5931029a8b88525c";
const searchButton = document.getElementById("searchBtn");
const citySearch = document.getElementById("city-search");
const forecastDiv = document.querySelector("#forecast-container")
// const el = document.getElementById("searchBtn"); 
// console.log(el);
// el.click();

function currentDay() {
  // user is deciding the city to find the forecast
  // const citySearch = document.getElementById("city-search");
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

      document.getElementById("current-date").innerHTML =
      response.list[0].dt_txt
        

      document.getElementById("current-icon").innerHTML =
      image = document.querySelector('#current-icon');
      image.src = "http://openweathermap.org/img/wn/" + response.list[0].weather[0].icon + "@2x.png";

      document.getElementById("current-description").innerHTML =
      response.list[0].weather[0].description

      document.getElementById("current-temp").innerHTML =
        "Temp:  " + response.list[0].main.temp + "°";

      document.getElementById("current-wind").innerHTML =
        "Wind:  " + response.list[0].wind.speed + " mph";

      document.getElementById("current-humidity").innerHTML =
        "Humidity:  " + response.list[0].main.humidity;

      $('#card').remove();

      for (let i = 0; i < response.list.length; i++) {
        if (i ==7 || i == 15 || i == 23 || i == 31 || i == 39) {
        let weekday = response.list[i].dt_txt.split(" ")
        console.log(weekday);
        const colDiv = document.createElement("div")
        colDiv.classList.add("col-sm-2");
        colDiv.classList.add("justify");

        const cardDiv = document.createElement("div")
        cardDiv.classList.add("card");
        cardDiv.classList.add("text-center");
        cardDiv.innerHTML=(weekday[0]); //get date working
        colDiv.remove(cardDiv);
        colDiv.append(cardDiv);


        const iconImg = document.createElement("img")
        iconImg.classList.add("icon");
        const imgIcon = response.list[i].weather[0].icon;
        iconImg.src = "http://openweathermap.org/img/wn/" + imgIcon + "@2x.png";
        document.body.appendChild(iconImg);
        colDiv.append(iconImg)

        const descriptDiv = document.createElement("div")
        descriptDiv.innerHTML= response.list[i].weather[0].description;
        descriptDiv.classList.add('descriptDiv')
        colDiv.append(descriptDiv)

        const tempDiv = document.createElement("div")
        tempDiv.classList.add('fiveDayDivs')
        tempDiv.innerHTML= "Temp: " + response.list[i].main.temp + "°";
        colDiv.append(tempDiv)

        const windDiv = document.createElement("div")
        windDiv.classList.add('fiveDayDivs')
        windDiv.innerHTML="Wind: " + response.list[i].wind.speed + " mph";
        colDiv.append(windDiv)

        const humidDiv = document.createElement("div")
        humidDiv.classList.add('fiveDayDivs')
        humidDiv.innerHTML= "Humidity: " + response.list[i].main.humidity;
        colDiv.append(humidDiv)

        forecastDiv.append(colDiv)
    
        
      }}
    });
}

//create a function for local storage
function saveLastCity(){
  city = citySearch.value;
  let cities = JSON.parse(localStorage.getItem('city')) || [];
  cities.push(city);
  localStorage.setItem("city", JSON.stringify(cities));
  renderLastCity();
}

// changing your renderLastCity function to contain a for loop which iterates over the city array and creates an li for each one
function renderLastCity(){
  let cities = JSON.parse(localStorage.getItem("city"))||[];
  let cityList = ''
  for (let i = 0; i < cities.length; i++) {
      cityList += `<button class=histBtns>${cities[i]}</button>`
  };
  document.querySelector('.search-history').innerHTML = cityList;
}

searchButton.addEventListener("click", function(event) {
  $("div").remove(".card");
  event.preventDefault();
  saveLastCity();
  $(forecastDiv).empty();
});

renderLastCity();
//   for (let i = 0; i < localStorage.length; i++) {
//     const key = localStorage.key(i)
//     console.log(`${key}: ${localStorage.getItem(key)}`)
//   }
// }
