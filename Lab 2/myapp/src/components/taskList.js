import React from "react";
import { useState } from "react/cjs/react.development";
import { Task } from "./task";
import { AddTask } from "./addTask";
import { Timer } from "./timer";

export const TaskList = ({ data }) => {
  const [taskList, setTaskList] = useState(data);

  function removeTask(index){
    if (index <= 0) {
      return;
    }

    const newTaskList = taskList.splice(index,1);

    console.log(newTaskList);
    
    setTaskList(newTaskList);
  }

  return (
    <div id="tasklist">
      <ul id="tasklist">
        {taskList?.map((task, index) => {
          return (
            <li key={task.id}>
              <Task index={index} task={task} removeTask={removeTask}/>
              <div>
                <Timer props_time={task.time} />
            </div>
            </li>
          );
        })}
      </ul>
      <AddTask taskList={taskList} setTaskList={setTaskList} />
    </div>
  );
};


export default TaskList;