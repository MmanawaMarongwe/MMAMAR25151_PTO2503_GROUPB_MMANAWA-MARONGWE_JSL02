# JSL02 Project Brief: Task Input and Status Validation System

## 📋 Project Description

This project is a simple yet powerful task input and validation system built with JavaScript. It allows users to enter and manage two tasks interactively through browser prompts. The system focuses on real-time user feedback, ensuring input is correctly formatted and validated, while reinforcing essential programming skills like conditionals, loops, and data handling.

Designed as a foundational JavaScript challenge, this project encourages clean logic, user-friendly interaction, and readable code, forming a solid base for more complex interactive applications in the future.

## 🛠️ Technologies Used

    •	HTML5 – base structure inherited from JSL01
    •	CSS3 – styling from JSL01 carried over for visual consistency
    •	JavaScript – for dynamic user interaction and validation logic

## ✨ Features

- Prompts the user to enter two separate tasks with complete details:
  - Title
  - Description
  - Status
- Automatically converts all status inputs to lowercase for consistency
- Validates status input to accept only `"todo"`, `"doing"`, or `"done"`
- Re-prompts the user until a valid status is entered
- Logs completed tasks (status: `"done"`) to the browser console in the format:  
  `Title: "task title", status: "done"`
- Displays a motivational message only once if **no** tasks are marked as `"done"`:
  > "No tasks completed, let's get to work!"
- Includes descriptive variable names and comments for readability and maintainability

## Code Quality & Maintainability

- Use descriptive variable names to enhance readability and maintainability.
- Include clear comments explaining complex logic and functionality for easier understanding.

## Expected Outcome

A functional task entry system that ensures accurate data collection, validation, and structured storage while maintaining clean and well-documented code for easy future modifications.

**Prompt Input Example**

- The program must prompt users for task 1 title, descrition and status inputs, it must do the same for task 2 information

  ![title prompt](./explainer-images/title%20prompt.png)

**Invalid status**

- If the user enters a status other than `todo`, `doing` or `done`, the program must alert the user of this and return to prompting them to enter a status.

  ![invalid status](./explainer-images/invalid%20status.png)

**Console log**

- When there is a completed task:

  ![invalid status](./explainer-images/completed%20task%20log.png)

- When there are no completed tasks:

  ![invalid status](./explainer-images/no%20completed%20tasks%20log.png)
