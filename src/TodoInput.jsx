import "./TodoInput.css";
import { useState } from "react";
import DialogBox from "./DialogBox";
export default function TodoInput({ useSetTodos, todos }) {
  let [dialogBox, setDialogBox] = useState(false);
  function toggleDialogBox(dialogBox) {
    setDialogBox(!dialogBox);
  }
  function useSetDialogBox(dialogBox) {
    setDialogBox(!dialogBox);
  }
  return (
    <>
      <div className="todo-form-main">
        <button
          className="add-todo-form"
          onClick={() => {
            setDialogBox(!dialogBox);
          }}
        >
          Add
        </button>
        {dialogBox ? (
          <DialogBox
            toggleDialogBox={toggleDialogBox}
            dialogBox={dialogBox}
            useSetTodos={useSetTodos}
            todos={todos}
            useSetDialogBox={useSetDialogBox}
          />
        ) : null}
      </div>
    </>
  );
}
