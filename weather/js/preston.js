const options = {weekday: 'long', day: 'numeric', month: 'long', year:'numeric'};
document.getElementById('currentday').textContent = new Date().toLocaleDateString('en-US', options);

document.getElementById("currentyear").textContent = new Date().getFullYear();

// toggle menu
function toggleMenu() {
    document.getElementsByClassName("navigation") [0].classList.toggle("responsive");
}


// Hide the banner, unless it's Fridays
function showBanner() {
    if (weekday == 'Friday') {
      document
        .getElementsByClassName("show-banner")[0]
        .classList.toggle("hide-banner");
    }
  }


