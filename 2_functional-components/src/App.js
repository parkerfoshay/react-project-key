import "./App.css";
// Import the Header component below:
import Header from "./components/Header.js";
// Import the ToDoList component below:
import ToDoList from "./components/ToDoList";

function App() {
  
  return (
    <div className="App">
      {/* Render the Header component below: */}
      <Header />
      {/* Render the ToDoList component below: */}
      <ToDoList />
    </div>
  );
}

export default App;
