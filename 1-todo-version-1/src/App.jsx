import AppName from "./components/AppName";
import AddTodolist from "./components/AddTodolist";
import TodoItem1 from "./components/ToDoItem1";
import TodoItem2 from "./components/TodoItem2";
import "./App.css"
function App() {
  return (
    <center className = "todo-container">
      <AppName />
      <AddTodolist />
      <div className = "items-container">
      <TodoItem1 />
      <TodoItem2 />
      </div>
     
    </center>
  );
}

export default App;
