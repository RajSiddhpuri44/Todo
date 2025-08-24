import "./TodoCards.css";
export default function TodoCards({ todos, idx }) {
  return (
    <>
      <div className="single-todo-card">
        <p className="task-name text-element">Task: {todos.task}</p>
        <p className="text-element">Created:{todos.createdDate}</p>
        <p className="text-element">Due: {todos.dueDate}</p>
        <p className="task-description text-element">
          Description: <br />
          {todos.description}
        </p>
      </div>
    </>
  );
}
