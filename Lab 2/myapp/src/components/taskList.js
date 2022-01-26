import React from "react";
import { useState } from "react/cjs/react.development";
import { Task } from "./task";
import { AddTask } from "./addTask";

export const TaskList = ({ data }) => {
  const [taskList, setTaskList] = useState(data);

  return (
    <div id="tasklist">
      <ul id="tasklist">
        {taskList?.map((task, index) => {
          return (
            <li key={task.id}>
              <Task index={index} task={task}/>
            </li>
          );
        })}
      </ul>
      <AddTask taskList={taskList} setTaskList={setTaskList} />
    </div>
  );
};


export default TaskList;