import React, { useState, useEffect } from "react";
import NewTask from "@components/NewTask";
import Task from "@components/Task";
import ls from "local-storage";
import { useLocation } from "react-router-dom";
// import {SortableContainer, SortableElement} from 'react-sortable-hoc';
// import arrayMove from 'array-move';
import "./Tasks.scss";

const Tasks = () => {
  const todaysDate = new Date().toLocaleString('en-US', { month: 'long', day: '2-digit' });

  // Set tasks array to what is in local storage or empty, if nothing is in there
  const [tasks, setTasks] = useState(
    JSON.parse(localStorage.getItem("myTasks")) || []
  );

  // Save updates to local storage every time tasks changes
  useEffect(() => {
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
      //const newTask = {
        // ...enteredTask,
        // id: tasks.length.toString(),
        // // position: tasks.length.toString(),
      //};
      const newTask = Object.assign({}, enteredTask, { id: tasks.length.toString() })
      
      setTasks(tasks.concat(newTask));
    } else {
      alert("Please enter a description to add a new task.");
    }
  };

  // Find the index of a task object and delete it from tasks array
  const deleteTask = (description) => {
    const modifiedTasks = tasks.filter((task) => task.description != description);
    setTasks(modifiedTasks);
  };

  // const SortableItem = SortableElement(({value, index}) => {
  //   <Task
  //     description={value.description}
  //     done={value.done}
  //     key={value.id}
  //     index={index}
  //     toggleTask={toggleTask}
  //     deleteTask={deleteTask}
  //   />
  // })

  // const SortableList = SortableContainer(({items}) => {
  //   return (
  //     <div className="tasks-list">
  //       {items.sort((a, b) => a.position - b.position)
  //       .map((value, index) => (
  //         <SortableItem
  //           value={value}
  //           index={index}
  //           key={value.id}
  //         />
  //       ))}
  //     </div>
  //   )
  // })

  // const onSortEnd = ({oldIndex, newIndex}) => {
  //   let array = arrayMove(tasks, oldIndex, newIndex)
  //   for (let i = 0; i < array.length; i++) {
  //     array[i].position = i;
  //   }
  //   setTasks(array);
  // }

  return (
    <div className="tasks-container">
      <div className="tasks">
        <h1 className="tasks-headline">My tasks 🗒</h1>
        <NewTask addNewTask={addNewTask} />
        {tasks.length > 0 ? <h2 className="tasks-subheadline">Today, {todaysDate}</h2> : ""}
        {/* <SortableList items={tasks} onSortEnd={onSortEnd} axis='xy' /> */}
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
