import "./TodoInput.css";
import { v4 as uuidv4 } from "uuid";
import { useState } from "react";
import { arrangeTask, capitalizeFirstLetter } from "./helper";
export default function TodoInput({ useSetTodos, todos }) {
  let [newTask, setNewTask] = useState("");
  let [newDescription, setNewDescription] = useState("");
  const addTodo = () => {
    if (newTask == "" || newDescription == "") {
      console.log("empty");
      return;
    }
    useSetTodos(
      arrangeTask([
        {
          task: capitalizeFirstLetter(newTask),
          id: uuidv4(),
          isDone: false,
          description: newDescription,
          createdDate: new Date().toLocaleDateString(),
          dueDate: new Date().toLocaleDateString(),
        },
        ...todos,
      ])
    );
    setNewTask("");
  };
  return (
    <>
      <div id="input-controls">
        <input
          type="text"
          name="todoInput"
          className="todoInput"
          value={newTask}
          placeholder="Task Name"
          onChange={(e) => setNewTask(e.target.value)}
        />
        <input
          type="text"
          name="todoDescription"
          id="todoDescription"
          className="todoInput"
          value={newDescription}
          placeholder="Task Description"
          onChange={(e) => setNewDescription(e.target.value)}
        />
        <button onClick={addTodo}>Add new Todo</button>
      </div>
    </>
  );
}
