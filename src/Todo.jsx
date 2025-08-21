import { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import TodoTask from "./TodoTask";
import "./Todo.css";
import { initData } from "./initData";
import { capitalizeFirstLetter } from "./helper";
export default function Todo() {
  let [todos, setTodos] = useState(initData);
  let [newTask, setNewTask] = useState("");
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
      <h1>Todo List</h1>
      <div>
        <input
          type="text"
          name="todoInput"
          id="todoInput"
          placeholder="Add New Todo"
          value={newTask}
          onChange={eventHandler}
        />
        <br />
        <br />
        <button onClick={addNewTodo}>Add new Todo</button>
      </div>
      <div className="">
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
