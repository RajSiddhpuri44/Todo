function checkHandler(id, todos, toggleTask) {
  todos.map((task) => {
    if (task.id === id) {
      task.isDone = true;
      let newTodos = [...todos];

      toggleTask(arrangeTask(newTodos));
    }
  });
}
// Function for capitalized task name
function capitalizeFirstLetter(str) {
  if (!str) return "";
  return str.charAt(0).toUpperCase() + str.slice(1);
}

// Function to remove selected task
function removeTask(todos, toggleTask, id) {
  let newTasks = todos.filter((task) => task.id !== id);
  toggleTask(newTasks);
}

//Function to arrange task according to its done status
function arrangeTask(todos) {
  todos.sort((a, b) => a.isDone - b.isDone);
  return todos;
}

// Edit Todo Function
function editTodo(todos, id, newTask) {
  let newTodos = todos.map((todo) => {
    if (todo.id === id) {
      todo.task = newTask;
      return todo;
    } else {
      return todo;
    }
  });
  return newTodos;
}
export {
  checkHandler,
  capitalizeFirstLetter,
  removeTask,
  arrangeTask,
  editTodo,
};
