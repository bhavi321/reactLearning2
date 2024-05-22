import AppName from "./components/AppName";
import AddTodolist from "./components/AddTodolist";
import TodoItems from "./components/TodoItems";
import "./App.css";
import WelcomeMessage from "./components/WelcomeMessage";
import TodoItemsContextProvider from "./store/todo-items-store";


function App() {
  return (
    <TodoItemsContextProvider>
      <center className="todo-container">
        <AppName />
        <AddTodolist />
        <WelcomeMessage />
        <TodoItems />
      </center>
      </TodoItemsContextProvider>
  );
}

export default App;
