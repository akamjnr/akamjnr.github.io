const options = {weekday: 'long', day: 'numeric', month: 'long', year:'numeric'};
document.getElementById('currentday').textContent = new Date().toLocaleDateString('en-US', options);

document.getElementById("currentyear").textContent = new Date().getFullYear();

// toggle menu
function toggleMenu() {
    document.getElementsByClassName("navigation") [0].classList.toggle("responsive");
}


const requestURL = 'https://byui-cit230.github.io/weather/data/towndata.json';

fetch(requestURL)
  .then(function (response) {
    return response.json();
  })
  .then(function (jsonObject) {
    console.table(jsonObject);  // temporary checking for valid response and data parsing
    const towns = jsonObject['towns'];

    for (let i = 0; i < towns.length; i++ ) {
      if (towns[i].name == "Preston" ||
          towns[i].name == "Soda Springs" ||
          towns[i].name == "Fish Haven")
      {     
        let card = document.createElement('section'); 
        let townInfo = document.createElement('div');
        let townImage = document.createElement('div');
        let name = document.createElement('h3');
        let motto = document.createElement('p');
        let founded = document.createElement('p');
        let population = document.createElement('p');
        let rainfall = document.createElement('p');
        let photo = document.createElement('img');

        townInfo.className = "town-info";
        townImage.className = "town-image";
        name.textContent = towns[i].name;
        motto.textContent = towns[i].motto;
        motto.className = "motto";
        founded.textContent = 'Year Founded: ' + towns[i].yearFounded;
        population.textContent = 'Population: ' + towns[i].currentPopulation;
        rainfall.textContent = 'Annual Rain Fall: ' + towns[i].averageRainfall;
        photo.setAttribute('src', "home/images/" + towns[i].photo);
        photo.setAttribute('alt', 'picture of ' + towns[i].name + ', Idaho');

        townInfo.appendChild(name);
        townInfo.appendChild(motto);
        townInfo.appendChild(founded);
        townInfo.appendChild(population);
        townInfo.appendChild(rainfall);
        townImage.appendChild(photo);
        card.appendChild(townInfo);
        card.appendChild(townImage);

        document.querySelector('div.town-data').appendChild(card);
      }
    }
  });