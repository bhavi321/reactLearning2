import styles from "./TodoItems.module.css";

import TodoItem from "./ToDoItem";
const TodoItems = ({ todoItems }) => {
  return (
    <>
      <div className={styles.itemsContainer}>
        {todoItems.map((item) => (
          <TodoItem todoName={item.name} todoDate={item.dueDate} />
        ))}
      </div>
    </>
  );
};
export default TodoItems;
