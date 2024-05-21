import AppName from "./components/AppName";
import AddTodolist from "./components/AddTodolist";
import TodoItems from "./components/TodoItems";
import "./App.css";
import { useState } from "react";
import WelcomeMessage from "./components/WelcomeMessage";
function App() {
  const initialTodoItems = [
   
  ];
  /*
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
  */
  const [todoItems, setTodoItems] = useState(initialTodoItems);
  const handleNewItem = (itemName, itemDueDate) => {
    console.log(`New Item Added: ${itemName} Date: ${itemDueDate}`);

    setTodoItems((currValue) =>  [...currValue, {name: itemName, dueDate: itemDueDate}] )
  };
  const handleDeleteItem = (todoItemName) => {
    console.log(`Item Deleted: ${todoItemName}`)
    const newTodoItems = todoItems.filter((item) => item.name !== todoItemName )
    setTodoItems(newTodoItems);
  }
  return (
    <center className="todo-container">
      <AppName />
      <AddTodolist onNewItem={handleNewItem}/>
      {todoItems.length == 0 && <WelcomeMessage />}
      <TodoItems todoItems={todoItems}  onDeleteClick = {handleDeleteItem}/>
    </center>
  );
}

export default App;
