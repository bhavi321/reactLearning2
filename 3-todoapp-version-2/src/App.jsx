import AppName from "./components/AppName";
import AddTodolist from "./components/AddTodolist";
import TodoItems from "./components/TodoItems";
import "./App.css";
import { useState } from "react";
function App() {
  const initialTodoItems = [
    {
      name: "Buy Milk",
      dueDate: "26/10/23",
    },
    {
      name: "Go to College",
      dueDate: "21/11/23",
    },
    {
      name: "Like this",
      dueDate: "Now",
    },
  ];
  const [todoItems, setTodoItems] = useState(initialTodoItems);
  const handleNewItem = (itemName, itemDueDate) => {
    console.log(`New Item Added: ${itemName} Date: ${itemDueDate}`);
  };
  return (
    <center className="todo-container">
      <AppName />
      <AddTodolist onNewItem={handleNewItem}/>
      <TodoItems todoItems={todoItems}  />
    </center>
  );
}

export default App;
