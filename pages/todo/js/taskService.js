let tasks = []

export function createTask(title) {
  const task = {
    id: Date.now(),
    title: title,
    completed: false
  }

  tasks.push(task)
  return tasks
}

export function removeTask(id) {
  tasks = tasks.filter(task => task.id !== id)
  return tasks
}

export function toggleTask(id) {
  tasks = tasks.map(task => {
    if (task.id === id) {
      task.completed = !task.completed
    }
    return task
  })

  return tasks
}

