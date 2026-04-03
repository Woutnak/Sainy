import { renderTasks } from "./ui.js"
import { saveTasks, loadTasks } from "./taskService.js"

let tasks = loadTasks()

renderTasks(tasks)

document
  .getElementById("addTaskBtn")
  .addEventListener("click", () => {

    const input = document.getElementById("taskInput")
    const title = input.value

    tasks = createTask(title)

    saveTasks(tasks)
    renderTasks(tasks)

    input.value = ""
  })