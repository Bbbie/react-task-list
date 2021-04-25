import React, { useState } from "react";
import "./NewTask.scss";

const NewTask = ({ addNewTask }) => {
  const [enteredDescription, setEnteredDescription] = useState("");

  const changeHandler = (event) => {
    setEnteredDescription(event.currentTarget.value);
    console.log(setEnteredDescription);
  };

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
        placeholder='Add a description'
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
