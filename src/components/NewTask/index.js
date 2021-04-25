import React, { useState } from "react";
import "./NewTask.scss";

const NewTask = ({ addNewTask }) => {
  const [enteredDescription, setEnteredDescription] = useState("");

  // Get input from user
  const changeHandler = (event) => {
    setEnteredDescription(event.currentTarget.value);
  };

  // Add a new task object to tasks array (happens in @components/Task/index.js)
  const submitHandler = (event) => {
    event.preventDefault();
    const newTask = {
      description: enteredDescription,
      done: false,
    };
    addNewTask(newTask);
    setEnteredDescription("");
  };

  return (
    <form className="new-task-form">
      <input
        type="text"
        className="new-task-description new-task-shared"
        value={enteredDescription}
        onChange={changeHandler}
        placeholder='What needs to get done?'
      />
      <button
        type="submit"
        className="new-task-submit new-task-shared"
        onClick={submitHandler}
      >
        Add Task
      </button>
    </form>
  );
};

export default NewTask;
