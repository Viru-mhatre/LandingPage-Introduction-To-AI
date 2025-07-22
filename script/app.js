// alert("script is working...")

// let a = 12;
// console.log(a)



document.addEventListener("DOMContentLoaded", function () {
  fetch("navbar.html")
    .then(response => response.text())
    .then(data => {
      document.getElementById("navbar-placeholder").innerHTML = data;
    })
    .catch(error => console.error("Navbar loading failed:", error));
});
