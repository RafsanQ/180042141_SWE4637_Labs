import React from "react";
import { useState } from "react/cjs/react.development";
import EditTaskForm from "./editTaskForm";
import { Timer } from "./timer";


export const Task = (props) => {
  const [task, setTask] = useState(props.task);
  const [isEditing, setIsEditing] = useState(false);


  const updateTask = ({ name, category }) => {
    setTask({ ...task, name: name, category: category });
    setIsEditing(false);
  };

  return (
    <>
      {isEditing ? (
        <EditTaskForm
          taskName={task.name}
          taskCategory={task.category}
          updateTask={updateTask}
          setIsEditing={setIsEditing}
        />
      ) : (
        <div>
          <div>
            <p>{task?.name}</p>
            <p>{task?.category}</p>
            <div>
              <button onClick={() => setIsEditing(true)}>Edit</button>
              <button onClick={() => props.removeTask(props.index)}>Remove</button>
            </div>
          </div>

         
          <div>
            <Timer props_time={task?.time} />
          </div>
        </div>
      )}
    </>
  );
};

export default Task;