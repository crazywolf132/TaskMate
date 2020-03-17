import React from 'react';
import NavBarComponent from './components/NavBar/NavBar';
import {Content, Header} from './style';
import CheckListComponent from './components/CheckList/CheckList';

function CoreComponent(props) {
  return (
    <Content>
      <Header>Today Tasks</Header>
      <NavBarComponent />
      <CheckListComponent />
      <Header upcoming>Upcoming Tasks</Header>
      <CheckListComponent />
    </Content>
  );
}

export default CoreComponent;
