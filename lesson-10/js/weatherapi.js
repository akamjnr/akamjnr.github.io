const apiURL = 'https://api.openweathermap.org/data/2.5/weather?id=5604473&APPID=98c59c88abbe5bce05c67468e18ea4e0&units=imperial';

  fetch(apiURL)
  .then((response) => response.json())
  .then((jsObject) => {
    console.log(jsObject); 

    document.getElementById('current-temp').textContent = jsObject.main.temp;

    let icon = 'https://openweathermap.org/img/w/' + jsObject.weather[0].icon + '.png';
    let description = jsObject.weather[0].description;    

    document.getElementById('imagesrc').textContent = icon;
    document.getElementById('icon').setAttribute('src', icon); 
    document.getElementById('icon').setAttribute('alt', description); 

  });