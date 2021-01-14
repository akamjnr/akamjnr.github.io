window.onload = function date() {

    //Get Year
    document.getElementById("currentyear").textContent = new Date().getFullYear();

    //Get last modified date
    document.getElementById("update").innerHTML = document.lastModified;

}