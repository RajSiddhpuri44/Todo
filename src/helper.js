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
function editTodo(todos, id, newTask, dueDate) {
  console.log(dueDate);
  let newTodos = todos.map((todo) => {
    if (todo.id === id) {
      todo.task = newTask;
      todo.dueDate = formatDateInput(dueDate);
      return todo;
    } else {
      return todo;
    }
  });
  return newTodos;
}
// Function to format date from DATE TYPE INPUT
function formatDateInput(value) {
  if (!value) return "";
  const [year, month, day] = value.split("-");
  return `${day}/${month}/${year}`;
}

//Function to formate date for input type date
function toISODate(dateStr) {
  // dateStr is in dd/mm/yyyy or d/m/yyyy
  const [day, month, year] = dateStr.split("/").map(Number);

  // pad with leading zeros if needed
  const dd = String(day).padStart(2, "0");
  const mm = String(month).padStart(2, "0");

  return `${year}-${mm}-${dd}`; // yyyy-MM-dd
}
export {
  checkHandler,
  capitalizeFirstLetter,
  removeTask,
  arrangeTask,
  editTodo,
  formatDateInput,
  toISODate,
};
