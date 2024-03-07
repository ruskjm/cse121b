/* LESSON 3 - Programming Tasks */

/* FUNCTIONS */
/* Function Definition - Add Numbers */
// Function to add two numbers passed in
function add (number1, number2) {
    return number1 + number2;
}

// addNumbers function
function addNumbers() {
    // Get the value of field with the id add1, convert it to a number, 
    // and store it in the variable addNumber1
    let addNumber1 = Number(document.querySelector("#add1").value);

    // Get the value of field with the id add2, convert it to a number, 
    // and store it in the variable addNumber2
    let addNumber2 = Number(document.querySelector("#add2").value);

    // Call the add function and pass addNumber1 and addNumber2 as arguments, 
    // and set the result to the id sum
    document.querySelector("#sum").value = add(addNumber1, addNumber2);
}

// Select the element with the id addNumbers and add an event listener for the click event, 
// which calls the addNumbers function when triggered
document.querySelector("#addNumbers").addEventListener("click", addNumbers);


/* Function Expression - Subtract Numbers */
// Function to subtract two numbers passed in
const subtract = function (number1, number2) {
    return number1 - number2;
}

// subtractNumbers function
const subtractNumbers = function() {
    // Get the value of field with the id subtract1, convert it to a number, 
    // and store it in the variable subtractNumber1
    let subtractNumber1 = Number(document.querySelector("#subtract1").value);

    // Get the value of field with the id subtract2, convert it to a number, 
    // and store it in the variable subtractNumber2
    let subtractNumber2 = Number(document.querySelector("#subtract2").value);

    // Call the subtract function and pass subtractNumber1 and subtractNumber2 as arguments, 
    // and set the result to the id difference
    document.querySelector("#difference").value = subtract(subtractNumber1, subtractNumber2);
}

// Select the element with the id subtractNumbers and add an event listener for the click event, 
// which calls the subtractNumbers function when triggered
document.querySelector("#subtractNumbers").addEventListener("click", subtractNumbers);


/* Arrow Function - Multiply Numbers */
// Function to multiply two numbers passed in
const multiply = (number1, number2) => number1 * number2;

// multiplyNumbers function
const multiplyNumbers = () => {
    // Get the value of field with the id factor1, convert it to a number, 
    // and store it in the variable multiplyNumber1
    let multiplyNumber1 = Number(document.querySelector("#factor1").value);

    // Get the value of field with the id factor2, convert it to a number, 
    // and store it in the variable multiplyNumber2
    let multiplyNumber2 = Number(document.querySelector("#factor2").value);

    // Call the multiply function and pass multiplyNumber1 and multiplyNumber2 as arguments, 
    // and set the result to the id product
    document.querySelector("#product").value = multiply(multiplyNumber1, multiplyNumber2);
  };

// Select the element with the id multiplyNumbers and add an event listener for the click event, 
// which calls the multiplyNumbers function when triggered
document.querySelector("#multiplyNumbers").addEventListener("click", multiplyNumbers);


/* Open Function Use - Divide Numbers */
// Function to divides two numbers passed in
const divide = (number1, number2) => number1 / number2;

// divideNumbers function
const divideNumbers = function() {
    // Get the value of field with the id dividend, convert it to a number, 
    // and store it in the variable divideNumber1
    let divideNumber1 = Number(document.querySelector("#dividend").value);

    // Get the value of field with the id divisor, convert it to a number, 
    // and store it in the variable divideNumber2
    let divideNumber2 = Number(document.querySelector("#divisor").value);

    // Call the divide function and pass divideNumber1 and divideNumber2 as arguments, 
    // and set the result to the id quotient
    document.querySelector("#quotient").value = divide(divideNumber1, divideNumber2);
  }

// Select the element with the id divideNumbers and add an event listener for the click event, 
// which calls the divideNumbers function when triggered
document.querySelector("#divideNumbers").addEventListener("click", divideNumbers);


/* Decision Structure */
// Select the HTML element id getTotal and store it in the variable getTotalButton
const getTotalButton = document.getElementById("getTotal");

// Select the HTML element id total and store it in the variable totalSpan
const totalSpan = document.getElementById("total");

// Add an event listener to the getTotalButton
// When click event is triggered, execute the function
getTotalButton.addEventListener("click", function() {

    // Select the HTML element id subtotal and store it in the variable subtotalInput
    const subtotalInput = document.getElementById("subtotal");

    // Get the value of subtotalInput element, convert it to a float
    // store it in the variable subtotal
    const subtotal = parseFloat(subtotalInput.value);

    // Select the HTML element id member and check if its checkbox is checked
    // Store the boolean result in the variable isMember
    const isMember = document.getElementById("member").checked;

    // Variable for total
    let total;

    // If club member box (true) is checked apply discount
    if (isMember) {
        // Apply 20% discount
        total = subtotal * 0.8;
    // Do not apply discount
    } else {
        // Set total to subtotal
        total = subtotal;
    }

    // Update the text content of the totalSpan element with the formatted total value
    totalSpan.textContent = `$ ${total.toFixed(2)}`;
});


/* ARRAY METHODS - Functional Programming */
/* Output Source Array */
// Declare array and set 1 to 13
let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13];

// Select the HTML id array and store it in the variable arrayElement
let arrayElement = document.getElementById("array");

// Set the text content of the arrayElement to numbers array
arrayElement.textContent = numbers;


/* Output Odds Only Array */
// Declare variable oddNumbers and assign to results of filtering the numbers array
// to odd numbers using the filter() method and an anonymous function
let oddNumbers = numbers.filter(function(num) {

    // The filter() method checks if the current number is odd
    // by checking if the remainder of dividing the number by 2 
    // is not equal to 0
    return num % 2 !== 0;
  });

  // Select the HTML id odds and store it in the variable oddsElement
  let oddsElement = document.getElementById("odds");

  // Set the text content of the oddsElement to oddNumbers array
  oddsElement.textContent = oddNumbers;


/* Output Evens Only Array */
// Select the HTML id evens using querySelector and set its innerHTML
// to the even numbers filtered from the numbers array
// The filter() method checks if the current number is even
// by checking if the remainder of dividing the number by 2 
// is equal to 0
document.querySelector("#evens").innerHTML = numbers.filter(number => number % 2 === 0);


/* Output Sum of Org. Array */
// Declare variable sum and assign to result of summing all elements in the numbers array
// using the reduce() method with an initial accumulator value of 0
const sum = numbers.reduce((accumulator, currentValue) => accumulator + currentValue, 0);

// Select the HTML id sumOfArray and set its innerHTML to the value of sum
document.getElementById("sumOfArray").innerHTML = sum;


/* Output Multiplied by 2 Array */
// Declare variable multipliedNumbers and assign to new array containing
// each element of the numbers array multiplied by 2, using the map() method
const multipliedNumbers = numbers.map(num => num * 2);

// Select the HTML id multiplied and set its innerHTML
// to multipliedNumbers array
document.getElementById("multiplied").innerHTML = multipliedNumbers;


/* Output Sum of Multiplied by 2 Array */
// Declare variable sumDouble and assign it to summing all elements
// in the multipliedNumbers array using the reduce() method with an initial accumulator value of 0
const sumDouble = multipliedNumbers.reduce((accumulator, currentValue) => accumulator + currentValue, 0);

// Select the HTML id sumOfMultiplied using querySelector and 
// store it in the variable sumOfMultipliedElement
const sumOfMultipliedElement = document.querySelector('#sumOfMultiplied');

// Set the text content of sumOfMultipliedElement to sumDouble
sumOfMultipliedElement.textContent = sumDouble;
