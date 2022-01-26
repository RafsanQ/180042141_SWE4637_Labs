import React from "react";
import { useState } from "react/cjs/react.development";
import { TaskForm } from "./taskForm";

export const EditTaskForm = ({ taskName, taskCategory, updateTask, setEditTaskForm }) => {
  const [name, setName] = useState(taskName);
  const [category, setCategory] = useState(taskCategory);

  return (
    <div>
      <TaskForm
        name={name}
        category={category}
        setName={setName}
        setCategory={setCategory}
      />

      <div>
        <button id="edit-task-button" onClick={() => updateTask({ name: name, category: category })}>
          Update
        </button>
        <button onClick={() => setEditTaskForm(false)}>
          Cancel
        </button>
      </div>
    </div>
  );
};

export default EditTaskForm;