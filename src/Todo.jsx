import { useEffect, useState } from "react";
import { v4 as uuidv4 } from "uuid";
import TodoTask from "./TodoTask";
import "./Todo.css";
import { initData } from "./initData";
import { capitalizeFirstLetter, arrangeTask } from "./helper";
import TextField from "@mui/material/TextField";
// import TextField from "./TextField";

export default function Todo() {
  let [todos, setTodos] = useState(() => arrangeTask(initData));
  let [newTask, setNewTask] = useState("");
  let [darkMode, setDarkMode] = useState(true);
  let [pendingTask, setPendingTask] = useState(
    () => todos.filter((task) => !task.isDone).length
  );
  useEffect(() => {
    document.querySelector("body").style.backgroundColor = darkMode
      ? "#242424"
      : "white";
    document.body.style.color = darkMode ? "white" : "black";
  }, [darkMode]);

  useEffect(() => {
    setPendingTask(() => todos.filter((task) => !task.isDone).length);
  });
  let doneTask = todos.filter((task) => task.isDone).length;
  const eventHandler = (event) => {
    setNewTask(event.target.value);
  };
  const addNewTodo = () => {
    if (newTask == "") {
      console.log("empty");
      return;
    }

    setTodos(
      arrangeTask([
        { task: capitalizeFirstLetter(newTask), id: uuidv4(), isDone: false },
        ...todos,
      ])
    );
    setNewTask("");
  };
  const toggleTask = (task) => {
    setTodos(task);
  };

  return (
    <>
      <button
        className="dark_light_mode"
        onClick={() => {
          setDarkMode(!darkMode);
        }}
      >
        {darkMode ? "Light" : "Dark"}
      </button>
      <h1 id="list-title">Todo List</h1>
      <p id="task-stats">
        <span>
          Pending Task:
          {pendingTask == 0
            ? pendingTask + "😁"
            : pendingTask > 5
            ? pendingTask + "😢"
            : pendingTask + "😐"}
        </span>

        <span>Done:{doneTask == 0 ? doneTask + "😒" : doneTask + "🫡"}</span>
      </p>
      <div id="input-control">
        <TextField
          type="text"
          name="todoInput"
          id="todoInput"
          placeholder="Add New Todo"
          value={newTask}
          onChange={eventHandler}
          onKeyDown={(event) => (event.key === "Enter" ? addNewTodo() : null)}
          label="Add Task"
          variant="outlined"
          sx={{ input: { color: darkMode ? "white" : "black" } }}
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
