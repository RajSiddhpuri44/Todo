import { v4 as uuidv4 } from "uuid";

const initData = [
  {
    task: "Buy groceries",
    id: uuidv4(),
    isDone: true,
  },
  {
    task: "Finish homework",
    id: uuidv4(),
    isDone: false,
  },
  {
    task: "Go for a walk",
    id: uuidv4(),
    isDone: false,
  },
  {
    task: "Call Mom",
    id: uuidv4(),
    isDone: true,
  },
  {
    task: "Pay electricity bill",
    id: uuidv4(),
    isDone: false,
  },
  {
    task: "Read a book",
    id: uuidv4(),
    isDone: false,
  },
  {
    task: "Clean the room",
    id: uuidv4(),
    isDone: true,
  },
  {
    task: "Workout at gym",
    id: uuidv4(),
    isDone: false,
  },
  {
    task: "Prepare dinner",
    id: uuidv4(),
    isDone: true,
  },
  {
    task: "Check emails",
    id: uuidv4(),
    isDone: false,
  },
];
export { initData };
