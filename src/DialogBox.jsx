import { useState } from "react";
import "./DialogBox.css";
import { arrangeTask, capitalizeFirstLetter } from "./helper";
import { v4 as uuidv4 } from "uuid";

export default function DialogBox({
  useSetTodos,
  toggleDialogBox,
  dialogBox,
  todos,
  useSetDialogBox,
}) {
  let [newTask, setNewTask] = useState("");
  let [newDescription, setNewDescription] = useState();
  let [dueDate, setDueDate] = useState("");
  const addTodo = () => {
    if (!newTask || !newDescription || !dueDate) {
      console.log("hello");
      return;
    }
    console.log("added");
    useSetTodos(
      arrangeTask([
        {
          task: capitalizeFirstLetter(newTask),
          id: uuidv4(),
          isDone: false,
          description: newDescription,
          createdDate: new Date().toLocaleDateString(),
          dueDate: dueDate,
        },
        ...todos,
      ])
    );
    useSetDialogBox(dialogBox);
    setNewTask("");
  };
  function handleChangeEvent(e, inputData) {
    if (inputData === "task") {
      setNewTask(e.target.value);
    } else if (inputData === "description") {
      setNewDescription(e.target.value);
    } else {
      setDueDate(e.target.value);
    }
  }
  return (
    <>
      <div id="dialogBox">
        <i
          className="fa-solid fa-xmark"
          onClick={() => toggleDialogBox(dialogBox)}
        ></i>
        <form id="add-todo-form">
          <input
            required
            type="text"
            name="task-name-input"
            className="add-todo-controls"
            id="task-name-input"
            placeholder="Task Name"
            value={newTask}
            onChange={(e) => handleChangeEvent(e, "task")}
          />
          <input
            required
            type="date"
            name="task-name-input"
            className="add-todo-controls"
            id="task-duedate-input"
            placeholder="Task Due Date"
            value={dueDate}
            onChange={(e) => handleChangeEvent(e, "duedate")}
          />
          <textarea
            required
            name="task-name-input"
            id="task-description-input"
            className="add-todo-controls"
            placeholder="Task Description"
            rows={8}
            value={newDescription}
            onChange={(e) => handleChangeEvent(e, "description")}
          ></textarea>
          <div id="form-button-control">
            <button
              type="submit"
              onClick={(e) => {
                e.preventDefault();
                addTodo();
              }}
            >
              Add Task
            </button>
            <button type="reset">Reset</button>
          </div>
        </form>
      </div>
    </>
  );
}
