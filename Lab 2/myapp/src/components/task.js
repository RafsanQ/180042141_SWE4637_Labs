import React from "react";
import { useState } from "react/cjs/react.development";
import EditTaskForm from "./editTaskForm";



export const Task = (props) => {
  const [task, setTask] = useState(props.task);
  const [isEditing, setIsEditing] = useState(false);


  const updateTask = ({ name, category }) => {
    setTask({ name: name, category: category });
    setIsEditing(false);
  };

  return (
    <>
      {isEditing ? (
        <EditTaskForm
          taskName={task.name}
          taskCategory={task.category}
          updateTask={updateTask}
          setEditTaskForm={setIsEditing}
        />
      ) : (
        <div>
          <div>
            <p>Name: <b>{task.name}</b></p>
            <p>Category: <b>{task.category}</b></p>
            <div>
              <button onClick={() => setIsEditing(true)}>Edit</button>
              <button onClick={() => props.removeTask(props.index+1)}>Remove</button>
            </div>
          </div>

         
          
        </div>
      )}
    </>
  );
};

export default Task;