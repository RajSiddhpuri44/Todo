import "./TodoTask.css";
import { checkHandler, removeTask } from "./helper";
export default function TodoTask({ task, toggleTask, todos }) {
  return (
    <div className="singleTask taskGrid">
      <p className="taskName">
        {task.isDone ? <strike>{task.task}</strike> : <span>{task.task}</span>}
      </p>

      <input
        checked={task.isDone}
        disabled={task.isDone}
        type="checkbox"
        name="checkTask"
        id={task.id}
        onChange={() => {
          checkHandler(task.id, todos, toggleTask);
        }}
      />
      <i
        className="fa-solid fa-xmark"
        onClick={() => {
          removeTask(todos, toggleTask, task.id);
        }}
      ></i>
    </div>
  );
}
