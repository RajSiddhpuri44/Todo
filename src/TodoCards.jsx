import "./TodoCards.css";
import { checkHandler, arrangeTask } from "./helper";

export default function TodoCards({ todo, useSetTodos }) {
  return (
    <>
      <div className="single-todo-card">
        <div className="card-control">
          <input
            // checked={todo.isDone}
            // disable={todo.isDone}
            type="checkbox"
            name="todo-check"
            id="todo-check"
            onChange={() => {}}
          />
          <i className="fa-solid fa-trash"></i>
          <i className="fa-solid fa-pen-to-square"></i>
        </div>
        <p className="task-name text-element">Task: {todo.task}</p>
        <p className="text-element">Created:{todo.createdDate}</p>
        <p className="text-element">Due: {todo.dueDate}</p>
        <p className="task-description text-element">
          Description: <br />
          {todo.description}
        </p>
      </div>
    </>
  );
}
