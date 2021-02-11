const options = { weekday: 'long', day: 'numeric', month: 'long', year: 'numeric' };
document.getElementById('currentday').textContent = new Date().toLocaleDateString('en-US', options);

document.getElementById("currentyear").textContent = new Date().getFullYear();

// toggle menu
function toggleMenu() {
    document.getElementsByClassName("navigation")[0].classList.toggle("responsive");
}


// Hide the banner, unless it's Fridays
function showBanner() {
    if (weekday == 'Friday') {
        document
            .getElementsByClassName("show-banner")[0]
            .classList.toggle("hide-banner");
    }
};



// Current weather data pulled from OpenWeather API
const apiURL = 'https://api.openweathermap.org/data/2.5/weather?id=5604473&APPID=98c59c88abbe5bce05c67468e18ea4e0&units=imperial';

fetch(apiURL)
  .then((response) => response.json())
  .then((jsObject) => {
      console.log(jsObject);

    // Current condition
    document.getElementById("curr-condi").textContent = jsObject.weather[0].main;

    // Current temperature
    let temp = Math.round(jsObject.main.temp);
    document.getElementById("curr-temp").textContent = temp;

    // Current humidity
    document.getElementById("humidity").textContent = jsObject.main.humidity;

    // Current wind speed
    let windSpeed = Math.round(jsObject.wind.speed);
    document.getElementById("wind-speed").textContent = windSpeed;

    // Wind Chill Factor
    let windFactor = Math.pow(windSpeed, 0.16);
    let windChill = Math.round(35.74 + (0.6215 * temp) - 
                    (35.75 * windFactor) + 
                    (0.4275 * temp * windFactor));;

    if (temp <= 50 && windSpeed >= 3) {
      document.getElementById("wind-chill").innerHTML = windChill;
    }
    else {
      document.getElementById("wind-chi").innerHTML = "N/A";
    }   
  
  });



  // Weather forecast data pulled from OpenWeather API
  const forecastURL = 'https://api.openweathermap.org/data/2.5/forecast?id=5604473&appid=98c59c88abbe5bce05c67468e18ea4e0&units=imperial';

  fetch(forecastURL)
    .then((response) => response.json())
    .then((jsObject) => {
        console.log(jsObject);

    let i = 1;
    let j = 1;

    // pull only first 5 records at 18:00:00
    while (i < 40 && j < 6)
    {
      let time = jsObject.list[i].dt_txt;
      if (time.includes('18:00:00')) {

        // Date in short format
        let date = new Date(time);
        let weekdayOption = { weekday: 'short' };
        let weekday = date.toLocaleDateString('en-US', weekdayOption);
        let dayId = 'day' + j;
        document.getElementById(dayId).textContent = weekday;

        // Weather icon
        let icon = 'https://openweathermap.org/img/w/' + jsObject.list[i].weather[0].icon + '.png';
        let description = jsObject.list[i].weather[0].description;
        let iconId = 'icon' + j;
        document.getElementById(iconId).setAttribute('src', icon); 
        document.getElementById(iconId).setAttribute('alt', description); 

        // Temperature
        let temp = Math.round(jsObject.list[i].main.temp);
        let tempId = 'temp' + j;
        document.getElementById(tempId).textContent = temp + '°F';

        j++;
      }
    
      i++;
    }

  });



    //Town events data pulled from JSON file
const requestURL = 'https://byui-cit230.github.io/weather/data/towndata.json';

fetch(requestURL)
  .then(function (response) {
    return response.json();
  })
  
  .then(function (jsonObject) {
    const towns = jsonObject['towns'];

    for (let i = 0; i < towns.length; i++ ) {
      if (towns[i].name == "Preston") {
        
        // Create an ordered list
        let list = document.createElement('ol'); 

        // Create list item for each event
        for (let j = 0; j < towns[i].events.length; j++) {
          let item = document.createElement('li');
          item.textContent = towns[i].events[j];
          list.appendChild(item);
        } 

        document.querySelector('div.events').appendChild(list); 
      } 
    } 
  });