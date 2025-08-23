import "./TodoTask.css";
import { checkHandler, arrangeTask } from "./helper";
import DeleteAlert from "./DeleteAlert";
import EditAlert from "./EditAlert";

export default function TodoTask({ task, toggleTask, todos, editOpt }) {
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
      {editOpt ? (
        <EditAlert task={task} toggleTask={toggleTask} todos={todos} />
      ) : (
        <DeleteAlert todos={todos} toggleTask={toggleTask} id={task.id} />
      )}
    </div>
  );
}
