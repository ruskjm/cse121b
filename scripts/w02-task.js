/* W02-Task - Profile Home Page */

/* Step 1 - Setup type tasks - no code required */

/* Step 2 - Variables */
const fullName = "Jason Rusk";
const now = new Date();
const currentYear = now.getFullYear();
const profilePicture = "images/IMG_20230825_184555930.jpg";


/* Step 3 - Element Variables */
const nameElement = document.getElementById('name');
const foodElement = document.getElementById('food');
const yearElement = document.querySelector('#year');
const imageElement = document.querySelector('main#home picture img');


/* Step 4 - Adding Content */
nameElement.innerHTML = `<strong>${fullName}</strong>`
yearElement.textContent = currentYear;
imageElement.setAttribure('src', profilePicture);

/* Step 5 - Array */

let favoriteFoods = ["Pizza", "Ice Cream", "Hamburgers", "Cookies", "Lobster", "Pulled Pork"]

foodElement.innerHTML;




