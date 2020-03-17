import React from 'react';
import {Task, TaskItem, TaskLabel, TaskInfo, TaskTag} from './style';

function CheckItemComponent(props) {
  return (
    <Task>
      <TaskItem name="task" id="t" />
      <TaskInfo for="t">
        <TaskLabel>Create a Dashboard Design</TaskLabel>
      </TaskInfo>
      <TaskTag status="approved">Approved</TaskTag>
    </Task>
  );
}

export default CheckItemComponent;
