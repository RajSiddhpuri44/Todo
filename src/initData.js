import { v4 as uuidv4 } from "uuid";

const initData = [
  {
    task: "Eat",
    id: uuidv4(),
    isDone: false,
  },
  {
    task: "Study React",
    id: uuidv4(),
    isDone: false,
  },
  {
    task: "Go for a walk",
    id: uuidv4(),
    isDone: false,
  },
  {
    task: "Buy groceries",
    id: uuidv4(),
    isDone: true,
  },
  {
    task: "Call a friend",
    id: uuidv4(),
    isDone: false,
  },
  {
    task: "Read a book",
    id: uuidv4(),
    isDone: true,
  },
];
export { initData };
