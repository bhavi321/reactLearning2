import { useState } from "react";

function AddTodolist({ onNewItem }) {

  const [todoName, setTodoName] = useState();
  const [dueDate, setDueDate] = useState();
  const handleNameChange = (e) => {
    setTodoName(e.target.value);
  }
  const handleDateChange = (e) => {
    setDueDate(e.target.value)
  }
  const handleAddButtonClicked = () => {
    onNewItem(todoName, dueDate);
    setTodoName("");
    setDueDate("");
  }
  return (
    <div className="container text-center">
      <div className="row kg-row">
        <div className="col-4">
          <input type="text" placeholder="Enter Todo Here" onChange = {handleNameChange} value={todoName} />
        </div>
        <div className="col-4">
          <input type="date" onChange={handleDateChange} value={dueDate}/>
        </div>
        <div className="col-2">
          {" "}
          <button
            type="button"
            className="btn btn-success kg-button"
            onClick={handleAddButtonClicked}
          >
            Add
          </button>
        </div>
      </div>
    </div>
  );
}
export default AddTodolist;
