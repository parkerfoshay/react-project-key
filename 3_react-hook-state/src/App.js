// Import useState below: 
import { useState } from "react";
import "./App.css";
import Header from "./components/Header.js";
import ToDoList from "./components/ToDoList";

function App() {
  // Create toDoList state below:
  const [toDoList, setToDoList] = useState([
    { id: 1, task: "Hello World", complete: true },
    { id: 2, task: "Hello World, Javascript", complete: true },
    { id: 3, task: "Hello World, React", complete: false },
  ]);

  // Log todoList state below:
  console.log(toDoList);

  return (
    <div className="App">
      <Header />
      <ToDoList />
    </div>
  );
}

export default App;
