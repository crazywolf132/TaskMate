import React from 'react';

import {MainStyle, Header} from './style';
import UsersComponent from './components/Users/Users';
import TasksListComponent from './components/Meetings/MeetingList';

function RightBar(props) {
  return (
    <MainStyle>
      <UsersComponent />
      <Header>Schedule</Header>
      <TasksListComponent />
    </MainStyle>
  );
}

export default RightBar;
