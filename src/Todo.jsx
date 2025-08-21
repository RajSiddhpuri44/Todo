import { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import TodoTask from "./TodoTask";
import "./Todo.css";
import { initData } from "./initData";
import { capitalizeFirstLetter } from "./helper";
export default function Todo() {
  let [todos, setTodos] = useState(initData);
  let [newTask, setNewTask] = useState("");
  let totalTask = todos.length;
  let doneTask = todos.filter((task) => task.isDone).length;
  let pendingTask = totalTask - doneTask;
  const eventHandler = (event) => {
    setNewTask(event.target.value);
  };
  const addNewTodo = () => {
    if (newTask == "") {
      console.log("empty");
      return;
    }
    setTodos([
      ...todos,
      { task: capitalizeFirstLetter(newTask), id: uuidv4(), isDone: false },
    ]);
    setNewTask("");
  };
  const toggleTask = (task) => {
    setTodos(task);
  };

  return (
    <>
      <h1 id="list-title">Todo List</h1>
      <p id="task-stats">
        <span>
          Pending Task:
          {pendingTask > 3 ? pendingTask + "😬" : pendingTask + "😮‍💨"}
        </span>

        <span>Done:{doneTask == 0 ? doneTask + "😒" : doneTask + "🫡"}</span>
      </p>
      <div id="input-control">
        <input
          type="text"
          name="todoInput"
          id="todoInput"
          placeholder="Add New Todo"
          value={newTask}
          onChange={eventHandler}
        />
        <button onClick={addNewTodo} id="add-btn">
          Add new Todo
        </button>
      </div>
      <div className="task-container">
        {todos.map((task, idx) => {
          return (
            <TodoTask
              key={idx}
              task={task}
              toggleTask={toggleTask}
              todos={todos}
            />
          );
        })}
      </div>
    </>
  );
}
