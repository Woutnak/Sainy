# Sainy
A simple and clean Todo List application built with HTML, CSS, and JavaScript.
This project was created to practice core front-end development concepts such as DOM manipulation, state management, and local storage persistence.

The goal of this project is to build a solid foundation before moving to modern frameworks like React.

📌 Features
Add a new task
Delete a task
Mark a task as completed
Persistent tasks using LocalStorage
Clean and minimal interface
🧠 What I Learned

This project helped me practice several important front-end concepts:

JavaScript arrays and objects
DOM manipulation
Event handling
Modular code organization
LocalStorage for data persistence

It also helped me understand how to structure a project like a real application instead of writing everything in one file.

🏗 Project Structure
todo-app
│
├── index.html
├── style.css
│
└── js
    ├── app.js
    ├── taskService.js
    ├── storageService.js
    └── ui.js
File roles

index.html
Main structure of the application.

style.css
Handles layout and styling.

app.js
Entry point of the application. Connects logic, UI, and storage.

taskService.js
Contains the logic for creating, deleting, and updating tasks.

storageService.js
Handles saving and loading tasks from LocalStorage.

ui.js
Responsible for rendering tasks in the interface.

⚙️ How It Works

Application flow:

The user enters a task
The task is added to the task list
The list is saved in LocalStorage
The UI updates automatically
User action
     ↓
Task Service (logic)
     ↓
Storage Service (save)
     ↓
UI Rendering
🚀 Getting Started

Clone the repository:

git clone https://github.com/yourusername/todo-app.git

Open the project folder and run the application:

open index.html

Or simply open the file in your browser.

🔧 Technologies Used
HTML5
CSS3
JavaScript (Vanilla)
LocalStorage API
🎯 Future Improvements

Planned improvements for the next version:

Task filtering (All / Active / Completed)
Task counter
Due dates
Better UI animations
Mobile responsiveness

The next version of this project will be rebuilt using React and Tailwind CSS.

📚 Learning Project

This project is part of my journey to strengthen my skills in front-end development and software architecture through practical projects.

👤 Author

Wout

Master's student in Computer Science
Interested in full-stack development, product building, and productivity tools.

⭐ If you like this project

Feel free to star the repository and follow the development of future projects.