// Prompt for Task 1
let taskTitle1 = prompt("Enter task 1 title");
let taskDescription1 = prompt("Enter task 1 description");
let taskStatus1 = prompt("Enter task status").toLowerCase();

// Keep prompting the user until a valid status ("todo", "doing", or "done") is entered
while (
  taskStatus1 !== "done" &&
  taskStatus1 !== "doing" &&
  taskStatus1 !== "todo"
) {
  alert(
    "Invalid status. Please enter one of the following: todo, doing, or done."
  );
  taskStatus1 = prompt("Enter task status").toLowerCase();
}

// If task is not marked as "todo", log its title and status; otherwise, encourage the user to get started
if (taskStatus1 !== "todo") {
  console.log(`Title: ${taskTitle1}, status: ${taskStatus1}`);
} else {
  console.log("No tasks completed, let's get to work!");
}

let taskTitle2 = prompt("Enter task 2 title");
let taskDescription2 = prompt("Enter task 2 description");
let taskStatus2 = prompt("Enter task 2 status").toLowerCase();

// Keep prompting the user until a valid status ("todo", "doing", or "done") is entered
while (
  taskStatus2 !== "done" &&
  taskStatus2 !== "doing" &&
  taskStatus2 !== "todo"
) {
  alert(
    "Invalid status. Please enter one of the following: todo, doing, or done."
  );
  taskStatus2 = prompt("Enter task status").toLowerCase();
}

// If task is not marked as "todo", log its title and status; otherwise, encourage the user to get started
if (taskStatus2 !== "todo") {
  console.log(`Title: ${taskTitle2}, status: ${taskStatus2}`);
} else {
  console.log("No tasks completed, let's get to work!");
}
