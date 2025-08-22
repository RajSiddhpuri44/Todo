import "./TodoTask.css";
import { checkHandler, removeTask } from "./helper";
import DeleteAlert from "./DeleteAlert";
export default function TodoTask({ task, toggleTask, todos }) {
  return (
    <div className="singleTask">
      <p className="taskName">
        {task.isDone ? <strike>{task.task}</strike> : <span>{task.task}</span>}
      </p>

      <input
        checked={task.isDone}
        disabled={task.isDone}
        type="checkbox"
        name="checkTask"
        id={task.id}
        className="check-input"
        onChange={() => {
          checkHandler(task.id, todos, toggleTask);
        }}
      />
      <DeleteAlert todos={todos} toggleTask={toggleTask} id={task.id} />
      {/* <DeleteIcon
        className="delete-icon"
        onClick={() => {
          removeTask(todos, toggleTask, task.id);
        }}
      ></DeleteIcon> */}
      {/* <i
        className="fa-solid fa-xmark"
        onClick={() => {
          removeTask(todos, toggleTask, task.id);
        }} */}
      {/* ></i> */}
    </div>
  );
}
