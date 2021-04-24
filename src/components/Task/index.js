import React, { useState } from "react";
import "./Task.scss";

const Task = ({ description, done, toggleTask, deleteTask }) => {
  return (
    <div className="task">
      <p
        className={`task-description ${done == true ? "is-done" : ""}`}
        onClick={() => {
          toggleTask(description);
        }}
      >
        {description}
      </p>
      <p
        className="task-delete"
        onClick={() => {
          deleteTask(description);
        }}
      >
        🗑
      </p>
    </div>
  );
};

export default Task;
