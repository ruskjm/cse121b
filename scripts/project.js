/* Final Project: To-Do List */

// Get a reference to the input field for adding new tasks
const newTaskInput = document.getElementById("newTask");

// Get a reference to the Add button for adding new tasks
const addTaskButton = document.getElementById("addTask");

// Get a reference to the list element where tasks will be displayed
const taskList = document.getElementById("taskList");

// Get a reference to the Clear Completed Tasks button
const clearCompletedButton = document.getElementById("clearCompleted");

// Get a reference to the Load Task List button
const loadTaskButton = document.getElementById("loadTaskButton");

// Create a new div element to display the task count
const taskCountElement = document.createElement("div");

// Create an ArrayList to store the tasks
const tasks = [];

// Flag to track if the first task has been added
let firstTaskAdded = false;

// Function to load data from the JSON file
function loadJsonData() {
  // Check if the tasks array is empty
  if (tasks.length === 0) {
    // Fetch the JSON data from the json/todo.json file
    fetch("json/todo.json")
      .then(response => response.json()) // Parse the response as JSON
      .then(data => {
        // Iterate over the fetched data
        data.forEach(item =>
          // For each item, create a new task object
          tasks.push({
            text: item.task, // Set the task text
            completed: item.completed // Set the completed status
          }));
        // Render the task list on the page
        renderTaskList();
      })
      // Handle any errors that occurred during the fetch
      .catch(error => console.error("Error fetching data:", error));
  }
}

// Add event listener to the Load JSON button
loadTaskButton.addEventListener("click", loadJsonData);

// Add a new task
addTaskButton.addEventListener("click", function() {
  // Get the trimmed text value from the input field
  const taskText = newTaskInput.value.trim();

  // Check if the input field is not empty
  if (taskText) {
    // Create a new task object with the text and completed status
    tasks.push({ text: taskText, completed: false });

    // Render the updated task list on the page
    renderTaskList();

    // Clear the input field
    newTaskInput.value = "";
  }
});

// Function to add a comment element to the task list
function addCommentElement() {
  // Check if the comment has not been added
  if (!firstTaskAdded) {
    // Create a new paragraph element
    const commentElement = document.createElement("p");

    // Set the text content of the paragraph element
    commentElement.textContent = `Check Completed Tasks`;

    // Add the paragraph element to the beginning of the task list
    taskList.prepend(commentElement);

    // Set the flag to true that comment has been added
    firstTaskAdded = true;
  }
}

// This function is responsible for rendering the task list on the page
function renderTaskList() {
  // Get all the list item elements inside the task list
  const taskListItems = taskList.querySelectorAll("li");

  // Remove each list item element from the task list
  taskListItems.forEach((item) => item.remove());

  // Get the first div element inside the task list
  const existingTaskCountElement = taskList.querySelector("div");

  // If a div element exists, remove it from the task list
  if (existingTaskCountElement) {
    existingTaskCountElement.remove();
  }

  // Add the comment element to the task list (if not added before)
  addCommentElement();

  // Iterate over each task in the tasks array
  tasks.forEach((task, index) => {
    // Create a new list item element
    const li = document.createElement("li");

    // Create a new checkbox input element
    const checkbox = document.createElement("input");

    // Set the type of the input element to checkbox
    checkbox.type = "checkbox";

    // Set the checked state of the checkbox based status
    checkbox.checked = task.completed;

    // Create a new span element for the task text
    const span = document.createElement("span");

    // Set the span element to the task text
    span.textContent = task.text;

    // Toggle the completed element based on the task's completed status
    span.classList.toggle("completed", task.completed);

    // Create a new button element for removing the task
    const removeButton = document.createElement("button");

    // Set the text content of the button to Remove
    removeButton.textContent = `Remove`;

    // Add an event listener to the checkbox for toggling the completed status
    checkbox.addEventListener("change", function() {

      // Update the completed status of the task in the tasks array
      tasks[index].completed = checkbox.checked;

      // Toggle the completed class on the span element
      span.classList.toggle("completed");
    });

    // Add an event listener to the remove button for removing the task
    removeButton.addEventListener("click", function() {
      // Remove the task from the task array
      tasks.splice(index, 1);

      // Re-render the task list
      renderTaskList();
    });

    // Append the checkbox element to the list item
    li.appendChild(checkbox);

    // Append the span element containing the task text to the list item
    li.appendChild(span);

    // Append the remove button element to the list item
    li.appendChild(removeButton);

    // Add the list item to the task list
    taskList.appendChild(li);
  });


  // Set the text content to display Total Tasks: followed by the number of tasks
  taskCountElement.textContent = `Total Tasks: ${tasks.length}`;

  // Add some spacing above the task count element by setting the marginTop style property
  taskCountElement.style.marginTop = '1rem';

  // Append the task count element to the task list
  taskList.appendChild(taskCountElement);
}

// Add an event listener to the Clear Completed button
clearCompletedButton.addEventListener("click", function() {

  // Filter out the tasks that are not completed
  const incompleteTasks = tasks.filter(task => !task.completed);

  // Clear the existing tasks array
  tasks.length = 0;

  // Add the incomplete tasks back to the tasks array
  tasks.push(...incompleteTasks);

  // Re-render the task list on the page
  renderTaskList();
});