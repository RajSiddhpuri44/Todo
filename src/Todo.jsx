import { useEffect, useState } from "react";
import { v4 as uuidv4 } from "uuid";
import TodoTask from "./TodoTask";
import "./Todo.css";
import { initData } from "./initData";
import { capitalizeFirstLetter, arrangeTask } from "./helper";
import TextField from "@mui/material/TextField";
export default function Todo() {
  let [todos, setTodos] = useState(() => arrangeTask(initData));
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
      <button className="dark_light_mode">Mode</button>
      <h1 id="list-title">Todo List</h1>
      <p id="task-stats">
        <span>
          Pending Task:
          {pendingTask > 3 ? pendingTask + "😬" : pendingTask + "😮‍💨"}
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
          label="Add Task"
          variant="outlined"
          sx={{
            "& .MuiOutlinedInput-root": {
              "& fieldset": {
                borderColor: "white", // default
              },
              "_&:hover fieldset": {
                borderColor: "white",
              },
              get "&:hover fieldset"() {
                return this["_&:hover fieldset"];
              },
              set "&:hover fieldset"(value) {
                this["_&:hover fieldset"] = value;
              },
              "&.Mui-focused fieldset": {
                borderColor: "white", // focus
              },
            },
            "& .MuiInputLabel-root": {
              color: "white", // label color
            },
            "& .MuiInputBase-input": {
              color: "white", // input text color
            },
          }}
        ></TextField>
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
