// Calculate and display the Wind Chill Factor
function calculateWindChill() {
  var temp = document.getElementById("currenttemp").innerHTML;
  var windSpeed = document.getElementById("windspeed").innerHTML;
  var speedFactor = Math.pow(windSpeed, 0.16);
  var windChill = Math.round(35.74 + (0.6215 * temp) - 
                  (35.75 * speedFactor) + 
                  (0.4275 * temp * speedFactor));;

  if (temp <= 50 && windSpeed >= 3) {
    document.getElementById("windchill").innerHTML = windChill;
  }
  else {
    document.getElementById("windchilllabel").innerHTML = "N/A";
  }
}