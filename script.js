// Select elements
const form = document.querySelector("form");
const username = document.getElementById("username");
const password = document.getElementById("Password");

// Form submit event
form.addEventListener("submit", function (e) {
  e.preventDefault(); // stop page refresh

  if (username.value === "" || password.value === "") {
    alert("Please fill in all fields");
  } else {
    alert("Login successful!");
  }
});
