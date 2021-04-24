import React, { useState } from "react";
import NewTask from "@components/NewTask";
import Task from "@components/Task";

import "./Tasks.scss";

const Tasks = () => {
  const [tasks, setTasks] = useState([
    {
      description: "Grocery shopping",
      done: false,
    },
    {
      description: "Do laundry",
      done: false,
    },
    {
      description: "Get bday present for Kathi",
      done: false,
    }
  ]);

  const toggleTask = (description) => {
    const modifiedTasks = tasks.map((task) => {
      if (task.description == description) {
        task.done = !task.done;
      }
      return task;
    });
    setTasks(modifiedTasks);
  };

  const addNewTask = (enteredTask) => {
    if (enteredTask.description != '') {
      const newTask = {
        ...enteredTask,
        id: tasks.length.toString(),
      };
      // Wieso geht folgendes nicht?
      // setTasks(tasks.push(newTask));
      const modifiedTasks = [newTask];
      setTasks(tasks.concat(modifiedTasks));
    } else {
      alert('Please enter a description to add a new task.');
    }
  };

const deleteTask = (description) => {
    const modifiedTasks = tasks.map(task => {return task});
    tasks.map((task) => {
      if (task.description == description) {
        const index = tasks.indexOf(task);
        console.log(index);
        modifiedTasks.splice(index, 1);
      }
      return task;
    });
    setTasks(modifiedTasks);
  }

  // const EmptyState = () => {
  //   return <p>Nothing here yet. Add a task now!</p>;
  // }

  // const FullList = () => {
  //   return (
  //     {tasks.map((task, index) => (
  //       <Task
  //         description={task.description}
  //         done={task.done}
  //         key={index}
  //         toggleTask={toggleTask}
  //       />
  //     ))}
  //   );
  // }

  // const TaskCheck = () => {
  //   if (tasks.count == 0) {
  //     return <EmptyState />;
  //   }
  //   return <FullList />;
  // }

  return (
    <div className="tasks-container">
      <div className="tasks">
        <h1 className="tasks-headline">My tasks 🗒</h1>
        <NewTask addNewTask={addNewTask} />
        <h2 className="tasks-subheadline">Today</h2>
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
