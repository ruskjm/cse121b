/* W05: Programming Tasks */

/* Declare and initialize global variables */
// Declare a reference to the div element with the ID "temples"
const templesElement = document.querySelector("div#temples");

// Declare a global empty array variable to store a list of temples
let templeList = [];


/* async displayTemples Function */
const displayTemples = (temples) => {

    // Arrow function used with the forEach() method
    temples.forEach((temple) => {
      // Create an HTML <article> element
      const article = document.createElement("article");
  
      // Create an HTML <h3> element and add the temple's templeName property
      const h3 = document.createElement("h3");
      h3.textContent = temple.templeName;
  
      // Create an HTML <img> element and add the temple's imageUrl and location properties
      const img = document.createElement("img");
      img.src = temple.imageUrl;
      img.alt = temple.location;
  
      // Append the <h3> element and the <img> element to the <article> element as children
      article.appendChild(h3);
      article.appendChild(img);
  
      // Append the <article> element to the global templesElement variable
      templesElement.appendChild(article);     
    });
};

/* async getTemples Function using fetch()*/
// Asynchronous arrow function that fetches temple data from a remote JSON file
const getTemples = async () => {
    // 'await' is used to pause the execution of the function until the Promise returned by fetch is resolved
    // The resolved value is assigned to the response constant
    const response = await fetch("https://byui-cse.github.io/cse121b-ww-course/resources/temples.json");

    // Check if the fetch request was successful
    if (!response.ok) {
        // If the fetch request failed, throw an Error
        throw new Error("Failed to fetch temples");
      }
    
      // If the fetch request was successful, parse the response body as JSON
      const jsonData = await response.json();
        
      // Assign the parsed JSON data to the templeList array
      templeList = jsonData;
   
      // Call the displayTemples function
      displayTemples(templeList);
};

/* reset Function */
const reset = () => {
    // It selects the HTML element with the ID temples
    // and sets its innerHTML property to an empty string
    templesElement.innerHTML = "";
};


/* filterTemples Function */
const filterTemples = (temples) => {
    // Call the reset function to clear the output
    reset();
  
    // Get the value of the HTML element with the ID 'filtered'
    const filter = document.getElementById("filtered").value;
  
    // Use a switch statement to filter the temples based on the selected value
    switch (filter) {
        // case for utah
        case "utah":
            const utahTemples = temples.filter(temple => temple.location.includes("Utah"));
            displayTemples(utahTemples);
            break;
        // case for not utah
        case "notutah":
            const notUtahTemples = temples.filter(temple => !temple.location.includes("Utah"));
            displayTemples(notUtahTemples);
            break;
        // case for older than 1950
        case "older":
            const olderTemples = temples.filter(temple => new Date(temple.dedicated) < new Date(1950, 0, 1));
            displayTemples(olderTemples);
            break;
        // Sort the temples alphabetically by their name
        case "alphabetical":
            // Sort the temples alphabetically by their name
            const sortedTemples = temples.slice().sort((a, b) => a.templeName.localeCompare(b.templeName));
            displayTemples(sortedTemples);
            break;
        // case to display all
        case "all":
            displayTemples(temples);
            break;
    }
};

/* Event Listener */
// Select the HTML element with the ID "filtered" from dropdown element
document.querySelector("#filtered")

// Add an event listener for the "change" event
.addEventListener("change", () => { 
    
// When the "change" event is triggered
// Call the filterTemples function and pass it the templeList array as an argumen
filterTemples(templeList)});

// Call getTemples function
getTemples();
