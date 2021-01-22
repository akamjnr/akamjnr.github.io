const options = {weekday: 'long', day: 'numeric', month: 'long', year:'numeric'};
document.getElementById('currentday').textContent = new Date().toLocaleDateString('en-US', options);

document.getElementById("currentyear").textContent = new Date().getFullYear();

// toggle menu
function toggleMenu() {
    document.getElementsByClassName("navigation") [0].classList.toggle("responsive");
}



