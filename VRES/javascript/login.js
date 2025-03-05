// Get references to elements
const loginButton = document.getElementById("login-btn");
const popup = document.querySelector(".popup");
const closeButton = document.querySelector(".close-btn");
const form = document.querySelector(".form");

// Show the popup when the login button is clicked
loginButton.addEventListener("click", function () {
   popup.classList.add("active");
});

// Close the popup when the close button is clicked
closeButton.addEventListener("click", function () {
   popup.classList.remove("active");
});

// Close the popup if the user clicks anywhere outside the popup
window.addEventListener("click", function (event) {
   if (event.target === popup) {
      popup.classList.remove("active");
   }
});

// When the form is submitted, redirect to the home page or any URL
form.addEventListener("submit", function (event) {
   event.preventDefault(homepage.html); // Prevent the form from submitting normally

   // Here you can add any validation logic before redirecting

   // Redirect to the home page (or any other page you prefer)
   window.location.href = "homepage.html"; // Replace with your desired URL
});
