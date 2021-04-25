import React, { useState, useEffect } from "react";
import NewTask from "@components/NewTask";
import Task from "@components/Task";
import ls from "local-storage";
import "./Tasks.scss";

const Tasks = () => {
  const todaysDate = new Date().toLocaleString('en-US', { month: 'long', day: '2-digit' });

  // Set tasks array to what is in local storage or empty, if nothing is in there
  const [tasks, setTasks] = useState(
    JSON.parse(localStorage.getItem("myTasks")) || []
  );

  // Save updates to local storage every time tasks changes
  React.useEffect(() => {
    localStorage.setItem("myTasks", JSON.stringify(tasks));
  }, [tasks]);

  // Toggle true/false of done
  const toggleTask = (description) => {
    const modifiedTasks = tasks.map((task) => {
      if (task.description == description) {
        task.done = !task.done;
      }
      return task;
    });
    setTasks(modifiedTasks);
  };

  // Add a new task object to tasks array
  const addNewTask = (enteredTask) => {
    if (enteredTask.description != "") {
      const newTask = {
        ...enteredTask,
        id: tasks.length.toString(),
      };
      // Wieso geht folgendes nicht?
      // setTasks(tasks.push(newTask));
      const modifiedTasks = [newTask];
      setTasks(tasks.concat(modifiedTasks));
    } else {
      alert("Please enter a description to add a new task.");
    }
  };

  // Find the index of a task object and delete it from tasks array
  const deleteTask = (description) => {
    const modifiedTasks = tasks.map((task) => {
      return task;
    });
    tasks.map((task) => {
      if (task.description == description) {
        const index = tasks.indexOf(task);
        console.log(index);
        modifiedTasks.splice(index, 1);
      }
      return task;
    });
    setTasks(modifiedTasks);
  };

  return (
    <div className="tasks-container">
      <div className="tasks">
        <h1 className="tasks-headline">My tasks 🗒</h1>
        <NewTask addNewTask={addNewTask} />
        {tasks.length > 0 ? <h2 className="tasks-subheadline">Today, {todaysDate}</h2> : ""}
        <div className="tasks-list">
          {tasks.map((task, index) => (
            <Task
              description={task.description}
              done={task.done}
              key={index}
              toggleTask={toggleTask}
              deleteTask={deleteTask}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Tasks;
