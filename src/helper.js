function checkHandler(id, todos, toggleTask) {
  todos.map((task) => {
    if (task.id === id) {
      task.isDone = true;
      let newTodos = [...todos];
      toggleTask(newTodos);
    }
  });
}
function capitalizeFirstLetter(str) {
  if (!str) return "";
  return str.charAt(0).toUpperCase() + str.slice(1);
}
function removeTask(todos, toggleTask, id) {
  let newTasks = todos.filter((task) => task.id !== id);
  toggleTask(newTasks);
}

export { checkHandler, capitalizeFirstLetter, removeTask };
