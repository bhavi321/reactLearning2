import AppName from "./components/AppName";
import AddTodolist from "./components/AddTodolist";
import TodoItems from "./components/TodoItems";
import "./App.css";
function App() {
  const todoItems = [
    {
      name: "Buy Milk",
      dueDate: "26/10/23"
    },
    {
      name: "Go to College",
      dueDate: "21/11/23"
    },
    {
      name: "Like this",
      dueDate: "Now"
    }
  ]
  return (
    <center className="todo-container">
      <AppName />
      <AddTodolist />
      <TodoItems todoItems = {todoItems}/>
    </center>
  );
}

export default App;
