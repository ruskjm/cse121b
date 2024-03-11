/* LESSON 3 - Programming Tasks */

/* Profile Object  */
// // Define an object called myProfile
let myProfile = {
    // Property name stores name as a string
    name: "Jason Rusk",
    // Property photo of the file path as a string
    photo: "images/IMG_20230825_184555930.jpg",
    // Property favoriteFoods of favorite foods as strings array 
    favoriteFoods: [
        "Pizza", 
        "Ice Cream", 
        "Hamburgers", 
        "Cookies", 
        "Lobster", 
        "Pulled Pork"
    ],
    // Property hobbies of hobbies as strings array 
    hobbies: [
        "Hiking",
        "Reading",
        "Traveling",
        "Camping"
    ],
    // Property placesLived of places lived as an empty array 
    placesLived: []
};

/* Populate Profile Object with placesLive objects */
// The push() method is used to add new elements to an array
myProfile.placesLived.push(
    // Objects to push to placesLived array
    {
        place: "Lemoore, CA",
        length: "2 years"
    },
    {
        place: "San Pablo, CA",
        length: "3 years"
    },    
    {
        place: "Faifield, CA",
        length: "22 years"
    },
    {
        place: "Elk Grove, CA",
        length: "14 years"
    },
    {
        place: "Sacramento, CA",
        length: "9 years"
    }
);

/* DOM Manipulation - Output */
/* Name */
// Select the element with the ID of name and set its textContent to the 
// value of the "name" property in the myProfile object
document.querySelector("#name").textContent = myProfile.name;

/* Photo with attributes */
// Select the element with the ID of photo and set its src attribute to the 
// value of the photo property in the myProfile object
document.querySelector("#photo").src = myProfile.photo;

// Select the element with the ID of photo and set its alt attribute to the 
// value of the name property in the myProfile object
document.querySelector("#photo").alt = myProfile.name;

/* Favorite Foods List*/
// For each item in the favoriteFoods array of the myProfile object
myProfile.favoriteFoods.forEach(food => {
    // Create a new li element
    const li = document.createElement("li");

    // Set the textContent of the li element to the current food item
    li.textContent = food;

    // Select the element with the ID of favorite-foods and append the li element to it
    document.querySelector("#favorite-foods").appendChild(li);
});

/* Hobbies List */
// For each item in the hobbies array of the myProfile object
myProfile.hobbies.forEach(hobby => {
    // Create a new li element
    const li = document.createElement("li");

    // Set the textContent of the li element to the current hobby item
    li.textContent = hobby;

    // Select the element with the ID of hobbies and append the li element to it
    document.querySelector("#hobbies").appendChild(li);
});

/* Places Lived DataList */
// For each object in the placesLived array of the myProfile object
myProfile.placesLived.forEach(place => {
    // Create a new dt element
    const dt = document.createElement("dt");

    // Set the textContent of the dt element to the place property of the object
    dt.textContent = place.place;

    // Select the element with the ID places-lived and append the dt element to it
    document.querySelector("#places-lived").appendChild(dt);

    // Create a new dd element
    const dd = document.createElement("dd");

    // Set the textContent of the dd element to the place property of the object
    dd.textContent = place.length;

    // Select the element with the ID places-lived and append the dd element to it
    document.querySelector("#places-lived").appendChild(dd);
});