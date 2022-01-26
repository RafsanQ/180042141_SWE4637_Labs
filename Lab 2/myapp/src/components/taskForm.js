import React from "react";

export const TaskForm = ({ name, category, setName, setCategory }) => {
  
  return (
    <form>
      <label htmlFor="name">
        Name
        <input
          type="text"
          onChange={(e) => {
            setName(e.target.value);
          }}
          placeholder={name}
          text={name}
        ></input>
      </label>
      <label className="category-input-label" htmlFor="name">
        Category
        <input
          type="text"
          onChange={(e) => {
            setCategory(e.target.value);
          }}
          placeholder={category}
          text={category}
        ></input>
      </label>
      
    </form>
  );
};

export default TaskForm;