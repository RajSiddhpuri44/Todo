import TodoCards from "./TodoCards";
import "./TodoList.css";

export default function TodoList({ todos, useSetTodos }) {
  return (
    <>
      <div className="todo-list-main">
        {todos.map((task, idx) => {
          return (
            <TodoCards
              todo={task}
              key={idx}
              toggleTask={useSetTodos}
              todos={todos}
            />
          );
        })}
      </div>
    </>
  );
}
