let taskTitle1 = prompt("Enter task 1 title");
let taskDescription1 = prompt("Enter task 1 description");
let taskStatus1 = prompt("Enter task status");

console.log(taskStatus1.toLowerCase());

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

let taskTitle2 = prompt("Enter task 2 title");
let taskDescription2 = prompt("Enter task 2 description");
let taskStatus2 = prompt("Enter task 2 status");

console.log(taskDescription2.toLowerCase());

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
