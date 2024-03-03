/* W02-Task - Profile Home Page */

/* Step 1 - Setup type tasks - no code required */

/* Step 2 - Variables */
const fullName = "Jason Rusk";
const currentYear = new Date().getFullYear();
const profilePicture = "images/IMG_20230825_184555930.jpg";

/* Step 3 - Element Variables */
const nameElement = document.getElementById("name");
const foodElement = document.getElementById("food");
const yearElement = document.querySelector("#year");
const imageElement = document.querySelector("main#home picture img");

/* Step 4 - Adding Content */
nameElement.innerHTML = `<strong>${fullName}</strong>`
yearElement.textContent = currentYear;
imageElement.setAttribute("src", profilePicture);
imageElement.setAttribute("alt", `Profile image of ${fullName}`);

/* Step 5 - Array */

// Set the array value
let favoriteFoods = ["Pizza", "Ice Cream", "Hamburgers", "Cookies", "Lobster", "Pulled Pork"];

// Add to the array to foodHtml variable seperated with comma/space
let foodHtml = favoriteFoods.join(", "); 

// Display the array
document.getElementById("food").innerHTML = foodHtml;

// Append new food
favoriteFoods.push("Tacos"); 

// Add to the foodHtml value with commas
foodHtml = favoriteFoods.join(", ");

// Display the array
document.getElementById("food").innerHTML += "<br>" + foodHtml;

// Remove first element from the array
favoriteFoods.shift();

// Add to the array to foodHtml variable seperated with comma/space
foodHtml = favoriteFoods.join(", ");

// Display the array
document.getElementById("food").innerHTML += "<br>" + foodHtml;

// Remove last element from the array
favoriteFoods.pop();

// Add to the array to foodHtml variable seperated with comma/space
foodHtml = favoriteFoods.join(", ");

// Display the array
document.getElementById("food").innerHTML += "<br>" + foodHtml;
