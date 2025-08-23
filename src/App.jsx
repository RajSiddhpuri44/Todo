import { useState } from "react";
import Todo from "./Todo";
import TodoInput from "./TodoInput";
import "./App.css";
import TodoList from "./TodoList";
import { arrangeTask } from "./helper";
import { initData } from "./initData";

function App() {
  let [todos, setTodos] = useState(() => arrangeTask(initData));

  function useSetTodos(todos) {
    setTodos(todos);
  }

  return (
    <>
      <div className="top">
        <h1 id="todo-title">Todo List</h1>
        <TodoInput useSetTodos={useSetTodos} todos={todos} />
      </div>
      {/* <Todo /> */}
      <TodoList todos={todos} />
    </>
  );
}

export default App;
