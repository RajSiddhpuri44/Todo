import TodoCards from "./TodoCards";
import "./TodoList.css";
import { arrangeTask } from "./helper";

import { useState } from "react";

export default function TodoList({ todos }) {
  return (
    <>
      <div className="todo-list-main">
        {todos.map((task, idx) => {
          return <TodoCards todos={task} key={idx} />;
        })}
      </div>
    </>
  );
}
