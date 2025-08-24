import "./TodoCards.css";
import { checkHandler } from "./helper";
import DeleteAlert from "./DeleteAlert";
import EditAlert from "./EditAlert";
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
          <DeleteAlert todos={todos} toggleTask={useSetTodos} id={todo.id} />
          <EditAlert
            todos={todos}
            toggleTask={useSetTodos}
            task={todo}
            disabled={todo.isDone}
          />
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
