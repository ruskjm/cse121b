/* Final Project: To-Do List */

// Get the necessary elements
const newTaskInput = document.getElementById("newTask");
const addTaskButton = document.getElementById("addTask");
const taskList = document.getElementById("taskList");
const clearCompletedButton = document.getElementById("clearCompleted");

// Create an ArrayList to store the tasks
const tasks = [];

// Flag to track if the first task has been added
let firstTaskAdded = false;

// Fetch data from an json file
fetch('json/todo.json')
  .then(response => response.json())
  .then(data => {
    // Add the fetched data to the tasks array
    data.forEach(item => tasks.push({ text: item.task, completed: item.completed }));

    // Render the task list
    renderTaskList();
  })
  .catch(error => console.error('Error fetching data:', error));

// Add a new task
addTaskButton.addEventListener('click', function() {
  const taskText = newTaskInput.value.trim();
  if (taskText) {
    // Add the task to the ArrayList
    tasks.push({ text: taskText, completed: false });

    // Render the task list
    renderTaskList();

    // Clear the input field
    newTaskInput.value = "";
  }
});

// Add the comment for the first task
function addCommentElement() {
  if (!firstTaskAdded) {
    const commentElement = document.createElement("p");
    commentElement.textContent = `Check Completed Tasks`;
    taskList.prepend(commentElement); // Prepend the comment element
    firstTaskAdded = true;
  }
}

// Render the task list
function renderTaskList() {
  // Clear the task list items
  const taskListItems = taskList.querySelectorAll("li");
  taskListItems.forEach((item) => item.remove());

  // Add the comment element
  addCommentElement();

  tasks.forEach((task, index) => {
    // Create a new list item
    const li = document.createElement('li');
    const checkbox = document.createElement('input');
    checkbox.type = 'checkbox';
    checkbox.checked = task.completed;
    const span = document.createElement('span');
    span.textContent = task.text;
    span.classList.toggle('completed', task.completed);
    const removeButton = document.createElement('button');
    removeButton.textContent = `Remove`;

    // Add event listeners for marking as complete and removing the task
    checkbox.addEventListener('change', function() {
      tasks[index].completed = checkbox.checked;
      span.classList.toggle('completed');
    });

    removeButton.addEventListener('click', function() {
      // Remove the task from the ArrayList
      tasks.splice(index, 1);
      // Re-render the task list
      renderTaskList();
    });

    // Append elements to the list item
    li.appendChild(checkbox);
    li.appendChild(span);
    li.appendChild(removeButton);

    // Add the list item to the task list
    taskList.appendChild(li);
  });
}

// Clear completed tasks
clearCompletedButton.addEventListener("click", function() {
  // Filter out the completed tasks
  const incompleteTasks = tasks.filter(task => !task.completed);
  // Update the ArrayList with the incomplete tasks
  tasks.length = 0;
  tasks.push(...incompleteTasks);
  // Re-render the task list
  renderTaskList();
});