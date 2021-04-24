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
    <div className="new-task-container">
      <form className="new-task-form">
        <input
          type="text"
          className="new-task-description"
          onChange={changeHandler}
        />
        <button
          type="submit"
          className="new-task-submit"
          onClick={submitHandler}
        >
          Add Task
        </button>
      </form>
    </div>
  );
};

export default NewTask;
