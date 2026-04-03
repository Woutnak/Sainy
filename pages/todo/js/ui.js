export function renderTasks(tasks) {
  const taskList = document.getElementById("#taskList")
  taskList.innerHTML = ""

  tasks.forEach(task => {
    const li = document.createElement("li")

    li.textContent = task.title

    if (task.completed) {
      li.style.textDecoration = "line-through"
    }

    taskList.appendChild(li)
  })
}