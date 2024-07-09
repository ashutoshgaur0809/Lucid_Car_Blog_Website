function validateEmailInput() {
    const emailInput = document.getElementById('emailInput').value;
    const feedbackElement = document.getElementById('emailFeedback');
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  
    if (emailRegex.test(emailInput)) {
      feedbackElement.textContent = ""; // Email is valid
    } else {
      feedbackElement.textContent = "Please enter a valid email address.";
    }
  }

  function validateForm() {
    var fname = document.forms["myForm"]["fname"].value;
    var lname = document.forms["myForm"]["lname"].value;

    if (fname == "" || lname == "") {
      alert("First name and last name must be filled out");
      return false; 
    }
  
    
    return true; 
  }

  function color() {

    // for background body and text
var body = document.querySelector('body');
body.classList.toggle('bg-light');
body.classList.toggle('bg-dark');

body.classList.toggle('text-dark');
body.classList.toggle('text-light');

// for navbar background
var navbar = document.querySelector("nav");
navbar.classList.toggle("bg-dark")
navbar.classList.toggle("bg-light")

// for navbar text
var navtexts = document.querySelectorAll("a");
navtexts.forEach(function(navtext) {
navtext.classList.toggle("text-dark");
navtext.classList.toggle("text-light");
});
// for image change
var img = document.querySelector('img');

// Check current image source
if (img.src.endsWith('darkbg.jpg')) {
    img.src = 'lightbg1.jpg'; // Change to a different image URL
} else {
    img.src = 'darkbg.jpg'; // Change back to original image URL
}

// for image text
// var imgText = document.querySelector("div.card-img-overlay")
// imgText.classList.toggle("text-dark");
// imgText.classList.toggle("text-light");

var icon = document.getElementById('theme');
    
// Check if icon exists
if (icon) {
    // Check the current icon class to determine the toggle state
    if (icon.classList.contains('fa-moon')) {
        icon.classList.remove('fa-moon');
        icon.classList.add('fa-sun');
    } else {
        icon.classList.remove('fa-sun');
        icon.classList.add('fa-moon');
    }
} else {
    console.error('Element with ID "theme" not found.');
}


}