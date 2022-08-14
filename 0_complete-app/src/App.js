import { useState } from "react";
import "./App.css";
import Header from "./components/Header.js";
import ToDoList from "./components/ToDoList";

function App() {
  const [toDoList, setToDoList] = useState([
    { id: 1, task: "Hello World", complete: true },
    { id: 2, task: "Hello World, Javascript", complete: false,},
    { id: 3, task: "Hello World, Node", complete: false },
  ]);

  return (
    <div className="App">
      <Header />
      <ToDoList toDoList={toDoList} />
    </div>
  );
}

export default App;
