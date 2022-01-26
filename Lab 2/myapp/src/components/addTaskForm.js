import React from "react";
import { useState } from "react/cjs/react.development";
import { TaskForm } from "./taskForm";



export const AddTaskForm = ({ addTask }) => {

  const [name, setName] = useState("");
  const [category, setCategory] = useState("");

  const createTask = () => {
      let task = {};
      task.name = name;
      task.category = category;
      task.time = 0;
      addTask(task);
  }

  return (
    <div className="add-task-form">
      <TaskForm
        name={name}
        category={category}
        setName={setName}
        setCategory={setCategory}
      />
      <div>
        <button onClick={createTask}>Create</button>
        <button >Cancel</button>
      </div>
    </div>
  );
};

export default AddTaskForm;