const myURL = 'data/vehicles.json';

fetch(myURL)
  .then((response) => response.json())
  .then((prices) => {
    console.log(prices);


    //Vehicle name 
    document.getElementById('met-name').textContent = prices.vehicles[0].name;
    document.getElementById('dio-name').textContent = prices.vehicles[1].name;
    document.getElementById('pcx-name').textContent = prices.vehicles[2].name;
    document.getElementById('atv-name').textContent = prices.vehicles[3].name;
    document.getElementById('4door-name').textContent = prices.vehicles[4].name;
    document.getElementById('2door-name').textContent = prices.vehicles[5].name;

    //Number of persons allowed 
    document.getElementById('met-max').textContent = prices.vehicles[0].max_persons;
    document.getElementById('dio-max').textContent = prices.vehicles[1].max_persons;
    document.getElementById('pcx-max').textContent = prices.vehicles[2].max_persons;
    document.getElementById('atv-max').textContent = prices.vehicles[3].max_persons;
    document.getElementById('4door-max').textContent = prices.vehicles[4].max_persons;
    document.getElementById('2door-max').textContent = prices.vehicles[5].max_persons;

    //Price for reserved half day
    document.getElementById('res-met-half').textContent = prices.vehicles[0].res_half;
    document.getElementById('res-dio-half').textContent = prices.vehicles[1].res_half;
    document.getElementById('res-pcx-half').textContent = prices.vehicles[2].res_half;
    document.getElementById('res-atv-half').textContent = prices.vehicles[3].res_half;
    document.getElementById('res-4door-half').textContent = prices.vehicles[4].res_half;
    document.getElementById('res-2door-half').textContent = prices.vehicles[5].res_half;

    //Price for reserved full day
    document.getElementById('res-met-full').textContent = prices.vehicles[0].res_full;
    document.getElementById('res-dio-full').textContent = prices.vehicles[1].res_full;
    document.getElementById('res-pcx-full').textContent = prices.vehicles[2].res_full;
    document.getElementById('res-atv-full').textContent = prices.vehicles[3].res_full;
    document.getElementById('res-4door-full').textContent = prices.vehicles[4].res_full;
    document.getElementById('res-2door-full').textContent = prices.vehicles[5].res_full;

    //Price for walk ins half day
    document.getElementById('in-met-half').textContent = prices.vehicles[0].in_half;
    document.getElementById('in-dio-half').textContent = prices.vehicles[1].in_half;
    document.getElementById('in-pcx-half').textContent = prices.vehicles[2].in_half;
    document.getElementById('in-atv-half').textContent = prices.vehicles[3].in_half;
    document.getElementById('in-4door-half').textContent = prices.vehicles[4].in_half;
    document.getElementById('in-2door-half').textContent = prices.vehicles[5].in_half;

    //Price for walk ins full day
    document.getElementById('in-met-full').textContent = prices.vehicles[0].in_full;
    document.getElementById('in-dio-full').textContent = prices.vehicles[1].in_full;
    document.getElementById('in-pcx-full').textContent = prices.vehicles[2].in_full;
    document.getElementById('in-atv-full').textContent = prices.vehicles[3].in_full;
    document.getElementById('in-4door-full').textContent = prices.vehicles[4].in_full;
    document.getElementById('in-2door-full').textContent = prices.vehicles[5].in_full;

  });