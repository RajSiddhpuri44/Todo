import "./TodoCards.css";
import { checkHandler, arrangeTask } from "./helper";

export default function TodoCards({ todo, useSetTodos, todos }) {
  return (
    <>
      <div
        className="single-todo-card"
        style={
          todo.isDone
            ? {
                background: "rgba(129, 108, 77, 0.5)",
              }
            : {}
        }
      >
        <div className="card-control">
          <input
            checked={todo.isDone}
            disabled={todo.isDone}
            type="checkbox"
            name="todo-check"
            className="todo-check"
            onChange={() => {
              checkHandler(todo.id, todos, useSetTodos);
            }}
          />
          <i className="fa-solid fa-trash"></i>
          <i className="fa-solid fa-pen-to-square"></i>
        </div>
        <p className="task-name text-element">Task: {todo.task}</p>
        <p className="text-element">Created: {todo.createdDate}</p>
        <p className="text-element">Due: {todo.dueDate}</p>
        <p className="task-description text-element">
          Description: <br />
          {todo.description}
        </p>
      </div>
    </>
  );
}
